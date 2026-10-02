/**
 * Vue SERVICES - MULTI BUSINESS SARL (Phase 5 Production)
 * Pôles d'Affaires : Fiscalité, Création d'Entreprise, Transit & Dédouanement
 */
import { CONFIG } from '../config.js';
import { showToast, initAccordions } from '../ui.js';

export default {
  meta: {
    title: "Nos Services d'Affaires & Conseil | Fiscalité, Création d'Entreprise, Dédouanement",
    description: "MULTI BUSINESS SARL : Conseil fiscal, création d'entreprise clé en main et dédouanement portuaire à Douala & Yaoundé, Cameroun."
  },

  _cleanups: [],

  async render() {
    return `
      <!-- ================================================================= -->
      <!-- 1. HERO SERVICES AVEC NAVIGATION PAR ANCRES                       -->
      <!-- ================================================================= -->
      <section class="relative min-h-[70vh] flex items-center justify-center pt-32 pb-16 px-4 md:px-8 overflow-hidden">
        <div class="absolute inset-0 bg-mesh-dark opacity-80 pointer-events-none"></div>
        <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mint-500/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div class="container max-w-5xl mx-auto text-center relative z-10" data-stagger-item>
          
          <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-forest-900/90 border border-mint-500/40 text-mint-400 text-xs font-bold tracking-widest uppercase mb-8 shadow-glow-mint-sm">
            <span>Pôle Conseil d'Affaires & Entreprises</span>
          </div>

          <h1 class="text-display-xl md:text-display-2xl font-display font-black text-white tracking-tight mb-8 leading-[1.08]">
            Sécurisez vos opérations stratégiques au Cameroun.
            <span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-mint-400 via-lime-400 to-lime-500">
              Fiscalité • Création d'Entreprise • Dédouanement
            </span>
          </h1>

          <p class="text-lg md:text-xl text-slate-300 font-normal max-w-3xl mx-auto mb-12 leading-relaxed">
            En complément de notre pôle immobilier, nous accompagnons les entrepreneurs, investisseurs et sociétés dans la conformité fiscale, la structuration juridique et la logistique douanière.
          </p>

          <!-- Barre de Navigation Rapide par Ancres Fluides -->
          <div class="flex flex-wrap items-center justify-center gap-3">
            <a href="#fiscalite" class="px-5 py-2.5 rounded-full bg-forest-900/80 border border-white/15 text-xs font-bold text-white hover:border-lime-400 hover:text-lime-400 transition-all flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-lime-400"></span>
              <span>1. Conseil & Fiscalité</span>
            </a>
            <a href="#creation-entreprise" class="px-5 py-2.5 rounded-full bg-forest-900/80 border border-white/15 text-xs font-bold text-white hover:border-mint-400 hover:text-mint-400 transition-all flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-mint-400"></span>
              <span>2. Création d'Entreprise</span>
            </a>
            <a href="#dedouanement" class="px-5 py-2.5 rounded-full bg-forest-900/80 border border-white/15 text-xs font-bold text-white hover:border-lime-400 hover:text-lime-400 transition-all flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-lime-400"></span>
              <span>3. Dédouanement & Transit</span>
            </a>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 2. SERVICE 1 : CONSEIL & FISCALITÉ                                -->
      <!-- ================================================================= -->
      <section id="fiscalite" class="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 space-y-6" data-reveal="left">
            <div class="badge-tag badge-lime">Pôle Fiscalité & Conformité</div>
            <h2 class="text-display-lg font-display font-extrabold text-white leading-tight">
              Optimisation Fiscale & Déclarations en Règle
            </h2>
            <p class="text-slate-300 text-sm md:text-base leading-relaxed">
              La fiscalité camerounaise exige une vigilance permanente. Nous protégeons votre entreprise et vos revenus fonciers contre les redressements et pénalités de retard grâce à une gestion rigoureuse en conformité avec le Code Général des Impôts (CGI).
            </p>

            <div class="space-y-3 pt-2">
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-lime-500/20 text-lime-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</div>
                <div>
                  <h4 class="text-white font-bold text-sm">Déclarations Mensuelles & Annuelles (DSF)</h4>
                  <p class="text-xs text-slate-400">TVA, précomptes sur achats, acomptes IS/IRCM et liasse fiscale DSF certifiée.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-lime-500/20 text-lime-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</div>
                <div>
                  <h4 class="text-white font-bold text-sm">Fiscalité Immobilière & Taxes Foncières</h4>
                  <p class="text-xs text-slate-400">Précomptes sur loyers (15%), taxe sur la propriété foncière et enregistrement des baux.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-lime-500/20 text-lime-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</div>
                <div>
                  <h4 class="text-white font-bold text-sm">Assistance Contrôle & Contentieux Fiscal</h4>
                  <p class="text-xs text-slate-400">Défense de vos intérêts face à l'administration fiscale (DGI Cameroun).</p>
                </div>
              </div>
            </div>

            <div class="flex flex-wrap items-center gap-4 pt-4">
              <a href="${CONFIG.contact.whatsapp.link}" target="_blank" rel="noopener" class="btn-primary" data-magnetic>
                <span>Demander un audit fiscal</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <a href="/contact" data-link class="btn-secondary" data-magnetic>Prendre rendez-vous</a>
            </div>
          </div>

          <div class="lg:col-span-6" data-reveal="right">
            <div class="glass-card-accent p-8 md:p-10 rounded-3xl border-lime-500/30">
              <div class="badge-tag badge-lime mb-4">Tableau de Bord de Conformité</div>
              <h3 class="text-2xl font-display font-bold text-white mb-6">Nos Engagements Fiscaux</h3>
              
              <div class="grid grid-cols-2 gap-4 mb-6">
                <div class="p-4 rounded-2xl bg-forest-950/80 border border-white/5">
                  <div class="text-3xl font-display font-black text-lime-400 font-mono">100%</div>
                  <div class="text-xs text-slate-300 font-bold mt-1">Conformité CGI</div>
                  <div class="text-[10px] text-slate-500">Zéro pénalité de retard</div>
                </div>
                <div class="p-4 rounded-2xl bg-forest-950/80 border border-white/5">
                  <div class="text-3xl font-display font-black text-white font-mono">15 du Mois</div>
                  <div class="text-xs text-slate-300 font-bold mt-1">Échéance Respectée</div>
                  <div class="text-[10px] text-slate-500">Télédéclaration sécurisée</div>
                </div>
              </div>

              <div class="p-4 rounded-2xl bg-forest-950/60 border border-white/5 text-xs text-slate-300 space-y-2">
                <div class="text-lime-400 font-bold">Processus d'accompagnement :</div>
                <p>1. Audit des antécédents et diagnostic de risque.</p>
                <p>2. Mise en place de l'échéancier fiscal mensuel.</p>
                <p>3. Téléversement des déclarations sur le portail de la DGI.</p>
                <p>4. Remise des quittances de paiement d'impôts certifiées.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 3. SERVICE 2 : CRÉATION D'ENTREPRISE                              -->
      <!-- ================================================================= -->
      <section id="creation-entreprise" class="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10 bg-forest-950/60">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 order-2 lg:order-1" data-reveal="left">
            <div class="glass-card-accent p-8 md:p-10 rounded-3xl border-mint-500/30">
              <div class="badge-tag badge-mint mb-4">Pack Immatriculation Express</div>
              <h3 class="text-2xl font-display font-bold text-white mb-4">Créer Votre Structure en 72 Heures</h3>
              <p class="text-slate-300 text-xs md:text-sm leading-relaxed mb-6">
                Nous nous occupons de l'intégralité des démarches administratives et légales auprès du greffe du tribunal et de l'administration fiscale à Douala et Yaoundé.
              </p>

              <div class="space-y-3 mb-6">
                <div class="flex items-center justify-between p-3 rounded-xl bg-forest-950/80 border border-white/5 text-xs">
                  <span class="text-slate-200 font-bold">1. Rédaction des Statuts Notariés (SARL, SAS, ETS)</span>
                  <span class="text-mint-400 font-mono">Inclus</span>
                </div>
                <div class="flex items-center justify-between p-3 rounded-xl bg-forest-950/80 border border-white/5 text-xs">
                  <span class="text-slate-200 font-bold">2. Immatriculation au RCCM & Numéro de Registre</span>
                  <span class="text-mint-400 font-mono">Inclus</span>
                </div>
                <div class="flex items-center justify-between p-3 rounded-xl bg-forest-950/80 border border-white/5 text-xs">
                  <span class="text-slate-200 font-bold">3. Obtention de l'Attestation d'Immatriculation (NIU)</span>
                  <span class="text-mint-400 font-mono">Inclus</span>
                </div>
                <div class="flex items-center justify-between p-3 rounded-xl bg-forest-950/80 border border-white/5 text-xs">
                  <span class="text-slate-200 font-bold">4. Domiciliation Juridique & Compte Bancaire Pro</span>
                  <span class="text-mint-400 font-mono">Option</span>
                </div>
              </div>

              <div class="text-center">
                <a href="${CONFIG.contact.whatsapp.link}" target="_blank" rel="noopener" class="btn-primary w-full text-center">
                  <span>Lancer ma création d'entreprise</span>
                </a>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6 order-1 lg:order-2 space-y-6" data-reveal="right">
            <div class="badge-tag badge-mint">Pôle Juridique & Entrepreneuriat</div>
            <h2 class="text-display-lg font-display font-extrabold text-white leading-tight">
              Donnez une Existence Légale et Solide à Votre Projet
            </h2>
            <p class="text-slate-300 text-sm md:text-base leading-relaxed">
              Ne perdez pas des semaines dans les tracasseries administratives. MULTI BUSINESS SARL structure votre entreprise selon le droit OHADA pour vous permettre de facturer, soumissionner aux marchés publics et ouvrir vos comptes bancaires immédiatement.
            </p>

            <div class="grid grid-cols-2 gap-4 pt-2">
              <div class="p-4 rounded-2xl bg-forest-900/60 border border-white/5">
                <div class="text-xl font-display font-bold text-white mb-1">SARL / SARL U</div>
                <p class="text-xs text-slate-400">Responsabilité limitée, idéale pour démarrer sereinement à plusieurs ou en solo.</p>
              </div>
              <div class="p-4 rounded-2xl bg-forest-900/60 border border-white/5">
                <div class="text-xl font-display font-bold text-white mb-1">SAS / SA</div>
                <p class="text-xs text-slate-400">Flexibilité statutaire pour levée de fonds et partenariats d'envergure.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 4. SERVICE 3 : DÉDOUANEMENT & TRANSIT / LOGISTIQUE                -->
      <!-- ================================================================= -->
      <section id="dedouanement" class="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 space-y-6" data-reveal="left">
            <div class="badge-tag badge-lime">Pôle Douane & Transit</div>
            <h2 class="text-display-lg font-display font-extrabold text-white leading-tight">
              Dédouanement Rapide & Transit Maritime / Aérien
            </h2>
            <p class="text-slate-300 text-sm md:text-base leading-relaxed">
              Importateurs, exportateurs et industriels : nous accélérons la sortie de vos conteneurs et marchandises au <strong>Port Autonome de Douala</strong>, au <strong>Port de Kribi</strong> et aux aéroports internationaux de Douala et Yaoundé-Nsimalen.
            </p>

            <div class="space-y-3 pt-2">
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-lime-500/20 text-lime-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</div>
                <div>
                  <h4 class="text-white font-bold text-sm">Formalités Douanières Complètes (Import / Export)</h4>
                  <p class="text-xs text-slate-400">Déclaration en détail (DAU), liquidation des droits et taxes douanières, obtention du bon à enlever (BAE).</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-lime-500/20 text-lime-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</div>
                <div>
                  <h4 class="text-white font-bold text-sm">Gestion des Magasins et Aires de Dédouanement (MAD)</h4>
                  <p class="text-xs text-slate-400">Entreposage sécurisé et réduction drastique des frais de surestaries et de magasinage.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-lime-500/20 text-lime-400 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</div>
                <div>
                  <h4 class="text-white font-bold text-sm">Acheminement & Fret Logistique Terrestre</h4>
                  <p class="text-xs text-slate-400">Transport sécurisé de vos conteneurs vers vos entrepôts partout au Cameroun et zone CEMAC (Tchad, RCA).</p>
                </div>
              </div>
            </div>

            <div class="pt-4">
              <a href="${CONFIG.contact.whatsapp.link}" target="_blank" rel="noopener" class="btn-primary" data-magnetic>
                <span>Consulter nos transitaires</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>
          </div>

          <div class="lg:col-span-6" data-reveal="right">
            <div class="glass-card p-8 md:p-10 rounded-3xl border-mint-500/30">
              <div class="badge-tag badge-mint mb-4">Points Stratégiques Couverts</div>
              <h3 class="text-2xl font-display font-bold text-white mb-6">Couverture Portuaire & Aéroportuaire</h3>

              <div class="space-y-4 mb-6">
                <div class="p-4 rounded-2xl bg-forest-950/80 border border-white/5 flex items-center justify-between">
                  <div>
                    <div class="text-white font-bold text-sm">Port Autonome de Douala (PAD)</div>
                    <div class="text-xs text-slate-400">Terminal à conteneurs & vrac</div>
                  </div>
                  <span class="text-lime-400 font-mono text-xs font-bold">Actif 24/7</span>
                </div>
                <div class="p-4 rounded-2xl bg-forest-950/80 border border-white/5 flex items-center justify-between">
                  <div>
                    <div class="text-white font-bold text-sm">Port en Eau Profonde de Kribi (PAK)</div>
                    <div class="text-xs text-slate-400">Grands navires & transbordement</div>
                  </div>
                  <span class="text-mint-400 font-mono text-xs font-bold">Actif 24/7</span>
                </div>
                <div class="p-4 rounded-2xl bg-forest-950/80 border border-white/5 flex items-center justify-between">
                  <div>
                    <div class="text-white font-bold text-sm">Aéroports Douala & Yaoundé-Nsimalen</div>
                    <div class="text-xs text-slate-400">Fret aérien express & colis sécurisés</div>
                  </div>
                  <span class="text-lime-400 font-mono text-xs font-bold">Actif 24/7</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 5. CTA GLOBAL SERVICES                                            -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <div class="glass-card-accent p-10 md:p-14 rounded-4xl text-center relative overflow-hidden shadow-2xl" data-reveal="up">
          <div class="badge-tag badge-lime mb-4">Accompagnement Sur-Mesure</div>
          <h2 class="text-display-lg font-display font-extrabold text-white mb-4">
            Un Besoin Spécifique Pour Votre Entreprise ?
          </h2>
          <p class="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Prenez contact avec nos juristes, fiscalistes et transitaires à Douala et Yaoundé pour une étude confidentielle.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <a href="${CONFIG.contact.whatsapp.link}" target="_blank" rel="noopener" class="btn-primary !px-8 !py-4 text-base" data-magnetic>
              <span>Échanger sur WhatsApp</span>
            </a>
            <a href="/contact" data-link class="btn-secondary !px-8 !py-4 text-base" data-magnetic>
              <span>Demander un devis en agence</span>
            </a>
          </div>
        </div>
      </section>
    `;
  },

  async init(container) {
    console.log('⚡ [Services View] Initialisation complète');
    this._cleanups = [];
    initAccordions(container);
  },

  destroy() {
    console.log('🧹 [Services View] Nettoyage complet');
    this._cleanups.forEach((c) => {
      try { c(); } catch (e) {}
    });
    this._cleanups = [];
  }
};
