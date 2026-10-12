/**
 * MULTI BUSINESS SARL - DOM & Event Safety Utilities
 * Protection absolue contre les TypeError sur target.closest()
 * Support universel : Document, Window, Text Nodes, SVG, Canvas, Shadow DOM, null
 */

/**
 * Extrait l'élément DOM Element cible d'un événement en toute sécurité
 * @param {Event|any} e
 * @returns {Element|null}
 */
export function getEventElement(e) {
  if (!e) return null;

  let target = null;

  // 1. Priorité au Shadow DOM via composedPath
  if (typeof e.composedPath === 'function') {
    try {
      const path = e.composedPath();
      if (Array.isArray(path) && path.length > 0) {
        target = path[0];
      }
    } catch (_) {
      target = null;
    }
  }

  // 2. Repli sur e.target
  if (!target) {
    target = e.target;
  }
  if (!target) return null;

  // 3. Cas des nœuds texte (Node.TEXT_NODE = 3) : remonter au parentElement
  if (target.nodeType === 3 && target.parentElement) {
    target = target.parentElement;
  }

  // 4. Vérification stricte : doit être un Element (nodeType === 1) avec la méthode closest
  if (target.nodeType !== 1 || typeof target.closest !== 'function') {
    return null;
  }

  return target;
}

/**
 * Recherche le sélecteur le plus proche à partir d'un événement sans risque d'exception
 * @param {Event|any} e
 * @param {string} selector
 * @returns {Element|null}
 */
export function closestFromEvent(e, selector) {
  if (!selector) return null;
  const el = getEventElement(e);
  if (!el || typeof el.closest !== 'function') return null;

  try {
    return el.closest(selector);
  } catch (_) {
    return null;
  }
}
