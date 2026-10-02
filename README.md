# MULTI BUSINESS SARL — Site Vitrine & Plateforme Immobilière SaaS

Site vitrine ultra haut de gamme (standard international / Awwwards-ready) pour **MULTI BUSINESS SARL** (Cameroun : Douala & Yaoundé).
Spécialisée à **70% dans la GESTION LOCATIVE INTELLIGENTE** avec sa propre plateforme SaaS propriétaire (bailleurs, locataires, encaissements Orange Money / MTN MoMo, quittances certifiées instantanées, suivi technique 24/7) et **3 services d'affaires complémentaires** (fiscalité, création d'entreprise, transit & dédouanement).

---

## 1. Palette Chromatique Officielle & Contrastes

Les couleurs exactes ont été extraites du monogramme original « MB » et structurées selon la direction artistique *« Luxe immobilier moderne, confiance institutionnelle, Afrique contemporaine & SaaS »* :

| Nom de la Teinte | Code Hex | Rôle & Usage | Contraste Dark (WCAG) |
| :--- | :--- | :--- | :--- |
| **Vert Lime Électrique** | `#9AFF01` | **Accent Maître Rare** (Boutons CTA prioritaires, badges live SaaS, highlights de conversion, curseurs interactifs). | **15.2:1 (AAA)** sur fond sombre |
| **Vert Menthe / Émeraude** | `#26C992` | **Secondaire Réassurance** (Finance saine, validations, logos secondaires, quittances, sécurité des flux). | **9.8:1 (AAA)** sur fond sombre |
| **Noir Forêt Profond** | `#06130E` | **Fond Principal Ultra-Luxe** (Substitut organique au noir pur pour une élégance feutrée et institutionnelle). | Fond Maître Dark Mode |
| **Vert Forêt Impérial** | `#0D261C` | **Surfaces & Cartes Glassmorphism** (Conteneurs de cartes, panneaux latéraux, header dépoli). | Surface Card Dark |
| **Vert Forêt Rehaussé** | `#133B2B` | **Survols & Accents de Carte** (Hover states, séparateurs actifs, bordures subtiles). | Surface Hover |
| **Blanc Cassé / Ivoire** | `#FBFBF9` | **Fond Thème Clair / Documents** (Quittances PDF imprimables, formulaires light, documentation). | Fond Light Mode |
| **Blanc Pur** | `#FFFFFF` | **Titres & Typographie Principale** (Lisibilité maximale des titres éditoriaux). | Contraste 19.5:1 (AAA) |
| **Ardoise Neutre** | `#94A3B8` | **Texte Secondaire & Métadonnées** (Paragraphes descriptifs, légendes, dates). | Contraste 7.2:1 (AA) |

---

## 2. Typographie & Direction Artistique

Le système typographique combine la puissance architecturale et géométrique contemporaine pour les titres avec une lisibilité maximale pour l'interface utilisateur et les corps de texte :

1. **Titres & Display : `Syne`** (Google Fonts, weights: 600, 700, 800)
   - Caractère fort, géométrique, architectural, évoquant l'audace et l'excellence immobilière moderne.
   - Échelle fluide réactive : `clamp(2.75rem, 6vw + 1rem, 5.5rem)` pour les titres maîtres.
2. **Corps & Interface SaaS : `Plus Jakarta Sans`** (Google Fonts, weights: 400, 500, 600, 700)
   - Lisibilité chirurgicale pour les tableaux de bord, formulaires financiers et navigation.
3. **Touches Éditoriales / Prestige : `Playfair Display`** (Google Fonts, italic/bold)
   - Subtiles touches d'authenticité et d'héritage patrimonial.
4. **Données Chiffrées / Monétaires : `JetBrains Mono`** (Google Fonts, weights: 400, 500)
   - Affichage rigoureux des montants en FCFA, taux d'occupation et références de quittances.

---

## 3. Arborescence du Projet

