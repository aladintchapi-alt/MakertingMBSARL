/**
 * Vue Gestion Locative (70% Focus) - MULTI BUSINESS SARL (Vue de Test Phase 2)
 */
import { CONFIG } from '../config.js';

export default {
  meta: {
    title: "Gestion Locative & Plateforme SaaS Bailleurs",
    description: "Multi Business SARL : gestion intégrale de vos biens immobiliers à Douala et Yaoundé. Encaissement Orange Money & MTN MoMo, quittances instantanées."
  },

  _customTrigger: null,

  async render() {
    return `
      <div class="pt-32 pb-24 px-4 md:px-8 max-w-6xl mx-auto">
        <!-- Hero Section -->
        <div class="text-center max-w-3xl mx-auto mb-16" data-stagger-item>
          <div class="badge-tag badge-lime mb-4">Cœur de Métier (70% d'Activité)</div>
          <h1 class="text-display-lg font-display font-extrabold text-white mb-6">
            Gestion Locative Intelligente au Cameroun
          </h1>
          <p class="text-slate-300 text-lg leading-relaxed mb-8">
            Pour propriétaires exigeants et bailleurs de la diaspora. Encaissement digitalisé, reversements ponctuels garantis, sélection rigoureuse et conciergerie technique.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <a href="/contact" data-link class="btn-primary" data-magnetic>Confier un bien immobilier</a>
            <a href="/services" data-link class="btn-secondary" data-magnetic>Voir les services fiscaux</a>
          </div>
        </div>

        <!-- 6 Piliers Métier -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" data-stagger-item>
          <div class="glass-card p-6">
            <div class="w-12 h-12 rounded-2xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center text-lime-400 mb-4 font-bold font-mono">01</div>
            <h3 class="text-lg font-display font-bold text-white mb-2">Sélection & Solvabilité</h3>
            <p class="text-sm text-slate-400">Scoring rigoureux des locataires, vérification des revenus et cautions bancaires.</p>
          </div>

          <div class="glass-card p-6">
            <div class="w-12 h-12 rounded-2xl bg-mint-500/10 border border-mint-500/30 flex items-center justify-center text-mint-400 mb-4 font-bold font-mono">02</div>
            <h3 class="text-lg font-display font-bold text-white mb-2">Paiements MoMo / OM</h3>
            <p class="text-sm text-slate-400">Paiement automatisé des loyers via Orange Money, MTN Mobile Money ou virement.</p>
          </div>

          <div class="glass-card p-6">
            <div class="w-12 h-12 rounded-2xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center text-lime-400 mb-4 font-bold font-mono">03</div>
            <h3 class="text-lg font-display font-bold text-white mb-2">Reversement Garanti</h3>
            <p class="text-sm text-slate-400">Vos loyers versés à date fixe sur votre compte bancaire à Douala, Yaoundé ou à l'étranger.</p>
          </div>
        </div>

        <!-- Section de Test ScrollTrigger -->
        <div id="test-scroll-box" class="glass-card-accent p-8 text-center rounded-3xl" data-reveal="up">
          <h2 class="text-2xl font-display font-bold text-white mb-3">Zone de Test ScrollTrigger Actif</h2>
          <p class="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Cette boîte est animée via GSAP ScrollTrigger. À la navigation vers une autre vue, ce trigger est automatiquement détruit sans aucun effet fantôme.
          </p>
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-forest-900 border border-mint-500/40 text-mint-300 font-mono text-xs">
            Status : <span id="trigger-status" class="text-lime-400 font-bold">Actif & Synchronisé avec Lenis</span>
          </div>
        </div>
      </div>
    `;
  },

  async init(container) {
    console.log('⚡ [Gestion Locative View] init() déclenché');
    
    // Exemple d'animation GSAP dédiée à la vue
    if (window.gsap && window.ScrollTrigger) {
      const box = container.querySelector('#test-scroll-box');
      if (box) {
        this._customTrigger = window.gsap.to(box, {
          borderColor: 'rgba(154, 255, 1, 0.8)',
          duration: 1,
          scrollTrigger: {
            trigger: box,
            start: 'top 80%',
            toggleActions: 'play reverse play reverse'
          }
        });
      }
    }
  },

  destroy() {
    console.log('🧹 [Gestion Locative View] destroy() déclenché : ScrollTriggers spécifiques nettoyés');
    if (this._customTrigger && this._customTrigger.scrollTrigger) {
      this._customTrigger.scrollTrigger.kill();
      this._customTrigger.kill();
      this._customTrigger = null;
    }
  }
};
