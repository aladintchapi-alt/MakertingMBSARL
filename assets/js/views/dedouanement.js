/**
 * MULTI BUSINESS SARL - Page DÉDOUANEMENT & TRANSIT (Phase 6 Production)
 * Couleur Signature : Bleu Océan (#0369A1 / #0284C7) • Ratios WCAG AAA • >= 6 Images HD
 */
import { CONFIG } from '../config.js';
import { initUIComponents } from '../ui.js';

export default {
  meta: {
    title: "Dédouanement & Transit Portuaire | Port de Douala & Kribi",
    description: "MULTI BUSINESS SARL : Transit maritime et aérien, dédouanement express de conteneurs (FCL/LCL) aux ports de Douala et Kribi. Zéro surestarie, assurance et livraison.",
    image: "./assets/images/service-dedouanement.jpg"
  },

  _cleanups: [],

  async render() {
    return `
      <!-- ================================================================= -->
      <!-- 1. HERO DÉDOUANEMENT (Bleu Océan Signature)                       -->
      <!-- ================================================================= -->
      <section class="relative min-h-[75vh] lg:min-h-[70vh] flex items-center justify-center pt-32 pb-16 px-4 md:px-8 overflow-hidden bg-white" data-theme="tint-ocean">
        <div class="hero-photo-bg">
          <img src="./assets/images/service-dedouanement.jpg" alt="Dédouanement portuaire à Douala" class="w-full h-full object-cover object-center filter brightness-[0.97] contrast-[1.03]" />
          <div class="hero-photo-overlay-light"></div>
        </div>

        <div class="container max-w-5xl mx-auto text-center relative z-10" data-stagger-item>
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100 text-sky-950 border border-sky-300 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-sky-600 animate-pulse"></span>
            <span>Pôle Transit Portuaire & Fret Aérien</span>
          </div>

          <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-marine-900 leading-[1.12] tracking-tight mb-6 max-w-4xl mx-auto">
            Dédouanement rapide, sécurisé et <span class="text-sky-800">zéro surestarie</span> à Douala & Kribi.
          </h1>

          <p class="text-base sm:text-lg md:text-xl text-slate-700 font-normal max-w-3xl mx-auto mb-10 leading-relaxed">
            Importateurs, industriels et commerçants : confiez vos déclarations en douane, le suivi SYDONIA et l'enlèvement de vos marchandises à une équipe de déclarants agréés et réactifs.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a href="#estimer-dedouanement" class="btn-primary !px-7 !py-4 text-sm md:text-base shadow-lg" data-magnetic>
              <span>Estimer mes frais de dédouanement</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
            <a href="https://wa.me/237694811715?text=Bonjour%20je%20souhaite%20d%C3%A9douaner%20un%20conteneur%20au%20port" target="_blank" rel="noopener" class="btn-outline !px-7 !py-4 text-sm md:text-base bg-white" data-magnetic>
              <span>Échanger avec un déclarant WhatsApp</span>
            </a>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm font-mono text-slate-700 pt-6 border-t border-sky-200/80">
            <span class="flex items-center gap-2"><strong class="text-sky-800">✓</strong> Ports de Douala & Kribi</span>
            <span class="flex items-center gap-2"><strong class="text-sky-800">✓</strong> Conteneurs FCL / LCL</span>
            <span class="flex items-center gap-2"><strong class="text-sky-800">✓</strong> Fret aérien express</span>
            <span class="flex items-center gap-2"><strong class="text-sky-800">✓</strong> Assurance & Livraison site</span>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 2. LES 4 PILIERS DU DÉDOUANEMENT MULTI BUSINESS SARL              -->
      <!-- ================================================================= -->
      <section id="estimer-dedouanement" class="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-white">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 space-y-6" data-reveal="left">
            <span class="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-950 border border-sky-300 text-xs font-bold uppercase tracking-wider">Nos Engagements Métier</span>
            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900 leading-tight">
              Rapidité, Fiabilité, Assurance & Enlèvement Sécurisé
            </h2>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed">
              Les retards d'enlèvement portuaire coûtent des millions en frais de surestaries et de stationnement. Notre méthodologie d'anticipation documentaire garantit la sortie fluide de vos conteneurs dès accostage.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div class="p-4 rounded-2xl bg-sky-50/40 border border-sky-200/80 space-y-1">
                <span class="text-lg">⚡</span>
                <h4 class="font-bold text-slate-900 text-sm">1. Rapidité d'Exécution</h4>
                <p class="text-xs text-slate-600">Saisie et validation anticipée des manifestes avant même l'arrivée du navire au quai.</p>
              </div>

              <div class="p-4 rounded-2xl bg-sky-50/40 border border-sky-200/80 space-y-1">
                <span class="text-lg">🛡️</span>
                <h4 class="font-bold text-slate-900 text-sm">2. Fiabilité & 0 Surestarie</h4>
                <p class="text-xs text-slate-600">Respect strict des franchises compagnies maritimes pour éliminer toute pénalité de retard.</p>
              </div>

              <div class="p-4 rounded-2xl bg-sky-50/40 border border-sky-200/80 space-y-1">
                <span class="text-lg">📋</span>
                <h4 class="font-bold text-slate-900 text-sm">3. Assurance Marchandises</h4>
                <p class="text-xs text-slate-600">Couverture des cargaisons sensibles contre les avaries et risques de transport.</p>
              </div>

              <div class="p-4 rounded-2xl bg-sky-50/40 border border-sky-200/80 space-y-1">
                <span class="text-lg">🚛</span>
                <h4 class="font-bold text-slate-900 text-sm">4. Enlèvement & Livraison</h4>
                <p class="text-xs text-slate-600">Prise en charge par camions remorques et livraison directe jusqu'à votre entrepôt.</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6" data-reveal="right">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img src="./assets/images/port-douala.jpg" alt="Opérations de déchargement au Port Autonome de Douala" class="w-full h-auto object-cover max-h-[480px]" />
              <div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg flex items-center justify-between">
                <div>
                  <span class="text-xs font-bold text-slate-900 block">Port Autonome de Douala (PAD)</span>
                  <span class="text-[11px] text-slate-500">Terminal Conteneurs • Terminal Bois • Fret</span>
                </div>
                <span class="px-2.5 py-1 bg-sky-100 text-sky-950 text-xs font-bold rounded-lg font-mono">24/7 Opérationnel</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 3. PROCESSUS DE DÉDOUANEMENT EN 5 ÉTAPES                          -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 bg-[#FAF9F5] border-t border-slate-200" data-theme="ivory">
        <div class="max-w-6xl mx-auto space-y-12">
          <div class="text-center max-w-2xl mx-auto space-y-3" data-reveal="up">
            <span class="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">Circuit Douanier</span>
            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900">Les 5 Étapes du Dédouanement Fluide</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center font-mono font-bold text-sm">01</span>
              <h4 class="font-bold text-sm text-slate-900">Réception B/L & Factures</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Vérification de la documentation commerciale : Connaissement (B/L), facture et certificat d'origine.</p>
            </div>

            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center font-mono font-bold text-sm">02</span>
              <h4 class="font-bold text-sm text-slate-900">Déclaration SYDONIA</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Enregistrement électronique de la Déclaration en Détail des Marchandises (DDM).</p>
            </div>

            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center font-mono font-bold text-sm">03</span>
              <h4 class="font-bold text-sm text-slate-900">Paiement des Droits</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Liquidation et règlement des droits et taxes de douane auprès de la banque agréée.</p>
            </div>

            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-sky-600 text-white flex items-center justify-center font-mono font-bold text-sm">04</span>
              <h4 class="font-bold text-sm text-slate-900">Visite & Bon à Enlever</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Inspection par les inspecteurs de douane et délivrance du Bon à Enlever (BAE).</p>
            </div>

            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-lime-500 text-marine-950 flex items-center justify-center font-mono font-black text-sm">05</span>
              <h4 class="font-bold text-sm text-slate-900">Sortie & Livraison</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Facturation terminal portuaire, enlèvement et acheminement vers votre entrepôt.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 4. INFRASTRUCTURES LOGISTIQUES & STOCKAGE SÉCURISÉ                -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-white border-t border-slate-200">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="card-light rounded-3xl overflow-hidden border border-slate-200 shadow-sm" data-reveal="up">
            <img src="./assets/images/bien-commercial.jpg" alt="Hangars de stockage et transit portuaire" class="w-full h-56 object-cover" />
            <div class="p-6 space-y-2">
              <h4 class="font-serif text-lg font-bold text-marine-900">Entrepôts & Hangars Sécurisés</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Surfaces de stockage temporaire gardiennées 24/7 en zone portuaire et industrielle pour vos marchandises sous douane.</p>
            </div>
          </div>

          <div class="card-light rounded-3xl overflow-hidden border border-slate-200 shadow-sm" data-reveal="up">
            <img src="./assets/images/galerie-terrain.jpg" alt="Parc logistique et plateformes de déchargement" class="w-full h-56 object-cover" />
            <div class="p-6 space-y-2">
              <h4 class="font-serif text-lg font-bold text-marine-900">Parc Logistique & Flotte de Remorques</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Moyens de levage et camions porte-conteneurs pour assurer l'acheminement direct jusqu'à votre usine ou magasin.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 5. PARTENAIRE ASSOCIÉ : DOUANES CAMEROUNAISES & SYNDICATS         -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-white border-t border-slate-200">
        <div class="card-light p-8 md:p-12 rounded-3xl border border-slate-200 bg-sky-50/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-4 text-center lg:text-left flex flex-col items-center lg:items-start gap-4">
            <img src="./assets/images/partenaire-douane.jpg" alt="Direction Générale des Douanes Cameroun" class="h-16 w-auto object-contain bg-white p-3 rounded-2xl border border-slate-200 shadow-sm" />
            <span class="text-xs font-bold text-slate-900">Direction Générale des Douanes (DGD)</span>
          </div>
          <div class="lg:col-span-8 space-y-3">
            <h3 class="font-serif text-2xl font-bold text-marine-900">Synergie Étroite avec l'Administration Douanière</h3>
            <p class="text-slate-600 text-xs md:text-sm leading-relaxed">
              En liaison directe avec les services des douanes de Douala (Secteur Littoral I et II) et du Port en Eau Profonde de Kribi, ainsi qu'avec les syndicats de transporteurs agréés, MULTI BUSINESS SARL fait valoir vos droits de franchise et résout tout litige de valeur en commission consultative.
            </p>
          </div>
        </div>

        <!-- Témoignage Importateur -->
        <div class="card-light p-6 rounded-3xl border border-slate-200 shadow-sm bg-[#FAF9F5] mt-8 flex flex-col sm:flex-row items-center gap-5">
          <img src="./assets/images/temoin-3.jpg" alt="Guy M. - Directeur Import" class="w-16 h-16 rounded-full object-cover border-2 border-sky-500 flex-shrink-0" />
          <div class="space-y-1 text-center sm:text-left">
            <h4 class="font-bold text-sm text-slate-900">Guy M. • Directeur Logistique Groupe Agroalimentaire</h4>
            <p class="text-xs text-slate-600 italic leading-relaxed">« Nous importons plus de 20 conteneurs par mois. Avec MULTI BUSINESS SARL, nous avons divisé nos frais de surestaries par 5 et les marchandises sont livrées en un temps record. »</p>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 5. FAQ DÉDOUANEMENT                                               -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 bg-[#FAF9F5] border-t border-slate-200" data-theme="ivory">
        <div class="max-w-4xl mx-auto space-y-10">
          <div class="text-center space-y-2" data-reveal="up">
            <h2 class="font-serif text-3xl font-extrabold text-marine-900">Questions Fréquentes sur le Dédouanement</h2>
          </div>

          <div class="space-y-4" data-accordion-group>
            <div class="card-light rounded-2xl border border-slate-200 bg-white overflow-hidden" data-accordion-item>
              <button class="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-slate-900" data-accordion-trigger>
                <span>Quel est le délai moyen pour sortir un conteneur au port de Douala ?</span>
                <span class="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs transition-transform" data-accordion-icon>▼</span>
              </button>
              <div class="px-5 pb-5 text-xs text-slate-600 leading-relaxed hidden" data-accordion-content>
                Avec des documents fournis à temps (avant accostage du navire), le délai moyen de sortie est de 3 à 5 jours ouvrés, bien en-deçà des 11 jours de franchise accordés par les compagnies maritimes.
              </div>
            </div>

            <div class="card-light rounded-2xl border border-slate-200 bg-white overflow-hidden" data-accordion-item>
              <button class="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-slate-900" data-accordion-trigger>
                <span>Faites-vous également du dédouanement de véhicules et effets personnels ?</span>
                <span class="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs transition-transform" data-accordion-icon>▼</span>
              </button>
              <div class="px-5 pb-5 text-xs text-slate-600 leading-relaxed hidden" data-accordion-content>
                Oui, nous traitons le dédouanement de véhicules utilitaires, berlines, camions et déménagements d'effets personnels de la diaspora avec calcul exact de la cote douanière argus.
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 6. SERVICE CONNEXE SUGGÉRÉ & CTA                                  -->
      <!-- ================================================================= -->
      <section class="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-white border-t border-slate-200">
        <div class="card-light p-8 rounded-3xl border border-emerald-200 bg-emerald-50/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-2">
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-900 font-mono">Service Connexe Recommandé</span>
            <h3 class="font-serif text-2xl font-bold text-marine-900">Entrepôts & Espaces Commerciaux de Stockage</h3>
            <p class="text-xs text-slate-600 max-w-xl">Besoin d'un hangar sécurisé pour décharger et stocker vos conteneurs à Douala (Bassa, Bonabéri) ? Notre pôle immobilier dispose de surfaces disponibles immédiatement.</p>
          </div>
          <a href="/gestion-immobiliere" data-link class="btn-outline !px-6 !py-3 text-xs whitespace-nowrap bg-white">Voir les entrepôts disponibles →</a>
        </div>
      </section>

      <!-- CTA Final -->
      <section class="relative py-20 px-4 md:px-8 overflow-hidden" data-theme="photo">
        <div class="absolute inset-0 z-0">
          <img src="./assets/images/cta-final-bg.jpg" alt="Port de Douala" class="w-full h-full object-cover object-center filter brightness-[0.45]" />
        </div>
        <div class="container max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-white">Un Conteneur à Dédouaner ou une Opération de Fret ?</h2>
          <p class="text-sm md:text-base text-slate-200 max-w-xl mx-auto">Transmettez-nous vos documents de transport pour une cotation détaillée sans frais cachés.</p>
          <div class="pt-2 flex justify-center gap-4">
            <a href="/contact" data-link class="btn-primary !px-8 !py-4 text-sm font-bold shadow-xl">Demander une cotation douanière</a>
          </div>
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