```text
c:/xampp/htdocs/MakertingMBSARL/
├── index.html                      # Coquille SPA Awwwards-ready (preloader GSAP, header sticky, #app, footer)
├── tailwind.config.js              # Configuration exhaustive (palettes lime/mint/forest, typographies, ombres)
├── package.json                    # Scripts de compilation Tailwind CLI, serveur local et dépendances
├── README.md                       # Documentation maîtresse du projet
├── assets/
│   ├── css/
│   │   ├── input.css               # Styles maîtres, directives Tailwind, glassmorphism & noise texture
│   │   └── output.css              # Fichier CSS compilé & minifié pour la production
│   ├── js/
│   │   ├── app.js                  # Initialisation générale, bootstrapper, Lenis & SPA router
│   │   ├── router.js               # Routeur SPA vanilla (0 rechargement de page, transitions GSAP, SEO)
│   │   ├── animations.js           # Moteur GSAP, ScrollTrigger, Lenis smooth scroll, magnetic buttons
│   │   ├── ui.js                   # Header intelligent, menu mobile plein écran, modales, toasts, tabs, FAQ
│   │   ├── config.js               # Source unique de vérité (coordonnées Douala/Yaoundé, WhatsApp, SEO, stats)
│   │   └── views/
│   │       ├── home.js             # Vue Accueil (fondation)
│   │       ├── gestion-locative.js # Vue Gestion Locative (70% focus)
│   │       ├── services.js         # Vue Nos Services (Fiscalité, Création, Dédouanement)
│   │       ├── a-propos.js         # Vue À Propos & Vision
│   │       ├── contact.js          # Vue Contact & Agences
│   │       ├── not-found.js        # Vue 404
│   │       └── design-system.js    # Bibliothèque interactive des composants de test
│   └── images/
│       ├── logo.jpeg               # Fichier source original
│       ├── logo-transparent.png    # PNG haute résolution détouré à fond transparent
│       ├── logo-icon.svg           # Monogramme vectoriel SVG pur
│       ├── logo-dark-theme.svg     # Logo horizontal complet pour fond sombre
│       ├── logo-light-theme.svg    # Logo horizontal complet pour fond clair
│       ├── favicon-16x16.png       # Favicon 16px
│       ├── favicon-32x32.png       # Favicon 32px
│       ├── apple-touch-icon-180x180.png # Icône tactile Apple 180px
│       └── logo-512x512.png        # Icône 512px PWA & réseaux sociaux
```

---

## 4. Plan du Site & Wireframes Textuels

