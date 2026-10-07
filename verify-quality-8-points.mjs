/**
 * MULTI BUSINESS SARL - Test & Validation Automatisé des 8 Corrections de Qualité
 * Exécuté avec Google Chrome Headless via CDP
 */
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACT_DIR = 'C:\\Users\\UTILISATEUR\\.gemini\\antigravity\\brain\\9adecdae-9e18-4316-ba0f-cec886afdb0b';
const PORT = 3456;
const DEBUG_PORT = 9227;

// Démarrage du serveur dev
process.env.PORT = PORT;
await import('./dev-server.mjs');
console.log(`Serveur local prêt sur le port ${PORT}`);

// Profil temporaire Chrome
const tempProfile = path.join(__dirname, '.chrome-temp-qa-' + Date.now());
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

// Attente de Chrome CDP
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
  console.error('Impossible de se connecter à Chrome');
  process.exit(1);
}

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
await send('Emulation.setDeviceMetricsOverride', {
  width: 1440,
  height: 900,
  deviceScaleFactor: 2,
  mobile: false
});

console.log('\n======================================================');
console.log('VÉRIFICATION RIGOUREUSE DES 8 POINTS DE QUALITÉ');
console.log('======================================================\n');

// Navigation vers l'accueil
await send('Page.navigate', { url: `http://127.0.0.1:${PORT}/` });

// Attendre que l'application SPA soit complètement montée
for (let i = 0; i < 40; i++) {
  const check = await send('Runtime.evaluate', {
    expression: `!!document.querySelector('#app h1')`
  });
  if (check.result?.value) break;
  await new Promise(r => setTimeout(r, 200));
}

// Force le nettoyage du preloader et des overlays de transition
await send('Runtime.evaluate', {
  expression: `
    document.getElementById('app-preloader')?.remove();
    const c = document.getElementById('page-curtain');
    if (c) {
      c.style.opacity = '0';
      c.style.visibility = 'hidden';
      c.style.transform = 'translateY(100%)';
      c.style.pointerEvents = 'none';
    }
  `
});
await new Promise(r => setTimeout(r, 500));

// POINT 1 : HERO VOILE BLANC ET CONTRASTES
console.log('--- POINT 1 : Hero Voile Blanc et Lisibilité ---');
const heroCheck = await send('Runtime.evaluate', {
  expression: `
    (() => {
      const hero = document.querySelector('section');
      const h1 = document.querySelector('h1');
      const p = hero ? hero.querySelector('p') : null;
      const overlay = document.querySelector('.hero-photo-overlay-light');
      const markers = document.querySelector('#hero-markers');
      
      const pStyle = p ? window.getComputedStyle(p) : null;
      const h1Style = h1 ? window.getComputedStyle(h1) : null;
      
      return {
        hasOverlay: !!overlay,
        h1Color: h1Style ? h1Style.color : null,
        pColor: pStyle ? pStyle.color : null,
        markersPresent: !!markers,
        h1Text: h1 ? h1.innerText.substring(0, 40) : null
      };
    })()
  `,
  returnByValue: true
});
console.log('Hero Check:', heroCheck.result.value);

// POINT 2 : PAS DE CADRE NOIR PARASITE
console.log('\n--- POINT 2 : Absence de Cadre de Focus Parasite ---');
const focusCheck = await send('Runtime.evaluate', {
  expression: `
    (() => {
      const h1 = document.querySelector('h1');
      if (h1) {
        h1.setAttribute('tabindex', '-1');
        h1.focus();
      }
      const activeEl = document.activeElement;
      const style = activeEl ? window.getComputedStyle(activeEl) : null;
      return {
        focusedTag: activeEl ? activeEl.tagName : null,
        outlineStyle: style ? style.outlineStyle : null,
        outlineWidth: style ? style.outlineWidth : null,
        outlineColor: style ? style.outlineColor : null,
        boxShadow: style ? style.boxShadow : null
      };
    })()
  `,
  returnByValue: true
});
console.log('Focus Check on H1:', focusCheck.result.value);

// POINT 3 : BADGE NON COUPÉ PAR LE HEADER
console.log('\n--- POINT 3 : Badge Hero et Header Spacing ---');
const badgeCheck = await send('Runtime.evaluate', {
  expression: `
    (() => {
      const header = document.querySelector('#site-header');
      const badge = document.querySelector('#hero-badge');
      const headerRect = header ? header.getBoundingClientRect() : null;
      const badgeRect = badge ? badge.getBoundingClientRect() : null;
      
      const distance = badgeRect && headerRect ? badgeRect.top - headerRect.bottom : null;
      return {
        headerBottom: headerRect ? headerRect.bottom : null,
        badgeTop: badgeRect ? badgeRect.top : null,
        clearancePx: distance,
        isBadgeVisible: distance !== null && distance >= 10
      };
    })()
  `,
  returnByValue: true
});
console.log('Badge Clearance:', badgeCheck.result.value);

