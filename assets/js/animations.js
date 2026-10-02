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

/**
 * Transitions de pages cinématiques (600 - 800ms)
 */
export const pageTransitions = {
  // Sortie animée de la page courante
  leave: (container) => {
    return new Promise((resolve) => {
      if (isReducedMotion() || !window.gsap || !container) {
        return resolve();
      }

      window.gsap.to(container, {
        opacity: 0,
        y: -25,
        filter: "blur(4px)",
        duration: 0.35,
        ease: "power2.inOut",
        onComplete: () => {
          window.gsap.set(container, { clearProps: "filter" });
          resolve();
        }
      });
    });
  },

  // Entrée animée cinématique avec cascade (stagger) des éléments enfants
  enter: (container) => {
    return new Promise((resolve) => {
      if (isReducedMotion() || !window.gsap || !container) {
        if (container) {
          container.style.opacity = '1';
          container.style.transform = 'none';
        }
        return resolve();
      }

      // Reset état initial du conteneur
      window.gsap.set(container, { opacity: 0, y: 35 });

      const tl = window.gsap.timeline({
        onComplete: () => {
          refreshScrollTriggers();
          resolve();
        }
      });

      // Apparition du conteneur
      tl.to(container, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        ease: "power3.out"
      });

      // Animation en cascade des blocs marqués
      const animElements = container.querySelectorAll('[data-stagger-item], [data-reveal]');
      if (animElements.length > 0) {
        tl.fromTo(
          animElements,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.08,
            ease: "power3.out"
          },
          "-=0.35"
        );
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
