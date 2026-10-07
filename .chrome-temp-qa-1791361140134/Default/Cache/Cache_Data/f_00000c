/**
 * MULTI BUSINESS SARL - High-End 3D Engine (Three.js)
 * Référence d'inspiration : puol.app (iPhone 3D cinématique, rotation au scroll, PBR studio, drag)
 * Adapté à la plateforme SaaS https://app.multibusiness.cm/
 * 
 * - Modèle procédural haute fidélité (Titanium frame, Dynamic Island, bump caméras, contact shadow)
 * - 4 Écrans interactifs dynamiques (Dashboard, Logements, Paiements Mobile Money, Quittances OHADA)
 * - Pilotage ScrollTrigger (Section épinglée) & Drag interactif à la souris / toucher
 * - Optimisations : IntersectionObserver, pause RAF hors écran, DPR plafonné à 2, WebGL context loss au destroy()
 */

let activeSceneInstance = null;

export class Phone3DViewer {
  constructor(containerElement, options = {}) {
    this.container = containerElement;
    this.options = Object.assign({
      autoRotate: true,
      accentColor: 0x26C992, // Menthe MultiBusiness
      secondaryColor: 0x9AFF01, // Lime
      deviceColor: 0x1E293B, // Titane sombre
      reducedMotion: false,
      initialScreen: 'dashboard'
    }, options);

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.phoneGroup = null;
    this.screenMesh = null;
    this.shadowMesh = null;
    this.animationFrameId = null;
    this.currentScreen = this.options.initialScreen;
    this.texturesCache = new Map();

    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.drag = { isDragging: false, startX: 0, startY: 0, rotX: 0.15, rotY: -0.35 };
    this.scrollProgress = 0;
    this.isVisible = true;
    this.isDestroyed = false;

    this.init();
  }

