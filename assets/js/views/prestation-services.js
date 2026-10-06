/**
 * MULTI BUSINESS SARL - Page PRESTATIONS DE SERVICES & TRAVAUX (Phase 6 Production)
 * Couleur Signature : Corail (#9F1239 / #E11D48) • Ratios WCAG AAA • >= 6 Images HD
 */
import { CONFIG } from '../config.js';
import { initUIComponents } from '../ui.js';

export default {
  meta: {
    title: "Prestations de Services & Artisans du Bâtiment | Douala & Yaoundé",
    description: "MULTI BUSINESS SARL : Électricité, peinture, échafaudage, plomberie et petits métiers du bâtiment à Douala et Yaoundé. Artisans qualifiés et devis en 24h.",
    image: "./assets/images/service-prestations.jpg"
  },

  _cleanups: [],

  async render() {
    return `
      <!-- ================================================================= -->
      <!-- 1. HERO PRESTATIONS DE SERVICES (Corail Signature)                -->
      <!-- ================================================================= -->
      <section class="relative min-h-[75vh] lg:min-h-[70vh] flex items-center justify-center pt-32 pb-16 px-4 md:px-8 overflow-hidden bg-white" data-theme="tint-coral">
        <div class="hero-photo-bg">
          <img src="./assets/images/service-prestations.jpg" alt="Prestations de travaux et artisans du bâtiment" class="w-full h-full object-cover object-center filter brightness-[0.97] contrast-[1.03]" />
          <div class="hero-photo-overlay-light"></div>
        </div>

        <div class="container max-w-5xl mx-auto text-center relative z-10" data-stagger-item>
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100 text-rose-950 border border-rose-300 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-rose-600 animate-pulse"></span>
            <span>Pôle Bâtiment, Travaux & Artisans Certifiés</span>
          </div>

          <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-marine-900 leading-[1.12] tracking-tight mb-6 max-w-4xl mx-auto">
            Rénovation, électricité, peinture & <span class="text-rose-800">artisans qualifiés</span> à Douala.
          </h1>

          <p class="text-base sm:text-lg md:text-xl text-slate-700 font-normal max-w-3xl mx-auto mb-10 leading-relaxed">
            Propriétaires d'immeubles, entreprises et particuliers : donnez vie à vos projets de réfection, mise en conformité et maintenance technique avec une garantie totale de qualité.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a href="#demander-devis" class="btn-primary !px-7 !py-4 text-sm md:text-base shadow-lg" data-magnetic>
              <span>Demander un devis sous 24h</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
            <a href="https://wa.me/237694811715?text=Bonjour%20je%20souhaite%20un%20devis%20pour%20des%20travaux%20de%20b%C3%A2timent" target="_blank" rel="noopener" class="btn-outline !px-7 !py-4 text-sm md:text-base bg-white" data-magnetic>
              <span>Urgence Travaux WhatsApp</span>
            </a>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm font-mono text-slate-700 pt-6 border-t border-rose-200/80">
            <span class="flex items-center gap-2"><strong class="text-rose-800">✓</strong> Artisans rigoureusement sélectionnés</span>
            <span class="flex items-center gap-2"><strong class="text-rose-800">✓</strong> Devis transparent sans surprise</span>
            <span class="flex items-center gap-2"><strong class="text-rose-800">✓</strong> Contrôle qualité de chantier</span>
            <span class="flex items-center gap-2"><strong class="text-rose-800">✓</strong> Garantie d'achèvement</span>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 2. NOS 5 CORPS D'ÉTAT & CORPS DE MÉTIER                           -->
      <!-- ================================================================= -->
      <section id="demander-devis" class="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-white">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-3" data-reveal="up">
          <span class="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-950 border border-rose-300 text-xs font-bold uppercase tracking-wider">Compétences Techniques</span>
          <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900">Une Équipe Complète de Corps de Métier</h2>
          <p class="text-slate-600 text-sm md:text-base">Un interlocuteur unique pour coordonner l'ensemble de vos chantiers résidentiels et professionnels.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div class="card-light p-6 rounded-3xl border border-slate-200 hover:border-rose-300 transition-all space-y-3 bg-rose-50/20">
            <div class="w-12 h-12 rounded-2xl bg-rose-100 text-rose-950 flex items-center justify-center text-xl font-bold">⚡</div>
            <h3 class="font-serif text-xl font-bold text-marine-900">Électricité Générale & Réseaux</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Installations complètes neuves, réhabilitation de tableaux électriques, compteurs divisionnaires, éclairage LED architectural et sécurisation Eneo.</p>
          </div>

          <div class="card-light p-6 rounded-3xl border border-slate-200 hover:border-rose-300 transition-all space-y-3 bg-rose-50/20">
            <div class="w-12 h-12 rounded-2xl bg-rose-100 text-rose-950 flex items-center justify-center text-xl font-bold">🎨</div>
            <h3 class="font-serif text-xl font-bold text-marine-900">Peinture & Étanchéité Façades</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Peintures intérieures satinées et lessivables, enduits de lissage, traitement anti-humidité et revêtements d'étanchéité pour toitures et terrasses.</p>
          </div>

          <div class="card-light p-6 rounded-3xl border border-slate-200 hover:border-rose-300 transition-all space-y-3 bg-rose-50/20">
            <div class="w-12 h-12 rounded-2xl bg-rose-100 text-rose-950 flex items-center justify-center text-xl font-bold">🏗️</div>
            <h3 class="font-serif text-xl font-bold text-marine-900">Échafaudage & Gros Œuvre Léger</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Montage d'échafaudages tubulaires sécurisés pour travaux en hauteur, ravalement de façades d'immeubles, maçonnerie de clôture et réagencements.</p>
          </div>

          <div class="card-light p-6 rounded-3xl border border-slate-200 hover:border-rose-300 transition-all space-y-3 bg-rose-50/20">
            <div class="w-12 h-12 rounded-2xl bg-rose-100 text-rose-950 flex items-center justify-center text-xl font-bold">🚰</div>
            <h3 class="font-serif text-xl font-bold text-marine-900">Plomberie & Réseaux Sanitaires</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Pose et réparation de tuyauteries PVC/cuivre, cuves de stockage d'eau avec surpresseurs, forages, fosses septiques écologiques et sanitaires modernes.</p>
          </div>

          <div class="card-light p-6 rounded-3xl border border-slate-200 hover:border-rose-300 transition-all space-y-3 bg-rose-50/20">
            <div class="w-12 h-12 rounded-2xl bg-rose-100 text-rose-950 flex items-center justify-center text-xl font-bold">🪵</div>
            <h3 class="font-serif text-xl font-bold text-marine-900">Menuiserie Bois & Aluminium</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Fabrication et pose de portes blindées, placards encastrés, baies vitrées aluminium, faux-plafonds en staff et cloisons amovibles de bureaux.</p>
          </div>

          <div class="card-light p-6 rounded-3xl border border-slate-200 hover:border-rose-300 transition-all space-y-3 bg-rose-50/20">
            <div class="w-12 h-12 rounded-2xl bg-rose-100 text-rose-950 flex items-center justify-center text-xl font-bold">🛠️</div>
            <h3 class="font-serif text-xl font-bold text-marine-900">Petits Métiers & Maintenance Express</h3>
            <p class="text-xs text-slate-600 leading-relaxed">Serrurerie d'urgence, remplacement de serrures multipoints, carrelage, vitrerie et interventions d'entretien pour logements locatifs.</p>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 3. GALERIE DE RÉALISATIONS DE CHANTIERS (Lightbox)                -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 bg-[#FAF9F5] border-t border-slate-200" data-theme="ivory">
        <div class="max-w-7xl mx-auto space-y-10">
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4" data-reveal="up">
            <div>
              <span class="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-2">Portfolio Travaux</span>
              <h2 class="font-serif text-3xl font-extrabold text-marine-900">Quelques Chantiers Réalisés à Douala</h2>
            </div>
            <p class="text-slate-600 text-xs md:text-sm max-w-md">Cliquez sur une photo pour l'agrandir en haute définition.</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all cursor-pointer h-64" data-lightbox="./assets/images/chantier-travaux.jpg" data-caption="Équipe d'artisans MULTI BUSINESS SARL en cours de réfection de façade sur échafaudage à Douala">
              <img src="./assets/images/chantier-travaux.jpg" alt="Chantier de réfection de façade" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span class="text-white text-xs font-semibold">Échafaudage & Peinture Façade</span>
              </div>
            </div>

            <div class="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all cursor-pointer h-64" data-lightbox="./assets/images/bien-immeuble.jpg" data-caption="Immeuble résidentiel après remise en peinture complète et pose de garde-corps aluminium">
              <img src="./assets/images/bien-immeuble.jpg" alt="Ravalement d'immeuble terminé" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span class="text-white text-xs font-semibold">Ravalement d'immeuble R+8</span>
              </div>
            </div>

            <div class="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all cursor-pointer h-64" data-lightbox="./assets/images/bien-bureaux.jpg" data-caption="Aménagement intérieur d'un plateau de bureaux : faux plafonds, cloisons et câblage réseau">
              <img src="./assets/images/bien-bureaux.jpg" alt="Plateau de bureaux aménagé" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span class="text-white text-xs font-semibold">Aménagement de Bureaux</span>
              </div>
            </div>

            <div class="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all cursor-pointer h-64" data-lightbox="./assets/images/bien-appartement.jpg" data-caption="Rénovation complète d'appartement avec pose de sanitaires neufs et revêtements">
              <img src="./assets/images/bien-appartement.jpg" alt="Rénovation appartement" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span class="text-white text-xs font-semibold">Rénovation d'Appartement</span>
              </div>
            </div>

            <div class="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all cursor-pointer h-64" data-lightbox="./assets/images/galerie-equipe.jpg" data-caption="Équipe technique et chefs de chantiers MULTI BUSINESS SARL">
              <img src="./assets/images/galerie-equipe.jpg" alt="Équipe technique de chantier" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span class="text-white text-xs font-semibold">Équipes Techniques sur le Terrain</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 4. PROCESSUS EN 5 ÉTAPES                                          -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-white border-t border-slate-200">
        <div class="max-w-6xl mx-auto space-y-12">
          <div class="text-center max-w-2xl mx-auto space-y-3" data-reveal="up">
            <span class="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">Organisation de Chantier</span>
            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900">Du Devis à la Livraison des Travaux</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center font-mono font-bold text-sm">01</span>
              <h4 class="font-bold text-sm text-slate-900">Visite Technique</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Déplacement de notre chef de chantier pour métrage et diagnostic précis.</p>
            </div>

            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center font-mono font-bold text-sm">02</span>
              <h4 class="font-bold text-sm text-slate-900">Devis Sous 24h</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Devis clair et transparent distinguant matériaux certifiés et main d'œuvre.</p>
            </div>

            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center font-mono font-bold text-sm">03</span>
              <h4 class="font-bold text-sm text-slate-900">Approvisionnement</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Sélection de peintures et matériels de premier choix auprès de nos partenaires.</p>
            </div>

            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-rose-600 text-white flex items-center justify-center font-mono font-bold text-sm">04</span>
              <h4 class="font-bold text-sm text-slate-900">Exécution & Suivi</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Travail soigné par nos artisans avec respect des délais et des règles de sécurité.</p>
            </div>

            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-lime-500 text-marine-950 flex items-center justify-center font-mono font-black text-sm">05</span>
              <h4 class="font-bold text-sm text-slate-900">Réception & Garantie</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Procès-verbal de réception, nettoyage complet du site et garantie d'achèvement.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 5. FAQ PRESTATIONS DE SERVICES                                    -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 bg-[#FAF9F5] border-t border-slate-200" data-theme="ivory">
        <div class="max-w-4xl mx-auto space-y-10">
          <div class="text-center space-y-2" data-reveal="up">
            <h2 class="font-serif text-3xl font-extrabold text-marine-900">Questions Fréquentes sur les Travaux</h2>
          </div>

          <div class="space-y-4" data-accordion-group>
            <div class="card-light rounded-2xl border border-slate-200 bg-white overflow-hidden" data-accordion-item>
              <button class="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-slate-900" data-accordion-trigger>
                <span>Les devis de travaux sont-ils gratuits ?</span>
                <span class="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs transition-transform" data-accordion-icon>▼</span>
              </button>
              <div class="px-5 pb-5 text-xs text-slate-600 leading-relaxed hidden" data-accordion-content>
                Oui, l'évaluation et l'établissement du devis sont 100&nbsp;% gratuits et sans engagement pour tous chantiers à Douala et Yaoundé.
              </div>
            </div>

            <div class="card-light rounded-2xl border border-slate-200 bg-white overflow-hidden" data-accordion-item>
              <button class="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-slate-900" data-accordion-trigger>
                <span>Proposez-vous des contrats de maintenance annuelle pour immeubles ?</span>
                <span class="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs transition-transform" data-accordion-icon>▼</span>
              </button>
              <div class="px-5 pb-5 text-xs text-slate-600 leading-relaxed hidden" data-accordion-content>
                Absolument. Nous mettons en place des contrats d'entretien préventif pour immeubles et résidences couvrant la plomberie, l'éclairage commun, les pompes et les petits dépannages 24/7.
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 6. SERVICE CONNEXE & CTA                                          -->
      <!-- ================================================================= -->
      <section class="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-white border-t border-slate-200">
        <div class="card-light p-8 rounded-3xl border border-emerald-200 bg-emerald-50/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-2">
            <span class="text-xs font-bold uppercase tracking-wider text-emerald-900 font-mono">Service Connexe Recommandé</span>
            <h3 class="font-serif text-2xl font-bold text-marine-900">Gestion Immobilière & Mandat Locatif</h3>
            <p class="text-xs text-slate-600 max-w-xl">Vous venez de rénover un immeuble ou un appartement ? Confiez-nous sa mise en location pour trouver immédiatement des locataires solvables.</p>
          </div>
          <a href="/gestion-immobiliere" data-link class="btn-outline !px-6 !py-3 text-xs whitespace-nowrap bg-white">Découvrir la Gestion Immobilière →</a>
        </div>
      </section>

      <!-- CTA Final -->
      <section class="relative py-20 px-4 md:px-8 overflow-hidden" data-theme="photo">
        <div class="absolute inset-0 z-0">
          <img src="./assets/images/cta-final-bg.jpg" alt="Travaux Douala" class="w-full h-full object-cover object-center filter brightness-[0.45]" />
        </div>
        <div class="container max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-white">Un Projet de Rénovation ou une Urgence Bâtiment ?</h2>
          <p class="text-sm md:text-base text-slate-200 max-w-xl mx-auto">Contactez nos artisans et recevez votre estimation chiffrée sous 24 heures.</p>
          <div class="pt-2 flex justify-center gap-4">
            <a href="/contact" data-link class="btn-primary !px-8 !py-4 text-sm font-bold shadow-xl">Demander mon devis travaux</a>
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
