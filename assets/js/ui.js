/**
 * MULTI BUSINESS SARL - UI Interaction Engine
 * Composants interactifs, Header dynamique, Menu Mobile, Modales, Accordéons, Onglets, Toasts
 */

export const initUIComponents = (scope = document) => {
  initAccordions(scope);
  initTabs(scope);
  initModalTriggers(scope);
};

/**
 * Gestion du Header au scroll (Glassmorphism & shrink)
 */
export const initHeader = () => {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('bg-forest-950/90', 'backdrop-blur-xl', 'border-b', 'border-white/10', 'py-3.5', 'shadow-luxury');
      header.classList.remove('bg-transparent', 'py-5');
    } else {
      header.classList.remove('bg-forest-950/90', 'backdrop-blur-xl', 'border-b', 'border-white/10', 'py-3.5', 'shadow-luxury');
      header.classList.add('bg-transparent', 'py-5');
    }
  }, { passive: true });
};

/**
 * Mise à jour de l'état actif dans la barre de navigation
 */
export const updateActiveNavLink = (currentPath) => {
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-item');
  allNavLinks.forEach((link) => {
    const href = link.getAttribute('href');
    const isMatch = href === currentPath || (currentPath === '/' && (href === '/' || href === ''));
    if (isMatch) {
      link.classList.add('text-lime-400', 'font-semibold');
      link.classList.remove('text-slate-300');
    } else {
      link.classList.remove('text-lime-400', 'font-semibold');
      link.classList.add('text-slate-300');
    }
  });

  // Fermer le menu mobile lors d'une navigation
  closeMobileMenu();
};

/**
 * Menu Mobile Overlay avec animation GSAP
 */
export const initMobileMenu = () => {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const menuOverlay = document.getElementById('mobile-menu-overlay');

  if (!toggleBtn || !menuOverlay) return;

  toggleBtn.addEventListener('click', () => {
    openMobileMenu();
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      closeMobileMenu();
    });
  }
};

export const openMobileMenu = () => {
  const menuOverlay = document.getElementById('mobile-menu-overlay');
  if (!menuOverlay) return;

  menuOverlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  if (window.gsap) {
    window.gsap.fromTo(
      menuOverlay,
      { opacity: 0, scale: 0.96 },
      { opacity: 1, scale: 1, duration: 0.4, ease: "power3.out" }
    );
    window.gsap.fromTo(
      menuOverlay.querySelectorAll('.mobile-nav-item'),
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.08, ease: "power2.out", delay: 0.1 }
    );
  }
};

export const closeMobileMenu = () => {
  const menuOverlay = document.getElementById('mobile-menu-overlay');
  if (!menuOverlay || menuOverlay.classList.contains('hidden')) return;

  if (window.gsap) {
    window.gsap.to(menuOverlay, {
      opacity: 0,
      scale: 0.98,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        menuOverlay.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  } else {
    menuOverlay.classList.add('hidden');
    document.body.style.overflow = '';
  }
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
      
      // Ferme les autres accordéons du même conteneur s'il a data-accordion-group
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
 * Onglets (Tabs interactifs)
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
          b.classList.remove('bg-lime-500', 'text-forest-950', 'shadow-glow-lime-sm');
          b.classList.add('text-slate-300', 'hover:text-white');
        });
        btn.classList.add('bg-lime-500', 'text-forest-950', 'shadow-glow-lime-sm');
        btn.classList.remove('text-slate-300', 'hover:text-white');

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
      { opacity: 0, scale: 0.9, y: 20 },
      { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power3.out" }
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
    toastContainer.className = 'fixed bottom-6 right-6 z-50 flex flex-col gap-3 pointer-events-none';
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
