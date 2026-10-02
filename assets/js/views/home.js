/**
 * Vue Accueil - MULTI BUSINESS SARL (Vue de Test Phase 2)
 */
import { CONFIG } from '../config.js';

export default {
  meta: {
    title: "Accueil | Gestion Locative & SaaS Immobilier au Cameroun",
    description: "MULTI BUSINESS SARL - Solution intégrale de gestion locative, plateforme SaaS pour bailleurs à Douala et Yaoundé."
  },

  // État local de la vue pour prouver l'absence de fuites mémoire
  _intervalId: null,
  _eventHandlers: [],

  async render() {
    return `
      <div class="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 md:px-8">
        <div class="absolute inset-0 bg-mesh-dark pointer-events-none opacity-70"></div>
        
        <div class="container max-w-5xl mx-auto text-center relative z-10" data-stagger-item>
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lime-500/10 border border-lime-500/30 text-lime-400 text-xs font-bold tracking-widest uppercase mb-8 shadow-glow-lime-sm">
            <span class="w-2 h-2 rounded-full bg-lime-400 animate-ping"></span>
            Plateforme SaaS & Gestion Immobilière N°1 au Cameroun
          </div>

          <h1 class="text-display-xl font-display font-extrabold text-white tracking-tight mb-6 leading-tight">
            La gestion locative réinventée.<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-mint-400 to-mint-500">
              0% tracas, 100% transparence.
            </span>
          </h1>

          <p class="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 font-normal leading-relaxed">
            Propriétaires et locataires à Douala et Yaoundé : suivez vos loyers, quittances et rapports financiers en temps réel avec reversements sécurisés via Orange Money & MTN MoMo.
          </p>

          <!-- Boutons avec data-link -->
          <div class="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a href="/gestion-locative" data-link class="btn-primary" data-magnetic>
              <span>Découvrir la Gestion Locative</span>
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
            <a href="/services" data-link class="btn-secondary" data-magnetic>
              <span>Nos Autres Services</span>
            </a>
            <a href="/design-system" data-link class="btn-ghost text-mint-400">
              <span>Tester le Design System</span>
            </a>
          </div>

          <!-- Métriques animées pour test GSAP -->
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8 border-t border-white/10" data-stagger-item>
            <div class="glass-card p-5 text-center">
              <div class="text-3xl md:text-4xl font-display font-extrabold text-white mb-1">
                <span data-counter="98" data-suffix="%">0%</span>
              </div>
              <div class="text-xs text-slate-400">Taux de recouvrement</div>
            </div>

            <div class="glass-card p-5 text-center">
              <div class="text-3xl md:text-4xl font-display font-extrabold text-lime-400 mb-1">
                <span data-counter="500" data-suffix="+">0+</span>
              </div>
              <div class="text-xs text-slate-400">Biens sous gestion</div>
            </div>

            <div class="glass-card p-5 text-center">
              <div class="text-3xl md:text-4xl font-display font-extrabold text-mint-400 mb-1">
                <span data-counter="24" data-suffix="/7">0/7</span>
              </div>
              <div class="text-xs text-slate-400">Accès SaaS Direct</div>
            </div>

            <div class="glass-card p-5 text-center">
              <div class="text-3xl md:text-4xl font-display font-extrabold text-white mb-1">
                <span id="lifecycle-timer" class="font-mono text-lime-400">0s</span>
              </div>
              <div class="text-xs text-slate-400">Temps actif vue (Test Init/Destroy)</div>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  async init(container) {
    console.log('⚡ [Home View] init() déclenché');
    let seconds = 0;
    const timerEl = container.querySelector('#lifecycle-timer');

    // Timer de test pour prouver le cycle de vie
    this._intervalId = setInterval(() => {
      seconds++;
      if (timerEl) timerEl.textContent = `${seconds}s`;
    }, 1000);
  },

  destroy() {
    console.log('🧹 [Home View] destroy() déclenché : nettoyage des timers et listeners');
    if (this._intervalId) {
      clearInterval(this._intervalId);
      this._intervalId = null;
    }
  }
};
