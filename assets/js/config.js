/**
 * MULTI BUSINESS SARL - Global Configuration & Single Source of Truth
 * Douala & Yaoundé, Cameroun
 */

export const CONFIG = {
  company: {
    name: "MULTI BUSINESS SARL",
    legalName: "MULTI BUSINESS SARL",
    slogan: "L'Excellence de la Gestion Locative & du Conseil d'Affaires",
    tagline: "Plateforme SaaS & Gestion Immobilière Intégrale au Cameroun",
    yearFounded: 2020,
    rccm: "RC/DLA/2020/B/...",
    niu: "M0...",
  },

  contact: {
    phoneMain: "+237 690 00 00 00",
    phoneSecondary: "+237 670 00 00 00",
    phoneFormatted: "+237 690 000 000",
    emailMain: "contact@multibusiness-sarl.com",
    emailSupport: "support@multibusiness-sarl.com",
    whatsapp: {
      number: "+237690000000",
      defaultMessage: "Bonjour MULTI BUSINESS SARL, je souhaite des informations sur votre service de gestion locative / vos prestations.",
      get link() {
        return `https://wa.me/${this.number}?text=${encodeURIComponent(this.defaultMessage)}`;
      }
    },
    addresses: [
      {
        city: "Douala",
        label: "Siège Social - Douala",
        location: "Akwa / Bonanjo, Immeuble d'Affaires, Cameroun",
        phone: "+237 690 00 00 00",
        hours: "Lun - Ven: 08h00 - 18h00 | Sam: 09h00 - 14h00"
      },
      {
        city: "Yaoundé",
        label: "Agence - Yaoundé",
        location: "Bastos / Centre-Ville, Cameroun",
        phone: "+237 670 00 00 00",
        hours: "Lun - Ven: 08h00 - 17h30 | Sam: 09h00 - 13h00"
      }
    ]
  },

  socials: {
    linkedin: "https://www.linkedin.com/company/multi-business-sarl",
    facebook: "https://www.facebook.com/multibusinesssarl",
    instagram: "https://www.instagram.com/multibusinesssarl",
    twitter: "https://twitter.com/multibusinesscm"
  },

  // Services : 70% Gestion Locative (Core SaaS) + 3 Services Secondaires (Conseil)
  services: {
    primary: {
      id: "gestion-locative",
      title: "Gestion Locative Intelligente & SaaS",
      weight: "70%",
      shortDesc: "Gestion intégrale pour bailleurs & locataires au Cameroun : encaissement sécurisé, reversement ponctuel, plateforme SaaS dédiée, quittances instantanées et conciergerie technique.",
      features: [
        "Plateforme SaaS Bailleurs & Locataires (Tableau de bord 24/7)",
        "Paiements de loyers automatisés (Orange Money, MTN Mobile Money, Virement)",
        "Quittances de loyer et avis d'échéance générés instantanément",
        "Gestion proactive des impayés & relances diplomatiques",
        "Maintenance technique, états des lieux numérisés et suivi des travaux",
        "Rapports de gestion financière mensuels transparents"
      ],
      propertyTypes: [
        "Immeubles de rapport",
        "Appartements haut standing & standing",
        "Studios modernes & meublés",
        "Chambres & mini-studios",
        "Boutiques & Magasins commerciaux",
        "Bureaux & Plateaux d'affaires",
        "Espaces logistiques & Entrepôts"
      ]
    },
    secondary: [
      {
        id: "fiscalite",
        title: "Conseil & Gestion Fiscale",
        shortDesc: "Optimisation de votre fiscalité immobilière et d'entreprise, déclarations mensuelles (DSF, précomptes, TVA, taxes foncières) en conformité stricte avec le CGI camerounais.",
        icon: "file-text"
      },
      {
        id: "creation-entreprise",
        title: "Création & Structuration d'Entreprise",
        shortDesc: "Accompagnement de A à Z : rédaction des statuts, immatriculation RCCM, obtention du NIU, compte bancaire et domiciliation juridique express à Douala & Yaoundé.",
        icon: "building"
      },
      {
        id: "dedouanement",
        title: "Dédouanement & Transit / Fret",
        shortDesc: "Gestion complète de vos formalités douanières au Port Autonome de Douala / Kribi et aéroports : dédouanement rapide, conformité import/export et logistique.",
        icon: "truck"
      }
    ]
  },

  stats: [
    { value: "98.7%", label: "Taux de recouvrement des loyers", note: "Paiements sécurisés via MoMo / OM" },
    { value: "500+", label: "Lots & Biens sous gestion", note: "Douala & Yaoundé" },
    { value: "24/7", label: "Accès SaaS Bailleurs", note: "Transparence totale en temps réel" },
    { value: "0 FCFA", label: "Stress de gestion pour les propriétaires", note: "Zéro litige, 100% sérénité" }
  ],

  seo: {
    defaultTitle: "MULTI BUSINESS SARL | Gestion Locative & Conseil d'Affaires - Douala & Yaoundé",
    titleTemplate: "%s | MULTI BUSINESS SARL",
    defaultDescription: "Leader de la gestion locative intelligente au Cameroun. Plateforme SaaS propriétaire pour bailleurs et locataires, recouvrement automatisé (OM/MTN MoMo), fiscalité et conseil d'affaires.",
    siteUrl: "https://www.multibusiness-sarl.com",
    ogImage: "/assets/images/logo-512x512.png"
  },

  navigation: [
    { label: "Accueil", path: "/" },
    { label: "Gestion Locative", path: "/gestion-locative", badge: "Core SaaS" },
    { label: "Nos Services", path: "/services" },
    { label: "À Propos", path: "/a-propos" },
    { label: "Contact", path: "/contact" },
    { label: "Design System", path: "/design-system", isDev: true }
  ]
};
