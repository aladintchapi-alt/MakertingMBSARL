/**
 * MULTI BUSINESS SARL - Central Logger & Production Console Guard
 * Mode silencieux par défaut en production (zéro console.log/info/debug).
 * Activation explicite via URL ?debug=1 ou localStorage.getItem('mb_debug') === 'true'.
 * Déduplication des messages et coupe-circuit de débit pour garder DevTools 100% fluide.
 */

class CentralLogger {
  constructor() {
    this._recentLogs = new Map(); // msg -> timestamp
    this._rateWindow = 1000; // 1s
    this._maxLogsPerSec = 10;
    this._logsInWindow = 0;
    this._windowStart = Date.now();
  }

  isDebug() {
    try {
      if (typeof window === 'undefined') return false;
      if (window.__DEBUG__ === true) return true;
      if (window.location && window.location.search && window.location.search.includes('debug=1')) return true;
      if (window.localStorage && window.localStorage.getItem('mb_debug') === 'true') return true;
    } catch (_) {}
    return false;
  }

  _shouldLog(key) {
    const now = Date.now();

    // Réinitialiser la fenêtre de débit
    if (now - this._windowStart > this._rateWindow) {
      this._windowStart = now;
      this._logsInWindow = 0;
    }

    if (this._logsInWindow >= this._maxLogsPerSec) {
      return false; // Coupe-circuit de débit
    }

    // Déduplication : ignorer si identique dans les 1.5 dernières secondes
    const lastSeen = this._recentLogs.get(key) || 0;
    if (now - lastSeen < 1500) {
      return false;
    }

    this._recentLogs.set(key, now);
    this._logsInWindow++;

    // Nettoyage périodique de la map de déduplication
    if (this._recentLogs.size > 200) {
      for (const [k, time] of this._recentLogs.entries()) {
        if (now - time > 5000) this._recentLogs.delete(k);
      }
    }

    return true;
  }

  debug(...args) {
    if (!this.isDebug()) return;
    const key = args.map(a => String(a)).join(' ');
    if (this._shouldLog(key)) {
      console.debug(...args);
    }
  }

  log(...args) {
    if (!this.isDebug()) return;
    const key = args.map(a => String(a)).join(' ');
    if (this._shouldLog(key)) {
      console.log(...args);
    }
  }

  info(...args) {
    if (!this.isDebug()) return;
    const key = args.map(a => String(a)).join(' ');
    if (this._shouldLog(key)) {
      console.info(...args);
    }
  }

  warn(...args) {
    const key = args.map(a => String(a)).join(' ');
    if (this.isDebug() && this._shouldLog(key)) {
      console.warn(...args);
    }
  }

  error(...args) {
    const key = args.map(a => String(a)).join(' ');
    if (this._shouldLog(key)) {
      console.error(...args);
    }
  }
}

export const logger = new CentralLogger();

/**
 * Installe un filtre de production sur la console globale pour éliminer les logs résiduels
 */
export function installProductionConsoleGuard() {
  if (typeof window === 'undefined') return;

  const isDebug = logger.isDebug();
  if (isDebug) return; // Mode debug actif, on conserve les logs pour l'ingénieur

  // En production : rendre console.log, console.info et console.debug silencieux
  const noop = () => {};
  window.console.debug = noop;
  window.console.info = noop;
  window.console.log = noop;

  // Neutraliser les AbortErrors légitimes lors des changements rapides de page / destruction de carte
  window.addEventListener('unhandledrejection', (event) => {
    const reason = event?.reason;
    const msg = String(reason?.message || reason || '');
    if (reason?.name === 'AbortError' || msg.includes('AbortError') || msg.includes('signal is aborted')) {
      event.preventDefault();
      if (typeof event.stopImmediatePropagation === 'function') {
        event.stopImmediatePropagation();
      }
    }
  }, true);

  window.addEventListener('error', (event) => {
    const msg = String(event?.message || '');
    if (msg.includes('AbortError') || msg.includes('signal is aborted')) {
      event.preventDefault();
      if (typeof event.stopImmediatePropagation === 'function') {
        event.stopImmediatePropagation();
      }
    }
  }, true);

  // Dédupliquer et filtrer les avertissements bénins connus
  const originalWarn = window.console.warn;
  window.console.warn = (...args) => {
    const msg = args.map(a => String(a)).join(' ');
    if (
      msg.includes('ResizeObserver loop completed') ||
      msg.includes('ResizeObserver loop limit') ||
      msg.includes('AbortError') ||
      msg.includes('signal is aborted') ||
      msg.includes('[Scene3D]') ||
      msg.includes('Contexte WebGL perdu') ||
      msg.includes('build/three')
    ) {
      return;
    }
    if (logger._shouldLog(msg)) {
      originalWarn.apply(window.console, args);
    }
  };
}