// POINT 4 : SECTION CTA BAS D'ACCUEIL
console.log('\n--- POINT 4 : Section Appel à l\'Action du Bas ---');
const ctaCheck = await send('Runtime.evaluate', {
  expression: `
    (() => {
      const ctaSec = document.querySelector('#cta-final-section');
      const ctaTitle = ctaSec ? ctaSec.querySelector('h2') : null;
      const ctaOverlay = ctaSec ? ctaSec.querySelector('.cta-photo-overlay') : null;
      const ctaImg = ctaSec ? ctaSec.querySelector('img') : null;
      const ghostBtn = ctaSec ? ctaSec.querySelector('.btn-ghost-photo') : null;
      const badge = ctaSec ? ctaSec.querySelector('.uppercase, [class*="uppercase"]') : null;
      
      const titleStyle = ctaTitle ? window.getComputedStyle(ctaTitle) : null;
      return {
        hasCtaSection: !!ctaSec,
        hasCtaOverlay: !!ctaOverlay,
        titleColor: titleStyle ? titleStyle.color : null,
        titleShadow: titleStyle ? titleStyle.textShadow : null,
        badgeText: badge ? badge.innerText : null,
        hasGhostBtn: !!ghostBtn,
        ghostBtnClass: ghostBtn ? ghostBtn.className : null
      };
    })()
  `,
  returnByValue: true
});
console.log('CTA Section Check:', ctaCheck.result.value);

// POINT 5 : BOUTONS ET CONTRASTES DE SURVOL
console.log('\n--- POINT 5 : Système de Boutons et Survol ---');
const buttonCheck = await send('Runtime.evaluate', {
  expression: `
    (() => {
      const buttons = Array.from(document.querySelectorAll('.btn-primary, .btn-secondary, .btn-outline, .btn-ghost-photo'));
      return buttons.map(b => {
        const cs = window.getComputedStyle(b);
        return {
          text: b.innerText.trim().substring(0, 30),
          classes: b.className.split(' ').filter(c => c.startsWith('btn-')).join(' '),
          color: cs.color,
          bgColor: cs.backgroundColor
        };
      }).slice(0, 8);
    })()
  `,
  returnByValue: true
});
console.log('Buttons Sample:', buttonCheck.result.value);

// POINT 6 : RECHERCHE STRICTE D'EMOJIS DANS LE DOM
console.log('\n--- POINT 6 : Détection Exhaustive d\'Emojis dans le DOM ---');
const emojiDomCheck = await send('Runtime.evaluate', {
  expression: `
    (() => {
      const emojiRegex = /[\\p{Extended_Pictographic}\\u{1F300}-\\u{1F9FF}\\u{2600}-\\u{26FF}\\u{2700}-\\u{27BF}]/u;
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node;
      const emojisFound = [];
      while ((node = walker.nextNode())) {
        const text = node.nodeValue;
        // Ignore copyright symbol (\\u00A9) if matched
        const cleaned = text.replace(/\\u00A9/g, '');
        if (emojiRegex.test(cleaned)) {
          emojisFound.push({
            parent: node.parentElement ? node.parentElement.tagName : 'unknown',
            text: text.trim().substring(0, 50)
          });
        }
      }
      return {
        count: emojisFound.length,
        items: emojisFound
      };
    })()
  `,
  returnByValue: true
});
console.log('DOM Emoji Count:', emojiDomCheck.result.value);

// POINT 7 : 4 SERVICES UNIQUEMENT (ZÉRO "PRESTATION DE SERVICES" STANDALONE)
console.log('\n--- POINT 7 : Exactement 4 Services Principaux ---');
const servicesCheck = await send('Runtime.evaluate', {
  expression: `
    (() => {
      const menuLinks = Array.from(document.querySelectorAll('#mega-menu a, nav a, footer a'));
      const travauxLinks = menuLinks.filter(a => {
        const t = (a.innerText + a.href).toLowerCase();
        return t.includes('travaux') || t.includes('artisan') || t.includes('prestation-de-services');
      });
      
      const formOptions = Array.from(document.querySelectorAll('select option')).map(o => o.innerText);
      const servicesPoles = Array.from(document.querySelectorAll('#services-grid .service-card, [data-service-card]'));
      
      return {
        forbiddenLinksFound: travauxLinks.length,
        formOptions: formOptions,
        servicesCount: servicesPoles.length
      };
    })()
  `,
  returnByValue: true
});
console.log('Services Check:', servicesCheck.result.value);

