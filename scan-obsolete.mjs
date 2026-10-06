import fs from 'fs';
import path from 'path';

const patterns = [
  { name: 'Numéro 694 811 715', regex: /694\s*811\s*715|694811715/i },
  { name: 'Rond-point CCC', regex: /Rond-point CCC/i },
  { name: 'Ancien Email contact@', regex: /contact@multibusiness\.cm/i },
  { name: 'Ancien NIU', regex: /M052014528174C/i },
  { name: 'Ancien RCCM', regex: /RC\/DLA\/2020\/B\/1842/i },
  { name: 'Téléphone factice +237690000000', regex: /\+237690000000/i }
];

const results = [];

function scanFile(filePath) {
  if (filePath.endsWith('.json') || filePath.includes('scan-obsolete') || filePath.includes('diagnose-overflow')) return;
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    for (const pat of patterns) {
      if (pat.regex.test(line)) {
        results.push({
          file: path.relative(process.cwd(), filePath).replace(/\\/g, '/'),
          line: idx + 1,
          type: pat.name,
          snippet: line.trim()
        });
        break;
      }
    }
  });
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.git', 'dist'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(html|js|mjs|css|md|xml|txt|webmanifest)$/i.test(entry.name)) scanFile(full);
  }
}

walk(process.cwd());
console.log(`Scan source : ${results.length} occurrences restantes.`);
results.forEach(r => console.log(`[${r.type}] ${r.file}:${r.line} -> ${r.snippet}`));
