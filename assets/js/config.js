/**
 * MULTI BUSINESS SARL - Global Configuration & Single Source of Truth
 * Données certifiées conformes au siège réel (Douala, Cameroun)
 */

export const CONFIG = {
  company: {
    name: "MULTI BUSINESS SARL",
    legalName: "MULTI BUSINESS SARL",
    status: "Société à Responsabilité Limitée (SARL)",
    category: "Entreprise Camerounaise de Prestations de Services Intellectuels & Gestion de Patrimoine",
    slogan: "L'Excellence Opérationnelle, la Rigueur Juridique & l'Innovation au Cameroun",
    tagline: "Plateforme SaaS Immobilière & Conseil Stratégique aux Entreprises",
    yearFounded: 2020,
    rccm: "RC/DLA/2020/B/243",
    niu: "M012014379280U",
    values: [
      {
        title: "Dynamisme",
        description: "Une équipe proactive qui s'adapte en continu aux réalités économiques et aux réformes institutionnelles camerounaises."
      },
      {
        title: "Expertise",
        description: "Des professionnels rompus au droit immobilier OHADA, aux procédures douanières, fiscales et à l'ingénierie d'affaires."
      },
      {
        title: "Disponibilité",
        description: "Une présence constante 6 jours sur 7 sur le terrain, en agence et via notre support digital réactif."
      }
    ],
    assets: [
      "Service de qualité certifiée",
      "Rapidité d'exécution sans délai superflu",
      "Garantie de satisfaction intégrale à 100%"
    ],
    targetAudiences: [
      "Bailleurs & Investisseurs Immobiliers (Résidents et Diaspora)",
      "Jeunes Entrepreneurs & Dirigeants de PME-PMI",
      "Importateurs de Marchandises & Opérateurs Économiques",
      "Commerçants, Artisans & Maîtres d'Ouvrage"
    ]
  },

  contact: {
    phones: [
      { raw: "+237690843497", formatted: "(+237) 690 84 34 97", operator: "Orange", color: "#FF7900", label: "Ligne Orange" },
      { raw: "+237671461791", formatted: "(+237) 671 46 17 91", operator: "MTN", color: "#FFCC00", label: "Ligne MTN" }
    ],
    phoneOrange: "(+237) 690 84 34 97",
    phoneMTN: "(+237) 671 46 17 91",
    phonePrimary: "(+237) 690 84 34 97",
    phoneSecondary: "(+237) 671 46 17 91",
    emailMain: "contacts@multibusiness.cm",
    hours: "Lundi – Samedi : 08h00 – 17h00",
    headquarters: {
      city: "Douala",
      country: "Cameroun",
      district: "Dakar",
      landmark: "à quelques mètres du commissariat du 8e arrondissement, Immeuble Express Union, 1er niveau",
      addressShort: "Dakar (Douala), près du commissariat du 8ᵉ arr., Immeuble Express Union",
      addressFull: "Dakar (Douala, Cameroun), à quelques mètres du commissariat du 8e arrondissement, Immeuble Express Union, 1er niveau",
      mapUrl: "https://maps.google.com/?q=Express+Union+Dakar+Commissariat+8eme+arrondissement+Douala+Cameroun"
    },
    whatsapp: {
      number: "237651559411",
      formatted: "(+237) 651 55 94 11",
      directUrl: "https://wa.me/237651559411?text=Bonjour%20MULTI%20BUSINESS%20SARL%2C%20je%20souhaite%20des%20renseignements.",
      serviceMessages: {
        immobilier: "Bonjour MULTI BUSINESS SARL, je souhaite confier un bien en gestion immobilière / louer un bien.",
        creation: "Bonjour MULTI BUSINESS SARL, je souhaite être accompagné pour la création de mon entreprise (CFCE).",
        dedouanement: "Bonjour MULTI BUSINESS SARL, j'ai une cargaison à dédouaner au Port de Douala / Kribi.",
        prestation: "Bonjour MULTI BUSINESS SARL, je sollicite un artisan / une prestation technique pour un chantier.",
        fiscalite: "Bonjour MULTI BUSINESS SARL, je souhaite un accompagnement fiscal et déclaratif (DGI)."
      }
    },
    socials: {
      tiktok: {
        handle: "@multibusinesssarl",
        url: "https://www.tiktok.com/@multibusinesssarl",
        label: "TikTok de MULTI BUSINESS SARL"
      },
      facebook: {
        handle: "multibusinesssarl",
        url: "https://www.facebook.com/multibusinesssarl",
        label: "Facebook de MULTI BUSINESS SARL"
      }
    }
  },

  appUrls: {
    saasWeb: "https://app.multibusiness.cm/",
    saasMobile: "https://app.multibusiness.cm/mobile",
    currentLiveSite: "https://multibusiness.cm/"
  },

  // Identité Visuelle & Logo Officiel (Source unique de vérité)
  brand: {
    name: "MULTI BUSINESS SARL",
    baseline: "Gestion locative • Conseil d'affaires",
    logo: {
      original: "./assets/images/logo.jpeg",
      transparent: "./assets/images/logo-transparent.png",
      ogImage: "./assets/images/og-image.png",
      sizes: {
        16: "./assets/images/favicon-16x16.png",
        32: "./assets/images/favicon-32x32.png",
        48: "./assets/images/favicon-48x48.png",
        64: "./assets/images/logo-64x64.png",
        128: "./assets/images/logo-128x128.png",
        180: "./assets/images/apple-touch-icon-180x180.png",
        192: "./assets/images/logo-192x192.png",
        256: "./assets/images/logo-256x256.png",
        512: "./assets/images/logo-512x512.png"
      }
    }
  },

  media: {
    videoEntreprise: "./assets/images/video-cover.jpg",
    photoPdg: "./assets/images/portrait-pdg.jpg",
    logoOriginal: "./assets/images/logo.jpeg",
    logoTransparent: "./assets/images/logo-transparent.png"
  },

  // Les 5 Services Réels avec codes couleurs signatures
  services: [
    {
      id: "gestion-immobiliere",
      route: "/gestion-immobiliere",
      title: "Gestion Immobilière & SaaS Propriétaire",
      isPrimary: true, // SERVICE PHARE (70% du site)
      weight: "70%",
      badge: "Pôle d'Excellence Majeur • 70%",
      colorName: "mint",
      colorHex: "#26C992",
      pastelBg: "#F0FDF4",
      gradient: "from-[#26C992] to-[#10B981]",
      shortDesc: "Prise en charge intégrale de votre patrimoine immobilier à Douala et sur le territoire national : perception garantie des loyers, sélection et suivi rigoureux des locataires, entretien, quittances instantanées et partenariats avec cabinets d'huissiers de 1ère et 2ème charges.",
      fullPitch: "En confiant la gestion de vos bâtiments, logements, appartements, studios, chambres, magasins, bureaux et espaces commerciaux à MULTI BUSINESS SARL, vous gagnez un temps précieux et bénéficiez d'une tranquillité d'esprit absolue. Notre application propriétaire (web & mobile) offre un reporting transparent 24/7, des encaissements automatisés Orange Money & MTN MoMo, tandis que notre pôle juridique sécurise l'expulsion légale en bonne et due forme de tout locataire indélicat.",
      partner: "Cabinets d'huissiers de justice de 1ère et 2ème charges",
      propertyCategories: [
        { label: "Bâtiments & Immeubles de rapport entiers", count: "120+ lots" },
        { label: "Appartements de haut standing & résidences", count: "250+ lots" },
        { label: "Studios modernes & chambres meublées", count: "180+ lots" },
        { label: "Magasins & boutiques marchandes", count: "95+ baux" },
        { label: "Bureaux professionnels & sièges d'entreprise", count: "60+ plateaux" },
        { label: "Espaces commerciaux & entrepôts logistiques", count: "35+ sites" }
      ]
    },
    {
      id: "creation-entreprise",
      route: "/creation-entreprise",
      title: "Création d'Entreprise PME – PMI",
      isPrimary: false,
      colorName: "amber",
      colorHex: "#F59E0B",
      pastelBg: "#FFFBEB",
      gradient: "from-[#F59E0B] to-[#D97706]",
      shortDesc: "Accompagnement express des entrepreneurs et PME pour la constitution légale complète de leur société : statuts notariés, RCCM, NIU et formalités simplifiées.",
      fullPitch: "Dans le but d'encourager l'entrepreneuriat au Cameroun, nous invitons les promoteurs à se formaliser et à bénéficier de tous les avantages fiscaux et bancaires. Nous réalisons l'immatriculation express en liaison étroite avec le Centre de Formalités de Création d'Entreprise.",
      partner: "CFCE (Centre de Formalités de Création d'Entreprise)",
      deliverables: [
        "Rédaction et enregistrement des statuts (SARL, SAS, ETS)",
        "Obtention du Registre du Commerce et du Crédit Mobilier (RCCM)",
        "Délivrance du Numéro d'Identifiant Unique (NIU)",
        "Dépôt légal et publication au journal des annonces légales"
      ]
    },
    {
      id: "dedouanement",
      route: "/dedouanement",
      title: "Dédouanement des Marchandises",
      isPrimary: false,
      colorName: "ocean",
      colorHex: "#0EA5E9",
      pastelBg: "#F0F9FF",
      gradient: "from-[#0EA5E9] to-[#0284C7]",
      shortDesc: "Prise en charge rapide et sécurisée du transit, dédouanement et enlèvement de vos conteneurs et colis au Port de Douala, Port de Kribi et aux aéroports.",
      fullPitch: "En nous confiant le dédouanement et l'enlèvement de vos marchandises, vous opérez en toute sérénité. En partenariat direct avec la douane camerounaise et les syndicats agréés, nous garantissons rapidité, conformité tarifaire, fiabilité et assurance contre tout risque de blocage ou de pénalité de magasinage.",
      partner: "Douane Camerounaise & Syndicats de Transitaires Agréés",
      pillars: ["Rapidité d'enlèvement", "Fiabilité des déclarations douanières", "Assurance et protection des cargaisons"]
    },
    {
      id: "prestation-services",
      route: "/prestation-services",
      title: "Prestation de Services & Travaux",
      isPrimary: false,
      colorName: "coral",
      colorHex: "#F43F5E",
      pastelBg: "#FFF1F2",
      gradient: "from-[#F43F5E] to-[#E11D48]",
      shortDesc: "Mise à disposition d'artisans qualifiés et accompagnement de chantiers : dépannages électriques, peinture bâtiment, montage d'échafaudages et second œuvre.",
      fullPitch: "Nous soutenons activement les artisans et maîtres ouvriers indépendants dans la réalisation de chantiers professionnels et de marchés publics/privés. Nos équipes assurent des interventions soignées en électricité, peinture, échafaudage sécurisé et maintenance de bâtiments.",
      partner: "Réseau d'artisans certifiés et spécialistes second œuvre",
      fields: [
        "Dépannages et installations électriques conformes",
        "Peinture intérieure, extérieure et ravalement de façades",
        "Location et montage sécurisé d'échafaudages",
        "Menuiserie, plomberie et maintenance préventive"
      ]
    },
    {
      id: "fiscalite-conseil",
      route: "/fiscalite-conseil",
      title: "Fiscalité et Conseil Stratégique",
      isPrimary: false,
      colorName: "indigo",
      colorHex: "#6366F1",
      pastelBg: "#EEF2FF",
      gradient: "from-[#6366F1] to-[#4F46E5]",
      shortDesc: "Gestion fiscale proactive, déclarations mensuelles DGI, déclarations statistiques et fiscales (DSF), conformité foncière et sécurisation patrimoniale.",
      fullPitch: "Pour toute entreprise et investisseur au Cameroun, la maîtrise de sa situation fiscale est le gage d'une croissance sereine. En collaboration continue avec la Direction Générale des Impôts et les centres des impôts compétents, nous prenons en charge l'ensemble de vos obligations fiscales et assurons un conseil avisé.",
      partner: "DGI (Direction Générale des Impôts) & Centres des Impôts de rattachement",
      servicesList: [
        "Déclarations fiscales mensuelles et télépaiements DGI",
        "Montage et dépôt de la Déclaration Statistique et Fiscale (DSF)",
        "Audit fiscal préventif et assistance lors des contrôles",
        "Fiscalité des revenus fonciers pour bailleurs et investisseurs"
      ]
    }
  ],

  seo: {
    siteTitle: "MULTI BUSINESS SARL | Gestion Immobilière Intelligente, SaaS & Conseil - Douala, Cameroun",
    siteDescription: "Leader de la gestion immobilière et du conseil aux entreprises au Cameroun (Douala, Dakar). Bailleurs, locataires, application SaaS, quittances certifiées, CFCE, douane et fiscalité.",
    keywords: "gestion immobiliere douala, multibusiness sarl, bailleur cameroun, huissier expulsion cameroun, saas gestion locative, creation entreprise cfce douala, dedouanement port douala, fiscalite dgi cameroun"
  }
};

/**
 * Résout une URL d'asset de manière sûre quel que soit le contexte d'hébergement (racine, sous-dossier, ngrok)
 */
export function resolveAsset(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://') || path.startsWith('data:') || path.startsWith('blob:')) {
    return path;
  }
  const base = (typeof window !== 'undefined' && window.__APP_BASE__) || (typeof document !== 'undefined' && document.querySelector('base')?.getAttribute('href')) || '/';
  const cleanBase = base.endsWith('/') ? base : base + '/';
  const cleanPath = path.replace(/^\.?\//, '');
  return `${cleanBase}${cleanPath}`;
}

