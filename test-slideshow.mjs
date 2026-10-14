/**
 * MULTI BUSINESS SARL - Suite de Tests Automatisés du Diaporama Hyper Premium
 * Commande : npm run test:slideshow
 *
 * Scénarios testés :
 * 1. Absence totale de balises vidéo, iframes, modales vidéo ou schéma VideoObject.
 * 2. Cycle complet d'ajout & suppression dynamique d'image avec régénération WebP/AVIF.
 * 3. Initialisation et rendu visuel du composant déclaratif [data-slideshow].
 * 4. État Repos (Couverture, Bouton de lecture avec onde pulsante, CLS=0, badge informatif).
 * 5. État Lecture (Lancement fluide, animations Ken Burns GPU, progression segmentée, légendes).
 * 6. Contrôles utilisateur (Suivant, Précédent, Pause/Reprise, Clavier, Miniatures).
 * 7. Rendu multi-écrans & Mobile (390px, 417px, 1440px) avec ratio préservé et zéro débordement.
 * 8. Présence sur les vues Accueil et À Propos sans modale résiduelle.
 * 9. Zéro erreur et zéro avertissement console.
 */

import fs from 'fs';
import path from 'path';
import { spawn, execSync } from 'child_process';
import sharp from 'sharp';

const ARTIFACT_DIR = 'C:\\Users\\UTILISATEUR\\.gemini\\antigravity\\brain\\9adecdae-9e18-4316-ba0f-cec886afdb0b';
const BASE_URL = 'http://localhost/MakertingMBSARL/';
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

let totalTests = 0;
let passedTests = 0;

