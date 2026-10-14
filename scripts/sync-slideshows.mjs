/**
 * MULTI BUSINESS SARL - Synchroniseur Automatisé de Diaporamas Hyper Premium
 * Commande : npm run slides:sync
 * 
 * - Analyse assets/data/slideshows.config.json et assets/images/slideshows/
 * - Conserve l'ordre et les métadonnées existantes dans assets/data/slideshows.json
 * - Ajoute en FIN de liste toute nouvelle image détectée
 * - Retire proprement les images supprimées du disque
 * - Génère les variantes responsives WebP et AVIF (640, 1024, 1600, 2400 px)
 * - Calcule les dimensions, la couleur dominante et la miniature LQIP base64
 * - Signale les images < 1600 px ou > 3 Mo
 */

import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const ROOT_DIR = process.cwd();
const DATA_DIR = path.join(ROOT_DIR, 'assets', 'data');
const SLIDESHOWS_JSON_PATH = path.join(DATA_DIR, 'slideshows.json');
const CONFIG_JSON_PATH = path.join(DATA_DIR, 'slideshows.config.json');
const CACHE_DIR = path.join(ROOT_DIR, 'assets', 'images', 'slideshows-cache');
const AUTO_DISCOVERY_DIR = path.join(ROOT_DIR, 'assets', 'images', 'slideshows');

const SUPPORTED_EXTS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif']);
const TARGET_WIDTHS = [640, 1024, 1600, 2400];

// Métadonnées éditoriales officielles de départ pour les 4 images de Gestion Locative
const INITIAL_GESTION_LOCATIVE_METADATA = {
  'Gemini_Generated_Image_vrq7m3vrq7m3vrq7.jpeg': {
    title: 'Accueil & Réception Professionnelle',
    caption: 'Nos locaux au Cameroun : un espace moderne dédié à la gestion locative et aux affaires.',
    alt: 'Accueil et réception des bureaux de MULTI BUSINESS SARL à Douala',
    focalPoint: { x: 50, y: 45 },
    duration: 5000
  },
  'Gemini_Generated_Image_cv6cy4cv6cy4cv6c.jpeg': {
    title: 'Pôles Opérationnels & Direction',
    caption: 'Gestion rigoureuse et centralisée : fiscalité, baux OHADA et suivi patrimonial.',
    alt: 'Bureaux administratifs et direction de MULTI BUSINESS SARL',
    focalPoint: { x: 55, y: 50 },
    duration: 5000
  },
  'multibusiness2.jpeg': {
    title: 'Siège Social — Façade & Infrastructure',
    caption: 'Immeuble Express Union, 1er niveau à Dakar (Douala) avec parking sécurisé.',
    alt: 'Façade extérieure et parking du siège MULTI BUSINESS SARL',
    focalPoint: { x: 50, y: 40 },
    duration: 5000
  },
  'multibusiness1.jpeg': {
    title: 'Ancrage Stratégique au Cameroun',
    caption: 'Une équipe de proximité à vos côtés pour valoriser et sécuriser votre patrimoine.',
    alt: 'Vue d\'ensemble extérieure des locaux de MULTI BUSINESS SARL',
    focalPoint: { x: 50, y: 45 },
    duration: 5000
  }
};

const DEFAULT_CONFIG = {
  slideshows: {
    'gestion-locative': {
      title: 'Présentation Institutionnelle MULTI BUSINESS SARL',
      folder: 'assets/images/gestionlocative',
      aspectRatio: '16/9',
      defaultDuration: 5000,
      transitionDuration: 1200,
      loop: true,
      kenBurns: true,
      priorityFiles: [
        'Gemini_Generated_Image_vrq7m3vrq7m3vrq7.jpeg',
        'Gemini_Generated_Image_cv6cy4cv6cy4cv6c.jpeg',
        'multibusiness2.jpeg',
        'multibusiness1.jpeg'
      ],
      ignorePatterns: ['^pexels-', '^equipe\\.']
    }
  }
};

async function rgbToHex(r, g, b) {
  return '#' + [r, g, b].map(x => {
    const hex = Math.round(x).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }).join('').toUpperCase();
}

