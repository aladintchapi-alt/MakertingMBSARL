/**
 * MULTI BUSINESS SARL - Module Cartographique Vectoriel Hyper-Premium
 * Architecture résiliente : MapLibre GL JS + Styles Vectoriels Nactifs + Thème Nuit Temps-Réel
 * Repli automatique sans clé (OpenFreeMap) + Satellite Hybride avec sur-échantillonnage
 * Zéro tuile "Map data not yet available", zéro gel de zoom, gestion WebGL complète.
 */

import { CONFIG } from '../../config.js';
import { icon } from '../../icons.js';

let maplibreLoadedPromise = null;

function loadMapLibreAssets() {
  if (maplibreLoadedPromise) return maplibreLoadedPromise;

  maplibreLoadedPromise = new Promise((resolve, reject) => {
    if (typeof window !== 'undefined' && window.maplibregl) {
      return resolve(window.maplibregl);
    }

    // 1. Injecter le CSS MapLibre
    if (!document.querySelector('link[data-maplibre-css]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css';
      link.setAttribute('data-maplibre-css', 'true');
      document.head.appendChild(link);
    }

    // 2. Injecter la librairie MapLibre GL JS
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.js';
    script.async = true;
    script.onload = () => {
      if (window.maplibregl) {
        resolve(window.maplibregl);
      } else {
        reject(new Error('MapLibre GL JS non trouvé après chargement'));
      }
    };
    script.onerror = () => reject(new Error('Impossible de charger MapLibre GL JS'));
    document.head.appendChild(script);
  });

  return maplibreLoadedPromise;
}

/**
 * Générateur du thème Nuit dérivé dynamiquement du style vectoriel de base.
 * Garantit un passage Plan <-> Nuit instantané sans nouvelle requête réseau de tuiles.
 */
export function buildNightStyleFromVector(baseStyle) {
  if (!baseStyle || !baseStyle.layers) return baseStyle;
  const dark = JSON.parse(JSON.stringify(baseStyle));

  // Palette Nuit Hyper-Premium (Marine Encre, Émeraude & Menthe Marque)
  const PALETTE = {
    bg: '#0b1324',               // Bleu nuit profond (slate-950)
    water: '#07101e',            // Eau marine sombre
    waterLine: '#0d233a',        // Contour littoral
    park: '#0a231c',             // Espaces verts / parcs sombre
    parkOutline: '#11352b',
    residential: '#0f172a',      // Zones résidentielles (slate-900)
    commercial: '#131d33',       // Zones commerciales
    pitchGrass: '#0d251d',
    hwy: '#334155',              // Voies rapides (slate-700)
    primary: '#243247',          // Voies principales
    secondary: '#1c283c',        // Voies secondaires
    minor: '#152033',            // Rues résidentielles
    casing: '#090e1a',           // Contour route
    rail: '#1e293b',
    building: '#172235',         // Bâtiments
    buildingOutline: '#25344d',
    building3d: '#1c2b42',       // Extrusion 3D
    text: '#f1f5f9',             // Texte clair haute lisibilité (AA > 10:1)
    textHalo: '#070d18',         // Halo sombre profond
    adminBoundary: '#2563eb'     // Frontière administrative discrète
  };

  dark.layers = dark.layers.map(layer => {
    const l = JSON.parse(JSON.stringify(layer));
    const type = l.type;
    const id = l.id || '';
    const sl = l['source-layer'] || '';
    l.paint = l.paint || {};

    if (type === 'background') {
      l.paint['background-color'] = PALETTE.bg;
    } else if (id.includes('natural_earth') || id.includes('ne2')) {
      l.layout = l.layout || {};
      l.layout.visibility = 'none'; // Désactiver le raster basse altitude
    } else if (sl === 'water') {
      if (l.paint['fill-color']) l.paint['fill-color'] = PALETTE.water;
      if (l.paint['fill-outline-color']) l.paint['fill-outline-color'] = PALETTE.waterLine;
    } else if (sl === 'waterway') {
      if (l.paint['line-color']) l.paint['line-color'] = PALETTE.waterLine;
    } else if (sl === 'park' || sl === 'landcover') {
      if (l.paint['fill-color']) l.paint['fill-color'] = PALETTE.park;
      if (l.paint['line-color']) l.paint['line-color'] = PALETTE.parkOutline;
    } else if (sl === 'landuse') {
      if (id.includes('residential')) {
        l.paint['fill-color'] = PALETTE.residential;
      } else if (id.includes('commercial') || id.includes('industrial')) {
        l.paint['fill-color'] = PALETTE.commercial;
      } else if (id.includes('cemetery') || id.includes('pitch') || id.includes('grass')) {
        l.paint['fill-color'] = PALETTE.pitchGrass;
      } else {
        l.paint['fill-color'] = PALETTE.residential;
      }
    } else if (sl === 'transportation') {
      if (type === 'line') {
        if (id.includes('casing') || (id.includes('bridge') && id.includes('casing'))) {
          l.paint['line-color'] = PALETTE.casing;
        } else if (id.includes('motorway') || id.includes('trunk')) {
          l.paint['line-color'] = PALETTE.hwy;
        } else if (id.includes('primary')) {
          l.paint['line-color'] = PALETTE.primary;
        } else if (id.includes('secondary') || id.includes('tertiary')) {
          l.paint['line-color'] = PALETTE.secondary;
        } else if (id.includes('rail')) {
          l.paint['line-color'] = PALETTE.rail;
        } else {
          l.paint['line-color'] = PALETTE.minor;
        }
      } else if (type === 'fill') {
        l.paint['fill-color'] = PALETTE.minor;
      }
    } else if (sl === 'building') {
      if (type === 'fill') {
        l.paint['fill-color'] = PALETTE.building;
        l.paint['fill-outline-color'] = PALETTE.buildingOutline;
      } else if (type === 'fill-extrusion') {
        l.paint['fill-extrusion-color'] = PALETTE.building3d;
      }
    } else if (sl === 'boundary') {
      if (l.paint['line-color']) l.paint['line-color'] = PALETTE.adminBoundary;
      l.paint['line-opacity'] = 0.6;
    } else if (type === 'symbol') {
      l.paint['text-color'] = PALETTE.text;
      l.paint['text-halo-color'] = PALETTE.textHalo;
      l.paint['text-halo-width'] = 2.5;
      l.paint['text-halo-blur'] = 1;
      if (l.paint['icon-opacity']) l.paint['icon-opacity'] = 0.85;
    }
    return l;
  });

  return dark;
}

/**
 * Générateur du style Satellite Hybride.
 * Insère le raster satellite avec maxzoom: 19 (zoom natif Douala) et superpose les routes et étiquettes.
 */
export function buildSatelliteHybridStyle(baseVectorStyle) {
  if (!baseVectorStyle) return null;
  const sat = JSON.parse(JSON.stringify(baseVectorStyle));

  // Source satellite Esri avec limitation stricte au zoom natif réel (19) pour activer le sur-échantillonnage natif
  sat.sources['esriSat'] = {
    type: 'raster',
    tiles: [
      'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
    ],
    tileSize: 256,
    maxzoom: 19,
    attribution: 'Imagerie &copy; <a href="https://www.esri.com/" target="_blank" rel="noopener">Esri, Maxar</a>'
  };

  const newLayers = [];

  // Couche raster satellite en arrière-plan
  newLayers.push({
    id: 'satellite-imagery',
    type: 'raster',
    source: 'esriSat',
    minzoom: 0,
    maxzoom: 22
  });

  // Conserver les routes et étiquettes vectorielles avec fort contraste
  for (const layer of sat.layers) {
    const type = layer.type;
    const sl = layer['source-layer'] || '';
    const id = layer.id || '';

    // Filtrer les aplats terrestres opaques pour laisser transparaître la photo satellite
    if (type === 'background' || id.includes('natural_earth') || sl === 'water' || sl === 'park' || sl === 'landcover' || sl === 'landuse' || sl === 'building') {
      continue;
    }

    const l = JSON.parse(JSON.stringify(layer));
    l.paint = l.paint || {};

    if (sl === 'transportation') {
      if (l.paint['line-color']) {
        l.paint['line-color'] = '#ffffff';
        l.paint['line-opacity'] = 0.6;
      }
    } else if (sl === 'boundary') {
      if (l.paint['line-color']) {
        l.paint['line-color'] = '#38bdf8';
        l.paint['line-opacity'] = 0.8;
      }
    } else if (type === 'symbol') {
      l.paint['text-color'] = '#ffffff';
      l.paint['text-halo-color'] = '#000000';
      l.paint['text-halo-width'] = 3;
      l.paint['text-halo-blur'] = 1;
      if (l.paint['icon-opacity']) l.paint['icon-opacity'] = 0.95;
    }

    newLayers.push(l);
  }

  sat.layers = newLayers;
  return sat;
}

export class PremiumMapController {
  constructor(options = {}) {
    this.container = typeof options.container === 'string'
      ? document.getElementById(options.container)
      : options.container;

    this.options = Object.assign({
      center: CONFIG.map?.center || [9.7355, 4.0282],
      zoom: CONFIG.map?.zoom || 16,
      pitch: CONFIG.map?.pitch || 0,
      pitch3D: CONFIG.map?.pitch3D || 60,
      bearing: CONFIG.map?.bearing || -17.6,
      flyFromCenter: CONFIG.map?.flyFromCenter || [12.3547, 7.3697],
      flyFromZoom: CONFIG.map?.flyFromZoom || 5.5,
      interactive: true,
      compact: false,
      autoFlyIn: true
    }, options);

    this.map = null;
    this.marker = null;
    this.popup = null;
    this.currentMode = 'plan'; // 'plan' | 'satellite' | 'nuit'
    this.is3D = false;
    this.activeProvider = 'openfreemap'; // 'maptiler' | 'openfreemap'
    this.styles = {};
    this._observer = null;
    this._cleanups = [];
    this._isDestroyed = false;

    if (this.container) {
      this.container.__mapController = this;
    }
    if (typeof window !== 'undefined') {
      window._activeMapController = this;
    }
  }

  async init() {
    if (!this.container || this._isDestroyed) return;
    this.container.__mapController = this;
    if (typeof window !== 'undefined') {
      window._activeMapController = this;
    }

    if (this.options.immediate || (typeof window !== 'undefined' && window.__FORCE_MAP_INIT__)) {
      await this._createMap();
      return;
    }

    if ('IntersectionObserver' in window) {
      this._observer = new IntersectionObserver((entries) => {
        if (entries[0] && (entries[0].isIntersecting || entries[0].intersectionRatio > 0)) {
          if (this._observer) {
            this._observer.disconnect();
            this._observer = null;
          }
          this._createMap();
        }
      }, { rootMargin: '300px' });
      this._observer.observe(this.container);
    } else {
      await this._createMap();
    }
  }

  async ensureReady() {
    if (this._observer) {
      this._observer.disconnect();
      this._observer = null;
    }
    if (!this.map) {
      await this._createMap();
    }
    return new Promise((resolve) => {
      if (this.map && this.map.loaded()) {
        resolve(this);
      } else if (this.map) {
        this.map.once('load', () => resolve(this));
        setTimeout(() => resolve(this), 3000);
      } else {
        resolve(this);
      }
    });
  }

  /**
   * Résout les styles de carte (Plan vectoriel, Nuit vectoriel dérivé, Satellite hybride sur-échantillonné)
   */
  async _resolveStyles() {
    const key = (CONFIG.map && CONFIG.map.maptilerKey) ? CONFIG.map.maptilerKey.trim() : '';

    let basePlanStyle = null;

    // 1. Tenter MapTiler si une clé est configurée
    if (key) {
      try {
        const maptilerUrl = `https://api.maptiler.com/maps/streets-v2/style.json?key=${key}`;
        const res = await fetch(maptilerUrl);
        if (res.ok) {
          basePlanStyle = await res.json();
          this.activeProvider = 'maptiler';
        }
      } catch (e) {
        console.warn('[PremiumMap] Clé MapTiler indisponible, repli OpenFreeMap transparent:', e.message);
      }
    }

    // 2. Repli OpenFreeMap vectoriel transparent (gratuit, sans clé)
    if (!basePlanStyle) {
      this.activeProvider = 'openfreemap';
      try {
        // Essayer le service en ligne OpenFreeMap
        const ofmUrl = 'https://tiles.openfreemap.org/styles/liberty';
        const res = await fetch(ofmUrl);
        if (res.ok) {
          basePlanStyle = await res.json();
        }
      } catch (e) {
        // Repli local de sécurité
        try {
          const localRes = await fetch('./assets/data/map-style-liberty.json');
          if (localRes.ok) basePlanStyle = await localRes.json();
        } catch (err) {}
      }
    }

    // Sécurité de dernier recours
    if (!basePlanStyle) {
      basePlanStyle = {
        version: 8,
        sources: {
          osm: {
            type: 'raster',
            tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
            tileSize: 256,
            maxzoom: 19
          }
        },
        layers: [{ id: 'osm', type: 'raster', source: 'osm' }]
      };
    }

    // 3. Dériver le style NUIT et le style SATELLITE
    const nightStyle = buildNightStyleFromVector(basePlanStyle);
    const satelliteStyle = buildSatelliteHybridStyle(basePlanStyle);

    this.styles = {
      plan: basePlanStyle,
      nuit: nightStyle,
      satellite: satelliteStyle
    };
  }

  async _createMap() {
    if (this._isDestroyed || !this.container) return;

    try {
      const maplibregl = await loadMapLibreAssets();
      if (this._isDestroyed) return;

      // Construction du DOM enveloppe
      this._buildUiShell();

      const mapContainer = this.container.querySelector('.maplibre-canvas-target');
      if (!mapContainer) return;

      // Résolution des styles vectoriels
      await this._resolveStyles();
      if (this._isDestroyed) return;

      const initialStyle = this.styles[this.currentMode] || this.styles.plan;

      // Clé MapTiler pour transformRequest
      const key = (CONFIG.map && CONFIG.map.maptilerKey) ? CONFIG.map.maptilerKey.trim() : '';

      this.map = new maplibregl.Map({
        container: mapContainer,
        style: initialStyle,
        center: this.options.autoFlyIn ? this.options.flyFromCenter : this.options.center,
        zoom: this.options.autoFlyIn ? this.options.flyFromZoom : this.options.zoom,
        minZoom: 3,
        maxZoom: 20,
        pitch: this.options.pitch,
        bearing: this.options.bearing,
        attributionControl: false,
        cooperativeGestures: true,
        transformRequest: (url, resourceType) => {
          if (key && url.includes('maptiler.com') && !url.includes('key=')) {
            const sep = url.includes('?') ? '&' : '?';
            return { url: `${url}${sep}key=${key}` };
          }
          return { url };
        }
      });

      // Gestion résiliente des erreurs réseau / tuiles
      this.map.on('error', (e) => {
        const msg = e?.error?.message || '';
        // Filtrer les erreurs non critiques pour éviter les blocages
        if (msg.includes('404') || msg.includes('403') || msg.includes('tile')) {
          return;
        }
        console.warn('[PremiumMap] Info gestionnaire carte:', msg);
      });

      // Gestionnaire WebGL Context Lost & Restored
      const canvas = this.map.getCanvas();
      if (canvas) {
        canvas.addEventListener('webglcontextlost', (e) => {
          e.preventDefault();
          console.warn('[PremiumMap] Contexte WebGL perdu, sauvegarde de l\'état...');
        });
        canvas.addEventListener('webglcontextrestored', () => {
          console.info('[PremiumMap] Contexte WebGL restauré, actualisation du style.');
          if (this.map && !this._isDestroyed) {
            this.map.setStyle(this.styles[this.currentMode]);
          }
        });
      }

      this.map.on('load', () => {
        if (this._isDestroyed) return;
        this._setupMarkerAndPopup(maplibregl);
        this._updateAttribution();

        if (this.options.autoFlyIn) {
          setTimeout(() => {
            if (this._isDestroyed || !this.map) return;
            this.map.flyTo({
              center: this.options.center,
              zoom: this.options.zoom,
              pitch: this.is3D ? this.options.pitch3D : 0,
              bearing: this.options.bearing,
              speed: 1.1,
              curve: 1.42,
              essential: true
            });
          }, 350);
        }
      });

      this._bindUiEvents();
    } catch (err) {
      console.warn('[PremiumMap] Repli cartographique élégant:', err.message);
      this._renderOfflineFallback();
    }
  }

  _buildUiShell() {
    this.container.innerHTML = `
      <div class="relative w-full h-full rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 group select-none">
        
        <!-- Canvas Cible MapLibre -->
        <div class="maplibre-canvas-target w-full h-full"></div>

        <!-- Sélecteur de Mode (Segmented Pill : Plan / Satellite / Nuit) -->
        <div class="absolute top-4 left-4 z-20 flex items-center gap-1.5 p-1 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/80">
          <button data-mode="plan" class="map-mode-pill px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${this.currentMode === 'plan' ? 'bg-marine-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
            Plan
          </button>
          <button data-mode="satellite" class="map-mode-pill px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${this.currentMode === 'satellite' ? 'bg-marine-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
            Satellite
          </button>
          <button data-mode="nuit" class="map-mode-pill px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${this.currentMode === 'nuit' ? 'bg-marine-900 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'}">
            Nuit
          </button>
        </div>

        <!-- Bouton Bascule Perspective 3D (Haut Droite) -->
        <div class="absolute top-4 right-4 z-20 flex items-center gap-2">
          <button id="map-btn-3d" class="px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/80 text-xs font-bold text-slate-800 hover:text-marine-900 flex items-center gap-1.5 transition-all">
            <span class="w-2 h-2 rounded-full ${this.is3D ? 'bg-emerald-600' : 'bg-slate-300'}"></span>
            <span>Vue 3D</span>
          </button>
        </div>

        <!-- Commandes Tactiles / Zoom / Recentrage Flottantes (Bas Droite) -->
        <div class="absolute bottom-6 right-4 z-20 flex flex-col items-center gap-2">
          <div class="flex flex-col rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/80 overflow-hidden">
            <button id="map-btn-zoom-in" class="w-10 h-10 flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:text-marine-900 font-bold text-lg transition-colors border-b border-slate-100" title="Zoom avant">
              +
            </button>
            <button id="map-btn-zoom-out" class="w-10 h-10 flex items-center justify-center text-slate-700 hover:bg-slate-100 hover:text-marine-900 font-bold text-lg transition-colors" title="Zoom arrière">
              −
            </button>
          </div>

          <button id="map-btn-recenter" class="w-10 h-10 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/80 flex items-center justify-center text-slate-700 hover:text-marine-900 hover:bg-slate-100 transition-all" title="Recentrer sur le siège">
            ${icon('navigation', { class: 'w-4 h-4 text-emerald-800' })}
          </button>
        </div>

        <!-- Badge Repère Siège Social Flottant (Bas Gauche) -->
        <div class="absolute bottom-6 left-4 z-20 hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/80 text-xs">
          <div class="w-2 h-2 rounded-full bg-emerald-600 animate-ping"></div>
          <div>
            <span class="font-bold text-marine-900 block leading-tight">Siège Social • Douala</span>
            <span class="text-[10px] text-slate-500 leading-none">Dakar, Immeuble Express Union (près Commissariat 8ᵉ)</span>
          </div>
        </div>

        <!-- Conteneur d'Attribution Dynamique Dédié (Bas Droite discret) -->
        <div id="custom-map-attribution" class="absolute bottom-1 right-2 z-10 text-[9px] text-slate-500 bg-white/80 px-2 py-0.5 rounded backdrop-blur-xs pointer-events-auto"></div>

      </div>
    `;
  }

  _updateAttribution() {
    const attrEl = this.container.querySelector('#custom-map-attribution');
    if (!attrEl) return;

    if (this.currentMode === 'satellite') {
      attrEl.innerHTML = 'Imagerie &copy; <a href="https://www.esri.com/" target="_blank" rel="noopener" class="underline">Esri</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener" class="underline">OpenStreetMap</a>';
    } else if (this.activeProvider === 'maptiler') {
      attrEl.innerHTML = '&copy; <a href="https://www.maptiler.com/" target="_blank" rel="noopener" class="underline">MapTiler</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener" class="underline">OpenStreetMap</a>';
    } else {
      attrEl.innerHTML = '&copy; <a href="https://openfreemap.org/" target="_blank" rel="noopener" class="underline">OpenFreeMap</a> &copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener" class="underline">OpenStreetMap</a>';
    }
  }

  _setupMarkerAndPopup(maplibregl) {
    if (!this.map || this._isDestroyed) return;

    // Élément Marqueur : AUCUN CSS transform sur le conteneur racine pour préserver le positionnement MapLibre
    const el = document.createElement('div');
    el.className = 'custom-map-marker cursor-pointer relative';
    el.style.width = '48px';
    el.style.height = '48px';
    el.innerHTML = `
      <div class="marker-inner relative w-full h-full flex items-center justify-center">
        <div class="absolute inset-0 rounded-full bg-emerald-500/25 animate-ping pointer-events-none"></div>
        <div class="absolute -inset-1 rounded-full bg-emerald-500/20 animate-pulse pointer-events-none"></div>
        <div class="relative w-11 h-11 rounded-2xl bg-marine-900 text-white shadow-2xl border-2 border-white flex items-center justify-center transition-transform hover:scale-105">
          <span class="font-black text-xs text-lime-400 tracking-tighter">MB</span>
        </div>
        <div class="absolute -bottom-1.5 w-2 h-2 bg-marine-900 rotate-45 border-r border-b border-white"></div>
      </div>
    `;

    // Popup informative officielle
    const popupHtml = `
      <div class="p-3 max-w-xs space-y-2 text-left font-sans">
        <div class="flex items-center gap-2 pb-2 border-b border-slate-100">
          <div class="w-7 h-7 rounded-lg bg-marine-900 text-lime-400 font-bold flex items-center justify-center text-xs">MB</div>
          <div>
            <h4 class="font-bold text-xs text-slate-900 leading-tight">MULTI BUSINESS SARL</h4>
            <span class="text-[10px] text-emerald-800 font-bold">Siège Direction Générale</span>
          </div>
        </div>
        <div class="text-[11px] text-slate-600 space-y-1">
          <p class="font-medium text-slate-800">Dakar (Douala), près du commissariat du 8ᵉ arrondissement, Immeuble Express Union, 1er Étage</p>
          <p class="text-slate-500">Douala, Cameroun</p>
          <p class="text-[10px] text-slate-500 pt-1">Lun – Ven : 08h00 – 17h00 | Sam : 08h00 – 14h00</p>
        </div>
        <div class="pt-2 flex flex-col gap-1.5">
          <a href="https://www.google.com/maps/search/?api=1&query=4.0282,9.7355" target="_blank" rel="noopener noreferrer" class="btn-primary !py-1.5 !px-3 text-[11px] text-center w-full flex items-center justify-center gap-1.5">
            <span>Itinéraire Google Maps</span>
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
          <a href="tel:+237690843497" class="btn-outline !py-1 !px-3 text-[10px] text-center w-full bg-white">
            Appeler : (+237) 690 84 34 97
          </a>
        </div>
      </div>
    `;

    this.popup = new maplibregl.Popup({
      offset: 25,
      closeButton: true,
      closeOnClick: false,
      maxWidth: '300px',
      className: 'custom-maplibre-popup'
    }).setHTML(popupHtml);

    this.marker = new maplibregl.Marker({ element: el, anchor: 'bottom' })
      .setLngLat(this.options.center)
      .setPopup(this.popup)
      .addTo(this.map);

    // Ouverture automatique sur écran large
    if (window.innerWidth >= 768 && !this.options.compact) {
      setTimeout(() => {
        if (!this._isDestroyed && this.marker) {
          this.marker.togglePopup();
        }
      }, 1200);
    }
  }

  _bindUiEvents() {
    if (!this.container || this._isDestroyed) return;

    // Boutons de mode
    const pills = this.container.querySelectorAll('.map-mode-pill');
    pills.forEach(pill => {
      const handler = () => {
        const mode = pill.getAttribute('data-mode');
        this.setMode(mode);
      };
      pill.addEventListener('click', handler);
      this._cleanups.push(() => pill.removeEventListener('click', handler));
    });

    // Bascule 3D
    const btn3D = this.container.querySelector('#map-btn-3d');
    if (btn3D) {
      const handler3D = () => this.toggle3D();
      btn3D.addEventListener('click', handler3D);
      this._cleanups.push(() => btn3D.removeEventListener('click', handler3D));
    }

    // Zoom
    const btnZoomIn = this.container.querySelector('#map-btn-zoom-in');
    const btnZoomOut = this.container.querySelector('#map-btn-zoom-out');
    if (btnZoomIn) {
      const handler = () => {
        if (this.map) this.map.zoomIn({ duration: 300 });
      };
      btnZoomIn.addEventListener('click', handler);
      this._cleanups.push(() => btnZoomIn.removeEventListener('click', handler));
    }
    if (btnZoomOut) {
      const handler = () => {
        if (this.map) this.map.zoomOut({ duration: 300 });
      };
      btnZoomOut.addEventListener('click', handler);
      this._cleanups.push(() => btnZoomOut.removeEventListener('click', handler));
    }

    // Recentrer
    const btnRecenter = this.container.querySelector('#map-btn-recenter');
    if (btnRecenter) {
      const handler = () => {
        if (!this.map) return;
        this.map.flyTo({
          center: this.options.center,
          zoom: this.options.zoom,
          pitch: this.is3D ? this.options.pitch3D : 0,
          bearing: this.options.bearing,
          essential: true
        });
      };
      btnRecenter.addEventListener('click', handler);
      this._cleanups.push(() => btnRecenter.removeEventListener('click', handler));
    }
  }

  /**
   * Changement de mode avec préservation d'état, clamp du zoom et fondu fluide
   */
  setMode(mode) {
    if (!this.map || this.currentMode === mode || this._isDestroyed) return;
    this.currentMode = mode;

    const targetStyle = this.styles[mode];
    if (targetStyle) {
      // Clamper le zoom si nécessaire
      const currentZoom = this.map.getZoom();
      const maxAllowed = 20;
      if (currentZoom > maxAllowed) {
        this.map.easeTo({ zoom: maxAllowed, duration: 200 });
      }

      // Appliquer le style via diff pour une fluidité maximale
      const isVectorDiff = (mode === 'plan' || mode === 'nuit');
      this.map.setStyle(targetStyle, { diff: isVectorDiff });

      // Ré-attacher le marqueur après rechargement de style si nécessaire
      this.map.once('style.load', () => {
        if (this._isDestroyed) return;
        this._updateAttribution();
        if (this.is3D) {
          this._apply3DExtrusions();
        }
      });
    }

    // Mettre à jour l'apparence des pills
    const pills = this.container.querySelectorAll('.map-mode-pill');
    pills.forEach(p => {
      if (p.getAttribute('data-mode') === mode) {
        p.className = 'map-mode-pill px-3.5 py-1.5 rounded-full text-xs font-bold transition-all bg-marine-900 text-white shadow-xs';
      } else {
        p.className = 'map-mode-pill px-3.5 py-1.5 rounded-full text-xs font-bold transition-all text-slate-600 hover:text-slate-900';
      }
    });

    this._updateAttribution();
  }

  toggle3D() {
    if (!this.map || this._isDestroyed) return;
    this.is3D = !this.is3D;

    const targetPitch = this.is3D ? this.options.pitch3D : 0;
    const targetBearing = this.is3D ? this.options.bearing : 0;

    this.map.easeTo({
      pitch: targetPitch,
      bearing: targetBearing,
      duration: 800,
      essential: true
    });

    if (this.is3D) {
      this._apply3DExtrusions();
    } else {
      this._remove3DExtrusions();
    }

    const btn3D = this.container.querySelector('#map-btn-3d');
    if (btn3D) {
      const dot = btn3D.querySelector('span');
      if (dot) {
        dot.className = `w-2 h-2 rounded-full ${this.is3D ? 'bg-emerald-600' : 'bg-slate-300'}`;
      }
    }
  }

  _apply3DExtrusions() {
    if (!this.map || this._isDestroyed) return;
    try {
      if (this.map.getLayer('3d-buildings')) return;

      const buildingSource = this.map.getSource('openmaptiles') ? 'openmaptiles' : null;
      if (!buildingSource) return;

      const extrusionColor = this.currentMode === 'nuit' ? '#1c2b42' : '#cbd5e1';

      this.map.addLayer({
        id: '3d-buildings',
        source: buildingSource,
        'source-layer': 'building',
        type: 'fill-extrusion',
        minzoom: 15,
        paint: {
          'fill-extrusion-color': extrusionColor,
          'fill-extrusion-height': [
            'coalesce',
            ['get', 'render_height'],
            ['get', 'height'],
            12
          ],
          'fill-extrusion-base': [
            'coalesce',
            ['get', 'render_min_height'],
            ['get', 'min_height'],
            0
          ],
          'fill-extrusion-opacity': 0.85
        }
      });
    } catch (e) {
      // Non-bloquant si la source de bâtiments n'est pas vectorielle
    }
  }

  _remove3DExtrusions() {
    if (!this.map || this._isDestroyed) return;
    try {
      if (this.map.getLayer('3d-buildings')) {
        this.map.removeLayer('3d-buildings');
      }
    } catch (e) {}
  }

  _renderOfflineFallback() {
    if (!this.container || this._isDestroyed) return;

    this.container.innerHTML = `
      <div class="relative w-full h-full min-h-[420px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-900 text-white flex flex-col items-center justify-center p-8 text-center space-y-4">
        <div class="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-lime-400 mb-2">
          ${icon('map-pin', { class: 'w-7 h-7' })}
        </div>
        <h3 class="font-serif text-2xl font-bold">Siège Social — MULTI BUSINESS SARL</h3>
        <p class="text-sm text-slate-300 max-w-md">
          Dakar (Douala), près du commissariat du 8ᵉ arrondissement, Immeuble Express Union, 1er niveau.<br/>
          Coordonnées : 4.0282° N, 9.7355° E
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a href="https://www.google.com/maps/search/?api=1&query=4.0282,9.7355" target="_blank" rel="noopener noreferrer" class="btn-primary !py-2.5 !px-5 text-xs">
            Ouvrir dans Google Maps
          </a>
          <button id="btn-map-retry" class="btn-outline !py-2.5 !px-5 text-xs text-white border-white/40 hover:bg-white/10">
            Réessayer le chargement
          </button>
        </div>
      </div>
    `;

    const retryBtn = this.container.querySelector('#btn-map-retry');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        this._createMap();
      }, { once: true });
    }
  }

  destroy() {
    this._isDestroyed = true;
    if (this._observer) {
      this._observer.disconnect();
      this._observer = null;
    }
    this._cleanups.forEach(fn => {
      try { fn(); } catch (e) {}
    });
    this._cleanups = [];

    if (this.marker) {
      try { this.marker.remove(); } catch (e) {}
      this.marker = null;
    }
    if (this.popup) {
      try { this.popup.remove(); } catch (e) {}
      this.popup = null;
    }
    if (this.map) {
      try { this.map.remove(); } catch (e) {}
      this.map = null;
    }
  }
}
