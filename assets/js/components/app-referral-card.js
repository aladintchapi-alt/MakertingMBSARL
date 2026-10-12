/**
 * MULTI BUSINESS SARL - Composant Carte de Référencement vers l'Application
 * Carte en verre dépoli clair, 100% cohérente avec le Hero (aucun fond vert foncé dominant)
 * Piloté dynamiquement par CONFIG.app.links (source de vérité unique)
 */

import { CONFIG } from '../config.js';
import { icon, iconBadge } from '../icons.js';

/**
 * Rendu du bloc complet de référencement vers l'application
 * Utilisable dans le Hero, la section application, ou toute vue
 */
export function renderAppReferralCard(options = {}) {
  const links = CONFIG.app.links || [];
  const primaryAction = links[0]; // Recherche d'un local (mise en avant visuelle)
  const secondaryLinks = links.slice(1, 5); // Gestion locative, Création, Fiscalité, Dédouanement
  const appHomeUrl = CONFIG.app.url || 'https://apps.multibusiness.cm/locataire';

  return `
    <div class="relative mx-auto w-full max-w-md lg:max-w-[440px] bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-slate-200/90 p-5 sm:p-6 overflow-hidden transition-all duration-300" id="hero-app-referral-card">
      
      <!-- Décoration lumineuse subtile (sans vert foncé) -->
      <div class="absolute -top-24 -right-24 w-48 h-48 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div class="absolute -bottom-20 -left-20 w-40 h-40 bg-slate-100/60 rounded-full blur-2xl pointer-events-none" aria-hidden="true"></div>

      <!-- EN-TÊTE : Logo MB détouré + Titre + Domaine apps.multibusiness.cm discret (sans pastille "En direct") -->
      <div class="relative flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
        <div class="flex items-center gap-3">
          <img src="./assets/images/logo-transparent.png" 
               srcset="./assets/images/logo-64x64.png 1x, ./assets/images/logo-128x128.png 2x" 
               width="44" height="44" 
               alt="Logo MULTI BUSINESS SARL" 
               class="w-11 h-11 object-contain rounded-2xl bg-white shadow-xs border border-slate-100 p-1 flex-shrink-0" />
          <div class="text-left">
            <h3 class="font-display font-extrabold text-sm sm:text-base text-marine-900 leading-tight">App Multi Business</h3>
            <p class="text-[11px] text-slate-500 font-medium">Vos services en ligne, en un clic</p>
          </div>
        </div>
        <div class="text-right flex-shrink-0">
          <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] font-mono font-semibold border border-slate-200/70" title="Plateforme officielle">
            ${CONFIG.app.domain}
          </span>
        </div>
      </div>

      <!-- CORPS : Liste de lignes-liens premium avec pastille d'icône, question en gras, sous-texte et flèche animée -->
      <div class="relative space-y-2 mb-5 text-left" role="list" aria-label="Accès directs aux services de l'application">
        
        <!-- Action Principale Mise en Avant : Recherche d'un local -->
        ${renderPrimaryReferralRow(primaryAction)}

        <!-- 4 Lignes de services clés -->
        ${secondaryLinks.map((link, idx) => renderReferralRow(link, idx)).join('')}

        <!-- Ligne dédiée à la Localisation : Visite / Fiche Google Maps -->
        ${renderLocationReferralRow()}

      </div>

      <!-- PIED : Bouton d'accès principal vers l'accueil de l'application (/locataire) -->
      <div class="relative pt-1 border-t border-slate-100">
        <a href="${appHomeUrl}" 
           target="_blank" 
           rel="noopener noreferrer" 
           class="w-full btn-primary !py-3.5 text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all group"
           aria-label="Ouvrir l'application Multi Business, s'ouvre dans un nouvel onglet">
          <span>Ouvrir l'application</span>
          <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
          <svg class="w-3.5 h-3.5 text-marine-950/70 opacity-80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </a>
      </div>

    </div>
  `;
}

/**
 * Ligne d'action principale mise en avant (Recherche d'un local)
 */
function renderPrimaryReferralRow(link) {
  if (!link) return '';
  return `
    <a href="${link.url}" 
       target="_blank" 
       rel="noopener noreferrer" 
       role="listitem"
       class="group referral-link-row flex items-center justify-between p-3 sm:p-3.5 rounded-2xl bg-gradient-to-r from-emerald-50/90 to-teal-50/70 border-2 border-emerald-300 hover:border-emerald-500 hover:shadow-md transition-all duration-200 min-h-[58px]"
       aria-label="${link.ariaLabel || (link.question + ', s\'ouvre dans un nouvel onglet')}">
      <div class="flex items-center gap-3 min-w-0 pr-2">
        <div class="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs flex-shrink-0 group-hover:scale-105 transition-transform" aria-hidden="true">
          ${icon(link.icon, { class: 'w-5 h-5 text-white' })}
        </div>
        <div class="min-w-0">
          <div class="flex items-center gap-1.5 flex-wrap">
            <h4 class="font-bold text-xs sm:text-sm text-marine-900 group-hover:text-emerald-900 transition-colors leading-snug">${link.question}</h4>
            <span class="px-1.5 py-0.2 rounded text-[9px] font-black uppercase bg-emerald-600 text-white leading-tight">Priorité</span>
          </div>
          <p class="text-[11px] text-slate-600 truncate mt-0.5">${link.subtext}</p>
        </div>
      </div>
      <div class="flex items-center gap-1.5 flex-shrink-0 text-emerald-800 font-bold text-xs">
        <span class="hidden sm:inline text-[11px]">${link.cta}</span>
        <svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/>
        </svg>
      </div>
    </a>
  `;
}

