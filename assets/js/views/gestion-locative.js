/**
 * MULTI BUSINESS SARL - Page GESTION IMMOBILIÈRE (Pôle Phare 70% Production)
 * Direction Artistique : Hyper-Premium Light Luxury White & Ivory (85%), Typographie Marine Profond AAA, >= 12 Images HD
 */
import { CONFIG } from '../config.js';
import { showToast, initAccordions, initTabs, initUIComponents } from '../ui.js';
import { init3DPhoneViewer, destroy3DPhoneViewer } from '../scene3d.js';

export default {
  meta: {
    title: "Gestion Immobilière & Espace SaaS Bailleurs | Douala & Yaoundé",
    description: "MULTI BUSINESS SARL : Leader de la gestion locative intelligente au Cameroun. Recherche de locataires, encaissement Orange Money & MTN MoMo, quittances certifiées et reversements ponctuels le 5 du mois.",
    image: "./assets/images/hero-gestion-immobiliere.jpg"
  },

  _cleanups: [],

  async render() {
    return `
      <!-- ================================================================= -->
      <!-- 1. HERO GESTION IMMOBILIÈRE (Photo HD Éclatante)                  -->
      <!-- ================================================================= -->
      <section class="relative min-h-[85vh] lg:min-h-[80vh] flex items-center justify-center pt-32 pb-16 px-4 md:px-8 overflow-hidden bg-white" data-theme="light">
        <div class="hero-photo-bg">
          <img src="./assets/images/hero-gestion-immobiliere.jpg" alt="Gestion Immobilière de Prestige au Cameroun" class="w-full h-full object-cover object-center filter brightness-[0.97] contrast-[1.03]" />
          <div class="hero-photo-overlay-light"></div>
        </div>

        <div class="container max-w-5xl mx-auto text-center relative z-10" data-stagger-item>
          
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>PÔLE MAJEUR • 70&nbsp;% DE NOTRE EXPERTISE MÉTIER</span>
          </div>

          <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-marine-900 leading-[1.12] tracking-tight mb-6 max-w-4xl mx-auto">
            Votre patrimoine immobilier géré avec rigueur.<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-teal-700 to-emerald-900 font-extrabold">
              0 impayé. 0 litige. 100&nbsp;% de sérénité.
            </span>
          </h1>

          <p class="text-base sm:text-lg md:text-xl text-slate-700 font-normal max-w-3xl mx-auto mb-10 leading-relaxed">
            Bailleurs résidents et de la diaspora : confiez-nous vos immeubles, appartements, studios et commerces à Douala et Yaoundé. Encaissez vos loyers chaque mois à date fixe en toute transparence grâce à notre plateforme SaaS propriétaire.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a href="#catalogue-biens" class="btn-primary !px-7 !py-4 text-sm md:text-base shadow-lg" data-magnetic>
              <span>Explorer les types de biens gérés</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
            <a href="https://wa.me/237694811715?text=Bonjour%20je%20souhaite%20confier%20un%20bien%20en%20gestion%20locative" target="_blank" rel="noopener" class="btn-outline !px-7 !py-4 text-sm md:text-base bg-white" data-magnetic>
              <span>Estimer mes revenus locatifs</span>
            </a>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm font-mono text-slate-700 pt-6 border-t border-slate-200">
            <span class="flex items-center gap-2"><strong class="text-emerald-700">✓</strong> Reversement garanti le 5 du mois</span>
            <span class="flex items-center gap-2"><strong class="text-emerald-700">✓</strong> Orange Money & MTN MoMo</span>
            <span class="flex items-center gap-2"><strong class="text-emerald-700">✓</strong> Baux conformes droit OHADA</span>
            <span class="flex items-center gap-2"><strong class="text-emerald-700">✓</strong> Plateforme SaaS Bailleurs 24/7</span>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 2. OFFRE BAILLEURS vs LOCATAIRES (BASCULE INTERACTIVE ANIMÉE)     -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-white" data-tabs>
        <div class="text-center max-w-3xl mx-auto mb-14" data-reveal="up">
          <span class="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold tracking-wider uppercase mb-3">Deux Expériences Sur-Mesure</span>
          <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900 mb-4">
            Une Plateforme, Deux Espaces Dédiés
          </h2>
          <p class="text-slate-600 text-sm md:text-base">
            Que vous soyez propriétaire cherchant la rentabilité maximale ou locataire en quête de transparence, découvrez nos fonctionnalités dédiées.
          </p>

          <!-- Bouton de bascule interactif avec fort contraste -->
          <div class="inline-flex p-1.5 rounded-full bg-slate-100 border border-slate-200 mt-8 shadow-sm">
            <button class="py-3 px-6 md:px-8 rounded-full text-xs md:text-sm font-extrabold uppercase tracking-wider transition-all bg-marine-900 text-white shadow-md" data-tab-btn="bailleurs-tab">
              Espace Bailleurs (Propriétaires)
            </button>
            <button class="py-3 px-6 md:px-8 rounded-full text-xs md:text-sm font-extrabold uppercase tracking-wider transition-all text-slate-700 hover:text-marine-900" data-tab-btn="locataires-tab">
              Espace Locataires
            </button>
          </div>
        </div>

        <!-- CONTENU ONGLET 1 : OFFRE BAILLEURS -->
        <div data-tab-content="bailleurs-tab" class="space-y-8" data-reveal="up">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div class="card-light p-8 rounded-3xl border border-slate-200 space-y-4 hover:border-emerald-500 transition-all bg-emerald-50/20">
              <div class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xl">⏳</div>
              <h3 class="font-serif text-xl font-bold text-marine-900">Économie de Temps & Sérénité</h3>
              <p class="text-slate-600 text-xs md:text-sm leading-relaxed">
                Fini les relances interminables, les visites le week-end et les tensions. Nous gérons 100&nbsp;% de la relation locative et des urgences techniques.
              </p>
            </div>

            <div class="card-light p-8 rounded-3xl border border-slate-200 space-y-4 hover:border-emerald-500 transition-all bg-emerald-50/20">
              <div class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xl">💳</div>
              <h3 class="font-serif text-xl font-bold text-marine-900">Encaissement & Reversement Garanti</h3>
              <p class="text-slate-600 text-xs md:text-sm leading-relaxed">
                Encaissement par Orange Money, MTN MoMo et virements. Vos loyers sont reversés ponctuellement sur votre compte le 5 de chaque mois.
              </p>
            </div>

            <div class="card-light p-8 rounded-3xl border border-slate-200 space-y-4 hover:border-emerald-500 transition-all bg-emerald-50/20">
              <div class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xl">📊</div>
              <h3 class="font-serif text-xl font-bold text-marine-900">Tableau de Bord SaaS 24/7</h3>
              <p class="text-slate-600 text-xs md:text-sm leading-relaxed">
                Suivez en direct l'état d'occupation de vos lots, l'historique des quittances émises et téléchargez vos rapports comptables en 1 clic.
              </p>
            </div>

            <div class="card-light p-8 rounded-3xl border border-slate-200 space-y-4 hover:border-emerald-500 transition-all bg-emerald-50/20">
              <div class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xl">⚖️</div>
              <h3 class="font-serif text-xl font-bold text-marine-900">Sécurité Juridique OHADA</h3>
              <p class="text-slate-600 text-xs md:text-sm leading-relaxed">
                Rédaction rigoureuse des baux d'habitation et commerciaux avec clauses résolutoires et enregistrement auprès de la DGI.
              </p>
            </div>

            <div class="card-light p-8 rounded-3xl border border-slate-200 space-y-4 hover:border-emerald-500 transition-all bg-emerald-50/20">
              <div class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xl">🔧</div>
              <h3 class="font-serif text-xl font-bold text-marine-900">Maintenance & Artisans Qualifiés</h3>
              <p class="text-slate-600 text-xs md:text-sm leading-relaxed">
                Réseau d'artisans sélectionnés pour les réparations d'électricité, plomberie et réfection avec devis préalablement validés.
              </p>
            </div>

            <div class="card-light p-8 rounded-3xl border border-slate-200 space-y-4 hover:border-emerald-500 transition-all bg-emerald-50/20">
              <div class="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xl">🌍</div>
              <h3 class="font-serif text-xl font-bold text-marine-900">Accompagnement Spécial Diaspora</h3>
              <p class="text-slate-600 text-xs md:text-sm leading-relaxed">
                Vous vivez en France, aux USA ou au Canada ? Pilotez vos investissements camerounais à distance sans intermédiaire informel.
              </p>
            </div>

          </div>

          <!-- Aperçu Visuel Espace SaaS Bailleur -->
          <div class="rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-7 space-y-3">
              <span class="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">Aperçu Espace Propriétaire</span>
              <h4 class="font-serif text-2xl font-bold text-marine-900">Tableau de bord financier en temps réel</h4>
              <p class="text-xs md:text-sm text-slate-600 leading-relaxed">Visualisez le statut de chaque lot, les loyers collectés, les quittances générées et les reversements effectués chaque mois à date fixe.</p>
            </div>
            <div class="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200">
              <img src="./assets/images/app-preview-dashboard.jpg" alt="Tableau de bord SaaS Propriétaire" class="w-full h-48 object-cover" />
            </div>
          </div>

          <div class="text-center pt-4">
            <a href="https://app.multibusiness.cm/" target="_blank" rel="noopener" class="btn-primary !px-8 !py-4 text-sm font-bold">
              <span>Accéder à l'Espace Propriétaire SaaS →</span>
            </a>
          </div>
        </div>

        <!-- CONTENU ONGLET 2 : OFFRE LOCATAIRES -->
        <div data-tab-content="locataires-tab" class="hidden space-y-8" data-reveal="up">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div class="card-light p-8 rounded-3xl border border-slate-200 space-y-4 hover:border-mint-500 transition-all bg-slate-50">
              <div class="w-12 h-12 rounded-2xl bg-mint-100 text-mint-900 flex items-center justify-center font-bold text-xl">📱</div>
              <h3 class="font-serif text-xl font-bold text-marine-900">Paiement Mobile Instantané</h3>
              <p class="text-slate-600 text-xs md:text-sm leading-relaxed">
                Payez votre loyer simplement via Orange Money ou MTN Mobile Money sans vous déplacer en agence bancaire.
              </p>
            </div>

            <div class="card-light p-8 rounded-3xl border border-slate-200 space-y-4 hover:border-mint-500 transition-all bg-slate-50">
              <div class="w-12 h-12 rounded-2xl bg-mint-100 text-mint-900 flex items-center justify-center font-bold text-xl">🧾</div>
              <h3 class="font-serif text-xl font-bold text-marine-900">Quittance Numérique Immédiate</h3>
              <p class="text-slate-600 text-xs md:text-sm leading-relaxed">
                Génération instantanée d'une quittance de loyer certifiée avec QR code infalsifiable, envoyée par SMS et e-mail.
              </p>
            </div>

            <div class="card-light p-8 rounded-3xl border border-slate-200 space-y-4 hover:border-mint-500 transition-all bg-slate-50">
              <div class="w-12 h-12 rounded-2xl bg-mint-100 text-mint-900 flex items-center justify-center font-bold text-xl">🛠️</div>
              <h3 class="font-serif text-xl font-bold text-marine-900">Assistance & Ticket SAV</h3>
              <p class="text-slate-600 text-xs md:text-sm leading-relaxed">
                Une fuite ou une panne électrique ? Déclarez l'incident en 2 clics sur votre espace locataire pour une intervention rapide.
              </p>
            </div>

          </div>

          <!-- Aperçu Visuel Espace Mobile Locataire -->
          <div class="rounded-3xl overflow-hidden border border-slate-200 shadow-md bg-white p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-7 space-y-3">
              <span class="text-xs font-mono font-bold text-emerald-800 uppercase tracking-wider">Aperçu Espace Locataire Mobile</span>
              <h4 class="font-serif text-2xl font-bold text-marine-900">Paiement en 30 secondes & Reçus Instantanés</h4>
              <p class="text-xs md:text-sm text-slate-600 leading-relaxed">Accédez à votre historique, téléchargez vos quittances officielles à tout moment et signalez vos demandes techniques directement depuis votre smartphone.</p>
            </div>
            <div class="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200">
              <img src="./assets/images/app-preview-mobile.jpg" alt="Application Mobile Locataire" class="w-full h-48 object-cover" />
            </div>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 3. CATALOGUE DES TYPES DE BIENS AVEC FILTRES INTERACTIFS          -->
      <!-- ================================================================= -->
      <section id="catalogue-biens" class="py-24 px-4 md:px-8 bg-[#FAF9F5] border-t border-slate-200" data-theme="ivory">
        <div class="max-w-7xl mx-auto space-y-12">
          
          <div class="text-center max-w-3xl mx-auto space-y-3" data-reveal="up">
            <span class="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">Parc Immobilier sous Mandat</span>
            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900">Types de Biens Immobiliers Pris en Gestion</h2>
            <p class="text-slate-600 text-sm md:text-base">De l'immeuble de rapport complet au studio moderne, nous administrons tous types de patrimoines bâtis.</p>
          </div>

          <!-- Filtres de Catégories -->
          <div class="flex flex-wrap items-center justify-center gap-2" id="property-filters">
            <button class="filter-btn active px-4 py-2 rounded-full text-xs font-bold bg-marine-900 text-white shadow-sm transition-all" data-category="all">Tous les biens (7)</button>
            <button class="filter-btn px-4 py-2 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200 hover:border-slate-400 transition-all" data-category="immeuble">Immeubles & Bâtiments</button>
            <button class="filter-btn px-4 py-2 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200 hover:border-slate-400 transition-all" data-category="appartement">Appartements</button>
            <button class="filter-btn px-4 py-2 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200 hover:border-slate-400 transition-all" data-category="studio">Studios & Chambres</button>
            <button class="filter-btn px-4 py-2 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-200 hover:border-slate-400 transition-all" data-category="commercial">Bureaux & Commerces</button>
          </div>

          <!-- Grille des Biens (Photos HD) -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="properties-grid">
            
            <!-- Bien 1 : Immeuble -->
            <div class="property-card card-light overflow-hidden rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all" data-cat="immeuble" data-reveal="up">
              <div class="relative h-56 overflow-hidden">
                <img src="./assets/images/bien-immeuble.jpg" alt="Immeubles de rapport" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-emerald-800 text-white">🏢 Immeuble Entier</span>
              </div>
              <div class="p-6 space-y-2">
                <h3 class="font-serif text-lg font-bold text-marine-900">Immeubles de Rapport & Résidences R+4 / R+8</h3>
                <p class="text-xs text-slate-600 leading-relaxed">Administration globale : baux individuels, gardiennage, syndic bénévole, entretien des parties communes et reversements groupés.</p>
                <div class="pt-2 text-xs font-mono font-bold text-emerald-800">Douala (Akwa, Bonapriso, Kotto) & Yaoundé</div>
              </div>
            </div>

            <!-- Bien 2 : Appartement -->
            <div class="property-card card-light overflow-hidden rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all" data-cat="appartement" data-reveal="up">
              <div class="relative h-56 overflow-hidden">
                <img src="./assets/images/bien-appartement.jpg" alt="Appartements de standing" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-emerald-800 text-white">🏠 Appartements T2 à T5</span>
              </div>
              <div class="p-6 space-y-2">
                <h3 class="font-serif text-lg font-bold text-marine-900">Appartements Meublés & Non Meublés</h3>
                <p class="text-xs text-slate-600 leading-relaxed">Sélection rigoureuse des dossiers locataires (solvabilité vérifiée, fiches de paie, garanties), états des lieux d'entrée et sortie numérisés.</p>
                <div class="pt-2 text-xs font-mono font-bold text-emerald-800">Résidentiel & Standing</div>
              </div>
            </div>

            <!-- Bien 3 : Studio -->
            <div class="property-card card-light overflow-hidden rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all" data-cat="studio" data-reveal="up">
              <div class="relative h-56 overflow-hidden">
                <img src="./assets/images/bien-studio.jpg" alt="Studios modernes" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-emerald-800 text-white">🛋️ Studios Modernes</span>
              </div>
              <div class="p-6 space-y-2">
                <h3 class="font-serif text-lg font-bold text-marine-900">Studios Américains & Suites</h3>
                <p class="text-xs text-slate-600 leading-relaxed">Gestion de haute rotation, relocation rapide sous 15 jours en cas de préavis, suivi des charges d'eau et d'électricité Eneo/CDE.</p>
                <div class="pt-2 text-xs font-mono font-bold text-emerald-800">Taux d'occupation 98&nbsp;%</div>
              </div>
            </div>

            <!-- Bien 4 : Chambres -->
            <div class="property-card card-light overflow-hidden rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all" data-cat="studio" data-reveal="up">
              <div class="relative h-56 overflow-hidden">
                <img src="./assets/images/bien-chambre.jpg" alt="Chambres standing" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-emerald-800 text-white">🛏️ Chambres Modernes</span>
              </div>
              <div class="p-6 space-y-2">
                <h3 class="font-serif text-lg font-bold text-marine-900">Chambres avec Douche Interne</h3>
                <p class="text-xs text-slate-600 leading-relaxed">Gestion adaptée pour cités modernes, étudiants et jeunes cadres à proximité des universités et centres d'affaires.</p>
                <div class="pt-2 text-xs font-mono font-bold text-emerald-800">Recouvrement direct Mobile Money</div>
              </div>
            </div>

            <!-- Bien 5 : Bureaux -->
            <div class="property-card card-light overflow-hidden rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all" data-cat="commercial" data-reveal="up">
              <div class="relative h-56 overflow-hidden">
                <img src="./assets/images/bien-bureaux.jpg" alt="Plateaux de bureaux" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-indigo-800 text-white">💼 Plateaux de Bureaux</span>
              </div>
              <div class="p-6 space-y-2">
                <h3 class="font-serif text-lg font-bold text-marine-900">Bureaux d'Affaires & Sièges Sociaux</h3>
                <p class="text-xs text-slate-600 leading-relaxed">Baux commerciaux conformes Acte Uniforme OHADA, indexation des loyers, facturation de TVA et quittances conformes DGI.</p>
                <div class="pt-2 text-xs font-mono font-bold text-indigo-800">Akwa, Bonanjo, Bastos</div>
              </div>
            </div>

            <!-- Bien 6 : Magasins -->
            <div class="property-card card-light overflow-hidden rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all" data-cat="commercial" data-reveal="up">
              <div class="relative h-56 overflow-hidden">
                <img src="./assets/images/bien-magasin.jpg" alt="Boutiques et magasins" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-indigo-800 text-white">🛍️ Boutiques & Magasins</span>
              </div>
              <div class="p-6 space-y-2">
                <h3 class="font-serif text-lg font-bold text-marine-900">Espaces Commerciaux & Boutiques</h3>
                <p class="text-xs text-slate-600 leading-relaxed">Emplacements stratégiques en bordure d'axe principal, encadrement strict du pas-de-porte et protection contre les impayés d'activité.</p>
                <div class="pt-2 text-xs font-mono font-bold text-indigo-800">Bordure de route & Marchés</div>
              </div>
            </div>

            <!-- Bien 7 : Espaces Commerciaux & Hangars -->
            <div class="property-card card-light overflow-hidden rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all" data-cat="commercial" data-reveal="up">
              <div class="relative h-56 overflow-hidden">
                <img src="./assets/images/bien-commercial.jpg" alt="Hangars et entrepôts" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-indigo-800 text-white">🏭 Entrepôts & Hangars</span>
              </div>
              <div class="p-6 space-y-2">
                <h3 class="font-serif text-lg font-bold text-marine-900">Surfaces de Stockage & Hangars</h3>
                <p class="text-xs text-slate-600 leading-relaxed">Grandes superficies de transit et stockage sécurisées pour importateurs et distributeurs en zones industrielles de Douala (Bassa, Bonabéri).</p>
                <div class="pt-2 text-xs font-mono font-bold text-indigo-800">Zones Industrielles</div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 4. PARTENARIAT JURIDIQUE & HUISSIERS ASSERMENTÉS                  -->
      <!-- ================================================================= -->
      <section class="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-white border-t border-slate-200">
        <div class="card-light p-8 md:p-12 rounded-3xl border border-slate-200 bg-[#FAF9F5] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div class="lg:col-span-5 relative" data-reveal="left">
            <div class="rounded-2xl overflow-hidden shadow-md border border-slate-200">
              <img src="./assets/images/partenaire-justice.jpg" alt="Partenariat Huissiers de Justice assermentés" class="w-full h-auto object-cover max-h-[360px]" />
            </div>
          </div>

          <div class="lg:col-span-7 space-y-6" data-reveal="right">
            <span class="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold uppercase tracking-wider">Sécurisation Juridique Ultime</span>
            
            <h2 class="font-serif text-3xl font-extrabold text-marine-900 leading-tight">
              Partenariat Permanent avec Huissiers de 1ère et 2e Charges
            </h2>

            <p class="text-slate-600 text-sm md:text-base leading-relaxed">
              Pour garantir le principe du <strong>zéro litige et zéro impayé</strong>, MULTI BUSINESS SARL collabore en direct avec des études d'huissiers de justice de 1ère et 2e charges compétentes sur les ressorts des Cours d'Appel du Littoral (Douala) et du Centre (Yaoundé).
            </p>

            <div class="space-y-3 text-xs md:text-sm text-slate-700">
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">1</span>
                <div>
                  <strong class="text-slate-900">Sommations de payer & Mise en demeure sans délai :</strong> Dès 5 jours de retard non régularisé.
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">2</span>
                <div>
                  <strong class="text-slate-900">Clauses résolutoires de plein droit (OHADA) :</strong> Résiliation automatique du bail sans procédure judiciaire interminable.
                </div>
              </div>
              <div class="flex items-start gap-3">
                <span class="w-6 h-6 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs flex-shrink-0">3</span>
                <div>
                  <strong class="text-slate-900">Expulsion régulière avec force publique :</strong> Procédure stricte assurée par huissier pour libérer les lieux et relouer sans perte financière.
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 5. PROCESSUS EN 5 ÉTAPES (Storytelling Mandat de Gestion)        -->
      <!-- ================================================================= -->
      <section class="py-24 px-4 md:px-8 bg-[#FAF9F5] border-t border-slate-200" data-theme="ivory">
        <div class="max-w-6xl mx-auto space-y-12">
          
          <div class="text-center max-w-2xl mx-auto space-y-3" data-reveal="up">
            <span class="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">Méthodologie Éprouvée</span>
            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900">Comment Nous Prenons en Charge Votre Bien</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
            
            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-3 relative" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-sm">01</span>
              <h4 class="font-bold text-sm text-slate-900">Audit & Estimation</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Visite physique, évaluation de la valeur locative du marché et état des lieux initial.</p>
            </div>

            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-3 relative" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-sm">02</span>
              <h4 class="font-bold text-sm text-slate-900">Signature du Mandat</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Mandat exclusif ou semi-exclusif clair, définissant les modalités de reversement.</p>
            </div>

            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-3 relative" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-sm">03</span>
              <h4 class="font-bold text-sm text-slate-900">Sélection Locataire</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Filtrage rigoureux de solvabilité, rédaction de bail OHADA et cautionnement.</p>
            </div>

            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-3 relative" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-mono font-bold text-sm">04</span>
              <h4 class="font-bold text-sm text-slate-900">Gestion & Recouvrement</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Collecte automatisée Orange Money/MTN MoMo, émission de quittances sécurisées.</p>
            </div>

            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-3 relative" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-lime-500 text-marine-950 flex items-center justify-center font-mono font-black text-sm">05</span>
              <h4 class="font-bold text-sm text-slate-900">Reversement le 5</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Transfert direct de vos loyers nets avec rapport complet téléchargeable sur le SaaS.</p>
            </div>

          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 6. SECTION APPLICATIONS 3D (iPhone Interactif Three.js)           -->
      <!-- ================================================================= -->
      <section class="py-24 px-4 md:px-8 bg-white border-t border-slate-200" id="experience-3d-app">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 space-y-6" data-reveal="left">
            <span class="inline-block px-3 py-1 rounded-full bg-mint-50 text-mint-800 border border-mint-200 text-xs font-bold uppercase tracking-wider">Technologie Propriétaire</span>
            
            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900 leading-tight">
              L'Application Mobile & Web MULTI BUSINESS SARL
            </h2>

            <p class="text-slate-600 text-sm md:text-base leading-relaxed">
              Bailleurs ou locataires, retrouvez toute votre gestion dans votre poche. Notifications de paiement en temps réel, téléchargement des quittances avec QR code, demandes d'interventions techniques et compte-rendu comptable instantané.
            </p>

            <div class="grid grid-cols-2 gap-4 pt-2">
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span class="font-mono text-emerald-800 font-bold text-sm block">📱 Application iOS & Android</span>
                <span class="text-xs text-slate-500">PWA fluide sans installation lourde</span>
              </div>
              <div class="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <span class="font-mono text-emerald-800 font-bold text-sm block">💻 Portail Web Responsive</span>
                <span class="text-xs text-slate-500">Accessible sur PC, Mac et tablette</span>
              </div>
            </div>

            <div class="pt-2">
              <a href="https://app.multibusiness.cm/" target="_blank" rel="noopener" class="btn-primary !px-6 !py-3.5 text-xs font-bold">
                <span>Tester la plateforme en direct →</span>
              </a>
            </div>
          </div>

          <!-- Container 3D Three.js -->
          <div class="lg:col-span-6 flex items-center justify-center" data-reveal="right">
            <div id="phone-3d-canvas-container" class="w-full h-[480px] rounded-3xl bg-gradient-to-b from-slate-50 to-emerald-50/40 border border-slate-200 shadow-inner flex items-center justify-center relative overflow-hidden">
              <div class="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-white/90 text-[10px] font-mono font-bold text-slate-700 shadow-sm border border-slate-200">
                3D Interactive • Faites glisser
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 7. TÉMOIGNAGES BAILLEURS & LOCATAIRES                             -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-white">
        <div class="text-center max-w-3xl mx-auto mb-12 space-y-3" data-reveal="up">
          <span class="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">Avis Vérifiés</span>
          <h2 class="font-serif text-3xl font-extrabold text-marine-900">Ils Nous Font Confiance au Quotidien</h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="card-light p-6 rounded-3xl border border-slate-200 space-y-4 shadow-sm bg-[#FAF9F5]" data-reveal="up">
            <div class="flex items-center gap-3">
              <img src="./assets/images/temoin-1.jpg" alt="Jean-Paul N. - Propriétaire" class="w-12 h-12 rounded-full object-cover border-2 border-emerald-500" />
              <div>
                <h4 class="font-bold text-sm text-slate-900">Jean-Paul N.</h4>
                <p class="text-[11px] text-slate-500">Propriétaire d'un immeuble R+3 à Bonapriso</p>
              </div>
            </div>
            <p class="text-xs text-slate-600 italic leading-relaxed">« Depuis que j'ai confié mon immeuble à MULTI BUSINESS SARL, le 5 du mois mes loyers sont virés sans aucun retard. Plus de stress d'impayés ! »</p>
          </div>

          <div class="card-light p-6 rounded-3xl border border-slate-200 space-y-4 shadow-sm bg-[#FAF9F5]" data-reveal="up">
            <div class="flex items-center gap-3">
              <img src="./assets/images/temoin-2.jpg" alt="Aïssatou M. - Diaspora France" class="w-12 h-12 rounded-full object-cover border-2 border-emerald-500" />
              <div>
                <h4 class="font-bold text-sm text-slate-900">Aïssatou M.</h4>
                <p class="text-[11px] text-slate-500">Diaspora (Paris) • 4 appartements à Bastos</p>
              </div>
            </div>
            <p class="text-xs text-slate-600 italic leading-relaxed">« Vivant en France, le tableau de bord SaaS me permet de suivre mes biens en direct. La transparence et le professionnalisme sont remarquables. »</p>
          </div>

          <div class="card-light p-6 rounded-3xl border border-slate-200 space-y-4 shadow-sm bg-[#FAF9F5]" data-reveal="up">
            <div class="flex items-center gap-3">
              <img src="./assets/images/temoin-3.jpg" alt="Samuel E. - Locataire professionnel" class="w-12 h-12 rounded-full object-cover border-2 border-emerald-500" />
              <div>
                <h4 class="font-bold text-sm text-slate-900">Samuel E.</h4>
                <p class="text-[11px] text-slate-500">Locataire de bureau à Akwa</p>
              </div>
            </div>
            <p class="text-xs text-slate-600 italic leading-relaxed">« Le paiement par Orange Money et la quittance reçue instantanément par SMS apportent une vraie clarté. Très bon service technique en cas de souci. »</p>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 8. FORMULES SUR DEVIS & FAQ                                       -->
      <!-- ================================================================= -->
      <section class="py-24 px-4 md:px-8 bg-[#FAF9F5] border-t border-slate-200" data-theme="ivory">
        <div class="max-w-4xl mx-auto space-y-12">
          
          <div class="text-center space-y-3" data-reveal="up">
            <span class="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">Foire Aux Questions</span>
            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900">Questions Fréquentes sur la Gestion Locative</h2>
          </div>

          <!-- Accordéon FAQ -->
          <div class="space-y-4" data-accordion-group>
            
            <div class="card-light rounded-2xl border border-slate-200 bg-white overflow-hidden" data-accordion-item>
              <button class="w-full p-6 text-left flex items-center justify-between font-bold text-sm md:text-base text-slate-900 focus:outline-none" data-accordion-trigger>
                <span>Quels sont vos honoraires de gestion locative ?</span>
                <span class="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs transition-transform" data-accordion-icon>▼</span>
              </button>
              <div class="px-6 pb-6 text-xs md:text-sm text-slate-600 leading-relaxed hidden" data-accordion-content>
                Nos honoraires sont prélevés sous forme de pourcentage transparent sur les loyers effectivement encaissés (généralement entre 8&nbsp;% et 10&nbsp;% selon le volume de lots et les prestations incluses). Si un bien est vacant, aucun honoraire n'est facturé.
              </div>
            </div>

            <div class="card-light rounded-2xl border border-slate-200 bg-white overflow-hidden" data-accordion-item>
              <button class="w-full p-6 text-left flex items-center justify-between font-bold text-sm md:text-base text-slate-900 focus:outline-none" data-accordion-trigger>
                <span>Comment sont gérés les retards ou refus de paiement ?</span>
                <span class="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs transition-transform" data-accordion-icon>▼</span>
              </button>
              <div class="px-6 pb-6 text-xs md:text-sm text-slate-600 leading-relaxed hidden" data-accordion-content>
                Grâce aux alertes automatiques et au suivi rigoureux de nos juristes, nous intervenons dès le 1er jour de retard. En cas de non-régularisation, nos huissiers partenaires de 1ère et 2e charges délivrent immédiatement une sommation de payer et mettent en œuvre la clause résolutoire du bail OHADA.
              </div>
            </div>

            <div class="card-light rounded-2xl border border-slate-200 bg-white overflow-hidden" data-accordion-item>
              <button class="w-full p-6 text-left flex items-center justify-between font-bold text-sm md:text-base text-slate-900 focus:outline-none" data-accordion-trigger>
                <span>Je réside à l'étranger (Diaspora), comment puis-je suivre mes biens ?</span>
                <span class="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs transition-transform" data-accordion-icon>▼</span>
              </button>
              <div class="px-6 pb-6 text-xs md:text-sm text-slate-600 leading-relaxed hidden" data-accordion-content>
                Vous bénéficiez d'un accès direct à votre tableau de bord SaaS 24/7 sur <a href="https://app.multibusiness.cm/" target="_blank" class="text-emerald-700 font-bold underline">app.multibusiness.cm</a>. Vous y consultez l'état d'occupation, les quittances générées et recevez vos loyers par virement international ou compte bancaire local le 5 de chaque mois.
              </div>
            </div>

            <div class="card-light rounded-2xl border border-slate-200 bg-white overflow-hidden" data-accordion-item>
              <button class="w-full p-6 text-left flex items-center justify-between font-bold text-sm md:text-base text-slate-900 focus:outline-none" data-accordion-trigger>
                <span>Quels documents sont nécessaires pour confier un bien en gestion ?</span>
                <span class="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs transition-transform" data-accordion-icon>▼</span>
              </button>
              <div class="px-6 pb-6 text-xs md:text-sm text-slate-600 leading-relaxed hidden" data-accordion-content>
                Il vous suffit de fournir une copie de votre pièce d'identité (CNI ou Passeport), le titre de propriété ou certificat d'attribution du bien, et les clés pour l'état des lieux d'entrée. Nous rédigeons le mandat de gestion en toute simplicité.
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 8. CTA FINAL SUR FOND PHOTO                                       -->
      <!-- ================================================================= -->
      <section class="relative py-24 px-4 md:px-8 overflow-hidden" data-theme="photo">
        <div class="absolute inset-0 z-0">
          <img src="./assets/images/cta-final-bg.jpg" alt="Gestion Immobilière Douala" class="w-full h-full object-cover object-center filter brightness-[0.45]" />
        </div>

        <div class="container max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-lime-400 border border-lime-400/30 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
            <span>Mandat de Gestion Immobilière</span>
          </span>

          <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Offrez à Votre Patrimoine la Sérénité Qu'il Mérite Dès Aujourd'hui.
          </h2>

          <p class="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Rejoignez plus de 500 bailleurs satisfaits à Douala et Yaoundé. Estimation gratuite de vos loyers et prise en charge en 48h.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="/contact" data-link class="btn-primary !px-8 !py-4 text-base shadow-xl" data-magnetic>
              <span>Confier un bien en gestion</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
            <a href="tel:+237694811715" class="btn-outline !px-8 !py-4 text-base bg-white/90" data-magnetic>
              <span>Appeler notre expert gestion</span>
            </a>
          </div>
        </div>
      </section>
    `;
  },

  async init(container) {
    initUIComponents(container);

    // Initialiser les filtres du catalogue de biens
    const filterButtons = container.querySelectorAll('#property-filters .filter-btn');
    const propertyCards = container.querySelectorAll('.property-card');

    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const category = btn.dataset.category;

        filterButtons.forEach(b => {
          b.classList.remove('bg-marine-900', 'text-white', 'active');
          b.classList.add('bg-white', 'text-slate-700');
        });
        btn.classList.add('bg-marine-900', 'text-white', 'active');
        btn.classList.remove('bg-white', 'text-slate-700');

        propertyCards.forEach(card => {
          const cardCat = card.dataset.cat;
          if (category === 'all' || cardCat === category) {
            card.classList.remove('hidden');
            if (window.gsap) {
              window.gsap.fromTo(card, { opacity: 0, scale: 0.95 }, { opacity: 1, scale: 1, duration: 0.35, ease: "power2.out" });
            }
          } else {
            card.classList.add('hidden');
          }
        });
      });
    });

    // Initialiser le visualiseur 3D Three.js
    const canvasContainer = container.querySelector('#phone-3d-canvas-container');
    if (canvasContainer) {
      setTimeout(() => {
        try {
          init3DPhoneViewer(canvasContainer);
        } catch (e) {
          console.warn('[GestionLocative] 3D Viewer init exception:', e);
        }
      }, 100);
    }
  },

  destroy() {
    destroy3DPhoneViewer();
    this._cleanups.forEach(fn => fn());
    this._cleanups = [];
  }
};
