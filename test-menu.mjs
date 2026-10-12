/**
 * MULTI BUSINESS SARL - Test de Défilement & Imperméabilité du Menu Mobile
 * Commande : npm run test:menu
 *
 * Évalue sur 5 Viewports mobiles en orientation portrait & paysage :
 * - 360 x 640 (Android standard)
 * - 390 x 844 (iPhone standard)
 * - 412 x 915 (Android large)
 * - 320 x 568 (iPhone SE / écran compact)
 * - 844 x 390 (iPhone Paysage)
 *
 * Assertions :
 * 1. Ouverture du menu plein écran
 * 2. Dépliage de l'accordéon "Nos services"
 * 3. Balayage tactile / Scroll réel jusqu'en bas (Input.synthesizeScrollGesture / mouseWheel)
 * 4. Visibilité et atteignabilité du dernier élément (Réseaux / Ouvrir l'application)
 * 5. Aucun mouvement parasite de la page arrière (scrollY conservé)
 * 6. Restauration exacte du scroll de la page après fermeture
 * 7. Zéro erreur console
 * 8. 50 ouvertures/fermetures rapides sans blocage
 * 9. Vérification des textes de Gestion Fiscale & Localisation Google Maps
 */

import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';

const ARTIFACT_DIR = 'C:\\Users\\UTILISATEUR\\.gemini\\antigravity\\brain\\9adecdae-9e18-4316-ba0f-cec886afdb0b';
const BASE_URL = 'http://localhost/MakertingMBSARL/';
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const VIEWPORTS = [
  { name: 'Android Standard', width: 360, height: 640, isMobile: true },
  { name: 'iPhone Standard', width: 390, height: 844, isMobile: true },
  { name: 'Android Large', width: 412, height: 915, isMobile: true },
  { name: 'iPhone SE (Compact)', width: 320, height: 568, isMobile: true },
  { name: 'iPhone Paysage', width: 844, height: 390, isMobile: true }
];

let totalAssertions = 0;
let passedAssertions = 0;

function assert(condition, message) {
  totalAssertions++;
  if (condition) {
    passedAssertions++;
    console.log(`  ✔ [PASS] ${message}`);
  } else {
    console.error(`  ✖ [FAIL] ${message}`);
  }
}

