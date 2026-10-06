/**
 * MULTI BUSINESS SARL - Application Bootstrapper
 * Vanilla SPA Engine + GSAP + ScrollTrigger + Lenis
 */

import Router from './router.js';
import { CONFIG } from './config.js';
import { initSmoothScroll } from './animations.js';
import { initHeader, initMobileMenu, initScrollProgressBar, initCustomCursor } from './ui.js';

// Table de routage SPA exhaustive (avec gestion stricte de toutes les URLs et alias)
const routes = {
  '/': () => import('./views/home.js'),
  '/qui-sommes-nous': () => import('./views/a-propos.js'),
  '/a-propos': () => import('./views/a-propos.js'),
  '/gestion-immobiliere': () => import('./views/gestion-locative.js'),
  '/gestion-locative': () => import('./views/gestion-locative.js'),
  '/nos-services': () => import('./views/services.js'),
  '/services': () => import('./views/services.js'),
  '/creation-entreprise': () => import('./views/creation-entreprise.js'),
  '/creation-d-entreprise': () => import('./views/creation-entreprise.js'),
  '/dedouanement': () => import('./views/dedouanement.js'),
  '/prestation-de-services': () => import('./views/prestation-services.js'),
  '/prestation-services': () => import('./views/prestation-services.js'),
  '/fiscalite-conseil': () => import('./views/fiscalite.js'),
  '/fiscalite': () => import('./views/fiscalite.js'),
  '/contact': () => import('./views/contact.js'),
  '/design-system': () => import('./views/design-system.js'),
  '/test-a': () => import('./views/test-a.js'),
  '/test-b': () => import('./views/test-b.js'),
  '/test-c': () => import('./views/test-c.js'),
  '/404': () => import('./views/not-found.js'),
  '*': () => import('./views/not-found.js'),
};

/**
 * Gestion du Preloader (au premier chargement uniquement avec chien de garde absolu)
 */
const handlePreloader = () => {
  const preloader = document.getElementById('app-preloader');
  if (!preloader) return;

  const removePreloader = () => {
    if (preloader && preloader.parentNode) {
      preloader.parentNode.removeChild(preloader);
    }
  };

  // Chien de garde absolu : suppression garantie après 3.5s quoi qu'il arrive
  const safetyTimer = setTimeout(removePreloader, 3500);

  const hasSeenPreloader = sessionStorage.getItem('mb_preloader_seen');
  if (hasSeenPreloader) {
    clearTimeout(safetyTimer);
    removePreloader();
    return;
  }

  sessionStorage.setItem('mb_preloader_seen', 'true');

  if (window.gsap) {
    const tl = window.gsap.timeline({
      onComplete: () => {
        clearTimeout(safetyTimer);
        removePreloader();
      }
    });

    tl.to('#preloader-logo', {
      scale: 1.15,
      duration: 0.6,
      ease: "power2.out"
    })
    .to(preloader, {
      opacity: 0,
      y: -20,
      duration: 0.5,
      ease: "power2.inOut",
      delay: 0.15
    });
  } else {
    setTimeout(() => {
      clearTimeout(safetyTimer);
      removePreloader();
    }, 400);
  }
};

/**
 * Vérification de l'intégrité du chargement des styles CSS
 */
const checkCssIntegrity = () => {
  try {
    const isLoaded = getComputedStyle(document.documentElement).getPropertyValue('--app-css-loaded').trim();
    if (isLoaded !== '1') {
      console.warn('[App] CSS non encore appliqué. Tentative de rafraîchissement du lien CSS.');
      const link = document.querySelector('link[href*="output.css"]');
      if (link) {
        link.href = `./assets/css/output.css?v=${Date.now()}`;
      }
    }
  } catch (e) {
    // Silencieux
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Contrôle d'intégrité CSS
  checkCssIntegrity();

  // 2. Initialiser le défilement fluide Lenis
  initSmoothScroll();

  // 3. Initialiser les interactions d'interface permanentes
  initHeader();
  initMobileMenu();
  initScrollProgressBar();
  initCustomCursor();

  // 4. Initialiser le routeur SPA
  const router = new Router(routes);
  window.appRouter = router;

  // 5. Exécuter le preloader élégant
  handlePreloader();

  // 6. Filet de sécurité visuel pour les images : évite tout bloc vide ou blanc
  window.addEventListener('error', (e) => {
    if (e.target && e.target.tagName === 'IMG') {
      const img = e.target;
      if (!img.dataset.fallbackApplied) {
        img.dataset.fallbackApplied = 'true';
        img.classList.add('bg-slate-100', 'p-4');
        img.style.objectFit = 'contain';
        img.src = './assets/images/logo-transparent.png';
      }
    }
  }, true);

  console.log(`✨ [App] MULTI BUSINESS SARL SPA Engine Running smoothly.`);
});


