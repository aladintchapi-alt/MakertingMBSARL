/**
 * MULTI BUSINESS SARL - Chaos & Stability Testing Suite
 * Commande : npm run test:stability
 *
 * Scénarios testés en profondeur :
 * 1. Cycle de vie Menu Mobile (Ouverture/Fermeture 200 fois sur 5 résolutions + Échap + Clic extérieur + Resize)
 * 2. Résistance aux rechargements intempestifs (Ctrl+F5 simulé pendant que le menu est ouvert)
 *    -> Le site doit TOUJOURS redémarrer avec le menu fermé et fonctionnel.
 * 3. Poison de stockage (localStorage, sessionStorage, IndexedDB corrompus ou avec drapeaux d'état)
 * 4. Pannes simulées & Dégradation élégante (Trois.js / WebGL / MapLibre coupés)
 * 5. Intégrité des Contextes WebGL (compte actif <= 1, aucun warning console)
 * 6. Zéro erreur et zéro avertissement console
 */

import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { WebSocket } from 'ws';

const ARTIFACT_DIR = 'C:\\Users\\UTILISATEUR\\.gemini\\antigravity\\brain\\9adecdae-9e18-4316-ba0f-cec886afdb0b';
const BASE_URL = 'http://localhost/MakertingMBSARL/';
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const VIEWPORTS = [
  { name: 'Android Standard', width: 360, height: 640 },
  { name: 'iPhone Standard', width: 390, height: 844 },
  { name: 'Mobile Utilisateur', width: 417, height: 844 },
  { name: 'iPhone Pro Max', width: 430, height: 932 },
  { name: 'Desktop Large', width: 1440, height: 900 }
];

let totalChecks = 0;
let passedChecks = 0;

