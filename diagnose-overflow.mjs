import fs from 'fs';
import path from 'path';

const patterns = [
  { name: '100vw / w-screen', regex: /(100vw|w-screen)/g },
  { name: 'Negative margin (-mx- / -mr- / -ml-)', regex: /(-mx-|-mr-|-ml-)/g },
  { name: 'Large fixed width (w-[...px])', regex: /w-\[(\d{3,})px\]/g },
  { name: 'Large min-width (min-w-[...px])', regex: /min-w-\[(\d{3,})px\]/g },
  { name: 'Long email / phone without break-word', regex: /(contacts?@multibusiness\.cm|\+237\s*\d{3}\s*\d{2}\s*\d{2}\s*\d{2})/g }
];

const results = [];

function scanFile(filePath) {
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
      }
    }
  });
}

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.git', 'dist'].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (/\.(html|js|css)$/i.test(entry.name)) scanFile(full);
  }
}

walk(process.cwd());
console.log(`Scan terminé : ${results.length} éléments potentiels identifiés.`);
results.forEach(r => console.log(`[${r.type}] ${r.file}:${r.line} -> ${r.snippet.substring(0, 90)}`));
fs.writeFileSync('overflow-suspects.json', JSON.stringify(results, null, 2));