/**
 * Ligne secondaire standard (Gestion locative, Création, Fiscalité, Dédouanement)
 */
function renderReferralRow(link, index) {
  if (!link) return '';

  const colorStyles = {
    mint: {
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-200 group-hover:bg-emerald-100 group-hover:text-emerald-800',
      hoverBorder: 'hover:border-emerald-400 hover:bg-emerald-50/40',
      arrow: 'text-emerald-700'
    },
    amber: {
      badge: 'bg-amber-50 text-amber-800 border-amber-200 group-hover:bg-amber-100 group-hover:text-amber-900',
      hoverBorder: 'hover:border-amber-400 hover:bg-amber-50/40',
      arrow: 'text-amber-700'
    },
    indigo: {
      badge: 'bg-indigo-50 text-indigo-700 border-indigo-200 group-hover:bg-indigo-100 group-hover:text-indigo-800',
      hoverBorder: 'hover:border-indigo-400 hover:bg-indigo-50/40',
      arrow: 'text-indigo-700'
    },
    ocean: {
      badge: 'bg-sky-50 text-sky-700 border-sky-200 group-hover:bg-sky-100 group-hover:text-sky-800',
      hoverBorder: 'hover:border-sky-400 hover:bg-sky-50/40',
      arrow: 'text-sky-700'
    },
    lime: {
      badge: 'bg-lime-50 text-emerald-900 border-lime-300 group-hover:bg-lime-100',
      hoverBorder: 'hover:border-lime-400 hover:bg-lime-50/40',
      arrow: 'text-emerald-800'
    }
  };

  const scheme = colorStyles[link.color] || colorStyles.mint;

  return `
    <a href="${link.url}" 
       target="_blank" 
       rel="noopener noreferrer" 
       role="listitem"
       class="group referral-link-row flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-white border border-slate-200/90 ${scheme.hoverBorder} hover:shadow-xs transition-all duration-200 min-h-[56px]"
       aria-label="${link.ariaLabel || (link.question + ', s\'ouvre dans un nouvel onglet')}">
      <div class="flex items-center gap-3 min-w-0 pr-2">
        <div class="w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 ${scheme.badge}" aria-hidden="true">
          ${icon(link.icon, { class: 'w-4 h-4' })}
        </div>
        <div class="min-w-0">
          <h4 class="font-bold text-xs text-marine-900 group-hover:text-slate-950 transition-colors leading-tight truncate">${link.question}</h4>
          <p class="text-[11px] text-slate-500 truncate mt-0.5">${link.subtext}</p>
        </div>
      </div>
      <div class="flex items-center gap-1 flex-shrink-0 ${scheme.arrow} text-xs font-semibold">
        <span class="hidden md:inline text-[10px] text-slate-500 group-hover:text-slate-800 transition-colors">${link.cta}</span>
        <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </div>
    </a>
  `;
}

/**
 * Ligne dédiée à la Localisation Google Maps (Visite physique)
 */
function renderLocationReferralRow() {
  const mapsUrl = CONFIG.company?.mapsUrl || CONFIG.contact?.headquarters?.mapUrl || 'https://www.google.com/maps/place/multibusiness/@4.0309087,9.7352805,837m/data=!3m1!1e3!4m6!3m5!1s0x4ba9e03f6fac8b13:0x36fdaca035b5355b!8m2!3d4.0300055!4d9.7370284!16s%2Fg%2F11tp937fdl!5m1!1e2?entry=ttu&g_ep=EgoyMDI2MTAwNy4wIKXMDSoASAFQAw%3D%3D';

  return `
    <a href="${mapsUrl}" 
       target="_blank" 
       rel="noopener noreferrer" 
       role="listitem"
       class="group referral-link-row flex items-center justify-between p-2.5 sm:p-3 rounded-2xl bg-slate-50/80 border border-slate-200/90 hover:border-emerald-400 hover:bg-emerald-50/30 hover:shadow-xs transition-all duration-200 min-h-[56px]"
       aria-label="Voir MULTI BUSINESS SARL sur Google Maps (s'ouvre dans un nouvel onglet)">
      <div class="flex items-center gap-3 min-w-0 pr-2">
        <div class="w-9 h-9 rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105 group-hover:bg-emerald-100" aria-hidden="true">
          ${icon('map-pin', { class: 'w-4 h-4 text-emerald-700' })}
        </div>
        <div class="min-w-0">
          <div class="flex items-center gap-1.5 flex-wrap">
            <h4 class="font-bold text-xs text-marine-900 group-hover:text-emerald-950 transition-colors leading-tight truncate">Vous cherchez notre adresse ?</h4>
            <span class="px-1.5 py-0.2 rounded text-[9px] font-bold uppercase bg-slate-200 text-slate-700 leading-tight">Siège</span>
          </div>
          <p class="text-[11px] text-slate-500 truncate mt-0.5">Retrouvez-nous à Dakar (Douala), près du commissariat du 8ᵉ arrondissement, Immeuble Express Union.</p>
        </div>
      </div>
      <div class="flex items-center gap-1 flex-shrink-0 text-emerald-800 text-xs font-semibold">
        <span class="hidden md:inline text-[10px] text-emerald-700 group-hover:text-emerald-900 transition-colors">Voir sur Google Maps</span>
        <svg class="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
        </svg>
      </div>
    </a>
  `;
}
