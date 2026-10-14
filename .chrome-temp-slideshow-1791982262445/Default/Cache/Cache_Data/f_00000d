/**
 * MULTI BUSINESS SARL - UI Interaction Engine
 * Composants interactifs, Header dynamique, Curseur personnalisé, Scroll Progress, Modales, Accordéons, Tabs, Toasts
 */

import { isReducedMotion } from './animations.js';
import { closestFromEvent } from './utils/dom.js';

export const initUIComponents = (scope = (typeof document !== 'undefined' ? document : null)) => {
  if (!scope) return;
  initAccordions(scope);
  initTabs(scope);
  initModalTriggers(scope);
  initLightbox(scope);
};

/**
 * Barre de progression de scroll en haut de page
 */
export const initScrollProgressBar = () => {
  const bar = document.getElementById('scroll-progress-bar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }, { passive: true });
};

/**
 * Curseur personnalisé fluide (Desktop uniquement)
 */
export const initCustomCursor = () => {
  if (isReducedMotion() || window.matchMedia('(pointer: coarse)').matches) return;

  const dot = document.getElementById('custom-cursor-dot');
  const ring = document.getElementById('custom-cursor-ring');
  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  }, { passive: true });

  // Animation inertielle fluide pour l'anneau
  const renderCursor = () => {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;
    requestAnimationFrame(renderCursor);
  };
  requestAnimationFrame(renderCursor);

  // Détection du survol des éléments interactifs sécurisée (support Document, Window, SVG, Canvas, Text)
  const handleHoverState = (e) => {
    const isInteractive = closestFromEvent(e, 'a, button, input, textarea, select, [data-magnetic], [data-tab-btn], [data-accordion-trigger]');
    if (isInteractive) {
      document.body.classList.add('cursor-hover');
    } else {
      document.body.classList.remove('cursor-hover');
    }
  };

  document.addEventListener('mouseover', handleHoverState, { passive: true });
};

/**
 * Gestion du Header Unifié au scroll (Pliage fluide de la top-bar & synchronisation des dimensions)
 */