async function processImage(slideshowId, filePath, filename, existingData = null, initialMeta = null) {
  const fileStat = fs.statSync(filePath);
  const buffer = fs.readFileSync(filePath);
  const metadata = await sharp(buffer).metadata();

  const width = metadata.width || 0;
  const height = metadata.height || 0;

  // Diagnostics de qualité et poids
  const warnings = [];
  if (width < 1600) {
    warnings.push(`Résolution native ${width}x${height} < 1600px recommandés.`);
  }
  if (fileStat.size > 3 * 1024 * 1024) {
    warnings.push(`Poids élevé (${(fileStat.size / (1024 * 1024)).toFixed(2)} Mo).`);
  }

  // Calcul couleur dominante
  let dominantColor = '#0B1B2B';
  try {
    const stats = await sharp(buffer).stats();
    if (stats.dominant) {
      dominantColor = await rgbToHex(stats.dominant.r, stats.dominant.g, stats.dominant.b);
    }
  } catch (_) {}

  // Génération LQIP (micro miniature floue base64)
  let lqip = '';
  try {
    const lqipBuffer = await sharp(buffer)
      .resize(24, 24, { fit: 'inside' })
      .jpeg({ quality: 40 })
      .toBuffer();
    lqip = `data:image/jpeg;base64,${lqipBuffer.toString('base64')}`;
  } catch (_) {}

  // Dossier de cache pour les variantes responsives
  const imgSlug = filename.replace(/[^a-zA-Z0-9_-]/g, '_');
  const imgCacheDir = path.join(CACHE_DIR, slideshowId, imgSlug);
  if (!fs.existsSync(imgCacheDir)) {
    fs.mkdirSync(imgCacheDir, { recursive: true });
  }

  // Génération des variantes WebP et AVIF
  const variants = {
    webp: {},
    avif: {}
  };

  for (const w of TARGET_WIDTHS) {
    const actualWidth = Math.min(w, width);
    const webpName = `${actualWidth}w.webp`;
    const avifName = `${actualWidth}w.avif`;
    const webpPath = path.join(imgCacheDir, webpName);
    const avifPath = path.join(imgCacheDir, avifName);

    const relWebp = `assets/images/slideshows-cache/${slideshowId}/${imgSlug}/${webpName}`;
    const relAvif = `assets/images/slideshows-cache/${slideshowId}/${imgSlug}/${avifName}`;

    if (!fs.existsSync(webpPath) || fs.statSync(webpPath).mtimeMs < fileStat.mtimeMs) {
      await sharp(buffer)
        .resize(actualWidth, null, { withoutEnlargement: true })
        .webp({ quality: 84, effort: 4 })
        .toFile(webpPath);
    }
    variants.webp[`${actualWidth}w`] = relWebp;

    if (!fs.existsSync(avifPath) || fs.statSync(avifPath).mtimeMs < fileStat.mtimeMs) {
      await sharp(buffer)
        .resize(actualWidth, null, { withoutEnlargement: true })
        .avif({ quality: 75, effort: 4 })
        .toFile(avifPath);
    }
    variants.avif[`${actualWidth}w`] = relAvif;
  }

  // Métadonnées : priorité existante > initiale > par défaut
  return {
    file: filename,
    path: path.relative(ROOT_DIR, filePath).replace(/\\/g, '/'),
    alt: existingData?.alt || initialMeta?.alt || `Photo de la présentation ${slideshowId}`,
    title: existingData?.title || initialMeta?.title || '',
    caption: existingData?.caption || initialMeta?.caption || '',
    duration: existingData?.duration || initialMeta?.duration || 5000,
    focalPoint: existingData?.focalPoint || initialMeta?.focalPoint || { x: 50, y: 50 },
    dimensions: { width, height },
    fileSize: fileStat.size,
    dominantColor,
    lqip,
    variants,
    warnings
  };
}

