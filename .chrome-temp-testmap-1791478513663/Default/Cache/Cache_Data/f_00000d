/**
 * MULTI BUSINESS SARL - Module 3D iPhone 18 Pro Max Haute Fidélité (Three.js)
 * Spécifications fidèles : 163.4 × 78.0 × 8.75 mm, écran Super Retina XDR 6.9", 1320×2868,
 * Châssis titane unibody, Dynamic Island, bloc optique Pro triple saphir + LiDAR,
 * Bouton Action, Camera Control capacitif, 4 finitions de titane, 5 écrans logiciels issus de app-screens.json,
 * Tone mapping ACESFilmic, éclairage studio PBR, ScrollTrigger et drag avec inertie.
 * 
 * Mentions : "iPhone est une marque déposée d'Apple Inc. Rendu conceptuel 3D de l'application MULTI BUSINESS SARL"
 * URL officielle : https://apps.multibusiness.cm/
 */

import { CONFIG } from './config.js';
import { icon } from './icons.js';

export const IPHONE_FINISHES = {
  black: { id: 'black', name: 'Titane Noir', hex: '#1E222A', bodyColor: 0x1E222A, backColor: 0x11161F, ringColor: 0x2A303C },
  silver: { id: 'silver', name: 'Titane Argent', hex: '#D4D8DD', bodyColor: 0xD4D8DD, backColor: 0xEDEFF2, ringColor: 0xB8BFC7 },
  glacier: { id: 'glacier', name: 'Titane Glacier', hex: '#8DA4B8', bodyColor: 0x8DA4B8, backColor: 0xB4C6D4, ringColor: 0x6E8599 },
  burgundy: { id: 'burgundy', name: 'Titane Bourgogne', hex: '#4A2E35', bodyColor: 0x4A2E35, backColor: 0x361E24, ringColor: 0x5C3842 }
};

let activeSceneInstance = null;
let cachedScreensData = null;

async function getScreensData() {
  if (cachedScreensData) return cachedScreensData;
  try {
    const res = await fetch('./assets/data/app-screens.json');
    if (res.ok) {
      cachedScreensData = await res.json();
      return cachedScreensData;
    }
  } catch (e) {
    console.warn('[Scene3D] Chargement local des écrans via repli:', e);
  }
  return null;
}

export class iPhone18ProMaxViewer {
  constructor(containerElement, options = {}) {
    this.container = typeof containerElement === 'string'
      ? document.getElementById(containerElement)
      : containerElement;

    this.options = Object.assign({
      initialFinish: 'black',
      initialScreen: 'dashboard',
      reducedMotion: false,
      enableScrollTrigger: true
    }, options);

    this.currentFinish = this.options.initialFinish;
    this.currentScreen = this.options.initialScreen;
    this.screensData = null;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.phoneGroup = null;
    this.screenMesh = null;
    this.bodyMaterial = null;
    this.backGlassMaterial = null;
    this.lensRingMaterials = [];
    this.shadowMesh = null;
    this.animationFrameId = null;
    this.texturesCache = new Map();

    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.drag = { isDragging: false, startX: 0, startY: 0, rotX: 0.12, rotY: -0.32, velX: 0, velY: 0 };
    this.scrollProgress = 0;
    this.isVisible = true;
    this.isDestroyed = false;
    this._cleanups = [];

    this.init();
  }

