/**
 * MULTI BUSINESS SARL - SPA Navigation Simulation & Dynamic Imports Test
 */

import fs from 'fs';
import path from 'path';

console.log('========================================================================');
console.log(' TEST DE NAVIGATION INTERNE SPA & CHARGEMENT DYNAMIQUE DES MODULES');
console.log('========================================================================\n');

const routesToTest = [
  { path: '/', modulePath: './assets/js/views/home.js', label: 'Accueil' },
  { path: '/qui-sommes-nous', modulePath: './assets/js/views/a-propos.js', label: 'Qui sommes-nous' },
  { path: '/services', modulePath: './assets/js/views/services.js', label: 'Nos Services' },
  { path: '/gestion-immobiliere', modulePath: './assets/js/views/gestion-locative.js', label: 'Gestion Immobilière' },
  { path: '/creation-entreprise', modulePath: './assets/js/views/creation-entreprise.js', label: 'Création Entreprise' },
  { path: '/dedouanement', modulePath: './assets/js/views/dedouanement.js', label: 'Dédouanement' },
  { path: '/prestation-de-services', modulePath: './assets/js/views/prestation-services.js', label: 'Prestations de Services' },
  { path: '/fiscalite-conseil', modulePath: './assets/js/views/fiscalite.js', label: 'Fiscalité et Conseil' },
  { path: '/contact', modulePath: './assets/js/views/contact.js', label: 'Contact' },
  { path: '/404', modulePath: './assets/js/views/not-found.js', label: 'Page 404' }
];

let successCount = 0;

for (const route of routesToTest) {
  try {
    const fullPath = path.resolve(process.cwd(), route.modulePath);
    const module = await import(`file://${fullPath}`);
    const view = module.default || module;
    
    if (typeof view.render !== 'function') {
      throw new Error(`view.render() manquant pour la route ${route.path}`);
    }

    const renderedHtml = await view.render();
    if (!renderedHtml || typeof renderedHtml !== 'string' || renderedHtml.length < 50) {
      throw new Error(`Rendu HTML vide ou incomplet pour ${route.path}`);
    }

    // Vérification de la présence des meta SEO
    if (!view.meta || !view.meta.title) {
      throw new Error(`Objet meta.title manquant pour ${route.path}`);
    }

    console.log(`  ✅ [ROUTE VALIDÉE] ${route.path.padEnd(22)} (${route.label}) -> ${renderedHtml.length} octets générés`);
    successCount++;
  } catch (err) {
    console.error(`  ❌ [ROUTE ÉCHOUÉE] ${route.path} :`, err.message);
  }
}

console.log('\n========================================================================');
console.log(` RÉSULTATS : ${successCount} / ${routesToTest.length} routes SPA validées avec succès !`);
console.log('========================================================================\n');

if (successCount === routesToTest.length) {
  process.exit(0);
} else {
  process.exit(1);
}
