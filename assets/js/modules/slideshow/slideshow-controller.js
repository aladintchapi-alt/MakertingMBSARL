/**
 * MULTI BUSINESS SARL - Contrôleur de Diaporama Hyper Premium
 * Expérience cinématographique fluide, Ken Burns orienté, progression segmentée,
 * contrôles en verre dépoli, accessibilité WCAG AA et gestion du cycle de vie SPA.
 */

import { icon } from '../../icons.js';

let activePlayingSlideshow = null;
let cachedSlideshowsData = null;

export class PremiumSlideshow {
  constructor(element, options = {}) {
    this.container = element;
    this.slideshowId = element.getAttribute('data-slideshow') || 'gestion-locative';
    this.aspectRatio = element.getAttribute('data-aspect-ratio') || '16/9';
    this.aspectMobile = element.getAttribute('data-aspect-mobile') || '6/5';
    this.aspectTablet = element.getAttribute('data-aspect-tablet') || '16/10';
    this.customDuration = parseInt(element.getAttribute('data-duration'), 10) || null;
    this.pauseOnHover = element.getAttribute('data-pause-on-hover') === 'true';
    this.options = options;

    this.data = null;
    this.images = [];
    this.currentIndex = 0;
    this.isPlaying = false;
    this.isControlsVisible = true;
    this.controlsTimer = null;
    this.slideTimer = null;
    this.progressRaf = null;
    this.slideStartTime = 0;
    this.slideRemainingTime = 0;
    this.isDestroyed = false;
    this.isFullscreen = false;
    this.isPseudoFullscreen = false;
    this.wasPlayingBeforeHidden = false;

    // Éléments du DOM
    this.dom = {
      wrapper: null,
      stage: null,
      slideCurrent: null,
      slideNext: null,
      caption: null,
      captionTitle: null,
      captionText: null,
      progressBar: null,
      progressSegments: [],
      counter: null,
      controls: null,
      playBtn: null,
      prevBtn: null,
      nextBtn: null,
      fullscreenBtn: null,
      loopBtn: null,
      thumbsStrip: null
    };

    this._cleanups = [];
    this.init();
  }

  async init() {
    try {
      await this.loadData();
      if (this.isDestroyed || !this.images || this.images.length === 0) return;
      this.render();
      this.setupObservers();
    } catch (err) {
      console.warn(`[Slideshow:${this.slideshowId}] Erreur d'initialisation:`, err);
    }
  }

  async loadData() {
    if (!cachedSlideshowsData) {
      const basePath = this.resolvePath('assets/data/slideshows.json');
      const res = await fetch(basePath);
      cachedSlideshowsData = await res.json();
    }
    this.data = cachedSlideshowsData[this.slideshowId] || Object.values(cachedSlideshowsData)[0];
    if (this.data) {
      this.images = this.data.images || [];
      this.loop = this.data.options?.loop !== false;
      this.defaultDuration = this.customDuration || this.data.options?.defaultDuration || 5000;
    }
  }