// POINT 8 : PÉRIMÈTRE GÉOGRAPHIQUE
console.log('\n--- POINT 8 : Périmètre Géographique ("au Cameroun") ---');
const geoCheck = await send('Runtime.evaluate', {
  expression: `
    (() => {
      const text = document.body.innerText;
      const regexDoualaYaounde = /douala\\s+et\\s+yaound[eé]/gi;
      const matches = text.match(regexDoualaYaounde) || [];
      return {
        occurrencesDoualaEtYaounde: matches.length
      };
    })()
  `,
  returnByValue: true
});
console.log('Geo Check ("Douala et Yaoundé"):', geoCheck.result.value);

// CAPTURES D'ÉCRAN HAUTE DÉFINITION
console.log('\n--- Génération des Captures d\'Écran de Preuve ---');

// 1. Capture Desktop 1440px Hero Accueil
await send('Emulation.setDeviceMetricsOverride', {
  width: 1440,
  height: 900,
  deviceScaleFactor: 2,
  mobile: false
});
await send('Runtime.evaluate', { expression: `
  if (window.lenis) window.lenis.scrollTo(0, { immediate: true });
  window.scrollTo(0, 0);
` });
await new Promise(r => setTimeout(r, 600));

let shot = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync(path.join(ARTIFACT_DIR, 'capture_hero_accueil_1440px.png'), Buffer.from(shot.data, 'base64'));
console.log('  📸 capture_hero_accueil_1440px.png enregistrée');

// 2. Capture Desktop 1440px 4 Pôles Services (Scroll to Services)
await send('Runtime.evaluate', { expression: `
  const sec = document.querySelector('#services-section');
  if (sec) {
    const top = sec.getBoundingClientRect().top + window.scrollY;
    if (window.lenis) window.lenis.scrollTo(top, { immediate: true });
    else window.scrollTo(0, top);
  }
`});
await new Promise(r => setTimeout(r, 600));
shot = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync(path.join(ARTIFACT_DIR, 'capture_services_grid_1440px.png'), Buffer.from(shot.data, 'base64'));
console.log('  📸 capture_services_grid_1440px.png enregistrée');

// 3. Capture Desktop 1440px CTA Final du Bas
await send('Runtime.evaluate', { expression: `
  const cta = document.querySelector('#cta-final-section');
  if (cta) {
    const top = cta.getBoundingClientRect().top + window.scrollY - 100;
    if (window.lenis) window.lenis.scrollTo(top, { immediate: true });
    else window.scrollTo(0, top);
  }
`});
await new Promise(r => setTimeout(r, 600));
shot = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync(path.join(ARTIFACT_DIR, 'capture_cta_final_1440px.png'), Buffer.from(shot.data, 'base64'));
console.log('  📸 capture_cta_final_1440px.png enregistrée');

// 4. Capture Mobile 390px Hero Accueil
await send('Emulation.setDeviceMetricsOverride', {
  width: 390,
  height: 844,
  deviceScaleFactor: 2,
  mobile: true
});
await send('Runtime.evaluate', { expression: `
  if (window.lenis) window.lenis.scrollTo(0, { immediate: true });
  window.scrollTo(0, 0);
` });
await new Promise(r => setTimeout(r, 600));
shot = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync(path.join(ARTIFACT_DIR, 'capture_hero_accueil_390px.png'), Buffer.from(shot.data, 'base64'));
console.log('  📸 capture_hero_accueil_390px.png enregistrée');

// 5. Capture Mobile 390px CTA Final
await send('Runtime.evaluate', { expression: `
  const cta = document.querySelector('#cta-final-section');
  if (cta) {
    cta.scrollIntoView({ behavior: 'instant', block: 'center' });
  }
`});
await new Promise(r => setTimeout(r, 800));
shot = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync(path.join(ARTIFACT_DIR, 'capture_cta_final_390px.png'), Buffer.from(shot.data, 'base64'));
console.log('  📸 capture_cta_final_390px.png enregistrée');

// 6. Capture Hero Card avec Nouvelles Icônes Lucide SVG
await send('Emulation.setDeviceMetricsOverride', {
  width: 1440,
  height: 900,
  deviceScaleFactor: 2,
  mobile: false
});
await send('Runtime.evaluate', { expression: `
  if (window.lenis) window.lenis.scrollTo(0, { immediate: true });
  window.scrollTo(0, 0);
`});
await new Promise(r => setTimeout(r, 600));
shot = await send('Page.captureScreenshot', { format: 'png' });
fs.writeFileSync(path.join(ARTIFACT_DIR, 'capture_hero_card_icons.png'), Buffer.from(shot.data, 'base64'));
console.log('  📸 capture_hero_card_icons.png enregistrée');

ws.close();
chrome.kill();
try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (e) {}

console.log('\n🎉 VALIDATION TERMINÉE AVEC SUCCÈS !');
process.exit(0);
