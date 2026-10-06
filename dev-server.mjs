/**
 * MULTI BUSINESS SARL - High Performance Local Dev Server with SPA Fallback
 * - Requests without file extensions serve index.html (HTML5 History API fallback)
 * - Requests with file extensions serve the actual asset or a real 404 (NEVER index.html for missing assets!)
 * - Correct MIME types and CORS headers
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = process.env.PORT || 3000;
const ROOT = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.webmanifest': 'application/manifest+json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.otf': 'font/otf',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
  // Normalize URL and remove query string
  const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  let pathname = decodeURIComponent(parsedUrl.pathname);

  // Support subfolder access /MakertingMBSARL/ as well as root /
  if (pathname.toLowerCase().startsWith('/makertingmbsarl/')) {
    pathname = pathname.slice('/makertingmbsarl'.length);
  } else if (pathname.toLowerCase() === '/makertingmbsarl') {
    pathname = '/';
  }

  // Prevent directory traversal
  const safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(ROOT, safePath);

  const ext = path.extname(filePath).toLowerCase();

  // If path has no extension or is root, check if it's a real directory with index.html or an SPA route
  if (!ext || ext === '') {
    // Check if real file exists (e.g. without extension)
    if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
      serveFile(filePath, res);
      return;
    }

    // Check if directory has an index.html
    const dirIndex = path.join(filePath, 'index.html');
    if (fs.existsSync(dirIndex)) {
      serveFile(dirIndex, res);
      return;
    }

    // SPA Fallback: serve root index.html
    const spaIndex = path.join(ROOT, 'index.html');
    if (fs.existsSync(spaIndex)) {
      serveFile(spaIndex, res);
      return;
    }

    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('index.html introuvable pour le fallback SPA');
    return;
  }

  // Request has an explicit extension (.css, .js, .png, etc.)
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    serveFile(filePath, res);
  } else {
    // Missing asset: return REAL 404 (NEVER index.html for missing assets!)
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end(`404 Not Found: L'asset ${pathname} n'existe pas.`);
  }
});

function serveFile(filePath, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end(`Erreur serveur interne : ${err.message}`);
      return;
    }

    const headers = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*'
    };

    if (ext === '.html') {
      headers['Cache-Control'] = 'no-cache, no-store, must-revalidate';
    } else {
      headers['Cache-Control'] = 'public, max-age=86400';
    }

    res.writeHead(200, headers);
    res.end(data);
  });
}

server.listen(PORT, () => {
  console.log(`\n============================================================`);
  console.log(`🚀 MULTI BUSINESS SARL — Serveur Local avec Fallback SPA`);
  console.log(`📡 URL Locale : http://localhost:${PORT}/`);
  console.log(`🔄 Fallback HTML5 History API : Actif sur toutes les routes`);
  console.log(`🛡️  Protection Assets : 404 réel sur les fichiers manquants`);
  console.log(`============================================================\n`);
});
