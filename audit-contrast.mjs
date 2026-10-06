/**
 * Script d'audit automatisé de contrastes et conformité WCAG AA / AAA
 * MULTI BUSINESS SARL
 */
import fs from 'fs';
import path from 'path';

// Calcul mathématique de la luminance relative selon WCAG 2.1
function getLuminance(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(c => c + c).join('');
  }
  const r = parseInt(hex.substring(0, 2), 16) / 255;
  const g = parseInt(hex.substring(2, 4), 16) / 255;
  const b = parseInt(hex.substring(4, 6), 16) / 255;

  const a = [r, g, b].map((v) => {
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });

  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

function getContrastRatio(hex1, hex2) {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

const colorTokens = [
  // Sur Surface Blanche (#FFFFFF)
  { name: 'Titre Marine Encre sur Fond Blanc', fg: '#0B1B2B', bg: '#FFFFFF', target: 4.5 },
  { name: 'Corps Texte Slate 700 sur Fond Blanc', fg: '#334155', bg: '#FFFFFF', target: 4.5 },
  { name: 'Texte Muted Slate 600 sur Fond Blanc', fg: '#475569', bg: '#FFFFFF', target: 4.5 },
  { name: 'Highlight Vert Émeraude 800 sur Fond Blanc', fg: '#065F46', bg: '#FFFFFF', target: 4.5 },
  { name: 'Accent Teal 800 sur Fond Blanc', fg: '#115E59', bg: '#FFFFFF', target: 4.5 },
  { name: 'Accent Indigo 800 sur Fond Blanc', fg: '#3730A3', bg: '#FFFFFF', target: 4.5 },
  { name: 'Accent Amber 900 sur Fond Blanc', fg: '#78350F', bg: '#FFFFFF', target: 4.5 },
  { name: 'Accent Ocean 800 sur Fond Blanc', fg: '#075985', bg: '#FFFFFF', target: 4.5 },

  // Sur Surface Ivoire Chaud (#FAF9F5 / #FBFBF9)
  { name: 'Titre Marine Encre sur Fond Ivoire', fg: '#0B1B2B', bg: '#FAF9F5', target: 4.5 },
  { name: 'Corps Texte Slate 700 sur Fond Ivoire', fg: '#334155', bg: '#FAF9F5', target: 4.5 },
  { name: 'Texte Muted Slate 600 sur Fond Ivoire', fg: '#475569', bg: '#FAF9F5', target: 4.5 },
  { name: 'Highlight Vert Émeraude sur Fond Ivoire', fg: '#065F46', bg: '#FAF9F5', target: 4.5 },

  // Sur Bouton Primaire Lime (#9AFF01)
  { name: 'Texte Marine 950 sur Bouton Lime 500', fg: '#060F18', bg: '#9AFF01', target: 4.5 },

  // Sur Surface Sombre Marine (#0B1B2B - Max 10%)
  { name: 'Titre Blanc sur Surface Marine', fg: '#FFFFFF', bg: '#0B1B2B', target: 4.5 },
  { name: 'Corps Slate 300 sur Surface Marine', fg: '#CBD5E1', bg: '#0B1B2B', target: 4.5 },
  { name: 'Accent Lime 400 sur Surface Marine', fg: '#9AFF01', bg: '#0B1B2B', target: 4.5 }
];

console.log('========================================================================');
console.log(' RAPPORT D\'AUDIT DES RATIOS DE CONTRASTE (WCAG 2.1 AA & AAA)');
console.log('========================================================================\n');

let violations = 0;

colorTokens.forEach(t => {
  const ratio = getContrastRatio(t.fg, t.bg);
  const ratioStr = ratio.toFixed(2) + ':1';
  const isAAA = ratio >= 7.0;
  const isAA = ratio >= 4.5;
  const status = isAAA ? '✅ PASS (WCAG AAA)' : (isAA ? '✅ PASS (WCAG AA)' : '❌ FAIL');
  
  if (!isAA) violations++;
  
  console.log(`${t.name.padEnd(48)} | ${t.fg} sur ${t.bg} | Ratio: ${ratioStr.padEnd(8)} | ${status}`);
});

console.log('\n========================================================================');
console.log(`RÉSULTAT TOTAL : ${violations} violation(s) détectée(s).`);
console.log('========================================================================');
