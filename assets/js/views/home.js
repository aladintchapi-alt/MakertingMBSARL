/**
 * Vue Accueil - MULTI BUSINESS SARL (Phase 3 Production)
 * Direction Artistique : Luxe Immobilier Moderne, Confiance Institutionnelle, SaaS & Cameroun Contemporain
 */
import { CONFIG } from '../config.js';
import { showToast } from '../ui.js';

export default {
  meta: {
    title: "Accueil | Gestion Locative Intelligente & Plateforme SaaS au Cameroun",
    description: "MULTI BUSINESS SARL : Leader de la gestion locative à Douala et Yaoundé. Encaissement Orange Money & MTN MoMo, reversement ponctuel garanti, 0% tracas pour les bailleurs."
  },

  _cleanups: [],

  async render() {
    return `
      <!-- ================================================================= -->
      <!-- SECTION 1 : HERO IMMERSIF PLEIN ÉCRAN                             -->
      <!-- ================================================================= -->
      <section class="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <!-- Fond Dégradé Mesh & Lueur Lumineuse -->
        <div class="absolute inset-0 bg-mesh-dark opacity-80 pointer-events-none"></div>
        <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-500/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div class="container max-w-6xl mx-auto text-center relative z-10">
          
          <!-- Badge Live SaaS -->
          <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-forest-900/90 border border-lime-500/30 text-lime-400 text-xs font-bold tracking-widest uppercase mb-8 shadow-glow-lime-sm" data-stagger-item>
            <span class="w-2 h-2 rounded-full bg-lime-400 animate-ping"></span>
            <span>Plateforme SaaS & Gestion Locative N°1 à Douala & Yaoundé</span>
          </div>

          <!-- Titre Révélé Mot par Mot -->
          <h1 id="hero-title" class="text-display-xl md:text-display-2xl font-display font-black text-white tracking-tight mb-8 leading-[1.08] max-w-5xl mx-auto" data-stagger-item>
            L'excellence de la gestion locative au Cameroun.
            <span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-mint-400 to-mint-500">
              0% tracas. 100% sérénité garantie.
            </span>
          </h1>

          <!-- Sous-titre Persuasif -->
          <p class="text-lg md:text-2xl text-slate-300 font-normal max-w-3xl mx-auto mb-12 leading-relaxed" data-stagger-item>
            Propriétaires résidents et diaspora : confiez vos immeubles, appartements et commerces. Encaissez vos loyers chaque mois à date fixe par virement, <strong>Orange Money</strong> ou <strong>MTN MoMo</strong>.
          </p>

          <!-- Double CTA Magnétique -->
          <div class="flex flex-wrap items-center justify-center gap-5 mb-16" data-stagger-item>
            <a href="/contact" data-link class="btn-primary" data-magnetic>
              <span>Confier un bien immobilier</span>
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
            <a href="/gestion-locative" data-link class="btn-secondary" data-magnetic>
              <span>Découvrir l'Espace SaaS</span>
              <svg class="w-4 h-4 text-mint-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
            </a>
          </div>

          <!-- Indicateur de Scroll Animé -->
          <div class="flex flex-col items-center gap-2 pt-4 opacity-70 hover:opacity-100 transition-opacity" data-stagger-item>
            <span class="text-[11px] font-mono tracking-widest text-slate-400 uppercase">Découvrir l'écosystème</span>
            <div class="w-5 h-9 rounded-full border-2 border-slate-500 flex items-start justify-center p-1">
              <span class="w-1.5 h-2 bg-lime-400 rounded-full animate-bounce"></span>
            </div>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 2 : BANDEAU DE CONFIANCE (MARQUEE CONTINU)                -->
      <!-- ================================================================= -->
      <section class="border-y border-white/10 bg-forest-950/90 py-5 overflow-hidden relative">
        <div class="marquee-track flex items-center gap-12 font-mono text-xs md:text-sm font-semibold text-slate-300">
          <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-lime-400"></span>
            <span>98.7% Taux de recouvrement des loyers</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-mint-400"></span>
            <span>500+ Lots & Biens gérés à Douala & Yaoundé</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-lime-400"></span>
            <span>Reversements garantis le 5 du mois</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-mint-400"></span>
            <span>Paiements certifiés Orange Money & MTN MoMo</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-lime-400"></span>
            <span>Quittances électroniques instantanées</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-mint-400"></span>
            <span>Espace Bailleurs & Locataires SaaS 24/7</span>
          </div>
          <!-- Duplication pour boucle infinie -->
          <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-lime-400"></span>
            <span>98.7% Taux de recouvrement des loyers</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-mint-400"></span>
            <span>500+ Lots & Biens gérés à Douala & Yaoundé</span>
          </div>
          <div class="flex items-center gap-3">
            <span class="w-2 h-2 rounded-full bg-lime-400"></span>
            <span>Reversements garantis le 5 du mois</span>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 3 : LA GESTION LOCATIVE EN GRAND (70% FOCUS)             -->
      <!-- ================================================================= -->
      <section class="py-28 px-4 md:px-8 max-w-7xl mx-auto relative">
        <div class="text-center max-w-3xl mx-auto mb-20" data-reveal="up">
          <div class="badge-tag badge-lime mb-4">Notre Cœur de Métier (70%)</div>
          <h2 class="text-display-lg font-display font-extrabold text-white mb-6">
            Une Solution Intégrale Conçue Pour les Exigences du Cameroun
          </h2>
          <p class="text-slate-300 text-base md:text-lg leading-relaxed">
            Finis les loyers impayés, les négociations interminables et les déplacements stressants. Nous prenons en charge 100% de la chaîne locative avec une rigueur juridique et technologique sans compromis.
          </p>
        </div>

        <!-- 3 Piliers Bailleurs / Locataires / Biens -->
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          <!-- Carte 1 : Bailleurs -->
          <div class="glass-card p-8 md:p-10 flex flex-col justify-between group hover:border-lime-500/40" data-reveal="up" data-delay="0.1">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-lime-500/10 border border-lime-500/30 flex items-center justify-center text-lime-400 mb-8 shadow-glow-lime-sm">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <div class="badge-tag badge-lime mb-4">Pour les Bailleurs</div>
              <h3 class="text-2xl font-display font-extrabold text-white mb-4">Tranquillité Totale & Revenus Ponctuels</h3>
              <p class="text-slate-300 text-sm leading-relaxed mb-6">
                Reversement garanti de vos loyers chaque mois à date fixe. Accédez à votre tableau de bord SaaS 24/7 pour consulter vos encaissements et télécharger vos états financiers certifiés.
              </p>
              <ul class="space-y-3 text-xs text-slate-300 font-medium mb-8">
                <li class="flex items-center gap-2.5"><svg class="w-4 h-4 text-lime-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Reversement le 5 de chaque mois</li>
                <li class="flex items-center gap-2.5"><svg class="w-4 h-4 text-lime-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Sélection rigoureuse des locataires</li>
                <li class="flex items-center gap-2.5"><svg class="w-4 h-4 text-lime-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Gestion contentieuse prise en charge</li>
              </ul>
            </div>
            <a href="/gestion-locative" data-link class="text-lime-400 font-bold text-sm inline-flex items-center gap-2 group-hover:translate-x-1.5 transition-transform">
              Découvrir les offres bailleurs <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- Carte 2 : Locataires -->
          <div class="glass-card p-8 md:p-10 flex flex-col justify-between group hover:border-mint-500/40" data-reveal="up" data-delay="0.2">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-mint-500/10 border border-mint-500/30 flex items-center justify-center text-mint-400 mb-8 shadow-glow-mint-sm">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
              </div>
              <div class="badge-tag badge-mint mb-4">Pour les Locataires</div>
              <h3 class="text-2xl font-display font-extrabold text-white mb-4">Paiement Mobile & Quittances Instantanées</h3>
              <p class="text-slate-300 text-sm leading-relaxed mb-6">
                Payez votre loyer en toute sécurité depuis votre téléphone via Orange Money ou MTN Mobile Money. Recevez immédiatement votre quittance numérique avec valeur légale.
              </p>
              <ul class="space-y-3 text-xs text-slate-300 font-medium mb-8">
                <li class="flex items-center gap-2.5"><svg class="w-4 h-4 text-mint-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Paiement OM / MTN MoMo sans frais cachés</li>
                <li class="flex items-center gap-2.5"><svg class="w-4 h-4 text-mint-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Quittances certifiées par SMS / Email</li>
                <li class="flex items-center gap-2.5"><svg class="w-4 h-4 text-mint-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Assistance technique & maintenance 24/7</li>
              </ul>
            </div>
            <a href="/gestion-locative" data-link class="text-mint-400 font-bold text-sm inline-flex items-center gap-2 group-hover:translate-x-1.5 transition-transform">
              En savoir plus locataires <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>

          <!-- Carte 3 : Préservation des Biens -->
          <div class="glass-card p-8 md:p-10 flex flex-col justify-between group hover:border-lime-500/40" data-reveal="up" data-delay="0.3">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-forest-850 border border-white/10 flex items-center justify-center text-white mb-8">
                <svg class="w-7 h-7 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <div class="badge-tag badge-lime mb-4">Pour le Patrimoine</div>
              <h3 class="text-2xl font-display font-extrabold text-white mb-4">Entretien Technique & Valorisation</h3>
              <p class="text-slate-300 text-sm leading-relaxed mb-6">
                États des lieux numérisés avec photos haute définition, interventions de plomberie et d'électricité coordonnées par notre réseau de techniciens certifiés à Douala et Yaoundé.
              </p>
              <ul class="space-y-3 text-xs text-slate-300 font-medium mb-8">
                <li class="flex items-center gap-2.5"><svg class="w-4 h-4 text-lime-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> États des lieux d'entrée & de sortie certifiés</li>
                <li class="flex items-center gap-2.5"><svg class="w-4 h-4 text-lime-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Suivi des travaux et devis transparents</li>
                <li class="flex items-center gap-2.5"><svg class="w-4 h-4 text-lime-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg> Préservation de la valeur vénale du bien</li>
              </ul>
            </div>
            <a href="/contact" data-link class="text-white font-bold text-sm inline-flex items-center gap-2 group-hover:translate-x-1.5 transition-transform">
              Demander un état des lieux <svg class="w-4 h-4 text-lime-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 4 : TYPOLOGIES DE BIENS GÉRÉS (CARTES IMMERSIVES)         -->
      <!-- ================================================================= -->
      <section class="py-24 px-4 md:px-8 bg-forest-950/60 border-t border-white/10">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-16" data-reveal="up">
            <div>
              <div class="badge-tag badge-mint mb-3">Parc Immobilier Éligible</div>
              <h2 class="text-display-lg font-display font-extrabold text-white">
                Tous les Formats de Biens Sous Gestion
              </h2>
            </div>
            <p class="text-slate-400 text-sm md:text-base max-w-md mt-4 md:mt-0">
              Du studio étudiant à l'immeuble de bureaux d'affaires, nous adaptons le scoring et la gestion à chaque typologie de bien.
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <!-- 1. Immeubles de rapport -->
            <div class="glass-card p-6 relative overflow-hidden group hover:border-lime-500/40" data-reveal="up" data-delay="0.05">
              <div class="h-44 rounded-2xl bg-gradient-to-br from-forest-850 to-forest-950 border border-white/10 mb-5 flex flex-col justify-between p-5 relative overflow-hidden">
                <span class="badge-tag badge-lime self-start">Gestion Globale</span>
                <div class="text-lime-400 font-mono text-xs font-bold">Douala • Yaoundé</div>
              </div>
              <h3 class="text-xl font-display font-bold text-white mb-2">Immeubles de Rapport & Résidences</h3>
              <p class="text-xs text-slate-400 leading-relaxed">
                Gestion complète multi-lots : conciergerie, gardiennage, gestion des parties communes et reversement global mensuel.
              </p>
            </div>

            <!-- 2. Appartements haut standing -->
            <div class="glass-card p-6 relative overflow-hidden group hover:border-mint-500/40" data-reveal="up" data-delay="0.1">
              <div class="h-44 rounded-2xl bg-gradient-to-br from-forest-850 to-forest-950 border border-white/10 mb-5 flex flex-col justify-between p-5 relative overflow-hidden">
                <span class="badge-tag badge-mint self-start">Standing & Meublés</span>
                <div class="text-mint-400 font-mono text-xs font-bold">Bonapriso • Bastos • Denver</div>
              </div>
              <h3 class="text-xl font-display font-bold text-white mb-2">Appartements & Duplex</h3>
              <p class="text-xs text-slate-400 leading-relaxed">
                Sélection de locataires cadres, expatriés et diplomates avec garanties de solvabilité renforcées.
              </p>
            </div>

            <!-- 3. Studios & Chambres -->
            <div class="glass-card p-6 relative overflow-hidden group hover:border-lime-500/40" data-reveal="up" data-delay="0.15">
              <div class="h-44 rounded-2xl bg-gradient-to-br from-forest-850 to-forest-950 border border-white/10 mb-5 flex flex-col justify-between p-5 relative overflow-hidden">
                <span class="badge-tag badge-lime self-start">Forte Rotation</span>
                <div class="text-lime-400 font-mono text-xs font-bold">Akwa • Makepe • Odza</div>
              </div>
              <h3 class="text-xl font-display font-bold text-white mb-2">Studios Modernes & Chambres</h3>
              <p class="text-xs text-slate-400 leading-relaxed">
                Remplissage rapide grâce à notre base de demandeurs qualifiés et encaissement automatisé par Mobile Money.
              </p>
            </div>

            <!-- 4. Magasins & Boutiques -->
            <div class="glass-card p-6 relative overflow-hidden group hover:border-mint-500/40" data-reveal="up" data-delay="0.2">
              <div class="h-44 rounded-2xl bg-gradient-to-br from-forest-850 to-forest-950 border border-white/10 mb-5 flex flex-col justify-between p-5 relative overflow-hidden">
                <span class="badge-tag badge-mint self-start">Baux Commerciaux</span>
                <div class="text-mint-400 font-mono text-xs font-bold">Centres Commerciaux • Rues Marchandes</div>
              </div>
              <h3 class="text-xl font-display font-bold text-white mb-2">Magasins & Boutiques</h3>
              <p class="text-xs text-slate-400 leading-relaxed">
                Rédaction de baux commerciaux stricts conformes à l'OHADA, recouvrement des charges et suivi de l'activité.
              </p>
            </div>

            <!-- 5. Bureaux & Plateaux -->
            <div class="glass-card p-6 relative overflow-hidden group hover:border-lime-500/40" data-reveal="up" data-delay="0.25">
              <div class="h-44 rounded-2xl bg-gradient-to-br from-forest-850 to-forest-950 border border-white/10 mb-5 flex flex-col justify-between p-5 relative overflow-hidden">
                <span class="badge-tag badge-lime self-start">Corporate</span>
                <div class="text-lime-400 font-mono text-xs font-bold">Bonanjo • Bastos Corporate</div>
              </div>
              <h3 class="text-xl font-display font-bold text-white mb-2">Bureaux d'Affaires & Coworking</h3>
              <p class="text-xs text-slate-400 leading-relaxed">
                Gestion des contrats pour entreprises, PME et multinationales avec facturation et reversements bancaires.
              </p>
            </div>

            <!-- 6. Entrepôts & Espaces Logistiques -->
            <div class="glass-card p-6 relative overflow-hidden group hover:border-mint-500/40" data-reveal="up" data-delay="0.3">
              <div class="h-44 rounded-2xl bg-gradient-to-br from-forest-850 to-forest-950 border border-white/10 mb-5 flex flex-col justify-between p-5 relative overflow-hidden">
                <span class="badge-tag badge-mint self-start">Industriel & Fret</span>
                <div class="text-mint-400 font-mono text-xs font-bold">Zone Portuaire • Périphérie</div>
              </div>
              <h3 class="text-xl font-display font-bold text-white mb-2">Espaces Commerciaux & Entrepôts</h3>
              <p class="text-xs text-slate-400 leading-relaxed">
                Surfaces de stockage, logistique portuaire et dépôts industriels avec baux longue durée sécurisés.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 5 : APERÇU DE LA PLATEFORME SAAS & MOCKUPS INTERACTIFS    -->
      <!-- ================================================================= -->
      <section class="py-28 px-4 md:px-8 max-w-7xl mx-auto">
        <div class="glass-card-accent p-8 md:p-14 rounded-4xl border-mint-500/30 relative overflow-hidden shadow-2xl">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <!-- Colonne Explicative -->
            <div class="lg:col-span-5 space-y-6" data-reveal="left">
              <div class="badge-tag badge-lime">Technologie Propriétaire</div>
              <h2 class="text-display-lg font-display font-extrabold text-white leading-tight">
                La Plateforme SaaS Qui Transforme Votre Gestion
              </h2>
              <p class="text-slate-300 text-sm md:text-base leading-relaxed">
                Connectez-vous depuis n'importe où dans le monde (Douala, Yaoundé, Paris, Montréal, New York) pour piloter l'intégralité de votre portefeuille locatif en temps réel.
              </p>

              <div class="space-y-4 pt-2">
                <div class="flex items-start gap-3.5">
                  <div class="w-7 h-7 rounded-lg bg-lime-500/20 text-lime-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <h4 class="text-white font-bold text-sm">Tableau de bord financier en temps réel</h4>
                    <p class="text-xs text-slate-400">Total loyers encaissés, état des comptes, reversements bancaires prévus.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3.5">
                  <div class="w-7 h-7 rounded-lg bg-mint-500/20 text-mint-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <h4 class="text-white font-bold text-sm">Quittances & Reçus fiscaux certifiés</h4>
                    <p class="text-xs text-slate-400">Génération automatique instantanée au format PDF avec signature électronique.</p>
                  </div>
                </div>
                <div class="flex items-start gap-3.5">
                  <div class="w-7 h-7 rounded-lg bg-lime-500/20 text-lime-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</div>
                  <div>
                    <h4 class="text-white font-bold text-sm">Paiements Orange Money & MTN MoMo intégrés</h4>
                    <p class="text-xs text-slate-400">Rapprochement bancaire automatisé sans risque d'erreur humaine.</p>
                  </div>
                </div>
              </div>

              <div class="pt-4">
                <a href="/gestion-locative" data-link class="btn-primary" data-magnetic>
                  <span>Tester la Démo SaaS</span>
                </a>
              </div>
            </div>

            <!-- Colonne Mockup SaaS Interactif -->
            <div class="lg:col-span-7" data-reveal="right">
              <div class="rounded-3xl bg-forest-950/90 border border-white/15 p-6 shadow-2xl backdrop-blur-2xl">
                <!-- En-tête Mockup -->
                <div class="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
                  <div class="flex items-center gap-3">
                    <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
                    <span class="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                    <span class="w-3 h-3 rounded-full bg-green-500/80"></span>
                    <span class="text-xs font-mono text-slate-400 ml-2">saas.multibusiness-sarl.com/bailleur/dashboard</span>
                  </div>
                  <span class="px-2.5 py-0.5 rounded-full bg-lime-500/10 text-lime-400 border border-lime-500/30 text-[10px] font-bold uppercase">En direct</span>
                </div>

                <!-- Contenu Mockup Dashboard -->
                <div class="space-y-6">
                  <!-- KPI Cards du Mockup -->
                  <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div class="p-3.5 rounded-2xl bg-forest-900/60 border border-white/5">
                      <span class="text-[11px] text-slate-400 block mb-1">Loyers du Mois</span>
                      <span class="text-lg md:text-xl font-mono font-bold text-white">8 450 000 <span class="text-xs text-lime-400">FCFA</span></span>
                    </div>
                    <div class="p-3.5 rounded-2xl bg-forest-900/60 border border-white/5">
                      <span class="text-[11px] text-slate-400 block mb-1">Taux Recouvrement</span>
                      <span class="text-lg md:text-xl font-mono font-bold text-lime-400">100 %</span>
                    </div>
                    <div class="p-3.5 rounded-2xl bg-forest-900/60 border border-white/5 col-span-2 sm:col-span-1">
                      <span class="text-[11px] text-slate-400 block mb-1">Reversement Prévu</span>
                      <span class="text-lg md:text-xl font-mono font-bold text-mint-400">05 Octobre</span>
                    </div>
                  </div>

                  <!-- Dernières Transactions Simulées -->
                  <div class="p-4 rounded-2xl bg-forest-900/40 border border-white/5 space-y-3">
                    <div class="flex items-center justify-between text-xs font-semibold text-slate-300 border-b border-white/5 pb-2">
                      <span>Derniers Paiements Encaissés</span>
                      <span class="text-mint-400 font-mono">Quittance Auto</span>
                    </div>

                    <div class="flex items-center justify-between text-xs">
                      <div class="flex items-center gap-2.5">
                        <div class="w-7 h-7 rounded-lg bg-orange-500/20 text-orange-400 font-bold flex items-center justify-center text-[10px]">OM</div>
                        <div>
                          <div class="font-bold text-white">Appartement B4 - Bonapriso</div>
                          <div class="text-[10px] text-slate-400">Orange Money • 10:14</div>
                        </div>
                      </div>
                      <span class="font-mono font-bold text-white">+ 350 000 FCFA</span>
                    </div>

                    <div class="flex items-center justify-between text-xs">
                      <div class="flex items-center gap-2.5">
                        <div class="w-7 h-7 rounded-lg bg-yellow-500/20 text-yellow-400 font-bold flex items-center justify-center text-[10px]">MTN</div>
                        <div>
                          <div class="font-bold text-white">Magasin 12 - Akwa Commercial</div>
                          <div class="text-[10px] text-slate-400">MTN MoMo • 09:30</div>
                        </div>
                      </div>
                      <span class="font-mono font-bold text-white">+ 600 000 FCFA</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 6 : PROCESSUS EN ÉTAPES (STORYTELLING)                    -->
      <!-- ================================================================= -->
      <section class="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div class="text-center max-w-3xl mx-auto mb-20" data-reveal="up">
          <div class="badge-tag badge-lime mb-3">Parcours Propriétaire</div>
          <h2 class="text-display-lg font-display font-extrabold text-white mb-6">
            Confier Votre Bien en 4 Étapes Simples
          </h2>
          <p class="text-slate-300 text-sm md:text-base leading-relaxed">
            De l'audit initial au reversement mensuel de vos loyers, notre méthodologie est 100% transparente.
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <!-- Étape 1 -->
          <div class="glass-card p-8 flex flex-col justify-between relative group hover:border-lime-500/40" data-reveal="up" data-delay="0.1">
            <div>
              <div class="text-4xl font-display font-black text-lime-400 mb-6 font-mono">01</div>
              <h3 class="text-lg font-display font-bold text-white mb-3">Audit & Estimation Gratuite</h3>
              <p class="text-xs text-slate-400 leading-relaxed">
                Visite sur place à Douala ou Yaoundé, audit de l'état du bien et détermination du loyer optimal selon le marché.
              </p>
            </div>
            <div class="pt-6 border-t border-white/5 text-[11px] font-mono text-lime-400">Sans engagement</div>
          </div>

          <!-- Étape 2 -->
          <div class="glass-card p-8 flex flex-col justify-between relative group hover:border-mint-500/40" data-reveal="up" data-delay="0.2">
            <div>
              <div class="text-4xl font-display font-black text-mint-400 mb-6 font-mono">02</div>
              <h3 class="text-lg font-display font-bold text-white mb-3">Scoring & Signature Mandat</h3>
              <p class="text-xs text-slate-400 leading-relaxed">
                Vérification des fiches de paie et solvabilité des locataires, signature du mandat de gestion légal.
              </p>
            </div>
            <div class="pt-6 border-t border-white/5 text-[11px] font-mono text-mint-400">Bail certifié OHADA</div>
          </div>

          <!-- Étape 3 -->
          <div class="glass-card p-8 flex flex-col justify-between relative group hover:border-lime-500/40" data-reveal="up" data-delay="0.3">
            <div>
              <div class="text-4xl font-display font-black text-lime-400 mb-6 font-mono">03</div>
              <h3 class="text-lg font-display font-bold text-white mb-3">Encaissement & Reversement</h3>
              <p class="text-xs text-slate-400 leading-relaxed">
                Paiements automatisés par Orange Money / MTN MoMo et reversement direct sur votre compte chaque mois.
              </p>
            </div>
            <div class="pt-6 border-t border-white/5 text-[11px] font-mono text-lime-400">Date fixe garantie</div>
          </div>

          <!-- Étape 4 -->
          <div class="glass-card p-8 flex flex-col justify-between relative group hover:border-mint-500/40" data-reveal="up" data-delay="0.4">
            <div>
              <div class="text-4xl font-display font-black text-mint-400 mb-6 font-mono">04</div>
              <h3 class="text-lg font-display font-bold text-white mb-3">Suivi SaaS & Quittances</h3>
              <p class="text-xs text-slate-400 leading-relaxed">
                Téléchargement de vos rapports financiers mensuels, suivi des interventions techniques et assistance 24/7.
              </p>
            </div>
            <div class="pt-6 border-t border-white/5 text-[11px] font-mono text-mint-400">Espace client 24/7</div>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 7 : LES 3 SERVICES SECONDAIRES (PÔLE AFFAIRES)            -->
      <!-- ================================================================= -->
      <section class="py-24 px-4 md:px-8 bg-forest-950/80 border-t border-white/10">
        <div class="max-w-7xl mx-auto">
          <div class="text-center max-w-3xl mx-auto mb-16" data-reveal="up">
            <div class="badge-tag badge-mint mb-3">Pôle Conseil & Affaires</div>
            <h2 class="text-display-lg font-display font-extrabold text-white mb-4">
              Nos 3 Autres Services Stratégiques
            </h2>
            <p class="text-slate-400 text-sm md:text-base">
              Au-delà de l'immobilier, nous sécurisons vos opérations d'entreprise au Cameroun.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <!-- Service 1 : Fiscalité -->
            <div class="glass-card p-8 flex flex-col justify-between group hover:border-mint-500/40" data-reveal="up" data-delay="0.1">
              <div>
                <div class="badge-tag badge-mint mb-4">Fiscalité</div>
                <h3 class="text-xl font-display font-bold text-white mb-3">Conseil & Fiscalité d'Entreprise</h3>
                <p class="text-xs text-slate-400 leading-relaxed mb-6">
                  Déclarations fiscales mensuelles (TVA, précomptes, DSF), régularisation des taxes foncières et optimisation en conformité stricte avec le CGI du Cameroun.
                </p>
              </div>
              <a href="/services" data-link class="text-mint-400 font-bold text-xs inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Consulter les experts fiscaux <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </a>
            </div>

            <!-- Service 2 : Création d'entreprise -->
            <div class="glass-card p-8 flex flex-col justify-between group hover:border-lime-500/40" data-reveal="up" data-delay="0.2">
              <div>
                <div class="badge-tag badge-lime mb-4">Juridique & Création</div>
                <h3 class="text-xl font-display font-bold text-white mb-3">Création d'Entreprise Clé en Main</h3>
                <p class="text-xs text-slate-400 leading-relaxed mb-6">
                  Rédaction des statuts (SARL, SAS, ETS), immatriculation express au RCCM, délivrance du NIU et domiciliation juridique à Douala et Yaoundé.
                </p>
              </div>
              <a href="/services" data-link class="text-lime-400 font-bold text-xs inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Lancer mon entreprise <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </a>
            </div>

            <!-- Service 3 : Dédouanement -->
            <div class="glass-card p-8 flex flex-col justify-between group hover:border-mint-500/40" data-reveal="up" data-delay="0.3">
              <div>
                <div class="badge-tag badge-mint mb-4">Transit & Douane</div>
                <h3 class="text-xl font-display font-bold text-white mb-3">Dédouanement & Fret Logistique</h3>
                <p class="text-xs text-slate-400 leading-relaxed mb-6">
                  Traitement rapide des formalités douanières au Port Autonome de Douala / Kribi et aéroports, transit maritime/aérien et sécurisation des flux import/export.
                </p>
              </div>
              <a href="/services" data-link class="text-mint-400 font-bold text-xs inline-flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                Contacter un transitaire <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- SECTION 8 : COMPTEURS, TÉMOIGNAGES & FAQ & CTA FINAL              -->
      <!-- ================================================================= -->
      <section class="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        
        <!-- Compteurs Animés -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24" data-reveal="up">
          <div class="glass-card p-8 text-center">
            <div class="text-4xl md:text-5xl font-display font-black text-lime-400 mb-2">
              <span data-counter="98" data-suffix="%">0%</span>
            </div>
            <div class="text-xs font-bold uppercase tracking-wider text-slate-300">Taux Recouvrement</div>
            <p class="text-[11px] text-slate-500 mt-1">Paiements automatisés MoMo</p>
          </div>

          <div class="glass-card p-8 text-center">
            <div class="text-4xl md:text-5xl font-display font-black text-white mb-2">
              <span data-counter="500" data-suffix="+">0+</span>
            </div>
            <div class="text-xs font-bold uppercase tracking-wider text-slate-300">Lots sous gestion</div>
            <p class="text-[11px] text-slate-500 mt-1">Douala & Yaoundé</p>
          </div>

          <div class="glass-card p-8 text-center">
            <div class="text-4xl md:text-5xl font-display font-black text-mint-400 mb-2">
              <span data-counter="100" data-suffix="%">0%</span>
            </div>
            <div class="text-xs font-bold uppercase tracking-wider text-slate-300">Quittances Délivrées</div>
            <p class="text-[11px] text-slate-500 mt-1">Format numérique certifié</p>
          </div>

          <div class="glass-card p-8 text-center">
            <div class="text-4xl md:text-5xl font-display font-black text-white mb-2">
              <span data-counter="24" data-suffix="/7">0/7</span>
            </div>
            <div class="text-xs font-bold uppercase tracking-wider text-slate-300">Accès Plateforme SaaS</div>
            <p class="text-[11px] text-slate-500 mt-1">Bailleurs & Locataires</p>
          </div>
        </div>

        <!-- Témoignages Bailleurs & Locataires -->
        <div class="mb-24" data-reveal="up">
          <div class="text-center max-w-2xl mx-auto mb-12">
            <div class="badge-tag badge-lime mb-3">Retours d'Expérience</div>
            <h2 class="text-display-lg font-display font-extrabold text-white">Ce Que Disent Nos Bailleurs</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Avis 1 (Diaspora) -->
            <div class="glass-card p-8 flex flex-col justify-between">
              <p class="text-xs text-slate-300 italic leading-relaxed mb-6">
                « Vivant en France, gérer mon immeuble à Douala (Makepe) était un cauchemar d'impayés. Depuis 2 ans avec Multi Business SARL, je reçois mes virements le 5 du mois sans faute et je consulte tout sur mon espace en ligne. »
              </p>
              <div>
                <div class="font-bold text-white text-sm">Dr. Patrick E.</div>
                <div class="text-xs text-lime-400">Bailleur Diaspora (Paris / Douala)</div>
              </div>
            </div>

            <!-- Avis 2 (Résident Yaoundé) -->
            <div class="glass-card p-8 flex flex-col justify-between">
              <p class="text-xs text-slate-300 italic leading-relaxed mb-6">
                « La sélection de mes locataires pour ma résidence à Bastos est irréprochable. Les quittances Orange Money et MTN MoMo automatisées évitent toute contestation. Un vrai professionnalisme. »
              </p>
              <div>
                <div class="font-bold text-white text-sm">Mme Chantal N.</div>
                <div class="text-xs text-mint-400">Propriétaire Résidente (Yaoundé)</div>
              </div>
            </div>

            <!-- Avis 3 (Commerces Douala) -->
            <div class="glass-card p-8 flex flex-col justify-between">
              <p class="text-xs text-slate-300 italic leading-relaxed mb-6">
                « Ils gèrent nos 8 magasins à Akwa. Les contrats OHADA sont blindés et nous n'avons plus aucun litige locatif. Je recommande à 100%. »
              </p>
              <div>
                <div class="font-bold text-white text-sm">M. Henri K.</div>
                <div class="text-xs text-lime-400">Investisseur Immobilier (Douala)</div>
              </div>
            </div>
          </div>
        </div>

        <!-- FAQ Rapide Accordéon -->
        <div class="max-w-3xl mx-auto mb-24" data-reveal="up" data-accordion-group>
          <div class="text-center mb-10">
            <h2 class="text-heading-xl font-display font-bold text-white mb-2">Questions Fréquentes</h2>
            <p class="text-xs text-slate-400">Tout ce que vous devez savoir avant de nous confier votre bien.</p>
          </div>

          <div class="space-y-3">
            <div class="border border-white/10 rounded-2xl p-4 bg-forest-950/40" data-accordion-item>
              <button class="w-full flex items-center justify-between text-left font-semibold text-sm text-white" data-accordion-trigger>
                <span>Comment sont sécurisés les reversements de loyers ?</span>
                <svg class="w-4 h-4 text-lime-400 transition-transform duration-300" data-accordion-icon fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="mt-3 pt-3 border-t border-white/5 text-xs text-slate-400 hidden leading-relaxed" data-accordion-content>
                Les loyers sont encaissés sur nos comptes séquestres certifiés via nos passerelles bancaires et Mobile Money. Le reversement est exécuté à date fixe chaque mois par virement direct ou Mobile Money sur votre compte personnel.
              </div>
            </div>

            <div class="border border-white/10 rounded-2xl p-4 bg-forest-950/40" data-accordion-item>
              <button class="w-full flex items-center justify-between text-left font-semibold text-sm text-white" data-accordion-trigger>
                <span>Que se passe-t-il en cas de retard de paiement du locataire ?</span>
                <svg class="w-4 h-4 text-lime-400 transition-transform duration-300" data-accordion-icon fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="mt-3 pt-3 border-t border-white/5 text-xs text-slate-400 hidden leading-relaxed" data-accordion-content>
                Notre système SaaS envoie automatiquement des relances par SMS et WhatsApp dès le premier jour de retard. En cas de persistance, nos juristes et gestionnaires de terrain prennent le relais immédiatement sans frais de contentieux supplémentaires pour le bailleur.
              </div>
            </div>

            <div class="border border-white/10 rounded-2xl p-4 bg-forest-950/40" data-accordion-item>
              <button class="w-full flex items-center justify-between text-left font-semibold text-sm text-white" data-accordion-trigger>
                <span>Combien coûtent vos honoraires de gestion ?</span>
                <svg class="w-4 h-4 text-lime-400 transition-transform duration-300" data-accordion-icon fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="mt-3 pt-3 border-t border-white/5 text-xs text-slate-400 hidden leading-relaxed" data-accordion-content>
                Nos honoraires sont calculés sous forme d'un pourcentage transparent et déductible sur les encaissements réels (aucun frais si le bien est vacant). Contactez-nous pour une simulation personnalisée selon le volume de votre parc.
              </div>
            </div>
          </div>
        </div>

        <!-- Appel à l'Action Final (Grand CTA) -->
        <div class="glass-card-accent p-10 md:p-16 rounded-4xl text-center relative overflow-hidden shadow-2xl" data-reveal="up">
          <div class="badge-tag badge-lime mb-4">Passez à la Sérénité Immobilière</div>
          <h2 class="text-display-lg md:text-display-xl font-display font-extrabold text-white mb-6 max-w-3xl mx-auto">
            Prêt à Valoriser Votre Patrimoine Sans le Moindre Stress ?
          </h2>
          <p class="text-slate-300 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Nos équipes à Douala et Yaoundé sont prêtes à auditer vos biens et à vous accompagner vers une gestion locative 100% digitalisée et sécurisée.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-5">
            <a href="${CONFIG.contact.whatsapp.link}" target="_blank" rel="noopener" class="btn-primary !px-8 !py-4 text-base" data-magnetic>
              <span>Échanger sur WhatsApp en direct</span>
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            </a>
            <a href="/contact" data-link class="btn-secondary !px-8 !py-4 text-base" data-magnetic>
              <span>Prendre rendez-vous en agence</span>
            </a>
          </div>
        </div>

      </section>
    `;
  },

  async init(container) {
    console.log('⚡ [Home View] Initialisation complète de la page d\'accueil');
    this._cleanups = [];

    // Animation spéciale du titre du Hero si GSAP est présent
    if (typeof window !== 'undefined' && window.gsap && container) {
      const heroTitle = container.querySelector('#hero-title');
      if (heroTitle) {
        window.gsap.fromTo(
          heroTitle,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
        );
      }
    }
  },

  destroy() {
    console.log('🧹 [Home View] Nettoyage complet des composants de l\'accueil');
    this._cleanups.forEach((c) => {
      try { c(); } catch (e) {}
    });
    this._cleanups = [];
  }
};
