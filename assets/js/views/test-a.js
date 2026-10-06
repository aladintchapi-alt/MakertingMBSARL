/**
 * MULTI BUSINESS SARL - Test View A
 * Test de cycle de vie (Lifecycle), ScrollTriggers, Listeners, Observers & Timers
 */

export default {
  meta: {
    title: 'Test A : Cycle de vie & ScrollTriggers',
    description: 'Vérification du nettoyage strict des animations, timers et listeners (zéro fuite mémoire).',
    color: '#4F46E5'
  },

  timerId: null,
  resizeListener: null,
  observer: null,
  triggersCountAtInit: 0,

  async render() {
    return `
      <section class="min-h-screen py-24 bg-white text-slate-800">
        <div class="container mx-auto max-w-5xl px-4">
          <!-- Header du test -->
          <div class="mb-12 text-center" data-stagger-item>
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-mono mb-4">
              <span class="w-2 h-2 rounded-full bg-indigo-500 animate-pulse"></span>
              BANC D'ESSAI ROUTEUR SPA • VUE TEST A
            </div>
            <h1 class="font-serif text-3xl md:text-5xl font-extrabold text-marine-900 mb-4">
              Cycle de Vie & Nettoyage Mémoire
            </h1>
            <p class="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
              Cette vue valide l'étanchéité des méthodes <code class="bg-slate-100 px-2 py-0.5 rounded font-mono text-indigo-600 font-bold">init()</code> et <code class="bg-slate-100 px-2 py-0.5 rounded font-mono text-rose-600 font-bold">destroy()</code>. Aucun timer, observer ou ScrollTrigger résiduel ne doit subsister après navigation.
            </p>
          </div>

          <!-- Métriques en temps réel -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-stagger-item>
            <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm text-center">
              <span class="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-1">Timer Actif (Heartbeat)</span>
              <div id="test-timer-counter" class="font-mono text-3xl font-bold text-indigo-600">0 s</div>
              <span class="text-[11px] text-slate-400 mt-2 block">Détruit au destroy()</span>
            </div>

            <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm text-center">
              <span class="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-1">ScrollTriggers GSAP</span>
              <div id="test-st-counter" class="font-mono text-3xl font-bold text-mint-600">3 actifs</div>
              <span class="text-[11px] text-slate-400 mt-2 block">Purgés au destroy()</span>
            </div>

            <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm text-center">
              <span class="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-1">Window Resize Listeners</span>
              <div id="test-listener-status" class="font-mono text-3xl font-bold text-amber-600">Attaché</div>
              <span class="text-[11px] text-slate-400 mt-2 block">Détaché au destroy()</span>
            </div>
          </div>

          <!-- Éléments ScrollTrigger de test -->
          <div class="space-y-8 mb-16">
            <h2 class="font-serif text-2xl font-bold text-marine-900 text-center mb-6">Éléments animés au défilement (ScrollTriggers)</h2>
            
            <div id="trigger-box-1" class="p-8 bg-indigo-50 border border-indigo-200 rounded-2xl shadow-sm flex items-center justify-between">
              <div>
                <h3 class="font-bold text-indigo-900 text-lg">Animation Trigger #1</h3>
                <p class="text-xs text-indigo-700">Déclenché par ScrollTrigger GSAP</p>
              </div>
              <span class="px-3 py-1 bg-indigo-600 text-white rounded-full text-xs font-mono">Pinned / Scrub</span>
            </div>

            <div id="trigger-box-2" class="p-8 bg-mint-50 border border-mint-200 rounded-2xl shadow-sm flex items-center justify-between">
              <div>
                <h3 class="font-bold text-mint-900 text-lg">Animation Trigger #2</h3>
                <p class="text-xs text-mint-700">Déclenché par ScrollTrigger GSAP</p>
              </div>
              <span class="px-3 py-1 bg-mint-600 text-white rounded-full text-xs font-mono">ToggleActions</span>
            </div>

            <div id="trigger-box-3" class="p-8 bg-amber-50 border border-amber-200 rounded-2xl shadow-sm flex items-center justify-between">
              <div>
                <h3 class="font-bold text-amber-900 text-lg">Animation Trigger #3</h3>
                <p class="text-xs text-amber-700">Déclenché par ScrollTrigger GSAP</p>
              </div>
              <span class="px-3 py-1 bg-amber-600 text-white rounded-full text-xs font-mono">Batch Trigger</span>
            </div>
          </div>

          <!-- Navigation de test vers les autres bancs d'essai -->
          <div class="p-8 bg-slate-900 text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 class="font-serif text-xl font-bold mb-1">Continuer les tests du routeur</h3>
              <p class="text-xs text-slate-400">Naviguez vers le banc d'essai Three.js ou le banc de clics rapides.</p>
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <a href="/test-b" data-link class="btn-primary !px-5 !py-2.5 text-xs bg-ocean-500 hover:bg-ocean-600">Tester Vue B (Three.js 3D) →</a>
              <a href="/test-c" data-link class="btn-outline !px-5 !py-2.5 text-xs !text-white !border-slate-600 hover:!border-white">Tester Vue C (Clics & Rideau) →</a>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  async init(container) {
    console.log('🟢 [Test-A] init() démarré');
    let seconds = 0;
    const timerEl = container.querySelector('#test-timer-counter');

    // 1. Démarrage d'un timer interval
    this.timerId = setInterval(() => {
      seconds++;
      if (timerEl) timerEl.textContent = `${seconds} s`;
    }, 1000);

    // 2. Écouteur d'événement Window
    this.resizeListener = () => {
      const statusEl = document.querySelector('#test-listener-status');
      if (statusEl) statusEl.textContent = `${window.innerWidth}px`;
    };
    window.addEventListener('resize', this.resizeListener, { passive: true });

    // 3. Création de 3 ScrollTriggers réels
    if (window.gsap && window.ScrollTrigger) {
      window.gsap.to('#trigger-box-1', {
        x: 15,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#trigger-box-1',
          start: 'top 85%',
          toggleActions: 'play reverse play reverse'
        }
      });

      window.gsap.to('#trigger-box-2', {
        scale: 1.02,
        duration: 1,
        scrollTrigger: {
          trigger: '#trigger-box-2',
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });

      window.gsap.to('#trigger-box-3', {
        opacity: 0.9,
        duration: 0.8,
        scrollTrigger: {
          trigger: '#trigger-box-3',
          start: 'top 85%',
        }
      });

      const totalTriggers = window.ScrollTrigger.getAll().length;
      const stEl = container.querySelector('#test-st-counter');
      if (stEl) stEl.textContent = `${totalTriggers} actifs`;
    }

    // 4. Création d'un IntersectionObserver
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('ring-2', 'ring-indigo-400');
        }
      });
    });
    const box1 = container.querySelector('#trigger-box-1');
    if (box1) this.observer.observe(box1);
  },

  destroy() {
    console.log('🔴 [Test-A] destroy() exécuté : Purge complète.');

    // 1. Arrêt du timer
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
      console.log('✓ Timer interval arrêté avec succès.');
    }

    // 2. Retrait de l'écouteur window
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
      this.resizeListener = null;
      console.log('✓ Window listener détaché avec succès.');
    }

    // 3. Déconnexion de l'observer
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
      console.log('✓ IntersectionObserver déconnecté.');
    }
  }
};