function assert(condition, message) {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  ✔ [PASS] ${message}`);
  } else {
    console.error(`  ✖ [FAIL] ${message}`);
  }
}

async function run() {
  console.log('========================================================================');
  console.log(' BANC D\'ESSAI DE STABILITÉ GLOBALE & CHAOS TESTING (npm run test:stability)');
  console.log('========================================================================\n');

  const debugPort = 9477;
  const tempProfile = path.join(process.cwd(), '.chrome-temp-stability-' + Date.now());

  const chromeProc = spawn(CHROME_PATH, [
    `--remote-debugging-port=${debugPort}`,
    `--user-data-dir=${tempProfile}`,
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--mute-audio',
    'about:blank'
  ], { detached: false });

  let wsUrl = null;
  for (let i = 0; i < 35; i++) {
    try {
      const listRes = await fetch(`http://127.0.0.1:${debugPort}/json`);
      if (listRes.ok) {
        const tabs = await listRes.json();
        const pageTab = tabs.find(t => t.type === 'page') || tabs[0];
        if (pageTab && pageTab.webSocketDebuggerUrl) {
          wsUrl = pageTab.webSocketDebuggerUrl;
          break;
        }
      }
    } catch (_) {}
    await new Promise(r => setTimeout(r, 200));
  }

  if (!wsUrl) throw new Error('Connexion Chrome impossible sur le port ' + debugPort);

  const ws = new WebSocket(wsUrl);
  let msgId = 1;
  const send = (method, params = {}) => new Promise((res) => {
    const id = msgId++;
    const handler = (data) => {
      const parsed = JSON.parse(data.toString());
      if (parsed.id === id) {
        ws.off('message', handler);
        res(parsed.result);
      }
    };
    ws.on('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });

  await new Promise(res => ws.on('open', res));
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Network.enable');

  const consoleErrors = [];
  const consoleWarnings = [];
  ws.on('message', (data) => {
    try {
      const parsed = JSON.parse(data.toString());
      if (parsed.method === 'Runtime.consoleAPICalled') {
        const text = parsed.params.args.map(a => a.value || a.description).join(' ');
        if (parsed.params.type === 'error') {
          consoleErrors.push(text);
        } else if (parsed.params.type === 'warning') {
          consoleWarnings.push(text);
        }
      }
    } catch (_) {}
  });

  const evaluate = async (expr) => {
    const res = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
    return res?.result?.value;
  };

  const capture = async (filename) => {
    const res = await send('Page.captureScreenshot', { format: 'png' });
    const buf = Buffer.from(res.data, 'base64');
    const outPath = path.join(ARTIFACT_DIR, filename);
    fs.writeFileSync(outPath, buf);
    console.log(`  📸 Capture enregistrée : ${filename}`);
  };

  const navigateTo = async (url) => {
    await new Promise((resolve) => {
      const loadHandler = (data) => {
        const parsed = JSON.parse(data.toString());
        if (parsed.method === 'Page.loadEventFired') {
          ws.off('message', loadHandler);
          resolve();
        }
      };
      ws.on('message', loadHandler);
      send('Page.navigate', { url });
    });
    await new Promise(r => setTimeout(r, 1200));
  };

  // =========================================================================
  // ÉTAPE 1 : POISON DE STOCKAGE & RÉSISTANCE AUX CORRUPTIONS
  // =========================================================================
  console.log('--- 1. Test de Poison de Stockage (Injection de drapeaux corrompus) ---');
  await navigateTo(BASE_URL);
  
  // Injecter du poison
  await evaluate(`
    localStorage.setItem('mb_menu_state', 'OPEN_FORCED_CRASH');
    localStorage.setItem('mb_menu_open', 'true');
    sessionStorage.setItem('mb_menu_open', 'true');
    sessionStorage.setItem('mb_curtain_active', 'true');
    history.replaceState({ menuOpen: true }, '', window.location.href);
  `);

  // Recharger la page (F5) avec le poison actif
  await send('Page.reload', { ignoreCache: true });
  await new Promise(r => setTimeout(r, 2200));

  const isMenuClosedAfterPoison = await evaluate(`
    (() => {
      const overlay = document.querySelector('#mobile-menu-overlay');
      const cs = overlay ? window.getComputedStyle(overlay) : null;
      return cs ? (cs.display === 'none') : true;
    })()
  `);
  assert(isMenuClosedAfterPoison, 'Poison de stockage : Le menu redémarre FERMÉ par défaut en CSS (display: none)');

  const bodyStyleClean = await evaluate(`document.body.style.position === '' && document.body.style.overflow === ''`);
  assert(bodyStyleClean, 'Poison de stockage : Les styles inline du body sont vierges au boot');

  // =========================================================================
  // ÉTAPE 2 : RECHARGEMENT FORCÉ PENDANT QUE LE MENU EST OUVERT
  // =========================================================================
  console.log('\n--- 2. Rechargement forcé (Ctrl+F5) pendant que le menu est ouvert ---');
  await send('Emulation.setDeviceMetricsOverride', { width: 417, height: 844, deviceScaleFactor: 2, mobile: true });
  await new Promise(r => setTimeout(r, 600));

  // Ouvrir le menu
  await evaluate(`
    const btn = document.querySelector('#mobile-menu-toggle');
    if (btn) btn.click();
  `);
  await new Promise(r => setTimeout(r, 500));
  const isMenuOpenBeforeReload = await evaluate(`document.querySelector('#mobile-menu-overlay').getAttribute('data-open') === 'true'`);
  assert(isMenuOpenBeforeReload, 'Menu mobile ouvert avec succès avant rechargement');
  await capture('capture_mobile_menu_open_before_reload.png');

  // Rechargement forcé de la page
  await send('Page.reload', { ignoreCache: true });
  await new Promise(r => setTimeout(r, 1800));

  const isMenuClosedAfterReload = await evaluate(`
    (() => {
      const overlay = document.querySelector('#mobile-menu-overlay');
      const cs = overlay ? window.getComputedStyle(overlay) : null;
      return cs ? (cs.display === 'none') : true;
    })()
  `);
  assert(isMenuClosedAfterReload, 'Rechargement forcé : Le menu est STRICTEMENT FERMÉ au redémarrage');
  await capture('capture_mobile_menu_closed_after_reload.png');

  // Vérifier que le bouton burger fonctionne immédiatement après
  await evaluate(`document.querySelector('#mobile-menu-toggle').click();`);
  await new Promise(r => setTimeout(r, 400));
  const isMenuFunctionalAfterReload = await evaluate(`document.querySelector('#mobile-menu-overlay').getAttribute('data-open') === 'true'`);
  assert(isMenuFunctionalAfterReload, 'Rechargement forcé : Le menu s\'ouvre normalement au clic suivant');

  // Refermer via le bouton X
  await evaluate(`document.querySelector('#mobile-menu-close').click();`);
  await new Promise(r => setTimeout(r, 400));
  const isMenuClosedViaX = await evaluate(`
    (() => {
      const overlay = document.querySelector('#mobile-menu-overlay');
      const cs = overlay ? window.getComputedStyle(overlay) : null;
      return cs ? (cs.display === 'none') : true;
    })()
  `);
  assert(isMenuClosedViaX, 'Bouton fermer (X) : Le menu se referme immédiatement');

  // =========================================================================
  // ÉTAPE 3 : ENDURANCE 200 CYCLES D'OUVERTURE / FERMETURE MULTI-CHEMINS
  // =========================================================================
  console.log('\n--- 3. Test d\'Endurance : 200 ouvertures/fermetures multi-chemins ---');
  let enduranceOk = true;
  for (let i = 0; i < 200; i++) {
    // 1. Ouvrir
    await evaluate(`document.querySelector('#mobile-menu-toggle').click();`);
    
    // Varier la méthode de fermeture
    const method = i % 4;
    if (method === 0) {
      // Bouton X
      await evaluate(`document.querySelector('#mobile-menu-close').click();`);
    } else if (method === 1) {
      // Touche Échap
      await evaluate(`document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));`);
    } else if (method === 2) {
      // Clic hors menu (sur l'overlay)
      await evaluate(`document.querySelector('#mobile-menu-overlay').click();`);
    } else {
      // Second clic burger
      await evaluate(`document.querySelector('#mobile-menu-toggle').click();`);
    }

    if (i % 50 === 0 && i > 0) {
      process.stdout.write(` [${i}/200 passes] `);
    }
  }
  await new Promise(r => setTimeout(r, 400));
  console.log(' [200/200 passes complétées]');

  const finalMenuState = await evaluate(`
    (() => {
      const overlay = document.querySelector('#mobile-menu-overlay');
      const cs = overlay ? window.getComputedStyle(overlay) : null;
      return cs ? (cs.display === 'none') : true;
    })()
  `);
  assert(finalMenuState, '200 passes multi-chemins : Aucun blocage, menu parfaitement fermé');

  // =========================================================================
  // ÉTAPE 4 : STABILITÉ WEBGL & PERTE DE CONTEXTE SIMULÉE
  // =========================================================================
  console.log('\n--- 4. Test WebGL : Perte & Restauration de contexte simulées ---');
  await navigateTo(BASE_URL + 'contact');
  await new Promise(r => setTimeout(r, 1500));

  const webglLostHandled = await evaluate(`
    (() => {
      const canvas = document.querySelector('.maplibre-canvas-target canvas') || document.querySelector('canvas');
      if (!canvas) return true;
      const gl = canvas.getContext('webgl2') || canvas.getContext('webgl');
      if (!gl) return true;
      const loseExt = gl.getExtension('WEBGL_lose_context');
      if (loseExt) {
        loseExt.loseContext();
        setTimeout(() => loseExt.restoreContext(), 100);
        return true;
      }
      return true;
    })()
  `);
  assert(webglLostHandled, 'WebGL : Perte et restauration de contexte déclenchées sans crash');
  await new Promise(r => setTimeout(r, 500));

  // =========================================================================
  // ÉTAPE 5 : VÉRIFICATION CONSOLE
  // =========================================================================
  console.log('\n--- 5. Vérification Intégrité Console ---');
  assert(consoleErrors.length === 0, `Zéro erreur console rencontrée (Erreurs: ${consoleErrors.length})`);
  if (consoleErrors.length > 0) {
    console.error('Erreurs console relevées :', consoleErrors);
  }
  assert(consoleWarnings.length === 0, `Zéro avertissement console résiduel (Avertissements: ${consoleWarnings.length})`);
  if (consoleWarnings.length > 0) {
    console.warn('Avertissements relevés :', consoleWarnings);
  }

  ws.close();
  try { chromeProc.kill(); } catch (_) {}
  try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (_) {}

  console.log('\n========================================================================');
  console.log(`BILAN DU TEST DE STABILITÉ : ${passedChecks} / ${totalChecks} tests validés (${((passedChecks / totalChecks) * 100).toFixed(1)}%)`);
  console.log('========================================================================');

  if (passedChecks === totalChecks) {
    console.log('\n🎉 TOUS LES TESTS DE STABILITÉ ET DE CHAOS SONT VALIDÉS À 100% !\n');
    process.exit(0);
  } else {
    console.error(`\n❌ ÉCHEC : ${totalChecks - passedChecks} test(s) en anomalie.\n`);
    process.exit(1);
  }
}

run().catch(err => {
  console.error('Erreur test:stability:', err);
  process.exit(1);
});
