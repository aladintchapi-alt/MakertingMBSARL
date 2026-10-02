/**
 * Vue Nos Services (Fiscalité, Création, Dédouanement) - MULTI BUSINESS SARL (Vue de Test Phase 2)
 */
import { CONFIG } from '../config.js';

export default {
  meta: {
    title: "Nos Services & Conseil d'Affaires au Cameroun",
    description: "Fiscalité d'entreprise et foncière, création d'entreprise à Douala & Yaoundé, transit et dédouanement portuaire."
  },

  _clickCount: 0,
  _buttonHandler: null,

  async render() {
    return `
      <div class="pt-32 pb-24 px-4 md:px-8 max-w-6xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-16" data-stagger-item>
          <div class="badge-tag badge-mint mb-4">Conseil & Pôles d'Excellence</div>
          <h1 class="text-display-lg font-display font-extrabold text-white mb-6">
            Services Stratégiques pour Entreprises & Bailleurs
          </h1>
          <p class="text-slate-300 text-lg leading-relaxed mb-8">
            En complément de notre pôle immobilier, nous accompagnons les investisseurs et entreprises au Cameroun sur 3 piliers réglementaires.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" data-stagger-item>
          <!-- Fiscalité -->
          <div class="glass-card p-8 flex flex-col justify-between">
            <div>
              <div class="badge-tag badge-lime mb-4">Pôle Fiscal</div>
              <h3 class="text-xl font-display font-bold text-white mb-3">Conseil & Fiscalité</h3>
              <p class="text-sm text-slate-400 mb-6">
                Déclarations fiscales mensuelles (DSF, précomptes, TVA, taxes foncières) en conformité avec le CGI.
              </p>
            </div>
            <a href="/contact" data-link class="text-lime-400 font-semibold text-sm flex items-center gap-1.5">
              Demander un audit <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- Création d'entreprise -->
          <div class="glass-card p-8 flex flex-col justify-between">
            <div>
              <div class="badge-tag badge-mint mb-4">Pôle Juridique</div>
              <h3 class="text-xl font-display font-bold text-white mb-3">Création d'Entreprise</h3>
              <p class="text-sm text-slate-400 mb-6">
                De la rédaction des statuts à l'immatriculation RCCM, obtention du NIU et domiciliation d'entreprise.
              </p>
            </div>
            <a href="/contact" data-link class="text-mint-400 font-semibold text-sm flex items-center gap-1.5">
              Créer ma structure <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- Dédouanement -->
          <div class="glass-card p-8 flex flex-col justify-between">
            <div>
              <div class="badge-tag badge-lime mb-4">Pôle Transit</div>
              <h3 class="text-xl font-display font-bold text-white mb-3">Dédouanement & Fret</h3>
              <p class="text-sm text-slate-400 mb-6">
                Formalités douanières au Port de Douala / Kribi et aéroports, transit maritime et aérien sécurisé.
              </p>
            </div>
            <a href="/contact" data-link class="text-lime-400 font-semibold text-sm flex items-center gap-1.5">
              Consulter nos transitaires <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>

        <!-- Section de Test Listeners & Destroy -->
        <div class="glass-card p-8 text-center max-w-xl mx-auto" data-stagger-item>
          <h3 class="text-lg font-bold text-white mb-2">Test d'Écouteurs d'Événements (Listeners)</h3>
          <p class="text-xs text-slate-400 mb-4">Cliquez pour tester l'écouteur local de la vue. Il sera retiré automatiquement au départ de la page.</p>
          <button id="test-listener-btn" class="btn-primary">
            <span>Clics enregistrés : <strong id="click-counter">0</strong></span>
          </button>
        </div>
      </div>
    `;
  },

  async init(container) {
    console.log('⚡ [Services View] init() déclenché');
    this._clickCount = 0;
    const btn = container.querySelector('#test-listener-btn');
    const counter = container.querySelector('#click-counter');

    if (btn && counter) {
      this._buttonHandler = () => {
        this._clickCount++;
        counter.textContent = this._clickCount;
      };
      btn.addEventListener('click', this._buttonHandler);
    }
  },

  destroy() {
    console.log('🧹 [Services View] destroy() déclenché : écouteur de bouton supprimé');
    const btn = document.getElementById('test-listener-btn');
    if (btn && this._buttonHandler) {
      btn.removeEventListener('click', this._buttonHandler);
      this._buttonHandler = null;
    }
  }
};