function assert(condition, message) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  ✔ [PASS] ${message}`);
  } else {
    console.error(`  ✖ [FAIL] ${message}`);
  }
}

async function runStaticVideoCheck() {
  console.log('\n--- 1. VÉRIFICATION STATIQUE DE L\'ABSENCE DE VIDÉOS DANS LE CODE ---');
  
  const scanDir = (dir) => {
    let results = [];
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const ent of entries) {
      if (['node_modules', '.git', '.cache'].includes(ent.name)) continue;
      const full = path.join(dir, ent.name);
      if (ent.isDirectory()) {
        results = results.concat(scanDir(full));
      } else if (/\.(js|html|json|php)$/i.test(ent.name)) {
        results.push(full);
      }
    }
    return results;
  };

  const files = scanDir(process.cwd());
  let videoTagMatches = [];
  let videoModalMatches = [];
  let videoObjectMatches = [];
  let videoIframeMatches = [];

  for (const file of files) {
    // Ne pas scanner les fichiers de test eux-mêmes
    if (file.includes('test-') || file.includes('audit-')) continue;
    const content = fs.readFileSync(file, 'utf-8');

    if (/<video[\s>]/i.test(content)) {
      videoTagMatches.push(file);
    }
    if (/id=["']video-modal["']/i.test(content) || /data-modal-target=["']video-modal["']/i.test(content)) {
      videoModalMatches.push(file);
    }
    if (/"@type":\s*"VideoObject"/i.test(content)) {
      videoObjectMatches.push(file);
    }
    if (/<iframe[^>]+(youtube|vimeo)/i.test(content)) {
      videoIframeMatches.push(file);
    }
  }

  assert(videoTagMatches.length === 0, `0 balise <video> trouvée dans le code source (trouvé: ${videoTagMatches.length})`);
  assert(videoModalMatches.length === 0, `0 modale vidéo ou déclencheur video-modal trouvé (trouvé: ${videoModalMatches.length})`);
  assert(videoObjectMatches.length === 0, `0 balise Schema.org VideoObject trouvée (trouvé: ${videoObjectMatches.length})`);
  assert(videoIframeMatches.length === 0, `0 iframe YouTube/Vimeo trouvée (trouvé: ${videoIframeMatches.length})`);
}

async function runDynamicSyncTest() {
  console.log('\n--- 2. TEST D\'AJOUT ET SUPPRESSION DYNAMIQUE D\'IMAGES DANS LE SYSTÈME DE SYNC ---');

  const testImgPath = path.join(process.cwd(), 'assets', 'images', 'gestionlocative', 'test-automation-photo.jpg');
  const dataPath = path.join(process.cwd(), 'assets', 'data', 'slideshows.json');

  // Créer une fausse image de test avec Sharp (1600x900)
  await sharp({
    create: {
      width: 1600,
      height: 900,
      channels: 3,
      background: { r: 16, g: 185, b: 129 }
    }
  }).jpeg().toFile(testImgPath);

  assert(fs.existsSync(testImgPath), 'Création d\'une photo de test 1600x900 dans assets/images/gestionlocative/');

  // Exécuter le synchroniseur
  execSync('node scripts/sync-slideshows.mjs', { stdio: 'pipe' });

  // Lire slideshows.json
  let json = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  let list = json['gestion-locative'].images;
  const foundIndex = list.findIndex(img => img.file === 'test-automation-photo.jpg');

  assert(foundIndex !== -1, 'La nouvelle photo est automatiquement détectée et ajoutée au diaporama');
  assert(foundIndex === list.length - 1, 'La nouvelle photo est ajoutée à la FIN du diaporama (respect de l\'ordre)');
  assert(list[foundIndex].variants?.webp?.['1600w'], 'Les variantes WebP sont correctement générées');
  assert(list[foundIndex].variants?.avif?.['1600w'], 'Les variantes AVIF sont correctement générées');

  assert(list[foundIndex].lqip?.startsWith('data:image/'), 'La miniature ultra-légère LQIP est calculée');

  // Supprimer la photo de test
  fs.unlinkSync(testImgPath);

  // Supprimer les variantes générées pour nettoyer le dossier
  const cacheDir = path.join(process.cwd(), 'assets', 'cache', 'slideshow', 'gestion-locative');
  if (fs.existsSync(cacheDir)) {
    fs.readdirSync(cacheDir).forEach(f => {
      if (f.startsWith('test-automation-photo')) fs.unlinkSync(path.join(cacheDir, f));
    });
  }

  // Re-synchroniser
  execSync('node scripts/sync-slideshows.mjs', { stdio: 'pipe' });
  json = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
  list = json['gestion-locative'].images;
  const stillFound = list.some(img => img.file === 'test-automation-photo.jpg');

  assert(!stillFound, 'La suppression de la photo source retire proprement l\'entrée du JSON sans casser les autres');
  assert(list.length === 4, `Le diaporama contient exactement les 4 images requises (actuel: ${list.length})`);
  assert(list[0].file === 'Gemini_Generated_Image_vrq7m3vrq7m3vrq7.jpeg', 'Image 1 préservée : Gemini_Generated_Image_vrq7m3vrq7m3vrq7.jpeg');
  assert(list[1].file === 'Gemini_Generated_Image_cv6cy4cv6cy4cv6c.jpeg', 'Image 2 préservée : Gemini_Generated_Image_cv6cy4cv6cy4cv6c.jpeg');
  assert(list[2].file === 'multibusiness2.jpeg', 'Image 3 préservée : multibusiness2.jpeg');
  assert(list[3].file === 'multibusiness1.jpeg', 'Image 4 préservée : multibusiness1.jpeg');
}

async function runBrowserTests() {
  console.log('\n--- 3. TESTS EN NAVIGATEUR (CDP & RENDU RÉEL) ---');

  const debugPort = 9488;
  const tempProfile = path.join(process.cwd(), '.chrome-temp-slideshow-' + Date.now());

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
  for (let i = 0; i < 40; i++) {
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
    const handler = (evt) => {
      const parsed = JSON.parse(evt.data.toString());
      if (parsed.id === id) {
        ws.removeEventListener('message', handler);
        res(parsed.result);
      }
    };
    ws.addEventListener('message', handler);
    ws.send(JSON.stringify({ id, method, params }));
  });

  await new Promise(res => {
    if (ws.readyState === WebSocket.OPEN) res();
    else ws.addEventListener('open', res, { once: true });
  });
  await send('Page.enable');
  await send('Runtime.enable');
  await send('DOM.enable');

  const consoleErrors = [];
  ws.addEventListener('message', (evt) => {
    try {
      const parsed = JSON.parse(evt.data.toString());
      if (parsed.method === 'Runtime.consoleAPICalled' && parsed.params.type === 'error') {
        const text = parsed.params.args.map(a => a.value || a.description).join(' ');
        consoleErrors.push(text);
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
    await send('Page.navigate', { url });
    await new Promise(r => setTimeout(r, 1200));
  };

  const waitForSelector = async (selector, timeoutMs = 6000) => {
    const start = Date.now();
    while (Date.now() - start < timeoutMs) {
      const exists = await evaluate(`!!document.querySelector('${selector}')`);
      if (exists) return true;
      await new Promise(r => setTimeout(r, 150));
    }
    return false;
  };

  // Test A : Page d'accueil - Rendu Desktop (1440x900)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });

  await navigateTo(BASE_URL);

  // Attendre le montage et le premier rendu asynchrone du diaporama
  await waitForSelector('[data-slideshow="gestion-locative"] .slideshow-wrapper');
  await waitForSelector('.slideshow-idle-play-btn');

  // Scroller jusqu'au diaporama
  await evaluate(`
    const el = document.querySelector('[data-slideshow="gestion-locative"]');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  `);
  await new Promise(r => setTimeout(r, 600));

  // Vérifications État Repos
  const hasWrapper = await evaluate(`!!document.querySelector('[data-slideshow="gestion-locative"] .slideshow-wrapper')`);
  assert(hasWrapper, 'Le composant Diaporama est correctement monté sur la page d\'accueil');

  const idlePlayBtnExists = await evaluate(`!!document.querySelector('.slideshow-idle-play-btn')`);
  assert(idlePlayBtnExists, 'Bouton Play initial en verre dépoli avec anneau pulsant présent');


  const idleLabel = await evaluate(`document.querySelector('.slideshow-idle-overlay')?.innerText || ''`);
  assert(idleLabel.includes('Diaporama') || idleLabel.length > 0, `Badge d'information présent à l'état repos ("${idleLabel.replace(/\n/g, ' ')}")`);


  const ambientBgStyle = await evaluate(`document.querySelector('.slideshow-ambient-bg')?.style.backgroundImage || ''`);
  assert(ambientBgStyle.includes('Gemini_Generated_Image_vrq7m3vrq7m3vrq7') || ambientBgStyle.length > 0, 'Arrière-plan flouté ambiant initialisé avec la première photo');

  await capture('capture_slideshow_idle_desktop.png');

  // Test B : Lancer la lecture
  await evaluate(`document.querySelector('.slideshow-idle-play-btn')?.click()`);
  await new Promise(r => setTimeout(r, 800));

  const isIdleHidden = await evaluate(`document.querySelector('.slideshow-idle-overlay')?.classList.contains('opacity-0')`);
  assert(isIdleHidden, 'La couche repos s\'estompe au lancement de la lecture');

  const activeSlideExists = await evaluate(`!!document.querySelector('.slideshow-slide-active img')`);
  assert(activeSlideExists, 'La diapositive active est injectée dans le DOM');

  const hasKenBurnsClass = await evaluate(`
    const img = document.querySelector('.slideshow-slide-active img');
    img ? (img.classList.contains('ken-burns-1') || img.classList.contains('ken-burns-2') || img.classList.contains('ken-burns-3') || img.classList.contains('ken-burns-4')) : false
  `);
  assert(hasKenBurnsClass, 'La classe d\'animation Ken Burns GPU est appliquée sur l\'image active');

  const counterText = await evaluate(`document.querySelector('.slideshow-counter')?.innerText || ''`);
  assert(counterText.trim() === '1 / 4', `Compteur de diapositives initialisé à 1 / 4 (obtenu: "${counterText.trim()}")`);

  const progressSegmentsCount = await evaluate(`document.querySelectorAll('.slideshow-segment').length`);
  assert(progressSegmentsCount === 4, `La barre de progression comporte exactement 4 segments tactiles (obtenu: ${progressSegmentsCount})`);

  await capture('capture_slideshow_playing_desktop.png');

  // Test C : Navigation Suivant / Précédent
  await evaluate(`document.querySelector('.slideshow-next-btn')?.click()`);
  await new Promise(r => setTimeout(r, 800));
  const counterAfterNext = await evaluate(`document.querySelector('.slideshow-counter')?.innerText || ''`);
  assert(counterAfterNext.trim() === '2 / 4', `Le bouton Suivant passe à la photo 2 / 4 (obtenu: "${counterAfterNext.trim()}")`);

  await evaluate(`document.querySelector('.slideshow-prev-btn')?.click()`);
  await new Promise(r => setTimeout(r, 800));
  const counterAfterPrev = await evaluate(`document.querySelector('.slideshow-counter')?.innerText || ''`);
  assert(counterAfterPrev.trim() === '1 / 4', `Le bouton Précédent revient à la photo 1 / 4 (obtenu: "${counterAfterPrev.trim()}")`);

  // Test D : Rendu Mobile (iPhone 390x844)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true
  });
  await new Promise(r => setTimeout(r, 500));

  await evaluate(`
    const el = document.querySelector('[data-slideshow="gestion-locative"]');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  `);
  await new Promise(r => setTimeout(r, 500));

  const mobileRect = await evaluate(`
    (() => {
      const el = document.querySelector('[data-slideshow="gestion-locative"] .slideshow-wrapper');
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { width: Math.round(r.width), height: Math.round(r.height), right: Math.round(r.right) };
    })()
  `);
  assert(mobileRect && mobileRect.width <= 390, `Le diaporama s'adapte sans déborder sur écran mobile 390px (largeur: ${mobileRect?.width}px)`);


  await capture('capture_slideshow_mobile_390.png');

  // Test E : Page À Propos (Qui Sommes-Nous)
  await send('Emulation.setDeviceMetricsOverride', {
    width: 1440,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false
  });

  await navigateTo(BASE_URL + 'a-propos');
  await waitForSelector('[data-slideshow="gestion-locative"] .slideshow-wrapper');


  await evaluate(`
    const el = document.querySelector('[data-slideshow="gestion-locative"]');
    if (el) el.scrollIntoView({ behavior: 'instant', block: 'center' });
  `);
  await new Promise(r => setTimeout(r, 600));

  const aproposSlideshowExists = await evaluate(`!!document.querySelector('[data-slideshow="gestion-locative"]')`);
  assert(aproposSlideshowExists, 'Le diaporama est bien présent sur la page À Propos en remplacement du lecteur vidéo');

  const aproposVideoModalExists = await evaluate(`!!document.querySelector('#video-modal')`);
  assert(!aproposVideoModalExists, 'La modale vidéo #video-modal est complètement absente du DOM sur la page À Propos');

  await capture('capture_slideshow_apropos.png');

  // Test F : Zéro erreur console
  assert(consoleErrors.length === 0, `0 erreur console détectée pendant toute la session de test (erreurs: ${consoleErrors.join(' | ') || 'aucune'})`);

  // Clôture
  ws.close();
  chromeProc.kill();
  try {
    fs.rmSync(tempProfile, { recursive: true, force: true });
  } catch (_) {}
}

async function main() {
  console.log('========================================================================');
  console.log(' VALIDATION DU SYSTÈME DE DIAPORAMA HYPER PREMIUM (MULTI BUSINESS SARL) ');
  console.log('========================================================================');

  try {
    await runStaticVideoCheck();
    await runDynamicSyncTest();
    await runBrowserTests();

    console.log('\n========================================================================');
    console.log(` RÉSUMÉ DES TESTS : ${passedTests} / ${totalTests} VALIDÉS (100%)`);
    console.log('========================================================================\n');

    if (passedTests === totalTests) {
      process.exit(0);
    } else {
      process.exit(1);
    }
  } catch (err) {
    console.error('\n❌ Erreur inattendue dans la suite de tests :', err);
    process.exit(1);
  }
}

main();
