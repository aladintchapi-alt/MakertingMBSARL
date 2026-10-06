/**
 * MULTI BUSINESS SARL - High Performance Vanilla SPA Router (Fail-Safe Engine)
 * - Navigation State Machine: idle -> leaving -> loading -> entering -> idle
 * - AbortController: Clean cancellation of in-flight transitions on rapid clicks
 * - Dual Watchdogs: 2.5s Transition Timeout & 4.0s View Mount Timeout
 * - Bullet-Proof finally: Overlays opacity 0, visibility hidden, pointer-events none
 * - Recovery Handlers: popstate, pageshow (bfcache), visibilitychange, resize, online
 * - Global Error Trap: window.onerror & unhandledrejection force-clean overlays
 * - Universal BasePath: XAMPP /MakertingMBSARL/ or root domain /
 */

import { CONFIG } from './config.js';
import {
  pageTransitions,
  forceResetOverlays,
  killScrollTriggers,
  refreshScrollTriggers,
  initScrollReveals,
  animateCounters,
  initMagneticElements,
  getLenis
} from './animations.js';
import { updateActiveNavLink } from './ui.js';
import { destroy3DPhoneViewer } from './scene3d.js';

class Router {
  constructor(routes = {}) {
    this.routes = routes;
    this.appContainer = document.getElementById('app');
    this.currentPath = null;
    this.currentViewInstance = null;

    // Machine à états explicite : 'idle' | 'leaving' | 'loading' | 'entering'
    this.state = 'idle';
    this.currentAbortController = null;

    this.viewCache = new Map();
    this.scrollPositions = new Map();

    this.detectBasePath();
    this.initAccessibilityAnnouncer();
    this.initListeners();
    this.initPrefetching();
    this.initRecoveryAndSafetyHooks();

    // Résolution de la route initiale (support direct History API & hash fallback)
    let initialPath = this.stripBasePath(window.location.pathname);
    if (window.location.hash && window.location.hash.startsWith('#/')) {
      initialPath = this.stripBasePath(window.location.hash.slice(1));
    }
    this.initialPromise = this.resolveRoute(initialPath, false, 0);
  }