export const initHeader = () => {
  const siteHeader = document.getElementById('site-header') || document.getElementById('main-header');
  const topBar = document.getElementById('top-bar');
  if (!siteHeader) return;

  // Mesure et mise à jour dynamique des variables CSS de hauteur (anti-boucle ResizeObserver)
  let lastHeaderH = -1;
  let lastTopbarH = -1;
  let rafDimensionsId = null;

  const updateHeaderDimensions = () => {
    if (rafDimensionsId) return;
    rafDimensionsId = requestAnimationFrame(() => {
      rafDimensionsId = null;
      const isDesktop = window.innerWidth >= 1024;
      const headerHeight = siteHeader ? siteHeader.offsetHeight : 64;
      const topBarHeight = (topBar && isDesktop && topBar.offsetParent !== null) ? topBar.offsetHeight : 0;

      // Écriture conditionnelle stricte : uniquement si changement mesurable (>= 0.5px)
      if (Math.abs(headerHeight - lastHeaderH) >= 0.5) {
        lastHeaderH = headerHeight;
        document.documentElement.style.setProperty('--header-h', `${headerHeight}px`);
      }
      if (Math.abs(topBarHeight - lastTopbarH) >= 0.5) {
        lastTopbarH = topBarHeight;
        document.documentElement.style.setProperty('--topbar-h', `${topBarHeight}px`);
      }
    });
  };

  if (window.ResizeObserver) {
    const ro = new ResizeObserver(() => updateHeaderDimensions());
    ro.observe(siteHeader);
  }

  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset || 0;
    if (scrollY > 30) {
      siteHeader.classList.add('header-scrolled');
    } else {
      siteHeader.classList.remove('header-scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', updateHeaderDimensions, { passive: true });
  window.addEventListener('orientationchange', () => {
    setTimeout(updateHeaderDimensions, 100);
  }, { passive: true });
  
  handleScroll();
  updateHeaderDimensions();
};

/**
 * Mise à jour de l'état actif dans la barre de navigation et le menu mobile (y compris l'accordéon des services)
 */
export const updateActiveNavLink = (currentPath) => {
  const normCurrent = (currentPath || '/').replace(/\/+$/, '') || '/';
  
  // 1. Liens standards
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-cascade-item, .mobile-subnav-link');
  allNavLinks.forEach((link) => {
    if (link.tagName.toLowerCase() !== 'a') return;
    const href = link.getAttribute('href');
    if (!href) return;
    const normHref = href.replace(/\/+$/, '') || '/';
    const isMatch = normHref === normCurrent;

    if (isMatch) {
      link.setAttribute('aria-current', 'page');
      link.classList.add('nav-link-active');
      if (link.classList.contains('mobile-subnav-link')) {
        link.classList.add('bg-slate-100', 'font-bold', 'text-emerald-800');
      } else if (link.classList.contains('nav-link')) {
        link.classList.add('text-marine-950', 'font-bold', 'bg-mint-50', 'border', 'border-mint-200/80', 'shadow-sm');
        link.classList.remove('text-slate-700', 'text-slate-600');
      }
    } else {
      link.removeAttribute('aria-current');
      link.classList.remove('nav-link-active');
      if (link.classList.contains('mobile-subnav-link')) {
        link.classList.remove('bg-slate-100', 'font-bold', 'text-emerald-800');
      } else if (link.classList.contains('nav-link')) {
        link.classList.remove('text-marine-950', 'font-bold', 'bg-mint-50', 'border', 'border-mint-200/80', 'shadow-sm');
        link.classList.add('text-slate-700');
      }
    }
  });

  // 2. Vérification si la route courante est un service
  const serviceRoutes = ['/services', '/nos-services', '/gestion-locative', '/creation-entreprise', '/dedouanement', '/fiscalite-conseil', '/fiscalite'];
  const isServicePage = serviceRoutes.some(r => r === normCurrent);

  // Synchronisation de l'accordéon mobile
  const accordionToggle = document.getElementById('mobile-services-accordion-toggle');
  const accordionPanel = document.getElementById('mobile-services-accordion-panel');
  const accordionChevron = document.getElementById('mobile-services-accordion-chevron');
  const accordionBox = document.getElementById('mobile-services-accordion');

  if (accordionToggle && accordionPanel) {
    // Par défaut, l'accordéon reste déplié pour garantir un accès immédiat à tous les services
    accordionPanel.classList.remove('hidden');
    accordionToggle.setAttribute('aria-expanded', 'true');
    accordionToggle.setAttribute('aria-label', 'Masquer les services');
    if (accordionChevron) accordionChevron.style.transform = 'rotate(180deg)';
    if (accordionBox) accordionBox.classList.add('border-emerald-300', 'shadow-sm');
  }

  // Marquer le parent "Nos services" dans le méga-menu desktop si page de service
  const desktopHubLink = document.getElementById('desktop-services-hub-link');
  if (desktopHubLink) {
    if (isServicePage) {
      desktopHubLink.classList.add('text-marine-950', 'font-bold', 'bg-mint-50', 'border', 'border-mint-200/80', 'shadow-sm');
      desktopHubLink.setAttribute('aria-current', 'page');
    } else {
      desktopHubLink.classList.remove('text-marine-950', 'font-bold', 'bg-mint-50', 'border', 'border-mint-200/80', 'shadow-sm');
      desktopHubLink.removeAttribute('aria-current');
    }
  }

  // Fermer le menu mobile lors d'une navigation
  closeMobileMenu();
  closeDesktopMegaMenu();
};

/**
 * État interne de la machine à états du menu mobile
 * 'closed' | 'opening' | 'open' | 'closing'
 */
let mobileMenuState = 'closed';
let savedPageScrollY = 0;
let menuCloseWatchdog = null;

/**
 * Routine de nettoyage au démarrage : élimine tout résidu d'un état précédent
 */
export const cleanTransientUiState = () => {
  try {
    // Purger tout drapeau d'état transitoire stocké
    if (typeof sessionStorage !== 'undefined') {
      sessionStorage.removeItem('mb_menu_open');
      sessionStorage.removeItem('mb_modal_open');
      sessionStorage.removeItem('mb_curtain_active');
    }
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem('mb_menu_state');
    }
  } catch (_) {}

  // Nettoyer les styles résiduels sur html et body
  if (typeof document !== 'undefined') {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.right = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';

    const menuOverlay = document.getElementById('mobile-menu-overlay');
    if (menuOverlay) {
      menuOverlay.classList.add('hidden');
      menuOverlay.setAttribute('hidden', '');
      menuOverlay.setAttribute('data-open', 'false');
      menuOverlay.style.display = '';
      menuOverlay.removeAttribute('aria-hidden');
    }

    const toggleBtn = document.getElementById('mobile-menu-toggle');
    if (toggleBtn) {
      toggleBtn.classList.remove('is-active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }

    const mainContent = document.getElementById('app') || document.querySelector('main');
    if (mainContent) {
      mainContent.removeAttribute('inert');
    }
  }

  mobileMenuState = 'closed';
};

/**
 * Menu Mobile Overlay : Accordéon fluide, Piégeage du Focus, Fermetures Multi-Chemins
 */
export const initMobileMenu = () => {
  // Exécuter immédiatement la routine de nettoyage au démarrage
  cleanTransientUiState();

  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const menuOverlay = document.getElementById('mobile-menu-overlay');
  const accordionToggle = document.getElementById('mobile-services-accordion-toggle');
  const accordionPanel = document.getElementById('mobile-services-accordion-panel');
  const accordionChevron = document.getElementById('mobile-services-accordion-chevron');

  if (!toggleBtn || !menuOverlay) return;

  // 1. Bouton ouverture / fermeture hamburger
  toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (mobileMenuState === 'closed' || mobileMenuState === 'closing') {
      openMobileMenu();
    } else {
      closeMobileMenu();
    }
  });

  // 2. Bouton fermer (X)
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileMenu();
    });
  }

  // 3. Clic sur la zone hors du contenu du menu
  menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
      closeMobileMenu();
    }
  });

  // 4. Gestion de l'accordéon "Nos services"
  if (accordionToggle && accordionPanel) {
    accordionToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isExpanded = accordionToggle.getAttribute('aria-expanded') === 'true';
      if (isExpanded) {
        accordionPanel.classList.add('hidden');
        accordionToggle.setAttribute('aria-expanded', 'false');
        accordionToggle.setAttribute('aria-label', 'Afficher les services');
        if (accordionChevron) accordionChevron.style.transform = 'rotate(0deg)';
      } else {
        accordionPanel.classList.remove('hidden');
        accordionToggle.setAttribute('aria-expanded', 'true');
        accordionToggle.setAttribute('aria-label', 'Masquer les services');
        if (accordionChevron) accordionChevron.style.transform = 'rotate(180deg)';

        // Défilement doux automatique pour que les sous-éléments soient bien visibles
        setTimeout(() => {
          const scrollContainer = document.getElementById('mobile-menu-scroll-container');
          const firstSubLink = accordionPanel.querySelector('.mobile-subnav-link');
          if (scrollContainer && firstSubLink) {
            const containerRect = scrollContainer.getBoundingClientRect();
            const elRect = firstSubLink.getBoundingClientRect();
            if (elRect.bottom > containerRect.bottom || elRect.top < containerRect.top) {
              firstSubLink.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
          }
        }, 80);
      }
    });
  }

  // 5. Fermeture et piège à focus au clavier (Échap et Tab)
  document.addEventListener('keydown', (e) => {
    if (mobileMenuState === 'closed') return;

    if (e.key === 'Escape') {
      e.preventDefault();
      closeMobileMenu();
      return;
    }

    if (e.key === 'Tab') {
      const focusableEls = menuOverlay.querySelectorAll('a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])');
      const focusable = Array.from(focusableEls).filter(el => el.offsetParent !== null);
      if (focusable.length === 0) return;

      const firstEl = focusable[0];
      const lastEl = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          lastEl.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastEl) {
          firstEl.focus();
          e.preventDefault();
        }
      }
    }
  });

  // 6. Fermeture au clic sur n'importe quel lien du menu mobile (sauf le bouton chevron)
  menuOverlay.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // 7. Chemins de fermeture indépendants et robustes :
  // (a) popstate (retour arrière navigateur)
  window.addEventListener('popstate', () => {
    if (mobileMenuState !== 'closed') closeMobileMenu();
  });

  // (b) redimensionnement au-delà du breakpoint desktop (>= 1280px)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 1280 && mobileMenuState !== 'closed') {
      closeMobileMenu();
    }
  }, { passive: true });

  // (c) reprise depuis le bfcache
  window.addEventListener('pageshow', (e) => {
    if (e.persisted || mobileMenuState !== 'closed') {
      closeMobileMenu();
    }
  });

  // (d) onglet passant en arrière-plan
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && mobileMenuState !== 'closed') {
      closeMobileMenu();
    }
  });

  // 8. Initialiser le méga-menu desktop tactile / clavier
  initDesktopMegaMenuTactile();
};

