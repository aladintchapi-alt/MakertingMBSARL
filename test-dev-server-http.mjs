import http from 'http';
import { spawn } from 'child_process';

const PORT = 3333;
process.env.PORT = PORT;

console.log('--- Test du serveur local dev-server.mjs via requêtes réelles ---');

const serverProc = spawn('node', ['dev-server.mjs'], {
  env: { ...process.env, PORT: `${PORT}` },
  stdio: 'pipe'
});

await new Promise((r) => setTimeout(r, 1200));

async function fetchUrl(path) {
  return new Promise((resolve, reject) => {
    http.get(`http://localhost:${PORT}${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', reject);
  });
}

try {
  // Test 1: Root /
  const r1 = await fetchUrl('/');
  console.log(`Test 1 [GET /] : Status ${r1.status}, HTML? ${r1.body.includes('<!DOCTYPE html>')}`);

  // Test 2: Virtual SPA route /gestion-immobiliere
  const r2 = await fetchUrl('/gestion-immobiliere');
  console.log(`Test 2 [GET /gestion-immobiliere] : Status ${r2.status}, Fallback HTML? ${r2.body.includes('<!DOCTYPE html>')}`);

  // Test 3: Trailing slash /contact/
  const r3 = await fetchUrl('/contact/');
  console.log(`Test 3 [GET /contact/] : Status ${r3.status}, Fallback HTML? ${r3.body.includes('<!DOCTYPE html>')}`);

  // Test 4: Real asset /assets/css/output.css
  const r4 = await fetchUrl('/assets/css/output.css');
  console.log(`Test 4 [GET /assets/css/output.css] : Status ${r4.status}, Content-Type: ${r4.headers['content-type']}`);

  // Test 5: Real logo /assets/images/logo-transparent.png
  const r5 = await fetchUrl('/assets/images/logo-transparent.png');
  console.log(`Test 5 [GET /assets/images/logo-transparent.png] : Status ${r5.status}, Content-Type: ${r5.headers['content-type']}`);

  // Test 6: Missing asset /assets/images/non-existent.jpg -> MUST BE 404, NOT index.html!
  const r6 = await fetchUrl('/assets/images/non-existent.jpg');
  console.log(`Test 6 [GET /assets/images/non-existent.jpg] : Status ${r6.status}, Not HTML? ${!r6.body.includes('<!DOCTYPE html>')}`);

  const allPassed = r1.status === 200 && r2.status === 200 && r3.status === 200 && r4.status === 200 && r5.status === 200 && r6.status === 404 && !r6.body.includes('<!DOCTYPE html>');
  if (allPassed) {
    console.log('\n✨ [DEV SERVER HTTP VERIFIED] Toutes les requêtes HTTP et le fallback SPA fonctionnent parfaitement !');
  } else {
    console.error('\n❌ Échec de vérification du serveur');
    process.exit(1);
  }
} finally {
  serverProc.kill();
}
