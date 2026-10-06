/**
 * MULTI BUSINESS SARL - Page QUI SOMMES-NOUS (Phase 5 Production)
 * Direction Artistique : 100% Light Luxury White & Ivory Palette, Contraste AAA, >= 10 Photos HD
 */
import { CONFIG } from '../config.js';
import { initUIComponents } from '../ui.js';

export default {
  meta: {
    title: "Qui sommes-nous | Notre Histoire, Vision & Équipe d'Experts au Cameroun",
    description: "MULTI BUSINESS SARL : Prestataire intellectuel de référence à Douala et Yaoundé. Gestion immobilière intelligente, fiscalité, création d'entreprise et prestations d'affaires.",
    image: "./assets/images/hero-apropos.jpg"
  },

  _cleanups: [],

  async render() {
    return `
      <!-- ================================================================= -->
      <!-- 1. HERO PLEIN ÉCRAN MANIFESTE (Photo HD Éclatante)                 -->
      <!-- ================================================================= -->
      <section class="relative min-h-[75vh] lg:min-h-[70vh] flex items-center justify-center pt-32 pb-16 px-4 md:px-8 overflow-hidden bg-white" data-theme="light">
        <div class="hero-photo-bg">
          <img src="./assets/images/hero-apropos.jpg" alt="Siège MULTI BUSINESS SARL à Douala" class="w-full h-full object-cover object-center filter brightness-[0.97] contrast-[1.03]" />
          <div class="hero-photo-overlay-light"></div>
        </div>

        <div class="container max-w-5xl mx-auto text-center relative z-10" data-stagger-item>
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint-50 text-mint-800 border border-mint-200/80 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-mint-500 animate-pulse"></span>
            <span>Notre Histoire & Engagement Métier</span>
          </div>

          <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-marine-900 leading-[1.12] tracking-tight mb-6 max-w-4xl mx-auto">
            L'intégrité, la rigueur et la technologie au service de vos intérêts.
          </h1>

          <p class="text-base sm:text-lg md:text-xl text-slate-700 font-normal max-w-3xl mx-auto mb-8 leading-relaxed">
            Fondée à Douala, <strong>MULTI BUSINESS SARL</strong> apporte des réponses concrètes et transparentes aux défis quotidiens des propriétaires, entrepreneurs, commerçants et importateurs au Cameroun.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4">
            <a href="#histoire-vocation" class="btn-primary !px-6 !py-3.5 text-sm shadow-md" data-magnetic>
              <span>Découvrir notre histoire</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
            </a>
            <a href="/contact" data-link class="btn-outline !px-6 !py-3.5 text-sm bg-white/80" data-magnetic>
              <span>Rencontrer nos experts</span>
            </a>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 2. HISTOIRE & VOCATION (Résolution des problèmes concrets)        -->
      <!-- ================================================================= -->
      <section id="histoire-vocation" class="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-white">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 space-y-6" data-reveal="left">
            <span class="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold tracking-wider uppercase">Notre Vocation</span>
            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900 leading-tight">
              Résoudre les frictions réelles du quotidien économique camerounais.
            </h2>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed">
              Au Cameroun, chaque acteur économique fait face à des obstacles critiques : les <strong>bailleurs</strong> subissent les impayés et la charge mentale de la gestion ; les <strong>jeunes entrepreneurs</strong> se perdent dans le labyrinthe des formalités administratives et fiscales ; les <strong>importateurs et commerçants</strong> subissent des retards logistiques et douaniers pénalisants.
            </p>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed">
              <strong>MULTI BUSINESS SARL</strong> a été créée pour être le point d'ancrage unique et fiable qui sécurise, accélère et simplifie l'ensemble de ces démarches avec une rigueur absolue et des outils digitaux modernes.
            </p>

            <div class="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
              <div class="p-4 rounded-2xl bg-[#FAF9F5] border border-slate-200">
                <span class="font-serif text-2xl font-bold text-emerald-800 block">0 Litige</span>
                <span class="text-xs text-slate-600 font-medium">Baux juridiques conformes OHADA</span>
              </div>
              <div class="p-4 rounded-2xl bg-[#FAF9F5] border border-slate-200">
                <span class="font-serif text-2xl font-bold text-mint-700 block">100&nbsp;% Sérénité</span>
                <span class="text-xs text-slate-600 font-medium">Reversements réguliers et traçables</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6" data-reveal="right">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Carte Vocation 1 : Bailleurs -->
              <div class="card-light p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 transition-all bg-emerald-50/30">
                <div class="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-900 flex items-center justify-center text-xl mb-3">🏢</div>
                <h4 class="font-bold text-sm text-slate-900 mb-1">Pour les Bailleurs</h4>
                <p class="text-xs text-slate-600 leading-relaxed">Gestion locative totale, zéro impayé, reversement le 5 du mois et tableau de bord SaaS 24/7.</p>
              </div>

              <!-- Carte Vocation 2 : Entrepreneurs -->
              <div class="card-light p-6 rounded-2xl border border-slate-200 hover:border-amber-300 transition-all bg-amber-50/30">
                <div class="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center text-xl mb-3">🚀</div>
                <h4 class="font-bold text-sm text-slate-900 mb-1">Pour les Entrepreneurs</h4>
                <p class="text-xs text-slate-600 leading-relaxed">Création express d'entreprise (CFCE, RCCM, NIU) et accompagnement juridique OHADA.</p>
              </div>

              <!-- Carte Vocation 3 : Importateurs -->
              <div class="card-light p-6 rounded-2xl border border-slate-200 hover:border-sky-300 transition-all bg-sky-50/30">
                <div class="w-10 h-10 rounded-xl bg-sky-100 text-sky-900 flex items-center justify-center text-xl mb-3">⚓</div>
                <h4 class="font-bold text-sm text-slate-900 mb-1">Pour les Importateurs</h4>
                <p class="text-xs text-slate-600 leading-relaxed">Dédouanement fluide aux ports de Douala et Kribi, transit et suivi douanier DGI/DGD.</p>
              </div>

              <!-- Carte Vocation 4 : Entreprises & Particuliers -->
              <div class="card-light p-6 rounded-2xl border border-slate-200 hover:border-indigo-300 transition-all bg-indigo-50/30">
                <div class="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-900 flex items-center justify-center text-xl mb-3">⚖️</div>
                <h4 class="font-bold text-sm text-slate-900 mb-1">Pour les Entreprises</h4>
                <p class="text-xs text-slate-600 leading-relaxed">Optimisation fiscale, déclarations mensuelles, DSF et audit juridique préventif.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 3. MOT DU PDG & ENGAGEMENT DIRECTIONNEL (Photo HD PDG)             -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 bg-[#FAF9F5] border-y border-slate-200" data-theme="ivory">
        <div class="container max-w-6xl mx-auto">
          <div class="card-light p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl bg-white grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <!-- Photo du PDG -->
            <div class="lg:col-span-5 relative" data-reveal="left">
              <div class="relative rounded-2xl overflow-hidden shadow-lg border-2 border-emerald-500/30 max-h-[460px]">
                <img src="./assets/images/portrait-pdg.jpg" alt="Président Directeur Général MULTI BUSINESS SARL" class="w-full h-full object-cover object-top" />
                <div class="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 to-transparent p-4 text-white">
                  <p class="font-serif font-bold text-sm">Direction Générale</p>
                  <p class="text-xs text-slate-300">MULTI BUSINESS SARL • Douala, Cameroun</p>
                </div>
              </div>
            </div>

            <!-- Message du PDG -->
            <div class="lg:col-span-7 space-y-6" data-reveal="right">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold tracking-wider uppercase">
                <span>Le Mot de la Direction</span>
              </div>

              <h3 class="font-serif text-2xl sm:text-3xl font-extrabold text-marine-900 leading-tight">
                « Bâtir une relation de confiance inébranlable par la clarté et la parole tenue. »
              </h3>

              <div class="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
                <p>
                  « Lorsque nous avons lancé MULTI BUSINESS SARL, notre conviction était simple : l'immobilier et le conseil d'affaires ne peuvent prospérer que sur un socle de transparence totale. Un bailleur qui nous confie son immeuble nous confie des années de sacrifice et de labeur. Notre devoir est de lui assurer la tranquillité d'esprit absolue. »
                </p>
                <p>
                  « En combinant notre expertise juridique terrain, notre partenariat avec des huissiers assermentés de 1ère et 2e charges, et des technologies de reversement automatisé par Mobile Money, nous redéfinissons les standards d'excellence à Douala et Yaoundé. »
                </p>
              </div>

              <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <h4 class="font-serif font-bold text-base text-marine-900">La Direction Générale</h4>
                  <p class="text-xs text-slate-500">MULTI BUSINESS SARL</p>
                </div>
                <span class="font-mono text-xs text-emerald-700 font-bold bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">Dakar, Douala</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 4. LES 3 VALEURS CARDINALES (Cartes Illustrées avec Photos)        -->
      <!-- ================================================================= -->
      <section class="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-white">
        <div class="text-center max-w-3xl mx-auto mb-16 space-y-4" data-reveal="up">
          <span class="inline-block px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">ADN & Valeurs</span>
          <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900">Les 3 Principes Qui Guident Chaque Décision</h2>
          <p class="text-slate-600 text-sm md:text-base">Une éthique professionnelle stricte, sans compromis sur la qualité de service.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <!-- Valeur 1 : Rigueur & Expertise -->
          <div class="card-light overflow-hidden rounded-3xl border border-slate-200 group hover:shadow-xl transition-all" data-reveal="up">
            <div class="relative h-48 overflow-hidden">
              <img src="./assets/images/valeur-expertise.jpg" alt="Rigueur & Expertise Juridique" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-emerald-900 text-white font-mono">01</span>
            </div>
            <div class="p-6 space-y-3">
              <h3 class="font-serif text-xl font-bold text-marine-900">Rigueur & Expertise Juridique</h3>
              <p class="text-xs md:text-sm text-slate-600 leading-relaxed">
                Chaque contrat, chaque quittance et chaque déclaration fiscale est rédigée et auditée dans le respect strict des normes OHADA et du Code Général des Impôts camerounais.
              </p>
            </div>
          </div>

          <!-- Valeur 2 : Dynamisme & Innovation -->
          <div class="card-light overflow-hidden rounded-3xl border border-slate-200 group hover:shadow-xl transition-all" data-reveal="up">
            <div class="relative h-48 overflow-hidden">
              <img src="./assets/images/valeur-dynamisme.jpg" alt="Dynamisme & Innovation Technologique" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-800 text-white font-mono">02</span>
            </div>
            <div class="p-6 space-y-3">
              <h3 class="font-serif text-xl font-bold text-marine-900">Dynamisme & Innovation SaaS</h3>
              <p class="text-xs md:text-sm text-slate-600 leading-relaxed">
                Nous repoussons les limites de la gestion traditionnelle grâce à notre plateforme propriétaire, les alertes automatisées et le reversement direct Orange Money & MTN MoMo.
              </p>
            </div>
          </div>

          <!-- Valeur 3 : Disponibilité & Proximité -->
          <div class="card-light overflow-hidden rounded-3xl border border-slate-200 group hover:shadow-xl transition-all" data-reveal="up">
            <div class="relative h-48 overflow-hidden">
              <img src="./assets/images/valeur-disponibilite.jpg" alt="Disponibilité & Proximité Humaine" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              <span class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-sky-800 text-white font-mono">03</span>
            </div>
            <div class="p-6 space-y-3">
              <h3 class="font-serif text-xl font-bold text-marine-900">Disponibilité & Proximité Terrain</h3>
              <p class="text-xs md:text-sm text-slate-600 leading-relaxed">
                Une équipe joignable 6j/7, un siège physique accessible à Dakar (Douala, Immeuble Express Union) et des gestionnaires dédiés qui se déplacent sur vos sites d'immeubles.
              </p>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 5. TIMELINE ANIMÉE (L'Évolution de MULTI BUSINESS SARL)          -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 bg-[#FAF9F5] border-t border-slate-200" data-theme="ivory">
        <div class="max-w-5xl mx-auto space-y-12">
          
          <div class="text-center max-w-2xl mx-auto space-y-3" data-reveal="up">
            <span class="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">Notre Trajectoire</span>
            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900">Une Croissance Bâtie sur des Résultats Prouvés</h2>
          </div>

          <div class="relative border-l-2 border-emerald-300 ml-4 md:ml-32 space-y-10">
            
            <!-- Étape 1 : 2020 -->
            <div class="relative pl-8 md:pl-12" data-reveal="left">
              <div class="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shadow-md">1</div>
              <span class="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 inline-block mb-1">2020</span>
              <h4 class="font-serif text-xl font-bold text-marine-900">Création et Implantation à Douala</h4>
              <p class="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                Ouverture du cabinet à Douala (Dakar). Démarrage des activités de conseil d'affaires, assistance fiscale et immatriculation des premières PME camerounaises.
              </p>
            </div>

            <!-- Étape 2 : 2022 -->
            <div class="relative pl-8 md:pl-12" data-reveal="left">
              <div class="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shadow-md">2</div>
              <span class="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 inline-block mb-1">2022</span>
              <h4 class="font-serif text-xl font-bold text-marine-900">Structuration du Pôle Gestion Immobilière OHADA</h4>
              <p class="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                Face à la demande des propriétaires de la diaspora et locaux, développement du protocole de baux sécurisés et signature des partenariats avec les études d'huissiers assermentés.
              </p>
            </div>

            <!-- Étape 3 : 2024 -->
            <div class="relative pl-8 md:pl-12" data-reveal="left">
              <div class="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-bold shadow-md">3</div>
              <span class="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 inline-block mb-1">2024</span>
              <h4 class="font-serif text-xl font-bold text-marine-900">Digitalisation SaaS & Reversements Mobile Money</h4>
              <p class="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                Lancement de la plateforme logicielle <a href="https://app.multibusiness.cm/" target="_blank" rel="noopener" class="text-emerald-700 font-bold hover:underline">app.multibusiness.cm</a> avec intégration des API Orange Money & MTN Mobile Money pour les encaissements instantanés.
              </p>
            </div>

            <!-- Étape 4 : 2026 -->
            <div class="relative pl-8 md:pl-12" data-reveal="left">
              <div class="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full bg-emerald-600 text-white flex items-center justify-center text-xs font-black shadow-md animate-pulse">4</div>
              <span class="font-mono text-xs font-bold text-emerald-900 bg-emerald-100 px-2.5 py-1 rounded border border-emerald-300 inline-block mb-1">2026 & Avenir</span>
              <h4 class="font-serif text-xl font-bold text-marine-900">Leader Régional de la Gestion Locative Intelligente</h4>
              <p class="text-xs md:text-sm text-slate-600 mt-1 leading-relaxed">
                Gestion de plus de 1 000 baux actifs entre Douala et Yaoundé, extension des services logistiques et transit vers le port en eau profonde de Kribi.
              </p>
            </div>

          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 6. GALERIE PHOTOS DYNAMIQUE (Mosaïque avec Lightbox Modal)        -->
      <!-- ================================================================= -->
      <section class="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-white">
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4" data-reveal="up">
          <div>
            <span class="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider mb-2">Immersion Visuelle</span>
            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900">Nos Équipes, Nos Bureaux & Le Terrain</h2>
          </div>
          <p class="text-slate-600 text-xs md:text-sm max-w-md">Cliquez sur une photographie pour l'ouvrir en haute définition dans la visionneuse plein écran.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <!-- Photo 1 : Équipe consulting -->
          <div class="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all cursor-pointer h-72" data-lightbox="./assets/images/galerie-equipe.jpg" data-caption="Équipe de consultants et gestionnaires de patrimoine MULTI BUSINESS SARL en réunion stratégique à Douala">
            <img src="./assets/images/galerie-equipe.jpg" alt="Équipe MULTI BUSINESS SARL" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
              <span class="text-white text-xs font-semibold flex items-center gap-2">
                <svg class="w-4 h-4 text-mint-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                Réunion d'expertise & stratégie immobilière
              </span>
            </div>
          </div>

          <!-- Photo 2 : Bureaux & Réception -->
          <div class="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all cursor-pointer h-72" data-lightbox="./assets/images/galerie-bureau-douala.jpg" data-caption="Espace d'accueil et bureaux de prestige de MULTI BUSINESS SARL à Douala (Dakar)">
            <img src="./assets/images/galerie-bureau-douala.jpg" alt="Accueil et Bureaux Douala" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
              <span class="text-white text-xs font-semibold flex items-center gap-2">
                <svg class="w-4 h-4 text-mint-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                Accueil & Salon Bailleurs à Douala
              </span>
            </div>
          </div>

          <!-- Photo 3 : Inspection terrain -->
          <div class="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all cursor-pointer h-72" data-lightbox="./assets/images/galerie-terrain.jpg" data-caption="Audit technique et état des lieux sur un immeuble de rapport sous gestion à Bonapriso">
            <img src="./assets/images/galerie-terrain.jpg" alt="Inspection terrain à Douala" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
              <span class="text-white text-xs font-semibold flex items-center gap-2">
                <svg class="w-4 h-4 text-mint-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                Audit d'immeuble & État des lieux
              </span>
            </div>
          </div>

          <!-- Photo 4 : Immeuble sous mandat -->
          <div class="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all cursor-pointer h-72" data-lightbox="./assets/images/bien-immeuble.jpg" data-caption="Immeuble résidentiel et commercial neuf de 8 étages sous mandat de gestion locative exclusif">
            <img src="./assets/images/bien-immeuble.jpg" alt="Immeuble résidentiel moderne sous mandat" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
              <span class="text-white text-xs font-semibold flex items-center gap-2">
                <svg class="w-4 h-4 text-mint-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                Immeubles de rapport sous mandat
              </span>
            </div>
          </div>

          <!-- Photo 5 : Bureaux & Logistique -->
          <div class="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all cursor-pointer h-72" data-lightbox="./assets/images/bien-bureaux.jpg" data-caption="Plateau de bureaux d'affaires d'une entreprise partenaire installée par MULTI BUSINESS SARL">
            <img src="./assets/images/bien-bureaux.jpg" alt="Plateaux de bureaux d'affaires" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
              <span class="text-white text-xs font-semibold flex items-center gap-2">
                <svg class="w-4 h-4 text-mint-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                Baux professionnels & Commerciaux
              </span>
            </div>
          </div>

          <!-- Photo 6 : Panorama de la ville de Douala -->
          <div class="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200 transition-all cursor-pointer h-72" data-lightbox="./assets/images/hero-accueil.jpg" data-caption="Vue panoramique du centre d'affaires de Douala, cœur économique du Cameroun">
            <img src="./assets/images/hero-accueil.jpg" alt="Douala Centre d'Affaires" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
              <span class="text-white text-xs font-semibold flex items-center gap-2">
                <svg class="w-4 h-4 text-mint-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"/></svg>
                Douala, Littoral • Rayonnement national
              </span>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 7. VIDÉO D'ENTREPRISE & DÉMONSTRATION INSTITUTIONNELLE             -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 bg-[#FAF9F5] border-y border-slate-200" data-theme="ivory">
        <div class="container max-w-5xl mx-auto text-center space-y-8">
          
          <div class="space-y-3" data-reveal="up">
            <span class="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">Vidéo Institutionnelle</span>
            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900">Découvrez MULTI BUSINESS SARL en Action</h2>
            <p class="text-slate-600 text-sm md:text-base max-w-2xl mx-auto">Comprenez en 2 minutes comment notre modèle protège vos investissements et fluidifie vos formalités.</p>
          </div>

          <!-- Lecteur Vidéo / Card Interactive -->
          <div class="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-slate-200 bg-slate-900 aspect-video max-w-4xl mx-auto group cursor-pointer" data-modal-target="video-modal" data-reveal="up">
            <img src="./assets/images/video-cover.jpg" alt="Aperçu vidéo MULTI BUSINESS SARL" class="w-full h-full object-cover opacity-85 group-hover:opacity-95 transition-opacity" />
            <div class="absolute inset-0 bg-slate-950/30 flex items-center justify-center">
              <div class="w-20 h-20 rounded-full bg-lime-400 text-marine-950 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <svg class="w-8 h-8 fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div class="absolute bottom-4 left-6 right-6 flex items-center justify-between text-white text-xs font-mono">
              <span class="bg-slate-950/80 px-3 py-1.5 rounded-full border border-white/20">Présentation Officielle • 02:45</span>
              <span class="bg-emerald-600 px-3 py-1.5 rounded-full font-bold">HD 1080p</span>
            </div>
          </div>

        </div>
      </section>

      <!-- Modale Vidéo Interactive -->
      <div id="video-modal" data-modal class="fixed inset-0 z-[9999] bg-slate-950/90 backdrop-blur-xl hidden items-center justify-center p-4">
        <div class="modal-box relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
          <button data-modal-close class="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/10 text-white hover:bg-white/20 transition-all">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
          </button>
          <div class="aspect-video bg-black flex flex-col items-center justify-center p-8 text-center text-white">
            <div class="w-16 h-16 rounded-full bg-lime-400/20 text-lime-400 flex items-center justify-center text-2xl mb-4">🎬</div>
            <h3 class="font-serif text-xl md:text-2xl font-bold mb-2">Présentation Institutionnelle MULTI BUSINESS SARL</h3>
            <p class="text-xs md:text-sm text-slate-300 max-w-md mb-6">Gestion locative intelligente, baux OHADA, recouvrement Orange/MTN et prestations d'affaires à Douala & Yaoundé.</p>
            <a href="https://wa.me/237651559411" target="_blank" rel="noopener" class="btn-primary !px-6 !py-3 text-xs">Échanger avec un conseiller vidéo</a>
          </div>
        </div>
      </div>

      <!-- ================================================================= -->
      <!-- 8. ZONES D'INTERVENTION (Douala, Yaoundé, Kribi & Régions)         -->
      <!-- ================================================================= -->
      <section class="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-white">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-5 space-y-6" data-reveal="left">
            <span class="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold uppercase tracking-wider">Couverture Géographique</span>
            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900 leading-tight">Présents Là Où Se Décide Votre Croissance</h2>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed">
              Basés à Douala avec une présence active à Yaoundé et sur l'axe portuaire de Kribi, nos agents et juristes quadrillent les pôles économiques majeurs du Cameroun.
            </p>

            <div class="space-y-3 pt-2">
              <div class="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div class="flex items-center gap-3">
                  <span class="w-3 h-3 rounded-full bg-emerald-600"></span>
                  <strong class="text-sm text-slate-900">Douala (Siège Principal)</strong>
                </div>
                <span class="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">Dakar (Express Union)</span>
              </div>

              <div class="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div class="flex items-center gap-3">
                  <span class="w-3 h-3 rounded-full bg-sky-600"></span>
                  <strong class="text-sm text-slate-900">Yaoundé (Centre Administratif)</strong>
                </div>
                <span class="text-xs font-mono font-bold text-sky-800 bg-sky-100 px-2 py-0.5 rounded">Bastos / Centre</span>
              </div>

              <div class="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                <div class="flex items-center gap-3">
                  <span class="w-3 h-3 rounded-full bg-amber-600"></span>
                  <strong class="text-sm text-slate-900">Kribi (Pôle Logistique & Douane)</strong>
                </div>
                <span class="text-xs font-mono font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded">Port en Eau Profonde</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-7" data-reveal="right">
            <div class="card-light p-8 rounded-3xl border border-slate-200 bg-[#FAF9F5] shadow-lg">
              <h3 class="font-serif text-xl font-bold text-marine-900 mb-6 flex items-center justify-between">
                <span>Quartiers & Pôles sous Gestion Directe</span>
                <span class="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">100&nbsp;% Couvert</span>
              </h3>

              <div class="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-medium text-slate-700">
                <div class="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">📍 Akwa & Akwa-Nord</div>
                <div class="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">📍 Bonanjo & Centre</div>
                <div class="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">📍 Bonapriso & Bali</div>
                <div class="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">📍 Deido & Bépanda</div>
                <div class="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">📍 Dakar (Express Union)</div>
                <div class="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">📍 Maképé & Kotto</div>
                <div class="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">📍 Logbessou & PK14</div>
                <div class="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">📍 Bassa Zone Industrielle</div>
                <div class="p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">📍 Yassa & Japoma</div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 9. PARTENAIRES INSTITUTIONNELS & DE CONFIANCE                     -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 bg-[#FAF9F5] border-t border-slate-200" data-theme="ivory">
        <div class="container max-w-6xl mx-auto text-center space-y-10">
          <div class="space-y-2">
            <span class="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">Écosystème Juridique & Financier</span>
            <h3 class="font-serif text-2xl md:text-3xl font-bold text-marine-900">Ils Nous Font Confiance et Accompagnent Nos Mandats</h3>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div class="card-light p-6 rounded-2xl border border-slate-200 flex flex-col items-center justify-center gap-3 bg-white">
              <img src="./assets/images/partenaire-justice.jpg" alt="Chambre Nationale des Huissiers de Justice" class="h-12 w-auto object-contain" />
              <span class="text-[11px] font-bold text-slate-800">Huissiers Assermentés</span>
              <span class="text-[9px] text-slate-500 font-mono">1ère & 2e Charges</span>
            </div>

            <div class="card-light p-6 rounded-2xl border border-slate-200 flex flex-col items-center justify-center gap-3 bg-white">
              <img src="./assets/images/partenaire-cfce.jpg" alt="Centre de Formalités de Création d'Entreprises" class="h-12 w-auto object-contain" />
              <span class="text-[11px] font-bold text-slate-800">CFCE Cameroun</span>
              <span class="text-[9px] text-slate-500 font-mono">Guichet Unique Entreprises</span>
            </div>

            <div class="card-light p-6 rounded-2xl border border-slate-200 flex flex-col items-center justify-center gap-3 bg-white">
              <img src="./assets/images/partenaire-fiscalite.jpg" alt="Direction Générale des Impôts DGI" class="h-12 w-auto object-contain" />
              <span class="text-[11px] font-bold text-slate-800">DGI & Centres Fiscaux</span>
              <span class="text-[9px] text-slate-500 font-mono">Télé-déclarations & DSF</span>
            </div>

            <div class="card-light p-6 rounded-2xl border border-slate-200 flex flex-col items-center justify-center gap-3 bg-white">
              <img src="./assets/images/partenaire-douane.jpg" alt="Direction Générale des Douanes DGD" class="h-12 w-auto object-contain" />
              <span class="text-[11px] font-bold text-slate-800">Douanes Camerounaises</span>
              <span class="text-[9px] text-slate-500 font-mono">Ports Douala & Kribi</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 10. CTA FINAL SUR FOND PHOTO HD                                   -->
      <!-- ================================================================= -->
      <section class="relative py-24 px-4 md:px-8 overflow-hidden" data-theme="photo">
        <div class="absolute inset-0 z-0">
          <img src="./assets/images/cta-final-bg.jpg" alt="Douala business building" class="w-full h-full object-cover object-center filter brightness-[0.45]" />
        </div>

        <div class="container max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-lime-400 border border-lime-400/30 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
            <span>Passons à l'action ensemble</span>
          </span>

          <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Prêt à Confier Vos Intérêts à une Équipe Rigoureuse et Éprouvée ?
          </h2>

          <p class="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Prenez rendez-vous à notre siège de Douala ou demandez une consultation personnalisée sans engagement.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="/contact" data-link class="btn-primary !px-8 !py-4 text-base shadow-xl" data-magnetic>
              <span>Prendre contact maintenant</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
            <a href="tel:+237690843497" class="btn-outline !px-8 !py-4 text-base bg-white/90" data-magnetic>
              <span>Appeler le (+237) 690 84 34 97</span>
            </a>
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