export const openMobileMenu = () => {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const menuOverlay = document.getElementById('mobile-menu-overlay');
  const mainContent = document.getElementById('app') || document.querySelector('main');
  if (!menuOverlay) return;

  mobileMenuState = 'opening';

  // Sauvegarder la position de scroll actuelle de la page
  savedPageScrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;

  // Stopper Lenis s'il est actif
  if (window.lenis) {
    try { window.lenis.stop(); } catch (e) {}
  }

  // Verrouillage imperméable du body sans décaler la page
  document.body.style.position = 'fixed';
  document.body.style.top = `-${savedPageScrollY}px`;
  document.body.style.left = '0';
  document.body.style.right = '0';
  document.body.style.width = '100%';
  document.body.style.overflow = 'hidden';

  // Rendre le reste de la page inerte pour les lecteurs d'écran et la navigation clavier
  if (mainContent) {
    try { mainContent.setAttribute('inert', ''); } catch (_) {}
  }

  // Révéler le menu en HTML et CSS
  menuOverlay.classList.remove('hidden');
  menuOverlay.removeAttribute('hidden');
  menuOverlay.setAttribute('data-open', 'true');

  // Déplier systématiquement l'accordéon "Nos services" par défaut à chaque ouverture
  const accordionToggle = document.getElementById('mobile-services-accordion-toggle');
  const accordionPanel = document.getElementById('mobile-services-accordion-panel');
  const accordionChevron = document.getElementById('mobile-services-accordion-chevron');
  const accordionBox = document.getElementById('mobile-services-accordion');

  if (accordionToggle && accordionPanel) {
    accordionPanel.classList.remove('hidden');
    accordionToggle.setAttribute('aria-expanded', 'true');
    accordionToggle.setAttribute('aria-label', 'Masquer les services');
    if (accordionChevron) accordionChevron.style.transform = 'rotate(180deg)';
    if (accordionBox) accordionBox.classList.add('border-emerald-300', 'shadow-sm');
  }

  // Remise à zéro impérative du défilement du menu mobile
  const scrollContainer = document.getElementById('mobile-menu-scroll-container');
  if (scrollContainer) {
    scrollContainer.scrollTop = 0;
  }

  if (toggleBtn) {
    toggleBtn.classList.add('is-active');
    toggleBtn.setAttribute('aria-expanded', 'true');
  }

  // Restitution du focus sur le bouton fermer
  if (closeBtn) {
    setTimeout(() => {
      try { closeBtn.focus(); } catch (_) {}
    }, 50);
  }

  // Animation fluide GSAP
  if (window.gsap) {
    try {
      window.gsap.fromTo(
        menuOverlay,
        { opacity: 0, scale: 0.98 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power3.out",
          onComplete: () => {
            mobileMenuState = 'open';
          }
        }
      );
      window.gsap.fromTo(
        menuOverlay.querySelectorAll('.mobile-cascade-item'),
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.3, stagger: 0.03, ease: "power2.out", delay: 0.05 }
      );
    } catch (_) {
      mobileMenuState = 'open';
    }
  } else {
    mobileMenuState = 'open';
  }
};

