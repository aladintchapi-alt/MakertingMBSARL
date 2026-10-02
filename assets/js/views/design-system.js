/**
 * Vue Design System Interactive - MULTI BUSINESS SARL
 * Vitrine de tous les composants d'interface, palettes, typographies et micro-interactions
 */
import { showToast, openModal, closeModal, initAccordions, initTabs, initModalTriggers } from '../ui.js';

export default {
  meta: {
    title: "Design System & Composants UI",
    description: "Documentation interactive du Design System de MULTI BUSINESS SARL."
  },

  _cleanups: [],

  async render() {
    return `
      <div class="pt-28 pb-24 px-4 md:px-8 max-w-7xl mx-auto" data-stagger-item>
        <!-- Header Design System -->
        <header class="mb-16 pb-8 border-b border-white/10">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-400 text-xs font-bold tracking-widest uppercase mb-4">
            MULTI BUSINESS SARL • DESIGN SYSTEM
          </div>
          <h1 class="text-display-lg font-display font-extrabold text-white mb-4">
            Système de Design & Bibliothèque de Composants
          </h1>
          <p class="text-slate-400 max-w-3xl text-lg">
            Direction artistique « Luxe immobilier moderne, confiance institutionnelle, Afrique contemporaine & SaaS ».
            Tous les composants sont réactifs, accessibles, animés avec GSAP et optimisés Tailwind CSS.
          </p>
        </header>

        <!-- 1. PALETTE DE COULEURS -->
        <section class="mb-20">
          <div class="flex items-center gap-3 mb-8">
            <span class="w-3 h-8 bg-lime-500 rounded-full"></span>
            <h2 class="text-heading-xl font-display font-bold text-white">1. Palette Chromatique Officielle</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <!-- Lime Électrique -->
            <div class="glass-card p-6 border-lime-500/30">
              <div class="h-28 rounded-2xl bg-[#9AFF01] mb-4 flex items-end p-4 shadow-glow-lime-sm">
                <span class="text-forest-950 font-mono font-bold text-lg">#9AFF01</span>
              </div>
              <h3 class="text-white font-display font-bold text-lg mb-1">Lime Électrique (Accent Rare)</h3>
              <p class="text-slate-400 text-sm mb-3">Couleur primaire du logo (50%). Réservée aux CTA clés, status actifs, highlights et micro-interactions.</p>
              <div class="flex items-center justify-between text-xs font-mono text-slate-400 pt-3 border-t border-white/10">
                <span>Contraste sur Noir : 15.2:1 (AAA)</span>
                <button class="text-lime-400 hover:underline copy-hex-btn" data-hex="#9AFF01">Copier Hex</button>
              </div>
            </div>

            <!-- Mint / Émeraude -->
            <div class="glass-card p-6 border-mint-500/30">
              <div class="h-28 rounded-2xl bg-[#26C992] mb-4 flex items-end p-4 shadow-glow-mint-sm">
                <span class="text-white font-mono font-bold text-lg">#26C992</span>
              </div>
              <h3 class="text-white font-display font-bold text-lg mb-1">Vert Menthe / Émeraude</h3>
              <p class="text-slate-400 text-sm mb-3">Couleur secondaire du logo (50%). Évoque la finance saine, la sérénité, la validation et les quittances.</p>
              <div class="flex items-center justify-between text-xs font-mono text-slate-400 pt-3 border-t border-white/10">
                <span>Contraste sur Noir : 9.8:1 (AAA)</span>
                <button class="text-mint-400 hover:underline copy-hex-btn" data-hex="#26C992">Copier Hex</button>
              </div>
            </div>

            <!-- Deep Forest -->
            <div class="glass-card p-6 border-white/10">
              <div class="h-28 rounded-2xl bg-[#06130E] border border-white/10 mb-4 flex items-end p-4">
                <span class="text-white font-mono font-bold text-lg">#06130E</span>
              </div>
              <h3 class="text-white font-display font-bold text-lg mb-1">Noir Forêt Profond</h3>
              <p class="text-slate-400 text-sm mb-3">Fond principal ultra-luxe. Évite le noir pur artificiel pour une ambiance feutrée et institutionnelle.</p>
              <div class="flex items-center justify-between text-xs font-mono text-slate-400 pt-3 border-t border-white/10">
                <span>Fond Maître Dark Theme</span>
                <button class="text-slate-300 hover:underline copy-hex-btn" data-hex="#06130E">Copier Hex</button>
              </div>
            </div>
          </div>
        </section>

        <!-- 2. BOUTONS & INTERACTIONS -->
        <section class="mb-20">
          <div class="flex items-center gap-3 mb-8">
            <span class="w-3 h-8 bg-mint-500 rounded-full"></span>
            <h2 class="text-heading-xl font-display font-bold text-white">2. Boutons & Actions</h2>
          </div>

          <div class="glass-card p-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
              <button class="btn-primary w-full" data-magnetic id="demo-btn-toast-success">
                <span>Action Primaire</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>

              <button class="btn-secondary w-full" data-magnetic id="demo-btn-toast-info">
                <span>Action Secondaire</span>
              </button>

              <button class="btn-ghost w-full">
                <span>Bouton Ghost</span>
              </button>

              <button class="btn-primary w-full !bg-mint-500 hover:!bg-mint-400 !text-forest-950" data-modal-target="demo-modal">
                <span>Ouvrir Modale</span>
              </button>
            </div>
          </div>
        </section>

        <!-- 3. SIMULATEUR EXPRESS DE GESTION -->
        <section class="mb-20">
          <div class="flex items-center gap-3 mb-8">
            <span class="w-3 h-8 bg-lime-500 rounded-full"></span>
            <h2 class="text-heading-xl font-display font-bold text-white">3. Simulateur de Rentabilité Immobilière</h2>
          </div>

          <div class="glass-card p-8">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="space-y-4">
                <label class="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Loyer Mensuel Estimé (FCFA)</label>
                <div class="flex items-center gap-4">
                  <input type="range" min="50000" max="2500000" step="25000" value="350000" id="rent-slider" class="w-full accent-lime-400 cursor-pointer" />
                  <span id="rent-display" class="font-mono font-bold text-lime-400 text-lg min-w-[140px] text-right">350 000 FCFA</span>
                </div>

                <div class="grid grid-cols-2 gap-4 pt-4">
                  <div class="p-4 rounded-xl bg-forest-950/70 border border-white/10">
                    <span class="text-xs text-slate-400 block mb-1">Reversement Net Estimé</span>
                    <span id="net-revenue-display" class="text-lg font-mono font-bold text-white">322 000 FCFA</span>
                  </div>
                  <div class="p-4 rounded-xl bg-forest-950/70 border border-white/10">
                    <span class="text-xs text-slate-400 block mb-1">Garantie & Sérénité</span>
                    <span class="text-lg font-mono font-bold text-mint-400">100% Zéro Tracas</span>
                  </div>
                </div>
              </div>

              <!-- Onglets Interactifs -->
              <div class="space-y-4 border-t md:border-t-0 md:border-l border-white/10 md:pl-8 pt-6 md:pt-0" data-tabs>
                <div class="flex gap-2 p-1 rounded-xl bg-forest-950/80 border border-white/10 mb-4">
                  <button class="flex-1 py-2 px-3 rounded-lg text-xs font-bold uppercase bg-lime-500 text-forest-950 shadow-glow-lime-sm" data-tab-btn="bailleurs">Bailleurs</button>
                  <button class="flex-1 py-2 px-3 rounded-lg text-xs font-bold uppercase text-slate-300 hover:text-white" data-tab-btn="locataires">Locataires</button>
                </div>
                <div data-tab-content="bailleurs" class="text-xs text-slate-400 space-y-2">
                  <p class="text-lime-400 font-semibold">✓ Reversements automatisés le 5 du mois</p>
                  <p>✓ Suivi en direct du taux d'occupation de vos immeubles.</p>
                </div>
                <div data-tab-content="locataires" class="text-xs text-slate-400 space-y-2 hidden">
                  <p class="text-mint-400 font-semibold">✓ Paiement immédiat Orange & MTN MoMo</p>
                  <p>✓ Quittances électroniques instantanées certifiées.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <!-- Modale de Test -->
      <div id="demo-modal" data-modal class="fixed inset-0 z-50 hidden items-center justify-center bg-black/80 backdrop-blur-md p-4">
        <div class="modal-box glass-card-accent p-8 max-w-lg w-full relative shadow-luxury">
          <button data-modal-close class="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-lg">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          
          <div class="badge-tag badge-lime mb-4">Composant Modale</div>
          <h3 class="text-heading-lg font-display font-bold text-white mb-3">Modale de Démonstration</h3>
          <p class="text-slate-300 text-sm mb-6 leading-relaxed">
            Transition fluide GSAP avec flou d'arrière-plan haute définition et blocage du défilement sous-jacent.
          </p>

          <div class="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
            <button data-modal-close class="btn-ghost text-xs">Fermer</button>
            <button data-modal-close class="btn-primary text-xs !py-2.5 !px-5">Valider</button>
          </div>
        </div>
      </div>
    `;
  },

  async init(container = (typeof document !== 'undefined' ? document.getElementById('app') || document : null)) {
    console.log('⚡ [Design System View] init()');
    this._cleanups = [];

    if (!container) return;

    // Initialisation des composants UI internes à la vue
    initAccordions(container);
    initTabs(container);
    initModalTriggers(container);

    // Boutons de copie Hex
    container.querySelectorAll('.copy-hex-btn').forEach((btn) => {
      const handler = (e) => {
        const hex = e.target.dataset.hex;
        navigator.clipboard.writeText(hex).then(() => {
          showToast(`Code ${hex} copié !`, 'success');
        });
      };
      btn.addEventListener('click', handler);
      this._cleanups.push(() => btn.removeEventListener('click', handler));
    });

    // Toasts interactifs
    const btnSuccess = container.querySelector('#demo-btn-toast-success');
    if (btnSuccess) {
      const h = () => showToast("Test notification succès !", "success");
      btnSuccess.addEventListener('click', h);
      this._cleanups.push(() => btnSuccess.removeEventListener('click', h));
    }

    const btnInfo = container.querySelector('#demo-btn-toast-info');
    if (btnInfo) {
      const h = () => showToast("Connexion à l'espace SaaS...", "success");
      btnInfo.addEventListener('click', h);
      this._cleanups.push(() => btnInfo.removeEventListener('click', h));
    }

    // Slider
    const slider = container.querySelector('#rent-slider');
    const rentDisplay = container.querySelector('#rent-display');
    const netDisplay = container.querySelector('#net-revenue-display');

    if (slider && rentDisplay && netDisplay) {
      const h = (e) => {
        const val = parseInt(e.target.value, 10);
        rentDisplay.textContent = `${val.toLocaleString('fr-FR')} FCFA`;
        const net = Math.round(val * 0.92);
        netDisplay.textContent = `${net.toLocaleString('fr-FR')} FCFA`;
      };
      slider.addEventListener('input', h);
      this._cleanups.push(() => slider.removeEventListener('input', h));
    }
  },

  destroy() {
    console.log('🧹 [Design System View] destroy() : nettoyage de tous les écouteurs');
    this._cleanups.forEach((cleanup) => {
      try { cleanup(); } catch (e) {}
    });
    this._cleanups = [];
  }
};
