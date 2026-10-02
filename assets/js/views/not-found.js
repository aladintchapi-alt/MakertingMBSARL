/**
 * Vue 404 - Page Introuvable (Phase 5 Production)
 * Design luxueux, cohérent et orientation vers les pages clés
 */
export default {
  meta: {
    title: "404 - Page Introuvable | MULTI BUSINESS SARL",
    description: "La page que vous recherchez n'existe pas ou a été déplacée. Retrouvez nos services de gestion locative au Cameroun."
  },

  async render() {
    return `
      <section class="min-h-[85vh] flex items-center justify-center pt-32 pb-20 px-4 md:px-8 text-center relative overflow-hidden">
        <div class="absolute inset-0 bg-mesh-dark opacity-80 pointer-events-none"></div>
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime-500/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div class="container max-w-2xl mx-auto relative z-10" data-stagger-item>
          
          <div class="inline-block text-8xl md:text-9xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-mint-400 to-mint-500 mb-6 tracking-tight">
            404
          </div>

          <h1 class="text-heading-xl md:text-display-lg font-display font-extrabold text-white mb-4">
            Cette Page N'Existe Pas
          </h1>

          <p class="text-slate-300 text-sm md:text-base mb-10 max-w-lg mx-auto leading-relaxed">
            L'adresse saisie est introuvable ou a été modifiée. Rejoignez directement nos rubriques principales ci-dessous :
          </p>

          <!-- Liens d'orientation directe -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto mb-10 text-left">
            <a href="/" data-link class="p-4 rounded-2xl bg-forest-900/80 border border-white/10 hover:border-lime-500/50 hover:bg-forest-850 transition-all flex items-center justify-between group">
              <span class="text-sm font-bold text-white group-hover:text-lime-400">Page d'Accueil</span>
              <svg class="w-4 h-4 text-slate-400 group-hover:text-lime-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>

            <a href="/gestion-locative" data-link class="p-4 rounded-2xl bg-forest-900/80 border border-white/10 hover:border-lime-500/50 hover:bg-forest-850 transition-all flex items-center justify-between group">
              <span class="text-sm font-bold text-white group-hover:text-lime-400">Gestion Locative</span>
              <svg class="w-4 h-4 text-slate-400 group-hover:text-lime-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>

            <a href="/services" data-link class="p-4 rounded-2xl bg-forest-900/80 border border-white/10 hover:border-mint-500/50 hover:bg-forest-850 transition-all flex items-center justify-between group">
              <span class="text-sm font-bold text-white group-hover:text-mint-400">Nos Services</span>
              <svg class="w-4 h-4 text-slate-400 group-hover:text-mint-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>

            <a href="/contact" data-link class="p-4 rounded-2xl bg-forest-900/80 border border-white/10 hover:border-mint-500/50 hover:bg-forest-850 transition-all flex items-center justify-between group">
              <span class="text-sm font-bold text-white group-hover:text-mint-400">Nous Contacter</span>
              <svg class="w-4 h-4 text-slate-400 group-hover:text-mint-400 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>

          <a href="/" data-link class="btn-primary" data-magnetic>
            <span>Retourner à l'Accueil</span>
          </a>

        </div>
      </section>
    `;
  },

  async init(container) {
    console.log('⚡ [404 View] Initialisation');
  },

  destroy() {
    console.log('🧹 [404 View] Nettoyage');
  }
};
