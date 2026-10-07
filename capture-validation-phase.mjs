import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACT_DIR = 'C:\\Users\\UTILISATEUR\\.gemini\\antigravity\\brain\\9adecdae-9e18-4316-ba0f-cec886afdb0b';
const PORT = 3458;
const DEBUG_PORT = 9228;

// Démarre dev server
process.env.PORT = PORT;
await import('./dev-server.mjs');
console.log(`Serveur local prêt sur le port ${PORT}`);

// Crée dossier profil temporaire isolé
const tempProfile = path.join(__dirname, '.chrome-temp-phase-' + Date.now());
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

// Attente de Chrome
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

const consoleErrors = [];
ws.addEventListener('message', (ev) => {
  const d = JSON.parse(ev.data);
  if (d.method === 'Runtime.consoleAPICalled' && d.params.type === 'error') {
    consoleErrors.push(d.params.args.map(a => a.value || a.description).join(' '));
  }
});

async function saveScreenshot(filename, clip = null) {
  const params = { format: 'png' };
  if (clip) params.clip = clip;
  const shot = await send('Page.captureScreenshot', params);
  const outPath = path.join(ARTIFACT_DIR, filename);
  fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
  console.log(`  📸 Capture enregistrée : ${filename}`);
  return outPath;
}

console.log('\n======================================================');
console.log('CHANTIER 1 : TEST & CAPTURES DU HEADER MOBILE (< 1024px)');
console.log('======================================================');

// 1. Mobile 390px
await send('Emulation.setDeviceMetricsOverride', {
  width: 390,
  height: 844,
  deviceScaleFactor: 2,
  mobile: true
});

await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/MakertingMBSARL/` });
await new Promise(r => setTimeout(r, 1500));

// Vérifier que la barre d'information est strictement masquée
const topbarCheck = await send('Runtime.evaluate', {
  expression: `
    (() => {
      const topbar = document.querySelector('#top-bar-container');
      const cs = window.getComputedStyle(topbar);
      const rootTopBarH = getComputedStyle(document.documentElement).getPropertyValue('--topbar-h').trim();
      const burger = document.querySelector('.burger-btn');
      const bcs = burger ? window.getComputedStyle(burger) : null;
      return {
        display: cs.display,
        visibility: cs.visibility,
        height: topbar.offsetHeight,
        rootTopBarH,
        burgerSize: bcs ? { width: bcs.width, height: bcs.height } : null
      };
    })()
  `,
  returnByValue: true
});
console.log('État de la Topbar sur mobile 390px :', topbarCheck.result.value);

// Capture du Header mobile
await saveScreenshot('capture_mobile_header_closed_390px.png', { x: 0, y: 0, width: 390, height: 180, scale: 2 });

// Ouvrir le menu mobile
await send('Runtime.evaluate', {
  expression: `
    (() => {
      const btn = document.querySelector('.burger-btn');
      if (btn) btn.click();
    })()
  `
});
await new Promise(r => setTimeout(r, 600));

// Capture du Menu Mobile avec "Infos pratiques"
await saveScreenshot('capture_mobile_menu_open_390px.png');

// Fermer le menu mobile
await send('Runtime.evaluate', {
  expression: `
    (() => {
      const btn = document.querySelector('.burger-btn');
      if (btn) btn.click();
    })()
  `
});
await new Promise(r => setTimeout(r, 400));

console.log('\n======================================================');
console.log('CHANTIER 4 : CARTE INTERACTIVE HYPER-PREMIUM & SATELLITE');
console.log('======================================================');

// Naviguer vers /contact en desktop pour la carte
await send('Emulation.setDeviceMetricsOverride', {
  width: 1440,
  height: 900,
  deviceScaleFactor: 2,
  mobile: false
});

await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/MakertingMBSARL/contact` });
await new Promise(r => setTimeout(r, 2000));

