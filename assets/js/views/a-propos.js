/**
 * Vue À Propos - MULTI BUSINESS SARL
 */
import { CONFIG } from '../config.js';

export default {
  meta: {
    title: "À Propos & Vision Immobilière au Cameroun",
    description: "MULTI BUSINESS SARL : L'alliance de l'expertise juridique, de la technologie SaaS et de la proximité terrain à Douala et Yaoundé."
  },

  async render() {
    return `
      <div class="pt-32 pb-24 px-4 md:px-8 max-w-5xl mx-auto" data-stagger-item>
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="badge-tag badge-lime mb-4">Notre Histoire & Valeurs</div>
          <h1 class="text-display-lg font-display font-extrabold text-white mb-6">
            Bâtir une Relation de Confiance Durable
          </h1>
          <p class="text-slate-300 text-lg leading-relaxed">
            Fondée au Cameroun, MULTI BUSINESS SARL modernise la gestion locative grâce à des processus digitalisés et une éthique rigoureuse.
          </p>
        </div>

        <div class="glass-card p-8 md:p-12 mb-12">
          <h2 class="text-2xl font-display font-bold text-white mb-4">Une Plateforme Conçue pour le Contexte Camerounais</h2>
          <p class="text-slate-300 leading-relaxed mb-6">
            Face aux difficultés récurrentes de recouvrement de loyers et de gestion des litiges fonciers à Douala et Yaoundé, nous avons développé un écosystème qui protège les bailleurs tout en offrant aux locataires un parcours de paiement fluide et transparent via Mobile Money.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="/gestion-locative" data-link class="btn-primary">Découvrir la Gestion Locative</a>
            <a href="/contact" data-link class="btn-secondary">Prendre Contact</a>
          </div>
        </div>
      </div>
    `;
  },

  async init(container) {
    console.log('⚡ [A Propos View] init()');
  },

  destroy() {
    console.log('🧹 [A Propos View] destroy()');
  }
};