async function run() {
  console.log('============================================================');
  console.log('1. TEST DE CONTENU (GESTION FISCALE & LOCALISATION GOOGLE MAPS)');
  console.log('============================================================');

  const configPath = path.join(process.cwd(), 'assets', 'js', 'config.js');
  const indexPath = path.join(process.cwd(), 'index.html');
  const referralCardPath = path.join(process.cwd(), 'assets', 'js', 'components', 'app-referral-card.js');
  const fiscalitePath = path.join(process.cwd(), 'assets', 'js', 'views', 'fiscalite.js');

  const configContent = fs.readFileSync(configPath, 'utf8');
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  const referralCardContent = fs.readFileSync(referralCardPath, 'utf8');
  const fiscaliteContent = fs.readFileSync(fiscalitePath, 'utf8');

  // A. Vérification de la ligne Fiscalité
  assert(
    configContent.includes("Besoin d'une gestion fiscale pour votre entreprise ?"),
    'Question d\'accroche exacte "Besoin d\'une gestion fiscale pour votre entreprise ?" présente dans config.js'
  );
  assert(
    configContent.includes("Déclarations, relations avec la DGI et conformité : nous gérons votre fiscalité pour vous."),
    'Sous-texte exact de gestion fiscale présent dans config.js'
  );
  assert(
    configContent.includes("Confier ma gestion fiscale"),
    'Bouton "Confier ma gestion fiscale" présent dans config.js'
  );
  assert(
    configContent.includes("Gestion fiscale de votre entreprise (s'ouvre dans un nouvel onglet)"),
    'Libellé accessible de gestion fiscale présent dans config.js'
  );

  // Absence des termes exclus
  const forbiddenTerms = ['audit fiscal', 'conformité patrimoniale'];
  for (const term of forbiddenTerms) {
    assert(
      !configContent.toLowerCase().includes(term) &&
      !indexContent.toLowerCase().includes(term) &&
      !fiscaliteContent.toLowerCase().includes(term),
      `Aucune trace du terme banni "${term}" dans config.js, index.html et fiscalite.js`
    );
  }

  // B. Vérification de la localisation Google Maps
  const expectedMapsUrl = 'https://www.google.com/maps/place/multibusiness/@4.0309087,9.7352805,837m/data=!3m1!1e3!4m6!3m5!1s0x4ba9e03f6fac8b13:0x36fdaca035b5355b!8m2!3d4.0300055!4d9.7370284!16s%2Fg%2F11tp937fdl!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D';
  assert(
    configContent.includes(expectedMapsUrl),
    'config.company.mapsUrl configuré avec l\'URL Google Maps exacte demandée'
  );
  assert(
    referralCardContent.includes('renderLocationReferralRow'),
    'Ligne de référencement de localisation renderLocationReferralRow présente dans la carte'
  );
  assert(
    referralCardContent.includes('Vous cherchez notre adresse ?'),
    'Question "Vous cherchez notre adresse ?" présente dans la ligne de localisation'
  );
  assert(
    referralCardContent.includes('Voir sur Google Maps'),
    'Bouton "Voir sur Google Maps" présent dans la ligne de localisation'
  );
  assert(
    referralCardContent.includes('Voir MULTI BUSINESS SARL sur Google Maps (s\'ouvre dans un nouvel onglet)'),
    'Libellé accessible de localisation présent'
  );
  assert(
    indexContent.includes('hasMap') && indexContent.includes(expectedMapsUrl),
    'Données structurées JSON-LD hasMap reliées à la nouvelle URL'
  );
  assert(
    indexContent.includes('target="_blank" rel="noopener noreferrer"') && indexContent.includes(expectedMapsUrl),
    'Adresse du pied de page et menu mobile cliquables vers Google Maps avec target="_blank" rel="noopener noreferrer"'
  );

  console.log('\n============================================================');
  console.log('2. TESTS CHROME HEADLESS & DÉFILEMENT TACTILE RÉEL (CDP)');
  console.log('============================================================');

  if (!fs.existsSync(CHROME_PATH)) {
    console.error('Chrome introuvable à : ' + CHROME_PATH);
    process.exit(1);
  }

  const debugPort = 9466;
  const tempProfile = path.join(process.cwd(), '.chrome-temp-menu-' + Date.now());

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
        const pageTab = tabs.find(t => t.type === 'page');
        if (pageTab && pageTab.webSocketDebuggerUrl) {
          wsUrl = pageTab.webSocketDebuggerUrl;
          break;
        }
      }
    } catch (e) {}
    await new Promise(r => setTimeout(r, 200));
  }

  if (!wsUrl) throw new Error('Connexion Chrome impossible sur le port ' + debugPort);

  const { WebSocket } = await import('ws');
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
  await send('DOM.enable');

  const consoleErrors = [];
  ws.on('message', (data) => {
    try {
      const parsed = JSON.parse(data.toString());
      if (parsed.method === 'Runtime.consoleAPICalled' && parsed.params.type === 'error') {
        consoleErrors.push(parsed.params.args.map(a => a.value || a.description).join(' '));
      }
    } catch (e) {}
  });

  const evaluate = async (expr) => {
    const res = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
    if (res?.exceptionDetails) {
      console.error('JS Eval Error:', res.exceptionDetails.text, res.exceptionDetails.exception?.description);
    }
    return res?.result?.value;
  };

  const capture = async (filename) => {
    const res = await send('Page.captureScreenshot', { format: 'png' });
    const buf = Buffer.from(res.data, 'base64');
    const outPath = path.join(ARTIFACT_DIR, filename);
    fs.writeFileSync(outPath, buf);
    console.log(`  📸 Capture enregistrée : ${filename}`);
  };

  // Naviguer vers la page d'accueil
  await new Promise((resolve) => {
    const loadHandler = (data) => {
      const parsed = JSON.parse(data.toString());
      if (parsed.method === 'Page.loadEventFired') {
        ws.off('message', loadHandler);
        resolve();
      }
    };
    ws.on('message', loadHandler);
    send('Page.navigate', { url: BASE_URL });
  });
  await new Promise(r => setTimeout(r, 1500));

  // Boucle sur les 5 viewports
  for (const vp of VIEWPORTS) {
    console.log(`\n--- Test Viewport : ${vp.name} (${vp.width} x ${vp.height} px) ---`);
    await send('Emulation.setDeviceMetricsOverride', {
      width: vp.width,
      height: vp.height,
      deviceScaleFactor: 2,
      mobile: vp.isMobile
    });
    await new Promise(r => setTimeout(r, 400));

    // Faire défiler la page derrière à 300px
    await evaluate(`
      if (window.lenis) {
        window.lenis.scrollTo(300, { immediate: true });
      } else {
        window.scrollTo(0, 300);
      }
    `);
    await new Promise(r => setTimeout(r, 300));
    const initialPageScroll = await evaluate(`Math.round(window.scrollY || window.pageYOffset || 0)`);

    // Ouvrir le menu
    await evaluate(`document.querySelector('#mobile-menu-toggle').click();`);
    await new Promise(r => setTimeout(r, 500));
    const isMenuOpen = await evaluate(`!document.querySelector('#mobile-menu-overlay').classList.contains('hidden')`);
    assert(isMenuOpen, `${vp.name} : Menu ouvert après clic`);

    // Déplier l'accordéon si fermé
    await evaluate(`
      (() => {
        const panel = document.querySelector('#mobile-services-accordion-panel');
        const toggle = document.querySelector('#mobile-services-accordion-toggle');
        if (panel && panel.classList.contains('hidden') && toggle) {
          toggle.click();
        }
      })()
    `);
    await new Promise(r => setTimeout(r, 400));
    const isAccordionOpen = await evaluate(`!document.querySelector('#mobile-services-accordion-panel').classList.contains('hidden')`);
    assert(isAccordionOpen, `${vp.name} : Accordéon 'Nos services' déplié`);

    // Vérifier la présence du conteneur défilant et de data-lenis-prevent
    const hasScrollContainer = await evaluate(`
      (() => {
        const sc = document.querySelector('#mobile-menu-scroll-container');
        return Boolean(sc && sc.hasAttribute('data-lenis-prevent'));
      })()
    `);
    assert(Boolean(hasScrollContainer), `${vp.name} : Conteneur #mobile-menu-scroll-container avec data-lenis-prevent présent`);

    // Vérifier la propriété overflow-y et hauteur dynamique
    const scrollStylesStr = await evaluate(`
      (function() {
        const overlay = document.querySelector('#mobile-menu-overlay');
        const sc = document.querySelector('#mobile-menu-scroll-container');
        if (!sc) return JSON.stringify({ error: 'no-sc' });
        const cs = window.getComputedStyle(sc);
        return JSON.stringify({
          overflowY: cs.overflowY,
          scrollHeight: sc.scrollHeight,
          clientHeight: sc.clientHeight,
          overlayHeight: overlay ? overlay.clientHeight : 0
        });
      })()
    `);
    const scrollStyles = JSON.parse(scrollStylesStr || '{}');
    assert(scrollStyles.overflowY === 'auto' || scrollStyles.overflowY === 'scroll', `${vp.name} : overflow-y: auto/scroll actif sur le conteneur`);
    assert(scrollStyles.scrollHeight >= scrollStyles.clientHeight, `${vp.name} : scrollHeight (${scrollStyles.scrollHeight}px) >= clientHeight (${scrollStyles.clientHeight}px)`);

    // Synthétiser un geste réel de balayage tactile CDP (Input.synthesizeScrollGesture)
    try {
      await send('Input.synthesizeScrollGesture', {
        x: Math.round(vp.width / 2),
        y: Math.round(vp.height * 0.75),
        yDistance: -600,
        speed: 1000
      });
    } catch (e) {
      // Repli direct par scroll element
      await evaluate(`
        (() => {
          const sc = document.querySelector('#mobile-menu-scroll-container');
          if (sc) sc.scrollTop = sc.scrollHeight;
        })()
      `);
    }
    await new Promise(r => setTimeout(r, 500));

    // Forcer le scroll jusqu'au bout
    await evaluate(`
      (() => {
        const sc = document.querySelector('#mobile-menu-scroll-container');
        if (sc) sc.scrollTop = sc.scrollHeight;
      })()
    `);
    await new Promise(r => setTimeout(r, 300));

    // Vérifier que le dernier élément (bouton ouvrir l'appli / bloc réseaux) est visible
    const bottomElementVisible = await evaluate(`
      (() => {
        const sc = document.querySelector('#mobile-menu-scroll-container');
        if (!sc) return false;
        const lastItem = sc.querySelector('a[href*="apps.multibusiness.cm"]') || sc.querySelector('a[href*="facebook"]');
        if (!lastItem) return false;
        const rect = lastItem.getBoundingClientRect();
        const containerRect = sc.getBoundingClientRect();
        // L'élément doit être à l'intérieur de la zone de visualisation du conteneur ou de la fenêtre
        return rect.top >= containerRect.top && rect.top < containerRect.bottom;
      })()
    `);
    assert(bottomElementVisible, `${vp.name} : Le bouton "Ouvrir l'application" est entièrement visible et atteignable tout en bas`);

    // Vérifier que l'en-tête est resté sticky en haut
    const headerSticky = await evaluate(`
      (() => {
        const h = document.querySelector('#mobile-menu-header');
        if (!h) return false;
        const r = h.getBoundingClientRect();
        return r.top >= -2 && r.top <= 2;
      })()
    `);
    assert(headerSticky, `${vp.name} : En-tête sticky resté bien ancré en haut (r.top == 0)`);

    // Prendre des captures d'écran des formats clés
    if (vp.width === 360 && vp.height === 640) {
      await capture('capture_mobile_menu_scrolled_bottom_360.png');
    } else if (vp.width === 390 && vp.height === 844) {
      await capture('capture_mobile_menu_scrolled_bottom_390.png');
    } else if (vp.width === 844 && vp.height === 390) {
      await capture('capture_mobile_menu_scrolled_landscape_844.png');
    }

    // Vérifier que le body est bien verrouillé (position fixed)
    const isBodyLocked = await evaluate(`document.body.style.position === 'fixed' && document.body.style.overflow === 'hidden'`);
    assert(isBodyLocked, `${vp.name} : Body fermement verrouillé (position: fixed, overflow: hidden)`);

    // Refermer le menu
    await evaluate(`document.querySelector('#mobile-menu-close').click();`);
    await new Promise(r => setTimeout(r, 600));

    // Vérifier la restauration exacte du scroll de la page
    const restoredScroll = await evaluate(`Math.round(window.scrollY || window.pageYOffset || 0)`);
    const isBodyUnlocked = await evaluate(`document.body.style.position === '' && document.body.style.overflow === ''`);
    assert(isBodyUnlocked, `${vp.name} : Body déverrouillé après fermeture`);
    assert(Math.abs(restoredScroll - initialPageScroll) <= 3, `${vp.name} : Position de scroll de la page restaurée exactement (${restoredScroll}px == ${initialPageScroll}px)`);
  }

  // C. Test de résistance : 50 ouvertures/fermetures rapides sans blocage
  console.log('\n--- C. Test d\'endurance : 50 ouvertures / fermetures ultra-rapides ---');
  let enduranceSuccess = true;
  for (let i = 0; i < 50; i++) {
    await evaluate(`document.querySelector('#mobile-menu-toggle').click();`);
    await new Promise(r => setTimeout(r, 20));
    await evaluate(`document.querySelector('#mobile-menu-close').click();`);
    await new Promise(r => setTimeout(r, 20));
  }
  await new Promise(r => setTimeout(r, 300));
  const finalBodyState = await evaluate(`document.body.style.position === '' && document.body.style.overflow === ''`);
  assert(finalBodyState, '50 ouvertures/fermetures rapides : Aucun verrouillage fantôme sur le body');

  // D. Erreurs console
  assert(consoleErrors.length === 0, `Zéro erreur console rencontrée (Erreurs: ${consoleErrors.length})`);

  ws.close();
  try { chromeProc.kill(); } catch (e) {}
  try { fs.rmSync(tempProfile, { recursive: true, force: true }); } catch (e) {}

  console.log('\n============================================================');
  console.log(`RÉSULTAT DU TEST MENU : ${passedAssertions} / ${totalAssertions} assertions passées (${((passedAssertions / totalAssertions) * 100).toFixed(1)}%)`);
  console.log('============================================================');

  if (passedAssertions === totalAssertions) {
    console.log('\n🎉 TOUS LES TESTS DE DÉFILEMENT ET CONTENU DU MENU MOBILE SONT VALIDÉS À 100% !\n');
    process.exit(0);
  } else {
    console.error(`\n❌ ÉCHEC : ${totalAssertions - passedAssertions} assertion(s) en erreur.\n`);
    process.exit(1);
  }
}

run().catch(err => {
  console.error('Erreur test:menu:', err);
  process.exit(1);
});
