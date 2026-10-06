/**
 * MULTI BUSINESS SARL - Page NOS SERVICES (Hub Phase 5 Production)
 * Présentation des 5 Pôles d'Affaires en Sections Alternées Image/Texte
 * 1 Couleur Signature par Service • Ratios WCAG AAA • 100% Light Luxury
 */
import { CONFIG } from '../config.js';
import { initUIComponents } from '../ui.js';

export default {
  meta: {
    title: "Nos Services d'Affaires & Gestion Locative | MULTI BUSINESS SARL",
    description: "Découvrez les 5 pôles d'expertise de MULTI BUSINESS SARL à Douala et Yaoundé : Gestion Immobilière, Création d'Entreprise, Dédouanement, Prestations Techniques et Fiscalité.",
    image: "./assets/images/hero-services.jpg"
  },

  _cleanups: [],

  async render() {
    return `
      <!-- ================================================================= -->
      <!-- 1. HERO SERVICES AVEC NAVIGATION PAR ANCRES                       -->
      <!-- ================================================================= -->
      <section class="relative min-h-[75vh] lg:min-h-[70vh] flex items-center justify-center pt-32 pb-16 px-4 md:px-8 overflow-hidden bg-white" data-theme="light">
        <div class="hero-photo-bg">
          <img src="./assets/images/hero-services.jpg" alt="Services d'affaires à Douala" class="w-full h-full object-cover object-center filter brightness-[0.97] contrast-[1.03]" />
          <div class="hero-photo-overlay-light"></div>
        </div>

        <div class="container max-w-5xl mx-auto text-center relative z-10" data-stagger-item>
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint-50 text-mint-800 border border-mint-200/80 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-mint-500 animate-pulse"></span>
            <span>Catalogue des 5 Domaines d'Intervention</span>
          </div>

          <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-marine-900 leading-[1.12] tracking-tight mb-6 max-w-4xl mx-auto">
            Une expertise globale pour piloter vos actifs et formalités au Cameroun.
          </h1>

          <p class="text-base sm:text-lg md:text-xl text-slate-700 font-normal max-w-3xl mx-auto mb-10 leading-relaxed">
            De la <strong>gestion locative intelligente (70&nbsp;% de notre activité)</strong> aux formalités de <strong>création d'entreprise</strong>, de <strong>transit douanier</strong>, de <strong>travaux techniques</strong> et de <strong>fiscalité</strong>, bénéficiez d'un accompagnement d'élite.
          </p>

          <!-- Barre de Navigation Rapide par Ancres Fluides -->
          <div class="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            <a href="/gestion-immobiliere" data-link class="px-4 py-2 rounded-full bg-emerald-50 border border-emerald-300 text-xs font-bold text-emerald-900 shadow-sm transition-all hover:bg-emerald-100 flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span>1. Gestion Immobilière (Phare)</span>
            </a>
            <a href="#creation-entreprise" class="px-4 py-2 rounded-full bg-amber-50 border border-amber-300 text-xs font-bold text-amber-950 shadow-sm transition-all hover:bg-amber-100 flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-amber-600"></span>
              <span>2. Création d'Entreprise</span>
            </a>
            <a href="#dedouanement" class="px-4 py-2 rounded-full bg-sky-50 border border-sky-300 text-xs font-bold text-sky-950 shadow-sm transition-all hover:bg-sky-100 flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-sky-600"></span>
              <span>3. Dédouanement & Transit</span>
            </a>
            <a href="#prestations" class="px-4 py-2 rounded-full bg-rose-50 border border-rose-300 text-xs font-bold text-rose-950 shadow-sm transition-all hover:bg-rose-100 flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-rose-600"></span>
              <span>4. Travaux & Artisans</span>
            </a>
            <a href="#fiscalite" class="px-4 py-2 rounded-full bg-indigo-50 border border-indigo-300 text-xs font-bold text-indigo-950 shadow-sm transition-all hover:bg-indigo-100 flex items-center gap-1.5">
              <span class="w-2 h-2 rounded-full bg-indigo-600"></span>
              <span>5. Fiscalité & Conseil</span>
            </a>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 2. SERVICE 1 : GESTION IMMOBILIÈRE (Pôle Phare 70%)               -->
      <!-- ================================================================= -->
      <section id="gestion-immobiliere" class="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-white border-t border-slate-200">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 space-y-6" data-reveal="left">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold uppercase tracking-wider">
              <span class="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>Pôle Majeur • 70&nbsp;% de notre Activité</span>
            </div>

            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900 leading-tight">
              Gestion Locative Intelligente & Plateforme SaaS Propriétaire
            </h2>

            <p class="text-slate-600 text-sm md:text-base leading-relaxed">
              Nous prenons en charge la gestion intégrale de vos immeubles, appartements, studios, bureaux et magasins à Douala et Yaoundé. Baux conformes OHADA, recouvrement automatisé par <strong>Orange Money</strong> et <strong>MTN MoMo</strong>, reversement ponctuel et suivi en direct sur <a href="https://app.multibusiness.cm/" target="_blank" rel="noopener" class="text-emerald-700 font-bold hover:underline">app.multibusiness.cm</a>.
            </p>

            <div class="space-y-3.5 pt-2">
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</div>
                <div>
                  <h4 class="text-slate-900 font-bold text-sm">Zéro Impayé & Huissiers de 1ère et 2e Charges</h4>
                  <p class="text-xs text-slate-600">Partenariat avec des études d'huissiers assermentés pour les expulsions et recouvrements légaux.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">✓</div>
                <div>
                  <h4 class="text-slate-900 font-bold text-sm">Reversement Programmé le 5 du Mois</h4>
                  <p class="text-xs text-slate-600">Sur votre compte bancaire ou compte Mobile Money sans déplacement.</p>
                </div>
              </div>
            </div>

            <div class="pt-4 flex flex-wrap items-center gap-4">
              <a href="/gestion-immobiliere" data-link class="btn-primary !px-6 !py-3.5 text-xs font-bold shadow-md">
                <span>Découvrir l'offre Bailleurs & Locataires</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <a href="https://app.multibusiness.cm/" target="_blank" rel="noopener" class="btn-outline !px-5 !py-3.5 text-xs font-mono font-bold">
                <span>Espace SaaS →</span>
              </a>
            </div>
          </div>

          <div class="lg:col-span-6" data-reveal="right">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img src="./assets/images/service-immo.jpg" alt="Gestion Immobilière MULTI BUSINESS SARL" class="w-full h-auto object-cover max-h-[460px] transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg flex items-center justify-between">
                <div>
                  <span class="text-xs font-bold text-slate-900 block">Plateforme SaaS Propriétaire</span>
                  <span class="text-[11px] text-slate-500 font-mono">app.multibusiness.cm</span>
                </div>
                <span class="px-2.5 py-1 bg-emerald-100 text-emerald-900 text-xs font-bold rounded-lg font-mono">100&nbsp;% Traçable</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 3. SERVICE 2 : CRÉATION D'ENTREPRISE (Amber Theme)                -->
      <!-- ================================================================= -->
      <section id="creation-entreprise" class="py-24 px-4 md:px-8 bg-[#FAF9F5] border-t border-slate-200" data-theme="ivory">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 order-2 lg:order-1" data-reveal="left">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img src="./assets/images/service-creation.jpg" alt="Création d'Entreprise au Cameroun" class="w-full h-auto object-cover max-h-[460px] transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg flex items-center justify-between">
                <div>
                  <span class="text-xs font-bold text-slate-900 block">Délai Record Guichet Unique</span>
                  <span class="text-[11px] text-slate-500">CFCE • RCCM • NIU</span>
                </div>
                <span class="px-2.5 py-1 bg-amber-100 text-amber-950 text-xs font-bold rounded-lg font-mono">72h Chrono</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6 order-1 lg:order-2 space-y-6" data-reveal="right">
            <span class="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-950 border border-amber-300 text-xs font-bold uppercase tracking-wider">Pôle Création & Formalités</span>
            
            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900 leading-tight">
              Création d'Entreprise Clé en Main & Formalités OHADA
            </h2>

            <p class="text-slate-600 text-sm md:text-base leading-relaxed">
              Donnez vie à votre projet entrepreneurial en toute sécurité. Nous prenons en charge l'ensemble des formalités d'immatriculation juridique auprès du CFCE, du Greffe du Tribunal (RCCM), de la DGI (NIU) et de la CNPS.
            </p>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-slate-700">
              <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <strong class="text-slate-900 block font-bold">SARL & SAS</strong>
                <p class="text-[11px] text-slate-500 leading-snug">Rédaction de statuts notariés et publication aux annonces légales.</p>
              </div>
              <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <strong class="text-slate-900 block font-bold">Établissements (ETS)</strong>
                <p class="text-[11px] text-slate-500 leading-snug">Immatriculation rapide pour commerçants et prestataires individuels.</p>
              </div>
              <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <strong class="text-slate-900 block font-bold">Modifications Statutaires</strong>
                <p class="text-[11px] text-slate-500 leading-snug">Changement de gérant, augmentation de capital, transfert de siège.</p>
              </div>
              <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1">
                <strong class="text-slate-900 block font-bold">Domiciliation Commerciale</strong>
                <p class="text-[11px] text-slate-500 leading-snug">Adresse prestigieuse à Douala pour votre siège social.</p>
              </div>
            </div>

            <div class="pt-2">
              <a href="/contact" data-link class="btn-primary !px-6 !py-3.5 text-xs font-bold shadow-md">
                <span>Lancer la création de mon entreprise</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 4. SERVICE 3 : DÉDOUANEMENT & TRANSIT (Ocean Theme)               -->
      <!-- ================================================================= -->
      <section id="dedouanement" class="py-24 px-4 md:px-8 bg-white border-t border-slate-200">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 space-y-6" data-reveal="left">
            <span class="inline-block px-3 py-1 rounded-full bg-sky-100 text-sky-950 border border-sky-300 text-xs font-bold uppercase tracking-wider">Pôle Transit & Douanes</span>
            
            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900 leading-tight">
              Dédouanement Fluide & Transit Portuaire (Douala & Kribi)
            </h2>

            <p class="text-slate-600 text-sm md:text-base leading-relaxed">
              Évitez les surestaries et les blocages en douane. Nos déclarants expérimentés assurent le traitement rapide et conforme de vos déclarations d'importation et d'exportation au Port Autonome de Douala et au Port en Eau Profonde de Kribi.
            </p>

            <div class="space-y-3 pt-2">
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-sky-100 text-sky-900 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">⚓</div>
                <div>
                  <h4 class="text-slate-900 font-bold text-sm">Conteneurs Complets (FCL) & Groupage (LCL)</h4>
                  <p class="text-xs text-slate-600">Prise en charge dès l'arrivée du navire et suivi direct sur les plateformes douanières SYDONIA.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-sky-100 text-sky-900 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">📦</div>
                <div>
                  <h4 class="text-slate-900 font-bold text-sm">Fret Aérien Express (Aéroport Douala / Nsimalen)</h4>
                  <p class="text-xs text-slate-600">Dédouanement de colis urgents, échantillons et matériels industriels sensibles.</p>
                </div>
              </div>
            </div>

            <div class="pt-4">
              <a href="/contact" data-link class="btn-primary !px-6 !py-3.5 text-xs font-bold shadow-md">
                <span>Estimer mes frais de dédouanement</span>
              </a>
            </div>
          </div>

          <div class="lg:col-span-6" data-reveal="right">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img src="./assets/images/service-dedouanement.jpg" alt="Dédouanement Port de Douala" class="w-full h-auto object-cover max-h-[460px] transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg flex items-center justify-between">
                <div>
                  <span class="text-xs font-bold text-slate-900 block">Ports Autonomes</span>
                  <span class="text-[11px] text-slate-500">Douala • Kribi</span>
                </div>
                <span class="px-2.5 py-1 bg-sky-100 text-sky-950 text-xs font-bold rounded-lg font-mono">Conformité DGD</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 5. SERVICE 4 : TRAVAUX & PRESTATIONS TECHNIQUES (Coral Theme)     -->
      <!-- ================================================================= -->
      <section id="prestations" class="py-24 px-4 md:px-8 bg-[#FAF9F5] border-t border-slate-200" data-theme="ivory">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 order-2 lg:order-1" data-reveal="left">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img src="./assets/images/service-prestations.jpg" alt="Prestations de travaux et artisans MULTI BUSINESS SARL" class="w-full h-auto object-cover max-h-[460px] transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg flex items-center justify-between">
                <div>
                  <span class="text-xs font-bold text-slate-900 block">Artisans & Techniciens Qualifiés</span>
                  <span class="text-[11px] text-slate-500">Intervention sous 24h</span>
                </div>
                <span class="px-2.5 py-1 bg-rose-100 text-rose-950 text-xs font-bold rounded-lg font-mono">Devis Garanti</span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-6 order-1 lg:order-2 space-y-6" data-reveal="right">
            <span class="inline-block px-3 py-1 rounded-full bg-rose-100 text-rose-950 border border-rose-300 text-xs font-bold uppercase tracking-wider">Pôle Bâtiment & Maintenance</span>
            
            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900 leading-tight">
              Prestations Techniques, Rénovations & Artisans du Bâtiment
            </h2>

            <p class="text-slate-600 text-sm md:text-base leading-relaxed">
              La valorisation de votre patrimoine immobilier passe par un entretien technique irréprochable. Notre réseau d'artisans certifiés intervient rapidement pour tous travaux de réfection, maintenance préventive et mise aux normes.
            </p>

            <div class="grid grid-cols-2 gap-3 text-xs text-slate-700">
              <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span class="font-bold text-slate-900 block">⚡ Électricité & Réseaux</span>
                <span class="text-[11px] text-slate-500">Mise en sécurité, compteurs Eneo.</span>
              </div>
              <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span class="font-bold text-slate-900 block">🚰 Plomberie & Sanitaire</span>
                <span class="text-[11px] text-slate-500">Canalisations, pompes & forages.</span>
              </div>
              <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span class="font-bold text-slate-900 block">🎨 Peinture & Finitions</span>
                <span class="text-[11px] text-slate-500">Enduits, étanchéité façades.</span>
              </div>
              <div class="p-3.5 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <span class="font-bold text-slate-900 block">🪵 Menuiserie & Serrurerie</span>
                <span class="text-[11px] text-slate-500">Portes blindées, baies vitrées.</span>
              </div>
            </div>

            <div class="pt-2">
              <a href="/contact" data-link class="btn-primary !px-6 !py-3.5 text-xs font-bold shadow-md">
                <span>Demander un devis de travaux</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 6. SERVICE 5 : FISCALITÉ & CONSEIL STRATÉGIQUE (Indigo Theme)     -->
      <!-- ================================================================= -->
      <section id="fiscalite" class="py-24 px-4 md:px-8 bg-white border-t border-slate-200">
        <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 space-y-6" data-reveal="left">
            <span class="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-950 border border-indigo-300 text-xs font-bold uppercase tracking-wider">Pôle Conseil Fiscal & DGI</span>
            
            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900 leading-tight">
              Conseil Fiscal, Déclarations Annuelles (DSF) & Audit
            </h2>

            <p class="text-slate-600 text-sm md:text-base leading-relaxed">
              Naviguez sereinement dans la réglementation fiscale camerounaise. Nos fiscalistes sécurisent vos déclarations d'impôts, optimisent légalement vos charges et vous défendent lors des contrôles fiscaux de la DGI.
            </p>

            <div class="space-y-3 pt-2">
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-900 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">📊</div>
                <div>
                  <h4 class="text-slate-900 font-bold text-sm">Déclaration Statistique et Fiscale (DSF)</h4>
                  <p class="text-xs text-slate-600">Établissement des liasses bilancielles annuelles conformes au système comptable OHADA.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-900 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">🛡️</div>
                <div>
                  <h4 class="text-slate-900 font-bold text-sm">Fiscalité Foncière & Précomptes sur Loyers</h4>
                  <p class="text-xs text-slate-600">Gestion des 15&nbsp;% de retenue à la source et des déclarations de taxe foncière pour bailleurs.</p>
                </div>
              </div>
            </div>

            <div class="pt-4">
              <a href="/contact" data-link class="btn-primary !px-6 !py-3.5 text-xs font-bold shadow-md">
                <span>Prendre rendez-vous avec un fiscaliste</span>
              </a>
            </div>
          </div>

          <div class="lg:col-span-6" data-reveal="right">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img src="./assets/images/service-fiscalite.jpg" alt="Fiscalité et Conseil d'Entreprise" class="w-full h-auto object-cover max-h-[460px] transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg flex items-center justify-between">
                <div>
                  <span class="text-xs font-bold text-slate-900 block">Conformité DGI Cameroun</span>
                  <span class="text-[11px] text-slate-500">TVA • IS • IRPP • DSF</span>
                </div>
                <span class="px-2.5 py-1 bg-indigo-100 text-indigo-950 text-xs font-bold rounded-lg font-mono">0 Pénalité</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 7. TÉMOIGNAGES CLIENTS PAR SERVICE                                -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 bg-[#FAF9F5] border-t border-slate-200" data-theme="ivory">
        <div class="container max-w-6xl mx-auto space-y-12">
          
          <div class="text-center max-w-2xl mx-auto space-y-3" data-reveal="up">
            <span class="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider">Retours d'Expérience</span>
            <h3 class="font-serif text-3xl font-extrabold text-marine-900">Ce Que Nos Clients Disent de Nos Services</h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="card-light p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm" data-reveal="up">
              <div class="flex items-center gap-3">
                <img src="./assets/images/temoin-1.jpg" alt="M. Pierre T." class="w-12 h-12 rounded-full object-cover border-2 border-emerald-500" />
                <div>
                  <h4 class="font-bold text-sm text-slate-900">M. Pierre T.</h4>
                  <p class="text-xs text-slate-500 font-mono">Bailleur à Bonapriso</p>
                </div>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed italic">
                « Depuis que MULTI BUSINESS SARL gère mon immeuble de 12 appartements, je reçois mon reversement Orange Money sans faute le 5 de chaque mois. Zéro souci avec les locataires. »
              </p>
              <div class="text-amber-500 text-xs">★★★★★</div>
            </div>

            <div class="card-light p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm" data-reveal="up">
              <div class="flex items-center gap-3">
                <img src="./assets/images/temoin-2.jpg" alt="Mme Sophie M." class="w-12 h-12 rounded-full object-cover border-2 border-amber-500" />
                <div>
                  <h4 class="font-bold text-sm text-slate-900">Mme Sophie M.</h4>
                  <p class="text-xs text-slate-500 font-mono">Directrice SARL Agro</p>
                </div>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed italic">
                « Création de ma SARL en 3 jours au CFCE et déclaration fiscale DSF irréprochable. Une équipe réactive et transparente qui maîtrise parfaitement les rouages administratifs. »
              </p>
              <div class="text-amber-500 text-xs">★★★★★</div>
            </div>

            <div class="card-light p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm" data-reveal="up">
              <div class="flex items-center gap-3">
                <img src="./assets/images/temoin-3.jpg" alt="M. Ibrahim K." class="w-12 h-12 rounded-full object-cover border-2 border-sky-500" />
                <div>
                  <h4 class="font-bold text-sm text-slate-900">M. Ibrahim K.</h4>
                  <p class="text-xs text-slate-500 font-mono">Importateur Électronique</p>
                </div>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed italic">
                « Dédouanement de deux conteneurs de 40 pieds au port de Douala en un temps record. Aucune surestarie payée grâce à leur anticipation documentaire. »
              </p>
              <div class="text-amber-500 text-xs">★★★★★</div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 8. CTA FINAL SUR FOND PHOTO                                       -->
      <!-- ================================================================= -->
      <section class="relative py-24 px-4 md:px-8 overflow-hidden" data-theme="photo">
        <div class="absolute inset-0 z-0">
          <img src="./assets/images/cta-final-bg.jpg" alt="Business Douala" class="w-full h-full object-cover object-center filter brightness-[0.45]" />
        </div>

        <div class="container max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-lime-400 border border-lime-400/30 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
            <span>Devis & Diagnostic Personnalisé</span>
          </span>

          <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Un Besoin Spécifique pour Votre Entreprise ou Votre Patrimoine ?
          </h2>

          <p class="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Échangez directement avec nos conseillers basés à Douala pour une réponse rapide et adaptée à vos objectifs.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="/contact" data-link class="btn-primary !px-8 !py-4 text-base shadow-xl" data-magnetic>
              <span>Demander une étude gratuite</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </a>
            <a href="https://wa.me/237694811715" target="_blank" rel="noopener" class="btn-outline !px-8 !py-4 text-base bg-white/90" data-magnetic>
              <span>WhatsApp Direct (+237 694 811 715)</span>
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
