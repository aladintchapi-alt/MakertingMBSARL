/**
 * MULTI BUSINESS SARL - High Performance Vanilla SPA Router
 * Zero Browser Reloads • Prefetch Cache • View Lifecycle (init/destroy) • Accessibility
 * Universal BasePath Support (Works on XAMPP /MakertingMBSARL/ as well as root /)
 */

import { CONFIG } from './config.js';
import { pageTransitions, killScrollTriggers, initScrollReveals, animateCounters, initMagneticElements, getLenis } from './animations.js';
import { updateActiveNavLink } from './ui.js';

class Router {
  constructor(routes = {}) {
    this.routes = routes;
    this.appContainer = document.getElementById('app');
    this.currentPath = null;
    this.currentViewInstance = null;
    this.isTransitioning = false;
    this.viewCache = new Map();
    this.scrollPositions = new Map();

    this.detectBasePath();
    this.initAccessibilityAnnouncer();
    this.initListeners();
    this.initPrefetching();

    // Résolution de la route initiale
    const initialPath = this.stripBasePath(window.location.pathname);
    this.initialPromise = this.resolveRoute(initialPath, false, 0);
  }

  /**
   * Détecte le sous-dossier d'exécution (ex: /MakertingMBSARL sous XAMPP ou vide sous root)
   */
  detectBasePath() {
    const pathname = window.location.pathname;
    if (pathname.toLowerCase().includes('/makertingmbsarl')) {
      this.basePath = '/MakertingMBSARL';
    } else {
      this.basePath = '';
    }
  }

  /**
   * Supprime le basePath pour obtenir la route relative propre (ex: /gestion-locative)
   */
  stripBasePath(path) {
    if (!path) return '/';
    let clean = path;
    if (this.basePath && clean.toLowerCase().startsWith(this.basePath.toLowerCase())) {
      clean = clean.slice(this.basePath.length);
    }
    if (!clean.startsWith('/')) {
      clean = '/' + clean;
    }
    if (clean.length > 1 && clean.endsWith('/')) {
      clean = clean.slice(0, -1);
    }
    return clean || '/';
  }

  /**
   * Construit une URL absolue tenant compte du basePath
   */
  buildPath(path) {
    const clean = this.stripBasePath(path);
    return `${this.basePath}${clean}`;
  }

  /**
   * Crée la zone aria-live invisible pour annoncer les changements de page aux lecteurs d'écran
   */
  initAccessibilityAnnouncer() {
    let announcer = document.getElementById('route-announcer');
    if (!announcer) {
      announcer = document.createElement('div');
      announcer.id = 'route-announcer';
      announcer.setAttribute('aria-live', 'polite');
      announcer.setAttribute('aria-atomic', 'true');
      announcer.className = 'sr-only';
      announcer.style.position = 'absolute';
      announcer.style.width = '1px';
      announcer.style.height = '1px';
      announcer.style.padding = '0';
      announcer.style.margin = '-1px';
      announcer.style.overflow = 'hidden';
      announcer.style.clip = 'rect(0, 0, 0, 0)';
      announcer.style.whiteSpace = 'nowrap';
      announcer.style.border = '0';
      document.body.appendChild(announcer);
    }
    this.announcer = announcer;
  }

  /**
   * Initialise l'écoute des clics et des événements popstate
   */
  initListeners() {
    // Interception globale des clics
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      const target = link.getAttribute('target');

      // 1. Liens externes, mailto, tel, target=_blank
      if (!href || href.startsWith('http://') || href.startsWith('https://') || href.startsWith('mailto:') || href.startsWith('tel:') || target === '_blank') {
        return;
      }

      // 2. Gestion des ancres (#section)
      if (href.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(href);
        if (targetElement) {
          const lenis = getLenis();
          if (lenis) {
            lenis.scrollTo(targetElement, { offset: -80, duration: 1.2 });
          } else {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
        return;
      }

      // 3. Navigation interne SPA
      e.preventDefault();
      
      // Empêcher les clics multiples pendant la transition
      if (this.isTransitioning) return;

      this.navigate(href);
    });

    // Gestion du retour / avance dans l'historique navigateur
    window.addEventListener('popstate', (e) => {
      const targetPath = this.stripBasePath(window.location.pathname);
      const savedScroll = (e.state && e.state.scrollPos) || this.scrollPositions.get(targetPath) || 0;
      this.resolveRoute(targetPath, false, savedScroll);
    });

    // Sauvegarde de la position de scroll
    window.addEventListener('scroll', () => {
      if (this.currentPath) {
        this.scrollPositions.set(this.currentPath, window.scrollY);
      }
    }, { passive: true });
  }

  /**
   * Système de Prefetch intelligent au survol des liens (mouseenter / touchstart)
   */
  initPrefetching() {
    const handlePrefetch = (e) => {
      const link = e.target.closest('a[href], a[data-link]');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        return;
      }

      const normalized = this.stripBasePath(href);
      this.prefetchRoute(normalized);
    };