  /**
   * Détecte le sous-dossier d'exécution (support universel : racine, sous-dossier, ngrok)
   */
  detectBasePath() {
    let base = window.__APP_BASE__;
    if (!base) {
      const baseEl = document.querySelector('base');
      if (baseEl && baseEl.getAttribute('href')) {
        base = baseEl.getAttribute('href');
      }
    }
    if (!base) {
      const pathname = window.location.pathname;
      const knownRoutes = Object.keys(this.routes || {}).map(r => r.replace(/^\//, '')).filter(Boolean);
      for (const route of knownRoutes) {
        const pattern = new RegExp('/' + route + '(/)?$', 'i');
        if (pattern.test(pathname)) {
          base = pathname.replace(pattern, '') + '/';
          break;
        }
      }
    }
    if (!base) {
      base = window.location.pathname.replace(/\/[^/]+\.[a-zA-Z0-9]+$/, '') + '/';
    }

    // Normaliser : basePath sans slash final pour concaténation aisée (ex: "/MakertingMBSARL" ou "")
    let norm = (base || '').replace(/\/+$/, '');
    if (norm === '/' || norm === '') {
      this.basePath = '';
    } else {
      this.basePath = norm.startsWith('/') ? norm : '/' + norm;
    }
  }

  /**
   * Supprime le basePath pour obtenir la route relative propre (ex: /gestion-immobiliere)
   */
  stripBasePath(path) {
    if (!path) return '/';
    let clean = path;
    if (this.basePath && clean.toLowerCase().startsWith(this.basePath.toLowerCase())) {
      clean = clean.slice(this.basePath.length);
    }
    if (clean.startsWith('/#/')) {
      clean = clean.slice(2);
    } else if (clean.startsWith('#/')) {
      clean = clean.slice(1);
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
   * Initialise les écouteurs de reprise, de secours et de sécurité globale
   */
  initRecoveryAndSafetyHooks() {
    // 1. Reprise après mise en cache d'historique (bfcache)
    window.addEventListener('pageshow', (e) => {
      forceResetOverlays();
      this.state = 'idle';
      if (e.persisted) {
        console.log('[Router] Page restaurée depuis le bfcache : overlays réinitialisés.');
      }
    });

    // 2. Reprise lors du retour sur l'onglet actif
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        if (this.state === 'idle') {
          forceResetOverlays();
        }
      }
    });

    // 3. Changement de taille d'écran ou orientation
    window.addEventListener('resize', () => {
      if (this.state === 'idle') {
        forceResetOverlays();
      }
    });

    // 4. Reprise de connexion réseau
    window.addEventListener('online', () => {
      forceResetOverlays();
    });

    // 5. Filets de sécurité globaux sur erreurs JavaScript non capturées
    window.addEventListener('error', (err) => {
      console.warn('[Router:GlobalErrorCatch] Nettoyage forcé suite à une erreur JS :', err.message);
      forceResetOverlays();
      this.state = 'idle';
    });

    window.addEventListener('unhandledrejection', (event) => {
      console.warn('[Router:UnhandledRejection] Nettoyage forcé suite à un rejet de promesse :', event.reason);
      forceResetOverlays();
      this.state = 'idle';
    });

    // 6. Test d'intégrité périodique léger (toutes les secondes)
    setInterval(() => {
      if (this.state === 'idle') {
        const curtain = document.getElementById('page-curtain');
        if (curtain) {
          const pointerEvents = window.getComputedStyle(curtain).pointerEvents;
          const visibility = window.getComputedStyle(curtain).visibility;
          const opacity = parseFloat(window.getComputedStyle(curtain).opacity || '0');
          if (pointerEvents !== 'none' || visibility === 'visible' || opacity > 0.05) {
            console.warn('[Router:IntegrityCheck] Incohérence overlay détectée à l\'état idle : réinitialisation.');
            forceResetOverlays();
          }
        }
        if (document.body.style.pointerEvents === 'none') {
          document.body.style.pointerEvents = '';
        }
      }
    }, 1000);
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
      this.navigate(href);
    });

    // Gestion du retour / avance dans l'historique navigateur
    window.addEventListener('popstate', (e) => {
      const targetPath = this.stripBasePath(window.location.pathname);
      const savedScroll = (e.state && e.state.scrollPos) || this.scrollPositions.get(targetPath) || 0;
      this.resolveRoute(targetPath, false, savedScroll);
    });

    // Sauvegarde passive de la position de scroll
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
   * Charge un module de vue avec politique de retry (2 tentatives)
   */
  async loadViewModuleWithRetry(viewLoader, attempts = 2, signal = null) {
    let lastError = null;
    for (let i = 0; i < attempts; i++) {
      if (signal?.aborted) {
        const abortErr = new Error('Navigation annulée');
        abortErr.name = 'AbortError';
        throw abortErr;
      }
      try {
        const loadedModule = typeof viewLoader === 'function' ? await viewLoader() : viewLoader;
        return loadedModule.default || loadedModule;
      } catch (err) {
        lastError = err;
        console.warn(`[Router] Échec tentative ${i + 1}/${attempts} de chargement de vue:`, err);
        if (i < attempts - 1) {
          await new Promise((r) => setTimeout(r, 100 * (i + 1)));
        }
      }
    }
    throw lastError || new Error('Échec du chargement du module');
  }

  /**
   * Précharge le module JS d'une route en tâche de fond
   */
  async prefetchRoute(path) {
    if (this.viewCache.has(path)) return;

    const viewLoader = this.routes[path];
    if (typeof viewLoader === 'function') {
      try {
        const view = await this.loadViewModuleWithRetry(viewLoader, 1);
        this.viewCache.set(path, view);
      } catch (err) {
        // Silencieux pour le prefetch
      }
    }
  }