  async init() {
    if (!this.container) return;

    this.screensData = await getScreensData();

    if (typeof window.THREE === 'undefined') {
      console.warn('[Scene3D] Three.js non chargé. Affichage du repli.');
      this.renderFallback();
      return;
    }

    const THREE = window.THREE;
    const width = this.container.clientWidth || 380;
    const height = this.container.clientHeight || 520;

    // 1. Scène et Caméra
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    this.camera.position.set(0, 0, 8.4);

    // 2. Renderer WebGL avec ACES Filmic Tone Mapping & sRGB
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.22;
    this.container.appendChild(this.renderer.domElement);

    // 3. Éclairage Studio PBR 3-Points + Reflets Doux
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.35);
    this.scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xFFFFFF, 2.9);
    keyLight.position.set(5.5, 7.5, 6.0);
    this.scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xE2E8F0, 1.4);
    fillLight.position.set(-5.0, -3.0, 4.5);
    this.scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(0x26C992, 2.2); // Accent Menthe MultiBusiness
    rimLight.position.set(-6.5, 4.0, -4.5);
    this.scene.add(rimLight);

    const bottomGlow = new THREE.PointLight(0x9AFF01, 1.2, 9); // Lime glow
    bottomGlow.position.set(2.0, -4.0, 3.0);
    this.scene.add(bottomGlow);

    // 4. Modélisation de l'iPhone 18 Pro Max
    this.phoneGroup = new THREE.Group();
    this.buildiPhone18ProMax(THREE);
    this.buildContactShadow(THREE);
    this.scene.add(this.phoneGroup);

    // 5. Montage des contrôles d'interface utilisateur (finitions, écrans, disclaimer)
    this.mountOverlayControls();

    // 6. Événements, gestes tactiles & ScrollTrigger
    this.bindEvents();
    this.initScrollTrigger();
    this.initVisibilityObserver();

    // 7. Boucle d'animation
    this.animate();
  }

  buildiPhone18ProMax(THREE) {
    // Proportions physiques fidèles : 163.4 mm H × 78.0 mm L × 8.75 mm P
    // Échelle 3D : Hauteur 5.30 unités
    const height = 5.30;
    const width = 5.30 * (78.0 / 163.4); // ≈ 2.531
    const depth = 5.30 * (8.75 / 163.4); // ≈ 0.284
    const radius = 0.42; // Superellipse arrondi d'angle

    const finish = IPHONE_FINISHES[this.currentFinish] || IPHONE_FINISHES.black;

    // --- A. Châssis Titane Unibody (Extrusion avec biseau fin) ---
    const shape = new THREE.Shape();
    const x = -width / 2;
    const y = -height / 2;
    shape.moveTo(x + radius, y);
    shape.lineTo(x + width - radius, y);
    shape.quadraticCurveTo(x + width, y, x + width, y + radius);
    shape.lineTo(x + width, y + height - radius);
    shape.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    shape.lineTo(x + radius, y + height);
    shape.quadraticCurveTo(x, y + height, x, y + height - radius);
    shape.lineTo(x, y + radius);
    shape.quadraticCurveTo(x, y, x + radius, y);

    const extrudeSettings = {
      depth: depth,
      bevelEnabled: true,
      bevelSegments: 6,
      steps: 1,
      bevelSize: 0.045,
      bevelThickness: 0.045
    };

    const bodyGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    bodyGeo.center();

    this.bodyMaterial = new THREE.MeshStandardMaterial({
      color: finish.bodyColor,
      metalness: 0.92,
      roughness: 0.22,
      envMapIntensity: 1.2
    });

    const phoneBody = new THREE.Mesh(bodyGeo, this.bodyMaterial);
    this.phoneGroup.add(phoneBody);

    // --- B. Dos en Verre Dépoli Mat (Ceramic Glass Back) ---
    const backGeo = new THREE.PlaneGeometry(width * 0.965, height * 0.965);
    this.backGlassMaterial = new THREE.MeshStandardMaterial({
      color: finish.backColor,
      metalness: 0.45,
      roughness: 0.18
    });
    const backGlass = new THREE.Mesh(backGeo, this.backGlassMaterial);
    backGlass.position.z = -depth / 2 - 0.048;
    backGlass.rotation.y = Math.PI;
    this.phoneGroup.add(backGlass);

    // Logo Pomme Apple discret gravé au dos
    const appleLogoGeo = new THREE.CircleGeometry(0.14, 24);
    const appleLogoMat = new THREE.MeshStandardMaterial({
      color: finish.bodyColor,
      metalness: 0.85,
      roughness: 0.1
    });
    const appleLogo = new THREE.Mesh(appleLogoGeo, appleLogoMat);
    appleLogo.position.set(0, 0.1, -depth / 2 - 0.05);
    appleLogo.rotation.y = Math.PI;
    this.phoneGroup.add(appleLogo);

    // --- C. Écran Super Retina XDR 6.9" (Ratio 1320:2868 bord-à-bord) ---
    // Bordures ultra-fines symétriques (~1.15 mm réel -> ~96.5% de la surface)
    const screenGeo = new THREE.PlaneGeometry(width * 0.942, height * 0.95);
    const texture = this.getOrCreateTexture(THREE, this.currentScreen);

    const screenMat = new THREE.MeshBasicMaterial({
      map: texture,
      toneMapped: false
    });

    this.screenMesh = new THREE.Mesh(screenGeo, screenMat);
    this.screenMesh.position.z = depth / 2 + 0.052;
    this.phoneGroup.add(this.screenMesh);

    // --- D. Dynamic Island proportionnée 6.9" ---
    const islandGeo = new THREE.CapsuleGeometry(0.065, 0.36, 4, 12);
    const islandMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const island = new THREE.Mesh(islandGeo, islandMat);
    island.rotation.z = Math.PI / 2;
    island.position.set(0, height / 2 - 0.28, depth / 2 + 0.058);
    this.phoneGroup.add(island);

    // Capteur caméra TrueDepth et FaceID dans la pilule
    const sensorGeo = new THREE.CircleGeometry(0.025, 12);
    const sensorMat = new THREE.MeshBasicMaterial({ color: 0x0A1220 });
    const sensor = new THREE.Mesh(sensorGeo, sensorMat);
    sensor.position.set(0.12, height / 2 - 0.28, depth / 2 + 0.06);
    this.phoneGroup.add(sensor);

    // --- E. Bloc Photo Dorsal Pro (Plateau verre + 3 objectifs saphir + LiDAR + Flash) ---
    const bumpWidth = 1.18;
    const bumpHeight = 1.24;
    const bumpGeo = new THREE.BoxGeometry(bumpWidth, bumpHeight, 0.12);
    const bumpMat = new THREE.MeshStandardMaterial({
      color: finish.backColor,
      metalness: 0.65,
      roughness: 0.2
    });
    const bump = new THREE.Mesh(bumpGeo, bumpMat);
    bump.position.set(width / 4 - 0.06, height / 4 + 0.06, -depth / 2 - 0.08);
    this.phoneGroup.add(bump);

    // 3 Objectifs en triangle (Grand Angle, Ultra Grand Angle, Téléobjectif Tétraprisme)
    this.lensRingMaterials = [];
    const lensPositions = [
      { x: -0.26, y: 0.28 },
      { x: -0.26, y: -0.28 },
      { x: 0.28, y: 0.0 }
    ];

    lensPositions.forEach(pos => {
      // Bague en titane usinée
      const ringGeo = new THREE.CylinderGeometry(0.23, 0.23, 0.09, 24);
      const ringMat = new THREE.MeshStandardMaterial({
        color: finish.ringColor,
        metalness: 0.95,
        roughness: 0.15
      });
      this.lensRingMaterials.push(ringMat);
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      ring.position.set(width / 4 - 0.06 + pos.x, height / 4 + 0.06 + pos.y, -depth / 2 - 0.15);
      this.phoneGroup.add(ring);

      // Lentille en saphir avec reflet sombre bleuté
      const lensGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.092, 24);
      const lensMat = new THREE.MeshStandardMaterial({
        color: 0x050811,
        metalness: 0.98,
        roughness: 0.06
      });
      const lens = new THREE.Mesh(lensGeo, lensMat);
      lens.rotation.x = Math.PI / 2;
      lens.position.set(width / 4 - 0.06 + pos.x, height / 4 + 0.06 + pos.y, -depth / 2 - 0.152);
      this.phoneGroup.add(lens);
    });

    // Scanner LiDAR
    const lidarGeo = new THREE.CylinderGeometry(0.09, 0.09, 0.04, 16);
    const lidarMat = new THREE.MeshStandardMaterial({ color: 0x0A0D14, metalness: 0.8, roughness: 0.3 });
    const lidar = new THREE.Mesh(lidarGeo, lidarMat);
    lidar.rotation.x = Math.PI / 2;
    lidar.position.set(width / 4 - 0.06 + 0.26, height / 4 + 0.06 - 0.32, -depth / 2 - 0.14);
    this.phoneGroup.add(lidar);

    // Flash True Tone bi-ton
    const flashGeo = new THREE.CylinderGeometry(0.085, 0.085, 0.04, 16);
    const flashMat = new THREE.MeshBasicMaterial({ color: 0xFFFBEB });
    const flash = new THREE.Mesh(flashGeo, flashMat);
    flash.rotation.x = Math.PI / 2;
    flash.position.set(width / 4 - 0.06 + 0.26, height / 4 + 0.06 + 0.32, -depth / 2 - 0.14);
    this.phoneGroup.add(flash);

    // --- F. Boutons Matériels Fidèles ---
    // 1. Bouton Action (Haut Gauche)
    const actionBtnGeo = new THREE.BoxGeometry(0.04, 0.24, 0.06);
    const btnMat = new THREE.MeshStandardMaterial({ color: finish.bodyColor, metalness: 0.9, roughness: 0.2 });
    const actionBtn = new THREE.Mesh(actionBtnGeo, btnMat);
    actionBtn.position.set(-width / 2 - 0.04, height / 4 + 0.45, 0);
    this.phoneGroup.add(actionBtn);

    // 2. Boutons Volume + / - (Gauche)
    const volUpBtn = new THREE.Mesh(actionBtnGeo.clone(), btnMat);
    volUpBtn.position.set(-width / 2 - 0.04, height / 4 + 0.12, 0);
    this.phoneGroup.add(volUpBtn);

    const volDownBtn = new THREE.Mesh(actionBtnGeo.clone(), btnMat);
    volDownBtn.position.set(-width / 2 - 0.04, height / 4 - 0.20, 0);
    this.phoneGroup.add(volDownBtn);

    // 3. Bouton Alimentation / Latéral (Droite)
    const powerBtnGeo = new THREE.BoxGeometry(0.04, 0.48, 0.06);
    const powerBtn = new THREE.Mesh(powerBtnGeo, btnMat);
    powerBtn.position.set(width / 2 + 0.04, height / 4 + 0.20, 0);
    this.phoneGroup.add(powerBtn);

    // 4. Bouton Camera Control (Surface capacitive bas droite)
    const cameraControlGeo = new THREE.BoxGeometry(0.03, 0.38, 0.05);
    const cameraControlMat = new THREE.MeshStandardMaterial({
      color: finish.bodyColor,
      metalness: 0.85,
      roughness: 0.35
    });
    const cameraControl = new THREE.Mesh(cameraControlGeo, cameraControlMat);
    cameraControl.position.set(width / 2 + 0.035, -height / 4 - 0.15, 0);
    this.phoneGroup.add(cameraControl);

    // --- G. Tranche Inférieure : Port USB-C & Haut-Parleurs ---
    const usbcGeo = new THREE.CapsuleGeometry(0.03, 0.18, 4, 8);
    const usbcMat = new THREE.MeshBasicMaterial({ color: 0x050A10 });
    const usbc = new THREE.Mesh(usbcGeo, usbcMat);
    usbc.rotation.z = Math.PI / 2;
    usbc.position.set(0, -height / 2 - 0.04, 0);
    this.phoneGroup.add(usbc);

    // Initial orientation
    this.phoneGroup.rotation.y = this.drag.rotY;
    this.phoneGroup.rotation.x = this.drag.rotX;
  }

  buildContactShadow(THREE) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createRadialGradient(128, 128, 10, 128, 128, 115);
    grad.addColorStop(0, 'rgba(11, 27, 43, 0.32)');
    grad.addColorStop(0.5, 'rgba(11, 27, 43, 0.10)');
    grad.addColorStop(1, 'rgba(11, 27, 43, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);

    const shadowTex = new THREE.CanvasTexture(canvas);
    const shadowGeo = new THREE.PlaneGeometry(3.8, 3.8);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false
    });

    this.shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    this.shadowMesh.rotation.x = -Math.PI / 2;
    this.shadowMesh.position.y = -3.1;
    this.scene.add(this.shadowMesh);
  }

  /**
   * Rendu Haute Résolution (660 × 1434, ratio 1320:2868) piloté par app-screens.json
   */
  getOrCreateTexture(THREE, screenType) {
    if (this.texturesCache.has(screenType)) {
      return this.texturesCache.get(screenType);
    }

    const scale = 2; // Rendu Retina Ultra-Net (1320 × 2868)
    const canvas = document.createElement('canvas');
    canvas.width = 660 * scale;
    canvas.height = 1434 * scale;
    const ctx = canvas.getContext('2d');
    ctx.scale(scale, scale);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    // Fond général blanc immaculé
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, 660, 1434);

    // 1. Barre d'état iOS supérieure (Heure, Wi-Fi, Batterie)
    ctx.fillStyle = '#0B1B2B';
    ctx.font = 'bold 22px -apple-system, sans-serif';
    ctx.fillText('09:41', 48, 52);

    // Icônes status droite (Batterie / Signal)
    ctx.fillStyle = '#0B1B2B';
    ctx.fillRect(570, 36, 32, 16);
    ctx.fillRect(602, 40, 3, 8);

    // 2. En-tête de l'application MULTI BUSINESS
    const headerGrad = ctx.createLinearGradient(0, 70, 660, 220);
    headerGrad.addColorStop(0, '#0B1B2B');
    headerGrad.addColorStop(1, '#13354E');
    ctx.fillStyle = headerGrad;
    ctx.beginPath();
    ctx.roundRect(24, 75, 612, 120, 24);
    ctx.fill();

    // Logo MB miniature
    ctx.fillStyle = '#9AFF01';
    ctx.beginPath();
    ctx.roundRect(44, 95, 48, 48, 14);
    ctx.fill();
    ctx.fillStyle = '#060F18';
    ctx.font = 'black 22px sans-serif';
    ctx.fillText('MB', 52, 128);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 22px -apple-system, sans-serif';
    ctx.fillText('MULTI BUSINESS APP', 106, 118);

    ctx.fillStyle = '#94A3B8';
    ctx.font = '14px -apple-system, sans-serif';
    ctx.fillText('Gestion Locative Certifiée • apps.multibusiness.cm', 106, 144);

    // 3. Navigation supérieure par onglets (Pills)
    const tabs = [
      { id: 'dashboard', label: 'Bord' },
      { id: 'logements', label: 'Biens' },
      { id: 'locataires', label: 'Baux' },
      { id: 'paiements', label: 'MoMo' },
      { id: 'quittances', label: 'Reçus' }
    ];

    tabs.forEach((tab, idx) => {
      const tx = 28 + idx * 122;
      const isActive = tab.id === screenType;
      ctx.fillStyle = isActive ? '#0B1B2B' : '#F1F5F9';
      ctx.beginPath();
      ctx.roundRect(tx, 212, 114, 40, 20);
      ctx.fill();

      ctx.fillStyle = isActive ? '#9AFF01' : '#475569';
      ctx.font = 'bold 15px -apple-system, sans-serif';
      ctx.fillText(tab.label, tx + 34, 238);
    });

    // 4. Rendu spécifique selon l'écran
    if (screenType === 'dashboard') {
      // ÉCRAN 1 : TABLEAU DE BORD BAILLEUR
      ctx.fillStyle = '#F0FDF4';
      ctx.strokeStyle = '#26C992';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(28, 275, 604, 180, 24);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#065F46';
      ctx.font = 'bold 15px -apple-system, monospace';
      ctx.fillText('LOYERS COLLECTÉS • OCTOBRE 2026', 56, 320);

      ctx.fillStyle = '#0B1B2B';
      ctx.font = 'bold 44px -apple-system, monospace';
      ctx.fillText('14 850 000 FCFA', 56, 380);

      ctx.fillStyle = '#15803D';
      ctx.font = 'bold 16px -apple-system, sans-serif';
      ctx.fillText('✓ Reversé le 5 du mois • 0 impayé • 98.7% loué', 56, 420);

      // Cartes lots récents
      const lots = [
        { name: 'Résidence Les Palmiers', badge: '12/12 Loué', amount: '3 800 000 FCFA', tag: 'Immeuble R+4' },
        { name: 'Duplex Prestige Golf', badge: '1/1 Loué', amount: '1 200 000 FCFA', tag: 'Villa Bastos' },
        { name: 'Complexe Dakar Express Union', badge: '6/6 Loué', amount: '2 100 000 FCFA', tag: 'Commerces' },
        { name: 'Résidence Belvédère', badge: '7/8 Loué', amount: '2 450 000 FCFA', tag: 'Appartements' }
      ];

      lots.forEach((lot, i) => {
        const topY = 480 + (i * 155);
        ctx.fillStyle = '#F8FAFC';
        ctx.strokeStyle = '#E2E8F0';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(28, topY, 604, 135, 20);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#0B1B2B';
        ctx.font = 'bold 21px -apple-system, sans-serif';
        ctx.fillText(lot.name, 56, topY + 44);

        ctx.fillStyle = '#64748B';
        ctx.font = '15px -apple-system, sans-serif';
        ctx.fillText(lot.tag + ' • Bail conforme OHADA', 56, topY + 76);

        ctx.fillStyle = '#065F46';
        ctx.font = 'bold 22px -apple-system, monospace';
        ctx.fillText(lot.amount, 56, topY + 110);

        ctx.fillStyle = '#26C992';
        ctx.beginPath();
        ctx.roundRect(460, topY + 24, 145, 36, 12);
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 15px -apple-system, sans-serif';
        ctx.fillText(lot.badge, 485, topY + 48);
      });

    } else if (screenType === 'logements') {
      // ÉCRAN 2 : PARC LOCATIF GÉRÉ
      ctx.fillStyle = '#EEF2FF';
      ctx.strokeStyle = '#6366F1';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(28, 275, 604, 130, 24);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#4338CA';
      ctx.font = 'bold 15px -apple-system, monospace';
      ctx.fillText('PARC LOCATIF SOUS MANDAT', 56, 315);

      ctx.fillStyle = '#0B1B2B';
      ctx.font = 'bold 32px -apple-system, sans-serif';
      ctx.fillText('48 Lots Résidentiels & Commerciaux', 56, 360);

      const items = [
        { title: 'Appartement F4 Standing - Bonapriso', price: '450 000 FCFA/mois', tenant: 'M. Jean-Paul T.', status: 'Occupé' },
        { title: 'Duplex Meublé Contemporain - Bastos', price: '1 200 000 FCFA/mois', tenant: 'Dr. Ewane Samuel', status: 'Occupé' },
        { title: 'Magasin Commercial 80m² - Dakar Express Union', price: '350 000 FCFA/mois', tenant: 'Sté Cam Logistique', status: 'Occupé' },
        { title: 'Studio Confort Climatisé - Akwa', price: '180 000 FCFA/mois', tenant: 'Mlle Bih Clarisse', status: 'Occupé' }
      ];

      items.forEach((item, i) => {
        const topY = 430 + (i * 170);
        ctx.fillStyle = '#FFFFFF';
        ctx.strokeStyle = '#CBD5E1';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(28, topY, 604, 148, 20);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#0B1B2B';
        ctx.font = 'bold 20px -apple-system, sans-serif';
        ctx.fillText(item.title, 56, topY + 44);

        ctx.fillStyle = '#4338CA';
        ctx.font = 'bold 24px -apple-system, monospace';
        ctx.fillText(item.price, 56, topY + 86);

        ctx.fillStyle = '#64748B';
        ctx.font = '15px -apple-system, sans-serif';
        ctx.fillText('Locataire : ' + item.tenant + ' • Bail OHADA', 56, topY + 120);

        ctx.fillStyle = '#10B981';
        ctx.beginPath();
        ctx.roundRect(480, topY + 24, 125, 34, 10);
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 14px -apple-system, sans-serif';
        ctx.fillText(item.status, 515, topY + 46);
      });

    } else if (screenType === 'locataires') {
      // ÉCRAN 3 : SUIVI DES LOCATAIRES & BAUX OHADA
      ctx.fillStyle = '#FEF3C7';
      ctx.strokeStyle = '#D97706';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(28, 275, 604, 130, 24);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#B45309';
      ctx.font = 'bold 15px -apple-system, monospace';
      ctx.fillText('CONTRATS DE BAIL & SÉQUESTRE', 56, 315);

      ctx.fillStyle = '#0B1B2B';
      ctx.font = 'bold 30px -apple-system, sans-serif';
      ctx.fillText('47 Locataires Vérifiés • 0 Litige', 56, 360);

      const locs = [
        { name: 'Dr. Ewane Samuel', unit: 'Palmiers Apt 3A', deposit: 'Caution : 900 000 FCFA', score: 'Score 100/100' },
        { name: 'Sté Cameroun Logistique', unit: 'Magasin 03 Dakar Express Union', deposit: 'Caution : 1 500 000 FCFA', score: 'Score 98/100' },
        { name: 'Mme Ngo Mandeng', unit: 'Résidence Akwa 4B', deposit: 'Caution : 900 000 FCFA', score: 'Score 100/100' },
        { name: 'Mlle Bih Clarisse', unit: 'Studio Bonapriso S1', deposit: 'Caution : 440 000 FCFA', score: 'Score 100/100' }
      ];

      locs.forEach((loc, i) => {
        const topY = 430 + (i * 170);
        ctx.fillStyle = '#FFFFFF';
        ctx.strokeStyle = '#E2E8F0';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(28, topY, 604, 148, 20);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#0B1B2B';
        ctx.font = 'bold 22px -apple-system, sans-serif';
        ctx.fillText(loc.name, 56, topY + 44);

        ctx.fillStyle = '#0284C7';
        ctx.font = 'bold 16px -apple-system, sans-serif';
        ctx.fillText(loc.unit + ' • Bail OHADA Enregistré', 56, topY + 80);

        ctx.fillStyle = '#64748B';
        ctx.font = '15px -apple-system, sans-serif';
        ctx.fillText(loc.deposit, 56, topY + 120);

        ctx.fillStyle = '#F59E0B';
        ctx.beginPath();
        ctx.roundRect(440, topY + 24, 165, 36, 12);
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 14px -apple-system, sans-serif';
        ctx.fillText(loc.score, 465, topY + 48);
      });

    } else if (screenType === 'paiements') {
      // ÉCRAN 4 : ENCAISSEMENT MOBILE MONEY EN DIRECT
      ctx.fillStyle = '#FEF2F2';
      ctx.strokeStyle = '#EF4444';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(28, 275, 604, 130, 24);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#B91C1C';
      ctx.font = 'bold 15px -apple-system, monospace';
      ctx.fillText('PASSERELLE DE PAIEMENT SÉCURISÉE', 56, 315);

      ctx.fillStyle = '#0B1B2B';
      ctx.font = 'bold 30px -apple-system, sans-serif';
      ctx.fillText('Orange Money & MTN Mobile Money', 56, 360);

      const txs = [
        { gateway: 'Orange Money Cameroun', amount: '+ 450 000 FCFA', ref: 'OM-20261007-44910', time: 'Aujourd\'hui 09:41' },
        { gateway: 'MTN Mobile Money', amount: '+ 220 000 FCFA', ref: 'MOMO-20261007-88192', time: 'Aujourd\'hui 09:32' },
        { gateway: 'Orange Money Cameroun', amount: '+ 350 000 FCFA', ref: 'OM-20261007-11029', time: 'Aujourd\'hui 08:15' },
        { gateway: 'MTN Mobile Money', amount: '+ 850 000 FCFA', ref: 'MOMO-20261007-00213', time: 'Hier 17:42' }
      ];

      txs.forEach((tx, i) => {
        const topY = 430 + (i * 170);
        ctx.fillStyle = '#F8FAFC';
        ctx.strokeStyle = '#E2E8F0';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(28, topY, 604, 148, 20);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = tx.gateway.includes('Orange') ? '#EA580C' : '#CA8A04';
        ctx.font = 'bold 16px -apple-system, sans-serif';
        ctx.fillText(tx.gateway, 56, topY + 44);

        ctx.fillStyle = '#15803D';
        ctx.font = 'bold 28px -apple-system, monospace';
        ctx.fillText(tx.amount, 56, topY + 88);

        ctx.fillStyle = '#64748B';
        ctx.font = '14px -apple-system, sans-serif';
        ctx.fillText(tx.ref + ' • ' + tx.time, 56, topY + 122);
      });

    } else if (screenType === 'quittances') {
      // ÉCRAN 5 : QUITTANCES CERTIFIÉES & QR CODE OHADA
      ctx.fillStyle = '#E0F2FE';
      ctx.strokeStyle = '#0284C7';
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.roundRect(28, 275, 604, 130, 24);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#0369A1';
      ctx.font = 'bold 15px -apple-system, monospace';
      ctx.fillText('QUITTANCE NUMÉRIQUE OFFICIELLE', 56, 315);

      ctx.fillStyle = '#0B1B2B';
      ctx.font = 'bold 28px -apple-system, sans-serif';
      ctx.fillText('Horodatage & QR Code Infalsifiable', 56, 360);

      // Carte Quittance certifiée
      ctx.fillStyle = '#FFFFFF';
      ctx.strokeStyle = '#CBD5E1';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(28, 430, 604, 660, 24);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#0B1B2B';
      ctx.font = 'bold 24px -apple-system, sans-serif';
      ctx.fillText('REÇU DE LOYER CERTIFIÉ', 56, 485);

      ctx.fillStyle = '#64748B';
      ctx.font = '16px -apple-system, sans-serif';
      ctx.fillText('N° Quittance : MB-QUITTANCE-2026-10-0418', 56, 525);
      ctx.fillText('Bailleur Mandant : SCI Baobab Patrimoine', 56, 565);
      ctx.fillText('Locataire : M. Aladin Tchapi', 56, 605);
      ctx.fillText('Bien : Résidence Les Palmiers, Apt 4B', 56, 645);
      ctx.fillText('Période : Octobre 2026', 56, 685);

      ctx.fillStyle = '#065F46';
      ctx.font = 'bold 32px -apple-system, monospace';
      ctx.fillText('Montant : 450 000 FCFA', 56, 745);

      // Faux QR Code vectoriel net
      ctx.fillStyle = '#0B1B2B';
      ctx.fillRect(56, 785, 150, 150);
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(72, 801, 40, 40);
      ctx.fillRect(150, 801, 40, 40);
      ctx.fillRect(72, 879, 40, 40);
      ctx.fillStyle = '#0B1B2B';
      ctx.fillRect(84, 813, 16, 16);
      ctx.fillRect(162, 813, 16, 16);
      ctx.fillRect(84, 891, 16, 16);

      ctx.fillStyle = '#15803D';
      ctx.font = 'bold 18px -apple-system, sans-serif';
      ctx.fillText('✓ Certifié Acte OHADA Art. 78', 230, 840);

      ctx.fillStyle = '#64748B';
      ctx.font = '15px -apple-system, sans-serif';
      ctx.fillText('Opposable aux tiers • Export PDF immédiat', 230, 875);
      ctx.fillText('Vérifiable sur apps.multibusiness.cm', 230, 910);
    }

    // 5. Bouton universel en bas d'écran
    ctx.fillStyle = '#26C992';
    ctx.beginPath();
    ctx.roundRect(28, 1290, 604, 76, 38);
    ctx.fill();

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 22px -apple-system, sans-serif';
    ctx.fillText('Accéder à la plateforme (apps.multibusiness.cm)', 75, 1338);

    // 6. Home bar iOS
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.roundRect(240, 1404, 180, 8, 4);
    ctx.fill();

    const tex = new THREE.CanvasTexture(canvas);
    tex.generateMipmaps = true;
    tex.minFilter = THREE.LinearMipmapLinearFilter;
    tex.magFilter = THREE.LinearFilter;
    if (this.renderer && this.renderer.capabilities) {
      tex.anisotropy = this.renderer.capabilities.getMaxAnisotropy();
    }
    this.texturesCache.set(screenType, tex);
    return tex;
  }

  mountOverlayControls() {
    // Si un panneau d'onglets et de couleurs existe déjà à l'extérieur, on ne le duplique pas
    const parentContainer = this.container.closest('section') || this.container.parentElement;
    if (!parentContainer) return;

    // 1. Boutons Sélecteurs de Finitions (Titane)
    const finishesHost = parentContainer.querySelector('#iphone-finishes-selector');
    if (finishesHost) {
      finishesHost.innerHTML = Object.values(IPHONE_FINISHES).map(f => `
        <button data-finish="${f.id}" class="finish-pill w-8 h-8 rounded-full border-2 transition-transform hover:scale-110 flex items-center justify-center ${this.currentFinish === f.id ? 'border-marine-900 scale-110 shadow-md ring-2 ring-emerald-500' : 'border-slate-300'}" style="background-color: ${f.hex};" title="${f.name}">
          <span class="sr-only">${f.name}</span>
        </button>
      `).join('');

      finishesHost.querySelectorAll('button[data-finish]').forEach(btn => {
        const handler = () => {
          const finishId = btn.getAttribute('data-finish');
          this.setFinish(finishId);
          finishesHost.querySelectorAll('button').forEach(b => {
            b.classList.remove('border-marine-900', 'scale-110', 'shadow-md', 'ring-2', 'ring-emerald-500');
            b.classList.add('border-slate-300');
          });
          btn.classList.add('border-marine-900', 'scale-110', 'shadow-md', 'ring-2', 'ring-emerald-500');
          btn.classList.remove('border-slate-300');
        };
        btn.addEventListener('click', handler);
        this._cleanups.push(() => btn.removeEventListener('click', handler));
      });
    }

    // 2. Boutons Sélecteurs d'Écrans Applicatifs
    const screenTabsHost = parentContainer.querySelector('#iphone-screens-tabs');
    if (screenTabsHost) {
      const screensList = [
        { id: 'dashboard', label: 'Tableau de Bord' },
        { id: 'logements', label: 'Logements' },
        { id: 'locataires', label: 'Locataires' },
        { id: 'paiements', label: 'Mobile Money' },
        { id: 'quittances', label: 'Quittances OHADA' }
      ];

      screenTabsHost.innerHTML = screensList.map(s => `
        <button data-screen="${s.id}" class="screen-tab-btn px-3 py-1.5 rounded-full text-xs font-bold transition-all ${this.currentScreen === s.id ? 'bg-marine-900 text-white shadow-sm' : 'bg-slate-100 text-slate-600 hover:text-marine-900'}">
          ${s.label}
        </button>
      `).join('');

      screenTabsHost.querySelectorAll('button[data-screen]').forEach(btn => {
        const handler = () => {
          const scrId = btn.getAttribute('data-screen');
          this.setScreen(scrId);
          screenTabsHost.querySelectorAll('button').forEach(b => {
            b.className = 'screen-tab-btn px-3 py-1.5 rounded-full text-xs font-bold transition-all bg-slate-100 text-slate-600 hover:text-marine-900';
          });
          btn.className = 'screen-tab-btn px-3 py-1.5 rounded-full text-xs font-bold transition-all bg-marine-900 text-white shadow-sm';
        };
        btn.addEventListener('click', handler);
        this._cleanups.push(() => btn.removeEventListener('click', handler));
      });
    }

    // 3. Mention légale discrète Apple & Multi Business SARL
    let disclaimerEl = parentContainer.querySelector('#iphone-disclaimer');
    if (!disclaimerEl) {
      disclaimerEl = document.createElement('p');
      disclaimerEl.id = 'iphone-disclaimer';
      disclaimerEl.className = 'text-[11px] text-slate-400 text-center mt-3 font-normal';
      disclaimerEl.textContent = "iPhone est une marque déposée d'Apple Inc. Rendu conceptuel 3D de l'application MULTI BUSINESS SARL.";
      this.container.parentElement.appendChild(disclaimerEl);
    }
  }

  setFinish(finishId) {
    const finish = IPHONE_FINISHES[finishId];
    if (!finish) return;
    this.currentFinish = finishId;

    if (this.bodyMaterial) {
      this.bodyMaterial.color.setHex(finish.bodyColor);
    }
    if (this.backGlassMaterial) {
      this.backGlassMaterial.color.setHex(finish.backColor);
    }
    this.lensRingMaterials.forEach(mat => {
      mat.color.setHex(finish.ringColor);
    });
  }

  setScreen(screenType) {
    if (this.currentScreen === screenType || !this.screenMesh || !window.THREE) return;
    this.currentScreen = screenType;
    const newTex = this.getOrCreateTexture(window.THREE, screenType);
    this.screenMesh.material.map = newTex;
    this.screenMesh.material.needsUpdate = true;
  }

  bindEvents() {
    this.handleMouseMove = (e) => {
      if (this.drag.isDragging) return;
      const rect = this.container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      this.mouse.targetX = (clientX / rect.width - 0.5) * 1.1;
      this.mouse.targetY = (clientY / rect.height - 0.5) * 1.1;
    };

    this.handlePointerDown = (e) => {
      this.drag.isDragging = true;
      this.drag.startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      this.drag.startY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      this.drag.velX = 0;
      this.drag.velY = 0;
    };

    this.handlePointerMove = (e) => {
      if (!this.drag.isDragging) return;
      const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const currentY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      const deltaX = (currentX - this.drag.startX) * 0.007;
      const deltaY = (currentY - this.drag.startY) * 0.007;

      this.drag.rotY += deltaX;
      this.drag.rotX += deltaY;
      this.drag.velX = deltaX;
      this.drag.velY = deltaY;

      // Clamping de la rotation X pour maintenir l'appareil debout
      this.drag.rotX = Math.max(-0.55, Math.min(0.55, this.drag.rotX));

      this.drag.startX = currentX;
      this.drag.startY = currentY;
    };

    this.handlePointerUp = () => {
      this.drag.isDragging = false;
    };

    this.handleResize = () => {
      if (!this.container || !this.renderer || !this.camera) return;
      const width = this.container.clientWidth;
      const height = this.container.clientHeight;
      this.camera.aspect = width / height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(width, height);
    };

    this.container.addEventListener('mousemove', this.handleMouseMove, { passive: true });
    this.container.addEventListener('pointerdown', this.handlePointerDown);
    window.addEventListener('pointermove', this.handlePointerMove, { passive: true });
    window.addEventListener('pointerup', this.handlePointerUp);
    window.addEventListener('resize', this.handleResize, { passive: true });
  }

  initScrollTrigger() {
    if (!this.options.enableScrollTrigger || typeof window.gsap === 'undefined' || typeof window.ScrollTrigger === 'undefined') {
      return;
    }

    const section = this.container.closest('section');
    if (!section) return;

    window.ScrollTrigger.create({
      trigger: section,
      start: 'top 80%',
      end: 'bottom 20%',
      scrub: 1.2,
      onUpdate: (self) => {
        this.scrollProgress = self.progress;
        if (!this.drag.isDragging && this.phoneGroup) {
          // Entrée cinématique au scroll : rotation fluide révélant le profil titane puis recentrage
          const targetRotY = -0.32 + (self.progress * 0.45);
          const targetRotX = 0.12 - (self.progress * 0.08);
          this.phoneGroup.rotation.y = targetRotY;
          this.phoneGroup.rotation.x = targetRotX;
        }
      }
    });
  }

  initVisibilityObserver() {
    if ('IntersectionObserver' in window) {
      this.visibilityObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          this.isVisible = entry.isIntersecting;
        });
      }, { threshold: 0.05 });
      this.visibilityObserver.observe(this.container);
    }
  }

  animate() {
    if (this.isDestroyed) return;
    this.animationFrameId = requestAnimationFrame(() => this.animate());

    if (!this.isVisible) return;

    if (this.phoneGroup) {
      this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.06;
      this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.06;

      if (!this.options.reducedMotion) {
        if (!this.drag.isDragging) {
          // Amortissement de l'inertie après un drag
          if (Math.abs(this.drag.velX) > 0.0001) {
            this.drag.rotY += this.drag.velX;
            this.drag.velX *= 0.92;
          }
          if (Math.abs(this.drag.velY) > 0.0001) {
            this.drag.rotX += this.drag.velY;
            this.drag.rotX = Math.max(-0.55, Math.min(0.55, this.drag.rotX));
            this.drag.velY *= 0.92;
          }

          const floatOffset = Math.sin(Date.now() * 0.0018) * 0.06;
          this.phoneGroup.position.y = floatOffset;
          this.phoneGroup.rotation.y = this.drag.rotY + this.mouse.x * 0.35;
          this.phoneGroup.rotation.x = this.drag.rotX - this.mouse.y * 0.25;
        } else {
          this.phoneGroup.rotation.y = this.drag.rotY;
          this.phoneGroup.rotation.x = this.drag.rotX;
        }
      }

      if (this.shadowMesh) {
        this.shadowMesh.position.x = this.phoneGroup.position.x * 0.75;
      }
    }

    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  renderFallback() {
    this.container.innerHTML = `
      <div class="relative w-full max-w-sm mx-auto p-6 bg-white rounded-3xl shadow-2xl border border-slate-200 text-left">
        <div class="bg-marine-900 text-white p-4 rounded-2xl mb-4">
          <span class="text-xs font-mono text-lime-400">APPS.MULTIBUSINESS.CM</span>
          <h4 class="font-bold text-lg">Application MULTI BUSINESS Gestion Locative</h4>
        </div>
        <p class="text-xs text-slate-600 mb-4">Suivi des baux, relances automatisées, quittances et reversements Orange Money & MTN MoMo.</p>
        <div class="p-3 bg-mint-50 rounded-xl border border-mint-200 text-mint-800 text-xs font-semibold">
          ✓ Collecte en temps réel certifiée
        </div>
      </div>
    `;
  }

  destroy() {
    this.isDestroyed = true;
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }

    if (this.visibilityObserver) {
      this.visibilityObserver.disconnect();
      this.visibilityObserver = null;
    }

    if (this.handleMouseMove && this.container) {
      this.container.removeEventListener('mousemove', this.handleMouseMove);
      this.container.removeEventListener('pointerdown', this.handlePointerDown);
    }
    if (this.handlePointerMove) {
      window.removeEventListener('pointermove', this.handlePointerMove);
      window.removeEventListener('pointerup', this.handlePointerUp);
    }
    if (this.handleResize) {
      window.removeEventListener('resize', this.handleResize);
    }

    this._cleanups.forEach(fn => {
      try { fn(); } catch (e) {}
    });
    this._cleanups = [];

    // Libération complète Three.js
    if (this.scene) {
      this.scene.traverse((obj) => {
        if (!obj.isMesh) return;
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) {
            obj.material.forEach(m => {
              if (m.map) m.map.dispose();
              m.dispose();
            });
          } else {
            if (obj.material.map) obj.material.map.dispose();
            obj.material.dispose();
          }
        }
      });
    }

    this.texturesCache.forEach(tex => tex.dispose());
    this.texturesCache.clear();

    if (this.renderer) {
      if (typeof this.renderer.forceContextLoss === 'function') {
        this.renderer.forceContextLoss();
      }
      this.renderer.dispose();
      if (this.renderer.domElement && this.renderer.domElement.parentNode) {
        this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
      }
    }

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.phoneGroup = null;
    this.screenMesh = null;
    this.shadowMesh = null;
    this.bodyMaterial = null;
    this.backGlassMaterial = null;
    this.lensRingMaterials = [];
  }
}

export const init3DPhoneViewer = (container, options = {}) => {
  if (activeSceneInstance) {
    activeSceneInstance.destroy();
  }
  if (!container) return null;
  activeSceneInstance = new iPhone18ProMaxViewer(container, options);
  return activeSceneInstance;
};

export const destroy3DPhoneViewer = () => {
  if (activeSceneInstance) {
    activeSceneInstance.destroy();
    activeSceneInstance = null;
  }
};