export const closeMobileMenu = () => {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const menuOverlay = document.getElementById('mobile-menu-overlay');
  const mainContent = document.getElementById('app') || document.querySelector('main');
  if (!menuOverlay) return;

  mobileMenuState = 'closing';

  if (toggleBtn) {
    toggleBtn.classList.remove('is-active');
    toggleBtn.setAttribute('aria-expanded', 'false');
  }

  // Chien de garde de fermeture forcée absolue (400ms max)
  if (menuCloseWatchdog) clearTimeout(menuCloseWatchdog);

  const finalizeClose = () => {
    if (menuCloseWatchdog) {
      clearTimeout(menuCloseWatchdog);
      menuCloseWatchdog = null;
    }

    try {
      // Masquage HTML et CSS garanti
      menuOverlay.classList.add('hidden');
      menuOverlay.setAttribute('hidden', '');
      menuOverlay.setAttribute('data-open', 'false');

      // Retirer l'état inerte du contenu principal
      if (mainContent) {
        mainContent.removeAttribute('inert');
      }

      // Restauration exacte du scroll de la page sans saut
      let scrollY = savedPageScrollY;
      if (document.body.style.top) {
        const parsed = Math.abs(parseInt(document.body.style.top, 10));
        if (!isNaN(parsed) && parsed > 0) {
          scrollY = parsed;
        }
      }
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      window.scrollTo(0, scrollY);

      if (window.lenis) {
        try {
          window.lenis.start();
          window.lenis.scrollTo(scrollY, { immediate: true });
        } catch (_) {}
      }

      // Restituer le focus au bouton burger pour l'accessibilité
      if (toggleBtn) {
        try { toggleBtn.focus(); } catch (_) {}
      }
    } finally {
      mobileMenuState = 'closed';
    }
  };

  menuCloseWatchdog = setTimeout(finalizeClose, 400);

  if (window.gsap) {
    try {
      window.gsap.to(menuOverlay, {
        opacity: 0,
        scale: 0.98,
        duration: 0.2,
        ease: "power2.in",
        onComplete: finalizeClose
      });
    } catch (_) {
      finalizeClose();
    }
  } else {
    finalizeClose();
  }
};