### Page 1 : Accueil (`/`)
* **Objectif :** Capter immédiatement l'attention avec un positionnement premium, asseoir la légitimité de MULTI BUSINESS SARL et convertir les bailleurs vers la gestion locative.
* **Sections :**
  1. **Hero Header :** Titre d'impact, badge live SaaS, double CTA magnétique (Bailleurs & Locataires), mockup 3D interactif du tableau de bord SaaS.
  2. **Bandeau de Réassurance & Chiffres Clés :** 98.7% de recouvrement, 500+ lots sous gestion, reversement bancaire/MoMo à date fixe, couverture Douala & Yaoundé.
  3. **Le Cœur Métier (70%) : Gestion Locative Intelligente :** Comparatif Avant / Après (Gestion traditionnelle avec impayés vs Gestion SaaS Multi Business SARL 100% sereine).
  4. **Les Typologies de Biens Gérés :** Carrousel/Grid des types de biens (immeubles entiers, appartements de standing, studios meublés, commerces, bureaux).
  5. **La Plateforme SaaS Bailleurs :** Démonstration interactive des fonctionnalités (avis d'échéance automatisés, quittances instantanées, reversements Orange Money & MTN MoMo, suivi technique).
  6. **Les 3 Services Secondaires :** Conseil & Fiscalité, Création d'Entreprise clé en main, Dédouanement & Transit.
  7. **Témoignages Bailleurs & Locataires :** Avis vérifiés de propriétaires résidents et de la diaspora camerounaise.
  8. **Simulateur de Revenus Locatifs :** Calculateur interactif immédiat en FCFA.
  9. **CTA Final & Contact Direct :** Bouton WhatsApp direct et formulaire express.

---

### Page 2 : Gestion Locative (`/gestion-locative`) — *70% du Site*
* **Objectif :** Démontrer l'excellence opérationnelle et technologique de la prise en charge immobilière.
* **Sections :**
  1. **Hero Spécialisé Bailleurs :** « Confiez-nous votre bien, encaissez vos loyers sans lever le petit doigt ».
  2. **Les 6 Piliers de Gestion :**
     - Sélection rigoureuse et scoring des locataires.
     - Rédaction et enregistrement légal des baux.
     - Encaissement multi-canal digitalisé (Orange Money, MTN Mobile Money, virements).
     - Reversement garanti aux bailleurs à date fixe chaque mois.
     - Gestion des impayés et procédure contentieuse sans frais cachés.
     - Maintenance préventive, états des lieux sur tablette et réseau d'artisans certifiés.
  3. **Types de Biens Sous Gestion :** Focus détaillé par catégorie (Immeubles de rapport, Appartements, Studios/Chambres, Magasins/Boutiques, Bureaux & Entrepôts).
  4. **Espace SaaS & Technologie Bailleurs :** Captures et fonctionnalités du portail propriétaire en temps réel.
  5. **Tarification Transparente :** Grille claire des honoraires de gestion sans surprise.
  6. **FAQ Détaillée Bailleurs & Locataires :** Réponses aux questions juridiques, fiscales et pratiques.
  7. **Formulaire de Mandat de Gestion :** Dépôt d'un bien en 3 étapes simples.

---

### Page 3 : Nos Services (`/services`) — *Services Complémentaires*
* **Objectif :** Présenter avec clarté les 3 pôles de conseil d'affaires.
* **Sections :**
  1. **Hero Pôle Conseil d'Affaires :** L'accompagnement corporate global au Cameroun.
  2. **Service 1 : Conseil & Optimisation Fiscale :**
     - Déclarations fiscales mensuelles (TVA, précomptes, DSF, taxes foncières).
     - Audit de conformité fiscale immobilière et d'entreprise.
     - Sécurisation vis-à-vis de l'administration fiscale (DGI Cameroun).
  3. **Service 2 : Création & Structuration d'Entreprise :**
     - Choix de la forme juridique (SARL, SAS, ETS).
     - Rédaction des statuts, immatriculation RCCM, délivrance du NIU.
     - Domiciliation d'entreprise et ouverture de compte bancaire professionnel à Douala / Yaoundé.
  4. **Service 3 : Dédouanement & Transit / Logistique :**
     - Dédouanement portuaire (Port Autonome de Douala / Kribi) et aéroportuaire.
     - Gestion des formalités douanières d'import/export.
     - Suivi et acheminement sécurisé des marchandises.
  5. **Grille de Prise de Contact & Consultation Dédiée.**

---

### Page 4 : À Propos (`/a-propos`)
* **Objectif :** Humaniser l'entreprise, inspirer une confiance absolue et valoriser l'ancrage camerounais.
* **Sections :**
  1. **Hero Manifeste :** « L'intégrité et la technologie au service du patrimoine camerounais ».
  2. **Notre Histoire & Vision :** Pourquoi et comment MULTI BUSINESS SARL s'est imposée comme le gestionnaire de référence à Douala et Yaoundé.
  3. **Nos Valeurs Cardinales :** Transparence totale, Rigueur juridique, Proximité humaine, Innovation continue.
  4. **L'Équipe Dirigeante & Experts :** Juristes en droit immobilier, experts-comptables, gestionnaires de patrimoine et régisseurs terrain.
  5. **Nos Agences Physiques :** Visuels immersifs des bureaux de Douala (Akwa) et Yaoundé (Bastos).

---

### Page 5 : Contact & Agences (`/contact`)
* **Objectif :** Faciliter une prise de contact immédiate par canal préféré (WhatsApp direct, appel, rendez-vous en agence ou formulaire).
* **Sections :**
  1. **Hero Contact :** « Parlons de votre projet en toute confidentialité ».
  2. **Cartes des 2 Agences :**
     - Douala : Akwa / Bonanjo, horaires, ligne directe, itinéraire.
     - Yaoundé : Bastos / Centre-Ville, horaires, ligne directe, itinéraire.
  3. **Formulaire de Contact Intelligent :** Sélection du sujet (Gestion d'un bien, Fiscalité, Création d'entreprise, Transit, Autre).
  4. **Bouton d'Urgence WhatsApp Direct :** Réponse en moins de 15 minutes pendant les heures ouvrées.

---

### Page 6 : 404 & Design System (`/design-system`)
* **`/404` :** Page d'erreur personnalisée avec bouton de redirection fluide vers l'accueil.
* **`/design-system` :** Bibliothèque interne de composants interactive (nuancier interactif avec copie hex, typographies, logos clair/sombre, boutons magnétiques, cartes animées, simulateur de loyer en direct, accordéons, onglets, modales et système de notifications toast).

---

## 5. Scripts de Build & Commandes

### Installation initiale
```bash
npm install
```

### Développement en direct (Tailwind Watch + Serveur Local)
```bash
npm run dev
```
*Cette commande lance simultanément le compilateur Tailwind CSS en mode écoute (`--watch`) et le serveur HTTP local sur `http://localhost:3000`.*

### Compilation CSS seule (Watch)
```bash
npm run dev:css
```

### Build Minifié pour Production
```bash
npm run build
```

### Lancement du serveur local
```bash
npm run serve
```

---

## 6. Déploiement

Le site est entièrement statique (HTML + CSS minifié + JS ES Modules). Il peut être déployé instantanément sur :
- **Serveur Apache / Nginx / XAMPP :** Directement à la racine du `DocumentRoot` ou dans un sous-dossier avec configuration de fallback SPA (URL rewrite vers `index.html`).
- **Plateformes Cloud Statiques :** Vercel, Netlify, Cloudflare Pages, GitHub Pages ou hébergement cPanel standard.
