/**
 * MULTI BUSINESS SARL - Cinema Animation Engine
 * GSAP + ScrollTrigger + Lenis + Reduced Motion Support + Clean Lifecycle
 */

let lenisInstance = null;

// Détection de la préférence utilisateur "réduction de mouvement"
export const isReducedMotion = () => {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Initialisation du défilement inertiel doux (Lenis) avec synchronisation ScrollTrigger
 */
export const initSmoothScroll = () => {
  if (isReducedMotion()) {
    return null;
  }

  if (typeof window !== 'undefined' && typeof window.Lenis !== 'undefined' && !lenisInstance) {
    lenisInstance = new window.Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.8,
      infinite: false,
    });

    function raf(time) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    if (window.gsap && window.ScrollTrigger) {
      lenisInstance.on('scroll', window.ScrollTrigger.update);
      window.gsap.ticker.add((time) => {
        lenisInstance.raf(time * 1000);
      });
      window.gsap.ticker.lagSmoothing(0);
    }
  }
  return lenisInstance;
};

export const getLenis = () => lenisInstance;

/**
 * Nettoie tous les ScrollTriggers actifs (utilisé à chaque changement de page)
 */
export const killScrollTriggers = () => {
  if (typeof window !== 'undefined' && window.ScrollTrigger) {
    const triggers = window.ScrollTrigger.getAll();
    triggers.forEach((trigger) => trigger.kill(true));
  }
};

/**
 * Rafraîchit les positions ScrollTrigger après recalcul du layout
 */
export const refreshScrollTriggers = () => {
  if (typeof window !== 'undefined' && window.ScrollTrigger) {
    window.ScrollTrigger.refresh();
  }
};

// Thèmes de couleur du rideau de transition selon le service de destination
export const ROUTE_TRANSITION_THEMES = {
  '/gestion-immobiliere': { bg: '#26C992', accent: '#9AFF01', label: 'Gestion Immobilière' },
  '/gestion-locative': { bg: '#26C992', accent: '#9AFF01', label: 'Gestion Immobilière' },
  '/creation-entreprise': { bg: '#D97706', accent: '#FDE68A', label: 'Création d\'Entreprise' },
  '/creation-d-entreprise': { bg: '#D97706', accent: '#FDE68A', label: 'Création d\'Entreprise' },
  '/dedouanement': { bg: '#0284C7', accent: '#BAE6FD', label: 'Dédouanement des Marchandises' },
  '/prestation-de-services': { bg: '#E11D48', accent: '#FECDD3', label: 'Prestations de Services' },
  '/prestation-services': { bg: '#E11D48', accent: '#FECDD3', label: 'Prestations de Services' },
  '/fiscalite-conseil': { bg: '#4F46E5', accent: '#C7D2FE', label: 'Fiscalité & Conseil' },
  '/fiscalite': { bg: '#4F46E5', accent: '#C7D2FE', label: 'Fiscalité & Conseil' },
  '/qui-sommes-nous': { bg: '#0B1B2B', accent: '#26C992', label: 'Qui sommes-nous' },
  '/a-propos': { bg: '#0B1B2B', accent: '#26C992', label: 'Qui sommes-nous' },
  '/nos-services': { bg: '#0F2942', accent: '#38BDF8', label: 'Nos Services' },
  '/services': { bg: '#0F2942', accent: '#38BDF8', label: 'Nos Services' },
  '/contact': { bg: '#10B981', accent: '#A7F3D0', label: 'Contact & Siège' },
  '/design-system': { bg: '#059669', accent: '#A7F3D0', label: 'Design System' },
  '/test-a': { bg: '#4F46E5', accent: '#C7D2FE', label: 'Test A : Lifecycle & Timers' },
  '/test-b': { bg: '#0284C7', accent: '#BAE6FD', label: 'Test B : Three.js WebGL' },
  '/test-c': { bg: '#D97706', accent: '#FEF3C7', label: 'Test C : Clics & Ancres' },
  '/': { bg: '#0B1B2B', accent: '#26C992', label: 'MULTI BUSINESS SARL' }
};

let curtainElement = null;

/**
 * Nettoyage forcé de tous les overlays (rideau, preloader, verrou pointer-events)
 * Garantit qu'aucun écran bloqué ne subsiste, quoi qu'il arrive
 */
