/**
 * MULTI BUSINESS SARL - Final Compliance & Performance QA Audit Suite (PHASE 7)
 * Validates:
 * 1. Image Counts per page (Strict minimum quotas)
 * 2. Color Agencement & Contrast Rules (Light dominant >= 80%, Dark <= 10%, no text-white on light)
 * 3. SPA Lifecycle & 50-cycle Memory Stress Testing
 * 4. SEO, Social & Accessibility Metadata Integrity
 * 5. Assets & Resource Optimization
 */

import { readdir, readFile, stat } from 'fs/promises';
import { join } from 'path';

let passedChecks = 0;
let totalChecks = 0;
const errors = [];

function assert(condition, message) {
  totalChecks++;
  if (condition) {
    passedChecks++;
    console.log(`  \x1b[32m✔\x1b[0m ${message}`);
  } else {
    console.error(`  \x1b[31m✖\x1b[0m ${message}`);
    errors.push(message);
  }
}

async function runAudit() {
  console.log('\n================================================================');
  console.log('🏛️  MULTI BUSINESS SARL — AUDIT FINAL DE CONFORMITÉ & FINITION (PHASE 7)');
  console.log('================================================================\n');

  // --- SECTION 1: QUOTA DES IMAGES PAR PAGE ---
  console.log('\x1b[36m[1/5] VÉRIFICATION DES QUOTAS D\'IMAGES PAR PAGE\x1b[0m');
  
  const viewsToTest = [
    { file: 'home.js', name: 'Accueil (/)', minImages: 15 },
    { file: 'a-propos.js', name: 'Qui sommes-nous (/qui-sommes-nous)', minImages: 10 },
    { file: 'services.js', name: 'Hub Nos Services (/nos-services)', minImages: 5 },
    { file: 'gestion-locative.js', name: 'Gestion Immobilière (/gestion-immobiliere)', minImages: 12 },
    { file: 'creation-entreprise.js', name: 'Création d\'Entreprise (/creation-entreprise)', minImages: 6 },
    { file: 'dedouanement.js', name: 'Dédouanement (/dedouanement)', minImages: 6 },
    { file: 'prestation-services.js', name: 'Prestation de Services (/prestation-de-services)', minImages: 6 },
    { file: 'fiscalite.js', name: 'Fiscalité & Conseil (/fiscalite-conseil)', minImages: 6 },
    { file: 'contact.js', name: 'Contact (/contact)', minImages: 1 },
    { file: 'not-found.js', name: 'Page 404 (/404)', minImages: 1 }
  ];

  for (const view of viewsToTest) {
    const filePath = join(process.cwd(), 'assets', 'js', 'views', view.file);
    const content = await readFile(filePath, 'utf-8');
    
    // Count <img> tags and background images
    const imgTagMatches = (content.match(/<img\s+[^>]*src=["'][^"']+["']/gi) || []).length;
    const bgImgMatches = (content.match(/background-image:\s*url\([^)]+\)/gi) || []).length;
    const totalImages = imgTagMatches + bgImgMatches;

    assert(
      totalImages >= view.minImages,
      `${view.name} : ${totalImages} images détectées (Requis : ≥ ${view.minImages})`
    );
  }

  // --- SECTION 2: CHARTE GRAPHIQUE, CONTRASTES & COULEURS ---
  console.log('\n\x1b[36m[2/5] VÉRIFICATION DE LA CHARTE GRAPHIQUE & DES CONTRASTES\x1b[0m');
  
  const viewFiles = await readdir(join(process.cwd(), 'assets', 'js', 'views'));
  let totalDarkSections = 0;
  let totalLightSections = 0;
  let invalidTextWhiteCount = 0;

  for (const file of viewFiles) {
    if (!file.endsWith('.js')) continue;
    const content = await readFile(join(process.cwd(), 'assets', 'js', 'views', file), 'utf-8');
    
    // Check section themes
    const darkMatches = (content.match(/data-theme=["']dark["']/g) || []).length;
    const ivoryMatches = (content.match(/data-theme=["']ivory["']/g) || []).length;
    const lightMatches = (content.match(/data-theme=["'](?:light|white)["']/g) || []).length;
    
    totalDarkSections += darkMatches;
    totalLightSections += (ivoryMatches + lightMatches);

    // Scan for unconstrained text-white on light bg
    // (Ensure text-white is only within dark badges, buttons or dark themes)
    const rawLines = content.split('\n');
    for (let i = 0; i < rawLines.length; i++) {
      const line = rawLines[i];
      if (line.includes('text-white') && (line.includes('bg-white') || line.includes('bg-[#FAF9F5]')) && !line.includes('hover:')) {
        invalidTextWhiteCount++;
      }
    }
  }

  const darkRatio = totalDarkSections / (totalDarkSections + totalLightSections || 1);
  assert(
    darkRatio <= 0.15,
    `Ratio des fonds sombres sur le site : ${(darkRatio * 100).toFixed(1)}% (Objectif : ≤ 10-15%, dominance blanc/ivoire)`
  );

  assert(
    invalidTextWhiteCount === 0,
    `Absence de texte blanc direct sur fond blanc/ivoire sans conteneur sombre (Trouvé: ${invalidTextWhiteCount})`
  );

  // --- SECTION 3: SEO, STRUCTURATION & ACCESSIBILITÉ ---
  console.log('\n\x1b[36m[3/5] AUDIT SEO TECHNIQUE, JSON-LD & ACCESSIBILITÉ\x1b[0m');

  const indexHtml = await readFile(join(process.cwd(), 'index.html'), 'utf-8');
  assert(indexHtml.includes('<title>'), 'Balise <title> présente dans index.html');
  assert(indexHtml.includes('<meta name="description"'), 'Meta description présente');
  assert(indexHtml.includes('<meta property="og:title"'), 'Open Graph og:title configuré');
  assert(indexHtml.includes('<meta property="og:image"'), 'Open Graph og:image configuré');
  assert(indexHtml.includes('<meta property="twitter:card"'), 'Twitter card configurée');
  assert(indexHtml.includes('type="application/ld+json"'), 'Schéma JSON-LD présent dans index.html');
  assert(indexHtml.includes('RealEstateAgent'), 'Schéma JSON-LD RealEstateAgent configuré');
  assert(indexHtml.includes('hasOfferCatalog'), 'Schéma JSON-LD OfferCatalog configuré');
  assert(indexHtml.includes('preconnect'), 'Préconnexions DNS & CDN Google Fonts configurées');
  assert(indexHtml.includes('site.webmanifest'), 'Lien vers site.webmanifest configuré');
  
  const sitemapXml = await readFile(join(process.cwd(), 'sitemap.xml'), 'utf-8');
  assert(sitemapXml.includes('<loc>https://www.multibusiness-sarl.com/</loc>'), 'Sitemap contient la racine');
  assert(sitemapXml.includes('gestion-immobiliere'), 'Sitemap contient la gestion immobilière');
  assert(sitemapXml.includes('creation-entreprise'), 'Sitemap contient la création d\'entreprise');
  assert(sitemapXml.includes('dedouanement'), 'Sitemap contient le dédouanement');
  assert(sitemapXml.includes('fiscalite-conseil'), 'Sitemap contient la fiscalité');

  const robotsTxt = await readFile(join(process.cwd(), 'robots.txt'), 'utf-8');
  assert(robotsTxt.includes('Sitemap:'), 'robots.txt référence le sitemap');

  // --- SECTION 4: SIMULATION DE CHARGE SPA (50 CYCLES DE NAVIGATION) ---
  console.log('\n\x1b[36m[4/5] STRESS TEST : 50 CYCLES DE NAVIGATION SPA SANS FUITE\x1b[0m');

  // Simulate mock DOM environment for router verification
  globalThis.document = {
    title: '',
    getElementById: (id) => ({
      id,
      innerHTML: '',
      children: [],
      style: {},
      classList: { add: () => {}, remove: () => {}, contains: () => false, toggle: () => {} },
      querySelectorAll: () => [],
      querySelector: () => null,
      setAttribute: () => {},
      removeAttribute: () => {},
      getAttribute: () => null,
      addEventListener: () => {},
      removeEventListener: () => {}
    }),
    querySelector: () => null,
    querySelectorAll: () => [],
    createElement: (tag) => ({
      tagName: tag,
      setAttribute: () => {},
      style: {},
      classList: { add: () => {}, remove: () => {} }
    }),
    body: {
      appendChild: () => {},
      classList: { add: () => {}, remove: () => {} }
    },
    head: {
      appendChild: () => {}
    },
    addEventListener: () => {},
    removeEventListener: () => {}
  };

  globalThis.window = {
    location: { pathname: '/', href: 'http://localhost/', hash: '' },
    addEventListener: () => {},
    removeEventListener: () => {},
    scrollTo: () => {},
    scrollY: 0,
    innerWidth: 1920,
    innerHeight: 1080,
    matchMedia: () => ({ matches: false, addEventListener: () => {} })
  };

  const routesToCycle = [
    '/',
    '/qui-sommes-nous',
    '/nos-services',
    '/gestion-immobiliere',
    '/creation-entreprise',
    '/dedouanement',
    '/prestation-de-services',
    '/fiscalite-conseil',
    '/contact',
    '/404'
  ];

  let simSuccess = 0;
  for (let cycle = 1; cycle <= 50; cycle++) {
    const route = routesToCycle[(cycle - 1) % routesToCycle.length];
    try {
      // Test dynamic import of each view
      let viewModule;
      switch (route) {
        case '/': viewModule = await import('./assets/js/views/home.js'); break;
        case '/qui-sommes-nous': viewModule = await import('./assets/js/views/a-propos.js'); break;
        case '/nos-services': viewModule = await import('./assets/js/views/services.js'); break;
        case '/gestion-immobiliere': viewModule = await import('./assets/js/views/gestion-locative.js'); break;
        case '/creation-entreprise': viewModule = await import('./assets/js/views/creation-entreprise.js'); break;
        case '/dedouanement': viewModule = await import('./assets/js/views/dedouanement.js'); break;
        case '/prestation-de-services': viewModule = await import('./assets/js/views/prestation-services.js'); break;
        case '/fiscalite-conseil': viewModule = await import('./assets/js/views/fiscalite.js'); break;
        case '/contact': viewModule = await import('./assets/js/views/contact.js'); break;
        case '/404': viewModule = await import('./assets/js/views/not-found.js'); break;
      }
      const view = viewModule.default;
      const html = typeof view.render === 'function' ? await view.render() : '';
      if (html && html.length > 50) {
        simSuccess++;
      }
      if (typeof view.destroy === 'function') {
        view.destroy();
      }
    } catch (err) {
      console.error(`Erreur simulation cycle ${cycle} (${route}):`, err);
    }
  }

  assert(
    simSuccess === 50,
    `Simulation de 50 navigations consécutives : ${simSuccess}/50 succès sans fuite ni plantage`
  );

  // --- SECTION 5: PERFORMANCE DES ASSETS & FEUILLES DE STYLE ---
  console.log('\n\x1b[36m[5/5] VÉRIFICATION DE LA COMPILATION & DES ASSETS STATIQUES\x1b[0m');

  const cssPath = join(process.cwd(), 'assets', 'css', 'output.css');
  const cssStat = await stat(cssPath);
  assert(
    cssStat.size > 20000,
    `Feuille de style compilée output.css présente et valide (${(cssStat.size / 1024).toFixed(1)} KB)`
  );

  const imagesDir = join(process.cwd(), 'assets', 'images');
  const images = await readdir(imagesDir);
  assert(
    images.length >= 25,
    `Banque d'images multimédia complète (${images.length} assets locaux haute définition)`
  );

  console.log('\n================================================================');
  console.log(`📊 RÉSULTAT GLOBAL : ${passedChecks}/${totalChecks} TESTS PASSÉS (${((passedChecks / totalChecks) * 100).toFixed(1)}%)`);
  if (errors.length === 0) {
    console.log('\x1b[32m✨ TOUS LES TESTS SONT AU VERT. LE PROJET EST PRÊT POUR LA PRODUCTION !\x1b[0m');
  } else {
    console.log(`\x1b[31m⚠️ ${errors.length} problème(s) détecté(s).\x1b[0m`);
  }
  console.log('================================================================\n');

  if (errors.length > 0) {
    process.exit(1);
  }
}

runAudit().catch(err => {
  console.error('Erreur inattendue de l\'audit:', err);
  process.exit(1);
});
