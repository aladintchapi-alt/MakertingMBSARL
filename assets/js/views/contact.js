/**
 * Vue CONTACT - MULTI BUSINESS SARL (Phase 5 Production)
 * Formulaire interactif validé, Agences Douala & Yaoundé, WhatsApp & Coordonnées
 */
import { CONFIG } from '../config.js';
import { showToast } from '../ui.js';

export default {
  meta: {
    title: "Contactez-Nous | Nos Agences à Douala (Akwa) & Yaoundé (Bastos)",
    description: "Contactez MULTI BUSINESS SARL pour la gestion de vos biens immobiliers, vos besoins fiscaux ou d'affaires à Douala et Yaoundé. Échange direct WhatsApp."
  },

  _cleanups: [],

  async render() {
    return `
      <!-- ================================================================= -->
      <!-- 1. HERO CONTACT                                                   -->
      <!-- ================================================================= -->
      <section class="relative min-h-[60vh] flex items-center justify-center pt-32 pb-14 px-4 md:px-8 overflow-hidden">
        <div class="absolute inset-0 bg-mesh-dark opacity-80 pointer-events-none"></div>
        <div class="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime-500/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div class="container max-w-5xl mx-auto text-center relative z-10" data-stagger-item>
          
          <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-forest-900/90 border border-lime-500/40 text-lime-400 text-xs font-bold tracking-widest uppercase mb-8 shadow-glow-lime-sm">
            <span>Disponibilité Immédiate • Réponse sous 15 min</span>
          </div>

          <h1 class="text-display-xl md:text-display-2xl font-display font-black text-white tracking-tight mb-6 leading-[1.08]">
            Parlons de votre projet immobilier & d'affaires.
          </h1>

          <p class="text-lg md:text-xl text-slate-300 font-normal max-w-2xl mx-auto leading-relaxed">
            Nos agences de <strong>Douala (Akwa)</strong> et <strong>Yaoundé (Bastos)</strong> vous accueillent du lundi au samedi.
          </p>

        </div>
      </section>

      <!-- ================================================================= -->
      <!-- 2. FORMULAIRE INTERACTIF + COORDONNÉES DES AGENCES               -->
      <!-- ================================================================= -->
      <section class="py-16 px-4 md:px-8 max-w-7xl mx-auto border-t border-white/10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <!-- Colonne Formulaire Validé Côté Client -->
          <div class="lg:col-span-7" data-reveal="left">
            <div class="glass-card-accent p-8 md:p-12 rounded-4xl border-lime-500/30">
              <div class="badge-tag badge-lime mb-4">Formulaire Express</div>
              <h2 class="text-2xl md:text-3xl font-display font-extrabold text-white mb-2">Envoyez-Nous Votre Demande</h2>
              <p class="text-xs md:text-sm text-slate-300 mb-8">Remplissez ce formulaire : votre demande sera instantanément formatée et transmise à notre conseiller de permanence.</p>

              <form id="contact-form" class="space-y-5" novalidate>
                
                <!-- Service Demandé -->
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Service Concerné *</label>
                  <select id="form-service" class="input-field bg-forest-950 text-white cursor-pointer font-medium" required>
                    <option value="Gestion Locative (Propriétaire / Bailleur)">Gestion Locative (Propriétaire / Bailleur)</option>
                    <option value="Recherche de Logement (Locataire)">Recherche de Logement (Locataire)</option>
                    <option value="Conseil & Fiscalité d'Entreprise">Conseil & Fiscalité d'Entreprise</option>
                    <option value="Création d'Entreprise Clé en Main">Création d'Entreprise Clé en Main</option>
                    <option value="Dédouanement & Transit Portuaire">Dédouanement & Transit Portuaire</option>
                    <option value="Autre demande">Autre demande spécifique</option>
                  </select>
                </div>

                <!-- Ville / Localisation -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Ville du Bien / Projet *</label>
                    <select id="form-city" class="input-field bg-forest-950 text-white cursor-pointer font-medium" required>
                      <option value="Douala">Douala (Akwa, Bonanjo, Bonapriso, Makepe...)</option>
                      <option value="Yaoundé">Yaoundé (Bastos, Centre-Ville, Odza...)</option>
                      <option value="Diaspora (Bien au Cameroun)">Diaspora (Bien situé au Cameroun)</option>
                      <option value="Autre ville">Autre ville du Cameroun</option>
                    </select>
                  </div>

                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Votre Nom Complet *</label>
                    <input type="text" id="form-name" placeholder="Ex: Jean-Marc Ondoua" class="input-field" required />
                  </div>
                </div>

                <!-- Téléphone WhatsApp & Email -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Numéro WhatsApp / Tél *</label>
                    <input type="tel" id="form-phone" placeholder="Ex: +237 690 00 00 00" class="input-field font-mono" required />
                  </div>

                  <div>
                    <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Adresse E-mail</label>
                    <input type="email" id="form-email" placeholder="votre.email@domaine.com" class="input-field" />
                  </div>
                </div>

                <!-- Message / Détails -->
                <div>
                  <label class="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">Détails de Votre Demande *</label>
                  <textarea id="form-message" rows="4" placeholder="Précisez le type de bien (immeuble, appartement, studio, magasin...), le loyer estimé ou vos attentes..." class="input-field resize-none" required></textarea>
                </div>

                <!-- Bouton d'envoi -->
                <div class="pt-2">
                  <button type="submit" id="form-submit-btn" class="btn-primary w-full text-center" data-magnetic>
                    <span id="submit-btn-text">Envoyer ma demande au conseiller</span>
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                  <p class="text-[11px] text-center text-slate-400 mt-3">Vos données sont strictement confidentielles et ne sont jamais cédées à des tiers.</p>
                </div>

              </form>
            </div>
          </div>

          <!-- Colonne Coordonnées des 2 Agences & Accès Direct -->
          <div class="lg:col-span-5 space-y-6" data-reveal="right">
            
            <!-- Fiche Agence Douala -->
            <div class="glass-card p-8 border-lime-500/30 relative overflow-hidden">
              <div class="badge-tag badge-lime mb-3">Siège Social & Agence Littoral</div>
              <h3 class="text-2xl font-display font-extrabold text-white mb-2">Agence de Douala</h3>
              <p class="text-xs text-slate-300 mb-4 leading-relaxed">
                Akwa / Bonanjo, Immeuble d'Affaires, Douala — Cameroun
              </p>
              
              <div class="space-y-2.5 text-xs font-mono text-slate-300 pt-3 border-t border-white/10 mb-6">
                <div class="flex items-center justify-between">
                  <span class="text-slate-400">Téléphone Direct :</span>
                  <a href="tel:${CONFIG.contact.phoneMain}" class="text-lime-400 font-bold hover:underline">${CONFIG.contact.phoneMain}</a>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-400">Horaires :</span>
                  <span class="text-white">Lun - Ven : 08h00 - 18h00</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-400">Permanence Samedi :</span>
                  <span class="text-white">09h00 - 14h00</span>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <a href="tel:${CONFIG.contact.phoneMain}" class="btn-primary !px-5 !py-2.5 text-xs flex-1 text-center">Appeler Douala</a>
                <a href="${CONFIG.contact.whatsapp.link}" target="_blank" rel="noopener" class="btn-secondary !px-5 !py-2.5 text-xs flex-1 text-center">WhatsApp</a>
              </div>
            </div>

            <!-- Fiche Agence Yaoundé -->
            <div class="glass-card p-8 border-mint-500/30 relative overflow-hidden">
              <div class="badge-tag badge-mint mb-3">Agence Régionale Centre</div>
              <h3 class="text-2xl font-display font-extrabold text-white mb-2">Agence de Yaoundé</h3>
              <p class="text-xs text-slate-300 mb-4 leading-relaxed">
                Bastos / Centre-Ville, Immeuble Professionnel, Yaoundé — Cameroun
              </p>
              
              <div class="space-y-2.5 text-xs font-mono text-slate-300 pt-3 border-t border-white/10 mb-6">
                <div class="flex items-center justify-between">
                  <span class="text-slate-400">Téléphone Direct :</span>
                  <a href="tel:${CONFIG.contact.phoneSecondary}" class="text-mint-400 font-bold hover:underline">${CONFIG.contact.phoneSecondary}</a>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-400">Horaires :</span>
                  <span class="text-white">Lun - Ven : 08h00 - 17h30</span>
                </div>
                <div class="flex items-center justify-between">
                  <span class="text-slate-400">Permanence Samedi :</span>
                  <span class="text-white">09h00 - 13h00</span>
                </div>
              </div>

              <div class="flex items-center gap-3">
                <a href="tel:${CONFIG.contact.phoneSecondary}" class="btn-primary !bg-mint-500 hover:!bg-mint-400 !text-forest-950 !px-5 !py-2.5 text-xs flex-1 text-center">Appeler Yaoundé</a>
                <a href="${CONFIG.contact.whatsapp.link}" target="_blank" rel="noopener" class="btn-secondary !px-5 !py-2.5 text-xs flex-1 text-center">WhatsApp</a>
              </div>
            </div>

            <!-- Email & Support Central -->
            <div class="p-6 rounded-3xl bg-forest-950/80 border border-white/10 flex items-center justify-between">
              <div>
                <span class="text-xs text-slate-400 block">Courriel Officiel :</span>
                <a href="mailto:${CONFIG.contact.emailMain}" class="text-sm font-bold text-white hover:text-lime-400 transition-colors">${CONFIG.contact.emailMain}</a>
              </div>
              <span class="w-3 h-3 rounded-full bg-lime-400 animate-pulse"></span>
            </div>

          </div>

        </div>
      </section>
    `;
  },

  async init(container = (typeof document !== 'undefined' ? document.getElementById('app') || document : null)) {
    console.log('⚡ [Contact View] Initialisation du formulaire validé');
    this._cleanups = [];

    if (!container) return;

    const form = container.querySelector('#contact-form');
    const submitBtn = container.querySelector('#form-submit-btn');
    const btnText = container.querySelector('#submit-btn-text');

    if (form) {
      const submitHandler = (e) => {
        e.preventDefault();

        const service = container.querySelector('#form-service').value.trim();
        const city = container.querySelector('#form-city').value.trim();
        const name = container.querySelector('#form-name').value.trim();
        const phone = container.querySelector('#form-phone').value.trim();
        const email = container.querySelector('#form-email').value.trim();
        const message = container.querySelector('#form-message').value.trim();

        // Validation simple côté client
        if (!name || !phone || !message) {
          showToast("Veuillez renseigner votre nom, téléphone et détails de demande.", "error");
          return;
        }

        // Animation d'envoi
        if (btnText) btnText.textContent = "Formatage & transmission...";
        if (submitBtn) submitBtn.disabled = true;

        // Préparation du message WhatsApp officiel structuré
        const whatsappText = `*NOUVELLE DEMANDE - MULTI BUSINESS SARL*\n\n` +
          `👤 *Nom :* ${name}\n` +
          `📞 *Téléphone :* ${phone}\n` +
          `📧 *Email :* ${email || 'Non renseigné'}\n` +
          `🏢 *Service :* ${service}\n` +
          `📍 *Ville :* ${city}\n\n` +
          `📝 *Message / Détails :*\n${message}`;

        const whatsappUrl = `https://wa.me/237690000000?text=${encodeURIComponent(whatsappText)}`;

        setTimeout(() => {
          showToast("Votre demande a été préparée avec succès !", "success");
          if (btnText) btnText.textContent = "Demande transmise avec succès ✓";
          
          // Redirection vers WhatsApp pour transmission immédiate
          window.open(whatsappUrl, '_blank');

          setTimeout(() => {
            if (btnText) btnText.textContent = "Envoyer une autre demande";
            if (submitBtn) submitBtn.disabled = false;
            form.reset();
          }, 3000);
        }, 600);
      };

      form.addEventListener('submit', submitHandler);
      this._cleanups.push(() => form.removeEventListener('submit', submitHandler));
    }
  },

  destroy() {
    console.log('🧹 [Contact View] Nettoyage complet');
    this._cleanups.forEach((c) => {
      try { c(); } catch (e) {}
    });
    this._cleanups = [];
  }
};