  resolvePath(relPath) {
    if (relPath.startsWith('http://') || relPath.startsWith('https://') || relPath.startsWith('data:')) {
      return relPath;
    }
    // Nettoyer les ./ initiaux
    const cleanRel = relPath.replace(/^\.\//, '');
    const base = window.APP_BASE_PATH || '';
    if (base && !cleanRel.startsWith(base.replace(/^\//, ''))) {
      return (base.endsWith('/') ? base : base + '/') + cleanRel;
    }
    return './' + cleanRel;
  }

  getBestSource(imgItem, targetWidth = 1600) {
    if (imgItem.variants?.webp) {
      const keys = Object.keys(imgItem.variants.webp);
      if (keys.length > 0) {
        return this.resolvePath(imgItem.variants.webp[keys[keys.length - 1]]);
      }
    }
    return this.resolvePath(imgItem.path || imgItem.file);
  }

  getSrcSet(imgItem, format = 'webp') {
    const list = imgItem.variants?.[format];
    if (!list) return '';
    return Object.entries(list)
      .map(([w, p]) => `${this.resolvePath(p)} ${w}`)
      .join(', ');
  }

  render() {
    if (!this.container || this.isDestroyed) return;

    this.container.classList.add('slideshow-container-root');
    this.container.setAttribute('role', 'region');
    this.container.setAttribute('aria-roledescription', 'diaporama');
    this.container.setAttribute('aria-label', this.data.title || 'Diaporama photos');

    const firstImg = this.images[0];
    const firstFocal = firstImg.focalPoint || { x: 50, y: 50 };
    const totalDurationSeconds = Math.round(this.images.reduce((acc, it) => acc + (it.duration || this.defaultDuration), 0) / 1000);
    const coverSrc = this.getBestSource(firstImg, 1600);

    this.container.innerHTML = `
      <div class="slideshow-wrapper relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-950 group select-none outline-none focus-visible:ring-4 focus-visible:ring-emerald-500/50" 
           style="--slide-aspect-mobile: ${this.aspectMobile}; --slide-aspect-tablet: ${this.aspectTablet}; --slide-aspect-desktop: ${this.aspectRatio};"
           tabindex="0">
        
        <!-- ============================================================= -->
        <!-- SCÈNE VISUELLE (Couverture en repos, Scène dynamique en lecture) -->
        <!-- ============================================================= -->
        <div class="slideshow-stage absolute inset-0 w-full h-full overflow-hidden">
          
          <!-- Voile flouté ambiant d'arrière-plan pour images de ratios variables -->
          <div class="slideshow-ambient-bg absolute inset-0 w-full h-full bg-cover bg-center filter blur-3xl opacity-40 scale-110 pointer-events-none transition-all duration-1000" style="background-image: url('${coverSrc}');"></div>
          
          <!-- Image de Couverture (État Repos) avec point focal préservé -->
          <div class="slideshow-cover-layer absolute inset-0 w-full h-full transition-transform duration-700 ease-out group-hover:scale-105">
            <picture>
              <source type="image/avif" srcset="${this.getSrcSet(firstImg, 'avif')}" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px">
              <source type="image/webp" srcset="${this.getSrcSet(firstImg, 'webp')}" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px">
              <img src="${coverSrc}" alt="${firstImg.alt}" class="w-full h-full object-cover" style="object-position: ${firstFocal.x}% ${firstFocal.y}%;" loading="eager" decoding="async" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px">
            </picture>
            <div class="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent"></div>
          </div>

          <!-- Diapositives actives (Créées dynamiquement lors de la lecture) -->
          <div class="slideshow-slides-container absolute inset-0 w-full h-full hidden">
            <div class="slideshow-slide-bg absolute inset-0 w-full h-full bg-cover bg-center filter blur-3xl opacity-35 scale-110 pointer-events-none transition-all duration-1000"></div>
            <div class="slideshow-slide-active absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden"></div>
            <div class="slideshow-slide-incoming absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden opacity-0 pointer-events-none"></div>
          </div>

        </div>

        <!-- ============================================================= -->
        <!-- COUCHE REPOS : GRAND BOUTON PLAY & BADGE INFORMATIF           -->
        <!-- ============================================================= -->
        <div class="slideshow-idle-overlay absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-6 text-center text-white z-10 transition-opacity duration-500">
          <button type="button" class="slideshow-idle-play-btn group/btn relative flex items-center justify-center w-16 h-16 sm:w-22 sm:h-22 rounded-full bg-white/95 text-slate-900 shadow-2xl backdrop-blur-md border border-white/60 hover:scale-110 hover:bg-white active:scale-95 transition-all duration-300 mb-2.5 cursor-pointer touch-manipulation" aria-label="Lancer le diaporama">
            <!-- Anneau pulsant discret -->
            <span class="absolute inset-0 rounded-full bg-emerald-500/35 animate-ping opacity-75 pointer-events-none"></span>
            <svg class="w-7 h-7 sm:w-10 sm:h-10 fill-current translate-x-0.5 text-marine-950 transition-transform group-hover/btn:scale-110" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </button>
          
          <div class="flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-semibold text-slate-100 shadow-md">
            <span class="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true"></span>
            <span>Diaporama • ${this.images.length} photos (${totalDurationSeconds} s)</span>
          </div>
          <span class="text-[10px] sm:text-xs text-slate-200 mt-1.5 font-medium opacity-90 drop-shadow-sm">Cliquez pour lancer la visite cinématographique</span>
        </div>

        <!-- ============================================================= -->
        <!-- COUCHE LECTURE : BARRE SEGMENTS, LÉGENDES & CONTRÔLES VERRE   -->
        <!-- ============================================================= -->
        <div class="slideshow-active-ui absolute inset-0 flex flex-col justify-between p-3 sm:p-5 z-20 opacity-0 pointer-events-none transition-opacity duration-300">
          
          <!-- En-tête : Barre de progression segmentée + Compteur -->
          <div class="flex items-center gap-2.5 sm:gap-4">
            <div class="slideshow-progress-bar flex items-center gap-1.5 sm:gap-2 flex-grow" role="progressbar" aria-valuenow="1" aria-valuemin="1" aria-valuemax="${this.images.length}">
              ${this.images.map((_, idx) => `
                <div class="slideshow-segment relative flex-grow h-1.5 sm:h-2 rounded-full bg-white/30 overflow-hidden cursor-pointer touch-manipulation" data-segment-idx="${idx}" title="Photo ${idx + 1}">
                  <div class="slideshow-segment-fill absolute top-0 left-0 bottom-0 w-0 bg-white rounded-full transition-all duration-75"></div>
                </div>
              `).join('')}
            </div>
            <div class="slideshow-counter px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-mono font-bold text-white flex-shrink-0">
              1 / ${this.images.length}
            </div>
          </div>

          <!-- Milieu / Bas : Légende lisible avec dégradé -->
          <div class="slideshow-caption text-left text-white max-w-2xl bg-gradient-to-t from-slate-950/85 via-slate-950/45 to-transparent p-2.5 sm:p-4 rounded-xl backdrop-blur-xs transition-all duration-500 max-h-[40%] overflow-hidden">
            <span class="slideshow-caption-category text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-0.5">MULTI BUSINESS SARL</span>
            <h4 class="slideshow-caption-title font-serif text-sm sm:text-2xl font-bold leading-tight drop-shadow-md text-white line-clamp-2"></h4>
            <p class="slideshow-caption-text text-[11px] sm:text-sm text-slate-200 mt-0.5 leading-relaxed drop-shadow-sm font-sans line-clamp-2 sm:line-clamp-3"></p>
          </div>

          <!-- Pied : Barre de contrôle tactile confortable -->
          <div class="slideshow-controls flex items-center justify-between gap-1.5 sm:gap-3 bg-slate-950/80 backdrop-blur-md border border-white/20 p-1 sm:p-2 rounded-full shadow-2xl transition-all duration-300">
            
            <div class="flex items-center gap-0.5 sm:gap-1.5">
              <!-- Précédent -->
              <button type="button" class="slideshow-prev-btn w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white hover:bg-white/20 active:scale-95 transition-all cursor-pointer touch-manipulation" aria-label="Photo précédente">
                <svg class="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M15 19l-7-7 7-7"/></svg>
              </button>
              
              <!-- Lecture / Pause -->
              <button type="button" class="slideshow-play-btn w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center bg-white text-slate-900 hover:bg-emerald-400 hover:text-slate-950 active:scale-95 transition-all shadow-md cursor-pointer touch-manipulation" aria-label="Mettre en pause">
                <svg class="slideshow-icon-pause w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 fill-current" viewBox="0 0 24 24"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                <svg class="slideshow-icon-play w-4.5 h-4.5 sm:w-5.5 sm:h-5.5 fill-current hidden" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </button>

              <!-- Suivant -->
              <button type="button" class="slideshow-next-btn w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center text-white hover:bg-white/20 active:scale-95 transition-all cursor-pointer touch-manipulation" aria-label="Photo suivante">
                <svg class="w-4.5 h-4.5 sm:w-5.5 sm:h-5.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>

            <!-- Bande de miniatures tactile -->
            <div class="slideshow-thumbs-strip hidden sm:flex items-center gap-1.5 overflow-x-auto max-w-[220px] md:max-w-xs scrollbar-none px-2 py-1">
              ${this.images.map((img, idx) => `
                <button type="button" class="slideshow-thumb-btn w-8 h-8 rounded-lg overflow-hidden border border-white/30 opacity-60 hover:opacity-100 hover:scale-105 transition-all flex-shrink-0 cursor-pointer" data-thumb-idx="${idx}" aria-label="Aller à la photo ${idx + 1}">
                  <img src="${img.lqip || this.getBestSource(img, 640)}" alt="" class="w-full h-full object-cover">
                </button>
              `).join('')}
            </div>

            <div class="flex items-center gap-1 sm:gap-1.5">
              <!-- Boucle -->
              <button type="button" class="slideshow-loop-btn w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white hover:bg-white/20 active:scale-95 transition-all cursor-pointer touch-manipulation ${this.loop ? 'text-emerald-400' : 'opacity-60'}" aria-label="Lecture en boucle active" title="Bascule boucle">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              </button>

              <!-- Plein écran -->
              <button type="button" class="slideshow-fullscreen-btn w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white hover:bg-white/20 active:scale-95 transition-all cursor-pointer touch-manipulation" aria-label="Activer le mode plein écran" title="Plein écran (F)">
                <svg class="slideshow-icon-fs-enter w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"/></svg>
                <svg class="slideshow-icon-fs-exit w-5 h-5 sm:w-6 sm:h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
            </div>

          </div>

        </div>

      </div>
    `;

    this.cacheDomElements();
    this.bindEvents();
  }

  cacheDomElements() {
    const root = this.container;
    this.dom.wrapper = root.querySelector('.slideshow-wrapper');
    this.dom.stage = root.querySelector('.slideshow-stage');
    this.dom.coverLayer = root.querySelector('.slideshow-cover-layer');
    this.dom.slidesContainer = root.querySelector('.slideshow-slides-container');
    this.dom.slideActive = root.querySelector('.slideshow-slide-active');
    this.dom.slideIncoming = root.querySelector('.slideshow-slide-incoming');
    this.dom.ambientBg = root.querySelector('.slideshow-slide-bg');
    this.dom.idleOverlay = root.querySelector('.slideshow-idle-overlay');
    this.dom.activeUi = root.querySelector('.slideshow-active-ui');
    this.dom.caption = root.querySelector('.slideshow-caption');
    this.dom.captionTitle = root.querySelector('.slideshow-caption-title');
    this.dom.captionText = root.querySelector('.slideshow-caption-text');
    this.dom.progressBar = root.querySelector('.slideshow-progress-bar');
    this.dom.progressSegments = Array.from(root.querySelectorAll('.slideshow-segment'));
    this.dom.counter = root.querySelector('.slideshow-counter');
    this.dom.controls = root.querySelector('.slideshow-controls');
    this.dom.idlePlayBtn = root.querySelector('.slideshow-idle-play-btn');
    this.dom.playBtn = root.querySelector('.slideshow-play-btn');
    this.dom.prevBtn = root.querySelector('.slideshow-prev-btn');
    this.dom.nextBtn = root.querySelector('.slideshow-next-btn');
    this.dom.fullscreenBtn = root.querySelector('.slideshow-fullscreen-btn');
    this.dom.loopBtn = root.querySelector('.slideshow-loop-btn');
    this.dom.iconPause = root.querySelector('.slideshow-icon-pause');
    this.dom.iconPlay = root.querySelector('.slideshow-icon-play');
    this.dom.iconFsEnter = root.querySelector('.slideshow-icon-fs-enter');
    this.dom.iconFsExit = root.querySelector('.slideshow-icon-fs-exit');
    this.dom.thumbsStrip = root.querySelector('.slideshow-thumbs-strip');
  }

  bindEvents() {
    // 1. Bouton Play en état repos
    if (this.dom.idlePlayBtn) {
      const handleIdlePlay = (e) => {
        e.stopPropagation();
        this.startPlayback();
      };
      this.dom.idlePlayBtn.addEventListener('click', handleIdlePlay);
      this._cleanups.push(() => this.dom.idlePlayBtn?.removeEventListener('click', handleIdlePlay));
    }

    // 2. Clic sur la scène active = bascule Play / Pause
    if (this.dom.wrapper) {
      const handleWrapperClick = (e) => {
        if (!this.isPlaying) return;
        // Ignorer les clics sur les contrôles ou les boutons
        if (e.target.closest('.slideshow-controls') || e.target.closest('.slideshow-progress-bar')) return;
        this.togglePlayPause();
      };
      this.dom.wrapper.addEventListener('click', handleWrapperClick);
      this._cleanups.push(() => this.dom.wrapper?.removeEventListener('click', handleWrapperClick));
    }

    // 3. Bouton Lecture / Pause dans les contrôles
    if (this.dom.playBtn) {
      const handlePlayBtn = (e) => {
        e.stopPropagation();
        this.togglePlayPause();
      };
      this.dom.playBtn.addEventListener('click', handlePlayBtn);
      this._cleanups.push(() => this.dom.playBtn?.removeEventListener('click', handlePlayBtn));
    }

    // 4. Précédent / Suivant
    if (this.dom.prevBtn) {
      const handlePrev = (e) => {
        e.stopPropagation();
        this.prev();
      };
      this.dom.prevBtn.addEventListener('click', handlePrev);
      this._cleanups.push(() => this.dom.prevBtn?.removeEventListener('click', handlePrev));
    }

    if (this.dom.nextBtn) {
      const handleNext = (e) => {
        e.stopPropagation();
        this.next();
      };
      this.dom.nextBtn.addEventListener('click', handleNext);
      this._cleanups.push(() => this.dom.nextBtn?.removeEventListener('click', handleNext));
    }

    // 5. Plein écran
    if (this.dom.fullscreenBtn) {
      const handleFs = (e) => {
        e.stopPropagation();
        this.toggleFullscreen();
      };
      this.dom.fullscreenBtn.addEventListener('click', handleFs);
      this._cleanups.push(() => this.dom.fullscreenBtn?.removeEventListener('click', handleFs));
    }

    // 6. Bascule boucle
    if (this.dom.loopBtn) {
      const handleLoop = (e) => {
        e.stopPropagation();
        this.loop = !this.loop;
        this.dom.loopBtn.classList.toggle('text-emerald-400', this.loop);
        this.dom.loopBtn.classList.toggle('opacity-60', !this.loop);
        this.dom.loopBtn.setAttribute('aria-label', this.loop ? 'Lecture en boucle active' : 'Lecture en boucle inactive');
      };
      this.dom.loopBtn.addEventListener('click', handleLoop);
      this._cleanups.push(() => this.dom.loopBtn?.removeEventListener('click', handleLoop));
    }

    // 7. Clic sur segments de progression
    this.dom.progressSegments.forEach(seg => {
      const idx = parseInt(seg.getAttribute('data-segment-idx'), 10);
      const handleSegClick = (e) => {
        e.stopPropagation();
        this.goTo(idx);
      };
      seg.addEventListener('click', handleSegClick);
      this._cleanups.push(() => seg.removeEventListener('click', handleSegClick));
    });

    // 8. Clic sur miniatures
    const thumbBtns = this.container.querySelectorAll('.slideshow-thumb-btn');
    thumbBtns.forEach(btn => {
      const idx = parseInt(btn.getAttribute('data-thumb-idx'), 10);
      const handleThumb = (e) => {
        e.stopPropagation();
        this.goTo(idx);
      };
      btn.addEventListener('click', handleThumb);
      this._cleanups.push(() => btn.removeEventListener('click', handleThumb));
    });

    // 9. Gestion Clavier
    const handleKeydown = (e) => {
      if (document.activeElement !== this.dom.wrapper && !this.dom.wrapper.contains(document.activeElement)) return;

      switch (e.key) {
        case ' ':
          e.preventDefault();
          this.togglePlayPause();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          this.prev();
          break;
        case 'ArrowRight':
          e.preventDefault();
          this.next();
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          this.toggleFullscreen();
          break;
        case 'Escape':
          if (this.isPseudoFullscreen) {
            e.preventDefault();
            this.disablePseudoFullscreen();
          }
          break;
        case 'Home':
          e.preventDefault();
          this.goTo(0);
          break;
        case 'End':
          e.preventDefault();
          this.goTo(this.images.length - 1);
          break;
      }
    };
    window.addEventListener('keydown', handleKeydown);
    this._cleanups.push(() => window.removeEventListener('keydown', handleKeydown));

    // 10. Balayage tactile (Touch Swipe)
    let touchStartX = 0;
    let touchStartY = 0;
    const handleTouchStart = (e) => {
      if (e.touches && e.touches[0]) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
      this.showControlsTemporarily();
    };
    const handleTouchEnd = (e) => {
      if (e.changedTouches && e.changedTouches[0]) {
        const diffX = e.changedTouches[0].clientX - touchStartX;
        const diffY = e.changedTouches[0].clientY - touchStartY;
        if (Math.abs(diffX) > 45 && Math.abs(diffX) > Math.abs(diffY)) {
          if (diffX > 0) this.prev();
          else this.next();
        }
      }
    };
    this.dom.wrapper.addEventListener('touchstart', handleTouchStart, { passive: true });
    this.dom.wrapper.addEventListener('touchend', handleTouchEnd, { passive: true });
    this._cleanups.push(() => {
      this.dom.wrapper?.removeEventListener('touchstart', handleTouchStart);
      this.dom.wrapper?.removeEventListener('touchend', handleTouchEnd);
    });

    // 11. Masquage automatique des contrôles après 2.5s d'inactivité
    const handleMouseMove = () => {
      this.showControlsTemporarily();
    };
    this.dom.wrapper.addEventListener('mousemove', handleMouseMove);
    this._cleanups.push(() => this.dom.wrapper?.removeEventListener('mousemove', handleMouseMove));

    // 12. Événement plein écran
    const handleFsChange = () => {
      this.isFullscreen = !!(document.fullscreenElement || document.webkitFullscreenElement) || this.isPseudoFullscreen;
      this.updateFsIcons(this.isFullscreen);
    };
    document.addEventListener('fullscreenchange', handleFsChange);
    document.addEventListener('webkitfullscreenchange', handleFsChange);
    this._cleanups.push(() => {
      document.removeEventListener('fullscreenchange', handleFsChange);
      document.removeEventListener('webkitfullscreenchange', handleFsChange);
    });
  }

  setupObservers() {
    // 1. Pause automatique hors écran
    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting && this.isPlaying) {
            this.wasPlayingBeforeHidden = true;
            this.pause();
          } else if (entry.isIntersecting && this.wasPlayingBeforeHidden) {
            this.wasPlayingBeforeHidden = false;
            this.play();
          }
        });
      }, { threshold: 0.25 });

      observer.observe(this.container);
      this._cleanups.push(() => observer.disconnect());
    }

    // 2. Pause quand l'onglet passe en arrière-plan
    const handleVisibility = () => {
      if (document.hidden && this.isPlaying) {
        this.wasPlayingBeforeHidden = true;
        this.pause();
      } else if (!document.hidden && this.wasPlayingBeforeHidden) {
        this.wasPlayingBeforeHidden = false;
        this.play();
      }
    };
    document.addEventListener('visibilitychange', handleVisibility);
    this._cleanups.push(() => document.removeEventListener('visibilitychange', handleVisibility));

    // 3. Pause quand le menu mobile s'ouvre
    const handleMobileMenu = () => {
      if (this.isPlaying) {
        this.wasPlayingBeforeHidden = true;
        this.pause();
      }
    };
    window.addEventListener('mobilemenu:open', handleMobileMenu);
    this._cleanups.push(() => window.removeEventListener('mobilemenu:open', handleMobileMenu));
  }

  showControlsTemporarily() {
    if (!this.isPlaying) return;
    this.dom.activeUi.style.opacity = '1';
    this.dom.activeUi.style.pointerEvents = 'auto';
    clearTimeout(this.controlsTimer);
    this.controlsTimer = setTimeout(() => {
      if (this.isPlaying) {
        this.dom.activeUi.style.opacity = '0';
        this.dom.activeUi.style.pointerEvents = 'none';
      }
    }, 2500);
  }

  startPlayback() {
    // Masquer la couverture et le bouton initial
    this.dom.idleOverlay.classList.add('opacity-0', 'pointer-events-none');
    this.dom.coverLayer.classList.add('opacity-0', 'pointer-events-none');
    this.dom.slidesContainer.classList.remove('hidden');

    this.dom.activeUi.classList.remove('opacity-0', 'pointer-events-none');
    this.dom.activeUi.classList.add('opacity-100', 'pointer-events-auto');

    // Mettre en pause les autres diaporamas actifs sur la page
    if (activePlayingSlideshow && activePlayingSlideshow !== this) {
      activePlayingSlideshow.pause();
    }
    activePlayingSlideshow = this;

    this.currentIndex = 0;
    this.displaySlide(0, false);
    this.play();
  }

  displaySlide(index, animated = true) {
    if (this.isDestroyed || !this.images[index]) return;
    const imgData = this.images[index];
    const src = this.getBestSource(imgData, 1600);

    // Mettre à jour l'arrière-plan flouté d'ambiance
    if (this.dom.ambientBg) {
      this.dom.ambientBg.style.backgroundImage = `url('${src}')`;
    }

    // Créer la structure HTML de l'image
    const focal = imgData.focalPoint || { x: 50, y: 50 };
    const kenBurnsVariants = ['ken-burns-1', 'ken-burns-2', 'ken-burns-3', 'ken-burns-4'];
    const kenClass = kenBurnsVariants[index % kenBurnsVariants.length];

    const slideHtml = `
      <div class="slideshow-slide-wrapper w-full h-full flex items-center justify-center relative">
        <picture>
          <source type="image/avif" srcset="${this.getSrcSet(imgData, 'avif')}" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px">
          <source type="image/webp" srcset="${this.getSrcSet(imgData, 'webp')}" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px">
          <img src="${src}" alt="${imgData.alt}" class="slideshow-slide-img w-full h-full object-cover ${kenClass}" style="object-position: ${focal.x}% ${focal.y}%; transform-origin: ${focal.x}% ${focal.y}%;" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1200px">
        </picture>
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-slate-950/30 pointer-events-none"></div>
      </div>
    `;

    if (!animated) {
      this.dom.slideActive.innerHTML = slideHtml;
      this.dom.slideActive.style.opacity = '1';
    } else {
      // Transition fondu croisé
      this.dom.slideIncoming.innerHTML = slideHtml;
      this.dom.slideIncoming.style.opacity = '0';
      this.dom.slideIncoming.style.transition = 'opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1)';
      
      // Forcer le reflow
      void this.dom.slideIncoming.offsetWidth;

      this.dom.slideIncoming.style.opacity = '1';

      setTimeout(() => {
        if (this.isDestroyed) return;
        this.dom.slideActive.innerHTML = slideHtml;
        this.dom.slideIncoming.innerHTML = '';
        this.dom.slideIncoming.style.opacity = '0';
        this.dom.slideIncoming.style.transition = 'none';
      }, 1250);
    }

    // Mettre à jour la légende
    if (imgData.title || imgData.caption) {
      this.dom.caption.classList.remove('hidden');
      this.dom.captionTitle.textContent = imgData.title || '';
      this.dom.captionText.textContent = imgData.caption || '';
    } else {
      this.dom.caption.classList.add('hidden');
    }

    // Mettre à jour le compteur
    if (this.dom.counter) {
      this.dom.counter.textContent = `${index + 1} / ${this.images.length}`;
    }

    // Mettre à jour la barre de progression segmentée
    this.updateProgressSegments(index);

    // Mettre à jour les miniatures
    const thumbBtns = this.container.querySelectorAll('.slideshow-thumb-btn');
    thumbBtns.forEach((tb, i) => {
      tb.classList.toggle('border-emerald-400', i === index);
      tb.classList.toggle('border-white/30', i !== index);
      tb.classList.toggle('opacity-100', i === index);
      tb.classList.toggle('opacity-60', i !== index);
    });

    // Précharger la diapositive suivante
    this.preloadNextSlide(index);
  }

  updateProgressSegments(currentIndex) {
    this.dom.progressSegments.forEach((seg, i) => {
      const fill = seg.querySelector('.slideshow-segment-fill');
      if (!fill) return;
      if (i < currentIndex) {
        fill.style.width = '100%';
      } else if (i > currentIndex) {
        fill.style.width = '0%';
      } else {
        fill.style.width = '0%';
      }
    });
  }

  preloadNextSlide(currentIndex) {
    const nextIdx = (currentIndex + 1) % this.images.length;
    const nextItem = this.images[nextIdx];
    if (nextItem) {
      const img = new Image();
      img.src = this.getBestSource(nextItem, 1600);
      if (typeof img.decode === 'function') {
        img.decode().catch(() => {});
      }
    }
  }

  play() {
    this.isPlaying = true;
    if (this.dom.iconPause && this.dom.iconPlay) {
      this.dom.iconPause.classList.remove('hidden');
      this.dom.iconPlay.classList.add('hidden');
    }
    if (this.dom.playBtn) {
      this.dom.playBtn.setAttribute('aria-label', 'Mettre en pause');
    }

    const currentImg = this.images[this.currentIndex];
    const duration = this.slideRemainingTime > 0 ? this.slideRemainingTime : (currentImg.duration || this.defaultDuration);
    this.slideRemainingTime = 0;

    this.slideStartTime = performance.now();
    this.startProgressAnimation(duration);

    clearTimeout(this.slideTimer);
    this.slideTimer = setTimeout(() => {
      if (!this.isPlaying || this.isDestroyed) return;
      if (this.currentIndex >= this.images.length - 1 && !this.loop) {
        this.pause();
        return;
      }
      this.next();
    }, duration);

    this.showControlsTemporarily();
  }

  pause() {
    this.isPlaying = false;
    if (this.dom.iconPause && this.dom.iconPlay) {
      this.dom.iconPause.classList.add('hidden');
      this.dom.iconPlay.classList.remove('hidden');
    }
    if (this.dom.playBtn) {
      this.dom.playBtn.setAttribute('aria-label', 'Reprendre la lecture');
    }

    clearTimeout(this.slideTimer);
    cancelAnimationFrame(this.progressRaf);

    // Calcul du temps restant pour reprise propre
    const elapsed = performance.now() - this.slideStartTime;
    const totalDuration = this.images[this.currentIndex]?.duration || this.defaultDuration;
    this.slideRemainingTime = Math.max(500, totalDuration - elapsed);

    // Maintenir les contrôles visibles en pause
    if (this.dom.activeUi) {
      this.dom.activeUi.style.opacity = '1';
      this.dom.activeUi.style.pointerEvents = 'auto';
    }
  }

  togglePlayPause() {
    if (this.isPlaying) this.pause();
    else this.play();
  }

  next() {
    const nextIdx = (this.currentIndex + 1) % this.images.length;
    this.goTo(nextIdx);
  }

  prev() {
    const prevIdx = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.goTo(prevIdx);
  }

  goTo(index) {
    if (index === this.currentIndex || index < 0 || index >= this.images.length) return;
    this.currentIndex = index;
    this.slideRemainingTime = 0;
    this.displaySlide(index, true);
    if (this.isPlaying) {
      this.play();
    }
  }

  startProgressAnimation(duration) {
    cancelAnimationFrame(this.progressRaf);
    const activeSegment = this.dom.progressSegments[this.currentIndex];
    const fill = activeSegment?.querySelector('.slideshow-segment-fill');
    if (!fill) return;

    const start = performance.now();
    const tick = (now) => {
      if (!this.isPlaying || this.isDestroyed) return;
      const progress = Math.min(1, (now - start) / duration);
      fill.style.width = `${(progress * 100).toFixed(1)}%`;
      if (progress < 1) {
        this.progressRaf = requestAnimationFrame(tick);
      }
    };
    this.progressRaf = requestAnimationFrame(tick);
  }

  toggleFullscreen() {
    const elem = this.dom.wrapper || this.container;
    if (!this.isFullscreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(() => this.enablePseudoFullscreen());
      } else if (elem.webkitRequestFullscreen) {
        try {
          elem.webkitRequestFullscreen();
        } catch (_) {
          this.enablePseudoFullscreen();
        }
      } else {
        this.enablePseudoFullscreen();
      }
    } else {
      if (this.isPseudoFullscreen) {
        this.disablePseudoFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => this.disablePseudoFullscreen());
      } else if (document.webkitExitFullscreen) {
        try {
          document.webkitExitFullscreen();
        } catch (_) {
          this.disablePseudoFullscreen();
        }
      } else {
        this.disablePseudoFullscreen();
      }
    }
  }

  enablePseudoFullscreen() {
    const elem = this.dom.wrapper || this.container;
    elem.classList.add('is-pseudo-fullscreen');
    document.body.classList.add('overflow-hidden');
    this.isFullscreen = true;
    this.isPseudoFullscreen = true;
    this.updateFsIcons(true);
  }

  disablePseudoFullscreen() {
    const elem = this.dom.wrapper || this.container;
    elem.classList.remove('is-pseudo-fullscreen');
    document.body.classList.remove('overflow-hidden');
    this.isFullscreen = false;
    this.isPseudoFullscreen = false;
    this.updateFsIcons(false);
  }

  updateFsIcons(active) {
    if (this.dom.iconFsEnter && this.dom.iconFsExit) {
      this.dom.iconFsEnter.classList.toggle('hidden', active);
      this.dom.iconFsExit.classList.toggle('hidden', !active);
    }
  }

  destroy() {
    this.isDestroyed = true;
    this.pause();
    clearTimeout(this.controlsTimer);
    clearTimeout(this.slideTimer);
    cancelAnimationFrame(this.progressRaf);

    if (activePlayingSlideshow === this) {
      activePlayingSlideshow = null;
    }

    if (this.isPseudoFullscreen) {
      this.disablePseudoFullscreen();
    } else if (this.isFullscreen) {
      try {
        if (document.exitFullscreen) document.exitFullscreen();
      } catch (_) {}
    }

    this._cleanups.forEach(fn => {
      try { fn(); } catch (_) {}
    });
    this._cleanups = [];

    if (this.container) {
      this.container.innerHTML = '';
    }
  }

  static initAll(root = document) {
    const elements = root.querySelectorAll('[data-slideshow]');
    const instances = [];
    elements.forEach(el => {
      instances.push(new PremiumSlideshow(el));
    });
    return instances;
  }
}
