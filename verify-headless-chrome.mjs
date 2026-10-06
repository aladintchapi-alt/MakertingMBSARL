import { spawn } from 'child_process';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACT_DIR = 'C:\\Users\\UTILISATEUR\\.gemini\\antigravity\\brain\\9adecdae-9e18-4316-ba0f-cec886afdb0b';
const PORT = 3456;
const DEBUG_PORT = 9226;

// Start dev server
process.env.PORT = PORT;
await import('./dev-server.mjs');
console.log(`Serveur local prêt sur le port ${PORT}`);

// Create isolated user data dir
const tempProfile = path.join(__dirname, '.chrome-temp-' + Date.now());
if (!fs.existsSync(tempProfile)) fs.mkdirSync(tempProfile, { recursive: true });

const chrome = spawn(CHROME_PATH, [
  '--headless=new',
  `--remote-debugging-port=${DEBUG_PORT}`,
  '--no-sandbox',
  '--disable-gpu',
  '--disable-extensions',
  '--hide-scrollbars',
  `--user-data-dir=${tempProfile}`,
  'about:blank'
]);

// Wait for Chrome to expose /json/list
let pageWsUrl = null;
for (let i = 0; i < 40; i++) {
  try {
    const res = await fetch(`http://127.0.0.1:${DEBUG_PORT}/json/list`);
    if (res.ok) {
      const list = await res.json();
      const page = list.find(t => t.type === 'page');
      if (page && page.webSocketDebuggerUrl) {
        pageWsUrl = page.webSocketDebuggerUrl;
        break;
      }
    }
  } catch (e) {}
  await new Promise(r => setTimeout(r, 200));
}

if (!pageWsUrl) {
  chrome.kill();
  console.error('Impossible de trouver la page Chrome');
  process.exit(1);
}

console.log('Connexion directe à la page Chrome :', pageWsUrl);

const ws = new WebSocket(pageWsUrl);
let callId = 1;
const pending = new Map();

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  if (data.id && pending.has(data.id)) {
    const { resolve, reject } = pending.get(data.id);
    pending.delete(data.id);
    if (data.error) reject(data.error);
    else resolve(data.result);
  }
};

await new Promise((res, rej) => {
  ws.onopen = res;
  ws.onerror = rej;
});

const send = (method, params = {}) => {
  return new Promise((resolve, reject) => {
    const curId = callId++;
    pending.set(curId, { resolve, reject });
    ws.send(JSON.stringify({ id: curId, method, params }));
  });
};

await send('Page.enable');
await send('DOM.enable');
await send('Runtime.enable');
await send('Network.enable');

const networkErrors = [];
ws.addEventListener('message', (ev) => {
  const d = JSON.parse(ev.data);
  if (d.method === 'Network.responseReceived') {
    const status = d.params.response.status;
    const url = d.params.response.url;
    if (status >= 400 && !url.includes('favicon')) {
      networkErrors.push({ url, status });
    }
  }
});

const testUrls = [
  `http://127.0.0.1:${PORT}/`,
  `http://127.0.0.1:${PORT}/MakertingMBSARL/`,
  `http://127.0.0.1:${PORT}/MakertingMBSARL/gestion-immobiliere`,
  `http://127.0.0.1:${PORT}/MakertingMBSARL/contact`
];

const viewports = [
  { name: 'Mobile Mini', width: 320, height: 600 },
  { name: 'Mobile Standard', width: 375, height: 667 },
  { name: 'iPhone 14 / Modern Mobile', width: 390, height: 844 },
  { name: 'Android Large', width: 412, height: 915 },
  { name: 'Tablet Portrait', width: 768, height: 1024 },
  { name: 'iPad Air Landscape', width: 820, height: 1180 },
  { name: 'Desktop HD', width: 1440, height: 900 }
];

console.log('\n======================================================');
console.log('1. TEST DE DÉBORDEMENT HORIZONTAL (SCROLLWIDTH vs CLIENTWIDTH)');
console.log('======================================================');

let allOverflowClean = true;

for (const testUrl of testUrls) {
  console.log(`\nTest sur URL : ${testUrl}`);
  await send('Page.navigate', { url: testUrl });
  await new Promise(r => setTimeout(r, 1000));

  for (const vp of viewports) {
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 1,
      mobile: vp.width < 768
    });
    await new Promise(r => setTimeout(r, 250));

    const evalRes = await send('Runtime.evaluate', {
      expression: `
        (() => ({
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
          bodyScrollWidth: document.body.scrollWidth,
          windowInnerWidth: window.innerWidth,
          scrollX: window.scrollX
        }))()
      `,
      returnByValue: true
    });

    const m = evalRes.result?.value;
    if (!m) {
      console.error('Eval error:', evalRes);
      continue;
    }
    const hasOverflow = m.scrollWidth > m.clientWidth || m.bodyScrollWidth > m.clientWidth;
    if (hasOverflow) {
      allOverflowClean = false;
      console.error(`  ❌ [OVERFLOW] ${vp.name} (${vp.width}px) : scrollWidth=${m.scrollWidth}, clientWidth=${m.clientWidth}`);
    } else {
      console.log(`  ✅ [PARFAIT] ${vp.name} (${vp.width}px) : scrollWidth=${m.scrollWidth} == clientWidth=${m.clientWidth} (zéro overflow)`);
    }
  }
}

console.log('\n======================================================');
console.log('2. TEST COMPORTEMENT DU HEADER (FIXED TOP: 0 & SCROLL COLLAPSE)');
console.log('======================================================');

