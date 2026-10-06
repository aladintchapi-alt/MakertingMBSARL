/**
 * MULTI BUSINESS SARL - Page CONTACT (Phase 6 Production)
 * Formulaire de RDV validé côté client, WhatsApp direct, 3 téléphones, plan d'accès stylisé & newsletter
 */
import { CONFIG } from '../config.js';
import { showToast, initUIComponents } from '../ui.js';

export default {
  meta: {
    title: "Contactez-Nous | Siège Social Douala (Rond-point CCC)",
    description: "Contactez MULTI BUSINESS SARL à Douala et Yaoundé. Rendez-vous gestion locative, fiscalité, création d'entreprise ou dédouanement. Échange direct WhatsApp.",
    image: "./assets/images/hero-accueil.jpg"
  },

  _cleanups: [],

  async render() {
    return `
      <!-- ================================================================= -->
      <!-- 1. HERO CONTACT                                                   -->
      <!-- ================================================================= -->
      <section class="relative min-h-[50vh] flex items-center justify-center pt-32 pb-14 px-4 md:px-8 overflow-hidden bg-white" data-theme="light">
        <div class="hero-photo-bg">
          <img src="./assets/images/hero-apropos.jpg" alt="Siège MULTI BUSINESS SARL Douala" class="w-full h-full object-cover object-center filter brightness-[0.97] contrast-[1.03]" />
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
            Notre siège de <strong>Douala (Rond-point CCC Dakar)</strong> vous accueille du lundi au samedi de 08h00 à 17h00.
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
                
                <!-- Service Demandé -->
                <div>
                  <label for="form-service" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Service Concerné *</label>
                  <select id="form-service" class="input-light cursor-pointer font-medium" required>
                    <option value="Gestion Immobilière (Bailleur / Propriétaire)">🏢 Gestion Immobilière (Bailleur / Propriétaire)</option>
                    <option value="Recherche de Logement (Locataire)">🏠 Recherche de Logement (Locataire)</option>
                    <option value="Création d'Entreprise Clé en Main">🚀 Création d'Entreprise (CFCE / RCCM / NIU)</option>
                    <option value="Dédouanement & Transit Portuaire">⚓ Dédouanement & Transit Portuaire</option>
                    <option value="Prestations Techniques & Travaux Bâtiment">🛠️ Prestations Techniques & Travaux</option>
                    <option value="Fiscalité & Conseil d'Entreprise (DGI / DSF)">📊 Fiscalité & Déclarations DGI</option>
                  </select>
                </div>

                <!-- Nom Complet & Téléphone -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label for="form-name" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Nom & Prénom *</label>
                    <input type="text" id="form-name" class="input-light font-medium" placeholder="Ex. M. Tchapi Aladin" required />
                  </div>
                  <div>
                    <label for="form-phone" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Numéro Téléphone / WhatsApp *</label>
                    <input type="tel" id="form-phone" class="input-light font-medium font-mono" placeholder="Ex. +237 694 811 715" required />
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
                    <span>Valider & Envoyer sur WhatsApp</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                  <a href="mailto:contact@multibusiness.cm" class="btn-outline w-full sm:w-auto !px-6 !py-4 text-xs font-semibold text-center bg-slate-50">
                    <span>Envoyer par E-mail direct</span>
                  </a>
                </div>

              </form>
            </div>
          </div>

          <!-- Colonne Coordonnées Officielles & Agences -->
          <div class="lg:col-span-5 space-y-6" data-reveal="right">
            
            <div class="card-light p-8 rounded-3xl border border-slate-200 bg-[#FAF9F5] space-y-6" data-theme="ivory">
              <span class="inline-block px-3 py-1 rounded-full bg-slate-200 text-slate-800 text-xs font-bold uppercase font-mono">Siège Social Officiel</span>
              
              <div class="space-y-4 text-xs md:text-sm text-slate-700">
                <div>
                  <strong class="text-slate-900 block font-bold text-base mb-1">📍 Adresse Physique :</strong>
                  <p class="leading-relaxed">Rond-point CCC (Dakar), à quelques mètres du commissariat du 8ᵉ arrondissement, Douala, Cameroun.</p>
                </div>

                <div>
                  <strong class="text-slate-900 block font-bold text-base mb-1">🕒 Horaires d'Ouverture :</strong>
                  <p class="leading-relaxed">Lundi – Samedi : 08h00 – 17h00 (Service d'urgence 24/7 pour les bailleurs sous contrat).</p>
                </div>

                <div>
                  <strong class="text-slate-900 block font-bold text-base mb-1">📞 Lignes Directes :</strong>
                  <div class="space-y-1.5 pt-1 font-mono">
                    <a href="tel:+237694811715" class="text-emerald-800 font-bold hover:underline block text-sm">(+237) 694 811 715 (Principal & WhatsApp)</a>
                    <a href="tel:+237690843497" class="text-slate-700 hover:underline block text-sm">(+237) 690 843 497</a>
                    <a href="tel:+237671461791" class="text-slate-700 hover:underline block text-sm">(+237) 671 461 791</a>
                  </div>
                </div>

                <div>
                  <strong class="text-slate-900 block font-bold text-base mb-1">✉️ Adresse E-mail :</strong>
                  <a href="mailto:contact@multibusiness.cm" class="text-emerald-800 font-medium hover:underline block font-mono">contact@multibusiness.cm</a>
                </div>
              </div>

              <!-- Badge Réassurance -->
              <div class="p-4 rounded-2xl bg-white border border-slate-200 text-xs flex items-center gap-3">
                <span class="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
                <span class="font-bold text-slate-900">Conseillers connectés en direct</span>
              </div>
            </div>

            <!-- Carte Stylisée Plan d'Accès -->
            <div class="card-light p-6 rounded-3xl border border-slate-200 bg-slate-900 text-white space-y-4">
              <div class="flex items-center justify-between">
                <span class="text-xs font-mono font-bold text-emerald-400 uppercase">Plan de Situation</span>
                <span class="text-[10px] text-slate-400">Douala 8ᵉ</span>
              </div>
              <div class="relative h-44 rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 flex flex-col items-center justify-center text-center p-4">
                <div class="w-10 h-10 rounded-full bg-lime-400 text-marine-950 flex items-center justify-center font-bold text-lg mb-2 shadow-lg animate-bounce">📍</div>
                <p class="font-serif font-bold text-sm text-white">Rond-point CCC (Dakar)</p>
                <p class="text-[11px] text-slate-300">À côté du Commissariat du 8ᵉ arr. • Douala</p>
                <a href="https://maps.google.com/?q=Douala+Rond+Point+CCC" target="_blank" rel="noopener" class="mt-3 inline-block px-3 py-1 bg-white/10 hover:bg-white/20 rounded-full text-[10px] text-lime-400 border border-lime-400/30 font-mono transition-colors">Ouvrir dans Google Maps →</a>
              </div>
            </div>

          </div>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 3. MODULE NEWSLETTER                                              -->
      <!-- ================================================================= -->
      <section class="py-20 px-4 md:px-8 bg-[#FAF9F5] border-t border-slate-200" data-theme="ivory">
        <div class="container max-w-4xl mx-auto text-center space-y-6">
          <span class="inline-block px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold uppercase tracking-wider font-mono border border-emerald-200">Veille & Conseils</span>
          <h2 class="font-serif text-3xl font-extrabold text-marine-900">Restez Informé de l'Actualité Immobilière & Fiscale</h2>
          <p class="text-xs md:text-sm text-slate-600 max-w-xl mx-auto">Recevez chaque mois nos analyses de marché à Douala, les évolutions de la loi de finances et nos conseils de gestion.</p>

          <form id="newsletter-form" class="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto pt-2">
            <input type="email" id="newsletter-email" class="input-light !py-3.5 text-xs" placeholder="Entrez votre adresse e-mail" required />
            <button type="submit" class="btn-primary w-full sm:w-auto !px-6 !py-3.5 text-xs font-bold whitespace-nowrap shadow-md">S'abonner</button>
          </form>
        </div>
      </section>
    `;
  },

  async init(container) {
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

        const formattedMsg = `*Nouvelle Demande de Rendez-Vous - MULTI BUSINESS SARL*%0A%0A` +
          `*Nom :* ${encodeURIComponent(name)}%0A` +
          `*Téléphone :* ${encodeURIComponent(phone)}%0A` +
          (email ? `*E-mail :* ${encodeURIComponent(email)}%0A` : '') +
          `*Service :* ${encodeURIComponent(service)}%0A` +
          (date ? `*Date souhaitée :* ${encodeURIComponent(date)}%0A` : '') +
          `*Message :* ${encodeURIComponent(message)}`;

        showToast('Redirection vers WhatsApp...', 'success');
        
        const whatsappUrl = `https://wa.me/237694811715?text=${formattedMsg}`;
        setTimeout(() => {
          window.open(whatsappUrl, '_blank');
        }, 600);
      });
    }

    // Gestion du formulaire newsletter
    const newsletterForm = container.querySelector('#newsletter-form');
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = container.querySelector('#newsletter-email');
        if (emailInput && emailInput.value.includes('@')) {
          showToast('Merci pour votre inscription à la newsletter !', 'success');
          emailInput.value = '';
        }
      });
    }
  },

  destroy() {
    this._cleanups.forEach(fn => fn());
    this._cleanups = [];
  }
};
