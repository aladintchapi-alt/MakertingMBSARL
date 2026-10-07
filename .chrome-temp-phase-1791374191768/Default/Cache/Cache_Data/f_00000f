/**
 * MULTI BUSINESS SARL - Module Cartographique Hyper-Premium
 * MapLibre GL JS + Satellite Esri / CartoDB / OSM + 3D Perspective
 * Zéro dépendance bloquante, lazy loading, gestes coopératifs mobile, destroy() propre.
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

    // 1. Inject CSS if not already injected
    if (!document.querySelector('link[data-maplibre-css]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/maplibre-gl@4.7.1/dist/maplibre-gl.css';
      link.setAttribute('data-maplibre-css', 'true');
      document.head.appendChild(link);
    }

    // 2. Inject JS script
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

export class PremiumMapController {
  constructor(options = {}) {
    this.container = typeof options.container === 'string'
      ? document.getElementById(options.container)
      : options.container;

    this.options = Object.assign({
      center: CONFIG.map?.center || [9.7125, 4.0325],
      zoom: CONFIG.map?.zoom || 15.8,
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
    this._observer = null;
    this._cleanups = [];
    this._isDestroyed = false;
  }

  static getStyles() {
    return {
      plan: {
        version: 8,
        sources: {
          osm: {
            type: 'raster',
            tiles: [
              'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            ],
            tileSize: 256,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributeurs'
          }
        },
        layers: [
          {
            id: 'osm-layer',
            type: 'raster',
            source: 'osm',
            minzoom: 0,
            maxzoom: 19
          }
        ]
      },
      satellite: {
        version: 8,
        sources: {
          esri: {
            type: 'raster',
            tiles: [
              'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            ],
            tileSize: 256,
            attribution: 'Imagerie &copy; <a href="https://www.esri.com/" target="_blank" rel="noopener">Esri, Maxar, Earthstar Geographics</a>'
          }
        },
        layers: [
          {
            id: 'esri-layer',
            type: 'raster',
            source: 'esri',
            minzoom: 0,
            maxzoom: 19
          }
        ]
      },
      nuit: {
        version: 8,
        sources: {
          cartoDark: {
            type: 'raster',
            tiles: [
              'https://a.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}@2x.png',
              'https://b.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}@2x.png',
              'https://c.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}@2x.png'
            ],
            tileSize: 256,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions" target="_blank" rel="noopener">CARTO</a>'
          }
        },
        layers: [
          {
            id: 'dark-layer',
            type: 'raster',
            source: 'cartoDark',
            minzoom: 0,
            maxzoom: 20
          }
        ]
      }
    };
  }

  async init() {
    if (!this.container || this._isDestroyed) return;

    // Use IntersectionObserver to lazy-initialize when near viewport
    if ('IntersectionObserver' in window) {
      this._observer = new IntersectionObserver((entries) => {
        if (entries[0] && entries[0].isIntersecting) {
          this._observer.disconnect();
          this._observer = null;
          this._createMap();
        }
      }, { rootMargin: '200px' });
      this._observer.observe(this.container);
    } else {
      this._createMap();
    }
  }

  async _createMap() {
    if (this._isDestroyed || !this.container) return;

    try {
      const maplibregl = await loadMapLibreAssets();
      if (this._isDestroyed) return;

      // Clean container inner HTML and build UI shell
      this._buildUiShell();

      const mapContainer = this.container.querySelector('.maplibre-canvas-target');
      if (!mapContainer) return;

      const styles = PremiumMapController.getStyles();

      this.map = new maplibregl.Map({
        container: mapContainer,
        style: styles[this.currentMode],
        center: this.options.autoFlyIn ? this.options.flyFromCenter : this.options.center,
        zoom: this.options.autoFlyIn ? this.options.flyFromZoom : this.options.zoom,
        pitch: this.options.pitch,
        bearing: this.options.bearing,
        attributionControl: false,
        cooperativeGestures: true // Prevent scroll trapping on mobile (requires two fingers)
      });

      // Add discreet attribution in bottom right
      this.map.addControl(new maplibregl.AttributionControl({ compact: true }), 'bottom-right');

      this.map.on('load', () => {
        if (this._isDestroyed) return;
        this._setupMarkerAndPopup(maplibregl);

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

        <!-- Barre de Contrôle Supérieure Flottante (Segmented Pill Style Selector) -->
        <div class="absolute top-4 left-4 z-20 flex items-center gap-1.5 p-1 rounded-full bg-white/95 backdrop-blur-md shadow-lg border border-slate-200/80">
          <button data-mode="plan" class="map-mode-pill px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shadow-xs ${this.currentMode === 'plan' ? 'bg-marine-900 text-white' : 'text-slate-600 hover:text-slate-900'}">
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
            <span class="text-[10px] text-slate-500 leading-none">Rond-point CCC, Immeuble Express Union</span>
          </div>
        </div>

      </div>
    `;
  }

  _setupMarkerAndPopup(maplibregl) {
    if (!this.map || this._isDestroyed) return;

    // Custom pulsing HTML marker element
    const el = document.createElement('div');
    el.className = 'custom-map-marker cursor-pointer group relative flex items-center justify-center';
    el.style.width = '48px';
    el.style.height = '48px';
    el.innerHTML = `
      <div class="absolute inset-0 rounded-full bg-emerald-500/25 animate-ping pointer-events-none"></div>
      <div class="absolute -inset-1 rounded-full bg-emerald-500/20 animate-pulse pointer-events-none"></div>
      <div class="relative w-11 h-11 rounded-2xl bg-marine-900 text-white shadow-2xl border-2 border-white flex items-center justify-center transform transition-transform group-hover:scale-110">
        <span class="font-black text-xs text-lime-400 tracking-tighter">MB</span>
      </div>
      <div class="absolute -bottom-1.5 w-2 h-2 bg-marine-900 transform rotate-45 border-r border-b border-white"></div>
    `;

    // Popup content
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
          <p class="font-medium text-slate-800">Rond-point CCC (Dakar), Immeuble Express Union, 1er Étage</p>
          <p class="text-slate-500">Douala, Cameroun</p>
          <p class="text-[10px] text-slate-500 pt-1">Lun – Ven : 08h–17h | Sam : 08h–14h</p>
        </div>
        <div class="pt-2 flex flex-col gap-1.5">
          <a href="https://www.google.com/maps/search/?api=1&query=4.0325,9.7125" target="_blank" rel="noopener noreferrer" class="btn-primary !py-1.5 !px-3 text-[11px] text-center w-full flex items-center justify-center gap-1.5">
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

    this.marker = new maplibregl.Marker({ element: el })
      .setLngLat(this.options.center)
      .setPopup(this.popup)
      .addTo(this.map);

    // Auto-open popup on desktop
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

    // Segmented pills
    const pills = this.container.querySelectorAll('.map-mode-pill');
    pills.forEach(pill => {
      const handler = () => {
        const mode = pill.getAttribute('data-mode');
        this.setMode(mode);
      };
      pill.addEventListener('click', handler);
      this._cleanups.push(() => pill.removeEventListener('click', handler));
    });

    // 3D Toggle
    const btn3D = this.container.querySelector('#map-btn-3d');
    if (btn3D) {
      const handler3D = () => this.toggle3D();
      btn3D.addEventListener('click', handler3D);
      this._cleanups.push(() => btn3D.removeEventListener('click', handler3D));
    }

    // Zoom Buttons
    const btnZoomIn = this.container.querySelector('#map-btn-zoom-in');
    const btnZoomOut = this.container.querySelector('#map-btn-zoom-out');
    if (btnZoomIn) {
      const handler = () => this.map && this.map.zoomIn({ duration: 300 });
      btnZoomIn.addEventListener('click', handler);
      this._cleanups.push(() => btnZoomIn.removeEventListener('click', handler));
    }
    if (btnZoomOut) {
      const handler = () => this.map && this.map.zoomOut({ duration: 300 });
      btnZoomOut.addEventListener('click', handler);
      this._cleanups.push(() => btnZoomOut.removeEventListener('click', handler));
    }

    // Recenter
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

  setMode(mode) {
    if (!this.map || this.currentMode === mode || this._isDestroyed) return;
    this.currentMode = mode;

    const styles = PremiumMapController.getStyles();
    if (styles[mode]) {
      this.map.setStyle(styles[mode]);
    }

    // Update pill classes
    const pills = this.container.querySelectorAll('.map-mode-pill');
    pills.forEach(p => {
      if (p.getAttribute('data-mode') === mode) {
        p.className = 'map-mode-pill px-3.5 py-1.5 rounded-full text-xs font-bold transition-all bg-marine-900 text-white shadow-xs';
      } else {
        p.className = 'map-mode-pill px-3.5 py-1.5 rounded-full text-xs font-bold transition-all text-slate-600 hover:text-slate-900';
      }
    });
  }

  toggle3D() {
    if (!this.map || this._isDestroyed) return;
    this.is3D = !this.is3D;

    const targetPitch = this.is3D ? this.options.pitch3D : 0;
    this.map.easeTo({
      pitch: targetPitch,
      bearing: this.is3D ? this.options.bearing : 0,
      duration: 800,
      essential: true
    });

    const btn3D = this.container.querySelector('#map-btn-3d');
    if (btn3D) {
      const dot = btn3D.querySelector('span');
      if (dot) {
        dot.className = `w-2 h-2 rounded-full ${this.is3D ? 'bg-emerald-600' : 'bg-slate-300'}`;
      }
    }
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
          Rond-point CCC (Quartier Dakar), Immeuble Express Union, 1er Étage, Douala, Cameroun.
        </p>
        <div class="flex flex-wrap items-center justify-center gap-3 pt-2">
          <a href="https://www.google.com/maps/search/?api=1&query=4.0325,9.7125" target="_blank" rel="noopener noreferrer" class="btn-primary !px-5 !py-2.5 text-xs inline-flex items-center gap-2">
            <span>Ouvrir sur Google Maps</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
          </a>
          <a href="tel:+237690843497" class="btn-outline !px-5 !py-2.5 text-xs bg-white/10 text-white border-white/20">
            Appeler (+237) 690 84 34 97
          </a>
        </div>
      </div>
    `;
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
