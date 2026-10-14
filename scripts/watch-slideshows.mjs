/**
 * MULTI BUSINESS SARL - Watcher de dossiers de Diaporamas
 * Exécuté automatiquement avec `npm run dev`
 */

import fs from 'fs';
import path from 'path';
import { syncSlideshows } from './sync-slideshows.mjs';

const WATCH_DIRS = [
  path.join(process.cwd(), 'assets', 'images', 'gestionlocative'),
  path.join(process.cwd(), 'assets', 'images', 'slideshows')
];

console.log('👀 Surveillance active des dossiers de diaporamas...');

let debounceTimer = null;
function triggerSync() {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    console.log('\n🔄 Modification détectée dans les images de diaporama. Synchronisation...');
    syncSlideshows().catch(console.error);
  }, 1000);
}

WATCH_DIRS.forEach(dir => {
  if (fs.existsSync(dir)) {
    fs.watch(dir, { recursive: true }, (eventType, filename) => {
      if (filename && !filename.includes('slideshows-cache') && !filename.startsWith('.')) {
        triggerSync();
      }
    });
  }
});