export const forceResetOverlays = () => {
  const curtain = document.getElementById('page-curtain');
  if (curtain) {
    if (window.gsap) {
      window.gsap.killTweensOf(curtain);
      const contentEl = curtain.querySelector('#curtain-content');
      if (contentEl) window.gsap.killTweensOf(contentEl);
    }
    curtain.style.opacity = '0';
    curtain.style.visibility = 'hidden';
    curtain.style.pointerEvents = 'none';
    curtain.style.transform = 'translateY(100%)';
  }

  const preloader = document.getElementById('app-preloader');
  if (preloader) {
    if (window.gsap) window.gsap.killTweensOf(preloader);
    preloader.style.opacity = '0';
    preloader.style.pointerEvents = 'none';
    preloader.style.visibility = 'hidden';
    if (preloader.parentNode) preloader.parentNode.removeChild(preloader);
  }

  document.body.style.pointerEvents = '';
  document.body.style.overflow = '';

  const lenis = getLenis();
  if (lenis && typeof lenis.start === 'function') {
    try { lenis.start(); } catch (e) {}
  }
};

const getOrCreateCurtain = () => {
  if (curtainElement) return curtainElement;
  curtainElement = document.getElementById('page-curtain');
  if (!curtainElement) {
    curtainElement = document.createElement('div');
    curtainElement.id = 'page-curtain';
    curtainElement.className = 'fixed inset-0 z-[9990] pointer-events-none flex flex-col items-center justify-center';
    curtainElement.style.transform = 'translateY(100%)';
    curtainElement.style.willChange = 'transform';
    curtainElement.innerHTML = `
      <div id="curtain-content" class="flex flex-col items-center gap-3 opacity-0 transition-opacity">
        <img src="./assets/images/logo-transparent.png" class="w-16 h-16 object-contain drop-shadow-md rounded-full bg-white/95 p-1" alt="Logo MULTI BUSINESS SARL" />
        <span id="curtain-label" class="font-serif font-bold text-xl md:text-2xl text-white tracking-wider">MULTI BUSINESS SARL</span>
        <div class="w-20 h-1 rounded-full bg-white/30 overflow-hidden mt-1">
          <div id="curtain-bar" class="w-full h-full bg-white"></div>
        </div>
      </div>
    `;
    document.body.appendChild(curtainElement);
  }
  return curtainElement;
};

/**
 * Transitions de pages cinématiques avec rideau coloré (avec watchdog & annulation)
 * Zéro saut de layout, zéro flash blanc, fail-safe 600ms
 */
export const pageTransitions = {
  // 1. Fermeture du rideau coloré sur l'écran
  leave: (container, targetPath = '/', signal) => {
    return new Promise((resolve) => {
      if (signal?.aborted) {
        forceResetOverlays();
        return resolve();
      }

      // Verrouillage anti-clic temporaire durant la fermeture uniquement
      document.body.style.pointerEvents = 'none';

      if (isReducedMotion() || !window.gsap) {
        if (container) container.style.opacity = '0';
        return resolve();
      }

      const curtain = getOrCreateCurtain();
      curtain.style.visibility = 'visible';
      curtain.style.opacity = '1';
      curtain.style.pointerEvents = 'auto';

      const theme = ROUTE_TRANSITION_THEMES[targetPath] || ROUTE_TRANSITION_THEMES['/'];
      curtain.style.backgroundColor = theme.bg;
      const labelEl = curtain.querySelector('#curtain-label');
      if (labelEl) labelEl.textContent = theme.label;
      const contentEl = curtain.querySelector('#curtain-content');

      // Watchdog de sécurité interne (650ms max pour éviter tout blocage)
      const safetyTimer = setTimeout(() => {
        resolve();
      }, 650);

      const onDone = () => {
        clearTimeout(safetyTimer);
        resolve();
      };

      if (signal) {
        signal.addEventListener('abort', () => {
          clearTimeout(safetyTimer);
          if (window.gsap) window.gsap.killTweensOf(curtain);
          forceResetOverlays();
          resolve();
        }, { once: true });
      }

      const tl = window.gsap.timeline({
        onComplete: onDone
      });

      window.gsap.set(curtain, { y: '100%' });
      if (contentEl) window.gsap.set(contentEl, { opacity: 0, scale: 0.95 });

      // Le rideau monte pour recouvrir l'écran
      tl.to(curtain, {
        y: '0%',
        duration: 0.35,
        ease: 'power3.inOut'
      })
      .to(contentEl, {
        opacity: 1,
        scale: 1,
        duration: 0.15,
        ease: 'power2.out'
      }, '-=0.15');
    });
  },

  // 2. Ouverture du rideau vers le haut et révélation du nouveau contenu
  enter: (container, signal) => {
    return new Promise((resolve) => {
      if (signal?.aborted) {
        forceResetOverlays();
        return resolve();
      }

      if (isReducedMotion() || !window.gsap) {
        if (container) {
          container.style.opacity = '1';
          container.style.transform = 'none';
        }
        forceResetOverlays();
        refreshScrollTriggers();
        return resolve();
      }

      const curtain = getOrCreateCurtain();
      const contentEl = curtain.querySelector('#curtain-content');

      // Watchdog de sécurité interne (650ms max)
      const safetyTimer = setTimeout(() => {
        forceResetOverlays();
        resolve();
      }, 650);

      const onDone = () => {
        clearTimeout(safetyTimer);
        forceResetOverlays();
        refreshScrollTriggers();
        resolve();
      };

      if (signal) {
        signal.addEventListener('abort', () => {
          clearTimeout(safetyTimer);
          if (window.gsap) window.gsap.killTweensOf(curtain);
          forceResetOverlays();
          resolve();
        }, { once: true });
      }

      const tl = window.gsap.timeline({
        onComplete: onDone
      });

      // Le contenu du rideau s'estompe
      tl.to(contentEl, {
        opacity: 0,
        y: -20,
        duration: 0.15,
        ease: 'power2.in'
      })
      // Le rideau glisse vers le haut pour révéler la nouvelle page
      .to(curtain, {
        y: '-100%',
        duration: 0.38,
        ease: 'power3.inOut'
      }, '-=0.05');

      // Entrée en cascade (stagger) des éléments enfants
      if (container) {
        window.gsap.set(container, { opacity: 1, y: 0 });
        const animElements = container.querySelectorAll('[data-stagger-item], [data-reveal]');
        if (animElements.length > 0) {
          tl.fromTo(
            animElements,
            { opacity: 0, y: 25 },
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.06,
              ease: 'power3.out',
              clearProps: 'opacity,transform'
            },
            '-=0.25'
          );
        }
      }
    });
  }
};

