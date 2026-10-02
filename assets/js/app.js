/**
 * MULTI BUSINESS SARL - Application Bootstrapper
 * Vanilla SPA Engine + GSAP + ScrollTrigger + Lenis
 */

import Router from './router.js';
import { CONFIG } from './config.js';
import { initSmoothScroll } from './animations.js';
import { initHeader, initMobileMenu, initScrollProgressBar, initCustomCursor } from './ui.js';

// Table de routage SPA
const routes = {
  '/': () => import('./views/home.js'),
  '/gestion-locative': () => import('./views/gestion-locative.js'),
  '/services': () => import('./views/services.js'),
  '/a-propos': () => import('./views/a-propos.js'),
  '/contact': () => import('./views/contact.js'),
  '/design-system': () => import('./views/design-system.js'),
  '/404': () => import('./views/not-found.js'),
  '*': () => import('./views/not-found.js'),
};

/**
 * Gestion du Preloader (au premier chargement uniquement)
 */
const handlePreloader = () => {
  const preloader = document.getElementById('app-preloader');
  if (!preloader) return;

  const hasSeenPreloader = sessionStorage.getItem('mb_preloader_seen');

  if (hasSeenPreloader) {
    preloader.remove();
    return;
  }

  sessionStorage.setItem('mb_preloader_seen', 'true');

  if (window.gsap) {
    const tl = window.gsap.timeline({
      onComplete: () => {
        preloader.remove();
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
    setTimeout(() => preloader.remove(), 400);
  }
};

document.addEventListener('DOMContentLoaded', async () => {
  // 1. Initialiser le défilement fluide Lenis
  initSmoothScroll();

  // 2. Initialiser les interactions d'interface permanentes
  initHeader();
  initMobileMenu();
  initScrollProgressBar();
  initCustomCursor();

  // 3. Initialiser le routeur SPA
  const router = new Router(routes);
  window.appRouter = router;

  // 4. Exécuter le preloader élégant
  handlePreloader();

  console.log(`✨ [App] MULTI BUSINESS SARL SPA Engine Running smoothly.`);
});
