/**
 * Vue Contact - MULTI BUSINESS SARL
 */
import { CONFIG } from '../config.js';

export default {
  meta: {
    title: "Contact & Nos Agences (Douala & Yaoundé)",
    description: "Contactez MULTI BUSINESS SARL à Douala et Yaoundé pour la mise en gestion de vos biens ou vos besoins d'affaires."
  },

  async render() {
    return `
      <div class="pt-32 pb-24 px-4 md:px-8 max-w-6xl mx-auto" data-stagger-item>
        <div class="text-center max-w-3xl mx-auto mb-16">
          <div class="badge-tag badge-mint mb-4">Disponibilité Immédiate</div>
          <h1 class="text-display-lg font-display font-extrabold text-white mb-6">
            Nos Agences à Douala & Yaoundé
          </h1>
          <p class="text-slate-300 text-lg leading-relaxed">
            Échangez directement avec nos gestionnaires de patrimoine et conseillers juridiques.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <!-- Douala -->
          <div class="glass-card p-8 border-lime-500/20">
            <span class="badge-tag badge-lime mb-4">Siège Social</span>
            <h3 class="text-2xl font-display font-bold text-white mb-2">Agence de Douala</h3>
            <p class="text-slate-400 text-sm mb-4">Akwa / Bonanjo, Immeuble d'Affaires, Douala - Cameroun</p>
            <p class="text-xs text-slate-500 mb-6">Lun - Ven : 08h00 - 18h00 | Sam : 09h00 - 14h00</p>
            <div class="flex items-center gap-3">
              <a href="tel:${CONFIG.contact.phoneMain}" class="btn-primary !px-5 !py-2.5 text-xs">Appeler Douala</a>
              <a href="${CONFIG.contact.whatsapp.link}" target="_blank" rel="noopener" class="btn-secondary !px-5 !py-2.5 text-xs">WhatsApp</a>
            </div>
          </div>

          <!-- Yaoundé -->
          <div class="glass-card p-8 border-mint-500/20">
            <span class="badge-tag badge-mint mb-4">Agence Régionale</span>
            <h3 class="text-2xl font-display font-bold text-white mb-2">Agence de Yaoundé</h3>
            <p class="text-slate-400 text-sm mb-4">Bastos / Centre-Ville, Yaoundé - Cameroun</p>
            <p class="text-xs text-slate-500 mb-6">Lun - Ven : 08h00 - 17h30 | Sam : 09h00 - 13h00</p>
            <div class="flex items-center gap-3">
              <a href="tel:${CONFIG.contact.phoneSecondary}" class="btn-primary !px-5 !py-2.5 text-xs">Appeler Yaoundé</a>
              <a href="${CONFIG.contact.whatsapp.link}" target="_blank" rel="noopener" class="btn-secondary !px-5 !py-2.5 text-xs">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  async init(container) {
    console.log('⚡ [Contact View] init()');
  },

  destroy() {
    console.log('🧹 [Contact View] destroy()');
  }
};