  init() {
    if (!this.container) return;

    if (typeof window.THREE === 'undefined') {
      console.warn('[Scene3D] Three.js non disponible. Fallback actif.');
      this.renderFallback();
      return;
    }

    const THREE = window.THREE;
    const width = this.container.clientWidth || 380;
    const height = this.container.clientHeight || 520;

    // 1. Scène & Caméra
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    this.camera.position.set(0, 0, 7.8);

    // 2. Renderer WebGL avec antialiasing & tone mapping PBR
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;
    this.container.appendChild(this.renderer.domElement);

    // 3. Éclairage Studio PBR (Key Light, Fill, Rim Light & Accent Glow)
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.4);
    this.scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xFFFFFF, 2.8);
    keyLight.position.set(5, 7, 6);
    this.scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xE2E8F0, 1.2);
    fillLight.position.set(-5, -3, 4);
    this.scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight(this.options.accentColor, 2.5);
    rimLight.position.set(-6, 4, -4);
    this.scene.add(rimLight);

    const limeGlow = new THREE.PointLight(this.options.secondaryColor, 1.5, 8);
    limeGlow.position.set(2, -3.5, 3);
    this.scene.add(limeGlow);

    // 4. Construction de l'iPhone et de l'ombre de contact
    this.phoneGroup = new THREE.Group();
    this.buildPhoneMesh(THREE);
    this.buildContactShadow(THREE);
    this.scene.add(this.phoneGroup);

    // 5. Interactions & Observer
    this.bindEvents();
    this.initVisibilityObserver();

    // 6. Démarrage de la boucle de rendu
    this.animate();
  }

  buildPhoneMesh(THREE) {
    const width = 2.45;
    const height = 5.05;
    const depth = 0.28;
    const radius = 0.38;

    // Forme arrondie précise de la tranche
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
      bevelSegments: 8,
      steps: 1,
      bevelSize: 0.06,
      bevelThickness: 0.06
    };

    const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geometry.center();

    // Matériau Titane Métallique PBR
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: this.options.deviceColor,
      metalness: 0.88,
      roughness: 0.24,
    });

    const phoneBody = new THREE.Mesh(geometry, bodyMaterial);
    this.phoneGroup.add(phoneBody);

    // Face arrière en verre dépoli sombre
    const backGlassGeo = new THREE.PlaneGeometry(width * 0.96, height * 0.96);
    const backGlassMat = new THREE.MeshStandardMaterial({
      color: 0x0A101D,
      metalness: 0.4,
      roughness: 0.15,
    });
    const backGlass = new THREE.Mesh(backGlassGeo, backGlassMat);
    backGlass.position.z = -depth / 2 - 0.06;
    backGlass.rotation.y = Math.PI;
    this.phoneGroup.add(backGlass);

    // Écran dynamique avec texture Canvas interchangeable
    const screenGeo = new THREE.PlaneGeometry(width * 0.92, height * 0.93);
    const initialTexture = this.getOrCreateTexture(THREE, this.currentScreen);
    
    const screenMat = new THREE.MeshBasicMaterial({
      map: initialTexture,
      toneMapped: false
    });

    this.screenMesh = new THREE.Mesh(screenGeo, screenMat);
    this.screenMesh.position.z = depth / 2 + 0.065;
    this.phoneGroup.add(this.screenMesh);

    // Dynamic Island (Pilule supérieure)
    const notchGeo = new THREE.CapsuleGeometry(0.07, 0.32, 4, 8);
    const notchMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    const notch = new THREE.Mesh(notchGeo, notchMat);
    notch.rotation.z = Math.PI / 2;
    notch.position.set(0, height / 2 - 0.28, depth / 2 + 0.075);
    this.phoneGroup.add(notch);

    // Bloc optique dorsal (Caméras Pro)
    const bumpGeo = new THREE.BoxGeometry(1.15, 1.15, 0.12);
    const bumpMat = new THREE.MeshStandardMaterial({
      color: 0x050C16,
      metalness: 0.85,
      roughness: 0.3
    });
    const bump = new THREE.Mesh(bumpGeo, bumpMat);
    bump.position.set(width / 4 - 0.05, height / 4 + 0.05, -depth / 2 - 0.07);
    this.phoneGroup.add(bump);

    // 3 Objectifs avec reflets bleutés
    for (let i = 0; i < 3; i++) {
      const lensGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.08, 16);
      const lensMat = new THREE.MeshStandardMaterial({
        color: 0x020617,
        metalness: 0.95,
        roughness: 0.1
      });
      const lens = new THREE.Mesh(lensGeo, lensMat);
      lens.rotation.x = Math.PI / 2;
      const lx = (i === 0 ? -0.26 : (i === 1 ? 0.26 : -0.26));
      const ly = (i === 0 ? 0.26 : (i === 1 ? 0.0 : -0.26));
      lens.position.set(width / 4 - 0.05 + lx, height / 4 + 0.05 + ly, -depth / 2 - 0.14);
      this.phoneGroup.add(lens);
    }

    // Position & inclinaison initiale
    this.phoneGroup.rotation.y = this.drag.rotY;
    this.phoneGroup.rotation.x = this.drag.rotX;
  }

  buildContactShadow(THREE) {
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d');

    const gradient = ctx.createRadialGradient(128, 128, 10, 128, 128, 110);
    gradient.addColorStop(0, 'rgba(11, 27, 43, 0.35)');
    gradient.addColorStop(0.5, 'rgba(11, 27, 43, 0.12)');
    gradient.addColorStop(1, 'rgba(11, 27, 43, 0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 256, 256);

    const shadowTex = new THREE.CanvasTexture(canvas);
    const shadowGeo = new THREE.PlaneGeometry(3.6, 3.6);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      depthWrite: false
    });

    this.shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    this.shadowMesh.rotation.x = -Math.PI / 2;
    this.shadowMesh.position.y = -3.2;
    this.scene.add(this.shadowMesh);
  }

  /**
   * Génération dynamique des 4 Écrans SaaS Haute Résolution (512x1024)
   */
  getOrCreateTexture(THREE, screenType) {
    if (this.texturesCache.has(screenType)) {
      return this.texturesCache.get(screenType);
    }

    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 1024;
    const ctx = canvas.getContext('2d');

    // Fond général blanc pur
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, 512, 1024);

    // 1. HEADER COMMUN AVEC LOGO OFFICIEL
    const headerGrad = ctx.createLinearGradient(0, 0, 512, 160);
    headerGrad.addColorStop(0, '#0B1B2B');
    headerGrad.addColorStop(1, '#13334A');
    ctx.fillStyle = headerGrad;
    ctx.fillRect(0, 0, 512, 150);

    // Cercle et logo officiel
    if (typeof window !== 'undefined' && window._mbLogoImg && window._mbLogoImg.complete) {
      ctx.drawImage(window._mbLogoImg, 32, 45, 54, 54);
    } else {
      const img = new Image();
      img.src = './assets/images/logo-transparent.png';
      img.onload = () => {
        window._mbLogoImg = img;
        const tex = this.texturesCache.get(screenType);
        if (tex) tex.needsUpdate = true;
      };
      // Cercle de secours immédiat
      ctx.fillStyle = '#9AFF01';
      ctx.beginPath();
      ctx.arc(59, 72, 27, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 20px -apple-system, sans-serif';
    ctx.fillText('MULTI BUSINESS SAAS', 98, 68);

    ctx.fillStyle = '#94A3B8';
    ctx.font = '13px -apple-system, sans-serif';
    ctx.fillText('Portail Gestion Locative • Douala', 98, 95);

    // 2. CONTENU SPÉCIFIQUE SELON L'ÉCRAN
    if (screenType === 'dashboard') {
      // Écran 1 : Tableau de Bord Bailleurs
      ctx.fillStyle = '#F0FDF4';
      ctx.strokeStyle = '#26C992';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(32, 180, 448, 140, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#158660';
      ctx.font = 'bold 15px -apple-system, sans-serif';
      ctx.fillText('LOYERS COLLECTÉS (OCTOBRE)', 56, 220);

      ctx.fillStyle = '#0B1B2B';
      ctx.font = 'bold 36px -apple-system, monospace';
      ctx.fillText('14 850 000 FCFA', 56, 270);

      ctx.fillStyle = '#26C992';
      ctx.font = 'bold 15px -apple-system, sans-serif';
      ctx.fillText('✓ Reversé le 5 via Orange Money & MTN', 56, 300);

      const lots = [
        { name: 'Résidence Akwa Palace', badge: '100% Loué', color: '#26C992' },
        { name: 'Immeuble Bonanjo Centre', badge: '100% Loué', color: '#26C992' },
        { name: 'Studios Meublés Logpom', badge: '95% Loué', color: '#26C992' },
        { name: 'Espace Commercial Dakar', badge: '100% Loué', color: '#26C992' }
      ];

      lots.forEach((lot, i) => {
        const topY = 345 + (i * 125);
        ctx.fillStyle = '#F8FAFC';
        ctx.strokeStyle = '#E2E8F0';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(32, topY, 448, 105, 14);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#0B1B2B';
        ctx.font = 'bold 18px -apple-system, sans-serif';
        ctx.fillText(lot.name, 56, topY + 45);

        ctx.fillStyle = '#64748B';
        ctx.font = '14px -apple-system, sans-serif';
        ctx.fillText('48 lots • Baux OHADA sécurisés', 56, topY + 75);

        ctx.fillStyle = lot.color;
        ctx.beginPath();
        ctx.roundRect(350, topY + 25, 110, 32, 8);
        ctx.fill();
        ctx.fillStyle = '#FFFFFF';
        ctx.font = 'bold 13px -apple-system, sans-serif';
        ctx.fillText(lot.badge, 365, topY + 47);
      });

    } else if (screenType === 'logements') {
      // Écran 2 : Gestion des Biens & Logements
      ctx.fillStyle = '#EEF2FF';
      ctx.strokeStyle = '#6366F1';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(32, 180, 448, 110, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#4338CA';
      ctx.font = 'bold 16px -apple-system, sans-serif';
      ctx.fillText('PATRIMOINE IMMOBILIER (48 LOTS)', 56, 220);

      ctx.fillStyle = '#0B1B2B';
      ctx.font = 'bold 26px -apple-system, sans-serif';
      ctx.fillText('48 / 48 Logements Loués', 56, 260);

      const items = [
        { title: 'Appartement 3 Pièces - Bonapriso', price: '350 000 FCFA/mois', tenant: 'M. Jean-Paul T.' },
        { title: 'Studio Meublé Design - Akwa', price: '180 000 FCFA/mois', tenant: 'Mme Sandrine E.' },
        { title: 'Magasin Commercial - Douala Dakar', price: '450 000 FCFA/mois', tenant: 'Société CAM Sarl' },
        { title: 'Plateau Bureaux 120m² - Bonanjo', price: '750 000 FCFA/mois', tenant: 'Cabinet Audit' }
      ];

      items.forEach((item, i) => {
        const topY = 310 + (i * 135);
        ctx.fillStyle = '#FFFFFF';
        ctx.strokeStyle = '#CBD5E1';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(32, topY, 448, 115, 14);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = '#0B1B2B';
        ctx.font = 'bold 16px -apple-system, sans-serif';
        ctx.fillText(item.title, 56, topY + 38);

        ctx.fillStyle = '#6366F1';
        ctx.font = 'bold 17px -apple-system, monospace';
        ctx.fillText(item.price, 56, topY + 70);

        ctx.fillStyle = '#64748B';
        ctx.font = '13px -apple-system, sans-serif';
        ctx.fillText('Locataire : ' + item.tenant, 56, topY + 95);
      });

    } else if (screenType === 'paiements') {
      // Écran 3 : Encaissement Mobile Money
      ctx.fillStyle = '#FEF3C7';
      ctx.strokeStyle = '#F59E0B';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(32, 180, 448, 120, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#B45309';
      ctx.font = 'bold 15px -apple-system, sans-serif';
      ctx.fillText('PAIEMENT PAR MOBILE MONEY', 56, 220);

      ctx.fillStyle = '#0B1B2B';
      ctx.font = 'bold 24px -apple-system, sans-serif';
      ctx.fillText('Orange Money & MTN MoMo', 56, 255);

      ctx.fillStyle = '#D97706';
      ctx.font = 'bold 13px -apple-system, sans-serif';
      ctx.fillText('✓ Réconciliation automatique 24/7', 56, 280);

      const txs = [
        { provider: 'ORANGE MONEY', amount: '+ 350 000 FCFA', ref: 'OM-TX-984210', date: 'Aujourd\'hui 08:14' },
        { provider: 'MTN MOBILE MONEY', amount: '+ 180 000 FCFA', ref: 'MTN-884129', date: 'Aujourd\'hui 09:30' },
        { provider: 'ORANGE MONEY', amount: '+ 450 000 FCFA', ref: 'OM-TX-984201', date: 'Hier 16:45' },
        { provider: 'MTN MOBILE MONEY', amount: '+ 250 000 FCFA', ref: 'MTN-884090', date: 'Hier 11:20' }
      ];

      txs.forEach((tx, i) => {
        const topY = 320 + (i * 130);
        ctx.fillStyle = '#F8FAFC';
        ctx.strokeStyle = '#E2E8F0';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(32, topY, 448, 110, 14);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = tx.provider.includes('ORANGE') ? '#EA580C' : '#CA8A04';
        ctx.font = 'bold 13px -apple-system, sans-serif';
        ctx.fillText(tx.provider, 56, topY + 35);

        ctx.fillStyle = '#15803D';
        ctx.font = 'bold 20px -apple-system, monospace';
        ctx.fillText(tx.amount, 56, topY + 68);

        ctx.fillStyle = '#64748B';
        ctx.font = '12px -apple-system, sans-serif';
        ctx.fillText(tx.ref + ' • ' + tx.date, 56, topY + 92);
      });

    } else if (screenType === 'quittances') {
      // Écran 4 : Quittances Électroniques & Rapports
      ctx.fillStyle = '#E0F2FE';
      ctx.strokeStyle = '#0EA5E9';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(32, 180, 448, 120, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#0369A1';
      ctx.font = 'bold 15px -apple-system, sans-serif';
      ctx.fillText('QUITTANCE ÉLECTRONIQUE CERTIFIÉE', 56, 220);

      ctx.fillStyle = '#0B1B2B';
      ctx.font = 'bold 22px -apple-system, sans-serif';
      ctx.fillText('Bail Conforme Droit OHADA', 56, 255);

      ctx.fillStyle = '#0284C7';
      ctx.font = 'bold 13px -apple-system, sans-serif';
      ctx.fillText('✓ N° Quittance : MB-2026-OCT-042', 56, 280);

      // Aperçu Quittance
      ctx.fillStyle = '#FFFFFF';
      ctx.strokeStyle = '#CBD5E1';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(32, 320, 448, 480, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#0B1B2B';
      ctx.font = 'bold 20px -apple-system, sans-serif';
      ctx.fillText('REÇU DE LOYER OFFICIEL', 56, 370);

      ctx.fillStyle = '#475569';
      ctx.font = '14px -apple-system, sans-serif';
      ctx.fillText('Période : Octobre 2026', 56, 405);
      ctx.fillText('Bailleur : Multi Business Gestion', 56, 435);
      ctx.fillText('Locataire : M. Jean-Paul T.', 56, 465);
      ctx.fillText('Bien : Résidence Akwa, Apt 3B', 56, 495);

      ctx.fillStyle = '#0F172A';
      ctx.font = 'bold 24px -apple-system, monospace';
      ctx.fillText('Montant : 350 000 FCFA', 56, 545);

      // Faux QR Code
      ctx.fillStyle = '#0B1B2B';
      ctx.fillRect(56, 580, 120, 120);
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(70, 594, 30, 30);
      ctx.fillRect(132, 594, 30, 30);
      ctx.fillRect(70, 656, 30, 30);

      ctx.fillStyle = '#16A34A';
      ctx.font = 'bold 15px -apple-system, sans-serif';
      ctx.fillText('✓ Certifié par Huissier', 200, 630);
      ctx.fillStyle = '#64748B';
      ctx.font = '13px -apple-system, sans-serif';
      ctx.fillText('Téléchargeable en PDF', 200, 660);
    }

    // Bouton Action bas universel
    ctx.fillStyle = '#26C992';
    ctx.beginPath();
    ctx.roundRect(32, 900, 448, 65, 32);
    ctx.fill();
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 19px -apple-system, sans-serif';
    ctx.fillText('Accéder au portail (app.multibusiness.cm)', 60, 940);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    this.texturesCache.set(screenType, texture);
    return texture;
  }

  /**
   * Bascule dynamique de l'écran affiché sur l'iPhone 3D
   */
  setScreen(screenType) {
    if (this.currentScreen === screenType || !this.screenMesh || !window.THREE) return;
    this.currentScreen = screenType;
    const newTex = this.getOrCreateTexture(window.THREE, screenType);
    this.screenMesh.material.map = newTex;
    this.screenMesh.material.needsUpdate = true;
  }

  bindEvents() {
    // 1. Suivi de souris (Parallaxe douce)
    this.handleMouseMove = (e) => {
      if (this.drag.isDragging) return;
      const rect = this.container.getBoundingClientRect();
      const clientX = e.clientX - rect.left;
      const clientY = e.clientY - rect.top;
      this.mouse.targetX = (clientX / rect.width - 0.5) * 1.2;
      this.mouse.targetY = (clientY / rect.height - 0.5) * 1.2;
    };

    // 2. Drag to rotate (Interactivité souris & tactile)
    this.handlePointerDown = (e) => {
      this.drag.isDragging = true;
      this.drag.startX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      this.drag.startY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
    };

    this.handlePointerMove = (e) => {
      if (!this.drag.isDragging) return;
      const currentX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const currentY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      const deltaX = (currentX - this.drag.startX) * 0.008;
      const deltaY = (currentY - this.drag.startY) * 0.008;

      this.drag.rotY += deltaX;
      this.drag.rotX += deltaY;

      // Clamping de la rotation X pour éviter un retournement anormal
      this.drag.rotX = Math.max(-0.6, Math.min(0.6, this.drag.rotX));

      this.drag.startX = currentX;
      this.drag.startY = currentY;
    };

    this.handlePointerUp = () => {
      this.drag.isDragging = false;
    };

    // 3. Redimensionnement réactif
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

  initVisibilityObserver() {
    if ('IntersectionObserver' in window) {
      this.visibilityObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          this.isVisible = entry.isIntersecting;
        });
      }, { threshold: 0.05 });
      this.visibilityObserver.observe(this.container);
    }
  }

  animate() {
    if (this.isDestroyed) return;

    this.animationFrameId = requestAnimationFrame(() => this.animate());

    // Si le conteneur n'est pas visible dans le viewport, on saute le rendu (zéro charge GPU)
    if (!this.isVisible) return;

    if (this.phoneGroup) {
      // Interpolation douce vers la position cible
      this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.06;
      this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.06;

      if (!this.options.reducedMotion) {
        if (!this.drag.isDragging) {
          // Flottement organique subtil
          const floatOffset = Math.sin(Date.now() * 0.0018) * 0.08;
          this.phoneGroup.position.y = floatOffset;
          this.phoneGroup.rotation.y = this.drag.rotY + this.mouse.x * 0.4;
          this.phoneGroup.rotation.x = this.drag.rotX - this.mouse.y * 0.3;
        } else {
          this.phoneGroup.rotation.y = this.drag.rotY;
          this.phoneGroup.rotation.x = this.drag.rotX;
        }
      }

      if (this.shadowMesh) {
        this.shadowMesh.position.x = this.phoneGroup.position.x * 0.8;
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
          <span class="text-xs font-mono text-lime-400">APP.MULTIBUSINESS.CM</span>
          <h4 class="font-bold text-lg">Plateforme SaaS Immobilière</h4>
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

    // Libération en profondeur de la mémoire Three.js (géométries, textures, matériaux)
    if (this.scene) {
      this.scene.traverse((object) => {
        if (!object.isMesh) return;
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((mat) => {
              if (mat.map) mat.map.dispose();
              mat.dispose();
            });
          } else {
            if (object.material.map) object.material.map.dispose();
            object.material.dispose();
          }
        }
      });
    }

    this.texturesCache.forEach((tex) => tex.dispose());
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
  }
}

export const init3DPhoneViewer = (container, options = {}) => {
  if (activeSceneInstance) {
    activeSceneInstance.destroy();
  }
  if (!container) return null;
  activeSceneInstance = new Phone3DViewer(container, options);
  return activeSceneInstance;
};

export const destroy3DPhoneViewer = () => {
  if (activeSceneInstance) {
    activeSceneInstance.destroy();
    activeSceneInstance = null;
  }
};
