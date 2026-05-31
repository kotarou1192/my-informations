import sharp from 'sharp';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const res = await fetch('https://github.com/kotarou1192.png?size=400');
const avatarBuf = Buffer.from(await res.arrayBuffer());
const avatarB64 = avatarBuf.toString('base64');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="1200" height="630">
  <defs>
    <clipPath id="avatar-clip">
      <circle cx="260" cy="315" r="155"/>
    </clipPath>
  </defs>
  <rect width="1200" height="630" fill="#0d1117"/>
  <image xlink:href="data:image/png;base64,${avatarB64}" x="105" y="160" width="310" height="310" clip-path="url(#avatar-clip)"/>
  <text x="490" y="290" font-family="'Helvetica Neue', Arial, sans-serif" font-size="72" font-weight="bold" fill="white">kotarou1192</text>
  <text x="490" y="375" font-family="'Helvetica Neue', Arial, sans-serif" font-size="34" fill="#8b949e">info.kotarou1192.com</text>
</svg>`;

await sharp(Buffer.from(svg))
  .png()
  .toFile(resolve(__dirname, '../dist/ogp.png'));

console.log('OGP image generated: dist/ogp.png');
