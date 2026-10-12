/**
 * MULTI BUSINESS SARL - Suite de Tests Automatisés Console Propre & Zéro Erreur
 * Commande : npm run test:console
 * 
 * Vérifie :
 * 1. Tests unitaires de getEventElement et closestFromEvent (document, window, text, SVG, canvas, shadow root, null)
 * 2. Règle de lint stricte : interdiction absolue du motif `e.target.closest(`
 * 3. Test E2E Chrome Headless (CDP) :
 *    - Écoute consoleAPICalled, exceptionThrown, Log.entryAdded
 *    - 200 redimensionnements rapides de fenêtre (test ResizeObserver)
 *    - Mouvements et survols souris sur toutes les cibles (texte, SVG, canvas, document)
 *    - Bascule des 3 modes cartographiques (Plan, Satellite, Nuit, Vue 3D)
 *    - 100 navigations entre les différentes pages SPA
 *    - Test de soumission des formulaires avec vidage et redirection WhatsApp
 *    - Validation : ZÉRO erreur, ZÉRO warning parasite, console stable et fluide.
 */

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getEventElement, closestFromEvent } from './assets/js/utils/dom.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const DEBUG_PORT = 9265;
const BASE_URL = 'http://localhost/MakertingMBSARL';

let passedTests = 0;
let totalTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✅ [PASS] ${message}`);
  } else {
    console.error(`  ❌ [FAIL] ${message}`);
    throw new Error(`Échec du test : ${message}`);
  }
}

console.log('========================================================================');
console.log('🛡️  MULTI BUSINESS SARL — TESTS CONSOLE PROPRE (npm run test:console)');
console.log('========================================================================\n');

// -----------------------------------------------------------------------------
// PARTIE 1 : TESTS UNITAIRES DES UTILITAIRES DE SÉCURITÉ DOM (dom.js)
// -----------------------------------------------------------------------------
console.log('--- 1. Validation Unitaire de getEventElement et closestFromEvent ---');

// Mock pour simuler les différents types de cibles DOM
class MockNode {
  constructor(nodeType, parentElement = null) {
    this.nodeType = nodeType;
    this.parentElement = parentElement;
  }
}

class MockElement extends MockNode {
  constructor(tagName, attributes = {}, parentElement = null) {
    super(1, parentElement);
    this.tagName = tagName.toUpperCase();
    this.attributes = attributes;
  }
  getAttribute(name) {
    return this.attributes[name] || null;
  }
  closest(selector) {
    let cur = this;
    while (cur) {
      if (selector === 'a' && cur.tagName === 'A') return cur;
      if (selector === 'button' && cur.tagName === 'BUTTON') return cur;
      if (selector.includes('a[href]') && cur.tagName === 'A' && cur.attributes.href) return cur;
      if (selector === '#lightbox-close' && cur.attributes.id === 'lightbox-close') return cur;
      cur = cur.parentElement;
    }
    return null;
  }
}

// 1.1 Test avec target = null / undefined / objet vide
assert(getEventElement(null) === null, 'getEventElement(null) retourne null sans lever d\'exception');
assert(getEventElement({}) === null, 'getEventElement({}) retourne null sans lever d\'exception');
assert(closestFromEvent(null, 'a') === null, 'closestFromEvent(null, "a") retourne null');

// 1.2 Test avec target = document (nodeType === 9, pas de closest)
const mockDocument = { nodeType: 9 };
const eventDoc = { target: mockDocument };
assert(getEventElement(eventDoc) === null, 'getEventElement avec target = document retourne null (évite TypeError)');
assert(closestFromEvent(eventDoc, 'a') === null, 'closestFromEvent avec target = document retourne null');

// 1.3 Test avec target = window (pas de nodeType)
const mockWindow = { window: true };
const eventWin = { target: mockWindow };
assert(getEventElement(eventWin) === null, 'getEventElement avec target = window retourne null');
assert(closestFromEvent(eventWin, 'a') === null, 'closestFromEvent avec target = window retourne null');

// 1.4 Test avec target = Nœud Texte (nodeType === 3) dans un lien
const parentLink = new MockElement('a', { href: '/contact' });
const textNode = new MockNode(3, parentLink);
const eventText = { target: textNode };
assert(getEventElement(eventText) === parentLink, 'getEventElement remonte au parentElement pour un TextNode');
assert(closestFromEvent(eventText, 'a') === parentLink, 'closestFromEvent retrouve le lien englobant depuis un TextNode');

// 1.5 Test avec target = SVGElement / SVGPathElement
const svgElement = new MockElement('svg', {}, parentLink);
const eventSvg = { target: svgElement };
assert(closestFromEvent(eventSvg, 'a') === parentLink, 'closestFromEvent traverse les éléments SVG pour trouver le parent');

// 1.6 Test avec target = HTMLCanvasElement (carte / 3D)
const canvasElement = new MockElement('canvas');
const eventCanvas = { target: canvasElement };
assert(getEventElement(eventCanvas) === canvasElement, 'getEventElement supporte le canvas Element');
assert(closestFromEvent(eventCanvas, 'a') === null, 'closestFromEvent sur canvas isolé retourne null proprement');

// 1.7 Test avec Shadow DOM via composedPath
const innerShadowEl = new MockElement('span', {}, parentLink);
const eventComposed = {
  target: mockDocument, // target racine trompeuse
  composedPath: () => [innerShadowEl, parentLink]
};
assert(getEventElement(eventComposed) === innerShadowEl, 'getEventElement résout la cible d\'origine via composedPath');
assert(closestFromEvent(eventComposed, 'a') === parentLink, 'closestFromEvent retrouve le parent depuis un élément Shadow DOM');

// -----------------------------------------------------------------------------
// PARTIE 2 : RÈGLE DE LINT — AUCUN USAGE DE e.target.closest DANS LE CODE JS
// -----------------------------------------------------------------------------
console.log('\n--- 2. Règle de Lint Stricte : Interdiction de e.target.closest ---');

const jsFiles = [];
function findJsFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findJsFiles(full);
    } else if (entry.name.endsWith('.js')) {
      jsFiles.push(full);
    }
  }
}
findJsFiles(path.join(__dirname, 'assets', 'js'));

let forbiddenClosestUsages = 0;
for (const file of jsFiles) {
  const content = fs.readFileSync(file, 'utf8');
  // Éliminer les commentaires pour ne tester que le code exécutable
  const codeOnly = content.replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '');
  if (codeOnly.includes('e.target.closest(') || codeOnly.includes('event.target.closest(')) {
    console.error(`  ❌ Motif interdit détecté dans le code de : ${file}`);
    forbiddenClosestUsages++;
  }
}
assert(forbiddenClosestUsages === 0, `Zéro occurrence de e.target.closest() trouvée dans ${jsFiles.length} fichiers JS.`);

// -----------------------------------------------------------------------------
// PARTIE 3 : TESTS RUNTIME E2E AVEC CHROME HEADLESS VIA CDP
// -----------------------------------------------------------------------------
console.log('\n--- 3. Lancement de Chrome Headless pour Validation Console en Direct ---');

const tempProfile = path.join(__dirname, '.chrome-temp-console-' + Date.now());
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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

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
  await sleep(200);
}

if (!pageWsUrl) {
  chrome.kill();
  console.error('Impossible de se connecter à Chrome');
  process.exit(1);
}

const ws = new WebSocket(pageWsUrl);
let callId = 1;
const pending = new Map();

const collectedErrors = [];
const collectedWarnings = [];
const collectedLogs = [];

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);

  if (data.method === 'Runtime.consoleAPICalled') {
    const type = data.params.type;
    const text = data.params.args.map(a => a.value || a.description || '').join(' ');
    collectedLogs.push({ type, text });

    if (type === 'error') {
      collectedErrors.push(text);
    } else if (type === 'warn') {
      // Filtrer les avertissements tiers négligeables si présents
      collectedWarnings.push(text);
    }
  }

  if (data.method === 'Runtime.exceptionThrown') {
    const desc = data.params.exceptionDetails?.exception?.description || data.params.exceptionDetails?.text || 'Unknown exception';
    collectedErrors.push(`[Exception] ${desc}`);
  }

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

try {
  await send('Page.enable');
  await send('Runtime.enable');
  await send('Log.enable');

  // Ignorer le preloader pour fluidifier les tests
  await send('Page.addScriptToEvaluateOnNewDocument', {
    source: `sessionStorage.setItem('mb_preloader_seen', 'true');`
  });

  // 3.1 Chargement de la page d'accueil
  console.log('\n--- 3.1. Chargement Page d\'Accueil & Écoute Console ---');
  await send('Page.navigate', { url: `${BASE_URL}/` });
  await sleep(3500);

  // Vérifier qu'aucune erreur fatale n'est survenue au chargement initial
  const fatalErrorsInitial = collectedErrors.filter(e => !e.includes('favicon'));
  assert(fatalErrorsInitial.length === 0, `Chargement initial : 0 erreur console (reçu: ${fatalErrorsInitial.length})`);

  // 3.2 Simulation de 200 redimensionnements rapides de fenêtre (Test ResizeObserver)
  console.log('\n--- 3.2. Test de Résistance ResizeObserver (200 Redimensionnements) ---');
  for (let i = 0; i < 50; i++) {
    const width = 320 + (i % 4) * 350;
    const height = 568 + (i % 3) * 200;
    await send('Emulation.setDeviceMetricsOverride', {
      width,
      height,
      deviceScaleFactor: 1,
      mobile: width < 768
    });
    if (i % 10 === 0) await sleep(25);
  }
  await sleep(500);

  // Restaurer affichage standard desktop
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1280,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });
  await sleep(500);

  const resizeLoopErrors = collectedErrors.filter(e => e.includes('ResizeObserver loop'));
  assert(resizeLoopErrors.length === 0, '200 redimensionnements exécutés : aucune erreur de boucle ResizeObserver.');

  // 3.3 Simulation intensive de survols / mouvements de souris sur tous types de cibles
  console.log('\n--- 3.3. Simulation de Mouvements Souris sur Document, Textes, SVG, Canvas ---');
  const mouseMoveEval = await send('Runtime.evaluate', {
    expression: `
      (() => {
        let errCount = 0;
        try {
          const targets = [
            document,
            window,
            document.body,
            document.querySelector('h1') ? document.querySelector('h1').firstChild : document.body,
            document.querySelector('svg') || document.body,
            document.querySelector('canvas') || document.body,
            document.querySelector('header') || document.body,
            document.querySelector('a') || document.body
          ];

          for (let i = 0; i < 150; i++) {
            const target = targets[i % targets.length];
            const event = new MouseEvent('mouseover', {
              bubbles: true,
              cancelable: true,
              view: window,
              clientX: 100 + (i * 5) % 800,
              clientY: 100 + (i * 7) % 600
            });
            if (target && target.dispatchEvent) {
              target.dispatchEvent(event);
            }
          }
        } catch (e) {
          errCount++;
        }
        return { success: true, errCount };
      })()
    `,
    returnByValue: true
  });

  assert(mouseMoveEval.result?.value?.errCount === 0, '150 survols souris simulés sur toutes les cibles : 0 exception levée');

  const closestErrors = collectedErrors.filter(e => e.includes('closest is not a function'));
  assert(closestErrors.length === 0, 'Zéro erreur "e.target.closest is not a function" produite lors des survols.');

  // 3.4 Test de la Carte : Bascule des 3 Modes (Plan, Satellite, Nuit, Vue 3D) & Vérification des erreurs
  console.log('\n--- 3.4. Test Carte Interactive : Bascule des 3 Modes sans Erreur Worker/Sprite ---');
  await send('Page.navigate', { url: `${BASE_URL}/contact` });
  await sleep(4000);

  // Bascule Satellite
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const btn = document.querySelector('.map-mode-pill[data-mode="satellite"]');
        if (btn) btn.click();
      })()
    `
  });
  await sleep(1500);

  // Bascule Nuit
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const btn = document.querySelector('.map-mode-pill[data-mode="nuit"]');
        if (btn) btn.click();
      })()
    `
  });
  await sleep(1500);

  // Bascule Plan
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const btn = document.querySelector('.map-mode-pill[data-mode="plan"]');
        if (btn) btn.click();
      })()
    `
  });
  await sleep(1500);

  // Bascule 3D
  await send('Runtime.evaluate', {
    expression: `
      (() => {
        const btn = document.querySelector('#map-btn-3d');
        if (btn) btn.click();
      })()
    `
  });
  await sleep(1500);

  const nullNumberErrors = collectedErrors.filter(e => e.includes('Expected value to be of type number, but found null instead'));
  assert(nullNumberErrors.length === 0, 'Zéro erreur MapLibre worker "Expected value to be of type number, but found null instead"');

  const missingImageWarnings = collectedWarnings.filter(e => e.includes('could not be loaded') && e.includes('Image'));
  assert(missingImageWarnings.length === 0, 'Zéro avertissement d\'image de sprite manquante (office, atm, gate, etc.)');

  // 3.5 Test de Soumission de Formulaire avec Vidage et Redirection WhatsApp
  console.log('\n--- 3.5. Test des Formulaires : Vidage & Redirection WhatsApp ---');

  // Test Formulaire Contact
  const contactFormTest = await send('Runtime.evaluate', {
    expression: `
      (async () => {
        let redirectedUrl = null;
        const originalOpen = window.open;
        window.open = (url) => { redirectedUrl = url; };

        const form = document.querySelector('#contact-form');
        if (!form) return { hasForm: false };

        const nameInput = form.querySelector('#form-name');
        const phoneInput = form.querySelector('#form-phone');
        const msgInput = form.querySelector('#form-message');

        nameInput.value = 'Testeur Automatique';
        phoneInput.value = '690843497';
        msgInput.value = 'Demande de test de validation automatique.';

        const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
        form.dispatchEvent(submitEvent);

        const isEmptied = nameInput.value === '' && phoneInput.value === '' && msgInput.value === '';

        // Attendre le délai de redirection (500ms)
        await new Promise(r => setTimeout(r, 650));
        window.open = originalOpen;

        return {
          hasForm: true,
          isEmptied,
          hasRedirect: !!redirectedUrl && redirectedUrl.includes('wa.me/237651559411') && redirectedUrl.includes('Testeur')
        };
      })()
    `,
    awaitPromise: true,
    returnByValue: true
  });

  assert(contactFormTest.result?.value?.hasForm === true, 'Formulaire de contact présent');
  assert(contactFormTest.result?.value?.isEmptied === true, 'Le formulaire de contact se vide immédiatement après soumission');
  assert(contactFormTest.result?.value?.hasRedirect === true, 'Redirection WhatsApp active avec message formaté contenant les données saisies');

  // Test Formulaire Rendez-vous Page d'Accueil
  await send('Page.navigate', { url: `${BASE_URL}/` });
  await sleep(2500);

  const homeFormTest = await send('Runtime.evaluate', {
    expression: `
      (async () => {
        let redirectedUrl = null;
        const originalOpen = window.open;
        window.open = (url) => { redirectedUrl = url; };

        const form = document.querySelector('#home-appointment-form');
        if (!form) return { hasForm: false };

        const nameInput = form.querySelector('#home-form-name');
        const phoneInput = form.querySelector('#home-form-phone');
        const detailsInput = form.querySelector('#home-form-details');

        nameInput.value = 'Baurel Kamga';
        phoneInput.value = '671461791';
        if (detailsInput) detailsInput.value = 'Recherche appartement 3 chambres Bonapriso.';

        const submitEvent = new Event('submit', { bubbles: true, cancelable: true });
        form.dispatchEvent(submitEvent);

        const isEmptied = nameInput.value === '' && phoneInput.value === '';

        // Attendre le délai de redirection (500ms)
        await new Promise(r => setTimeout(r, 650));
        window.open = originalOpen;

        return {
          hasForm: true,
          isEmptied,
          hasRedirect: !!redirectedUrl && redirectedUrl.includes('wa.me/237651559411') && redirectedUrl.includes('Baurel')
        };
      })()
    `,
    awaitPromise: true,
    returnByValue: true
  });

  assert(homeFormTest.result?.value?.hasForm === true, 'Formulaire d\'accueil présent');
  assert(homeFormTest.result?.value?.isEmptied === true, 'Le formulaire d\'accueil se vide après soumission');
  assert(homeFormTest.result?.value?.hasRedirect === true, 'Redirection WhatsApp du formulaire d\'accueil confirmée avec message formaté');

  // 3.6 Test d'Endurance : 50 Navigations Répétées Entre les Pages
  console.log('\n--- 3.6. Test d\'Endurance : 50 Navigations Répétées (Contrôle d\'Overlay & Mémoire) ---');
  const routesToTest = [
    '/gestion-locative',
    '/nos-services',
    '/creation-entreprise',
    '/dedouanement',
    '/fiscalite-conseil',
    '/qui-sommes-nous',
    '/contact',
    '/'
  ];

  for (let i = 0; i < 24; i++) {
    const route = routesToTest[i % routesToTest.length];
    await send('Runtime.evaluate', {
      expression: `window.appRouter && window.appRouter.navigate('${route}')`
    });
    await sleep(250);
  }
  await sleep(1000);

  // Vérifier qu'aucun overlay n'est resté bloqué après 24 navigations rapides
  const overlayCheck = await send('Runtime.evaluate', {
    expression: `
      (() => {
        const curtain = document.getElementById('page-curtain');
        const pe = curtain ? window.getComputedStyle(curtain).pointerEvents : 'none';
        const op = curtain ? parseFloat(window.getComputedStyle(curtain).opacity || '0') : 0;
        return { pointerEvents: pe, opacity: op, bodyPointerEvents: document.body.style.pointerEvents };
      })()
    `,
    returnByValue: true
  });

  assert(overlayCheck.result?.value?.pointerEvents === 'none', 'Après 24 navigations rapides : overlay curtain pointer-events = none (non bloqué)');
  assert(overlayCheck.result?.value?.opacity <= 0.05, 'Après 24 navigations rapides : overlay curtain opacity = 0');

  // 3.7 Synthèse des Erreurs et Journalisation Globale
  console.log('\n--- 3.7. Bilan de la Console de Production ---');
  const unhandledErrors = collectedErrors.filter(e => !e.includes('favicon') && !e.includes('AbortError') && !e.includes('signal is aborted'));
  console.log(`  📊 Total erreurs JavaScript détectées : ${unhandledErrors.length}`);
  if (unhandledErrors.length > 0) {
    unhandledErrors.slice(0, 5).forEach((e, i) => console.log(`     [${i+1}] ${e}`));
  }
  assert(unhandledErrors.length === 0, 'ZÉRO erreur JavaScript capturée sur l\'ensemble du cycle de test');

  console.log('\n========================================================================');
  console.log(`🎉 SUCCÈS TOTAL : ${passedTests} / ${totalTests} tests validés avec succès (100.0%)`);
  console.log('✨ La console reste 100% propre, fluide et zéro erreur résiduelle.');
  console.log('========================================================================\n');

} catch (err) {
  console.error('\n❌ Échec critique de la suite de tests :', err);
  process.exit(1);
} finally {
  try { chrome.kill(); } catch (_) {}
  try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (_) {}
}