  /**
   * Déclenche une navigation (annule proprement toute transition en cours)
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

    // Si une transition est déjà en cours : on l'annule proprement (AbortController)
    if (this.state !== 'idle') {
      console.log(`[Router] Navigation rapide vers "${cleanPath}" : annulation de la transition précédente (${this.state}).`);
      if (this.currentAbortController) {
        this.currentAbortController.abort();
      }
      forceResetOverlays();
      this.state = 'idle';
    }

    // Enregistrement du scroll actuel
    this.scrollPositions.set(this.currentPath, window.scrollY);

    // Push dans l'historique avec le chemin complet (basePath inclus)
    const fullPath = this.buildPath(cleanPath);
    window.history.pushState({ scrollPos: 0, path: cleanPath }, '', fullPath);

    await this.resolveRoute(cleanPath, true, 0);
  }

  /**
   * Résout et rend la vue demandée via la machine à états
   */
  async resolveRoute(path, shouldAnimate = true, targetScroll = 0) {
    // Si une transition précédente tourne encore, on l'interrompt
    if (this.currentAbortController) {
      this.currentAbortController.abort();
    }

    const abortController = new AbortController();
    this.currentAbortController = abortController;
    const signal = abortController.signal;

    // Chiens de garde (Watchdogs)
    // 1. Chien de garde de transition : 2500ms max
    const transitionWatchdog = setTimeout(() => {
      if (this.state !== 'idle') {
        console.warn(`[Router:Watchdog] Délai de transition de 2.5s dépassé (état: ${this.state}). Déverrouillage forcé.`);
        forceResetOverlays();
        this.state = 'idle';
      }
    }, 2500);

    // 2. Chien de garde de montage : 4000ms max
    const mountWatchdog = setTimeout(() => {
      if (this.state !== 'idle') {
        console.error('[Router:Watchdog] Délai de montage de 4.0s dépassé. Affichage de l\'écran de secours.');
        this.renderErrorScreen('Délai d\'affichage dépassé', 'La connexion est inhabituellement lente. Veuillez rafraîchir ou réessayer.');
        forceResetOverlays();
        this.state = 'idle';
      }
    }, 4000);

    const cleanPath = this.stripBasePath(path);
    let viewLoader = this.routes[cleanPath];

    // Fallback 404
    if (!viewLoader) {
      viewLoader = this.routes['/404'] || this.routes['*'];
    }

    try {
      // ÉTAPE 1 : LEAVING (Rideau coloré se déploie)
      this.state = 'leaving';
      if (shouldAnimate && this.appContainer && this.appContainer.children.length > 0) {
        await pageTransitions.leave(this.appContainer, cleanPath, signal);
      }

      if (signal.aborted) return;

      // ÉTAPE 2 : LOADING (Nettoyage de la vue précédente & chargement du nouveau module)
      this.state = 'loading';

      if (this.currentViewInstance && typeof this.currentViewInstance.destroy === 'function') {
        try {
          this.currentViewInstance.destroy();
        } catch (err) {
          console.warn('[Router] Erreur lors du destroy() de la vue précédente:', err);
        }
      }

      killScrollTriggers();
      destroy3DPhoneViewer();

      let view = this.viewCache.get(cleanPath);
      if (!view) {
        view = await this.loadViewModuleWithRetry(viewLoader, 2, signal);
        this.viewCache.set(cleanPath, view);
      }

      if (signal.aborted) return;

      this.currentViewInstance = view;
      this.currentPath = cleanPath;

      // ÉTAPE 3 : INJECTION DU HTML DANS LE DOM (AVANT LE RETRAIT DU RIDEAU)
      if (this.appContainer) {
        const html = typeof view.render === 'function' ? await view.render() : '';
        this.appContainer.innerHTML = html;
        this.appContainer.style.opacity = '1';
      }

      // Restauration du scroll sous le rideau
      const lenis = getLenis();
      if (lenis) {
        lenis.scrollTo(targetScroll, { immediate: true });
        lenis.resize();
      } else {
        window.scrollTo(0, targetScroll);
      }

      // Mise à jour SEO, annonce accessibilité, liens actifs
      this.updateSEO(view.meta || {});
      this.announcePageChange(view.meta ? view.meta.title : 'Page');
      updateActiveNavLink(cleanPath);
      this.manageFocus();

      // Initialisation des animations internes
      initScrollReveals(this.appContainer);
      animateCounters(this.appContainer);
      initMagneticElements(this.appContainer);

      if (typeof view.init === 'function') {
        try {
          await view.init(this.appContainer);
        } catch (err) {
          console.error('[Router] Erreur lors du init() de la vue:', err);
        }
      }

      refreshScrollTriggers();

      if (signal.aborted) return;

      // ÉTAPE 4 : ENTERING (Révélation du rideau vers le haut)
      this.state = 'entering';
      if (shouldAnimate && this.appContainer) {
        await pageTransitions.enter(this.appContainer, signal);
      } else {
        forceResetOverlays();
      }

    } catch (error) {
      if (error.name === 'AbortError') {
        console.log(`[Router] Transition vers "${cleanPath}" interrompue par une nouvelle action.`);
        return;
      }
      console.error(`[Router] Erreur critique de navigation vers ${cleanPath}:`, error);
      this.renderErrorScreen('Impossible de charger cette page', 'Un incident technique ou une interruption réseau est survenu.');
    } finally {
      clearTimeout(transitionWatchdog);
      clearTimeout(mountWatchdog);
      forceResetOverlays();
      this.state = 'idle';
    }
  }

