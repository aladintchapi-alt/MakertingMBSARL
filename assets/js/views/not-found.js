/**
 * Vue 404 - Page Introuvable
 */
export default {
  meta: {
    title: "404 - Page Introuvable",
    description: "La page que vous recherchez n'existe pas ou a été déplacée."
  },

  async render() {
    return `
      <div class="min-h-[75vh] flex items-center justify-center pt-32 pb-20 px-4 text-center" data-stagger-item>
        <div class="container max-w-xl mx-auto">
          <div class="inline-block text-8xl md:text-9xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-mint-500 mb-6">
            404
          </div>
          <h1 class="text-heading-xl font-display font-bold text-white mb-4">
            Page Introuvable
          </h1>
          <p class="text-slate-400 mb-8 leading-relaxed">
            L'adresse demandée est introuvable ou a changé d'emplacement. Vous pouvez revenir à la page d'accueil ou explorer nos solutions de gestion locative.
          </p>
          <a href="/" data-link class="btn-primary" data-magnetic>
            <span>Retourner à l'Accueil</span>
          </a>
        </div>
      </div>
    `;
  },

  async init(container) {
    console.log('⚡ [404 View] init()');
  },

  destroy() {
    console.log('🧹 [404 View] destroy()');
  }
};