/**
 * Révélation d'éléments au scroll via ScrollTrigger
 */
export const initScrollReveals = (scope = document) => {
  if (isReducedMotion() || !window.gsap || !window.ScrollTrigger) return;

  const revealElements = scope.querySelectorAll('[data-reveal]:not([data-revealed])');
  revealElements.forEach((el) => {
    el.setAttribute('data-revealed', 'true');
    const direction = el.dataset.reveal || 'up';
    const delay = parseFloat(el.dataset.delay || '0');
    
    let y = 0;
    let x = 0;
    if (direction === 'up') y = 45;
    if (direction === 'down') y = -45;
    if (direction === 'left') x = 45;
    if (direction === 'right') x = -45;

    window.gsap.fromTo(
      el,
      { opacity: 0, y, x },
      {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.85,
        delay,
        ease: "power3.out",
        clearProps: "opacity,transform",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        }
      }
    );
  });
};

/**
 * Compteurs numériques animés
 */
export const animateCounters = (scope = document) => {
  if (isReducedMotion() || !window.gsap || !window.ScrollTrigger) {
    scope.querySelectorAll('[data-counter]').forEach((el) => {
      const target = el.dataset.counter;
      const suffix = el.dataset.suffix || '';
      const prefix = el.dataset.prefix || '';
      el.innerHTML = `${prefix}${target}${suffix}`;
    });
    return;
  }

  const counters = scope.querySelectorAll('[data-counter]:not([data-counter-initialized])');
  counters.forEach((el) => {
    el.setAttribute('data-counter-initialized', 'true');
    const target = parseFloat(el.dataset.counter);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';

    const obj = { val: 0 };
    window.gsap.to(obj, {
      val: target,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 92%",
        toggleActions: "play none none none",
      },
      onUpdate: () => {
        el.innerHTML = `${prefix}${Math.round(obj.val)}${suffix}`;
      }
    });
  });
};

/**
 * Boutons et éléments magnétiques
 */
export const initMagneticElements = (scope = document) => {
  if (isReducedMotion()) return;

  const magnetics = scope.querySelectorAll('[data-magnetic]:not([data-magnetic-init])');
  magnetics.forEach((el) => {
    el.setAttribute('data-magnetic-init', 'true');

    const handleMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      if (window.gsap) {
        window.gsap.to(el, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.3,
          ease: "power2.out"
        });
      }
    };

    const handleMouseLeave = () => {
      if (window.gsap) {
        window.gsap.to(el, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.4)"
        });
      }
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
  });
};
