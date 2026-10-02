/**
 * Vue GESTION LOCATIVE - MULTI BUSINESS SARL (Phase 4 Production)
 * La page la plus riche et la plus importante du site (70% du positionnement)
 */
import { CONFIG } from '../config.js';
import { showToast, initAccordions, initTabs } from '../ui.js';

export default {
  meta: {
    title: "Gestion Locative Immobilière & SaaS Bailleurs | Douala & Yaoundé",
    description: "MULTI BUSINESS SARL : Solution complète de gestion locative au Cameroun. Recherche de locataires, encaissement Orange Money & MTN MoMo, quittances certifiées et reversements ponctuels le 5 du mois."
  },

  _cleanups: [],

  async render() {
    return `
      <!-- ================================================================= -->
      <!-- 1. HERO DÉDIÉ AVEC ACCROCHE FORTE                                 -->
      <!-- ================================================================= -->
      <section class="relative min-h-[85vh] flex items-center justify-center pt-32 pb-20 px-4 md:px-8 overflow-hidden">
        <div class="absolute inset-0 bg-mesh-dark opacity-85 pointer-events-none"></div>
        <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-lime-500/10 rounded-full blur-[150px] pointer-events-none"></div>

        <div class="container max-w-6xl mx-auto text-center relative z-10" data-stagger-item>
          
          <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-forest-900/90 border border-lime-500/40 text-lime-400 text-xs font-bold tracking-widest uppercase mb-8 shadow-glow-lime-sm">
            <span class="w-2 h-2 rounded-full bg-lime-400 animate-ping"></span>
            <span>Pôle Majeur • 70% de Notre Expertise Métier</span>
          </div>

          <h1 class="text-display-xl md:text-display-2xl font-display font-black text-white tracking-tight mb-8 leading-[1.08] max-w-5xl mx-auto">
            Votre patrimoine immobilier géré avec rigueur.<br/>
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-mint-400 to-mint-500">
              0 impayé. 0 litige. 100% de sérénité.
            </span>
          </h1>

          <p class="text-lg md:text-2xl text-slate-300 font-normal max-w-3xl mx-auto mb-12 leading-relaxed">
            Bailleurs résidents et de la diaspora : confiez-nous vos immeubles, appartements, studios et commerces à Douala et Yaoundé. Encaissez vos loyers chaque mois à date fixe en toute transparence grâce à notre plateforme SaaS propriétaire.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-5 mb-14">
            <a href="#catalogue-biens" class="btn-primary" data-magnetic>
              <span>Explorer les types de biens gérés</span>
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
            <a href="${CONFIG.contact.whatsapp.link}" target="_blank" rel="noopener" class="btn-secondary" data-magnetic>
              <span>Estimer mes revenus locatifs</span>
              <svg class="w-4 h-4 text-mint-400" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
            </a>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-slate-400 pt-6 border-t border-white/10">
            <span class="flex items-center gap-2"><span class="text-lime-400 font-bold">✓</span> Reversement garanti le 5 du mois</span>
            <span class="flex items-center gap-2"><span class="text-lime-400 font-bold">✓</span> Rapprochement Orange Money & MTN MoMo</span>
            <span class="flex items-center gap-2"><span class="text-lime-400 font-bold">✓</span> Baux conformes droit OHADA</span>
            <span class="flex items-center gap-2"><span class="text-lime-400 font-bold">✓</span> Plateforme SaaS Bailleurs 24/7</span>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 2. OFFRE BAILLEURS vs LOCATAIRES (INTERACTIVE SWITCH)             -->
      <!-- ================================================================= -->
      <section class="py-24 px-4 md:px-8 max-w-7xl mx-auto" data-tabs>
        <div class="text-center max-w-3xl mx-auto mb-14" data-reveal="up">
          <div class="badge-tag badge-mint mb-3">Deux Expériences Sur-Mesure</div>
          <h2 class="text-display-lg font-display font-extrabold text-white mb-4">
            Une Plateforme, Deux Espaces Dédiés
          </h2>
          <p class="text-slate-300 text-sm md:text-base">
            Que vous soyez propriétaire cherchant la rentabilité maximale ou locataire en quête de transparence, découvrez nos fonctionnalités dédiées.
          </p>

          <!-- Bouton de bascule interactif -->
          <div class="inline-flex p-1.5 rounded-full bg-forest-900 border border-white/10 mt-8 shadow-luxury">
            <button class="py-3 px-8 rounded-full text-xs md:text-sm font-extrabold uppercase tracking-wider transition-all bg-lime-500 text-forest-950 shadow-glow-lime-sm" data-tab-btn="bailleurs-tab">
              Espace Bailleurs (Propriétaires)
            </button>
            <button class="py-3 px-8 rounded-full text-xs md:text-sm font-extrabold uppercase tracking-wider transition-all text-slate-300 hover:text-white" data-tab-btn="locataires-tab">
              Espace Locataires
            </button>
          </div>
        </div>

        <!-- CONTENU ONGLET 1 : OFFRE BAILLEURS -->
        <div data-tab-content="bailleurs-tab" class="space-y-8" data-reveal="up">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div class="glass-card p-8 group hover:border-lime-500/40">
              <div class="w-12 h-12 rounded-2xl bg-lime-500/10 text-lime-400 flex items-center justify-center font-bold text-lg mb-6 shadow-glow-lime-sm">01</div>
              <h3 class="text-xl font-display font-bold text-white mb-3">Sélection & Scoring Solvabilité</h3>
              <p class="text-slate-300 text-xs md:text-sm leading-relaxed mb-4">
                Vérification rigoureuse des pièces d'identité, bulletins de paie, garanties bancaires et antécédents locatifs pour ne retenir que les profils de confiance.
              </p>
              <span class="text-xs font-mono text-lime-400 font-semibold">Taux de sélection < 25%</span>
            </div>

            <div class="glass-card p-8 group hover:border-lime-500/40">
              <div class="w-12 h-12 rounded-2xl bg-lime-500/10 text-lime-400 flex items-center justify-center font-bold text-lg mb-6 shadow-glow-lime-sm">02</div>
              <h3 class="text-xl font-display font-bold text-white mb-3">Encaissement & Rapprochement</h3>
              <p class="text-slate-300 text-xs md:text-sm leading-relaxed mb-4">
                Passerelles automatisées Orange Money, MTN MoMo et virements. Les loyers sont collectés sur comptes sécurisés avec réconciliation comptable instantanée.
              </p>
              <span class="text-xs font-mono text-lime-400 font-semibold">0 erreur manuelle</span>
            </div>

            <div class="glass-card p-8 group hover:border-lime-500/40">
              <div class="w-12 h-12 rounded-2xl bg-lime-500/10 text-lime-400 flex items-center justify-center font-bold text-lg mb-6 shadow-glow-lime-sm">03</div>
              <h3 class="text-xl font-display font-bold text-white mb-3">Reversement Garanti le 5 du Mois</h3>
              <p class="text-slate-300 text-xs md:text-sm leading-relaxed mb-4">
                Vos fonds vous sont transférés par virement bancaire ou Mobile Money chaque mois sans le moindre retard, même en cas de décalage avec le locataire.
              </p>
              <span class="text-xs font-mono text-lime-400 font-semibold">Ponctualité 100% garantie</span>
            </div>

            <div class="glass-card p-8 group hover:border-lime-500/40">
              <div class="w-12 h-12 rounded-2xl bg-lime-500/10 text-lime-400 flex items-center justify-center font-bold text-lg mb-6 shadow-glow-lime-sm">04</div>
              <h3 class="text-xl font-display font-bold text-white mb-3">Maintenance & Artisans Certifiés</h3>
              <p class="text-slate-300 text-xs md:text-sm leading-relaxed mb-4">
                Prise en charge des urgences (plomberie, électricité, étanchéité) par notre réseau de prestataires agréés à Douala et Yaoundé avec devis pré-validés.
              </p>
              <span class="text-xs font-mono text-lime-400 font-semibold">Intervention sous 24h</span>
            </div>

            <div class="glass-card p-8 group hover:border-lime-500/40">
              <div class="w-12 h-12 rounded-2xl bg-lime-500/10 text-lime-400 flex items-center justify-center font-bold text-lg mb-6 shadow-glow-lime-sm">05</div>
              <h3 class="text-xl font-display font-bold text-white mb-3">Reporting SaaS & Fiscalité</h3>
              <p class="text-slate-300 text-xs md:text-sm leading-relaxed mb-4">
                Export en 1 clic de vos états financiers mensuels et annuels pour vos déclarations d'impôts fonciers (CGI Cameroun) avec assistance de notre pôle fiscal.
              </p>
              <span class="text-xs font-mono text-lime-400 font-semibold">Conformité fiscale totale</span>
            </div>

            <div class="glass-card p-8 group hover:border-lime-500/40">
              <div class="w-12 h-12 rounded-2xl bg-lime-500/10 text-lime-400 flex items-center justify-center font-bold text-lg mb-6 shadow-glow-lime-sm">06</div>
              <h3 class="text-xl font-display font-bold text-white mb-3">Recouvrement & Gestion Contentieuse</h3>
              <p class="text-slate-300 text-xs md:text-sm leading-relaxed mb-4">
                Relances automatisées diplomatiques par SMS/WhatsApp, suivi par nos juristes et exécution des procédures légales d'expulsion si nécessaire sans frais d'avocat cachés.
              </p>
              <span class="text-xs font-mono text-lime-400 font-semibold">0 stress de procédure</span>
            </div>

          </div>
        </div>

        <!-- CONTENU ONGLET 2 : OFFRE LOCATAIRES -->
        <div data-tab-content="locataires-tab" class="space-y-8 hidden" data-reveal="up">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div class="glass-card p-8 group hover:border-mint-500/40">
              <div class="w-12 h-12 rounded-2xl bg-mint-500/10 text-mint-400 flex items-center justify-center font-bold text-lg mb-6 shadow-glow-mint-sm">01</div>
              <h3 class="text-xl font-display font-bold text-white mb-3">Logements 100% Vérifiés</h3>
              <p class="text-slate-300 text-xs md:text-sm leading-relaxed mb-4">
                Chaque logement proposé fait l'objet d'un contrôle technique strict : état des compteurs Eneo/CDE, climatisation, plomberie et sécurité du quartier.
              </p>
              <span class="text-xs font-mono text-mint-400 font-semibold">Zéro mauvaise surprise</span>
            </div>

            <div class="glass-card p-8 group hover:border-mint-500/40">
              <div class="w-12 h-12 rounded-2xl bg-mint-500/10 text-mint-400 flex items-center justify-center font-bold text-lg mb-6 shadow-glow-mint-sm">02</div>
              <h3 class="text-xl font-display font-bold text-white mb-3">Paiement Mobile Money 1 Clic</h3>
              <p class="text-slate-300 text-xs md:text-sm leading-relaxed mb-4">
                Payez votre loyer depuis votre canapé via Orange Money (#150#) ou MTN Mobile Money (*126#) sans faire la queue à la banque ni vous déplacer.
              </p>
              <span class="text-xs font-mono text-mint-400 font-semibold">Disponible 24h/24 & 7j/7</span>
            </div>

            <div class="glass-card p-8 group hover:border-mint-500/40">
              <div class="w-12 h-12 rounded-2xl bg-mint-500/10 text-mint-400 flex items-center justify-center font-bold text-lg mb-6 shadow-glow-mint-sm">03</div>
              <h3 class="text-xl font-display font-bold text-white mb-3">Quittances Numériques Instantanées</h3>
              <p class="text-slate-300 text-xs md:text-sm leading-relaxed mb-4">
                Dès confirmation de votre paiement mobile, votre quittance PDF officielle avec signature électronique et QR code certifié vous est envoyée par SMS et email.
              </p>
              <span class="text-xs font-mono text-mint-400 font-semibold">Valeur juridique certifiée</span>
            </div>

            <div class="glass-card p-8 group hover:border-mint-500/40">
              <div class="w-12 h-12 rounded-2xl bg-mint-500/10 text-mint-400 flex items-center justify-center font-bold text-lg mb-6 shadow-glow-mint-sm">04</div>
              <h3 class="text-xl font-display font-bold text-white mb-3">Signalement de Pannes 24/7</h3>
              <p class="text-slate-300 text-xs md:text-sm leading-relaxed mb-4">
                Un problème de plomberie ou d'électricité ? Déclarez-le en 2 clics sur votre espace locataire avec photos pour une intervention rapide d'un artisan agréé.
              </p>
              <span class="text-xs font-mono text-mint-400 font-semibold">Suivi d'intervention en direct</span>
            </div>

            <div class="glass-card p-8 group hover:border-mint-500/40">
              <div class="w-12 h-12 rounded-2xl bg-mint-500/10 text-mint-400 flex items-center justify-center font-bold text-lg mb-6 shadow-glow-mint-sm">05</div>
              <h3 class="text-xl font-display font-bold text-white mb-3">Baux Clairs & Transparent</h3>
              <p class="text-slate-300 text-xs md:text-sm leading-relaxed mb-4">
                Contrats de location rédigés en conformité avec la législation camerounaise et OHADA. Pas de clauses abusives ni de frais d'agence dissimulés.
              </p>
              <span class="text-xs font-mono text-mint-400 font-semibold">Protection légale garantie</span>
            </div>

            <div class="glass-card p-8 group hover:border-mint-500/40">
              <div class="w-12 h-12 rounded-2xl bg-mint-500/10 text-mint-400 flex items-center justify-center font-bold text-lg mb-6 shadow-glow-mint-sm">06</div>
              <h3 class="text-xl font-display font-bold text-white mb-3">Restitution Sécurisée de la Caution</h3>
              <p class="text-slate-300 text-xs md:text-sm leading-relaxed mb-4">
                Votre dépôt de garantie est conservé sur un compte séquestre dédié et restitué intégralement sous 15 jours après l'état des lieux de sortie conforme.
              </p>
              <span class="text-xs font-mono text-mint-400 font-semibold">100% de transparence</span>
            </div>

          </div>
        </div>

      </section>

      <!-- ================================================================= -->
      <!-- 3. CATALOGUE DES TYPES DE BIENS AVEC FILTRES ANIMÉS               -->
      <!-- ================================================================= -->
      <section id="catalogue-biens" class="py-24 px-4 md:px-8 bg-forest-950/70 border-t border-white/10">
        <div class="max-w-7xl mx-auto">
          
          <div class="text-center max-w-3xl mx-auto mb-12" data-reveal="up">
            <div class="badge-tag badge-lime mb-3">Typologies de Biens</div>
            <h2 class="text-display-lg font-display font-extrabold text-white mb-4">
              Notre Portefeuille de Biens Sous Gestion
            </h2>
            <p class="text-slate-400 text-sm md:text-base">
              Filtrez par catégorie pour découvrir nos standards d'excellence à Douala et Yaoundé.
            </p>
          </div>

          <!-- Filtres de Catégories Interactifs -->
          <div class="flex flex-wrap items-center justify-center gap-2 mb-12" id="property-filters" data-reveal="up">
            <button class="filter-btn active py-2 px-5 rounded-full text-xs font-bold transition-all bg-lime-500 text-forest-950 shadow-glow-lime-sm" data-filter="all">Tous les biens (7)</button>
            <button class="filter-btn py-2 px-5 rounded-full text-xs font-bold transition-all bg-forest-900 border border-white/10 text-slate-300 hover:text-white" data-filter="immeuble">Immeubles entiers</button>
            <button class="filter-btn py-2 px-5 rounded-full text-xs font-bold transition-all bg-forest-900 border border-white/10 text-slate-300 hover:text-white" data-filter="appartement">Appartements & Duplex</button>
            <button class="filter-btn py-2 px-5 rounded-full text-xs font-bold transition-all bg-forest-900 border border-white/10 text-slate-300 hover:text-white" data-filter="studio">Studios & Chambres</button>
            <button class="filter-btn py-2 px-5 rounded-full text-xs font-bold transition-all bg-forest-900 border border-white/10 text-slate-300 hover:text-white" data-filter="magasin">Magasins & Boutiques</button>
            <button class="filter-btn py-2 px-5 rounded-full text-xs font-bold transition-all bg-forest-900 border border-white/10 text-slate-300 hover:text-white" data-filter="bureau">Bureaux d'Affaires</button>
            <button class="filter-btn py-2 px-5 rounded-full text-xs font-bold transition-all bg-forest-900 border border-white/10 text-slate-300 hover:text-white" data-filter="entrepot">Espaces Commerciaux & Entrepôts</button>
          </div>

          <!-- Grille des Cartes de Biens -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="properties-grid">
            
            <!-- Carte 1 : Immeubles -->
            <div class="property-card glass-card p-6 flex flex-col justify-between" data-category="immeuble" data-reveal="up">
              <div>
                <div class="h-48 rounded-2xl bg-gradient-to-br from-forest-850 to-forest-950 border border-white/10 p-5 flex flex-col justify-between mb-5 relative overflow-hidden">
                  <div class="flex items-center justify-between">
                    <span class="badge-tag badge-lime">Immeuble Entier</span>
                    <span class="text-xs font-mono text-lime-400 font-bold">R+4 à R+7</span>
                  </div>
                  <div>
                    <div class="text-white font-bold text-sm">Résidence Prestige Akwa</div>
                    <div class="text-[11px] text-slate-400 font-mono">Douala • 16 Appartements</div>
                  </div>
                </div>
                <h3 class="text-lg font-display font-bold text-white mb-2">Immeubles de Rapport Résidentiels</h3>
                <p class="text-xs text-slate-400 leading-relaxed mb-4">
                  Prise en charge intégrale : conciergerie, sécurité, nettoyage, répartition des charges et reversement groupé le 5 du mois.
                </p>
                <div class="flex items-center gap-4 text-xs font-mono text-slate-300 py-3 border-t border-white/5 mb-4">
                  <span>Occupation : <strong class="text-lime-400">100%</strong></span>
                  <span>Gestion : <strong class="text-mint-400">Intégrale</strong></span>
                </div>
              </div>
              <a href="/contact" data-link class="btn-secondary !py-2.5 text-xs w-full text-center">Confier un immeuble</a>
            </div>

            <!-- Carte 2 : Appartements Standing -->
            <div class="property-card glass-card p-6 flex flex-col justify-between" data-category="appartement" data-reveal="up">
              <div>
                <div class="h-48 rounded-2xl bg-gradient-to-br from-forest-850 to-forest-950 border border-white/10 p-5 flex flex-col justify-between mb-5 relative overflow-hidden">
                  <div class="flex items-center justify-between">
                    <span class="badge-tag badge-mint">Appartement T4</span>
                    <span class="text-xs font-mono text-mint-400 font-bold">Haut Standing</span>
                  </div>
                  <div>
                    <div class="text-white font-bold text-sm">Duplex & Appartements Bastos</div>
                    <div class="text-[11px] text-slate-400 font-mono">Yaoundé • 180 à 250 m²</div>
                  </div>
                </div>
                <h3 class="text-lg font-display font-bold text-white mb-2">Appartements de Standing & Duplex</h3>
                <p class="text-xs text-slate-400 leading-relaxed mb-4">
                  Sélection ciblée de locataires solvables (cadres supérieurs, diplomates, ONG) et encaissement sécurisé par Mobile Money / virement.
                </p>
                <div class="flex items-center gap-4 text-xs font-mono text-slate-300 py-3 border-t border-white/5 mb-4">
                  <span>Loyer : <strong class="text-lime-400">350k - 1.2M FCFA</strong></span>
                  <span>Solvabilité : <strong class="text-mint-400">Scorée</strong></span>
                </div>
              </div>
              <a href="/contact" data-link class="btn-secondary !py-2.5 text-xs w-full text-center">Confier un appartement</a>
            </div>

            <!-- Carte 3 : Studios & Meublés -->
            <div class="property-card glass-card p-6 flex flex-col justify-between" data-category="studio" data-reveal="up">
              <div>
                <div class="h-48 rounded-2xl bg-gradient-to-br from-forest-850 to-forest-950 border border-white/10 p-5 flex flex-col justify-between mb-5 relative overflow-hidden">
                  <div class="flex items-center justify-between">
                    <span class="badge-tag badge-lime">Studio Moderne</span>
                    <span class="text-xs font-mono text-lime-400 font-bold">Climatisé</span>
                  </div>
                  <div>
                    <div class="text-white font-bold text-sm">Studios & Chambres Makepe</div>
                    <div class="text-[11px] text-slate-400 font-mono">Douala • 35 à 60 m²</div>
                  </div>
                </div>
                <h3 class="text-lg font-display font-bold text-white mb-2">Studios Modernes & Chambres</h3>
                <p class="text-xs text-slate-400 leading-relaxed mb-4">
                  Gestion des locations meublées et non meublées avec rotation optimisée et prélèvement ponctuel par MTN MoMo / Orange Money.
                </p>
                <div class="flex items-center gap-4 text-xs font-mono text-slate-300 py-3 border-t border-white/5 mb-4">
                  <span>Loyer : <strong class="text-lime-400">80k - 200k FCFA</strong></span>
                  <span>Vacance : <strong class="text-mint-400">< 10 jours</strong></span>
                </div>
              </div>
              <a href="/contact" data-link class="btn-secondary !py-2.5 text-xs w-full text-center">Confier un studio</a>
            </div>

            <!-- Carte 4 : Magasins & Boutiques -->
            <div class="property-card glass-card p-6 flex flex-col justify-between" data-category="magasin" data-reveal="up">
              <div>
                <div class="h-48 rounded-2xl bg-gradient-to-br from-forest-850 to-forest-950 border border-white/10 p-5 flex flex-col justify-between mb-5 relative overflow-hidden">
                  <div class="flex items-center justify-between">
                    <span class="badge-tag badge-mint">Commercial</span>
                    <span class="text-xs font-mono text-mint-400 font-bold">Bail OHADA</span>
                  </div>
                  <div>
                    <div class="text-white font-bold text-sm">Boutiques & Espaces Marchands</div>
                    <div class="text-[11px] text-slate-400 font-mono">Douala Akwa & Yaoundé Centre</div>
                  </div>
                </div>
                <h3 class="text-lg font-display font-bold text-white mb-2">Magasins & Boutiques Commerciales</h3>
                <p class="text-xs text-slate-400 leading-relaxed mb-4">
                  Rédaction rigoureuse des baux commerciaux, fixation des pas-de-porte, révision triennale et garantie d'encaissement continu.
                </p>
                <div class="flex items-center gap-4 text-xs font-mono text-slate-300 py-3 border-t border-white/5 mb-4">
                  <span>Bail : <strong class="text-lime-400">Commercial OHADA</strong></span>
                  <span>Recouvrement : <strong class="text-mint-400">99.2%</strong></span>
                </div>
              </div>
              <a href="/contact" data-link class="btn-secondary !py-2.5 text-xs w-full text-center">Confier un magasin</a>
            </div>

            <!-- Carte 5 : Bureaux Corporate -->
            <div class="property-card glass-card p-6 flex flex-col justify-between" data-category="bureau" data-reveal="up">
              <div>
                <div class="h-48 rounded-2xl bg-gradient-to-br from-forest-850 to-forest-950 border border-white/10 p-5 flex flex-col justify-between mb-5 relative overflow-hidden">
                  <div class="flex items-center justify-between">
                    <span class="badge-tag badge-lime">Bureaux Pro</span>
                    <span class="text-xs font-mono text-lime-400 font-bold">Plateaux Aménagés</span>
                  </div>
                  <div>
                    <div class="text-white font-bold text-sm">Immeuble d'Affaires Bonanjo</div>
                    <div class="text-[11px] text-slate-400 font-mono">Douala • 120 à 600 m²</div>
                  </div>
                </div>
                <h3 class="text-lg font-display font-bold text-white mb-2">Plateaux de Bureaux & Coworking</h3>
                <p class="text-xs text-slate-400 leading-relaxed mb-4">
                  Location pour banques, multinationales, PME et cabinets juridiques avec facturation conforme et reversement bancaire.
                </p>
                <div class="flex items-center gap-4 text-xs font-mono text-slate-300 py-3 border-t border-white/5 mb-4">
                  <span>Locataires : <strong class="text-lime-400">Sociétés & PME</strong></span>
                  <span>Durée : <strong class="text-mint-400">Baux 3-6-9 ans</strong></span>
                </div>
              </div>
              <a href="/contact" data-link class="btn-secondary !py-2.5 text-xs w-full text-center">Confier des bureaux</a>
            </div>

            <!-- Carte 6 : Entrepôts -->
            <div class="property-card glass-card p-6 flex flex-col justify-between" data-category="entrepot" data-reveal="up">
              <div>
                <div class="h-48 rounded-2xl bg-gradient-to-br from-forest-850 to-forest-950 border border-white/10 p-5 flex flex-col justify-between mb-5 relative overflow-hidden">
                  <div class="flex items-center justify-between">
                    <span class="badge-tag badge-mint">Logistique</span>
                    <span class="text-xs font-mono text-mint-400 font-bold">Zone Portuaire</span>
                  </div>
                  <div>
                    <div class="text-white font-bold text-sm">Hangars & Entrepôts Sécurisés</div>
                    <div class="text-[11px] text-slate-400 font-mono">Douala Bassa & Zone Portuaire</div>
                  </div>
                </div>
                <h3 class="text-lg font-display font-bold text-white mb-2">Espaces Commerciaux & Entrepôts</h3>
                <p class="text-xs text-slate-400 leading-relaxed mb-4">
                  Gestion de hangars logistiques, dépôts de fret et parcs de stockage avec surveillance et baux industriels longue durée.
                </p>
                <div class="flex items-center gap-4 text-xs font-mono text-slate-300 py-3 border-t border-white/5 mb-4">
                  <span>Surfaces : <strong class="text-lime-400">500 à 3 000 m²</strong></span>
                  <span>Sécurité : <strong class="text-mint-400">24/7</strong></span>
                </div>
              </div>
              <a href="/contact" data-link class="btn-secondary !py-2.5 text-xs w-full text-center">Confier un entrepôt</a>
            </div>

          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 4. SECTION "NOTRE PLATEFORME SAAS" (MOCKUPS ÉLÉGANTS)             -->
      <!-- ================================================================= -->
      <section class="py-28 px-4 md:px-8 max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-16" data-reveal="up">
          <div class="badge-tag badge-lime mb-3">Innovation SaaS Propriétaire</div>
          <h2 class="text-display-lg font-display font-extrabold text-white mb-4">
            Une Technologie Unique Développée Pour l'Immobilier au Cameroun
          </h2>
          <p class="text-slate-300 text-sm md:text-base">
            Découvrez les 5 modules exclusifs qui garantissent la transparence totale et la ponctualité de vos loyers.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          
          <!-- Module 1 -->
          <div class="glass-card p-8 group hover:border-lime-500/40" data-reveal="up" data-delay="0.05">
            <div class="text-lime-400 mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
            </div>
            <h3 class="text-lg font-display font-bold text-white mb-2">1. Tableau de Bord Bailleurs</h3>
            <p class="text-xs text-slate-400 leading-relaxed">
              Consultez vos taux d'occupation, l'historique de chaque lot et le montant exact qui sera versé sur votre compte le 5 du mois.
            </p>
          </div>

          <!-- Module 2 -->
          <div class="glass-card p-8 group hover:border-mint-500/40" data-reveal="up" data-delay="0.1">
            <div class="text-mint-400 mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
            </div>
            <h3 class="text-lg font-display font-bold text-white mb-2">2. Passerelle MoMo / Orange Money</h3>
            <p class="text-xs text-slate-400 leading-relaxed">
              Paiement instantané direct avec rapprochement bancaire automatique. Fini les reçus papiers perdus ou falsifiés.
            </p>
          </div>

          <!-- Module 3 -->
          <div class="glass-card p-8 group hover:border-lime-500/40" data-reveal="up" data-delay="0.15">
            <div class="text-lime-400 mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            </div>
            <h3 class="text-lg font-display font-bold text-white mb-2">3. Quittances Électroniques Certifiées</h3>
            <p class="text-xs text-slate-400 leading-relaxed">
              Génération immédiate en PDF avec signature numérique, tampon légal et QR Code infalsifiable pour chaque loyer réglé.
            </p>
          </div>

          <!-- Module 4 -->
          <div class="glass-card p-8 group hover:border-mint-500/40" data-reveal="up" data-delay="0.2">
            <div class="text-mint-400 mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
            </div>
            <h3 class="text-lg font-display font-bold text-white mb-2">4. Relances Automatisées SMS & WhatsApp</h3>
            <p class="text-xs text-slate-400 leading-relaxed">
              Rappels courtois programmés avant échéance. Moins de 1.3% de retard constaté sur l'ensemble de notre parc géré.
            </p>
          </div>

          <!-- Module 5 -->
          <div class="glass-card p-8 group hover:border-lime-500/40" data-reveal="up" data-delay="0.25">
            <div class="text-lime-400 mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/></svg>
            </div>
            <h3 class="text-lg font-display font-bold text-white mb-2">5. Rapports Fiscaux & Déclarations</h3>
            <p class="text-xs text-slate-400 leading-relaxed">
              Bilan annuel récapitulatif prêt pour votre centre des impôts (DSF, précomptes sur loyers) en conformité CGI.
            </p>
          </div>

          <!-- Module 6 -->
          <div class="glass-card p-8 group hover:border-mint-500/40" data-reveal="up" data-delay="0.3">
            <div class="text-mint-400 mb-4">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <h3 class="text-lg font-display font-bold text-white mb-2">6. Gestion Technique & Dépannages</h3>
            <p class="text-xs text-slate-400 leading-relaxed">
              Ticket d'incident direct ouvert par le locataire, validation du devis par le bailleur et intervention coordonnée.
            </p>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 5. PROCESSUS DE GESTION EN ÉTAPES (PINNED STORYTELLING)           -->
      <!-- ================================================================= -->
      <section class="py-24 px-4 md:px-8 bg-forest-950/60 border-t border-white/10">
        <div class="max-w-6xl mx-auto">
          
          <div class="text-center max-w-3xl mx-auto mb-16" data-reveal="up">
            <div class="badge-tag badge-mint mb-3">Méthodologie Éprouvée</div>
            <h2 class="text-display-lg font-display font-extrabold text-white mb-4">
              Comment Nous Prenons en Charge Votre Bien
            </h2>
            <p class="text-slate-400 text-sm md:text-base">
              Un accompagnement complet et transparent en 4 étapes ordonnées.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div class="glass-card p-8 md:p-10 border-lime-500/30" data-reveal="up" data-delay="0.1">
              <div class="flex items-center justify-between mb-6">
                <span class="text-5xl font-display font-black text-lime-400 font-mono">01</span>
                <span class="badge-tag badge-lime">Audit Gratuit</span>
              </div>
              <h3 class="text-2xl font-display font-bold text-white mb-3">Audit Patrimonial & Estimation</h3>
              <p class="text-slate-300 text-sm leading-relaxed mb-4">
                Visite sur place de notre gestionnaire à Douala ou Yaoundé. Nous analysons l'état technique, le standing, la tension locative du quartier et fixons le loyer optimal pour un taux d'occupation maximal.
              </p>
              <ul class="text-xs text-slate-400 space-y-2">
                <li class="flex items-center gap-2"><span class="text-lime-400">✓</span> Rapport d'évaluation remis sous 48h</li>
                <li class="flex items-center gap-2"><span class="text-lime-400">✓</span> Recommandations de valorisation éventuelle</li>
              </ul>
            </div>

            <div class="glass-card p-8 md:p-10 border-mint-500/30" data-reveal="up" data-delay="0.2">
              <div class="flex items-center justify-between mb-6">
                <span class="text-5xl font-display font-black text-mint-400 font-mono">02</span>
                <span class="badge-tag badge-mint">Mise en Location</span>
              </div>
              <h3 class="text-2xl font-display font-bold text-white mb-3">Diffusion, Visites & Scoring</h3>
              <p class="text-slate-300 text-sm leading-relaxed mb-4">
                Publication sur nos canaux exclusifs et notre base de demandeurs qualifiés. Réalisation des visites par nos agents et audit financier complet de chaque candidat locataire.
              </p>
              <ul class="text-xs text-slate-400 space-y-2">
                <li class="flex items-center gap-2"><span class="text-mint-400">✓</span> Contrôle d'identité et des garanties</li>
                <li class="flex items-center gap-2"><span class="text-mint-400">✓</span> Rédaction du bail sécurisé OHADA</li>
              </ul>
            </div>

            <div class="glass-card p-8 md:p-10 border-lime-500/30" data-reveal="up" data-delay="0.3">
              <div class="flex items-center justify-between mb-6">
                <span class="text-5xl font-display font-black text-lime-400 font-mono">03</span>
                <span class="badge-tag badge-lime">Installation</span>
              </div>
              <h3 class="text-2xl font-display font-bold text-white mb-3">État des Lieux Numérisé & Clés</h3>
              <p class="text-slate-300 text-sm leading-relaxed mb-4">
                État des lieux minutieux sur tablette avec plus de 40 photos HD horodatées et signées électroniquement. Encaissement de la caution et du premier mois de loyer.
              </p>
              <ul class="text-xs text-slate-400 space-y-2">
                <li class="flex items-center gap-2"><span class="text-lime-400">✓</span> Dépôt de garantie consigné sur compte sécurisé</li>
                <li class="flex items-center gap-2"><span class="text-lime-400">✓</span> Relevé des compteurs Eneo / CDE</li>
              </ul>
            </div>

            <div class="glass-card p-8 md:p-10 border-mint-500/30" data-reveal="up" data-delay="0.4">
              <div class="flex items-center justify-between mb-6">
                <span class="text-5xl font-display font-black text-mint-400 font-mono">04</span>
                <span class="badge-tag badge-mint">Gestion Continue</span>
              </div>
              <h3 class="text-2xl font-display font-bold text-white mb-3">Encaissements & Reversements le 5</h3>
              <p class="text-slate-300 text-sm leading-relaxed mb-4">
                Collecte mensuelle automatisée, reversement ponctuel à date fixe le 5 sur votre compte, gestion technique préventive et rapports financiers 24/7 sur la plateforme SaaS.
              </p>
              <ul class="text-xs text-slate-400 space-y-2">
                <li class="flex items-center gap-2"><span class="text-mint-400">✓</span> Quittances certifiées instantanées</li>
                <li class="flex items-center gap-2"><span class="text-mint-400">✓</span> Suivi 24/7 pour les bailleurs résidents & diaspora</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 6. FORMULES & TARIFICATION TRANSPARENTE                           -->
      <!-- ================================================================= -->
      <section class="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <div class="text-center max-w-3xl mx-auto mb-16" data-reveal="up">
          <div class="badge-tag badge-lime mb-3">Honoraires Clairs</div>
          <h2 class="text-display-lg font-display font-extrabold text-white mb-4">
            Des Formules Transparentes Sans Frais Cachés
          </h2>
          <p class="text-slate-300 text-sm md:text-base">
            Nos honoraires sont prélevés uniquement sur les loyers réellement encaissés. Zéro loyer perçu = zéro honoraire.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <!-- Formule 1 : Lots Individuels -->
          <div class="glass-card p-8 flex flex-col justify-between" data-reveal="up" data-delay="0.1">
            <div>
              <div class="badge-tag badge-lime mb-4">Appartement / Studio</div>
              <h3 class="text-2xl font-display font-bold text-white mb-2">Formule Sérénité</h3>
              <p class="text-xs text-slate-400 mb-6">Idéale pour les propriétaires d'un ou plusieurs appartements, studios ou magasins.</p>
              
              <div class="p-4 rounded-2xl bg-forest-950/70 border border-white/5 mb-6">
                <span class="text-xs text-slate-400 block mb-1">Honoraires de gestion</span>
                <div class="text-2xl font-mono font-bold text-white">Sur Devis <span class="text-xs font-sans text-lime-400 font-bold">(% déductible)</span></div>
              </div>

              <ul class="space-y-3 text-xs text-slate-300 font-medium mb-8">
                <li class="flex items-center gap-2"><span class="text-lime-400">✓</span> Recherche & scoring du locataire</li>
                <li class="flex items-center gap-2"><span class="text-lime-400">✓</span> Encaissement Orange Money / MTN MoMo</li>
                <li class="flex items-center gap-2"><span class="text-lime-400">✓</span> Reversement garanti le 5 du mois</li>
                <li class="flex items-center gap-2"><span class="text-lime-400">✓</span> Accès SaaS Bailleurs 24/7</li>
                <li class="flex items-center gap-2"><span class="text-lime-400">✓</span> Quittances certifiées instantanées</li>
              </ul>
            </div>
            <a href="/contact" data-link class="btn-primary w-full text-center">Demander une proposition</a>
          </div>

          <!-- Formule 2 : Immeubles & Multi-Lots -->
          <div class="glass-card-accent p-8 flex flex-col justify-between border-mint-500/40 relative shadow-2xl" data-reveal="up" data-delay="0.2">
            <div class="absolute -top-3 right-6 px-3 py-1 rounded-full bg-lime-500 text-forest-950 text-[10px] font-extrabold uppercase tracking-wider">Recommandé Immeubles</div>
            <div>
              <div class="badge-tag badge-mint mb-4">Immeubles & R+</div>
              <h3 class="text-2xl font-display font-bold text-white mb-2">Formule Patrimoine Multi-Lots</h3>
              <p class="text-xs text-slate-300 mb-6">Pour immeubles complets, résidences et parcs commerciaux à Douala & Yaoundé.</p>
              
              <div class="p-4 rounded-2xl bg-forest-950/90 border border-mint-500/20 mb-6">
                <span class="text-xs text-slate-300 block mb-1">Tarif dégressif</span>
                <div class="text-2xl font-mono font-bold text-mint-400">Taux Préférentiel <span class="text-xs font-sans text-white font-bold">(selon volume)</span></div>
              </div>

              <ul class="space-y-3 text-xs text-slate-200 font-medium mb-8">
                <li class="flex items-center gap-2"><span class="text-mint-400">✓</span> Gestionnaire de patrimoine dédié</li>
                <li class="flex items-center gap-2"><span class="text-mint-400">✓</span> Gestion des parties communes & conciergerie</li>
                <li class="flex items-center gap-2"><span class="text-mint-400">✓</span> Reversement consolidé chaque mois</li>
                <li class="flex items-center gap-2"><span class="text-mint-400">✓</span> Audit technique & maintenance préventive</li>
                <li class="flex items-center gap-2"><span class="text-mint-400">✓</span> Déclarations fiscales foncières incluses</li>
              </ul>
            </div>
            <a href="/contact" data-link class="btn-primary w-full text-center">Étude gratuite immeuble</a>
          </div>

          <!-- Formule 3 : Diaspora Privilège -->
          <div class="glass-card p-8 flex flex-col justify-between" data-reveal="up" data-delay="0.3">
            <div>
              <div class="badge-tag badge-lime mb-4">Diaspora Camerounaise</div>
              <h3 class="text-2xl font-display font-bold text-white mb-2">Formule Diaspora Privilège</h3>
              <p class="text-xs text-slate-400 mb-6">Pour les propriétaires vivant à l'étranger (France, USA, Canada, Belgique, UK...).</p>
              
              <div class="p-4 rounded-2xl bg-forest-950/70 border border-white/5 mb-6">
                <span class="text-xs text-slate-400 block mb-1">Gestion 100% à distance</span>
                <div class="text-2xl font-mono font-bold text-white">Virement International <span class="text-xs font-sans text-lime-400 font-bold">(EUR / USD / XAF)</span></div>
              </div>

              <ul class="space-y-3 text-xs text-slate-300 font-medium mb-8">
                <li class="flex items-center gap-2"><span class="text-lime-400">✓</span> Compte-rendu vidéo des états des lieux</li>
                <li class="flex items-center gap-2"><span class="text-lime-400">✓</span> Reversements bancaires internationaux</li>
                <li class="flex items-center gap-2"><span class="text-lime-400">✓</span> Ligne directe WhatsApp avec votre gestionnaire</li>
                <li class="flex items-center gap-2"><span class="text-lime-400">✓</span> Représentation légale et fiscale locale</li>
                <li class="flex items-center gap-2"><span class="text-lime-400">✓</span> Zéro déplacement nécessaire au pays</li>
              </ul>
            </div>
            <a href="${CONFIG.contact.whatsapp.link}" target="_blank" rel="noopener" class="btn-secondary w-full text-center">Contacter un conseiller Diaspora</a>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 7. FAQ DÉTAILLÉE & CTA FINAL                                      -->
      <!-- ================================================================= -->
      <section class="py-24 px-4 md:px-8 max-w-5xl mx-auto">
        
        <!-- FAQ Accordéons -->
        <div class="mb-24" data-reveal="up" data-accordion-group>
          <div class="text-center mb-12">
            <div class="badge-tag badge-mint mb-3">Transparence Totale</div>
            <h2 class="text-display-lg font-display font-extrabold text-white mb-3">Foire Aux Questions Bailleurs</h2>
            <p class="text-slate-400 text-sm">Toutes les réponses pour confier votre patrimoine en toute confiance.</p>
          </div>

          <div class="space-y-3">
            <div class="border border-white/10 rounded-2xl p-5 bg-forest-950/50" data-accordion-item>
              <button class="w-full flex items-center justify-between text-left font-bold text-sm md:text-base text-white" data-accordion-trigger>
                <span>Comment garantissez-vous le versement du loyer le 5 de chaque mois ?</span>
                <svg class="w-4 h-4 text-lime-400 transition-transform duration-300" data-accordion-icon fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="mt-3 pt-3 border-t border-white/5 text-xs md:text-sm text-slate-300 hidden leading-relaxed" data-accordion-content>
                Grâce à notre rigueur de sélection en amont, aux paiements digitalisés par Orange Money et MTN MoMo et à notre fonds de prévoyance, nous exécutons le reversement automatique à date fixe sur votre compte bancaire ou Mobile Money chaque 5 du mois, sans exception.
              </div>
            </div>

            <div class="border border-white/10 rounded-2xl p-5 bg-forest-950/50" data-accordion-item>
              <button class="w-full flex items-center justify-between text-left font-bold text-sm md:text-base text-white" data-accordion-trigger>
                <span>Que se passe-t-il si un locataire dégrade le bien ?</span>
                <svg class="w-4 h-4 text-lime-400 transition-transform duration-300" data-accordion-icon fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="mt-3 pt-3 border-t border-white/5 text-xs md:text-sm text-slate-300 hidden leading-relaxed" data-accordion-content>
                L'état des lieux d'entrée est numérisé avec plus de 40 photos HD. À la sortie, toute dégradation non liée à l'usure normale est immédiatement déduite du dépôt de garantie (caution), et les réparations sont effectuées par nos artisans qualifiés sous devis transparent.
              </div>
            </div>

            <div class="border border-white/10 rounded-2xl p-5 bg-forest-950/50" data-accordion-item>
              <button class="w-full flex items-center justify-between text-left font-bold text-sm md:text-base text-white" data-accordion-trigger>
                <span>Je vis à l'étranger (diaspora), comment suivre mes loyers ?</span>
                <svg class="w-4 h-4 text-lime-400 transition-transform duration-300" data-accordion-icon fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="mt-3 pt-3 border-t border-white/5 text-xs md:text-sm text-slate-300 hidden leading-relaxed" data-accordion-content>
                Vous disposez d'un accès sécurisé 24h/24 à votre portail SaaS Bailleurs. Vous y visualisez en direct les encaissements, quittances émises, rapports financiers mensuels et photos des états des lieux. Vos loyers peuvent vous être transférés par virement international vers votre compte bancaire en Europe, Amérique du Nord ou ailleurs.
              </div>
            </div>

            <div class="border border-white/10 rounded-2xl p-5 bg-forest-950/50" data-accordion-item>
              <button class="w-full flex items-center justify-between text-left font-bold text-sm md:text-base text-white" data-accordion-trigger>
                <span>Vos contrats sont-ils conformes au droit camerounais et OHADA ?</span>
                <svg class="w-4 h-4 text-lime-400 transition-transform duration-300" data-accordion-icon fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
              </button>
              <div class="mt-3 pt-3 border-t border-white/5 text-xs md:text-sm text-slate-300 hidden leading-relaxed" data-accordion-content>
                Oui, l'intégralité de nos baux d'habitation et baux commerciaux sont rédigés sous le contrôle de notre pôle juridique en stricte conformité avec le Code Civil, l'Acte Uniforme OHADA portant sur le droit commercial général et la législation foncière du Cameroun.
              </div>
            </div>
          </div>
        </div>

        <!-- Appel à l'Action Final -->
        <div class="glass-card-accent p-10 md:p-14 rounded-4xl text-center relative overflow-hidden shadow-2xl" data-reveal="up">
          <div class="badge-tag badge-lime mb-4">Mandat Sans Risque</div>
          <h2 class="text-display-lg font-display font-extrabold text-white mb-4">
            Confiez Votre Bien à Multi Business SARL Dès Aujourd'hui
          </h2>
          <p class="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Audit gratuit et sans engagement de votre bien sous 48h à Douala et Yaoundé.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <a href="${CONFIG.contact.whatsapp.link}" target="_blank" rel="noopener" class="btn-primary !px-8 !py-4 text-base" data-magnetic>
              <span>Échanger sur WhatsApp</span>
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

  async init(container = (typeof document !== 'undefined' ? document.getElementById('app') || document : null)) {
    console.log('⚡ [Gestion Locative View] Initialisation complète de la page');
    this._cleanups = [];

    if (!container) return;

    // Initialisation des accordéons et des onglets de la vue
    initAccordions(container);
    initTabs(container);

    // Système de filtres interactifs pour le catalogue de biens
    const filterButtons = container.querySelectorAll('.filter-btn');
    const propertyCards = container.querySelectorAll('.property-card');

    filterButtons.forEach((btn) => {
      const handler = () => {
        const filter = btn.dataset.filter;

        // Mise à jour des classes actives sur les boutons
        filterButtons.forEach((b) => {
          b.classList.remove('active', 'bg-lime-500', 'text-forest-950', 'shadow-glow-lime-sm');
          b.classList.add('bg-forest-900', 'border', 'border-white/10', 'text-slate-300');
        });
        btn.classList.add('active', 'bg-lime-500', 'text-forest-950', 'shadow-glow-lime-sm');
        btn.classList.remove('bg-forest-900', 'border', 'border-white/10', 'text-slate-300');

        // Filtrage des cartes
        propertyCards.forEach((card) => {
          const category = card.dataset.category;
          if (filter === 'all' || category === filter) {
            card.classList.remove('hidden');
            if (window.gsap) {
              window.gsap.fromTo(card, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.35, ease: "power2.out" });
            }
          } else {
            card.classList.add('hidden');
          }
        });
      };

      btn.addEventListener('click', handler);
      this._cleanups.push(() => btn.removeEventListener('click', handler));
    });
  },

  destroy() {
    console.log('🧹 [Gestion Locative View] Nettoyage complet');
    this._cleanups.forEach((c) => {
      try { c(); } catch (e) {}
    });
    this._cleanups = [];
  }
};