    document.addEventListener('mouseenter', handlePrefetch, true);
    document.addEventListener('touchstart', handlePrefetch, { passive: true, capture: true });
  }

  /**
   * Précharge le module JS d'une route en tâche de fond
   */
  async prefetchRoute(path) {
    if (this.viewCache.has(path)) return;

    const viewLoader = this.routes[path];
    if (typeof viewLoader === 'function') {
      try {
        const module = await viewLoader();
        this.viewCache.set(path, module.default || module);
      } catch (err) {
        // Silencieux pour le prefetch
      }
    }
  }

  /**
   * Déclenche une navigation programmatique ou utilisateur
   */
  async navigate(path) {
    const cleanPath = this.stripBasePath(path);

    // Si on est déjà sur la page et qu'on reclique : on scrolle en haut
    if (cleanPath === this.currentPath) {
      const lenis = getLenis();
      if (lenis) lenis.scrollTo(0, { duration: 0.8 });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (this.isTransitioning) return;

    // Enregistrement du scroll actuel
    this.scrollPositions.set(this.currentPath, window.scrollY);

    // Push dans l'historique avec le chemin complet (basePath inclus)
    const fullPath = this.buildPath(cleanPath);
    window.history.pushState({ scrollPos: 0, path: cleanPath }, '', fullPath);

    await this.resolveRoute(cleanPath, true, 0);
  }

  /**
   * Résout et rend la vue demandée
   */
  async resolveRoute(path, shouldAnimate = true, targetScroll = 0) {
    if (this.isTransitioning) return;
    this.isTransitioning = true;

    const cleanPath = this.stripBasePath(path);
    let viewLoader = this.routes[cleanPath];

    // Fallback 404
    if (!viewLoader) {
      viewLoader = this.routes['/404'] || this.routes['*'];
    }

    try {
      // 1. DESTROY de la vue précédente
      if (this.currentViewInstance && typeof this.currentViewInstance.destroy === 'function') {
        try {
          this.currentViewInstance.destroy();
        } catch (err) {
          console.warn('[Router] Erreur lors du destroy() de la vue précédente:', err);
        }
      }

      // Nettoyage systématique des ScrollTriggers actifs
      killScrollTriggers();

      // 2. Sortie animée
      if (shouldAnimate && this.appContainer && this.appContainer.children.length > 0) {
        await pageTransitions.leave(this.appContainer);
      }

      // 3. Récupération du module de vue
      let view = this.viewCache.get(cleanPath);
      if (!view) {
        const loadedModule = typeof viewLoader === 'function' ? await viewLoader() : viewLoader;
        view = loadedModule.default || loadedModule;
        this.viewCache.set(cleanPath, view);
      }

      this.currentViewInstance = view;
      this.currentPath = cleanPath;

      // 4. Injection du HTML
      if (this.appContainer) {
        const html = typeof view.render === 'function' ? await view.render() : '';
        this.appContainer.innerHTML = html;
      }

      // 5. Restauration du scroll
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(targetScroll, { immediate: true });
      } else {
        window.scrollTo(0, targetScroll);
      }

      // 6. Mise à jour SEO & Annonce Accessibilité
      this.updateSEO(view.meta || {});
      this.announcePageChange(view.meta ? view.meta.title : 'Page');

      // 7. Mise à jour des liens actifs
      updateActiveNavLink(cleanPath);

      // 8. Gestion du focus
      this.manageFocus();

      // 9. Initialisation des composants interactifs globaux
      initScrollReveals(this.appContainer);
      animateCounters(this.appContainer);
      initMagneticElements(this.appContainer);

      // 10. INIT de la nouvelle vue
      if (typeof view.init === 'function') {
        try {
          await view.init(this.appContainer);
        } catch (err) {
          console.error('[Router] Erreur lors du init() de la vue:', err);
        }
      }

      // 11. Entrée animée cinématique
      if (shouldAnimate && this.appContainer) {
        await pageTransitions.enter(this.appContainer);
      } else if (this.appContainer) {
        this.appContainer.style.opacity = '1';
        this.appContainer.style.transform = 'none';
      }

    } catch (error) {
      console.error(`[Router] Erreur critique de navigation vers ${cleanPath}:`, error);
      if (this.appContainer) {
        this.appContainer.innerHTML = `
          <div class="min-h-[60vh] flex flex-col items-center justify-center text-center p-8">
            <h2 class="text-2xl font-bold text-white mb-4">Une erreur inattendue est survenue</h2>
            <p class="text-slate-400 mb-6">Impossible de charger cette section.</p>
            <a href="/" data-link class="btn-primary">Retour à l'accueil</a>
          </div>
        `;
        this.appContainer.style.opacity = '1';
      }
    } finally {
      this.isTransitioning = false;
    }
  }

  /**
   * Gestion du focus
   */
  manageFocus() {
    if (!this.appContainer) return;
    const h1 = typeof this.appContainer.querySelector === 'function' ? this.appContainer.querySelector('h1') : null;
    if (h1 && typeof h1.setAttribute === 'function') {
      h1.setAttribute('tabindex', '-1');
      if (typeof h1.focus === 'function') h1.focus({ preventScroll: true });
    } else if (typeof this.appContainer.setAttribute === 'function') {
      this.appContainer.setAttribute('tabindex', '-1');
      if (typeof this.appContainer.focus === 'function') this.appContainer.focus({ preventScroll: true });
    }
  }

  /**
   * Mise à jour SEO
   */
  updateSEO(meta = {}) {
    const siteTitle = CONFIG.company.name;
    const pageTitle = meta.title ? `${meta.title} | ${siteTitle}` : CONFIG.seo.defaultTitle;
    document.title = pageTitle;

    const pageDesc = meta.description || CONFIG.seo.defaultDescription;
    const currentUrl = window.location.href;

    this.setMetaTag('name', 'description', pageDesc);
    this.setMetaTag('property', 'og:title', pageTitle);
    this.setMetaTag('property', 'og:description', pageDesc);
    this.setMetaTag('property', 'og:url', currentUrl);
    this.setMetaTag('property', 'twitter:title', pageTitle);
    this.setMetaTag('property', 'twitter:description', pageDesc);
  }

  setMetaTag(attrType, attrName, value) {
    let el = document.querySelector(`meta[${attrType}="${attrName}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attrType, attrName);
      document.head.appendChild(el);
    }
    el.setAttribute('content', value);
  }

  announcePageChange(title) {
    if (this.announcer) {
      this.announcer.textContent = `Page chargée : ${title}`;
    }
  }
}

export default Router;
