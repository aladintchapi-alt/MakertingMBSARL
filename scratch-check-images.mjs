import fs from 'fs';

const content = fs.readFileSync('./assets/js/views/home.js', 'utf-8');
const regex = /<img\s+[^>]*src=["']([^"']+)["']/gi;
let match;
let i = 1;
while ((match = regex.exec(content)) !== null) {
  console.log(`${i++}: ${match[1]}`);
}
