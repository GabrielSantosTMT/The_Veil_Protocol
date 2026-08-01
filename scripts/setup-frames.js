import fs from 'fs';
import path from 'path';

const srcDir = path.resolve('images');
const destDir = path.resolve('public/images/hero');

if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

if (fs.existsSync(srcDir)) {
  const files = fs.readdirSync(srcDir).filter(f => f.startsWith('ezgif-frame-'));
  console.log(`Found ${files.length} frames in ./images/`);
  
  files.forEach((file, index) => {
    const srcPath = path.join(srcDir, file);
    // Copy as frame-0001.jpg / png and frame-001.png
    const paddedIndexStr = String(index + 1).padStart(4, '0');
    const destPathJpg = path.join(destDir, `frame-${paddedIndexStr}.jpg`);
    const destPathPng = path.join(destDir, `frame-${paddedIndexStr}.png`);
    
    fs.copyFileSync(srcPath, destPathPng);
    fs.copyFileSync(srcPath, destPathJpg);
  });
  
  console.log(`Successfully copied ${files.length} frames to ${destDir}`);
} else {
  console.log('No source images directory found.');
}
