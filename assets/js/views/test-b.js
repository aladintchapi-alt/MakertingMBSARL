/**
 * MULTI BUSINESS SARL - Test View B
 * Banc d'essai Three.js, WebGL Contexts & Libération Mémoire GPU
 */

import { init3DPhoneViewer, destroy3DPhoneViewer } from '../scene3d.js';

export default {
  meta: {
    title: 'Test B : Moteur 3D Three.js & Mémoire WebGL',
    description: 'Vérification de la création et destruction propre de la scène WebGL sans fuite GPU.',
    color: '#0284C7'
  },

  viewerInstance: null,

  async render() {
    return `
      <section class="min-h-screen py-24 bg-white text-slate-800">
        <div class="container mx-auto max-w-5xl px-4">
          <!-- Header du test -->
          <div class="mb-12 text-center" data-stagger-item>
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-ocean-50 border border-ocean-200 text-ocean-700 text-xs font-mono mb-4">
              <span class="w-2 h-2 rounded-full bg-ocean-500 animate-pulse"></span>
              BANC D'ESSAI ROUTEUR SPA • VUE TEST B
            </div>
            <h1 class="font-serif text-3xl md:text-5xl font-extrabold text-marine-900 mb-4">
              Scène Three.js & Mémoire GPU WebGL
            </h1>
            <p class="text-slate-600 max-w-2xl mx-auto text-sm md:text-base">
              Cette vue instancie le modèle 3D de l'iPhone avec l'application SaaS. Lors de la navigation vers une autre page, le moteur détruit le canvas, libère les géométries et textures, et appelle <code class="bg-slate-100 px-2 py-0.5 rounded font-mono text-ocean-600 font-bold">forceContextLoss()</code> pour éviter l'erreur des 16 contextes WebGL maximum.
            </p>
          </div>

          <!-- Métriques WebGL en direct -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" data-stagger-item>
            <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm text-center">
              <span class="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-1">Contexte WebGL Actif</span>
              <div id="test-webgl-status" class="font-mono text-2xl font-bold text-ocean-600">Initialisation...</div>
              <span class="text-[11px] text-slate-400 mt-2 block">1 seul contexte à la fois</span>
            </div>

            <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm text-center">
              <span class="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-1">Boucle Animation RAF</span>
              <div id="test-raf-status" class="font-mono text-2xl font-bold text-mint-600">60 FPS Actif</div>
              <span class="text-[11px] text-slate-400 mt-2 block">cancelAnimationFrame() au départ</span>
            </div>

            <div class="p-6 bg-slate-50 border border-slate-200 rounded-2xl shadow-sm text-center">
              <span class="text-xs font-mono uppercase tracking-wider text-slate-500 block mb-1">Texture Canvas Dynamique</span>
              <div class="font-mono text-2xl font-bold text-amber-600">512 × 1024 px</div>
              <span class="text-[11px] text-slate-400 mt-2 block">Disposed au destroy()</span>
            </div>
          </div>

          <!-- Zone du Canvas Three.js -->
          <div class="p-8 bg-slate-50 border border-slate-200 rounded-3xl shadow-lg mb-16 flex flex-col items-center">
            <h2 class="font-serif text-xl font-bold text-marine-900 mb-6">iPhone 3D Interactif (Déplacez la souris sur le modèle)</h2>
            <div id="test-3d-viewport" class="w-full max-w-lg h-[460px] rounded-2xl bg-white border border-slate-200 shadow-inner overflow-hidden relative"></div>
          </div>

          <!-- Liens de test rapides -->
          <div class="p-8 bg-slate-900 text-white rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <h3 class="font-serif text-xl font-bold mb-1">Vérification de la libération GPU</h3>
              <p class="text-xs text-slate-400">Naviguez vers une autre page puis revenez ici pour observer qu'aucun contexte résiduel ne subsiste.</p>
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <a href="/test-a" data-link class="btn-primary !px-5 !py-2.5 text-xs bg-indigo-500 hover:bg-indigo-600">← Retour Vue A (Timers)</a>
              <a href="/test-c" data-link class="btn-primary !px-5 !py-2.5 text-xs bg-amber-500 hover:bg-amber-600">Tester Vue C (Clics & Rideau) →</a>
            </div>
          </div>
        </div>
      </section>
    `;
  },

  async init(container) {
    console.log('🟢 [Test-B] init() Three.js démarré');
    const viewport = container.querySelector('#test-3d-viewport');
    const statusEl = container.querySelector('#test-webgl-status');

    if (viewport) {
      try {
        this.viewerInstance = init3DPhoneViewer(viewport);
        if (statusEl) {
          statusEl.textContent = 'Actif (WebGL 2.0)';
          statusEl.className = 'font-mono text-2xl font-bold text-mint-600';
        }
      } catch (err) {
        console.error('[Test-B] Échec initialisation Three.js:', err);
        if (statusEl) {
          statusEl.textContent = 'Fallback Actif';
          statusEl.className = 'font-mono text-2xl font-bold text-slate-500';
        }
      }
    }
  },

  destroy() {
    console.log('🔴 [Test-B] destroy() Three.js : Nettoyage WebGL');
    destroy3DPhoneViewer();
    this.viewerInstance = null;
    console.log('✓ Contexte WebGL et géométries libérés.');
  }
};