/**
 * Tablette & Écrans Tactiles Larges (iPad paysage >= 1024px) & Clavier pour le Méga-Menu
 * Détecte (hover: none) ou (pointer: coarse) : 
 * - Premier appui sur le bouton chevron ou sur "Nos services" ouvre le méga-menu
 * - Second appui sur le libellé mène au hub
 * - Clic extérieur ou Échap ferme
 * - Support clavier : Entrée/Espace ouvre, Échap ferme
 */
export const initDesktopMegaMenuTactile = () => {
  const container = document.getElementById('desktop-services-menu-container');
  const trigger = document.getElementById('desktop-services-trigger');
  const hubLink = document.getElementById('desktop-services-hub-link');
  const dropdown = document.getElementById('desktop-services-dropdown');
  const chevron = document.getElementById('desktop-mega-chevron');

  if (!container || !dropdown) return;

  const isTouchDevice = () => {
    return window.matchMedia('(hover: none), (pointer: coarse)').matches || ('ontouchstart' in window);
  };

  const openDropdown = () => {
    dropdown.classList.remove('pointer-events-none', 'opacity-0', 'translate-y-2');
    dropdown.classList.add('pointer-events-auto', 'opacity-100', 'translate-y-0');
    if (trigger) trigger.setAttribute('aria-expanded', 'true');
    if (chevron) chevron.style.transform = 'rotate(180deg)';
  };

  const closeDropdown = () => {
    dropdown.classList.add('pointer-events-none', 'opacity-0', 'translate-y-2');
    dropdown.classList.remove('pointer-events-auto', 'opacity-100', 'translate-y-0');
    if (trigger) trigger.setAttribute('aria-expanded', 'false');
    if (chevron) chevron.style.transform = 'rotate(0deg)';
  };

  // Toggle au clic sur le bouton chevron (tactile, souris ou clavier)
  if (trigger) {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const isOpen = trigger.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeDropdown();
      } else {
        openDropdown();
      }
    });

    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const isOpen = trigger.getAttribute('aria-expanded') === 'true';
        if (isOpen) closeDropdown(); else openDropdown();
      }
    });
  }

  // Sur tactile : si le dropdown est fermé, le premier appui sur le lien ouvre le méga-menu
  if (hubLink) {
    hubLink.addEventListener('click', (e) => {
      if (isTouchDevice() && dropdown.classList.contains('pointer-events-none')) {
        e.preventDefault();
        e.stopPropagation();
        openDropdown();
      }
    });
  }

  // Fermeture au clic extérieur
  document.addEventListener('click', (e) => {
    if (!container.contains(e.target)) {
      closeDropdown();
    }
  });

  // Fermeture par touche Échap
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDropdown();
    }
  });

  // Fermeture lors d'un clic sur un lien du méga-menu
  dropdown.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      closeDropdown();
    });
  });
};

