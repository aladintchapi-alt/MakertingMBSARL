/**
 * Vue À PROPOS - MULTI BUSINESS SARL (Phase 5 Production)
 * Histoire, Vision, Valeurs, Équipe & Ancrage à Douala / Yaoundé
 */
import { CONFIG } from '../config.js';

export default {
  meta: {
    title: "À Propos | Notre Histoire, Vision & Équipe d'Experts au Cameroun",
    description: "MULTI BUSINESS SARL : L'alliance de l'intégrité juridique, de la technologie SaaS et de la proximité terrain pour valoriser le patrimoine immobilier au Cameroun."
  },

  _cleanups: [],

  async render() {
    return `
      <!-- ================================================================= -->
      <!-- 1. HERO MANIFESTE À PROPOS                                        -->
      <!-- ================================================================= -->
      <section class="relative min-h-[70vh] flex items-center justify-center pt-32 pb-16 px-4 md:px-8 overflow-hidden">
        <div class="absolute inset-0 bg-mesh-dark opacity-80 pointer-events-none"></div>
        <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-500/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div class="container max-w-5xl mx-auto text-center relative z-10" data-stagger-item>
          
          <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-forest-900/90 border border-lime-500/40 text-lime-400 text-xs font-bold tracking-widest uppercase mb-8 shadow-glow-lime-sm">
            <span>Notre Vision & Engagement</span>
          </div>

          <h1 class="text-display-xl md:text-display-2xl font-display font-black text-white tracking-tight mb-8 leading-[1.08]">
            L'intégrité et la technologie au service du patrimoine camerounais.
          </h1>

          <p class="text-lg md:text-xl text-slate-300 font-normal max-w-3xl mx-auto mb-12 leading-relaxed">
            Née d'une volonté farouche de professionnaliser la gestion immobilière et le conseil d'affaires au Cameroun, <strong>MULTI BUSINESS SARL</strong> réconcilie rigueur juridique, technologie SaaS propriétaire et relation humaine de proximité.
          </p>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 2. NOTRE HISTOIRE & GENÈSE                                        -->
      <!-- ================================================================= -->
      <section class="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 space-y-6" data-reveal="left">
            <div class="badge-tag badge-mint">La Genèse</div>
            <h2 class="text-display-lg font-display font-extrabold text-white leading-tight">
              Pourquoi MULTI BUSINESS SARL S'Est Imposée Comme une Référence
            </h2>
            <p class="text-slate-300 text-sm md:text-base leading-relaxed">
              Au Cameroun, la gestion locative traditionnelle souffre de maux récurrents : loyers impayés non recouvrés, opacité financière, baux informels non sécurisés et sentiment d'abandon pour les bailleurs résidant à l'étranger.
            </p>
            <p class="text-slate-300 text-sm md:text-base leading-relaxed">
              Face à ce constat, nous avons développé un modèle unique : conjuguer un pôle juridique intraitable (baux conformes OHADA), une équipe terrain réactive à Douala et Yaoundé, et notre propre <strong>plateforme SaaS propriétaire</strong> qui garantit la transparence absolue des flux et des quittances en temps réel.
            </p>
          </div>

          <div class="lg:col-span-6" data-reveal="right">
            <div class="glass-card-accent p-8 md:p-12 rounded-3xl border-mint-500/30 space-y-6">
              <h3 class="text-2xl font-display font-bold text-white">Nos 4 Piliers Fondateurs</h3>
              
              <div class="space-y-4 text-xs md:text-sm text-slate-300">
                <div class="flex items-start gap-3">
                  <span class="w-6 h-6 rounded-lg bg-lime-500/20 text-lime-400 flex items-center justify-center font-bold flex-shrink-0">1</span>
                  <div>
                    <strong class="text-white block">Transparence Absolue :</strong>
                    Chaque franc encaissé ou reversé est traçable 24/7 sur votre portail sécurisé.
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <span class="w-6 h-6 rounded-lg bg-mint-500/20 text-mint-400 flex items-center justify-center font-bold flex-shrink-0">2</span>
                  <div>
                    <strong class="text-white block">Rigueur Juridique OHADA :</strong>
                    Aucune improvisation contractuelle, protection intégrale contre les contentieux.
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <span class="w-6 h-6 rounded-lg bg-lime-500/20 text-lime-400 flex items-center justify-center font-bold flex-shrink-0">3</span>
                  <div>
                    <strong class="text-white block">Innovation SaaS Continue :</strong>
                    Intégration directe des solutions de paiement Orange Money & MTN MoMo.
                  </div>
                </div>

                <div class="flex items-start gap-3">
                  <span class="w-6 h-6 rounded-lg bg-mint-500/20 text-mint-400 flex items-center justify-center font-bold flex-shrink-0">4</span>
                  <div>
                    <strong class="text-white block">Proximité Terrain Réelle :</strong>
                    Des équipes physiques présentes chaque jour à Douala (Akwa) et Yaoundé (Bastos).
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 3. ZONES D'INTERVENTION GÉOGRAPHIQUE                              -->
      <!-- ================================================================= -->
      <section class="py-24 px-4 md:px-8 bg-forest-950/60 border-t border-white/10">
        <div class="max-w-7xl mx-auto">
          <div class="text-center max-w-3xl mx-auto mb-16" data-reveal="up">
            <div class="badge-tag badge-lime mb-3">Ancrage Territorial</div>
            <h2 class="text-display-lg font-display font-extrabold text-white mb-4">
              Nos Zones d'Intervention Prioritaires
            </h2>
            <p class="text-slate-400 text-sm md:text-base">
              Nous gérons des actifs stratégiques dans les quartiers résidentiels et d'affaires les plus prisés du Cameroun.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <!-- Douala -->
            <div class="glass-card p-8 md:p-10 border-lime-500/30" data-reveal="up" data-delay="0.1">
              <div class="flex items-center justify-between mb-6">
                <span class="badge-tag badge-lime">Capitale Économique</span>
                <span class="text-lime-400 font-mono text-xs font-bold">Siège Social</span>
              </div>
              <h3 class="text-2xl font-display font-bold text-white mb-3">Douala & Agglomération</h3>
              <p class="text-slate-300 text-xs md:text-sm leading-relaxed mb-6">
                Gestion d'immeubles de rapport, appartements de standing, commerces et plateaux de bureaux d'affaires.
              </p>
              <div class="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                <span class="px-3 py-1 rounded-lg bg-forest-950/80 border border-white/5">Akwa</span>
                <span class="px-3 py-1 rounded-lg bg-forest-950/80 border border-white/5">Bonanjo</span>
                <span class="px-3 py-1 rounded-lg bg-forest-950/80 border border-white/5">Bonapriso</span>
                <span class="px-3 py-1 rounded-lg bg-forest-950/80 border border-white/5">Denver</span>
                <span class="px-3 py-1 rounded-lg bg-forest-950/80 border border-white/5">Makepe</span>
                <span class="px-3 py-1 rounded-lg bg-forest-950/80 border border-white/5">Kotto</span>
                <span class="px-3 py-1 rounded-lg bg-forest-950/80 border border-white/5">Zone Portuaire</span>
              </div>
            </div>

            <!-- Yaoundé -->
            <div class="glass-card p-8 md:p-10 border-mint-500/30" data-reveal="up" data-delay="0.2">
              <div class="flex items-center justify-between mb-6">
                <span class="badge-tag badge-mint">Capitale Politique</span>
                <span class="text-mint-400 font-mono text-xs font-bold">Agence Régionale</span>
              </div>
              <h3 class="text-2xl font-display font-bold text-white mb-3">Yaoundé & Agglomération</h3>
              <p class="text-slate-300 text-xs md:text-sm leading-relaxed mb-6">
                Gestion de résidences haut standing, duplex diplomatiques, logements cadres et espaces commerciaux.
              </p>
              <div class="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
                <span class="px-3 py-1 rounded-lg bg-forest-950/80 border border-white/5">Bastos</span>
                <span class="px-3 py-1 rounded-lg bg-forest-950/80 border border-white/5">Centre-Ville</span>
                <span class="px-3 py-1 rounded-lg bg-forest-950/80 border border-white/5">Santa Barbara</span>
                <span class="px-3 py-1 rounded-lg bg-forest-950/80 border border-white/5">Odza</span>
                <span class="px-3 py-1 rounded-lg bg-forest-950/80 border border-white/5">Mvan</span>
                <span class="px-3 py-1 rounded-lg bg-forest-950/80 border border-white/5">Golf</span>
                <span class="px-3 py-1 rounded-lg bg-forest-950/80 border border-white/5">Nsimalen</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 4. L'ÉQUIPE ET LE PÔLE D'EXPERTS                                  -->
      <!-- ================================================================= -->
      <section class="py-24 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div class="text-center max-w-3xl mx-auto mb-16" data-reveal="up">
          <div class="badge-tag badge-mint mb-3">Notre Capital Humain</div>
          <h2 class="text-display-lg font-display font-extrabold text-white mb-4">
            Une Équipe Pluridisciplinaire Dédiée à Votre Réussite
          </h2>
          <p class="text-slate-400 text-sm md:text-base">
            Juristes en droit immobilier, fiscalistes agréés, développeurs SaaS et régisseurs de terrain.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div class="glass-card p-8 text-center" data-reveal="up" data-delay="0.1">
            <div class="w-20 h-20 rounded-full bg-forest-850 border border-lime-500/30 mx-auto flex items-center justify-center text-lime-400 font-display font-black text-2xl mb-6 shadow-glow-lime-sm">
              JI
            </div>
            <h3 class="text-xl font-display font-bold text-white mb-1">Pôle Juridique & Contentieux</h3>
            <div class="text-xs text-lime-400 font-mono mb-4">Droit Foncier & Baux OHADA</div>
            <p class="text-xs text-slate-400 leading-relaxed">
              Sécurisation des contrats de location, suivi des procédures d'expulsion légales et conformité réglementaire.
            </p>
          </div>

          <div class="glass-card p-8 text-center" data-reveal="up" data-delay="0.2">
            <div class="w-20 h-20 rounded-full bg-forest-850 border border-mint-500/30 mx-auto flex items-center justify-center text-mint-400 font-display font-black text-2xl mb-6 shadow-glow-mint-sm">
              GP
            </div>
            <h3 class="text-xl font-display font-bold text-white mb-1">Pôle Gestion & Régie Terrain</h3>
            <div class="text-xs text-mint-400 font-mono mb-4">Douala & Yaoundé</div>
            <p class="text-xs text-slate-400 leading-relaxed">
              États des lieux numérisés, visites de sélection, coordination des travaux et conciergerie 24/7.
            </p>
          </div>

          <div class="glass-card p-8 text-center" data-reveal="up" data-delay="0.3">
            <div class="w-20 h-20 rounded-full bg-forest-850 border border-lime-500/30 mx-auto flex items-center justify-center text-lime-400 font-display font-black text-2xl mb-6 shadow-glow-lime-sm">
              FC
            </div>
            <h3 class="text-xl font-display font-bold text-white mb-1">Pôle Fiscalité & SaaS</h3>
            <div class="text-xs text-lime-400 font-mono mb-4">Comptabilité & Rapprochement</div>
            <p class="text-xs text-slate-400 leading-relaxed">
              Supervision des flux Orange Money / MTN MoMo, édition des quittances certifiées et déclarations fiscales CGI.
            </p>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 5. CTA FINAL À PROPOS                                             -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 max-w-5xl mx-auto">
        <div class="glass-card-accent p-10 md:p-14 rounded-4xl text-center relative overflow-hidden shadow-2xl" data-reveal="up">
          <div class="badge-tag badge-lime mb-4">Construisons Ensemble</div>
          <h2 class="text-display-lg font-display font-extrabold text-white mb-4">
            Parlons de Votre Patrimoine en Toute Confidentialité
          </h2>
          <p class="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Rencontrez nos gestionnaires dans nos agences de Douala (Akwa) ou Yaoundé (Bastos), ou convenez d'un entretien vidéo.
          </p>
          <div class="flex flex-wrap items-center justify-center gap-4">
            <a href="/contact" data-link class="btn-primary !px-8 !py-4 text-base" data-magnetic>
              <span>Contacter nos agences</span>
            </a>
            <a href="/gestion-locative" data-link class="btn-secondary !px-8 !py-4 text-base" data-magnetic>
              <span>Découvrir la gestion locative</span>
            </a>
          </div>
        </div>
      </section>
    `;
  },

  async init(container) {
    console.log('⚡ [A Propos View] Initialisation complète');
    this._cleanups = [];
  },

  destroy() {
    console.log('🧹 [A Propos View] Nettoyage complet');
    this._cleanups.forEach((c) => {
      try { c(); } catch (e) {}
    });
    this._cleanups = [];
  }
};
