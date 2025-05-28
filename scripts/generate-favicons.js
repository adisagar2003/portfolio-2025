const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = {
  'favicon.ico': [16, 32],
  'apple-icon.png': [180],
  'android-chrome-192x192.png': [192],
  'android-chrome-512x512.png': [512]
};

async function generateFavicons() {
  const svgBuffer = fs.readFileSync(path.join(__dirname, '../public/icon.svg'));
  
  for (const [filename, dimensions] of Object.entries(sizes)) {
    for (const size of dimensions) {
      await sharp(svgBuffer)
        .resize(size, size)
        .toFile(path.join(__dirname, '../public', filename));
    }
  }
}

generateFavicons().catch(console.error); 