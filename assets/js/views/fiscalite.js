/**
 * MULTI BUSINESS SARL - Page FISCALITÉ ET CONSEIL (Phase 6 Production)
 * Couleur Signature : Indigo (#3730A3 / #4F46E5) • Ratios WCAG AAA • >= 6 Images HD
 */
import { CONFIG } from '../config.js';
import { initUIComponents } from '../ui.js';

export default {
  meta: {
    title: "Conseil Fiscal, Déclarations DGI & DSF | Douala & Yaoundé",
    description: "MULTI BUSINESS SARL : Optimisation fiscale légale, déclarations mensuelles, liasse DSF et fiscalité foncière des bailleurs au Cameroun. Zéro pénalité et audit préventif.",
    image: "./assets/images/service-fiscalite.jpg"
  },

  _cleanups: [],

  async render() {
    return `
      <!-- ================================================================= -->
      <!-- 1. HERO FISCALITÉ ET CONSEIL (Indigo Signature)                   -->
      <!-- ================================================================= -->
      <section class="relative min-h-[75vh] lg:min-h-[70vh] flex items-center justify-center pt-32 pb-16 px-4 md:px-8 overflow-hidden bg-white" data-theme="tint-indigo">
        <div class="hero-photo-bg">
          <img src="./assets/images/service-fiscalite.jpg" alt="Conseil fiscal et déclarations DGI à Douala" class="w-full h-full object-cover object-center filter brightness-[0.97] contrast-[1.03]" />
          <div class="hero-photo-overlay-light"></div>
        </div>

        <div class="container max-w-5xl mx-auto text-center relative z-10" data-stagger-item>
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100 text-indigo-950 border border-indigo-300 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-indigo-600 animate-pulse"></span>
            <span>Pôle Fiscalité des Entreprises & Bailleurs</span>
          </div>

          <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-marine-900 leading-[1.12] tracking-tight mb-6 max-w-4xl mx-auto">
            Sécurisez votre conformité fiscale et <span class="text-indigo-800">éliminez les pénalités</span>.
          </h1>

          <p class="text-base sm:text-lg md:text-xl text-slate-700 font-normal max-w-3xl mx-auto mb-10 leading-relaxed">
            Entreprises, professions libérales et propriétaires fonciers : confiez vos liasses DSF, télé-déclarations mensuelles DGI et audits fiscaux à des experts assermentés.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a href="#audit-fiscal" class="btn-primary !px-7 !py-4 text-sm md:text-base shadow-lg" data-magnetic>
              <span>Prendre rendez-vous avec un fiscaliste</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
            <a href="https://wa.me/237694811715?text=Bonjour%20je%20souhaite%20un%20conseil%20fiscal%20pour%20mon%20entreprise" target="_blank" rel="noopener" class="btn-outline !px-7 !py-4 text-sm md:text-base bg-white" data-magnetic>
              <span>Consultation WhatsApp</span>
            </a>
          </div>

          <div class="flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm font-mono text-slate-700 pt-6 border-t border-indigo-200/80">
            <span class="flex items-center gap-2"><strong class="text-indigo-800">✓</strong> Conformité Code Général des Impôts</span>
            <span class="flex items-center gap-2"><strong class="text-indigo-800">✓</strong> Déclaration Statistique & Fiscale (DSF)</span>
            <span class="flex items-center gap-2"><strong class="text-indigo-800">✓</strong> Fiscalité foncière des loyers</span>
            <span class="flex items-center gap-2"><strong class="text-indigo-800">✓</strong> Assistance lors des contrôles DGI</span>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 2. NOS DOMAINES D'EXPERTISE FISCALE                               -->
      <!-- ================================================================= -->
      <section id="audit-fiscal" class="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-white">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 space-y-6" data-reveal="left">
            <span class="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-950 border border-indigo-300 text-xs font-bold uppercase tracking-wider">Expertise Fiscale Précise</span>
            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900 leading-tight">
              Une Prise en Charge Rigoureuse de Toutes Vos Obligations
            </h2>
            <p class="text-slate-600 text-sm md:text-base leading-relaxed">
              La complexité du paysage fiscal camerounais requiert une veille permanente. Nous protégeons la rentabilité de votre entreprise en optimisant légalement votre charge d'impôt et en sécurisant vos déclarations périodiques.
            </p>

            <div class="space-y-4 pt-2">
              <div class="p-4 rounded-2xl bg-indigo-50/40 border border-indigo-200/80 space-y-1">
                <h4 class="font-bold text-slate-900 text-sm">1. Déclarations Mensuelles & Télé-procédures DGI</h4>
                <p class="text-xs text-slate-600">Calcul et télé-déclaration de la TVA, acomptes IS/IR, précomptes sur achats, IRPP des salariés et taxe de séjour.</p>
              </div>

              <div class="p-4 rounded-2xl bg-indigo-50/40 border border-indigo-200/80 space-y-1">
                <h4 class="font-bold text-slate-900 text-sm">2. Liasse Fiscale & DSF Annuelle (Système OHADA)</h4>
                <p class="text-xs text-slate-600">Établissement du bilan comptable certifié, compte de résultat, tableau des flux de trésorerie et notes annexes.</p>
              </div>

              <div class="p-4 rounded-2xl bg-indigo-50/40 border border-indigo-200/80 space-y-1">
                <h4 class="font-bold text-slate-900 text-sm">3. Fiscalité Foncière pour Propriétaires & Bailleurs</h4>
                <p class="text-xs text-slate-600">Gestion des 15&nbsp;% de précompte sur les loyers, taxe sur la propriété foncière et enregistrement légal des baux d'habitation et commerciaux.</p>
              </div>

              <div class="p-4 rounded-2xl bg-indigo-50/40 border border-indigo-200/80 space-y-1">
                <h4 class="font-bold text-slate-900 text-sm">4. Assistance & Défense lors des Contrôles Fiscaux</h4>
                <p class="text-xs text-slate-600">Rédaction des réponses aux notifications de redressement, recours gracieux et assistance devant la commission départementale des impôts.</p>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6" data-reveal="right">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
              <img src="./assets/images/audit-fiscal.jpg" alt="Séance d'audit fiscal avec un expert MULTI BUSINESS SARL" class="w-full h-auto object-cover max-h-[480px]" />
              <div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg flex items-center justify-between">
                <div>
                  <span class="text-xs font-bold text-slate-900 block">Expertise & Conformité CGI</span>
                  <span class="text-[11px] text-slate-500">Centres Fiscaux Douala & Yaoundé</span>
                </div>
                <span class="px-2.5 py-1 bg-indigo-100 text-indigo-950 text-xs font-bold rounded-lg font-mono">0 Litige DGI</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 3. PROCESSUS D'ACCOMPAGNEMENT EN 5 ÉTAPES                         -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 bg-[#FAF9F5] border-t border-slate-200" data-theme="ivory">
        <div class="max-w-6xl mx-auto space-y-12">
          <div class="text-center max-w-2xl mx-auto space-y-3" data-reveal="up">
            <span class="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">Méthodologie Fiscale</span>
            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900">Les 5 Paliers d'un Suivi Fiscal Rigoureux</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-mono font-bold text-sm">01</span>
              <h4 class="font-bold text-sm text-slate-900">Diagnostic Fiscal</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Audit complet de vos déclarations antérieures et détection des éventuels risques de redressement.</p>
            </div>

            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-mono font-bold text-sm">02</span>
              <h4 class="font-bold text-sm text-slate-900">Mise en Conformité</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Régularisation des déclarations en retard et apurement des pénalités auprès du centre fiscal.</p>
            </div>

            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-mono font-bold text-sm">03</span>
              <h4 class="font-bold text-sm text-slate-900">Suivi Mensuel</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Télé-déclarations mensuelles ponctuelles avant le 15 du mois pour éviter tout blocage du compte fiscal.</p>
            </div>

            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-mono font-bold text-sm">04</span>
              <h4 class="font-bold text-sm text-slate-900">Liasse DSF Annuelle</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Établissement du bilan annuel certifié avant le 15 mars conformément aux règles DGI.</p>
            </div>

            <div class="card-light p-6 rounded-2xl bg-white border border-slate-200 space-y-2.5" data-reveal="up">
              <span class="w-8 h-8 rounded-xl bg-lime-500 text-marine-950 flex items-center justify-center font-mono font-black text-sm">05</span>
              <h4 class="font-bold text-sm text-slate-900">Optimisation Légale</h4>
              <p class="text-[11px] text-slate-500 leading-snug">Conseil permanent pour activer les crédits d'impôt et régimes fiscaux avantageux au Cameroun.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 4. CABINET CONSEIL & CONFIDENTIALITÉ GARANTIE                     -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-white border-t border-slate-200">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div class="card-light rounded-3xl overflow-hidden border border-slate-200 shadow-sm" data-reveal="up">
            <img src="./assets/images/portrait-pdg.jpg" alt="Direction du pôle fiscalité et conseil" class="w-full h-56 object-cover object-top" />
            <div class="p-6 space-y-2">
              <h4 class="font-serif text-lg font-bold text-marine-900">Conseillers Fiscaux Émérites</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Une expertise approfondie de la fiscalité locale et sous-régionale CEMAC pour vous faire bénéficier de tous les avantages prévus par la loi de finances.</p>
            </div>
          </div>

          <div class="card-light rounded-3xl overflow-hidden border border-slate-200 shadow-sm" data-reveal="up">
            <img src="./assets/images/galerie-bureau-douala.jpg" alt="Locaux de consultation fiscale à Douala" class="w-full h-56 object-cover" />
            <div class="p-6 space-y-2">
              <h4 class="font-serif text-lg font-bold text-marine-900">Confidentialité & Déontologie</h4>
              <p class="text-xs text-slate-600 leading-relaxed">Nos entretiens se déroulent en toute discrétion dans nos bureaux de Douala avec une protection stricte de vos données financières.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 5. PARTENAIRE ASSOCIÉ : DGI & CENTRES DES IMPÔTS                  -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 max-w-7xl mx-auto bg-white border-t border-slate-200">
        <div class="card-light p-8 md:p-12 rounded-3xl border border-slate-200 bg-indigo-50/20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div class="lg:col-span-4 text-center lg:text-left flex flex-col items-center lg:items-start gap-4">
            <img src="./assets/images/partenaire-fiscalite.jpg" alt="Direction Générale des Impôts DGI" class="h-16 w-auto object-contain bg-white p-3 rounded-2xl border border-slate-200 shadow-sm" />
            <span class="text-xs font-bold text-slate-900">Direction Générale des Impôts (DGI)</span>
          </div>
          <div class="lg:col-span-8 space-y-3">
            <h3 class="font-serif text-2xl font-bold text-marine-900">Maîtrise Parfaite des Télé-Procédures DGI</h3>
            <p class="text-slate-600 text-xs md:text-sm leading-relaxed">
              En lien constant avec les Centres Spécialisés des Impôts (CSI) et Centres des Impôts des Moyennes et Grandes Entreprises de Douala (Littoral I/II) et Yaoundé, nous garantissons l'édition de vos attestations de conformité fiscale (ANR) indispensables aux marchés publics et appels d'offres.
            </p>
          </div>
        </div>

        <!-- Témoignage PME Fiscale -->
        <div class="card-light p-6 rounded-3xl border border-slate-200 shadow-sm bg-[#FAF9F5] mt-8 flex flex-col sm:flex-row items-center gap-5">
          <img src="./assets/images/temoin-1.jpg" alt="M. Tchakounté - PDG" class="w-16 h-16 rounded-full object-cover border-2 border-indigo-500 flex-shrink-0" />
          <div class="space-y-1 text-center sm:text-left">
            <h4 class="font-bold text-sm text-slate-900">M. Tchakounté • PDG Société d'Import-Export (Douala)</h4>
            <p class="text-xs text-slate-600 italic leading-relaxed">« L'audit préventif de MULTI BUSINESS SARL nous a épargné un redressement fiscal majeur lors d'un contrôle DGI. Leur rigueur comptable est exemplaire. »</p>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 5. FAQ FISCALITÉ                                                  -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 bg-[#FAF9F5] border-t border-slate-200" data-theme="ivory">
        <div class="max-w-4xl mx-auto space-y-10">
          <div class="text-center space-y-2" data-reveal="up">
            <h2 class="font-serif text-3xl font-extrabold text-marine-900">Questions Fréquentes sur la Fiscalité</h2>
          </div>

          <div class="space-y-4" data-accordion-group>
            <div class="card-light rounded-2xl border border-slate-200 bg-white overflow-hidden" data-accordion-item>
              <button class="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-slate-900" data-accordion-trigger>
                <span>Quel est le taux du précompte sur les loyers au Cameroun ?</span>
                <span class="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs transition-transform" data-accordion-icon>▼</span>
              </button>
              <div class="px-5 pb-5 text-xs text-slate-600 leading-relaxed hidden" data-accordion-content>
                Le taux de retenue à la source au titre de l'impôt sur les revenus fonciers est de 15&nbsp;% sur le montant brut du loyer, à reverser au centre fiscal avant le 15 du mois suivant l'encaissement.
              </div>
            </div>

            <div class="card-light rounded-2xl border border-slate-200 bg-white overflow-hidden" data-accordion-item>
              <button class="w-full p-5 text-left flex items-center justify-between font-bold text-sm text-slate-900" data-accordion-trigger>
                <span>Quelle est la date limite de dépôt de la DSF au Cameroun ?</span>
                <span class="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center text-xs transition-transform" data-accordion-icon>▼</span>
              </button>
              <div class="px-5 pb-5 text-xs text-slate-600 leading-relaxed hidden" data-accordion-content>
                La Déclaration Statistique et Fiscale (DSF) de l'exercice clos au 31 décembre doit être télé-déposée au plus tard le 15 mars de chaque année.
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
            <h3 class="font-serif text-2xl font-bold text-marine-900">Gestion Immobilière & Déclaration Fiscale des Bailleurs</h3>
            <p class="text-xs text-slate-600 max-w-xl">Confiez la gestion de vos loyers à MULTI BUSINESS SARL et bénéficiez de la prise en charge automatique de vos déclarations de précompte foncier.</p>
          </div>
          <a href="/gestion-immobiliere" data-link class="btn-outline !px-6 !py-3 text-xs whitespace-nowrap bg-white">Découvrir la Gestion Immobilière →</a>
        </div>
      </section>

      <!-- CTA Final -->
      <section class="relative py-20 px-4 md:px-8 overflow-hidden" data-theme="photo">
        <div class="absolute inset-0 z-0">
          <img src="./assets/images/cta-final-bg.jpg" alt="Fiscalité Douala" class="w-full h-full object-cover object-center filter brightness-[0.45]" />
        </div>
        <div class="container max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-white">Besoin d'un Conseil Fiscal ou d'un Bilan d'Entreprise ?</h2>
          <p class="text-sm md:text-base text-slate-200 max-w-xl mx-auto">Échangez confidentiellement avec nos fiscalistes pour auditer et optimiser vos déclarations.</p>
          <div class="pt-2 flex justify-center gap-4">
            <a href="/contact" data-link class="btn-primary !px-8 !py-4 text-sm font-bold shadow-xl">Prendre rendez-vous avec un fiscaliste</a>
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
