/**
 * Vue 404 - Page Introuvable
 * Design luxueux, clair et orientation vers les 5 pôles d'activité
 */
import { initUIComponents } from '../ui.js';

export default {
  meta: {
    title: "404 - Page Introuvable | MULTI BUSINESS SARL",
    description: "La page que vous recherchez n'existe pas ou a été déplacée. Retrouvez nos services de gestion locative et conseil d'affaires au Cameroun.",
    image: "./assets/images/og-image.png"
  },

  _cleanups: [],

  async render() {
    return `
      <section class="min-h-[85vh] flex items-center justify-center pt-32 pb-20 px-4 md:px-8 text-center relative overflow-hidden bg-white" data-theme="light">
        <div class="container max-w-3xl mx-auto relative z-10" data-stagger-item>
          
          <div class="w-20 h-20 mx-auto mb-4 flex items-center justify-center p-2 rounded-3xl bg-white border border-slate-200 shadow-md">
            <img src="./assets/images/logo-transparent.png" width="80" height="80" alt="Logo MULTI BUSINESS SARL" class="w-full h-full object-contain" />
          </div>

          <div class="inline-block text-8xl md:text-9xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 mb-2 tracking-tight">
            404
          </div>

          <h1 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900 mb-3">
            Page Introuvable
          </h1>

          <p class="text-slate-600 text-sm md:text-base mb-8 max-w-lg mx-auto leading-relaxed">
            L'adresse demandée n'existe pas ou a été déplacée. Choisissez l'une de nos sections principales pour poursuivre votre navigation :
          </p>

          <!-- Liens d'orientation directe vers les 5 pôles -->
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 max-w-2xl mx-auto mb-10 text-left">
            <a href="/" data-link class="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all flex items-center justify-between group shadow-sm">
              <span class="text-xs font-bold text-slate-800 group-hover:text-emerald-800">🏠 Page d'Accueil</span>
              <svg class="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>

            <a href="/gestion-immobiliere" data-link class="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all flex items-center justify-between group shadow-sm">
              <span class="text-xs font-bold text-slate-800 group-hover:text-emerald-800">🏢 Gestion Immobilière</span>
              <svg class="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>

            <a href="/creation-entreprise" data-link class="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-amber-500 hover:shadow-md transition-all flex items-center justify-between group shadow-sm">
              <span class="text-xs font-bold text-slate-800 group-hover:text-amber-800">🚀 Création Entreprise</span>
              <svg class="w-4 h-4 text-slate-400 group-hover:text-amber-700 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>

            <a href="/dedouanement" data-link class="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-sky-500 hover:shadow-md transition-all flex items-center justify-between group shadow-sm">
              <span class="text-xs font-bold text-slate-800 group-hover:text-sky-800">⚓ Dédouanement</span>
              <svg class="w-4 h-4 text-slate-400 group-hover:text-sky-700 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>

            <a href="/prestation-de-services" data-link class="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-rose-500 hover:shadow-md transition-all flex items-center justify-between group shadow-sm">
              <span class="text-xs font-bold text-slate-800 group-hover:text-rose-800">🛠️ Travaux & Bâtiment</span>
              <svg class="w-4 h-4 text-slate-400 group-hover:text-rose-700 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>

            <a href="/fiscalite-conseil" data-link class="p-3.5 rounded-2xl bg-white border border-slate-200 hover:border-indigo-500 hover:shadow-md transition-all flex items-center justify-between group shadow-sm">
              <span class="text-xs font-bold text-slate-800 group-hover:text-indigo-800">📊 Fiscalité & Conseil</span>
              <svg class="w-4 h-4 text-slate-400 group-hover:text-indigo-700 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>

          <a href="/" data-link class="btn-primary !px-8 !py-4 text-xs font-bold" data-magnetic>
            <span>Retourner à l'Accueil Principal</span>
          </a>

        </div>
      </section>
    `;
  },

  async init(container) {
    initUIComponents(container);
  },

  destroy() {
    this._cleanups.forEach(fn => fn());
    this._cleanups = [];
  }
};
