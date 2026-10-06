/**
 * MULTI BUSINESS SARL - Page CRÉATION D'ENTREPRISE (Phase 6 Production)
 * Couleur Signature : Ambre (#92400E / #F59E0B) • Ratios WCAG AAA • >= 6 Images HD
 */
import { CONFIG } from '../config.js';
import { initUIComponents } from '../ui.js';

export default {
  meta: {
    title: "Création d'Entreprise Clé en Main & Formalités OHADA | Douala & Yaoundé",
    description: "MULTI BUSINESS SARL : Immatriculation rapide d'entreprises au Cameroun (CFCE, RCCM, NIU). SARL, SAS, ETS en 72h chrono sans tracasserie.",
    image: "./assets/images/service-creation.jpg"
  },

  _cleanups: [],

  async render() {
    return `
      <!-- ================================================================= -->
      <!-- 1. HERO CRÉATION D'ENTREPRISE (Ambre Signature)                   -->
      <!-- ================================================================= -->
      <section class="relative min-h-[75vh] lg:min-h-[70vh] flex items-center justify-center pt-32 pb-16 px-4 md:px-8 overflow-hidden bg-white" data-theme="tint-amber">
        <div class="hero-photo-bg">
          <img src="./assets/images/service-creation.jpg" alt="Création d'entreprise à Douala" class="w-full h-full object-cover object-center filter brightness-[0.97] contrast-[1.03]" />
          <div class="hero-photo-overlay-light"></div>
        </div>

        <div class="container max-w-5xl mx-auto text-center relative z-10" data-stagger-item>
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
            <span>Pôle Formalités Juridiques & Guichet Unique CFCE</span>
          </div>

          <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-marine-900 leading-[1.12] tracking-tight mb-6 max-w-4xl mx-auto">
            Créez et immatriculez votre société au Cameroun en <span class="text-amber-800">72h chrono</span>.
          </h1>

          <p class="text-base sm:text-lg md:text-xl text-slate-700 font-normal max-w-3xl mx-auto mb-10 leading-relaxed">
            De la rédaction des statuts notariés à l'obtention du RCCM et du NIU : un accompagnement clé en main pour démarrer vos activités en toute conformité légale.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a href="#demarrer-creation" class="btn-primary !px-7 !py-4 text-sm md:text-base shadow-lg" data-magnetic>
              <span>Lancer ma création d'entreprise</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
            <a href="https://wa.me/237694811715?text=Bonjour%20je%20souhaite%20cr%C3%A9er%20une%20entreprise%20au%20Cameroun" target="_blank" rel="noopener" class="btn-outline !px-7 !py-4 text-sm md:text-base bg-white" data-magnetic>
              <span>Conseil Express WhatsApp</span>
            </a>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm font-mono text-slate-700 pt-6 border-t border-amber-200/80">
            <span class="flex items-center gap-2"><strong class="text-amber-800">✓</strong> Délai moyen 72h</span>
            <span class="flex items-center gap-2"><strong class="text-amber-800">✓</strong> Statuts conformes OHADA</span>
            <span class="flex items-center gap-2"><strong class="text-amber-800">✓</strong> RCCM & NIU officiel</span>
            <span class="flex items-center gap-2"><strong class="text-amber-800">✓</strong> Domiciliation commerciale</span>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 2. PRÉSENTATION & FORMES JURIDIQUES                               -->
      <!-- ================================================================= -->
      <section id="demarrer-creation" class="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-white">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 space-y-6" data-reveal="left">
            <span class="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs font-bold uppercase tracking-wider">Expertise Statuts & Immatriculation</span>
            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900 leading-tight">
              Toutes les Formes Juridiques Adaptées à Votre Ambition
            </h2>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed">
              Que vous lanciez une startup, une société commerciale, une PME industrielle ou une activité de consultant indépendant, nous vous orientons vers la structure juridique optimale et gérons l'ensemble du dossier administratif.
            </p>

            <div class="space-y-4 pt-2">
              <div class="p-4 rounded-2xl bg-amber-50/40 border border-amber-200/80 space-y-1">
                <h4 class="font-bold text-slate-900 text-sm flex items-center justify-between">
                  <span>SARL / SARLU (Société à Responsabilité Limitée)</span>
                  <span class="font-mono text-xs text-amber-800 font-bold bg-amber-100 px-2 py-0.5 rounded">Formule Populaire</span>
                </h4>
                <p class="text-xs text-slate-600">Idéale pour les PME et commerces. Capital social modulable, protection du patrimoine personnel des associés.</p>
              </div>

              <div class="p-4 rounded-2xl bg-amber-50/40 border border-amber-200/80 space-y-1">
                <h4 class="font-bold text-slate-900 text-sm flex items-center justify-between">
                  <span>SAS / SASU (Société par Actions Simplifiée)</span>
                  <span class="font-mono text-xs text-amber-800 font-bold bg-amber-100 px-2 py-0.5 rounded">Investisseurs & Tech</span>
                </h4>
                <p class="text-xs text-slate-600">Grande liberté statutaire, levée de fonds facilitée et gouvernance sur-mesure pour investisseurs.</p>
              </div>

              <div class="p-4 rounded-2xl bg-amber-50/40 border border-amber-200/80 space-y-1">
                <h4 class="font-bold text-slate-900 text-sm flex items-center justify-between">
                  <span>Établissement (ETS / Entreprise Individuelle)</span>
                  <span class="font-mono text-xs text-amber-800 font-bold bg-amber-100 px-2 py-0.5 rounded">Démarrage Rapide</span>
                </h4>
                <p class="text-xs text-slate-600">Formalités simplifiées et coût réduit pour commerçants et prestataires individuels.</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6" data-reveal="right">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img src="./assets/images/creation-formalites.jpg" alt="Remise des documents officiels de création d'entreprise" class="w-full h-auto object-cover max-h-[480px]" />
              <div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg flex items-center justify-between">
                <div>
                  <span class="text-xs font-bold text-slate-900 block">Dossier Complet Certifié</span>
                  <span class="text-[11px] text-slate-500">RCCM • NIU • Statuts • Journal d'Annonces</span>
                </div>
                <span class="px-2.5 py-1 bg-amber-100 text-amber-950 text-xs font-bold rounded-lg font-mono">100&nbsp;% Conforme</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 3. PROCESSUS DE CRÉATION EN 5 ÉTAPES                              -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 bg-[#FAF9F5] border-t border-slate-200" data-theme="ivory">
        <div class="max-w-6xl mx-auto space-y-12">
          <div class="text-center max-w-2xl mx-auto space-y-3" data-reveal="up">
            <span class="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">Parcours Simplifié</span>
            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900">De l'Idée au Lancement en 5 Étapes</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center font-mono font-bold text-sm">01</span>
              <h4 class="font-bold text-sm text-slate-900">Choix & Dénomination</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Vérification de disponibilité du nom commercial et choix de la forme juridique.</p>
            </div>

            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center font-mono font-bold text-sm">02</span>
              <h4 class="font-bold text-sm text-slate-900">Rédaction des Statuts</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Élaboration des statuts notariés ou sous seing privé conformes à l'OHADA.</p>
            </div>

            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center font-mono font-bold text-sm">03</span>
              <h4 class="font-bold text-sm text-slate-900">Dépôt au CFCE</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Dépôt guichet unique, immatriculation au Greffe du Tribunal pour le RCCM.</p>
            </div>

            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-amber-600 text-white flex items-center justify-center font-mono font-bold text-sm">04</span>
              <h4 class="font-bold text-sm text-slate-900">Obtention du NIU</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Attribution du Numéro d'Identifiant Unique (NIU) auprès du centre fiscal DGI.</p>
            </div>

            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-lime-500 text-marine-950 flex items-center justify-center font-mono font-black text-sm">05</span>
              <h4 class="font-bold text-sm text-slate-900">Compte Bancaire Pro</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Remise du dossier complet et facilitation pour l'ouverture du compte bancaire pro.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 4. ACCOMPAGNEMENT SUR SITE & ÉQUIPE DÉDIÉE                        -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-white border-t border-slate-200">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="card-light rounded-3xl overflow-hidden border border-slate-200 shadow-sm" data-reveal="up">
            <img src="./assets/images/galerie-bureau-douala.jpg" alt="Bureaux MULTI BUSINESS SARL Douala" class="w-full h-56 object-cover" />
            <div class="p-6 space-y-2">
              <h4 class="font-serif text-lg font-bold text-marine-900">Bureaux d'Affaires & Domiciliation</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Nos locaux au Rond-point CCC (Dakar, Douala) vous accueillent pour vos entretiens et vous offrent une adresse prestigieuse pour votre siège social.</p>
            </div>
          </div>

          <div class="card-light rounded-3xl overflow-hidden border border-slate-200 shadow-sm" data-reveal="up">
            <img src="./assets/images/galerie-equipe.jpg" alt="Juristes et formalistes MULTI BUSINESS SARL" class="w-full h-56 object-cover" />
            <div class="p-6 space-y-2">
              <h4 class="font-serif text-lg font-bold text-marine-900">Juristes et Formalistes Assermentés</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Des spécialistes en droit des affaires OHADA qui rédigent vos statuts avec précision et réalisent les démarches au greffe.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 5. PARTENAIRE ASSOCIÉ : CFCE & GREFFES                            -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-white border-t border-slate-200">
        <div class="card-light p-8 md:p-12 rounded-3xl border border-slate-200 bg-amber-50/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-4 text-center lg:text-left flex flex-col items-center lg:items-start gap-4">
            <img src="./assets/images/partenaire-cfce.jpg" alt="Centre de Formalités de Création d'Entreprises" class="h-16 w-auto object-contain bg-white p-3 rounded-2xl border border-slate-200 shadow-sm" />
            <span class="text-xs font-bold text-slate-900">Centre de Formalités de Création d'Entreprises (CFCE)</span>
          </div>
          <div class="lg:col-span-8 space-y-3">
            <h3 class="font-serif text-2xl font-bold text-marine-900">Un Accès Direct et Privilégié au Guichet Unique</h3>
            <p class="text-slate-600 text-xs md:text-sm leading-relaxed">
              Grâce à notre maîtrise quotidienne des procédures du CFCE à Douala et Yaoundé, vos dossiers ne subissent aucun rejet ni aller-retour inutile. Chaque pièce est vérifiée préalablement par nos juristes pour garantir une délivrance expresse de vos documents d'immatriculation.
            </p>
          </div>
        </div>

        <!-- Témoignage Créateur d'entreprise -->
        <div class="card-light p-6 rounded-3xl border border-slate-200 shadow-sm bg-[#FAF9F5] mt-8 flex flex-col sm:flex-row items-center gap-5">
          <img src="./assets/images/temoin-2.jpg" alt="Armel K. - Fondateur SARL" class="w-16 h-16 rounded-full object-cover border-2 border-amber-500 flex-shrink-0" />
          <div class="space-y-1 text-center sm:text-left">
            <h4 class="font-bold text-sm text-slate-900">Armel K. • Fondateur d'une SARL de distribution</h4>
            <p class="text-xs text-slate-600 italic leading-relaxed">« J'ai reçu mon RCCM, mon NIU et mes statuts enregistrés en exactement 3 jours ouvrés. Équipe très professionnelle et réactive. Je recommande les yeux fermés ! »</p>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 5. FAQ CRÉATION D'ENTREPRISE                                      -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 bg-[#FAF9F5] border-t border-slate-200" data-theme="ivory">
        <div class="max-w-4xl mx-auto space-y-10">
          <div class="text-center space-y-2" data-reveal="up">
            <h2 class="font-serif text-3xl font-extrabold text-marine-900">Questions Fréquentes sur la Création d'Entreprise</h2>
          </div>

          <div class="space-y-4" data-accordion-group>
            <div class="card-light rounded-2xl border border-slate-200 bg-white overflow-hidden" data-accordion-item>
              <button class="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-slate-900" data-accordion-trigger>
                <span>Quelles sont les pièces requises pour créer une SARL ?</span>
                <span class="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs transition-transform" data-accordion-icon>▼</span>
              </button>
              <div class="px-5 pb-5 text-xs text-slate-600 leading-relaxed hidden" data-accordion-content>
                Une copie de la CNI ou du passeport des associés et du gérant, un extrait de casier judiciaire (bulletin n°3), un plan de localisation du siège social et le justificatif du capital social.
              </div>
            </div>

            <div class="card-light rounded-2xl border border-slate-200 bg-white overflow-hidden" data-accordion-item>
              <button class="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-slate-900" data-accordion-trigger>
                <span>Puis-je domicilier mon entreprise à votre adresse ?</span>
                <span class="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs transition-transform" data-accordion-icon>▼</span>
              </button>
              <div class="px-5 pb-5 text-xs text-slate-600 leading-relaxed hidden" data-accordion-content>
                Oui, MULTI BUSINESS SARL propose un service de domiciliation commerciale officiel à Douala (Rond-point CCC Dakar), avec réception de votre courrier et mise à disposition de salles de réunion.
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 6. SERVICE CONNEXE SUGGÉRÉ & CTA                                  -->
      <!-- ================================================================= -->
      <section class="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-white border-t border-slate-200">
        <div class="card-light p-8 rounded-3xl border border-indigo-200 bg-indigo-50/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="space-y-2">
            <span class="text-xs font-bold uppercase tracking-wider text-indigo-900 font-mono">Service Connexe Recommandé</span>
            <h3 class="font-serif text-2xl font-bold text-marine-900">Pôle Fiscalité & Déclarations Annuelles (DSF)</h3>
            <p class="text-xs text-slate-600 max-w-xl">Une fois créée, votre entreprise doit respecter ses obligations déclaratives mensuelles et annuelles. Nos fiscalistes prennent le relais immédiatement.</p>
          </div>
          <a href="/fiscalite-conseil" data-link class="btn-outline !px-6 !py-3 text-xs whitespace-nowrap bg-white">Découvrir le pôle Fiscalité →</a>
        </div>
      </section>

      <!-- CTA Final -->
      <section class="relative py-20 px-4 md:px-8 overflow-hidden" data-theme="photo">
        <div class="absolute inset-0 z-0">
          <img src="./assets/images/cta-final-bg.jpg" alt="Business Douala" class="w-full h-full object-cover object-center filter brightness-[0.45]" />
        </div>
        <div class="container max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-white">Prêt à Lancer Votre Société en Toute Sérénité ?</h2>
          <p class="text-sm md:text-base text-slate-200 max-w-xl mx-auto">Confiez vos statuts et formalités à notre équipe juridique pour un démarrage dans les meilleures conditions.</p>
          <div class="pt-2 flex justify-center gap-4">
            <a href="/contact" data-link class="btn-primary !px-8 !py-4 text-sm font-bold shadow-xl">Prendre rendez-vous de création</a>
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