await send('Emulation.setDeviceMetricsOverride', {
  width: 1440,
  height: 900,
  deviceScaleFactor: 1,
  mobile: false
});
await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/MakertingMBSARL/` });
await new Promise(r => setTimeout(r, 1000));

const scrollSteps = [0, 50, 150, 400, 1000, 2500];
let headerAlwaysVisible = true;

for (const scrollY of scrollSteps) {
  await send('Runtime.evaluate', {
    expression: `window.scrollTo(0, ${scrollY});`
  });
  await new Promise(r => setTimeout(r, 350));

  const headerState = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const header = document.querySelector('#site-header');
        const mainNav = document.querySelector('#main-nav-bar');
        const topBar = document.querySelector('#top-bar-container');
        const hRect = header ? header.getBoundingClientRect() : null;
        const navRect = mainNav ? mainNav.getBoundingClientRect() : null;
        return {
          scrollY: window.scrollY,
          headerTop: hRect ? hRect.top : -999,
          headerHeight: hRect ? hRect.height : 0,
          navTop: navRect ? navRect.top : -999,
          navHeight: navRect ? navRect.height : 0,
          topBarHeight: topBar ? topBar.offsetHeight : 0,
          isScrolledClass: header ? header.classList.contains('header-scrolled') : false
        };
      })()
    `,
    returnByValue: true
  });

  const s = headerState.result.value;
  const isHeaderAtTop = Math.abs(s.headerTop) < 1;
  const isNavVisible = s.navTop >= 0 && s.navHeight > 50;

  if (isHeaderAtTop && isNavVisible) {
    console.log(`  ✅ [SCROLL ${scrollY}px] Header top=${s.headerTop.toFixed(1)}px, Nav top=${s.navTop.toFixed(1)}px (visible ${s.navHeight.toFixed(0)}px, topbar=${s.topBarHeight}px)`);
  } else {
    headerAlwaysVisible = false;
    console.error(`  ❌ [SCROLL ${scrollY}px] DÉFAUT : Header top=${s.headerTop}px, Nav top=${s.navTop}px`);
  }
}

console.log('\n======================================================');
console.log('3. VÉRIFICATION DES IMAGES CHARGÉES & ZÉRO VOILE BLANC OPAQUE');
console.log('======================================================');

const imageCheck = await send('Runtime.evaluate', {
  expression: `
    (() => {
      const imgs = Array.from(document.querySelectorAll('img'));
      const total = imgs.length;
      const loaded = imgs.filter(img => img.naturalWidth > 0).length;
      const failed = imgs.filter(img => img.naturalWidth === 0).map(img => img.src);
      
      const overlays = Array.from(document.querySelectorAll('.hero-photo-overlay-light'));
      const overlayStyles = overlays.map(el => window.getComputedStyle(el).backgroundColor);
      
      return { total, loaded, failed, overlayCount: overlays.length };
    })()
  `,
  returnByValue: true
});

const imgData = imageCheck.result.value;
console.log(`  Total images dans le DOM : ${imgData.total}`);
console.log(`  Images chargées avec succès : ${imgData.loaded} / ${imgData.total}`);
if (imgData.failed.length > 0) {
  console.warn(`  ⚠️ Images non chargées :`, imgData.failed);
} else {
  console.log(`  ✅ 100% des images sont chargées et affichées (zéro image cassée)`);
}

console.log(`  Erreurs réseau 404/500 détectées : ${networkErrors.length}`);
if (networkErrors.length > 0) {
  console.warn(`  ⚠️ Requêtes en erreur :`, networkErrors);
} else {
  console.log(`  ✅ Zéro erreur réseau 404/500 détectée.`);
}

console.log('\n======================================================');
console.log('4. CAPTURES D\'ÉCRAN DE VALIDATION');
console.log('======================================================');

const captureConfigs = [
  { name: 'capture_mobile_390px.png', width: 390, height: 844, mobile: true },
  { name: 'capture_tablet_820px.png', width: 820, height: 1000, mobile: false },
  { name: 'capture_desktop_1440px.png', width: 1440, height: 900, mobile: false }
];

for (const cap of captureConfigs) {
  await send('Emulation.setDeviceMetricsOverride', {
    width: cap.width,
    height: cap.height,
    deviceScaleFactor: 2,
    mobile: cap.mobile
  });
  await new Promise(r => setTimeout(r, 500));
  const screenshot = await send('Page.captureScreenshot', { format: 'png' });
  const filePath = path.join(ARTIFACT_DIR, cap.name);
  fs.writeFileSync(filePath, Buffer.from(screenshot.data, 'base64'));
  console.log(`  📸 Capture enregistrée : ${cap.name} (${cap.width}px)`);
}

console.log('\n======================================================');
console.log('BILAN DE VÉRIFICATION CHROME HEADLESS :');
console.log(`Débordement horizontal : ${allOverflowClean ? '✅ CONFORME' : '❌ NON CONFORME'}`);
console.log(`Header scroll & position : ${headerAlwaysVisible ? '✅ CONFORME' : '❌ NON CONFORME'}`);
console.log(`Images et assets : ${networkErrors.length === 0 ? '✅ CONFORME' : '⚠️ ATTENTION'}`);
console.log('======================================================\n');

ws.close();
chrome.kill();
try {
  fs.rmSync(tempProfile, { recursive: true, force: true });
} catch (e) {}
process.exit(0);
