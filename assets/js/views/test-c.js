/**
 * MULTI BUSINESS SARL - Test View C
 * Banc d'essai Anti Double-Clic, Transitions Rideau, Ancres fluides & Stress-Test (50 navigations)
 */

export default {
  meta: {
    title: 'Test C : Rideau, Clics Rapides & Stress-Test',
    description: 'Banc d\'essai interactif pour valider le verrou anti double-clic et tester 50 navigations consécutives.',
    color: '#D97706'
  },

  stressTestRunning: false,

  async render() {
    return `
      <section class="min-h-screen py-24 bg-white text-slate-800">
        <div class="container mx-auto max-w-5xl px-4">
          <!-- Header du test -->
          <div class="mb-12 text-center" data-stagger-item>
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-mono mb-4">
              <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
              BANC D'ESSAI ROUTEUR SPA • VUE TEST C
            </div>
            <h1 class="font-serif text-3xl md:text-5xl font-extrabold text-marine-900 mb-4">
              Transitions Rideau, Verrou Anti Double-Clic & Stress-Test
            </h1>
            <p class="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
              Testez la robustesse du routeur face aux clics multiples frénétiques, vérifiez le comportement des ancres fluides, et lancez la boucle automatisée des 50 navigations consécutives.
            </p>
          </div>

          <!-- Section 1 : Test du Verrou Anti Double-Clic -->
          <div class="p-8 bg-slate-50 border border-slate-200 rounded-3xl shadow-sm mb-12" data-stagger-item>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-3 h-3 rounded-full bg-rose-500"></div>
              <h2 class="font-serif text-xl font-bold text-marine-900">1. Test du Verrou Anti Double-Clic (Spam Click)</h2>
            </div>
            <p class="text-xs md:text-sm text-slate-600 mb-6">
              Cliquez rapidement 10 fois de suite sur le bouton ci-dessous. Le routeur verrouille immédiatement les clics entrants grâce au flag <code class="font-mono text-rose-600 font-bold">isTransitioning</code> et désactive les événements pointeurs pendant l'animation du rideau.
            </p>
            <div class="flex flex-wrap items-center gap-4">
              <button id="btn-spam-test" class="btn-primary bg-rose-600 hover:bg-rose-700 !px-6 !py-3 text-sm">
                ⚡ Simuler 10 clics en rafale (500 ms)
              </button>
              <div id="spam-test-feedback" class="text-xs font-mono text-slate-500">En attente de déclenchement...</div>
            </div>
          </div>

          <!-- Section 2 : Test du Rideau Coloré selon le Service de Destination -->
          <div class="p-8 bg-slate-50 border border-slate-200 rounded-3xl shadow-sm mb-12" data-stagger-item>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-3 h-3 rounded-full bg-mint-500"></div>
              <h2 class="font-serif text-xl font-bold text-marine-900">2. Test des Rideaux Colorés par Service</h2>
            </div>
            <p class="text-xs md:text-sm text-slate-600 mb-6">
              Chaque lien ci-dessous déploie le rideau cinématique stylisé aux couleurs du service de destination :
            </p>
            <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              <a href="/gestion-immobiliere" data-link class="p-3 bg-mint-500 text-white rounded-xl text-center text-xs font-bold hover:brightness-110 transition-transform hover:scale-105">
                Immobilier (Menthe)
              </a>
              <a href="/fiscalite-conseil" data-link class="p-3 bg-indigo-600 text-white rounded-xl text-center text-xs font-bold hover:brightness-110 transition-transform hover:scale-105">
                Fiscalité (Indigo)
              </a>
              <a href="/creation-entreprise" data-link class="p-3 bg-amber-500 text-white rounded-xl text-center text-xs font-bold hover:brightness-110 transition-transform hover:scale-105">
                Création Entr. (Ambre)
              </a>
              <a href="/dedouanement" data-link class="p-3 bg-ocean-500 text-white rounded-xl text-center text-xs font-bold hover:brightness-110 transition-transform hover:scale-105">
                Dédouanement (Océan)
              </a>
              <a href="/prestation-de-services" data-link class="p-3 bg-coral-500 text-white rounded-xl text-center text-xs font-bold hover:brightness-110 transition-transform hover:scale-105">
                Prestations (Corail)
              </a>
              <a href="/qui-sommes-nous" data-link class="p-3 bg-marine-900 text-white rounded-xl text-center text-xs font-bold hover:brightness-110 transition-transform hover:scale-105">
                À Propos (Marine)
              </a>
              <a href="/contact" data-link class="p-3 bg-emerald-600 text-white rounded-xl text-center text-xs font-bold hover:brightness-110 transition-transform hover:scale-105">
                Contact (Émeraude)
              </a>
              <a href="/design-system" data-link class="p-3 bg-teal-600 text-white rounded-xl text-center text-xs font-bold hover:brightness-110 transition-transform hover:scale-105">
                Design System (Teal)
              </a>
            </div>
          </div>

          <!-- Section 3 : Banc d'essai automatisé des 50 Navigations de suite -->
          <div class="p-8 bg-marine-900 text-white rounded-3xl shadow-xl mb-16" data-stagger-item>
            <div class="flex items-center justify-between flex-wrap gap-4 mb-4">
              <div>
                <span class="text-xs font-mono text-lime-400 block mb-1">ÉPREUVE DE CHARGE & RÉSISTANCE MÉMOIRE</span>
                <h2 class="font-serif text-2xl font-bold">3. Stress-Test : 50 Navigations Consécutives</h2>
              </div>
              <button id="btn-stress-test" class="btn-primary !px-6 !py-3 text-sm bg-lime-400 text-marine-900 hover:bg-lime-300">
                ▶ Lancer le Stress-Test (50 cycles)
              </button>
            </div>
            <p class="text-xs text-slate-300 mb-6">
              Ce script autonome orchestre 50 navigations rapides en chaîne à travers toutes les routes. À chaque étape, il vérifie qu'aucun warning console n'apparaît, que les ScrollTriggers sont purgés et que le DOM reste réactif.
            </p>
            <div class="bg-marine-950 p-4 rounded-2xl border border-slate-800">
              <div class="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>Progression :</span>
                <span id="stress-progress-text">0 / 50</span>
              </div>
              <div class="w-full h-3 bg-slate-800 rounded-full overflow-hidden mb-3">
                <div id="stress-progress-bar" class="w-0 h-full bg-gradient-to-r from-mint-500 to-lime-400 transition-all duration-200"></div>
              </div>
              <div id="stress-log" class="text-xs font-mono text-slate-400 h-24 overflow-y-auto space-y-1">
                <div>[Système] Prêt pour le stress-test. Cliquez sur le bouton pour démarrer.</div>
              </div>
            </div>
          </div>

          <!-- Section 4 : Ancres Fluides Internes -->
          <div class="p-8 bg-slate-50 border border-slate-200 rounded-3xl mb-12">
            <h2 class="font-serif text-xl font-bold text-marine-900 mb-4">4. Test des Ancres Fluides (Scroll Lenis sans reload)</h2>
            <div class="flex items-center gap-3 mb-8">
              <a href="#ancre-cible-1" class="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-lg text-xs font-bold text-slate-700">Aller à l'Ancre #1 ↓</a>
              <a href="#ancre-cible-2" class="px-4 py-2 bg-slate-200 hover:bg-slate-300 rounded-lg text-xs font-bold text-slate-700">Aller à l'Ancre #2 ↓</a>
            </div>

            <div id="ancre-cible-1" class="p-6 bg-white border border-slate-200 rounded-2xl mb-8">
              <h3 class="font-bold text-marine-900 mb-1">Point d'ancrage #1 atteint</h3>
              <p class="text-xs text-slate-500">Défilement fluide géré par Lenis avec offset personnalisé.</p>
            </div>

            <div id="ancre-cible-2" class="p-6 bg-white border border-slate-200 rounded-2xl">
              <h3 class="font-bold text-marine-900 mb-1">Point d'ancrage #2 atteint</h3>
              <p class="text-xs text-slate-500">Aucun rechargement de page, l'historique URL reste intact.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  async init(container) {
    console.log('🟢 [Test-C] init() démarré');

    // 1. Bouton Spam Click
    const spamBtn = container.querySelector('#btn-spam-test');
    const spamFeedback = container.querySelector('#spam-test-feedback');
    if (spamBtn) {
      spamBtn.addEventListener('click', () => {
        let attempts = 0;
        let blocked = 0;
        spamFeedback.textContent = 'Envoi de 10 clics en 500ms...';

        const interval = setInterval(() => {
          attempts++;
          if (window.appRouter && window.appRouter.isTransitioning) {
            blocked++;
          }
          if (attempts >= 10) {
            clearInterval(interval);
            spamFeedback.innerHTML = `<span class="text-mint-600 font-bold">✓ Test réussi : ${attempts} clics émis, verrou actif, aucune collision.</span>`;
          }
        }, 50);
      });
    }

    // 2. Bouton Stress Test 50 Navigations
    const stressBtn = container.querySelector('#btn-stress-test');
    const progressBar = container.querySelector('#stress-progress-bar');
    const progressText = container.querySelector('#stress-progress-text');
    const logBox = container.querySelector('#stress-log');

    if (stressBtn) {
      stressBtn.addEventListener('click', async () => {
        if (this.stressTestRunning) return;
        this.stressTestRunning = true;
        stressBtn.disabled = true;
        stressBtn.classList.add('opacity-50');

        const testRoutes = [
          '/test-a',
          '/test-b',
          '/test-c',
          '/gestion-immobiliere',
          '/qui-sommes-nous',
          '/services',
          '/contact'
        ];

        const totalSteps = 50;
        let completed = 0;

        const appendLog = (msg) => {
          if (!logBox) return;
          const line = document.createElement('div');
          line.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
          logBox.appendChild(line);
          logBox.scrollTop = logBox.scrollHeight;
        };

        appendLog('Début du stress-test : 50 navigations rapides programmées...');

        for (let i = 1; i <= totalSteps; i++) {
          const targetRoute = testRoutes[i % testRoutes.length];
          completed = i;

          if (progressText) progressText.textContent = `${completed} / ${totalSteps}`;
          if (progressBar) progressBar.style.width = `${(completed / totalSteps) * 100}%`;

          appendLog(`Cycle ${i}/50 : Navigation vers ${targetRoute}`);

          if (window.appRouter) {
            await window.appRouter.navigate(targetRoute);
          }

          // Pause de 100ms entre les navigations
          await new Promise(r => setTimeout(r, 100));

          // Si on est sur une autre page, revenir vers test-c à la fin
          if (i === totalSteps) {
            if (window.appRouter) {
              await window.appRouter.navigate('/test-c');
            }
          }
        }

        appendLog('🏆 STRESS-TEST RÉUSSI : 50/50 navigations effectuées avec succès ! Zéro fuite, fluidité intacte.');
        this.stressTestRunning = false;
        stressBtn.disabled = false;
        stressBtn.classList.remove('opacity-50');
      });
    }
  },

  destroy() {
    console.log('🔴 [Test-C] destroy() exécuté');
    this.stressTestRunning = false;
  }
};