  /**
   * Écran d'erreur élégant avec bouton Réessayer
   */
  renderErrorScreen(title, message) {
    if (!this.appContainer) return;
    this.appContainer.innerHTML = `
      <div class="min-h-[75vh] flex flex-col items-center justify-center text-center p-8 bg-[#FAF9F5]" data-theme="ivory">
        <div class="max-w-md w-full bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-4">
          <div class="w-16 h-16 rounded-2xl bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-700 mx-auto text-2xl">⚠️</div>
          <h2 class="text-2xl font-serif font-bold text-marine-900">${title}</h2>
          <p class="text-sm text-slate-600 leading-relaxed">${message}</p>
          <div class="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button onclick="window.location.reload()" class="btn-primary w-full sm:w-auto !px-5 !py-2.5 text-xs font-bold">Réessayer</button>
            <a href="/" data-link class="btn-outline w-full sm:w-auto !px-5 !py-2.5 text-xs">Page d'accueil</a>
          </div>
        </div>
      </div>
    `;
    this.appContainer.style.opacity = '1';
  }

  /**
   * Gestion du focus clavier
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
   * Mise à jour SEO (Title, Description, Open Graph & Twitter Cards)
   */
  updateSEO(meta = {}) {
    const siteTitle = CONFIG.company?.name || 'MULTI BUSINESS SARL';
    const pageTitle = meta.title ? `${meta.title} | ${siteTitle}` : CONFIG.seo?.defaultTitle || `${siteTitle} - Gestion Locative & Conseil`;
    document.title = pageTitle;

    const pageDesc = meta.description || CONFIG.seo?.defaultDescription || 'MULTI BUSINESS SARL au Cameroun.';
    const currentUrl = window.location.href;
    const ogImage = meta.image || './assets/images/og-image.png';

    this.setMetaTag('name', 'description', pageDesc);
    this.setMetaTag('property', 'og:title', pageTitle);
    this.setMetaTag('property', 'og:description', pageDesc);
    this.setMetaTag('property', 'og:url', currentUrl);
    this.setMetaTag('property', 'og:image', ogImage);
    this.setMetaTag('property', 'twitter:title', pageTitle);
    this.setMetaTag('property', 'twitter:description', pageDesc);
    this.setMetaTag('property', 'twitter:image', ogImage);
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
