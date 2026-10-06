/**
 * Vue Design System Interactive - MULTI BUSINESS SARL
 * Vitrine des composants d'interface, palettes lumineuses (50% blanc), 5 services colorés,
 * typographie éditoriale serif + sans-serif, accordéons, onglets, modales et photos contextuelles.
 */
import { showToast, openModal, closeModal, initAccordions, initTabs, initModalTriggers } from '../ui.js';
import { CONFIG } from '../config.js';

export default {
  meta: {
    title: "Design System & Composants UI | MULTI BUSINESS SARL",
    description: "Spécifications du Design System de MULTI BUSINESS SARL : palette de marque, 5 codes couleurs services, typographie Playfair + Plus Jakarta Sans et composants UI."
  },

  _cleanups: [],

  async render() {
    return `
      <div class="pt-28 pb-24 px-4 md:px-8 max-w-7xl mx-auto" data-stagger-item>
        
        <!-- ================================================================= -->
        <!-- HEADER DESIGN SYSTEM                                              -->
        <!-- ================================================================= -->
        <header class="mb-16 pb-8 border-b border-slate-200">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-mint-50 border border-mint-200 text-mint-800 text-xs font-bold tracking-widest uppercase mb-4">
            MULTI BUSINESS SARL • CHARTE GRAPHIQUE & UI KIT
          </div>
          <h1 class="text-display-xl font-serif font-black text-marine-900 mb-4">
            Design System & Bibliothèque de Composants
          </h1>
          <p class="text-slate-600 max-w-3xl text-lg leading-relaxed">
            Direction artistique : <strong>Blanc dominant (≈ 50%)</strong> pour un rendu lumineux, luxueux et aéré, <strong>accent sombre encre marine (≤ 10%)</strong> pour le contraste institutionnel, et <strong>code couleur dédié pour chacun des 5 services réels</strong>.
          </p>
        </header>

        <!-- ================================================================= -->
        <!-- 1. PALETTES CHROMATIQUES & SERVICES                               -->
        <!-- ================================================================= -->
        <section class="mb-20">
          <div class="flex items-center gap-3 mb-8">
            <span class="w-3 h-8 bg-mint-500 rounded-full"></span>
            <h2 class="text-heading-xl font-serif font-bold text-marine-900">1. Palette Chromatique & Codes par Service</h2>
          </div>

          <!-- Base de Marque & Dominance -->
          <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <!-- Blanc Pur (Dominant 50%) -->
            <div class="card-light p-6">
              <div class="h-24 rounded-2xl bg-white border border-slate-200 mb-4 flex items-end p-4 shadow-sm">
                <span class="text-slate-900 font-mono font-bold text-sm">#FFFFFF (Blanc Pur)</span>
              </div>
              <h3 class="font-serif font-bold text-marine-900 text-base mb-1">Blanc Pur (Dominant ≈ 50%)</h3>
              <p class="text-slate-500 text-xs mb-3">Couleur reine des fonds de section pour une clarté aérée et luxueuse.</p>
              <div class="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-slate-100">
                <span>Fond Majeur</span>
                <button class="text-mint-700 hover:underline copy-hex-btn" data-hex="#FFFFFF">Copier</button>
              </div>
            </div>

            <!-- Vert Lime (Logo Accent) -->
            <div class="card-light p-6 border-lime-300">
              <div class="h-24 rounded-2xl bg-[#9AFF01] mb-4 flex items-end p-4 shadow-sm">
                <span class="text-marine-900 font-mono font-bold text-sm">#9AFF01</span>
              </div>
              <h3 class="font-serif font-bold text-marine-900 text-base mb-1">Vert Lime Électrique</h3>
              <p class="text-slate-500 text-xs mb-3">Accent rare du monogramme MB. Réservé aux CTA prioritaires, badges et highlights.</p>
              <div class="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-slate-100">
                <span>Contraste 15.2:1 (AAA)</span>
                <button class="text-mint-700 hover:underline copy-hex-btn" data-hex="#9AFF01">Copier</button>
              </div>
            </div>

            <!-- Vert Menthe (Logo & Service Immo) -->
            <div class="card-light p-6 border-mint-200">
              <div class="h-24 rounded-2xl bg-[#26C992] mb-4 flex items-end p-4 shadow-sm">
                <span class="text-white font-mono font-bold text-sm">#26C992</span>
              </div>
              <h3 class="font-serif font-bold text-marine-900 text-base mb-1">Vert Menthe / Émeraude</h3>
              <p class="text-slate-500 text-xs mb-3">Signature Gestion Immobilière (70%). Sérénité, quittances et finance saine.</p>
              <div class="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-slate-100">
                <span>Service Phare (70%)</span>
                <button class="text-mint-700 hover:underline copy-hex-btn" data-hex="#26C992">Copier</button>
              </div>
            </div>

            <!-- Marine Encre Profond (Max 10%) -->
            <div class="card-light p-6 bg-marine-900 text-white">
              <div class="h-24 rounded-2xl bg-[#0B1B2B] border border-white/20 mb-4 flex items-end p-4">
                <span class="text-white font-mono font-bold text-sm">#0B1B2B</span>
              </div>
              <h3 class="font-serif font-bold text-white text-base mb-1">Marine Encre Profond</h3>
              <p class="text-slate-300 text-xs mb-3">Contraste institutionnel sombre strictement limité à 10% de la surface (footer / 1 section max).</p>
              <div class="flex items-center justify-between text-xs font-mono text-slate-400 pt-2 border-t border-white/10">
                <span>Max 10% du site</span>
                <button class="text-lime-400 hover:underline copy-hex-btn" data-hex="#0B1B2B">Copier</button>
              </div>
            </div>
          </div>

          <!-- Les 5 Couleurs Signature par Service -->
          <h3 class="text-sm font-sans font-bold uppercase tracking-wider text-slate-500 mb-4">
            Codes Couleur des 5 Services d'Affaires :
          </h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <!-- 1. Gestion Immobilière -->
            <div class="p-4 rounded-2xl bg-mint-50 border border-mint-200">
              <div class="w-full h-12 rounded-xl bg-mint-500 mb-3 flex items-center justify-center text-white font-mono font-bold text-xs">
                #26C992
              </div>
              <span class="badge-pill badge-mint text-[10px] mb-1">Service 1 • 70%</span>
              <h4 class="font-bold text-marine-900 text-xs mt-1">Gestion Immobilière</h4>
              <p class="text-[11px] text-slate-500 mt-1">Menthe & Émeraude</p>
            </div>

            <!-- 2. Création d'Entreprise -->
            <div class="p-4 rounded-2xl bg-amber-50 border border-amber-200">
              <div class="w-full h-12 rounded-xl bg-amber-500 mb-3 flex items-center justify-center text-marine-900 font-mono font-bold text-xs">
                #F59E0B
              </div>
              <span class="badge-pill badge-amber text-[10px] mb-1">Service 2</span>
              <h4 class="font-bold text-marine-900 text-xs mt-1">Création d'Entreprise</h4>
              <p class="text-[11px] text-slate-500 mt-1">Ambre & Or Royal (CFCE)</p>
            </div>

            <!-- 3. Dédouanement -->
            <div class="p-4 rounded-2xl bg-ocean-50 border border-ocean-200">
              <div class="w-full h-12 rounded-xl bg-ocean-500 mb-3 flex items-center justify-center text-white font-mono font-bold text-xs">
                #0EA5E9
              </div>
              <span class="badge-pill badge-ocean text-[10px] mb-1">Service 3</span>
              <h4 class="font-bold text-marine-900 text-xs mt-1">Dédouanement Port</h4>
              <p class="text-[11px] text-slate-500 mt-1">Bleu Océan & Transit</p>
            </div>

            <!-- 4. Prestation de Services -->
            <div class="p-4 rounded-2xl bg-coral-50 border border-coral-200">
              <div class="w-full h-12 rounded-xl bg-coral-500 mb-3 flex items-center justify-center text-white font-mono font-bold text-xs">
                #F43F5E
              </div>
              <span class="badge-pill badge-coral text-[10px] mb-1">Service 4</span>
              <h4 class="font-bold text-marine-900 text-xs mt-1">Prestation Travaux</h4>
              <p class="text-[11px] text-slate-500 mt-1">Corail & Second Œuvre</p>
            </div>

            <!-- 5. Fiscalité et Conseil -->
            <div class="p-4 rounded-2xl bg-indigo-50 border border-indigo-200">
              <div class="w-full h-12 rounded-xl bg-indigo-500 mb-3 flex items-center justify-center text-white font-mono font-bold text-xs">
                #6366F1
              </div>
              <span class="badge-pill badge-indigo text-[10px] mb-1">Service 5</span>
              <h4 class="font-bold text-marine-900 text-xs mt-1">Fiscalité & Conseil</h4>
              <p class="text-[11px] text-slate-500 mt-1">Indigo & Rigueur DGI</p>
            </div>
          </div>
        </section>

        <!-- ================================================================= -->
        <!-- 2. TYPOGRAPHIE & ÉCHELLES FLUIDES                                 -->
        <!-- ================================================================= -->
        <section class="mb-20">
          <div class="flex items-center gap-3 mb-8">
            <span class="w-3 h-8 bg-indigo-500 rounded-full"></span>
            <h2 class="text-heading-xl font-serif font-bold text-marine-900">2. Typographie : Serif Éditorial & Sans-Serif Moderne</h2>
          </div>

          <div class="card-light p-8 space-y-8">
            <div>
              <span class="text-xs font-mono text-slate-400 block mb-2">Display 2XL — font-serif (Playfair Display)</span>
              <h1 class="text-display-2xl font-serif font-black text-marine-900 leading-tight">
                L'Excellence Immobilière au Cameroun.
              </h1>
            </div>

            <div>
              <span class="text-xs font-mono text-slate-400 block mb-2">Display XL — font-serif (Playfair Display)</span>
              <h2 class="text-display-xl font-serif font-bold text-marine-900 leading-tight">
                Gestion Locative, Rigueur Juridique & Sérénité.
              </h2>
            </div>

            <div>
              <span class="text-xs font-mono text-slate-400 block mb-2">Heading XL — font-sans (Plus Jakarta Sans)</span>
              <h3 class="text-heading-xl font-sans font-bold text-slate-800">
                Solutions d'affaires complètes pour bailleurs, entrepreneurs et importateurs.
              </h3>
            </div>

            <div>
              <span class="text-xs font-mono text-slate-400 block mb-2">Corps de texte courant — font-sans</span>
              <p class="text-slate-600 text-base leading-relaxed max-w-3xl">
                Basée à Douala, au rond-point CCC (Dakar), <strong>MULTI BUSINESS SARL</strong> accompagne les bailleurs résidents et de la diaspora dans la valorisation de leur patrimoine immobilier. Grâce à son application web et mobile propriétaire, elle sécurise les flux de loyers et garantit des reversements ponctuels.
              </p>
            </div>

            <div>
              <span class="text-xs font-mono text-slate-400 block mb-2">Données Chiffrées / Monétaires — font-mono (JetBrains Mono)</span>
              <div class="flex items-center gap-6 font-mono text-lg font-bold">
                <span class="text-mint-700">14 850 000 FCFA</span>
                <span class="text-slate-600">Taux : 98.7%</span>
                <span class="text-marine-900">Lots : 500+</span>
              </div>
            </div>
          </div>
        </section>

        <!-- ================================================================= -->
        <!-- 3. BOUTONS & MICRO-INTERACTIONS                                   -->
        <!-- ================================================================= -->
        <section class="mb-20">
          <div class="flex items-center gap-3 mb-8">
            <span class="w-3 h-8 bg-lime-500 rounded-full"></span>
            <h2 class="text-heading-xl font-serif font-bold text-marine-900">3. Boutons & Micro-Interactions</h2>
          </div>

          <div class="card-light p-8">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center mb-8">
              <button class="btn-primary w-full" id="demo-btn-toast-success">
                <span>Bouton Primaire</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </button>

              <button class="btn-secondary w-full" id="demo-btn-toast-info">
                <span>Bouton Secondaire</span>
              </button>

              <button class="btn-outline w-full">
                <span>Bouton Contour</span>
              </button>

              <button class="btn-primary w-full !bg-marine-900 !text-lime-400 border border-lime-400/40">
                <span>Espace SaaS 3D</span>
              </button>
            </div>

            <!-- Boutons Couleurs par Service -->
            <h4 class="text-xs font-mono text-slate-400 uppercase tracking-wider mb-4">Boutons par Service :</h4>
            <div class="flex flex-wrap gap-4 items-center">
              <button class="btn-service-mint">Immobilier (Menthe)</button>
              <button class="btn-service-amber">Création Entreprise (Ambre)</button>
              <button class="btn-service-ocean">Dédouanement (Océan)</button>
              <button class="btn-service-coral">Prestations Travaux (Corail)</button>
              <button class="btn-service-indigo">Fiscalité (Indigo)</button>
            </div>
          </div>
        </section>

        <!-- ================================================================= -->
        <!-- 4. CARTES DE SERVICE COLORÉES (RYTHME & DIVERSITÉ)                -->
        <!-- ================================================================= -->
        <section class="mb-20">
          <div class="flex items-center gap-3 mb-8">
            <span class="w-3 h-8 bg-amber-500 rounded-full"></span>
            <h2 class="text-heading-xl font-serif font-bold text-marine-900">4. Cartes des 5 Services Colorés</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- Carte 1 : Gestion Immobilière (Phare - Menthe) -->
            <div class="card-light p-8 border-mint-200 bg-gradient-to-b from-mint-50/60 to-white relative overflow-hidden group">
              <div class="badge-pill badge-mint mb-4">Phare • 70%</div>
              <h3 class="text-xl font-serif font-bold text-marine-900 mb-2">Gestion Immobilière & SaaS</h3>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Bailleurs & locataires : immeubles, appartements, studios et magasins. Recouvrement Orange Money / MTN MoMo, quittances certifiées et huissiers de 1ère et 2e charges.
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-mint-100">
                <span class="text-xs font-mono font-bold text-mint-700">app.multibusiness.cm</span>
                <span class="text-sm font-bold text-mint-600 group-hover:translate-x-1 transition-transform">Découvrir →</span>
              </div>
            </div>

            <!-- Carte 2 : Création d'Entreprise (Ambre) -->
            <div class="card-light p-8 border-amber-200 bg-gradient-to-b from-amber-50/60 to-white relative overflow-hidden group">
              <div class="badge-pill badge-amber mb-4">Partenaire CFCE</div>
              <h3 class="text-xl font-serif font-bold text-marine-900 mb-2">Création d'Entreprise PME-PMI</h3>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Immatriculation complète express : statuts, registre de commerce (RCCM), Numéro d'Identifiant Unique (NIU) et formalisation légale au Cameroun.
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-amber-100">
                <span class="text-xs font-mono font-bold text-amber-800">Formalités CFCE</span>
                <span class="text-sm font-bold text-amber-600 group-hover:translate-x-1 transition-transform">Consulter →</span>
              </div>
            </div>

            <!-- Carte 3 : Dédouanement des Marchandises (Océan) -->
            <div class="card-light p-8 border-ocean-200 bg-gradient-to-b from-ocean-50/60 to-white relative overflow-hidden group">
              <div class="badge-pill badge-ocean mb-4">Port de Douala & Kribi</div>
              <h3 class="text-xl font-serif font-bold text-marine-900 mb-2">Dédouanement des Marchandises</h3>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">
                En partenariat avec la douane camerounaise et les syndicats : enlèvement rapide, traçabilité et assurance pour vos conteneurs et cargaisons.
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-ocean-100">
                <span class="text-xs font-mono font-bold text-ocean-700">Rapidité • Sécurité</span>
                <span class="text-sm font-bold text-ocean-600 group-hover:translate-x-1 transition-transform">Consulter →</span>
              </div>
            </div>

            <!-- Carte 4 : Prestation de Services (Corail) -->
            <div class="card-light p-8 border-coral-200 bg-gradient-to-b from-coral-50/60 to-white relative overflow-hidden group">
              <div class="badge-pill badge-coral mb-4">Artisans & Chantiers</div>
              <h3 class="text-xl font-serif font-bold text-marine-900 mb-2">Prestation de Services & Travaux</h3>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Accompagnement de chantiers et artisans qualifiés : dépannages électriques, peinture bâtiment, location d'échafaudages et second œuvre.
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-coral-100">
                <span class="text-xs font-mono font-bold text-coral-700">Équipes Terrain</span>
                <span class="text-sm font-bold text-coral-600 group-hover:translate-x-1 transition-transform">Consulter →</span>
              </div>
            </div>

            <!-- Carte 5 : Fiscalité et Conseil (Indigo) -->
            <div class="card-light p-8 border-indigo-200 bg-gradient-to-b from-indigo-50/60 to-white relative overflow-hidden group">
              <div class="badge-pill badge-indigo mb-4">Partenaire DGI</div>
              <h3 class="text-xl font-serif font-bold text-marine-900 mb-2">Fiscalité et Conseil Stratégique</h3>
              <p class="text-slate-600 text-sm leading-relaxed mb-6">
                Régularisation et suivi fiscal auprès des centres des impôts : déclarations mensuelles, DSF annuelle, sécurisation des revenus fonciers et audit.
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-indigo-100">
                <span class="text-xs font-mono font-bold text-indigo-700">Conformité DGI</span>
                <span class="text-sm font-bold text-indigo-600 group-hover:translate-x-1 transition-transform">Consulter →</span>
              </div>
            </div>

            <!-- Carte 6 : L'Unique Bloc Sombre Autorisé (Marine Encre) -->
            <div class="card-marine-dark p-8 relative overflow-hidden group">
              <div class="badge-pill badge-lime mb-4">Bloc Sombre Max 10%</div>
              <h3 class="text-xl font-serif font-bold text-white mb-2">Espace SaaS Propriétaire</h3>
              <p class="text-slate-300 text-sm leading-relaxed mb-6">
                Application mobile et web pour bailleurs : suivi des loyers en direct, relances WhatsApp diplomatiques et encaissements automatisés.
              </p>
              <div class="flex items-center justify-between pt-4 border-t border-white/10">
                <span class="text-xs font-mono font-bold text-lime-400">Orange Money & MoMo</span>
                <span class="text-sm font-bold text-white group-hover:translate-x-1 transition-transform">Lancer l'App →</span>
              </div>
            </div>
          </div>
        </section>

        <!-- ================================================================= -->
        <!-- 5. COMPOSANTS INTERACTIFS : ONGLETS & ACCORDÉONS                  -->
        <!-- ================================================================= -->
        <section class="mb-20">
          <div class="flex items-center gap-3 mb-8">
            <span class="w-3 h-8 bg-ocean-500 rounded-full"></span>
            <h2 class="text-heading-xl font-serif font-bold text-marine-900">5. Onglets & Accordéons Interactifs</h2>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Onglets Bailleurs vs Locataires -->
            <div class="card-light p-8" data-tabs>
              <h3 class="font-serif font-bold text-lg text-marine-900 mb-4">Bascule Animée Bailleurs / Locataires</h3>
              
              <div class="flex p-1.5 rounded-full bg-slate-100 border border-slate-200 max-w-sm mb-6">
                <button class="flex-1 py-2 px-4 rounded-full text-xs font-bold transition-all bg-white text-marine-900 shadow-sm" data-tab-btn="tab-bailleurs">
                  Espace Bailleurs
                </button>
                <button class="flex-1 py-2 px-4 rounded-full text-xs font-bold transition-all text-slate-600 hover:text-marine-900" data-tab-btn="tab-locataires">
                  Espace Locataires
                </button>
              </div>

              <div data-tab-content="tab-bailleurs">
                <div class="p-5 rounded-2xl bg-mint-50 border border-mint-200">
                  <h4 class="font-bold text-marine-900 mb-2">Offre Sérénité Intégrale pour Bailleurs</h4>
                  <p class="text-sm text-slate-600 leading-relaxed mb-3">
                    Perception garantie de vos loyers chaque mois à date fixe. Gestion des contrats sous acte uniforme OHADA et procédures d'expulsion assurées par huissiers de 1ère et 2e charges en cas de litige.
                  </p>
                  <span class="text-xs font-mono text-mint-700 font-bold">✓ 0 impayé constaté • Reversement ponctuel</span>
                </div>
              </div>

              <div data-tab-content="tab-locataires" class="hidden">
                <div class="p-5 rounded-2xl bg-ocean-50 border border-ocean-200">
                  <h4 class="font-bold text-marine-900 mb-2">Espace Confort & Transparence Locataires</h4>
                  <p class="text-sm text-slate-600 leading-relaxed mb-3">
                    Règlement simple et instantané de votre loyer par Orange Money ou MTN Mobile Money. Quittance PDF certifiée envoyée immédiatement sur WhatsApp avec QR Code infalsifiable.
                  </p>
                  <span class="text-xs font-mono text-ocean-700 font-bold">✓ Quittance numérique instantanée</span>
                </div>
              </div>
            </div>

            <!-- Accordéon FAQ Réelle -->
            <div class="card-light p-8" data-accordion-group>
              <h3 class="font-serif font-bold text-lg text-marine-900 mb-4">Accordéon FAQ & Partenariats</h3>

              <div class="space-y-3">
                <div class="border border-slate-200 rounded-2xl p-4 bg-slate-50/50" data-accordion-item>
                  <button class="w-full flex items-center justify-between text-left font-bold text-sm text-marine-900" data-accordion-trigger>
                    <span>Comment sont gérés les litiges et expulsions de locataires ?</span>
                    <svg class="w-4 h-4 transition-transform duration-300" data-accordion-icon fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  <div class="mt-3 pt-3 border-t border-slate-200 text-xs text-slate-600 hidden leading-relaxed" data-accordion-content>
                    Nous travaillons en partenariat direct avec des cabinets d'huissiers de justice de 1ère et 2ème charges capables d'exécuter les actes légaux en bonne et due forme pour l'expulsion d'un locataire véreux ou indélicat, dans le strict respect de la loi camerounaise.
                  </div>
                </div>

                <div class="border border-slate-200 rounded-2xl p-4 bg-slate-50/50" data-accordion-item>
                  <button class="w-full flex items-center justify-between text-left font-bold text-sm text-marine-900" data-accordion-trigger>
                    <span>Quel est le délai pour créer une entreprise avec le CFCE ?</span>
                    <svg class="w-4 h-4 transition-transform duration-300" data-accordion-icon fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
                  </button>
                  <div class="mt-3 pt-3 border-t border-slate-200 text-xs text-slate-600 hidden leading-relaxed" data-accordion-content>
                    Grâce à notre convention de partenariat avec le Centre de Formalités de Création d'Entreprise (CFCE) de Douala, l'immatriculation complète (statuts, RCCM et NIU) est délivrée en 72 heures ouvrées.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- ================================================================= -->
        <!-- 6. PREMIÈRES IMAGES GÉNÉRÉES & DIRECTION ARTISTIQUE               -->
        <!-- ================================================================= -->
        <section class="mb-20">
          <div class="flex items-center gap-3 mb-8">
            <span class="w-3 h-8 bg-coral-500 rounded-full"></span>
            <h2 class="text-heading-xl font-serif font-bold text-marine-900">6. Direction Artistique Photographique (Images Clés Réelles)</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <!-- Image Hero Accueil -->
            <div class="card-light overflow-hidden">
              <div class="relative h-64 overflow-hidden">
                <img src="./assets/images/hero-accueil.jpg" alt="Architecture Douala" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <span class="absolute top-4 left-4 badge-pill badge-mint !bg-white/95">Hero Accueil (16:9)</span>
              </div>
              <div class="p-6">
                <h4 class="font-serif font-bold text-marine-900 text-base mb-1">Architecture Résidentielle Douala</h4>
                <p class="text-xs text-slate-500">Immeuble de prestige, lumière naturelle chaude d'Afrique équatoriale, végétation tropicale soignée.</p>
              </div>
            </div>

            <!-- Image Hero Gestion Immobilière -->
            <div class="card-light overflow-hidden">
              <div class="relative h-64 overflow-hidden">
                <img src="./assets/images/hero-gestion-immobiliere.jpg" alt="Intérieur Duplex Douala" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <span class="absolute top-4 left-4 badge-pill badge-lime !bg-white/95">Hero Gestion Immobilière (16:9)</span>
              </div>
              <div class="p-6">
                <h4 class="font-serif font-bold text-marine-900 text-base mb-1">Intérieur Duplex & Appartements Meublés</h4>
                <p class="text-xs text-slate-500">Luxe chaleureux, baie vitrée sur la ville, marbre et design contemporain africain.</p>
              </div>
            </div>

            <!-- Image Hero Services Business -->
            <div class="card-light overflow-hidden">
              <div class="relative h-64 overflow-hidden">
                <img src="./assets/images/hero-services.jpg" alt="Salle de Conférence Douala" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <span class="absolute top-4 left-4 badge-pill badge-indigo !bg-white/95">Hero Services B2B (16:9)</span>
              </div>
              <div class="p-6">
                <h4 class="font-serif font-bold text-marine-900 text-base mb-1">Équipe & Conseil Stratégique</h4>
                <p class="text-xs text-slate-500">Réunion de travail à Douala, revue de plans cadastraux et tablettes numériques.</p>
              </div>
            </div>

            <!-- Image Hero À Propos -->
            <div class="card-light overflow-hidden">
              <div class="relative h-64 overflow-hidden">
                <img src="./assets/images/hero-apropos.jpg" alt="Siège Social & Agence" class="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                <span class="absolute top-4 left-4 badge-pill badge-ocean !bg-white/95">Hero À Propos (16:9)</span>
              </div>
              <div class="p-6">
                <h4 class="font-serif font-bold text-marine-900 text-base mb-1">Entrée d'Affaires & Accueil Clients</h4>
                <p class="text-xs text-slate-500">Siège social d'entreprise, hall lumineux, accueil soigné et standing institutionnel.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- ================================================================= -->
        <!-- 7. FORMULAIRES & INPUTS                                           -->
        <!-- ================================================================= -->
        <section class="mb-20">
          <div class="flex items-center gap-3 mb-8">
            <span class="w-3 h-8 bg-mint-500 rounded-full"></span>
            <h2 class="text-heading-xl font-serif font-bold text-marine-900">7. Formulaires & Champs de Saisie</h2>
          </div>

          <div class="card-light p-8 max-w-2xl">
            <div class="space-y-4">
              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Votre Nom Complet</label>
                <input type="text" class="input-light" placeholder="Ex: M. Jean-Paul Mbarga" />
              </div>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Téléphone Direct</label>
                  <input type="tel" class="input-light" placeholder="(+237) 6XX XXX XXX" />
                </div>
                <div>
                  <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Service Demandé</label>
                  <select class="input-light">
                    <option>Gestion Immobilière (Bailleur / Locataire)</option>
                    <option>Création d'Entreprise PME-PMI (CFCE)</option>
                    <option>Dédouanement des Marchandises</option>
                    <option>Prestation de Services & Artisans</option>
                    <option>Fiscalité et Conseil (DGI)</option>
                  </select>
                </div>
              </div>

              <div>
                <label class="block text-xs font-bold text-slate-700 uppercase mb-1">Détails de Votre Demande</label>
                <textarea rows="3" class="input-light" placeholder="Décrivez votre besoin..."></textarea>
              </div>

              <button class="btn-primary w-full justify-center">
                <span>Transmettre la Demande à MULTI BUSINESS SARL</span>
              </button>
            </div>
          </div>
        </section>

        <!-- Modale de Démonstration -->
        <div id="demo-modal" class="fixed inset-0 z-50 bg-marine-900/60 backdrop-blur-md hidden flex items-center justify-center p-4">
          <div class="bg-white rounded-3xl p-8 max-w-md w-full shadow-floating border border-slate-200">
            <h3 class="font-serif font-bold text-xl text-marine-900 mb-2">Modale Interactive</h3>
            <p class="text-sm text-slate-600 mb-6">Composant modale optimisé sans débordement de scroll avec verrouillage d'accessibilité.</p>
            <button class="btn-secondary w-full" id="close-demo-modal-btn">Fermer la Modale</button>
          </div>
        </div>

      </div>
    `;
  },

  async init(container = (typeof document !== 'undefined' ? document.getElementById('app') || document : null)) {
    console.log('⚡ [Design System View] Initialisation des composants interactifs');
    this._cleanups = [];

    if (!container) return;

    // Composants interactifs
    initAccordions(container);
    initTabs(container);
    initModalTriggers(container);

    // Boutons de copie Hex
    container.querySelectorAll('.copy-hex-btn').forEach((btn) => {
      const handler = (e) => {
        const hex = e.target.dataset.hex;
        navigator.clipboard.writeText(hex).then(() => {
          showToast(`Code couleur ${hex} copié dans le presse-papier !`, 'success');
        });
      };
      btn.addEventListener('click', handler);
      this._cleanups.push(() => btn.removeEventListener('click', handler));
    });

    // Toasts interactifs
    const btnSuccess = container.querySelector('#demo-btn-toast-success');
    if (btnSuccess) {
      const h = () => showToast("Action validée avec succès !", "success");
      btnSuccess.addEventListener('click', h);
      this._cleanups.push(() => btnSuccess.removeEventListener('click', h));
    }

    const btnInfo = container.querySelector('#demo-btn-toast-info');
    if (btnInfo) {
      const h = () => showToast("Connexion à l'espace client MULTI BUSINESS...", "success");
      btnInfo.addEventListener('click', h);
      this._cleanups.push(() => btnInfo.removeEventListener('click', h));
    }
  },

  destroy() {
    console.log('🧹 [Design System View] Nettoyage complet');
    this._cleanups.forEach((cleanup) => {
      try { cleanup(); } catch (e) {}
    });
    this._cleanups = [];
  }
};