export const closeDesktopMegaMenu = () => {
  const trigger = document.getElementById('desktop-services-trigger');
  const dropdown = document.getElementById('desktop-services-dropdown');
  const chevron = document.getElementById('desktop-mega-chevron');
  if (dropdown) {
    dropdown.classList.add('pointer-events-none', 'opacity-0', 'translate-y-2');
    dropdown.classList.remove('pointer-events-auto', 'opacity-100', 'translate-y-0');
  }
  if (trigger) trigger.setAttribute('aria-expanded', 'false');
  if (chevron) chevron.style.transform = 'rotate(0deg)';
};


/**
 * Accordéons (FAQ, détails techniques)
 */
export const initAccordions = (scope = document) => {
  const accordionItems = scope.querySelectorAll('[data-accordion-item]');
  
  accordionItems.forEach((item) => {
    const trigger = item.querySelector('[data-accordion-trigger]');
    const content = item.querySelector('[data-accordion-content]');
    const icon = item.querySelector('[data-accordion-icon]');
    if (!trigger || !content) return;

    trigger.addEventListener('click', () => {
      const isOpen = !content.classList.contains('hidden');
      
      const group = item.closest('[data-accordion-group]');
      if (group && !isOpen) {
        group.querySelectorAll('[data-accordion-content]').forEach((c) => c.classList.add('hidden'));
        group.querySelectorAll('[data-accordion-icon]').forEach((ic) => {
          if (ic) ic.style.transform = 'rotate(0deg)';
        });
      }

      if (isOpen) {
        content.classList.add('hidden');
        if (icon) icon.style.transform = 'rotate(0deg)';
      } else {
        content.classList.remove('hidden');
        if (icon) icon.style.transform = 'rotate(180deg)';
      }
    });
  });
};

/**
 * Onglets (Tabs interactifs - Style Light Luxury)
 */
export const initTabs = (scope = document) => {
  const tabContainers = scope.querySelectorAll('[data-tabs]');

  tabContainers.forEach((container) => {
    const buttons = container.querySelectorAll('[data-tab-btn]');
    const contents = container.querySelectorAll('[data-tab-content]');

    buttons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.tabBtn;

        buttons.forEach((b) => {
          b.classList.remove('bg-marine-900', 'text-white', 'shadow-md', 'font-bold');
          b.classList.add('text-slate-600', 'hover:text-slate-900', 'bg-transparent');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('bg-marine-900', 'text-white', 'shadow-md', 'font-bold');
        btn.classList.remove('text-slate-600', 'hover:text-slate-900', 'bg-transparent');
        btn.setAttribute('aria-selected', 'true');

        contents.forEach((c) => {
          if (c.dataset.tabContent === target) {
            c.classList.remove('hidden');
            if (window.gsap) {
              window.gsap.fromTo(c, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" });
            }
          } else {
            c.classList.add('hidden');
          }
        });
      });
    });
  });
};

/**
 * Visualiseur d'images Lightbox Fullscreen
 */
export const initLightbox = (scope = document) => {
  const triggers = scope.querySelectorAll('[data-lightbox]');
  if (!triggers.length) return;

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const src = trigger.getAttribute('data-lightbox') || trigger.getAttribute('src');
      const caption = trigger.getAttribute('data-caption') || trigger.getAttribute('alt') || 'MULTI BUSINESS SARL';
      openLightbox(src, caption);
    });
  });
};