// Scroll direct avec Lenis vers la carte
await send('Runtime.evaluate', {
  expression: `
    (() => {
      const el = document.querySelector('#contact-interactive-map');
      if (el) {
        if (window.lenis) {
          window.lenis.scrollTo(el, { immediate: true });
        } else {
          el.scrollIntoView();
        }
      }
    })()
  `
});
await new Promise(r => setTimeout(r, 2500));

// Capture de la carte en mode Plan (Vectoriel)
await saveScreenshot('capture_map_mode_plan_contact.png');

// Basculer en mode Satellite
await send('Runtime.evaluate', {
  expression: `
    (() => {
      const satBtn = document.querySelector('button.map-mode-pill[data-mode="satellite"]');
      if (satBtn) satBtn.click();
    })()
  `
});
await new Promise(r => setTimeout(r, 2500));

// Capture de la carte en mode Satellite
await saveScreenshot('capture_map_mode_satellite_contact.png');

// Activer le mode 3D (pitch 60°)
await send('Runtime.evaluate', {
  expression: `
    (() => {
      const btn3d = document.querySelector('#map-btn-3d');
      if (btn3d) btn3d.click();
    })()
  `
});
await new Promise(r => setTimeout(r, 1500));

// Capture de la carte en mode 3D
await saveScreenshot('capture_map_mode_3d_contact.png');

console.log('\n======================================================');
console.log('CHANTIER 5 : SCÈNE 3D IPHONE 18 PRO MAX & ÉCRANS');
console.log('======================================================');

// Naviguer vers l'Accueil pour la section SaaS 3D
await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/MakertingMBSARL/` });
await new Promise(r => setTimeout(r, 2000));

// Scroll vers la section 3D
await send('Runtime.evaluate', {
  expression: `
    (() => {
      const el = document.querySelector('#app-section');
      if (el) {
        if (window.lenis) {
          window.lenis.scrollTo(el, { immediate: true });
        } else {
          el.scrollIntoView();
        }
      }
    })()
  `
});
await new Promise(r => setTimeout(r, 2500));

// Capture 1 : iPhone Titane Noir & Écran Dashboard
await saveScreenshot('capture_iphone18_dashboard_titane_noir.png');

// Basculer vers Titane Bourgogne & Écran Paiements Mobile Money
await send('Runtime.evaluate', {
  expression: `
    (() => {
      const burgBtn = document.querySelector('#iphone-finishes-selector button[data-finish="burgundy"]');
      if (burgBtn) burgBtn.click();
      const mCard = document.querySelector('#step-btn-paiements');
      if (mCard) mCard.click();
    })()
  `
});
await new Promise(r => setTimeout(r, 1800));

// Capture 2 : iPhone Titane Bourgogne & Mobile Money
await saveScreenshot('capture_iphone18_momo_titane_bourgogne.png');

// Basculer vers Titane Glacier & Écran Quittances OHADA
await send('Runtime.evaluate', {
  expression: `
    (() => {
      const glacBtn = document.querySelector('#iphone-finishes-selector button[data-finish="glacier"]');
      if (glacBtn) glacBtn.click();
      const qCard = document.querySelector('#step-btn-quittances');
      if (qCard) qCard.click();
    })()
  `
});
await new Promise(r => setTimeout(r, 1800));

// Capture 3 : iPhone Titane Glacier & Quittances OHADA
await saveScreenshot('capture_iphone18_quittances_titane_glacier.png');

console.log('\n======================================================');
console.log('RAPPORT DES ERREURS CONSOLE PENDANT LES TESTS :');
console.log(`Erreurs trouvées : ${consoleErrors.length}`);
if (consoleErrors.length > 0) {
  console.warn('Erreurs :', consoleErrors);
} else {
  console.log('✅ ZÉRO ERREUR CONSOLE (Console propre)');
}
console.log('======================================================\n');

ws.close();
chrome.kill();
try {
  fs.rmSync(tempProfile, { recursive: true, force: true });
} catch (e) {}
process.exit(0);
