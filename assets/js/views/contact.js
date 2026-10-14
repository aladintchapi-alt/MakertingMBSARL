/**
 * MULTI BUSINESS SARL - Page CONTACT (Phase 6 Production)
 * Formulaire de RDV validé côté client, WhatsApp direct, 3 téléphones, plan d'accès stylisé & newsletter
 */
import { CONFIG } from '../config.js';
import { showToast, initUIComponents } from '../ui.js';
import { icon } from '../icons.js';
import { PremiumMapController } from '../modules/map/map-controller.js';

export default {
  meta: {
    title: "Contactez-Nous | Siège Social Douala (Dakar)",
    description: "Contactez MULTI BUSINESS SARL à Douala. Rendez-vous gestion locative, fiscalité, création d'entreprise ou dédouanement. Échange direct WhatsApp.",
    image: "./assets/images/hero-accueil.jpg"
  },

  _cleanups: [],

  async render() {
    return `
      <!-- ================================================================= -->
      <!-- 1. HERO CONTACT                                                   -->
      <!-- ================================================================= -->
      <section class="relative min-h-[50vh] flex items-center justify-center pt-hero pb-14 px-4 md:px-8 overflow-hidden bg-white" data-theme="light">
        <div class="hero-photo-bg">
          <img src="./assets/images/gestionlocative/Gemini_Generated_Image_cv6cy4cv6cy4cv6c.jpeg" alt="Siège MULTI BUSINESS SARL Douala" class="w-full h-full object-cover object-center filter brightness-[0.97] contrast-[1.03]" />
          <div class="hero-photo-overlay-light"></div>
        </div>

        <div class="container max-w-5xl mx-auto text-center relative z-10" data-stagger-item>
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-xs font-bold tracking-wider uppercase mb-6 shadow-sm">
            <span class="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Disponibilité Immédiate • Réponse sous 15 min</span>
          </div>

          <h1 class="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-marine-900 leading-[1.12] tracking-tight mb-4 max-w-4xl mx-auto">
            Prenons rendez-vous pour votre projet.
          </h1>

          <p class="text-base sm:text-lg md:text-xl text-slate-700 font-normal max-w-2xl mx-auto leading-relaxed">
            Notre siège de <strong>Dakar (Douala), près du commissariat du 8ᵉ arrondissement (Immeuble Express Union)</strong> vous accueille du lundi au vendredi de 08h00 à 17h00 et le samedi de 08h00 à 14h00.
          </p>
        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 2. FORMULAIRE DE RENDEZ-VOUS & COORDONNÉES                        -->
      <!-- ================================================================= -->
      <section class="py-16 px-4 md:px-8 max-w-7xl mx-auto bg-white border-t border-slate-200">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <!-- Colonne Formulaire Validé Côté Client -->
          <div class="lg:col-span-7" data-reveal="left">
            <div class="card-light p-8 md:p-12 rounded-3xl border border-slate-200 shadow-xl bg-white">
              <span class="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold uppercase mb-4 border border-emerald-200">Demande de Rendez-Vous</span>
              <h2 class="text-2xl md:text-3xl font-serif font-extrabold text-marine-900 mb-2">Planifier un Échange avec Nos Experts</h2>
              <p class="text-xs md:text-sm text-slate-600 mb-8">Remplissez ce formulaire : vous serez instantanément orienté vers WhatsApp ou e-mail avec votre récapitulatif.</p>

              <form id="contact-form" class="space-y-5" novalidate>
                
                <!-- Service Demandé (Exactement les 4 services + recherche locataire) -->
                <div>
                  <label for="form-service" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Service Concerné *</label>
                  <select id="form-service" class="input-light cursor-pointer font-medium" required>
                    <option value="Gestion Locative (Bailleur / Propriétaire)">Gestion Locative (Bailleur / Propriétaire)</option>
                    <option value="Recherche de Logement (Locataire)">Recherche de Logement (Locataire)</option>
                    <option value="Création d'Entreprise Clé en Main">Création d'Entreprise (CFCE / RCCM / NIU)</option>
                    <option value="Dédouanement & Transit Portuaire">Dédouanement & Transit Portuaire</option>
                    <option value="Fiscalité & Conseil d'Entreprise (DGI / DSF)">Fiscalité & Déclarations DGI</option>
                  </select>
                </div>

                <!-- Nom Complet & Téléphone -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="form-name" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Nom & Prénom *</label>
                    <input type="text" id="form-name" class="input-light font-medium" placeholder="Ex. M. Kamba Baurel" required />
                  </div>
                  <div>
                    <label for="form-phone" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Numéro Téléphone / WhatsApp *</label>
                    <input type="tel" id="form-phone" class="input-light font-medium tabular-nums" placeholder="Ex. 690 84 34 97 ou 671 46 17 91" required />
                  </div>
                </div>

                <!-- E-mail & Date Souhaitée -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="form-email" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Adresse E-mail</label>
                    <input type="email" id="form-email" class="input-light font-medium" placeholder="Ex. votre-email@domaine.cm" />
                  </div>
                  <div>
                    <label for="form-date" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Date Souhaitée</label>
                    <input type="date" id="form-date" class="input-light font-medium" />
                  </div>
                </div>

                <!-- Message / Précisions -->
                <div>
                  <label for="form-message" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Description de votre besoin *</label>
                  <textarea id="form-message" rows="4" class="input-light font-medium" placeholder="Précisez le type de bien, la localisation ou vos attentes particulières..." required></textarea>
                </div>

                <!-- Boutons d'Action & Envoi -->
                <div class="pt-3 flex flex-col sm:flex-row items-center gap-4">
                  <button type="submit" id="btn-submit-form" class="btn-primary w-full sm:w-auto !px-8 !py-4 text-sm font-bold shadow-lg flex items-center justify-center gap-2">
                    ${icon('phone', { class: 'w-4 h-4' })}
                    <span>Valider & Envoyer sur WhatsApp</span>
                  </button>
                  <a href="mailto:contacts@multibusiness.cm" class="btn-outline w-full sm:w-auto !px-6 !py-4 text-xs font-semibold text-center bg-slate-50 flex items-center justify-center gap-2">
                    ${icon('mail', { class: 'w-4 h-4' })}
                    <span>Envoyer par E-mail direct</span>
                  </a>
                </div>

              </form>
            </div>
          </div>

          <!-- Colonne Coordonnées Officielles & Agences -->
          <div class="lg:col-span-5 space-y-6" data-reveal="right">
            
            <div class="card-light p-8 rounded-3xl border border-slate-200 bg-[#FAF9F5] space-y-6" data-theme="ivory">
              <span class="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase">Siège Social Officiel</span>
              
              <div class="space-y-4 text-xs md:text-sm text-slate-700">
                <div>
                  <strong class="text-slate-900 flex items-center gap-2 font-bold text-base mb-1">
                    ${icon('map-pin', { class: 'w-4 h-4 text-emerald-700' })}
                    <span>Adresse Physique :</span>
                  </strong>
                  <p class="leading-relaxed pl-6">Dakar (Douala, Cameroun), à quelques mètres du commissariat du 8ᵉ arrondissement, Immeuble Express Union, 1er niveau.</p>
                </div>

                <div>
                  <strong class="text-slate-900 flex items-center gap-2 font-bold text-base mb-1">
                    ${icon('clock', { class: 'w-4 h-4 text-emerald-700' })}
                    <span>Horaires d'Ouverture :</span>
                  </strong>
                  <p class="leading-relaxed pl-6">Lundi – Vendredi : 08h00 – 17h00 | Samedi : 08h00 – 14h00 (Permanence en ligne 24/7 pour les bailleurs sous contrat).</p>
                </div>

                <div>
                  <strong class="text-slate-900 flex items-center gap-2 font-bold text-base mb-1">
                    ${icon('phone', { class: 'w-4 h-4 text-emerald-700' })}
                    <span>Lignes de Service Directes :</span>
                  </strong>
                  <div class="space-y-2 pt-1 pl-6">
                    <a href="tel:+237690843497" class="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-slate-200 hover:border-orange-400 hover:bg-orange-50/50 transition-all text-slate-900">
                      <span class="w-3 h-3 rounded-full bg-[#FF7900] flex-shrink-0"></span>
                      <span class="font-bold tabular-nums">Orange : (+237) 690 84 34 97</span>
                    </a>
                    <a href="tel:+237671461791" class="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-slate-200 hover:border-yellow-400 hover:bg-yellow-50/50 transition-all text-slate-900">
                      <span class="w-3 h-3 rounded-full bg-[#FFCC00] flex-shrink-0"></span>
                      <span class="font-bold tabular-nums">MTN : (+237) 671 46 17 91</span>
                    </a>
                    <a href="https://wa.me/237651559411" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2.5 p-2 rounded-xl bg-white border border-emerald-300 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all text-emerald-950">
                      <span class="w-3 h-3 rounded-full bg-emerald-500 animate-pulse flex-shrink-0"></span>
                      <span class="font-bold tabular-nums">WhatsApp : (+237) 651 55 94 11</span>
                    </a>
                  </div>
                </div>

                <div>
                  <strong class="text-slate-900 flex items-center gap-2 font-bold text-base mb-1">
                    ${icon('mail', { class: 'w-4 h-4 text-emerald-700' })}
                    <span>Adresse E-mail :</span>
                  </strong>
                  <a href="mailto:contacts@multibusiness.cm" class="text-emerald-800 font-medium hover:underline block pl-6">contacts@multibusiness.cm</a>
                </div>

                <!-- Réseaux Sociaux -->
                <div class="pt-2 border-t border-slate-200">
                  <strong class="text-slate-900 block font-bold text-sm mb-2">Rejoignez-nous :</strong>
                  <div class="flex items-center gap-2">
                    <a href="https://www.tiktok.com/@multibusinesssarl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors" aria-label="TikTok de MULTI BUSINESS SARL">
                      <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.35 22a6.34 6.34 0 0 0 6.33-6.32V8.87a8.16 8.16 0 0 0 4.91 1.62V7.05a4.83 4.83 0 0 1-1-.36z"/></svg>
                      <span>TikTok</span>
                    </a>
                    <a href="https://www.facebook.com/multibusinesssarl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#1877F2] text-white text-xs font-semibold hover:bg-[#166fe5] transition-colors" aria-label="Facebook de MULTI BUSINESS SARL">
                      <svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                      <span>Facebook</span>
                    </a>
                  </div>
                </div>
              </div>

              <!-- Badge Réassurance -->
              <div class="p-3.5 rounded-2xl bg-white border border-slate-200 text-xs flex items-center gap-3">
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span class="font-bold text-slate-900">Conseillers en agence et en ligne</span>
              </div>
            </div>

            <!-- Carte de Synthèse Situation -->
            <div class="card-light p-6 rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-xs font-bold text-emerald-900 uppercase tracking-wider font-mono">Repère Physique</span>
                <span class="text-[10px] font-mono text-slate-500">${CONFIG.contact.headquarters.formattedCoords}</span>
              </div>
              <div class="space-y-1">
                <h4 class="font-bold text-sm text-marine-900">Dakar • Douala III</h4>
                <p class="text-xs text-slate-600">${CONFIG.contact.headquarters.addressShort}, 1er niveau.</p>
              </div>
              <a href="#map-section" class="btn-outline !py-2 !px-4 text-xs text-center w-full flex items-center justify-center gap-1.5 bg-white">
                <span>Explorer la carte interactive ci-dessous ↓</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 3. CARTE INTERACTIVE HYPER-PREMIUM AVEC MODE SATELLITE & 3D       -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 bg-white border-t border-slate-200" id="map-section">
        <div class="max-w-7xl mx-auto space-y-8">
          
          <div class="flex flex-col md:flex-row md:items-end justify-between gap-4" data-reveal="up">
            <div class="space-y-2">
              <span class="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                Géolocalisation & Accès
              </span>
              <h2 class="font-serif text-3xl md:text-4xl font-extrabold text-marine-900">
                Où Nous Trouver à Douala
              </h2>
              <p class="text-xs md:text-sm text-slate-600 max-w-2xl">
                Explorez notre quartier en mode Plan vectoriel, Satellite haute définition ou Nuit. Basculez la vue 3D pour une perspective immersive du siège.
              </p>
            </div>

            <!-- Boutons Rapides Navigation GPS -->
            <div class="flex flex-wrap items-center gap-2">
              <a href="${CONFIG.contact.headquarters.googleDirectionsUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary !py-2.5 !px-4 text-xs inline-flex items-center gap-2 shadow-sm">
                <span>Itinéraire Google</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </a>
              <a href="${CONFIG.contact.headquarters.mapUrl}" target="_blank" rel="noopener noreferrer" class="btn-outline !py-2.5 !px-4 text-xs inline-flex items-center gap-2 bg-white">
                <span>Google Maps</span>
                <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
              <a href="${CONFIG.contact.headquarters.appleMapsUrl}" target="_blank" rel="noopener noreferrer" class="btn-outline !py-2.5 !px-4 text-xs inline-flex items-center gap-2 bg-white">
                <span>Apple Maps</span>
                <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
              <a href="${CONFIG.contact.headquarters.wazeUrl}" target="_blank" rel="noopener noreferrer" class="btn-outline !py-2.5 !px-4 text-xs inline-flex items-center gap-2 bg-white">
                <span>Waze</span>
                <svg class="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
              <button type="button" onclick="window.mbShareLocation && window.mbShareLocation()" class="btn-outline !py-2.5 !px-3.5 text-xs inline-flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 cursor-pointer" title="Partager la position">
                <svg class="w-3.5 h-3.5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/></svg>
                <span>Partager</span>
              </button>
              <button type="button" onclick="window.mbRouteFromHere && window.mbRouteFromHere()" class="btn-outline !py-2.5 !px-3.5 text-xs inline-flex items-center gap-1.5 bg-slate-50 hover:bg-slate-100 cursor-pointer" title="Itinéraire depuis ma position GPS">
                <svg class="w-3.5 h-3.5 text-emerald-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Ma position</span>
              </button>
            </div>
          </div>

          <!-- Conteneur Carte Haute Résolution (Hauteur 540px) -->
          <div id="contact-interactive-map" class="w-full h-[540px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200" data-reveal="up"></div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 3. MODULE NEWSLETTER                                              -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 bg-[#FAF9F5] border-t border-slate-200" data-theme="ivory">
        <div class="container max-w-4xl mx-auto text-center space-y-6">
          <span class="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-200">Veille & Conseils</span>
          <h2 class="font-serif text-3xl font-extrabold text-marine-900">Restez Informé de l'Actualité Locative & Fiscale</h2>
          <p class="text-xs md:text-sm text-slate-600 max-w-xl mx-auto">Recevez chaque mois nos analyses de marché au Cameroun, les évolutions de la loi de finances et nos conseils de gestion.</p>

          <form id="newsletter-form" class="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
            <input type="email" id="newsletter-email" class="input-light !py-3.5 text-xs" placeholder="Entrez votre adresse e-mail" required />
            <button type="submit" class="btn-primary w-full sm:w-auto !px-6 !py-3.5 text-xs font-bold whitespace-nowrap shadow-md">S'abonner</button>
          </form>
        </div>
      </section>
    `;
  },

  async init(container = (typeof document !== 'undefined' ? document.getElementById('app') || document : null)) {
    if (!container) return;
    initUIComponents(container);

    // Gestion de la soumission du formulaire de contact
    const contactForm = container.querySelector('#contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const service = container.querySelector('#form-service').value;
        const name = container.querySelector('#form-name').value.trim();
        const phone = container.querySelector('#form-phone').value.trim();
        const email = container.querySelector('#form-email').value.trim();
        const date = container.querySelector('#form-date').value;
        const message = container.querySelector('#form-message').value.trim();

        if (!name || !phone || !message) {
          showToast('Veuillez renseigner votre nom, téléphone et message.', 'error');
          return;
        }

        const formattedMsg = `*Demande de Contact & Rendez-vous - MULTI BUSINESS SARL*%0A%0A` +
          `👤 *Nom & Prénom :* ${encodeURIComponent(name)}%0A` +
          `📞 *Téléphone / WhatsApp :* ${encodeURIComponent(phone)}%0A` +
          (email ? `📧 *E-mail :* ${encodeURIComponent(email)}%0A` : '') +
          `💼 *Service concerné :* ${encodeURIComponent(service)}%0A` +
          (date ? `📅 *Date souhaitée :* ${encodeURIComponent(date)}%0A` : '') +
          `📝 *Message / Détails :*%0A${encodeURIComponent(message)}`;

        showToast('Demande enregistrée avec succès ! Redirection vers WhatsApp...', 'success');
        contactForm.reset();
        
        const whatsappUrl = `https://wa.me/237651559411?text=${formattedMsg}`;
        setTimeout(() => {
          window.open(whatsappUrl, '_blank');
        }, 500);
      });
    }

    // Gestion du formulaire newsletter avec redirection WhatsApp et vidage
    const newsletterForm = container.querySelector('#newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = container.querySelector('#newsletter-email');
        if (emailInput && emailInput.value.includes('@')) {
          const email = emailInput.value.trim();
          const formattedMsg = `*Inscription Newsletter & Veille Stratégique - MULTI BUSINESS SARL*%0A%0A` +
            `📧 *E-mail abonné :* ${encodeURIComponent(email)}%0A` +
            `Bonjour, je souhaite m'abonner à la veille d'actualité locative, fiscale et juridique au Cameroun.`;
          
          showToast('Inscription confirmée ! Redirection vers WhatsApp...', 'success');
          newsletterForm.reset();
          
          const whatsappUrl = `https://wa.me/237651559411?text=${formattedMsg}`;
          setTimeout(() => {
            window.open(whatsappUrl, '_blank');
          }, 500);
        }
      });
    }

    // Initialisation de la carte interactive hyper-premium
    const mapEl = container.querySelector('#contact-interactive-map');
    if (mapEl) {
      try {
        this.mapController = new PremiumMapController({
          container: mapEl,
          autoFlyIn: true
        });
        this.mapController.init();
      } catch (err) {
        console.warn('[Contact] Erreur initialisation carte:', err);
      }
    }
  },

  destroy() {
    if (this.mapController) {
      try {
        this.mapController.destroy();
      } catch (e) {}
      this.mapController = null;
    }
    this._cleanups.forEach(fn => fn());
    this._cleanups = [];
  }
};
