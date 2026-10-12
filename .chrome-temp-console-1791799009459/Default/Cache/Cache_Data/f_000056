/**
 * MULTI BUSINESS SARL - Page NOS SERVICES (Hub Phase 5 Production)
 * Présentation des 4 Pôles d'Excellence en Sections Alternées Image/Texte
 * 1 Couleur Signature par Service • Ratios WCAG AAA • 100% Light Luxury
 */
import { CONFIG } from '../config.js';
import { initUIComponents } from '../ui.js';
import { icon, iconBadge } from '../icons.js';

export default {
  meta: {
    title: "Nos Services d'Affaires & Gestion Locative | MULTI BUSINESS SARL",
    description: "Découvrez les 4 pôles d'excellence de MULTI BUSINESS SARL au Cameroun : Gestion Locative (phare 70%), Création d'Entreprise, Dédouanement et Fiscalité & Conseil.",
    image: "./assets/images/hero-services.jpg"
  },

  _cleanups: [],

  async render() {
    return `
      <!-- ================================================================= -->
      <!-- 1. HERO SERVICES AVEC NAVIGATION PAR ANCRES                       -->
      <!-- ================================================================= -->
      <section class="relative min-h-[75vh] lg:min-h-[70vh] flex items-center justify-center pt-hero pb-16 px-4 md:px-8 overflow-hidden bg-white" data-theme="light">
        <div class="hero-photo-bg">
          <img src="./assets/images/gestionlocative/equipe.jpeg" alt="Services d'affaires au Cameroun" class="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.02]" />
          <div class="hero-photo-overlay-light"></div>
        </div>

        <div class="container max-w-5xl mx-auto text-center relative z-10" data-stagger-item>
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-mint-50 text-mint-800 border border-mint-200/80 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-mint-500 animate-pulse"></span>
            <span>Catalogue des 4 Domaines d'Intervention</span>
          </div>

          <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-marine-900 leading-[1.12] tracking-tight mb-6 max-w-4xl mx-auto">
            Une expertise globale pour piloter vos actifs et formalités au Cameroun.
          </h1>

          <p class="text-base sm:text-lg md:text-xl text-slate-700 font-normal max-w-3xl mx-auto mb-10 leading-relaxed">
            De la <strong>gestion locative</strong> aux formalités de <strong>création d'entreprise</strong>, de <strong>transit douanier</strong> et de <strong>fiscalité</strong>, bénéficiez d'un accompagnement d'élite et sécurisé.
          </p>

          <!-- Barre de Navigation Rapide par Ancres Fluides -->
          <div class="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto">
            <a href="/gestion-locative" data-link class="px-4 py-2 rounded-full bg-emerald-50 border border-emerald-300 text-xs font-bold text-emerald-900 shadow-sm transition-all hover:bg-emerald-100 flex items-center gap-1.5">
              ${icon('building', { class: 'w-3.5 h-3.5 text-emerald-700' })}
              <span>1. Gestion Locative (Phare)</span>
            </a>
            <a href="#creation-entreprise" class="px-4 py-2 rounded-full bg-amber-50 border border-amber-300 text-xs font-bold text-amber-950 shadow-sm transition-all hover:bg-amber-100 flex items-center gap-1.5">
              ${icon('landmark', { class: 'w-3.5 h-3.5 text-amber-700' })}
              <span>2. Création d'Entreprise</span>
            </a>
            <a href="#dedouanement" class="px-4 py-2 rounded-full bg-sky-50 border border-sky-300 text-xs font-bold text-sky-950 shadow-sm transition-all hover:bg-sky-100 flex items-center gap-1.5">
              ${icon('ship', { class: 'w-3.5 h-3.5 text-sky-700' })}
              <span>3. Dédouanement & Transit</span>
            </a>
            <a href="#fiscalite" class="px-4 py-2 rounded-full bg-indigo-50 border border-indigo-300 text-xs font-bold text-indigo-950 shadow-sm transition-all hover:bg-indigo-100 flex items-center gap-1.5">
              ${icon('scale', { class: 'w-3.5 h-3.5 text-indigo-700' })}
              <span>4. Fiscalité & Conseil</span>
            </a>
          </div>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 2. SERVICE 1 : GESTION LOCATIVE (Pôle Phare 70%)                   -->
      <!-- ================================================================= -->
      <section id="gestion-locative" class="py-24 px-4 md:px-8 max-w-7xl mx-auto bg-white border-t border-slate-200">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-6 space-y-6" data-reveal="left">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300 text-xs font-bold uppercase tracking-wider">
              ${icon('star', { class: 'w-3.5 h-3.5 text-emerald-700 fill-current' })}
              <span>Pôle Majeur de notre Activité</span>
            </div>

            <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900 leading-tight">
              Gestion Locative Intelligente & Espace Propriétaire
            </h2>

            <p class="text-slate-600 text-sm md:text-base leading-relaxed">
              Nous prenons en charge la gestion intégrale de vos immeubles, appartements, studios, bureaux et magasins au Cameroun. Baux conformes OHADA, recouvrement automatisé par <strong>Orange Money</strong> et <strong>MTN MoMo</strong>, reversement ponctuel et suivi en direct sur <a href="https://apps.multibusiness.cm/" target="_blank" rel="noopener noreferrer" class="text-emerald-700 font-bold hover:underline">apps.multibusiness.cm</a>.
            </p>

            <div class="space-y-3.5 pt-2">
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  ${icon('check', { class: 'w-3.5 h-3.5' })}
                </div>
                <div>
                  <h4 class="text-slate-900 font-bold text-sm">Zéro Impayé & Huissiers de 1ère et 2e Charges</h4>
                  <p class="text-xs text-slate-600">Partenariat avec des études d'huissiers assermentés pour les expulsions régulières et recouvrements légaux.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  ${icon('check', { class: 'w-3.5 h-3.5' })}
                </div>
                <div>
                  <h4 class="text-slate-900 font-bold text-sm">Reversement Programmé chaque du Mois</h4>
                  <p class="text-xs text-slate-600">Sur votre compte bancaire ou compte Mobile Money sans déplacement.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-900 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  ${icon('wrench', { class: 'w-3.5 h-3.5' })}
                </div>
                <div>
                  <h4 class="text-slate-900 font-bold text-sm">Entretien & Suivi Technique des Logements Gérés</h4>
                  <p class="text-xs text-slate-600">Intervention rigoureuse de techniciens qualifiés pour préserver la valeur locative de vos biens.</p>
                </div>
              </div>
            </div>

            <div class="pt-4 flex flex-wrap items-center gap-4">
              <a href="/gestion-locative" data-link class="btn-primary !px-6 !py-3.5 text-xs font-bold shadow-md inline-flex items-center gap-2">
                <span>Découvrir l'offre Bailleurs & Locataires</span>
                ${icon('arrow-right', { class: 'w-4 h-4' })}
              </a>
              <a href="https://apps.multibusiness.cm/" target="_blank" rel="noopener noreferrer" class="btn-outline !px-5 !py-3.5 text-xs font-bold inline-flex items-center gap-2">
                <span>Espace en Ligne</span>
                ${icon('external-link', { class: 'w-3.5 h-3.5' })}
              </a>
            </div>
          </div>

          <div class="lg:col-span-6" data-reveal="right">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img src="./assets/images/gestionlocative/pexels-mohammadhu1-12983570.jpg" alt="Gestion Locative MULTI BUSINESS SARL" class="w-full h-auto object-cover max-h-[460px] transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg flex items-center justify-between">
                <div>
                  <span class="text-xs font-bold text-slate-900 block">Plateforme Digitale Propriétaire</span>
                  <span class="text-[11px] text-slate-500">apps.multibusiness.cm</span>
                </div>
                <span class="px-2.5 py-1 bg-emerald-100 text-emerald-900 text-xs font-bold rounded-lg tabular-nums">100&nbsp;% Traçable</span>
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
              <img src="./assets/images/creationentreprise/pexels-contact-me-923323219715-262056873-12703094.jpg" alt="Création d'Entreprise au Cameroun" class="w-full h-auto object-cover max-h-[460px] transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg flex items-center justify-between">
                <div>
                  <span class="text-xs font-bold text-slate-900 block">Délai Record Guichet Unique</span>
                  <span class="text-[11px] text-slate-500">CFCE • RCCM • NIU</span>
                </div>
                <span class="px-2.5 py-1 bg-amber-100 text-amber-950 text-xs font-bold rounded-lg tabular-nums">Délai Chrono</span>
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
              <a href="/creation-entreprise" data-link class="btn-primary !px-6 !py-3.5 text-xs font-bold shadow-md inline-flex items-center gap-2">
                <span>Lancer la création de mon entreprise</span>
                ${icon('arrow-right', { class: 'w-4 h-4' })}
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
                <div class="w-6 h-6 rounded-lg bg-sky-100 text-sky-900 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  ${icon('ship', { class: 'w-3.5 h-3.5 text-sky-800' })}
                </div>
                <div>
                  <h4 class="text-slate-900 font-bold text-sm">Conteneurs Complets (FCL) & Groupage (LCL)</h4>
                  <p class="text-xs text-slate-600">Prise en charge dès l'arrivée du navire et suivi direct sur les plateformes douanières CAMCIS / SYDONIA.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-sky-100 text-sky-900 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  ${icon('truck', { class: 'w-3.5 h-3.5 text-sky-800' })}
                </div>
                <div>
                  <h4 class="text-slate-900 font-bold text-sm">Fret Aérien Express (Aéroports de Douala & Yaoundé-Nsimalen)</h4>
                  <p class="text-xs text-slate-600">Dédouanement de colis urgents, échantillons et matériels industriels sensibles.</p>
                </div>
              </div>
            </div>

            <div class="pt-4">
              <a href="/dedouanement" data-link class="btn-primary !px-6 !py-3.5 text-xs font-bold shadow-md inline-flex items-center gap-2">
                <span>Estimer mes frais de dédouanement</span>
                ${icon('arrow-right', { class: 'w-4 h-4' })}
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
                <span class="px-2.5 py-1 bg-sky-100 text-sky-950 text-xs font-bold rounded-lg">Conformité DGD</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 5. SERVICE 4 : FISCALITÉ & CONSEIL STRATÉGIQUE (Indigo Theme)     -->
      <!-- ================================================================= -->
      <section id="fiscalite" class="py-24 px-4 md:px-8 bg-[#FAF9F5] border-t border-slate-200" data-theme="ivory">
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
                <div class="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-900 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  ${icon('bar-chart-3', { class: 'w-3.5 h-3.5 text-indigo-800' })}
                </div>
                <div>
                  <h4 class="text-slate-900 font-bold text-sm">Déclaration Statistique et Fiscale (DSF)</h4>
                  <p class="text-xs text-slate-600">Établissement des liasses bilancielles annuelles conformes au système comptable OHADA.</p>
                </div>
              </div>
              <div class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-900 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                  ${icon('shield-check', { class: 'w-3.5 h-3.5 text-indigo-800' })}
                </div>
                <div>
                  <h4 class="text-slate-900 font-bold text-sm">Fiscalité Foncière & Précomptes sur Loyers</h4>
                  <p class="text-xs text-slate-600">Gestion des 15&nbsp;% de retenue à la source et des déclarations de taxe foncière pour bailleurs.</p>
                </div>
              </div>
            </div>

            <div class="pt-4">
              <a href="/fiscalite-conseil" data-link class="btn-primary !px-6 !py-3.5 text-xs font-bold shadow-md inline-flex items-center gap-2">
                <span>Prendre rendez-vous avec un fiscaliste</span>
                ${icon('arrow-right', { class: 'w-4 h-4' })}
              </a>
            </div>
          </div>

          <div class="lg:col-span-6" data-reveal="right">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200 group">
              <img src="./assets/images/fiscalite/pexels-tima-miroshnichenko-5439140.jpg" alt="Fiscalité et Conseil d'Entreprise" class="w-full h-auto object-cover max-h-[460px] transition-transform duration-500 group-hover:scale-105" />
              <div class="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 shadow-lg flex items-center justify-between">
                <div>
                  <span class="text-xs font-bold text-slate-900 block">Conformité DGI Cameroun</span>
                  <span class="text-[11px] text-slate-500">TVA • IS • IRPP • DSF</span>
                </div>
                <span class="px-2.5 py-1 bg-indigo-100 text-indigo-950 text-xs font-bold rounded-lg">0 Pénalité</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 6. TÉMOIGNAGES CLIENTS PAR SERVICE                                -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 bg-white border-t border-slate-200" data-theme="light">
        <div class="container max-w-6xl mx-auto space-y-12">
          
          <div class="text-center max-w-2xl mx-auto space-y-3" data-reveal="up">
            <span class="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold uppercase tracking-wider">Retours d'Expérience</span>
            <h3 class="font-serif text-3xl font-extrabold text-marine-900">Ce Que Nos Clients Disent de Nos Services</h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div class="card-light p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-4 shadow-sm" data-reveal="up">
              <div class="flex items-center gap-3">
                <img src="./assets/images/temoin-4.jpg" alt="Mme Sophie M." class="w-12 h-12 rounded-full object-cover border-2 border-amber-500" />
                <div>
                  <h4 class="font-bold text-sm text-slate-900">Mme Sophie M.</h4>
                  <p class="text-xs text-slate-500">Directrice SARL Agro</p>
                </div>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed italic">
                « Création de ma SARL en un temps record au CFCE et déclaration fiscale DSF irréprochable. Une équipe réactive et transparente qui maîtrise parfaitement les rouages administratifs. »
              </p>
              <div class="flex text-amber-400 gap-1">${Array(5).fill(icon('star', { class: 'w-3.5 h-3.5 fill-amber-400 text-amber-400' })).join('')}</div>
            </div>
            
            <div class="card-light p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-4 shadow-sm" data-reveal="up">
              <div class="flex items-center gap-3">
                <img src="./assets/images/pexels-temoin5.jpg" alt="M. Kamga B." class="w-12 h-12 rounded-full object-cover border-2 border-emerald-500" />
                <div>
                  <h4 class="font-bold text-sm text-slate-900">M. Kamga B.</h4>
                  <p class="text-xs text-slate-500">Bailleur à Ndogbon</p>
                </div>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed italic">
                « Depuis que MULTI BUSINESS SARL gère mon immeuble de 12 appartements, je reçois mon reversement Orange Money sans faute de chaque mois. Zéro souci avec les locataires. »
              </p>
              <div class="flex text-amber-400 gap-1">${Array(5).fill(icon('star', { class: 'w-3.5 h-3.5 fill-amber-400 text-amber-400' })).join('')}</div>
            </div>

            

            <div class="card-light p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-4 shadow-sm" data-reveal="up">
              <div class="flex items-center gap-3">
                <img src="./assets/images/pexels-temoin4.jpg" alt="M. Ibrahim K." class="w-12 h-12 rounded-full object-cover border-2 border-sky-500" />
                <div>
                  <h4 class="font-bold text-sm text-slate-900">M. Ibrahim K.</h4>
                  <p class="text-xs text-slate-500">Importateur Électronique</p>
                </div>
              </div>
              <p class="text-xs text-slate-600 leading-relaxed italic">
                « Dédouanement de deux conteneurs de 40 pieds au port de Douala en un temps record. Aucune surestarie payée grâce à leur anticipation documentaire. »
              </p>
              <div class="flex text-amber-400 gap-1">${Array(5).fill(icon('star', { class: 'w-3.5 h-3.5 fill-amber-400 text-amber-400' })).join('')}</div>
            </div>
          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 7. CTA FINAL SUR FOND PHOTO                                       -->
      <!-- ================================================================= -->
      <section class="relative py-28 px-4 md:px-8 overflow-hidden" data-theme="photo">
        <div class="absolute inset-0 z-0">
          <img src="./assets/images/gestionlocative/pexels-lucasandrade-17639678.jpg" alt="MULTI BUSINESS SARL Cameroun" class="w-full h-full object-cover object-center filter brightness-75" />
          <div class="cta-photo-overlay"></div>
        </div>

        <div class="container max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-lime-400 text-xs font-semibold">
            ${icon('shield-check', { class: 'w-4 h-4' })}
            <span>MULTI BUSINESS SARL • CAMEROUN</span>
          </div>

          <h2 class="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
            Un Besoin Spécifique pour Votre Entreprise ou Votre Patrimoine ?
          </h2>

          <p class="text-base sm:text-lg text-slate-100 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
            Échangez directement avec nos experts pour une prise en charge sur mesure de votre dossier.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a href="/contact" data-link class="btn-primary !px-8 !py-4 text-sm font-bold shadow-xl flex items-center gap-2" data-magnetic>
              <span>Demander une étude gratuite</span>
              ${icon('arrow-right', { class: 'w-4 h-4' })}
            </a>
            <a href="https://wa.me/237651559411" target="_blank" rel="noopener noreferrer" class="btn-ghost-photo !px-8 !py-4 text-sm font-bold flex items-center gap-2" data-magnetic>
              ${icon('phone', { class: 'w-4 h-4' })}
              <span>WhatsApp Direct (+237 651 55 94 11)</span>
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