export const openLightbox = (src, caption = '') => {
  let lightbox = document.getElementById('app-lightbox');
  if (!lightbox) {
    lightbox = document.createElement('div');
    lightbox.id = 'app-lightbox';
    lightbox.className = 'fixed inset-0 z-[99999] bg-slate-950/90 backdrop-blur-xl flex flex-col items-center justify-center p-4 transition-opacity duration-300';
    lightbox.innerHTML = `
      <button id="lightbox-close" class="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all" aria-label="Fermer">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
      <div class="relative max-w-5xl max-h-[85vh] flex flex-col items-center">
        <img id="lightbox-img" src="" alt="" class="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10" />
        <p id="lightbox-caption" class="text-white text-sm md:text-base font-medium mt-4 text-center px-4"></p>
      </div>
    `;
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || closestFromEvent(e, '#lightbox-close')) {
        closeLightbox();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  const img = lightbox.querySelector('#lightbox-img');
  const captionEl = lightbox.querySelector('#lightbox-caption');
  img.src = src;
  img.alt = caption;
  captionEl.textContent = caption;

  lightbox.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  if (window.gsap) {
    window.gsap.fromTo(lightbox, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    window.gsap.fromTo(img, { scale: 0.92, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.35, ease: 'power3.out' });
  }
};

export const closeLightbox = () => {
  const lightbox = document.getElementById('app-lightbox');
  if (!lightbox || lightbox.classList.contains('hidden')) return;

  if (window.gsap) {
    window.gsap.to(lightbox, {
      opacity: 0,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => {
        lightbox.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  } else {
    lightbox.classList.add('hidden');
    document.body.style.overflow = '';
  }
};


/**
 * Modales
 */
export const initModalTriggers = (scope = document) => {
  const modalTriggers = scope.querySelectorAll('[data-modal-target]');
  
  modalTriggers.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modalId = btn.dataset.modalTarget;
      openModal(modalId);
    });
  });

  const closeButtons = scope.querySelectorAll('[data-modal-close]');
  closeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const modal = btn.closest('[data-modal]');
      if (modal) closeModal(modal.id);
    });
  });
};

export const openModal = (modalId) => {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  document.body.style.overflow = 'hidden';

  const modalBox = modal.querySelector('.modal-box');
  if (window.gsap && modalBox) {
    window.gsap.fromTo(
      modalBox,
      { opacity: 0, scale: 0.92, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.35, ease: "power3.out" }
    );
  }
};

export const closeModal = (modalId) => {
  const modal = document.getElementById(modalId);
  if (!modal) return;

  const modalBox = modal.querySelector('.modal-box');
  if (window.gsap && modalBox) {
    window.gsap.to(modalBox, {
      opacity: 0,
      scale: 0.95,
      y: 15,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
      }
    });
  } else {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }
};

/**
 * Toast Notification système
 */
export const showToast = (message, type = 'success') => {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'fixed bottom-6 left-6 z-50 flex flex-col gap-3 pointer-events-none';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  const isSuccess = type === 'success';
  toast.className = `pointer-events-auto flex items-center gap-3 px-5 py-3.5 rounded-2xl backdrop-blur-xl shadow-luxury border ${
    isSuccess ? 'bg-forest-900/90 border-mint-500/40 text-mint-300' : 'bg-red-950/90 border-red-500/40 text-red-300'
  }`;

  toast.innerHTML = `
    <div class="w-2.5 h-2.5 rounded-full ${isSuccess ? 'bg-lime-400 animate-pulse' : 'bg-red-400'}"></div>
    <span class="text-sm font-medium">${message}</span>
  `;

  toastContainer.appendChild(toast);

  if (window.gsap) {
    window.gsap.fromTo(toast, { opacity: 0, y: 20, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.35, ease: "back.out(1.7)" });
    setTimeout(() => {
      window.gsap.to(toast, {
        opacity: 0,
        y: -10,
        scale: 0.95,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => toast.remove()
      });
    }, 4000);
  } else {
    setTimeout(() => toast.remove(), 4000);
  }
};
