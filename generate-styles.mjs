import fs from 'fs';

const base = JSON.parse(fs.readFileSync('assets/data/map-style-liberty.json', 'utf8'));

// 1. Thème Nuit Sombre Hyper-Raffiné (Marine Profond & Menthe Lumineuse)
function createNightStyle(base) {
  const dark = JSON.parse(JSON.stringify(base));

  const C = {
    bg: '#0b1324',               // Fond nuit bleuté profond
    water: '#07101e',            // Eau marine sombre
    waterLine: '#0d233a',        // Contour eau
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
    text: '#f1f5f9',             // Texte blanc pur cassé (slate-100, contraste > 10:1)
    textHalo: '#070d18',         // Halo sombre profond
    adminBoundary: '#2563eb'     // Frontière administrative bleue discrète
  };

  dark.layers = dark.layers.map(layer => {
    const l = JSON.parse(JSON.stringify(layer));
    const type = l.type;
    const id = l.id || '';
    const sl = l['source-layer'] || '';
    l.paint = l.paint || {};

    if (type === 'background') {
      l.paint['background-color'] = C.bg;
    } else if (id.includes('natural_earth') || id.includes('ne2')) {
      l.layout = l.layout || {};
      l.layout.visibility = 'none'; // Pas de raster basse résolution en mode nuit
    } else if (sl === 'water') {
      if (l.paint['fill-color']) l.paint['fill-color'] = C.water;
      if (l.paint['fill-outline-color']) l.paint['fill-outline-color'] = C.waterLine;
    } else if (sl === 'waterway') {
      if (l.paint['line-color']) l.paint['line-color'] = C.waterLine;
    } else if (sl === 'park' || sl === 'landcover') {
      if (l.paint['fill-color']) l.paint['fill-color'] = C.park;
      if (l.paint['line-color']) l.paint['line-color'] = C.parkOutline;
    } else if (sl === 'landuse') {
      if (id.includes('residential')) {
        l.paint['fill-color'] = C.residential;
      } else if (id.includes('commercial') || id.includes('industrial')) {
        l.paint['fill-color'] = C.commercial;
      } else if (id.includes('cemetery') || id.includes('pitch') || id.includes('grass')) {
        l.paint['fill-color'] = C.pitchGrass;
      } else {
        l.paint['fill-color'] = C.residential;
      }
    } else if (sl === 'transportation') {
      if (id.includes('casing') || id.includes('bridge') && id.includes('casing')) {
        l.paint['line-color'] = C.casing;
      } else if (id.includes('motorway') || id.includes('trunk')) {
        l.paint['line-color'] = C.hwy;
      } else if (id.includes('primary')) {
        l.paint['line-color'] = C.primary;
      } else if (id.includes('secondary') || id.includes('tertiary')) {
        l.paint['line-color'] = C.secondary;
      } else if (id.includes('rail')) {
        l.paint['line-color'] = C.rail;
      } else {
        l.paint['line-color'] = C.minor;
      }
    } else if (sl === 'building') {
      if (type === 'fill') {
        l.paint['fill-color'] = C.building;
        l.paint['fill-outline-color'] = C.buildingOutline;
      } else if (type === 'fill-extrusion') {
        l.paint['fill-extrusion-color'] = C.building3d;
      }
    } else if (sl === 'boundary') {
      if (l.paint['line-color']) l.paint['line-color'] = C.adminBoundary;
      l.paint['line-opacity'] = 0.6;
    } else if (type === 'symbol') {
      l.paint['text-color'] = C.text;
      l.paint['text-halo-color'] = C.textHalo;
      l.paint['text-halo-width'] = 2.5;
      l.paint['text-halo-blur'] = 1;
      if (l.paint['icon-opacity']) l.paint['icon-opacity'] = 0.85;
    }
    return l;
  });

  return dark;
}

// 2. Thème Satellite Hybride (Imagerie Esri maxzoom: 19 + Surcouche Vectorielle Routes & Labels)
function createSatelliteHybridStyle(base) {
  const sat = JSON.parse(JSON.stringify(base));

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

  // Couche raster satellite
  newLayers.push({
    id: 'satellite-imagery',
    type: 'raster',
    source: 'esriSat',
    minzoom: 0,
    maxzoom: 22
  });

  // Conserver uniquement les routes et les labels
  for (const layer of sat.layers) {
    const type = layer.type;
    const sl = layer['source-layer'] || '';
    const id = layer.id || '';

    if (type === 'background' || id.includes('natural_earth') || sl === 'water' || sl === 'park' || sl === 'landcover' || sl === 'landuse' || sl === 'building') {
      continue;
    }

    const l = JSON.parse(JSON.stringify(layer));
    l.paint = l.paint || {};

    if (sl === 'transportation') {
      if (l.paint['line-color']) {
        l.paint['line-color'] = '#f8fafc';
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

const nightStyle = createNightStyle(base);
fs.writeFileSync('assets/data/map-style-night.json', JSON.stringify(nightStyle, null, 2));
console.log('Saved assets/data/map-style-night.json');

const satStyle = createSatelliteHybridStyle(base);
fs.writeFileSync('assets/data/map-style-satellite.json', JSON.stringify(satStyle, null, 2));
console.log('Saved assets/data/map-style-satellite.json');
