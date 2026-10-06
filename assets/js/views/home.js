/**
 * MULTI BUSINESS SARL - Page ACCUEIL (Phase 3 Production)
 * Direction Artistique : Luxe Moderne, Blanc Dominant (50%), Ivoire (30%), Rythme des fonds & 15 Images HD
 */

import { CONFIG } from '../config.js';
import { showToast } from '../ui.js';
import { init3DPhoneViewer, destroy3DPhoneViewer } from '../scene3d.js';

export default {
  meta: {
    title: "Accueil | Gestion Locative Intelligente & Conseil d'Affaires",
    description: "MULTI BUSINESS SARL à Douala : Leader de la gestion locative moderne au Cameroun, fiscalité, création d'entreprise, dédouanement et prestations techniques.",
    image: "./assets/images/hero-accueil.jpg"
  },

  _cleanups: [],

  async render() {
    return `
      <!-- ================================================================= -->
      <!-- SECTION 1 : HERO PLEIN ÉCRAN IMMERSIF (Photo HD Éclatante)        -->
      <!-- ================================================================= -->
      <section class="relative min-h-[90vh] lg:min-h-[85vh] flex items-center justify-center pt-28 pb-16 px-4 md:px-8 overflow-hidden bg-white" data-theme="light">
        <!-- Photo d'arrière-plan HD nette et vibrante sans voile blanc opaque -->
        <div class="hero-photo-bg">
          <img src="./assets/images/hero-accueil.jpg" alt="Immobilier de prestige à Douala" class="w-full h-full object-cover object-center filter brightness-[0.97] contrast-[1.03]" />
          <div class="hero-photo-overlay-light"></div>
        </div>

        <div class="container max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <!-- Colonne Gauche : Titre, Accroche & CTA -->
          <div class="lg:col-span-7 text-left space-y-6">
            
            <!-- Badge Live Institutionnel -->
            <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-mint-50 border border-mint-200/80 text-mint-800 text-xs font-bold tracking-wider uppercase shadow-sm" data-stagger-item>
              <span class="w-2 h-2 rounded-full bg-mint-500 animate-pulse"></span>
              <span>Prestataire Intellectuel & Gestionnaire de Patrimoine Agréé</span>
            </div>

            <!-- Titre Révélé Mot par Mot -->
            <h1 id="hero-split-title" class="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-marine-900 leading-[1.12] tracking-tight" data-stagger-item>
              Bienvenue chez <span class="text-transparent bg-clip-text bg-gradient-to-r from-marine-900 via-mint-700 to-mint-600">MULTIBUSINESS SARL</span>
            </h1>

            <!-- Accroche Métier Complète -->
            <p class="text-base sm:text-lg md:text-xl text-slate-700 font-normal leading-relaxed max-w-2xl" data-stagger-item>
              Votre partenaire stratégique à Douala et Yaoundé. Nous unifions l'excellence de la <strong>Gestion Locative Sécurisée</strong>, la <strong>Fiscalité</strong>, la <strong>Création d'Entreprise</strong>, le <strong>Dédouanement</strong> et les <strong>Prestations Techniques</strong>.
            </p>

            <!-- 2 CTA Magnétiques & Téléphone Direct -->
            <div class="flex flex-wrap items-center gap-4 pt-2" data-stagger-item>
              <a href="/services" data-link class="btn-primary !px-6 !py-3.5 text-sm shadow-md" data-magnetic>
                <span>Découvrir nos services</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <a href="#rdv-section" class="btn-outline !px-6 !py-3.5 text-sm bg-white/80" data-magnetic>
                <span>Prendre rendez-vous</span>
              </a>
              <a href="tel:+237694811715" class="inline-flex items-center gap-2 text-xs font-mono font-bold text-marine-900 bg-slate-100 hover:bg-slate-200 px-4 py-3 rounded-full transition-colors">
                <svg class="w-3.5 h-3.5 text-mint-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>694 811 715</span>
              </a>
            </div>

            <!-- Indicateurs de réassurance rapide -->
            <div class="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/80 max-w-xl text-left" data-stagger-item>
              <div>
                <span class="block font-serif text-lg font-bold text-marine-900">Baux OHADA</span>
                <span class="text-xs text-slate-500">Sécurisation légale</span>
              </div>
              <div>
                <span class="block font-serif text-lg font-bold text-mint-700">Orange / MTN</span>
                <span class="text-xs text-slate-500">Reversements directs</span>
              </div>
              <div>
                <span class="block font-serif text-lg font-bold text-marine-900">Douala & Rép.</span>
                <span class="text-xs text-slate-500">Rond-point CCC Dakar</span>
              </div>
            </div>
          </div>

          <!-- Colonne Droite : Carte Flottante d'Accès à l'Application SaaS -->
          <div class="lg:col-span-5 relative" data-stagger-item>
            <div class="relative mx-auto max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 p-6 overflow-hidden">
              
              <!-- Header de la carte SaaS -->
              <div class="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
                <div class="flex items-center gap-2.5">
                  <div class="w-9 h-9 rounded-xl bg-mint-500 flex items-center justify-center text-white font-black text-sm shadow-sm">MB</div>
                  <div>
                    <h3 class="font-bold text-xs text-slate-900 leading-tight">Espace SaaS Propriétaire</h3>
                    <span class="text-[10px] font-mono text-mint-700">app.multibusiness.cm</span>
                  </div>
                </div>
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-mint-50 text-mint-800 text-[10px] font-bold border border-mint-200">
                  <span class="w-1.5 h-1.5 rounded-full bg-mint-500 animate-ping"></span>
                  En direct
                </span>
              </div>

              <!-- Aperçu Métrique SaaS -->
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-3 mb-4">
                <div class="flex justify-between items-center text-xs text-slate-500">
                  <span>Loyers reversés (Mois en cours)</span>
                  <span class="font-mono text-mint-700 font-bold">100% à date fixe</span>
                </div>
                <div class="font-mono text-2xl md:text-3xl font-black text-marine-900 tracking-tight">
                  14 850 000 <span class="text-xs font-sans text-slate-500 font-normal">FCFA</span>
                </div>
                <div class="flex items-center gap-2 text-[11px] text-slate-600 font-medium">
                  <span class="px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 text-[9px] font-bold">Orange Money</span>
                  <span class="px-1.5 py-0.5 rounded bg-yellow-100 text-yellow-800 text-[9px] font-bold">MTN MoMo</span>
                  <span class="text-slate-400">• Quittance instantanée</span>
                </div>
              </div>

              <!-- Lots témoins sous gestion -->
              <div class="space-y-2 mb-5">
                <div class="p-2.5 rounded-xl bg-white border border-slate-100 flex items-center justify-between text-xs">
                  <span class="font-medium text-slate-800">🏢 Résidence Bonapriso (Douala)</span>
                  <span class="text-[10px] font-bold px-2 py-0.5 bg-mint-100 text-mint-800 rounded-md">9/9 Loué</span>
                </div>
                <div class="p-2.5 rounded-xl bg-white border border-slate-100 flex items-center justify-between text-xs">
                  <span class="font-medium text-slate-800">🏬 Espace Commercial Akwa</span>
                  <span class="text-[10px] font-bold px-2 py-0.5 bg-mint-100 text-mint-800 rounded-md">4/4 Loué</span>
                </div>
              </div>

              <!-- Bouton d'accès direct au SaaS -->
              <a href="https://app.multibusiness.cm/" target="_blank" rel="noopener" class="w-full btn-primary !py-3 text-xs flex items-center justify-center gap-2">
                <span>Accéder à la plateforme SaaS</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 2 : BANDEAU DE CONFIANCE & CHIFFRES CLÉS (Fond Blanc Pur) -->
      <!-- ================================================================= -->
      <section class="py-12 bg-white border-y border-slate-200">
        <div class="container max-w-7xl mx-auto px-4">
          
          <!-- Marquee continu des partenaires de confiance -->
          <div class="mb-10 text-center">
            <span class="text-xs font-bold uppercase tracking-widest text-slate-400 block mb-4">Partenaires Institutionnels & Écosystème Agréé</span>
            <div class="flex flex-wrap items-center justify-center gap-6 md:gap-12 opacity-85 text-xs font-mono font-bold text-slate-600">
              <span class="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">DGI Cameroun (Fiscalité)</span>
              <span class="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">CFCE (Création Entreprise)</span>
              <span class="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">Douane Camerounaise & Port</span>
              <span class="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">Chambre des Huissiers (1ère & 2e charges)</span>
              <span class="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200">Orange Money & MTN MoMo</span>
            </div>
          </div>

          <!-- 4 Compteurs Numériques Animés -->
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center" data-reveal="up">
            <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div class="font-mono text-3xl md:text-4xl font-extrabold text-mint-700 mb-1" data-counter="1250" data-prefix="+">1250</div>
              <span class="text-xs md:text-sm font-semibold text-slate-700">Lots & Biens sous gestion</span>
            </div>

            <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div class="font-mono text-3xl md:text-4xl font-extrabold text-marine-900 mb-1" data-counter="98" data-suffix="%">98%</div>
              <span class="text-xs md:text-sm font-semibold text-slate-700">Taux de recouvrement ponctuel</span>
            </div>

            <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div class="font-mono text-3xl md:text-4xl font-extrabold text-amber-600 mb-1" data-counter="72" data-suffix="h">72h</div>
              <span class="text-xs md:text-sm font-semibold text-slate-700">Délai Création Entreprise (CFCE)</span>
            </div>

            <div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 shadow-sm">
              <div class="font-mono text-3xl md:text-4xl font-extrabold text-indigo-600 mb-1" data-counter="10" data-prefix="+" data-suffix=" ans">10 ans</div>
              <span class="text-xs md:text-sm font-semibold text-slate-700">D'expertise à Douala</span>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 3 : LES 5 SERVICES EN CARTES IMMERSIVES (Fond Ivoire)      -->
      <!-- ================================================================= -->
      <section id="services-section" class="py-24 bg-[#FAF9F5] relative">
        <div class="container max-w-7xl mx-auto px-4">
          
          <div class="max-w-3xl mx-auto text-center mb-16" data-reveal="up">
            <span class="inline-block px-3 py-1 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-wider uppercase mb-3">Nos Domaines d'Intervention</span>
            <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-marine-900 mb-4">
              5 Pôles d'Excellence pour Votre Réussite
            </h2>
            <p class="text-slate-600 text-sm md:text-base">
              Une offre pluridisciplinaire pensée pour sécuriser vos investissements, valoriser votre patrimoine et accélérer votre développement au Cameroun.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            <!-- SERVICE 1 : GESTION IMMOBILIÈRE (Carte Majeure / Plus Grande) -->
            <div class="md:col-span-2 lg:col-span-2 rounded-3xl bg-white border-2 border-mint-400 p-8 shadow-card flex flex-col md:flex-row gap-8 items-center relative overflow-hidden group" data-reveal="up">
              <div class="w-full md:w-1/2 h-64 md:h-full min-h-[260px] rounded-2xl overflow-hidden relative">
                <img src="./assets/images/hero-gestion-immobiliere.jpg" alt="Gestion Immobilière Douala" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span class="absolute top-3 left-3 px-3 py-1 bg-mint-500 text-white font-bold text-xs rounded-full shadow-md">
                  ★ PÔLE PHARE (70% DE L'ACTIVITÉ)
                </span>
              </div>
              <div class="w-full md:w-1/2 space-y-4 text-left">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-mint-500"></span>
                  <span class="text-xs font-mono font-bold text-mint-700 uppercase">Immobilier & Conciergerie</span>
                </div>
                <h3 class="font-serif text-2xl md:text-3xl font-bold text-marine-900">
                  Gestion Immobilière & Espace SaaS Bailleurs
                </h3>
                <p class="text-slate-600 text-sm leading-relaxed">
                  Confiez-nous vos immeubles, duplex, studios et commerces. Nous assurons la sélection des locataires, les baux conformes OHADA, les quittances instantanées et le reversement garanti de vos loyers chaque 5 du mois via Orange Money ou MTN MoMo.
                </p>
                <div class="flex flex-wrap gap-2 pt-2">
                  <span class="text-[11px] px-2.5 py-1 bg-mint-50 text-mint-800 rounded-lg font-medium border border-mint-200">Huissiers 1ère & 2e charges</span>
                  <span class="text-[11px] px-2.5 py-1 bg-mint-50 text-mint-800 rounded-lg font-medium border border-mint-200">Zéro litige locatif</span>
                  <span class="text-[11px] px-2.5 py-1 bg-mint-50 text-mint-800 rounded-lg font-medium border border-mint-200">Reporting 24/7</span>
                </div>
                <div class="pt-3">
                  <a href="/gestion-immobiliere" data-link class="btn-primary !px-5 !py-2.5 text-xs inline-flex items-center gap-2">
                    <span>Explorer l'offre Immobilière complète</span>
                    <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </a>
                </div>
              </div>
            </div>

            <!-- SERVICE 2 : CRÉATION D'ENTREPRISE -->
            <div class="rounded-3xl bg-white border border-amber-200 p-6 shadow-card flex flex-col justify-between group text-left" data-reveal="up" data-delay="0.1">
              <div class="space-y-4">
                <div class="h-48 rounded-2xl overflow-hidden relative">
                  <img src="./assets/images/service-creation.jpg" alt="Création Entreprise CFCE" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span class="absolute top-3 left-3 px-2.5 py-0.5 bg-amber-500 text-white font-bold text-[10px] rounded-md">72H CHRONO</span>
                </div>
                <div class="flex items-center gap-2 text-xs font-mono font-bold text-amber-700">
                  <span>Partenaire CFCE</span>
                </div>
                <h3 class="font-serif text-xl font-bold text-marine-900">Création d'Entreprise PME-PMI</h3>
                <p class="text-slate-600 text-xs leading-relaxed">
                  Immatriculation complète (SARL, SAS, Ets) : rédaction de statuts, RCCM, carte de contribuable, NIU et publication légale en 72 heures.
                </p>
              </div>
              <div class="pt-4 border-t border-slate-100 mt-4">
                <a href="/creation-entreprise" data-link class="text-xs font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1.5">
                  <span>Créer mon entreprise →</span>
                </a>
              </div>
            </div>

            <!-- SERVICE 3 : DÉDOUANEMENT DES MARCHANDISES -->
            <div class="rounded-3xl bg-white border border-ocean-200 p-6 shadow-card flex flex-col justify-between group text-left" data-reveal="up" data-delay="0.2">
              <div class="space-y-4">
                <div class="h-48 rounded-2xl overflow-hidden relative">
                  <img src="./assets/images/service-dedouanement.jpg" alt="Dédouanement Portuaire Douala" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span class="absolute top-3 left-3 px-2.5 py-0.5 bg-ocean-500 text-white font-bold text-[10px] rounded-md">PORTS DOUALA & KRIBI</span>
                </div>
                <div class="flex items-center gap-2 text-xs font-mono font-bold text-ocean-700">
                  <span>Douane & Transit</span>
                </div>
                <h3 class="font-serif text-xl font-bold text-marine-900">Dédouanement des Marchandises</h3>
                <p class="text-slate-600 text-xs leading-relaxed">
                  Passage portuaire accéléré, déclarations CAMCIS/SYDONIA, transit import/export et élimination des frais de surestaries.
                </p>
              </div>
              <div class="pt-4 border-t border-slate-100 mt-4">
                <a href="/dedouanement" data-link class="text-xs font-bold text-ocean-700 hover:text-ocean-800 flex items-center gap-1.5">
                  <span>Dédouaner un conteneur →</span>
                </a>
              </div>
            </div>

            <!-- SERVICE 4 : FISCALITÉ ET CONSEIL -->
            <div class="rounded-3xl bg-white border border-indigo-200 p-6 shadow-card flex flex-col justify-between group text-left" data-reveal="up" data-delay="0.3">
              <div class="space-y-4">
                <div class="h-48 rounded-2xl overflow-hidden relative">
                  <img src="./assets/images/service-fiscalite.jpg" alt="Fiscalité et Conseil DGI" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span class="absolute top-3 left-3 px-2.5 py-0.5 bg-indigo-600 text-white font-bold text-[10px] rounded-md">CONFORMITÉ DGI</span>
                </div>
                <div class="flex items-center gap-2 text-xs font-mono font-bold text-indigo-700">
                  <span>Centre des Impôts</span>
                </div>
                <h3 class="font-serif text-xl font-bold text-marine-900">Fiscalité & Conseil Juridique</h3>
                <p class="text-slate-600 text-xs leading-relaxed">
                  Déclarations mensuelles, DSF, TVA, acomptes IS, audits préventifs et assistance solide lors des contrôles fiscaux.
                </p>
              </div>
              <div class="pt-4 border-t border-slate-100 mt-4">
                <a href="/fiscalite-conseil" data-link class="text-xs font-bold text-indigo-700 hover:text-indigo-800 flex items-center gap-1.5">
                  <span>Consulter un fiscaliste →</span>
                </a>
              </div>
            </div>

            <!-- SERVICE 5 : PRESTATION DE SERVICES & ARTISANS -->
            <div class="rounded-3xl bg-white border border-coral-200 p-6 shadow-card flex flex-col justify-between group text-left" data-reveal="up" data-delay="0.4">
              <div class="space-y-4">
                <div class="h-48 rounded-2xl overflow-hidden relative">
                  <img src="./assets/images/service-prestations.jpg" alt="Travaux et Maintenance Bâtiment" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span class="absolute top-3 left-3 px-2.5 py-0.5 bg-coral-500 text-white font-bold text-[10px] rounded-md">SECOND ŒUVRE</span>
                </div>
                <div class="flex items-center gap-2 text-xs font-mono font-bold text-coral-700">
                  <span>Artisans Qualifiés</span>
                </div>
                <h3 class="font-serif text-xl font-bold text-marine-900">Prestation de Services & Travaux</h3>
                <p class="text-slate-600 text-xs leading-relaxed">
                  Électricité bâtiment sécurisée, peinture de finition, plomberie et maintenance générale pour préserver la valeur de votre bien.
                </p>
              </div>
              <div class="pt-4 border-t border-slate-100 mt-4">
                <a href="/prestation-de-services" data-link class="text-xs font-bold text-coral-700 hover:text-coral-800 flex items-center gap-1.5">
                  <span>Commander une intervention →</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 4 : LES 3 VALEURS (Fond Pastel Doux)                       -->
      <!-- ================================================================= -->
      <section class="py-20 bg-emerald-50/50 border-y border-mint-100">
        <div class="container max-w-7xl mx-auto px-4">
          <div class="text-center max-w-2xl mx-auto mb-14" data-reveal="up">
            <span class="text-xs font-bold uppercase tracking-wider text-mint-800 block mb-2">Notre ADN d'Entreprise</span>
            <h2 class="font-serif text-3xl md:text-4xl font-bold text-marine-900">Les 3 Piliers de Notre Engagement</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            
            <!-- Valeur 1 : Dynamisme -->
            <div class="p-8 rounded-3xl bg-white border border-mint-200/80 shadow-sm space-y-4 hover:shadow-md transition-shadow" data-reveal="up">
              <div class="w-12 h-12 rounded-2xl bg-mint-100 text-mint-700 flex items-center justify-center text-xl font-bold font-mono">01</div>
              <h3 class="font-serif text-2xl font-bold text-marine-900">Dynamisme</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Une équipe réactive et proactive, intégrant les nouvelles technologies (SaaS, Mobile Money) pour accélérer chaque procédure sans délai inutile.
              </p>
            </div>

            <!-- Valeur 2 : Expertise -->
            <div class="p-8 rounded-3xl bg-white border border-amber-200/80 shadow-sm space-y-4 hover:shadow-md transition-shadow" data-reveal="up" data-delay="0.1">
              <div class="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-xl font-bold font-mono">02</div>
              <h3 class="font-serif text-2xl font-bold text-marine-900">Expertise</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Maîtrise rigoureuse des normes juridiques OHADA, de la législation fiscale camerounaise et des circuits portuaires pour une sécurité totale.
              </p>
            </div>

            <!-- Valeur 3 : Disponibilité -->
            <div class="p-8 rounded-3xl bg-white border border-indigo-200/80 shadow-sm space-y-4 hover:shadow-md transition-shadow" data-reveal="up" data-delay="0.2">
              <div class="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center text-xl font-bold font-mono">03</div>
              <h3 class="font-serif text-2xl font-bold text-marine-900">Disponibilité</h3>
              <p class="text-slate-600 text-sm leading-relaxed">
                Un interlocuteur dédié accessible 6j/7 de 08h à 17h, par téléphone, WhatsApp ou au siège de Douala (Rond-point CCC Dakar).
              </p>
            </div>

          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 5 : GESTION IMMOBILIÈRE EN GRAND (Fond Blanc Pur)          -->
      <!-- ================================================================= -->
      <section class="py-24 bg-white">
        <div class="container max-w-7xl mx-auto px-4">
          
          <div class="max-w-3xl mx-auto text-center mb-16" data-reveal="up">
            <span class="inline-block px-3 py-1 rounded-full bg-mint-100 text-mint-800 text-xs font-bold tracking-wider uppercase mb-3">Spécialité Principale</span>
            <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-marine-900 mb-4">
              La Gestion Immobilière Simplifiée
            </h2>
            <p class="text-slate-600 text-sm md:text-base">
              Que vous soyez bailleur propriétaire d'un patrimoine ou locataire à la recherche du logement idéal, découvrez une expérience sur mesure.
            </p>
          </div>

          <!-- Bascule Onglets Bailleurs vs Locataires -->
          <div class="flex justify-center mb-12" data-reveal="up">
            <div class="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200">
              <button id="tab-btn-bailleurs" class="px-6 py-2.5 rounded-full text-xs font-bold transition-all bg-white text-marine-900 shadow-sm">
                🏢 Espace Bailleurs (Propriétaires)
              </button>
              <button id="tab-btn-locataires" class="px-6 py-2.5 rounded-full text-xs font-bold transition-all text-slate-600 hover:text-marine-900">
                🔑 Espace Locataires (Résidents)
              </button>
            </div>
          </div>

          <!-- Contenu Onglet Bailleurs -->
          <div id="tab-content-bailleurs" class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div class="space-y-6 text-left" data-reveal="left">
              <h3 class="font-serif text-2xl md:text-3xl font-bold text-marine-900">
                Propriétaires : Confiez votre bien et percevez vos loyers sans retard
              </h3>
              <ul class="space-y-3 text-sm text-slate-700">
                <li class="flex items-start gap-3">
                  <span class="w-5 h-5 rounded-full bg-mint-100 text-mint-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                  <span><strong>Recherche & Filtrage rigoureux des locataires :</strong> solvabilité vérifiée, contrats de travail et cautions.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="w-5 h-5 rounded-full bg-mint-100 text-mint-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                  <span><strong>Recouvrement ponctuel & Relances automatiques :</strong> virement sur compte bancaire, Orange Money ou MTN MoMo le 5 du mois.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="w-5 h-5 rounded-full bg-mint-100 text-mint-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                  <span><strong>Assistance juridique & Huissiers assermentés :</strong> prise en charge totale des éventuels litiges sans frais imprévus.</span>
                </li>
              </ul>
              <div class="pt-2">
                <a href="/gestion-immobiliere" data-link class="btn-primary !px-6 !py-3 text-xs">Confier la gestion de mon bien →</a>
              </div>
            </div>
            <div class="rounded-3xl overflow-hidden border border-slate-200 shadow-xl" data-reveal="right">
              <img src="./assets/images/hero-gestion-immobiliere.jpg" alt="Bailleurs Douala" class="w-full h-80 object-cover" />
            </div>
          </div>

          <!-- Contenu Onglet Locataires (masqué au départ) -->
          <div id="tab-content-locataires" class="hidden grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div class="space-y-6 text-left">
              <h3 class="font-serif text-2xl md:text-3xl font-bold text-marine-900">
                Locataires : Trouvez votre futur logement en toute transparence
              </h3>
              <ul class="space-y-3 text-sm text-slate-700">
                <li class="flex items-start gap-3">
                  <span class="w-5 h-5 rounded-full bg-mint-100 text-mint-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                  <span><strong>Logements audités & vérifiés :</strong> électricité conforme, plomberie saine, propreté irréprochable.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="w-5 h-5 rounded-full bg-mint-100 text-mint-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                  <span><strong>Paiement facile par Mobile Money :</strong> payez votre loyer depuis votre smartphone et recevez votre quittance instantanément.</span>
                </li>
                <li class="flex items-start gap-3">
                  <span class="w-5 h-5 rounded-full bg-mint-100 text-mint-700 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</span>
                  <span><strong>Service d'assistance réactif :</strong> intervention rapide d'artisans en cas de panne ou de besoin d'entretien.</span>
                </li>
              </ul>
              <div class="pt-2">
                <a href="/gestion-immobiliere" data-link class="btn-secondary !px-6 !py-3 text-xs">Voir les logements disponibles →</a>
              </div>
            </div>
            <div class="rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
              <img src="./assets/images/bien-appartement.jpg" alt="Locataires Douala" class="w-full h-80 object-cover" />
            </div>
          </div>

          <!-- Catalogue des Types de Biens Immobiliers Gérés -->
          <div class="pt-10 border-t border-slate-100">
            <h3 class="font-serif text-2xl font-bold text-marine-900 text-center mb-8">Types de Biens Pris en Charge</h3>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <!-- Bien 1 : Appartements -->
              <div class="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm group text-left" data-reveal="up">
                <div class="h-44 overflow-hidden">
                  <img src="./assets/images/bien-appartement.jpg" alt="Appartements standing Douala" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div class="p-4 space-y-1">
                  <h4 class="font-bold text-sm text-marine-900">Appartements & Duplex</h4>
                  <p class="text-[11px] text-slate-500">Résidences meublées ou non à Bonapriso, Bonanjo, Akwa.</p>
                </div>
              </div>

              <!-- Bien 2 : Studios -->
              <div class="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm group text-left" data-reveal="up" data-delay="0.1">
                <div class="h-44 overflow-hidden">
                  <img src="./assets/images/bien-studio.jpg" alt="Studios modernes Douala" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div class="p-4 space-y-1">
                  <h4 class="font-bold text-sm text-marine-900">Studios & Chambres</h4>
                  <p class="text-[11px] text-slate-500">Logements modernes et fonctionnels pour cadres et étudiants.</p>
                </div>
              </div>

              <!-- Bien 3 : Magasins & Commerces -->
              <div class="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm group text-left" data-reveal="up" data-delay="0.2">
                <div class="h-44 overflow-hidden">
                  <img src="./assets/images/bien-commercial.jpg" alt="Commerces Douala" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div class="p-4 space-y-1">
                  <h4 class="font-bold text-sm text-marine-900">Magasins & Boutiques</h4>
                  <p class="text-[11px] text-slate-500">Emplacements commerciaux stratégiques en bordure d'artères.</p>
                </div>
              </div>

              <!-- Bien 4 : Bureaux d'Affaires -->
              <div class="rounded-2xl bg-slate-50 border border-slate-200 overflow-hidden shadow-sm group text-left" data-reveal="up" data-delay="0.3">
                <div class="h-44 overflow-hidden">
                  <img src="./assets/images/bien-bureaux.jpg" alt="Bureaux d'affaires Douala" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div class="p-4 space-y-1">
                  <h4 class="font-bold text-sm text-marine-900">Bureaux & Immeubles</h4>
                  <p class="text-[11px] text-slate-500">Plateaux de bureaux et bâtiments entiers pour entreprises.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 6 : ESPACE PRÉSENTATION DES APPLICATIONS (WEB & MOBILE)    -->
      <!-- ================================================================= -->
      <section id="app-section" class="py-24 bg-[#FAF9F5] border-y border-slate-200 relative overflow-hidden">
        
        <!-- Lueur de fond subtile -->
        <div class="absolute -top-32 -right-32 w-96 h-96 bg-mint-200/40 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute -bottom-32 -left-32 w-96 h-96 bg-ocean-200/30 rounded-full blur-3xl pointer-events-none"></div>

        <div class="container max-w-7xl mx-auto px-4 relative z-10">
          
          <!-- En-tête de la section -->
          <div class="max-w-3xl mx-auto text-center mb-12" data-reveal="up">
            <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-100 text-mint-800 text-xs font-bold uppercase tracking-wider mb-4 border border-mint-200">
              <span class="w-2 h-2 rounded-full bg-mint-500 animate-pulse"></span>
              <span>Plateforme Digitale Propriétaire • app.multibusiness.cm</span>
            </div>
            <h2 class="font-serif text-3xl md:text-4xl lg:text-5xl font-extrabold text-marine-900 mb-4">
              L'Application Qui Révolutionne l'Immobilier au Cameroun
            </h2>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed">
              Conçue sur mesure pour les bailleurs résidents, la diaspora et les locataires. Suivez vos encaissements, générez vos quittances et pilotez votre patrimoine en temps réel.
            </p>

            <!-- Sélecteur Animé Version Mobile vs Version Web -->
            <div class="mt-8 inline-flex p-1.5 rounded-full bg-white border border-slate-200 shadow-sm">
              <button id="btn-app-mobile" class="px-6 py-2.5 rounded-full text-xs font-bold transition-all bg-mint-500 text-white shadow-sm flex items-center gap-2">
                <span>📱 Version Mobile (iPhone 3D)</span>
              </button>
              <button id="btn-app-web" class="px-6 py-2.5 rounded-full text-xs font-bold transition-all text-slate-600 hover:text-marine-900 flex items-center gap-2">
                <span>💻 Version Web (Desktop)</span>
              </button>
            </div>
          </div>

          <!-- VUE 1 : VERSION MOBILE (SCÈNE 3D IPHONE INTERACTIVE) -->
          <div id="app-view-mobile" class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            
            <!-- Colonne Gauche : Les 4 Écrans et Fonctionnalités Synchronisées -->
            <div class="lg:col-span-6 space-y-4 text-left order-2 lg:order-1" data-reveal="left">
              <span class="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2">Cliquez pour tester les écrans sur le smartphone</span>
              
              <!-- Écran 1 : Tableau de bord -->
              <div id="step-btn-dashboard" class="app-step-card p-5 rounded-2xl bg-white border-2 border-mint-500 shadow-md cursor-pointer transition-all hover:scale-[1.01]" data-screen="dashboard">
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-2.5">
                    <span class="w-3 h-3 rounded-full bg-mint-500"></span>
                    <h4 class="font-bold text-sm text-marine-900">1. Tableau de Bord Bailleurs</h4>
                  </div>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-mint-50 text-mint-700">Revenus en direct</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Visualisez le montant total des loyers recouvrés (14 850 000 FCFA), le taux d'occupation de 100% et la date de reversement garantie le 5 du mois.
                </p>
              </div>

              <!-- Écran 2 : Gestion des Biens & Baux OHADA -->
              <div id="step-btn-logements" class="app-step-card p-5 rounded-2xl bg-white border border-slate-200 shadow-sm cursor-pointer transition-all hover:scale-[1.01]" data-screen="logements">
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-2.5">
                    <span class="w-3 h-3 rounded-full bg-indigo-600"></span>
                    <h4 class="font-bold text-sm text-marine-900">2. Gestion des Biens & Baux OHADA</h4>
                  </div>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700">48 Lots actifs</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Fiche détaillée de chaque appartement, studio, magasin et bureau avec identité du locataire et validité juridique du contrat de bail.
                </p>
              </div>

              <!-- Écran 3 : Paiements Instantanés Mobile Money -->
              <div id="step-btn-paiements" class="app-step-card p-5 rounded-2xl bg-white border border-slate-200 shadow-sm cursor-pointer transition-all hover:scale-[1.01]" data-screen="paiements">
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-2.5">
                    <span class="w-3 h-3 rounded-full bg-amber-500"></span>
                    <h4 class="font-bold text-sm text-marine-900">3. Paiements Orange Money & MTN MoMo</h4>
                  </div>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-700">Réconciliation 24/7</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Les locataires règlent en un clic sans se déplacer. Notification instantanée et validation automatique des encaissements sans fraude.
                </p>
              </div>

              <!-- Écran 4 : Quittances Électroniques & Rapports -->
              <div id="step-btn-quittances" class="app-step-card p-5 rounded-2xl bg-white border border-slate-200 shadow-sm cursor-pointer transition-all hover:scale-[1.01]" data-screen="quittances">
                <div class="flex items-center justify-between mb-1.5">
                  <div class="flex items-center gap-2.5">
                    <span class="w-3 h-3 rounded-full bg-ocean-500"></span>
                    <h4 class="font-bold text-sm text-marine-900">4. Quittances Infalsifiables avec QR Code</h4>
                  </div>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-ocean-50 text-ocean-700">Certifié Huissier</span>
                </div>
                <p class="text-xs text-slate-600 leading-relaxed">
                  Émission automatique de reçus de loyer officiels avec code de vérification infalsifiable et téléchargement PDF instantané.
                </p>
              </div>

              <div class="flex flex-wrap items-center gap-4 pt-2">
                <a href="https://app.multibusiness.cm/" target="_blank" rel="noopener" class="btn-primary !px-6 !py-3 text-xs flex items-center gap-2">
                  <span>Ouvrir l'application mobile</span>
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                </a>
                <a href="#rdv-section" class="btn-outline !px-5 !py-3 text-xs bg-white">
                  <span>Demander une démo</span>
                </a>
              </div>
            </div>

            <!-- Colonne Droite : Visualiseur 3D Three.js Interactif (Drag & Float) -->
            <div class="lg:col-span-6 relative flex flex-col items-center justify-center order-1 lg:order-2" data-reveal="right">
              
              <div class="relative w-full max-w-md h-[520px] rounded-3xl bg-gradient-to-b from-white via-slate-50 to-mint-50/30 border border-slate-200 shadow-xl overflow-hidden flex items-center justify-center p-2">
                <!-- Zone Canvas 3D -->
                <div id="home-3d-phone-container" class="w-full h-full cursor-grab active:cursor-grabbing"></div>
                
                <!-- Badge d'aide interaction -->
                <div class="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-marine-900/80 text-white text-[10px] font-mono tracking-wide backdrop-blur-sm pointer-events-none flex items-center gap-1.5 shadow-md">
                  <svg class="w-3 h-3 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/></svg>
                  <span>Glissez pour faire pivoter le téléphone</span>
                </div>
              </div>

            </div>

          </div>

          <!-- VUE 2 : VERSION WEB DESKTOP (MOCKUP NAVIGATEUR BUREAU - Masqué au départ) -->
          <div id="app-view-web" class="hidden mb-16">
            <div class="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden text-left">
              
              <!-- Barre d'en-tête du navigateur -->
              <div class="bg-slate-100 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-rose-400"></span>
                  <span class="w-3 h-3 rounded-full bg-amber-400"></span>
                  <span class="w-3 h-3 rounded-full bg-mint-400"></span>
                </div>
                <div class="px-6 py-1 rounded-lg bg-white border border-slate-200 text-xs font-mono text-slate-600 flex items-center gap-2 w-72 justify-center shadow-inner">
                  <span class="text-mint-600 font-bold">🔒</span> https://app.multibusiness.cm/dashboard
                </div>
                <span class="text-xs font-mono text-slate-400">MULTI BUSINESS SAAS</span>
              </div>

              <!-- Corps de l'interface bureau -->
              <div class="grid grid-cols-12 min-h-[460px]">
                
                <!-- Sidebar -->
                <div class="col-span-3 bg-marine-900 text-slate-300 p-5 space-y-6 hidden md:block">
                  <div class="flex items-center gap-2.5">
                    <div class="w-8 h-8 rounded-lg bg-mint-500 text-white font-black flex items-center justify-center text-xs">MB</div>
                    <span class="font-bold text-xs text-white">Espace Bailleurs</span>
                  </div>
                  <nav class="space-y-1 text-xs">
                    <div class="px-3 py-2 rounded-xl bg-marine-800 text-mint-400 font-bold">📊 Vue d'ensemble</div>
                    <div class="px-3 py-2 rounded-xl hover:bg-marine-800/50 text-slate-400">🏢 Mes Biens (48)</div>
                    <div class="px-3 py-2 rounded-xl hover:bg-marine-800/50 text-slate-400">👥 Locataires & Baux</div>
                    <div class="px-3 py-2 rounded-xl hover:bg-marine-800/50 text-slate-400">💳 Paiements MoMo / OM</div>
                    <div class="px-3 py-2 rounded-xl hover:bg-marine-800/50 text-slate-400">📄 Quittances & Rapports</div>
                    <div class="px-3 py-2 rounded-xl hover:bg-marine-800/50 text-slate-400">⚙️ Paramètres</div>
                  </nav>
                </div>

                <!-- Contenu principal Dashboard -->
                <div class="col-span-12 md:col-span-9 p-6 md:p-8 space-y-6 bg-slate-50">
                  <div class="flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h3 class="font-bold text-lg text-marine-900">Tableau de Bord Portefeuille Immobilier</h3>
                      <p class="text-xs text-slate-500">Mise à jour en temps réel • Douala & Yaoundé</p>
                    </div>
                    <a href="https://app.multibusiness.cm/" target="_blank" rel="noopener" class="btn-primary !px-4 !py-2 text-xs">Accéder au SaaS</a>
                  </div>

                  <!-- Métriques financières en cartes -->
                  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                      <span class="text-[11px] text-slate-500 font-semibold block mb-1">Revenus Collectés (Mois)</span>
                      <div class="font-mono text-xl font-bold text-marine-900">14 850 000 FCFA</div>
                      <span class="text-[10px] text-mint-700 font-bold block mt-1">↑ 100% encaissé</span>
                    </div>
                    <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                      <span class="text-[11px] text-slate-500 font-semibold block mb-1">Taux d'Occupation</span>
                      <div class="font-mono text-xl font-bold text-mint-700">100%</div>
                      <span class="text-[10px] text-slate-500 block mt-1">48 lots occupés</span>
                    </div>
                    <div class="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                      <span class="text-[11px] text-slate-500 font-semibold block mb-1">Reversement Garanti</span>
                      <div class="font-mono text-xl font-bold text-indigo-600">Le 5 du mois</div>
                      <span class="text-[10px] text-slate-500 block mt-1">Orange Money / Virement</span>
                    </div>
                  </div>

                  <!-- Tableau interactif des lots -->
                  <div class="rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-sm">
                    <div class="px-4 py-3 bg-slate-100/70 border-b border-slate-200 font-bold text-xs text-slate-700 flex justify-between">
                      <span>Lots Immobiliers Récents</span>
                      <span class="text-mint-700">Tous les baux conformes OHADA</span>
                    </div>
                    <div class="divide-y divide-slate-100 text-xs">
                      <div class="px-4 py-3 flex items-center justify-between">
                        <div>
                          <span class="font-bold text-slate-900 block">Résidence Akwa Palace, Apt 3B</span>
                          <span class="text-[11px] text-slate-500">Locataire : M. Jean-Paul T.</span>
                        </div>
                        <div class="text-right">
                          <span class="font-mono font-bold text-slate-900 block">350 000 FCFA</span>
                          <span class="text-[10px] font-bold text-mint-700">Payé via Orange Money</span>
                        </div>
                      </div>
                      <div class="px-4 py-3 flex items-center justify-between">
                        <div>
                          <span class="font-bold text-slate-900 block">Immeuble Bonanjo, Bureau 204</span>
                          <span class="text-[11px] text-slate-500">Locataire : Cabinet Audit & Conseil</span>
                        </div>
                        <div class="text-right">
                          <span class="font-mono font-bold text-slate-900 block">750 000 FCFA</span>
                          <span class="text-[10px] font-bold text-mint-700">Payé via Virement</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <!-- GRILLE DES 8 FONCTIONNALITÉS CLÉS EN CARTES COLORÉES -->
          <div class="pt-8 border-t border-slate-200">
            <h3 class="font-serif text-2xl font-bold text-marine-900 text-center mb-8">Fonctionnalités Incluses sur Web et Mobile</h3>
            
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              
              <div class="p-5 rounded-2xl bg-white border border-mint-200 shadow-sm space-y-2 hover:shadow-md transition-shadow" data-reveal="up">
                <span class="w-8 h-8 rounded-xl bg-mint-100 text-mint-700 flex items-center justify-center text-sm font-bold">🏢</span>
                <h4 class="font-bold text-xs text-marine-900">Espace Bailleurs & Locataires</h4>
                <p class="text-[11px] text-slate-600">Portail séparé avec accès sécurisé 24/7 pour chaque partie prenante.</p>
              </div>

              <div class="p-5 rounded-2xl bg-white border border-amber-200 shadow-sm space-y-2 hover:shadow-md transition-shadow" data-reveal="up" data-delay="0.1">
                <span class="w-8 h-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-sm font-bold">📱</span>
                <h4 class="font-bold text-xs text-marine-900">Paiements Mobile Money</h4>
                <p class="text-[11px] text-slate-600">Intégration directe Orange Money et MTN MoMo avec zéro déplacement.</p>
              </div>

              <div class="p-5 rounded-2xl bg-white border border-ocean-200 shadow-sm space-y-2 hover:shadow-md transition-shadow" data-reveal="up" data-delay="0.2">
                <span class="w-8 h-8 rounded-xl bg-ocean-100 text-ocean-700 flex items-center justify-center text-sm font-bold">📄</span>
                <h4 class="font-bold text-xs text-marine-900">Quittances avec QR Code</h4>
                <p class="text-[11px] text-slate-600">Reçus électroniques infalsifiables avec certification immédiate.</p>
              </div>

              <div class="p-5 rounded-2xl bg-white border border-indigo-200 shadow-sm space-y-2 hover:shadow-md transition-shadow" data-reveal="up" data-delay="0.3">
                <span class="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center text-sm font-bold">⚖️</span>
                <h4 class="font-bold text-xs text-marine-900">Baux Sécurisés OHADA</h4>
                <p class="text-[11px] text-slate-600">Rédaction légale et collaboration avec huissiers de 1ère et 2e charges.</p>
              </div>

              <div class="p-5 rounded-2xl bg-white border border-coral-200 shadow-sm space-y-2 hover:shadow-md transition-shadow" data-reveal="up" data-delay="0.4">
                <span class="w-8 h-8 rounded-xl bg-coral-100 text-coral-700 flex items-center justify-center text-sm font-bold">🔔</span>
                <h4 class="font-bold text-xs text-marine-900">Relances Automatiques</h4>
                <p class="text-[11px] text-slate-600">Rappels de loyer cordiaux par SMS et WhatsApp avant l'échéance.</p>
              </div>

              <div class="p-5 rounded-2xl bg-white border border-emerald-200 shadow-sm space-y-2 hover:shadow-md transition-shadow" data-reveal="up" data-delay="0.5">
                <span class="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-sm font-bold">🛠️</span>
                <h4 class="font-bold text-xs text-marine-900">Suivi Travaux & Maintenance</h4>
                <p class="text-[11px] text-slate-600">Gestion des interventions d'artisans (électricité, plomberie, peinture).</p>
              </div>

              <div class="p-5 rounded-2xl bg-white border border-purple-200 shadow-sm space-y-2 hover:shadow-md transition-shadow" data-reveal="up" data-delay="0.6">
                <span class="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center text-sm font-bold">📊</span>
                <h4 class="font-bold text-xs text-marine-900">Rapports & Synthèses</h4>
                <p class="text-[11px] text-slate-600">Export comptable mensuel et annuel pour vos déclarations fiscales.</p>
              </div>

              <div class="p-5 rounded-2xl bg-white border border-sky-200 shadow-sm space-y-2 hover:shadow-md transition-shadow" data-reveal="up" data-delay="0.7">
                <span class="w-8 h-8 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center text-sm font-bold">🏢</span>
                <h4 class="font-bold text-xs text-marine-900">Multi-Bâtiments & Lots</h4>
                <p class="text-[11px] text-slate-600">Gestion centralisée de plusieurs résidences et immeubles sur un seul compte.</p>
              </div>

            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 7 : À PROPOS CONDENSÉ + BLOC PDG + VIDÉO (Fond Blanc Pur)   -->
      <!-- ================================================================= -->
      <section class="py-24 bg-white">
        <div class="container max-w-7xl mx-auto px-4">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            
            <!-- Bloc PDG & Présentation -->
            <div class="lg:col-span-6 space-y-6 text-left" data-reveal="left">
              <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">Direction & Vision</span>
              <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900">
                La Rigueur et l'Intégrité au Service de Vos Projets
              </h2>
              <p class="text-slate-600 text-sm md:text-base leading-relaxed">
                Fondée à Douala, <strong>MULTI BUSINESS SARL</strong> est une société camerounaise de prestations de services intellectuels. Notre ambition est d'offrir aux entrepreneurs, bailleurs et particuliers une structure de confiance, respectueuse des normes légales et dotée d'une technologie d'avant-garde.
              </p>

              <!-- Badges de Réassurance -->
              <div class="flex flex-wrap gap-3">
                <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-mint-50 border border-mint-200 text-mint-800 text-xs font-bold">
                  <span>★</span> Service de Qualité Certifié
                </span>
                <span class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-bold">
                  <span>⚡</span> Rapidité d'Exécution Garantie
                </span>
              </div>

              <!-- Bloc Portrait du PDG avec Téléphone Direct -->
              <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-5">
                <img src="./assets/images/portrait-pdg.jpg" alt="Directeur Général MULTI BUSINESS SARL" class="w-16 h-16 rounded-full object-cover border-2 border-mint-500 shadow-md" />
                <div class="space-y-0.5">
                  <h4 class="font-serif font-bold text-sm text-marine-900">Direction Générale</h4>
                  <p class="text-xs text-slate-500">MULTI BUSINESS SARL • Douala</p>
                  <a href="tel:+237694811715" class="text-xs font-mono font-bold text-mint-700 hover:underline inline-block pt-1">
                    Ligne directe : (+237) 694 811 715
                  </a>
                </div>
              </div>
            </div>

            <!-- Lecteur Vidéo d'Entreprise Stylisé -->
            <div class="lg:col-span-6" data-reveal="right">
              <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
                <img src="./assets/images/video-cover.jpg" alt="Vidéo d'entreprise MULTI BUSINESS SARL" class="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div class="absolute inset-0 bg-marine-900/40 flex flex-col items-center justify-center p-6 text-center text-white">
                  <button id="btn-play-video" class="w-16 h-16 rounded-full bg-white text-marine-900 flex items-center justify-center shadow-xl hover:scale-110 transition-transform mb-3" aria-label="Lire la vidéo d'entreprise">
                    <svg class="w-6 h-6 fill-current translate-x-0.5" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </button>
                  <span class="font-bold text-sm">Découvrir MULTI BUSINESS SARL en vidéo</span>
                  <span class="text-xs text-slate-300">Présentation des équipes et des services à Douala</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 8 : "NOS PRESTATIONS" & PARTENAIRES ASSOCIES (Fond Ivoire) -->
      <!-- ================================================================= -->
      <section class="py-24 bg-[#FAF9F5] border-y border-slate-200">
        <div class="container max-w-7xl mx-auto px-4">
          <div class="text-center max-w-3xl mx-auto mb-16" data-reveal="up">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">Prestations & Cadre Légal</span>
            <h2 class="font-serif text-3xl md:text-4xl font-bold text-marine-900">Nos Prestations avec Partenaires Agréés</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 text-left" data-reveal="up">
              <span class="text-xs font-mono font-bold text-mint-700 block">Pôle Immobilier</span>
              <h4 class="font-bold text-sm text-marine-900">Études d'Huissiers Assermentés</h4>
              <p class="text-xs text-slate-600">Huissiers de justice de 1ère et 2e charges pour sécuriser les baux et exécuter les procédures légales.</p>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 text-left" data-reveal="up" data-delay="0.1">
              <span class="text-xs font-mono font-bold text-amber-700 block">Pôle Création</span>
              <h4 class="font-bold text-sm text-marine-900">Partenaire CFCE & Notaires</h4>
              <p class="text-xs text-slate-600">Circuit officiel pour l'obtention rapide du Registre de Commerce et de la Carte de Contribuable.</p>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 text-left" data-reveal="up" data-delay="0.2">
              <span class="text-xs font-mono font-bold text-ocean-700 block">Pôle Dédouanement</span>
              <h4 class="font-bold text-sm text-marine-900">Direction des Douanes & Syndicats</h4>
              <p class="text-xs text-slate-600">Accès direct aux systèmes CAMCIS et collaboration étroite avec les transitaires portuaires.</p>
            </div>

            <div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 text-left" data-reveal="up" data-delay="0.3">
              <span class="text-xs font-mono font-bold text-indigo-700 block">Pôle Fiscal</span>
              <h4 class="font-bold text-sm text-marine-900">Centres des Impôts (DGI)</h4>
              <p class="text-xs text-slate-600">Conformité rigoureuse du calendrier déclaratif pour éviter toute pénalité ou redressement.</p>
            </div>

          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 9 : TÉMOIGNAGES & FAQ (Fond Blanc Pur)                     -->
      <!-- ================================================================= -->
      <section class="py-24 bg-white">
        <div class="container max-w-7xl mx-auto px-4">
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            <!-- Témoignages Clients -->
            <div class="lg:col-span-5 space-y-6 text-left" data-reveal="left">
              <span class="px-3 py-1 rounded-full bg-mint-100 text-mint-800 text-xs font-bold uppercase tracking-wider">Avis de Propriétaires</span>
              <h2 class="font-serif text-3xl font-bold text-marine-900">Ce Que Disent Nos Clients</h2>
              
              <div class="space-y-4">
                <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div class="flex text-amber-500 text-xs">★★★★★</div>
                  <p class="text-xs text-slate-700 italic">"Étant basé en France, j'avais d'énormes difficultés à recouvrer mes loyers à Douala. Depuis que j'ai confié mon immeuble à MULTI BUSINESS, je reçois mes virements chaque 5 du mois avec quittances claires."</p>
                  <span class="block text-xs font-bold text-marine-900">— M. Jean-Paul T., Propriétaire d'un immeuble (Akwa)</span>
                </div>

                <div class="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div class="flex text-amber-500 text-xs">★★★★★</div>
                  <p class="text-xs text-slate-700 italic">"Création de ma SARL en moins de 3 jours au CFCE avec tous les documents officiels. Service rapide, transparent et très professionnel."</p>
                  <span class="block text-xs font-bold text-marine-900">— Mme Sandrine E., Dirigeante PME</span>
                </div>
              </div>
            </div>

            <!-- FAQ Accordéon -->
            <div class="lg:col-span-7 space-y-6 text-left" data-reveal="right">
              <span class="px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">Foire Aux Questions</span>
              <h2 class="font-serif text-3xl font-bold text-marine-900">Questions Fréquentes</h2>

              <div class="space-y-3">
                <details class="group p-4 rounded-2xl bg-slate-50 border border-slate-200 transition-all cursor-pointer">
                  <summary class="font-bold text-xs md:text-sm text-marine-900 flex justify-between items-center list-none">
                    <span>Comment se déroule la mise en gestion locative de mon bien ?</span>
                    <span class="text-mint-700 text-lg transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p class="text-xs text-slate-600 pt-3 leading-relaxed">
                    Nous réalisons un audit de votre bien, fixons le loyer optimal du marché, rédigeons le mandat de gestion et assurons la sélection des locataires avec signature d'un bail conforme OHADA.
                  </p>
                </details>

                <details class="group p-4 rounded-2xl bg-slate-50 border border-slate-200 transition-all cursor-pointer">
                  <summary class="font-bold text-xs md:text-sm text-marine-900 flex justify-between items-center list-none">
                    <span>Quels sont les modes de versement des loyers pour les bailleurs ?</span>
                    <span class="text-mint-700 text-lg transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p class="text-xs text-slate-600 pt-3 leading-relaxed">
                    Vous pouvez recevoir vos loyers par virement bancaire ou par transfert instantané Orange Money et MTN MoMo le 5 de chaque mois.
                  </p>
                </details>

                <details class="group p-4 rounded-2xl bg-slate-50 border border-slate-200 transition-all cursor-pointer">
                  <summary class="font-bold text-xs md:text-sm text-marine-900 flex justify-between items-center list-none">
                    <span>Où se situe exactement le siège de MULTI BUSINESS SARL ?</span>
                    <span class="text-mint-700 text-lg transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p class="text-xs text-slate-600 pt-3 leading-relaxed">
                    Notre siège est situé à Douala, au rond-point CCC (Dakar), à quelques mètres du commissariat du 8ᵉ arrondissement.
                  </p>
                </details>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 10 : FORMULAIRE DE RENDEZ-VOUS & BLOC CONTACT (Fond Ivoire) -->
      <!-- ================================================================= -->
      <section id="rdv-section" class="py-24 bg-[#FAF9F5] border-y border-slate-200">
        <div class="container max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            <!-- Formulaire de Prise de Rendez-vous -->
            <div class="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-card text-left" data-reveal="left">
              <span class="text-xs font-bold uppercase tracking-wider text-mint-700 block mb-2">Demande Immédiate</span>
              <h3 class="font-serif text-2xl md:text-3xl font-bold text-marine-900 mb-6">Prendre Rendez-vous ou Demander un Devis</h3>
              
              <form id="home-appointment-form" class="space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Votre Nom & Prénom *</label>
                    <input type="text" required placeholder="Ex: Jean Dupont" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-mint-500 bg-slate-50" />
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Numéro Téléphone / WhatsApp *</label>
                    <input type="tel" required placeholder="Ex: 694 811 715" class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-mint-500 bg-slate-50 font-mono" />
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Service Concerné *</label>
                    <select class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-mint-500 bg-slate-50">
                      <option value="immo">Gestion Immobilière (Bailleurs)</option>
                      <option value="locataire">Recherche Logement (Locataire)</option>
                      <option value="creation">Création d'Entreprise (CFCE)</option>
                      <option value="douane">Dédouanement des Marchandises</option>
                      <option value="fiscalite">Fiscalité & Conseil DGI</option>
                      <option value="travaux">Prestations de Travaux & Artisans</option>
                    </select>
                  </div>
                  <div>
                    <label class="block text-xs font-semibold text-slate-700 mb-1">Ville d'intervention *</label>
                    <select class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-mint-500 bg-slate-50">
                      <option value="douala">Douala (Siège)</option>
                      <option value="yaounde">Yaoundé</option>
                      <option value="autre">Autre localité</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label class="block text-xs font-semibold text-slate-700 mb-1">Détails de votre demande</label>
                  <textarea rows="3" placeholder="Décrivez brièvement votre besoin (type de bien, localisation, délai souhaité)..." class="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-mint-500 bg-slate-50"></textarea>
                </div>

                <button type="submit" class="btn-primary w-full !py-3 text-xs">
                  <span>Envoyer ma demande de rendez-vous</span>
                </button>
              </form>
            </div>

            <!-- Bloc Coordonnées & 3 Numéros Réels -->
            <div class="lg:col-span-5 space-y-6 text-left" data-reveal="right">
              <div class="p-8 bg-marine-900 text-white rounded-3xl shadow-xl space-y-6">
                <div>
                  <span class="text-xs font-mono text-lime-400 block mb-1">CONTACTEZ DIRECTEMENT UN CONSEILLER</span>
                  <h3 class="font-serif text-2xl font-bold">Nos Lignes Directes</h3>
                </div>

                <div class="space-y-3 font-mono text-sm">
                  <a href="tel:+237694811715" class="p-3.5 rounded-xl bg-marine-800/80 border border-mint-500/30 flex items-center justify-between hover:bg-marine-800 transition-colors">
                    <span class="text-xs text-slate-300">Ligne Principale :</span>
                    <span class="font-bold text-lime-400">(+237) 694 811 715</span>
                  </a>
                  <a href="tel:+237690843497" class="p-3.5 rounded-xl bg-marine-800/80 border border-slate-700 flex items-center justify-between hover:bg-marine-800 transition-colors">
                    <span class="text-xs text-slate-300">Ligne 2 :</span>
                    <span class="font-bold text-white">(+237) 690 843 497</span>
                  </a>
                  <a href="tel:+237671461791" class="p-3.5 rounded-xl bg-marine-800/80 border border-slate-700 flex items-center justify-between hover:bg-marine-800 transition-colors">
                    <span class="text-xs text-slate-300">Ligne 3 :</span>
                    <span class="font-bold text-white">(+237) 671 461 791</span>
                  </a>
                </div>

                <div class="pt-2 border-t border-slate-800 text-xs text-slate-300 space-y-2">
                  <p><strong>Siège :</strong> Douala, rond-point CCC (Dakar), à quelques mètres du commissariat du 8ᵉ arr.</p>
                  <p><strong>Horaires :</strong> Lundi au Samedi : 08h00 – 17h00</p>
                  <p><strong>E-mail :</strong> <a href="mailto:contact@multibusiness.cm" class="text-mint-400 hover:underline">contact@multibusiness.cm</a></p>
                </div>

                <a href="https://wa.me/237694811715" target="_blank" rel="noopener" class="w-full btn-primary bg-lime-400 hover:bg-lime-300 text-marine-900 font-bold !py-3 text-xs flex items-center justify-center gap-2">
                  <span>Ouvrir WhatsApp direct</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 11 : CTA FINAL SUR FOND PHOTO CINÉMATOGRAPHIQUE           -->
      <!-- ================================================================= -->
      <section class="relative py-28 px-4 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <img src="./assets/images/cta-final-bg.jpg" alt="MULTI BUSINESS SARL Cameroun" class="w-full h-full object-cover object-center filter brightness-[0.4]" />
          <div class="absolute inset-0 bg-marine-900/60 backdrop-blur-[1px]"></div>
        </div>

        <div class="container max-w-4xl mx-auto text-center relative z-10 text-white space-y-6" data-reveal="up">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-lime-400 text-xs font-mono">
            <span>MULTI BUSINESS SARL • DOUALA & YAOUNDÉ</span>
          </div>
          <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Prêt à Valoriser Votre Patrimoine et Sécuriser Vos Revenus ?
          </h2>
          <p class="text-sm sm:text-base md:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Rejoignez les centaines de bailleurs et entrepreneurs qui font confiance à notre rigueur au Cameroun.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="/contact" data-link class="btn-primary !px-8 !py-4 text-sm bg-lime-400 text-marine-900 hover:bg-lime-300 font-bold shadow-xl" data-magnetic>
              <span>Prendre contact avec la Direction</span>
            </a>
            <a href="https://wa.me/237694811715" target="_blank" rel="noopener" class="btn-outline !px-8 !py-4 text-sm !text-white !border-white/50 hover:!border-white" data-magnetic>
              <span>Échanger sur WhatsApp</span>
            </a>
          </div>
        </div>
      </section>
    `;
  },

  async init(container = (typeof document !== 'undefined' ? document.getElementById('app') || document : null)) {
    console.log('✨ [Home View] init() exécuté');
    if (!container) return;

    // 1. Initialisation de la scène 3D Three.js pour l'iPhone Mobile
    const phoneContainer = container.querySelector('#home-3d-phone-container');
    let phoneViewer = null;
    if (phoneContainer) {
      try {
        phoneViewer = init3DPhoneViewer(phoneContainer, { initialScreen: 'dashboard' });
      } catch (err) {
        console.warn('[Home View] Erreur initialisation Three.js:', err);
      }
    }

    // 2. Bascule Animée Application Mobile vs Application Web
    const btnAppMobile = container.querySelector('#btn-app-mobile');
    const btnAppWeb = container.querySelector('#btn-app-web');
    const viewMobile = container.querySelector('#app-view-mobile');
    const viewWeb = container.querySelector('#app-view-web');

    if (btnAppMobile && btnAppWeb && viewMobile && viewWeb) {
      const showMobile = () => {
        btnAppMobile.className = 'px-6 py-2.5 rounded-full text-xs font-bold transition-all bg-mint-500 text-white shadow-sm flex items-center gap-2';
        btnAppWeb.className = 'px-6 py-2.5 rounded-full text-xs font-bold transition-all text-slate-600 hover:text-marine-900 flex items-center gap-2';
        viewMobile.classList.remove('hidden');
        viewMobile.classList.add('grid');
        viewWeb.classList.add('hidden');
      };

      const showWeb = () => {
        btnAppWeb.className = 'px-6 py-2.5 rounded-full text-xs font-bold transition-all bg-mint-500 text-white shadow-sm flex items-center gap-2';
        btnAppMobile.className = 'px-6 py-2.5 rounded-full text-xs font-bold transition-all text-slate-600 hover:text-marine-900 flex items-center gap-2';
        viewWeb.classList.remove('hidden');
        viewMobile.classList.add('hidden');
        viewMobile.classList.remove('grid');
      };

      btnAppMobile.addEventListener('click', showMobile);
      btnAppWeb.addEventListener('click', showWeb);

      this._cleanups.push(() => {
        btnAppMobile.removeEventListener('click', showMobile);
        btnAppWeb.removeEventListener('click', showWeb);
      });
    }

    // 3. Changement d'Écran Interactif sur l'iPhone 3D au clic sur les cartes
    const stepCards = container.querySelectorAll('.app-step-card');
    stepCards.forEach((card) => {
      const screenType = card.dataset.screen;
      const handleClick = () => {
        // Met à jour la texture de l'écran du smartphone 3D
        if (phoneViewer && typeof phoneViewer.setScreen === 'function') {
          phoneViewer.setScreen(screenType);
        }
        // Met à jour le style visuel des cartes
        stepCards.forEach((c) => {
          c.classList.remove('border-2', 'border-mint-500', 'shadow-md');
          c.classList.add('border', 'border-slate-200', 'shadow-sm');
        });
        card.classList.remove('border', 'border-slate-200', 'shadow-sm');
        card.classList.add('border-2', 'border-mint-500', 'shadow-md');
      };

      card.addEventListener('click', handleClick);
      this._cleanups.push(() => card.removeEventListener('click', handleClick));
    });

    // 4. Bascule Onglets Bailleurs vs Locataires
    const tabBailleurs = container.querySelector('#tab-btn-bailleurs');
    const tabLocataires = container.querySelector('#tab-btn-locataires');
    const contentBailleurs = container.querySelector('#tab-content-bailleurs');
    const contentLocataires = container.querySelector('#tab-content-locataires');

    if (tabBailleurs && tabLocataires && contentBailleurs && contentLocataires) {
      const showBailleurs = () => {
        tabBailleurs.className = 'px-6 py-2.5 rounded-full text-xs font-bold transition-all bg-white text-marine-900 shadow-sm';
        tabLocataires.className = 'px-6 py-2.5 rounded-full text-xs font-bold transition-all text-slate-600 hover:text-marine-900';
        contentBailleurs.classList.remove('hidden');
        contentBailleurs.classList.add('grid');
        contentLocataires.classList.add('hidden');
        contentLocataires.classList.remove('grid');
      };

      const showLocataires = () => {
        tabLocataires.className = 'px-6 py-2.5 rounded-full text-xs font-bold transition-all bg-white text-marine-900 shadow-sm';
        tabBailleurs.className = 'px-6 py-2.5 rounded-full text-xs font-bold transition-all text-slate-600 hover:text-marine-900';
        contentLocataires.classList.remove('hidden');
        contentLocataires.classList.add('grid');
        contentBailleurs.classList.add('hidden');
        contentBailleurs.classList.remove('grid');
      };

      tabBailleurs.addEventListener('click', showBailleurs);
      tabLocataires.addEventListener('click', showLocataires);

      this._cleanups.push(() => {
        tabBailleurs.removeEventListener('click', showBailleurs);
        tabLocataires.removeEventListener('click', showLocataires);
      });
    }

    // 5. Formulaire de prise de rendez-vous
    const form = container.querySelector('#home-appointment-form');
    if (form) {
      const handleForm = (e) => {
        e.preventDefault();
        showToast('Votre demande a bien été envoyée. Un conseiller vous contactera sous 24h.', 'success');
        form.reset();
      };
      form.addEventListener('submit', handleForm);
      this._cleanups.push(() => form.removeEventListener('submit', handleForm));
    }

    // 6. Bouton Play Vidéo (Modal stylisé)
    const playBtn = container.querySelector('#btn-play-video');
    if (playBtn) {
      const handleVideo = () => {
        showToast('Lecture de la vidéo d\'entreprise MULTI BUSINESS SARL en cours...', 'info');
      };
      playBtn.addEventListener('click', handleVideo);
      this._cleanups.push(() => playBtn.removeEventListener('click', handleVideo));
    }
  },

  destroy() {
    console.log('🧹 [Home View] destroy() exécuté : Nettoyage');
    destroy3DPhoneViewer();
    this._cleanups.forEach(fn => {
      try { fn(); } catch(e) {}
    });
    this._cleanups = [];
  }
};