export async function syncSlideshows() {
  console.log('========================================================================');
  console.log(' SYNCHRONISATION DES DIAPORAMAS HYPER PREMIUM (Node.js & Sharp)');
  console.log('========================================================================\n');

  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  // 1. Charger ou créer la configuration
  let config = DEFAULT_CONFIG;
  if (fs.existsSync(CONFIG_JSON_PATH)) {
    try {
      config = JSON.parse(fs.readFileSync(CONFIG_JSON_PATH, 'utf8'));
    } catch (_) {}
  } else {
    fs.writeFileSync(CONFIG_JSON_PATH, JSON.stringify(DEFAULT_CONFIG, null, 2), 'utf8');
  }

  // Découverte automatique des dossiers dans assets/images/slideshows/
  if (fs.existsSync(AUTO_DISCOVERY_DIR)) {
    const subdirs = fs.readdirSync(AUTO_DISCOVERY_DIR, { withFileTypes: true });
    subdirs.forEach(dirent => {
      if (dirent.isDirectory()) {
        const id = dirent.name;
        if (!config.slideshows[id]) {
          console.log(`✨ Nouveau diaporama découvert automatiquement dans : assets/images/slideshows/${id}`);
          config.slideshows[id] = {
            title: `Diaporama ${id}`,
            folder: `assets/images/slideshows/${id}`,
            aspectRatio: '16/9',
            defaultDuration: 5000,
            transitionDuration: 1200,
            loop: true,
            kenBurns: true
          };
        }
      }
    });
  }

  // 2. Charger les données actuelles
  let existingSlideshows = {};
  if (fs.existsSync(SLIDESHOWS_JSON_PATH)) {
    try {
      existingSlideshows = JSON.parse(fs.readFileSync(SLIDESHOWS_JSON_PATH, 'utf8'));
    } catch (_) {}
  }

  const resultData = {};

  for (const [slideshowId, cfg] of Object.entries(config.slideshows || {})) {
    console.log(`\n📁 Traitement du diaporama [${slideshowId}]...`);
    const folderPath = path.join(ROOT_DIR, cfg.folder);
    if (!fs.existsSync(folderPath)) {
      console.warn(`  ⚠️ Dossier source introuvable : ${cfg.folder}`);
      continue;
    }

    // Filtrer les fichiers du dossier
    const ignoreRegexes = (cfg.ignorePatterns || []).map(p => new RegExp(p, 'i'));
    const diskFiles = fs.readdirSync(folderPath).filter(f => {
      const ext = path.extname(f).toLowerCase();
      if (!SUPPORTED_EXTS.has(ext)) return false;
      for (const rx of ignoreRegexes) {
        if (rx.test(f)) return false;
      }
      return true;
    });

    const diskSet = new Set(diskFiles);
    const existingList = existingSlideshows[slideshowId]?.images || [];

    // Nettoyer les entrées supprimées
    const cleanedExisting = [];
    existingList.forEach(item => {
      if (diskSet.has(item.file)) {
        cleanedExisting.push(item);
      } else {
        console.log(`  🗑️ Image retirée car supprimée du disque : ${item.file}`);
      }
    });

    // Ordonnancement :
    let orderedFiles = [];
    if (cleanedExisting.length === 0) {
      // Premier scan
      if (cfg.priorityFiles && cfg.priorityFiles.length > 0) {
        cfg.priorityFiles.forEach(pf => {
          if (diskSet.has(pf)) orderedFiles.push(pf);
        });
      }
      diskFiles.forEach(df => {
        if (!orderedFiles.includes(df)) orderedFiles.push(df);
      });
    } else {
      // Conserver l'ordre existant
      orderedFiles = cleanedExisting.map(it => it.file);

      // Ajouter en FIN de liste les nouvelles images détectées
      const newFiles = diskFiles.filter(f => !orderedFiles.includes(f));
      if (newFiles.length > 0) {
        newFiles.sort((a, b) => {
          const sA = fs.statSync(path.join(folderPath, a));
          const sB = fs.statSync(path.join(folderPath, b));
          return sA.birthtimeMs - sB.birthtimeMs || a.localeCompare(b);
        });
        newFiles.forEach(nf => {
          console.log(`  ✨ Nouvelle image détectée ajoutée en FIN : ${nf}`);
          orderedFiles.push(nf);
        });
      }
    }

    // Traitement de chaque image
    const processedImages = [];
    for (let i = 0; i < orderedFiles.length; i++) {
      const filename = orderedFiles[i];
      const filePath = path.join(folderPath, filename);
      const prevData = cleanedExisting.find(it => it.file === filename);
      const initialMeta = slideshowId === 'gestion-locative' ? INITIAL_GESTION_LOCATIVE_METADATA[filename] : null;

      process.stdout.write(`  ⚙️ Traitement (${i + 1}/${orderedFiles.length}) : ${filename}... `);
      try {
        const item = await processImage(slideshowId, filePath, filename, prevData, initialMeta);
        if (!item.title) {
          item.title = `Vue ${i + 1} • Présentation officielle`;
          item.alt = `Photo ${i + 1} de la présentation ${cfg.title || slideshowId}`;
        }
        processedImages.push(item);
        console.log('✅ OK');
        if (item.warnings && item.warnings.length > 0) {
          item.warnings.forEach(w => console.log(`     ⚠️ ${w}`));
        }
      } catch (err) {
        console.error(`❌ Erreur: ${err.message}`);
      }
    }

    resultData[slideshowId] = {
      id: slideshowId,
      title: cfg.title || 'Diaporama MULTI BUSINESS SARL',
      folder: cfg.folder,
      options: {
        defaultDuration: cfg.defaultDuration || 5000,
        transitionDuration: cfg.transitionDuration || 1200,
        loop: cfg.loop !== false,
        aspectRatio: cfg.aspectRatio || '16/9',
        kenBurns: cfg.kenBurns !== false
      },
      updatedAt: new Date().toISOString(),
      images: processedImages
    };
  }

  fs.writeFileSync(SLIDESHOWS_JSON_PATH, JSON.stringify(resultData, null, 2), 'utf8');
  console.log(`\n🎉 Synchronisation terminée avec succès ! Données enregistrées dans : assets/data/slideshows.json`);
  return resultData;
}

if (process.argv[1] && process.argv[1].endsWith('sync-slideshows.mjs')) {
  syncSlideshows().catch(err => {
    console.error('Fatal error during slideshow sync:', err);
    process.exit(1);
  });
}
