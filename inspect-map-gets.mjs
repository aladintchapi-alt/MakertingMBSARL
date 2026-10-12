import fs from 'fs';

const style = JSON.parse(fs.readFileSync('./assets/data/map-style-liberty.json', 'utf8'));
const matches = [];

for (const l of style.layers) {
  const str = JSON.stringify(l);
  const regex = /\["get","([^"]+)"\]/g;
  let m;
  while ((m = regex.exec(str)) !== null) {
    matches.push({ layer: l.id, type: l.type, prop: m[1] });
  }
}

console.log('Total matches:', matches.length);
const props = [...new Set(matches.map(m => m.prop))];
console.log('Properties:', props);

for (const p of props) {
  const inLayers = matches.filter(m => m.prop === p);
  console.log(`Prop ${p} used in:`, inLayers.map(x => `${x.layer} (${x.type})`));
}
