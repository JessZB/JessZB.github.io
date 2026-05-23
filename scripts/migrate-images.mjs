/**
 * Migration script: Convert PNG screenshots → organized WebP assets
 * 
 * Source: public/fotos de proyectos/{folder}/
 * Target: public/img/projects/{slug}/
 * 
 * - inicio.png → hero.webp
 * - other PNGs → 01-descriptive.webp, 02-descriptive.webp, etc.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

// --- Configuration ---

const SOURCE_DIR = path.join(root, 'public', 'fotos de proyectos');
const TARGET_DIR = path.join(root, 'public', 'img', 'projects');
const IDENTITY_PATH = path.join(root, 'src', 'data', 'identity.json');

// Hard-coded mapping: source folder name → project slug
const FOLDER_TO_SLUG = {
  'Sysadmin-tools': 'sysadmin-tools',
  'yezzfolio': 'yezzfolio',
  'gide-app': 'gideapp',
  'sigob entorno': 'sigob',
  'sisupp': 'sisupp',
  'condominio-app': 'condominio-app',
  'matriculas-app': 'matriculas-app',
  'littlepigman-portafolio': 'littlepigman-portafolio',
};

// --- Helper Functions ---

/**
 * Generate a descriptive name from a messy filename.
 * Removes localhost/IP prefixes, port numbers, common prefixes.
 */
function makeDescriptiveName(filename) {
  let name = filename.replace(/\.png$/i, '');
  
  // Remove common prefixes: localhost, IP addresses, port numbers
  name = name.replace(/^(localhost|127\.0\.0\.1|192\.168\.\d+\.\d+)(_\d+)?[_-]?/i, '');
  name = name.replace(/^_\d+[_-]?/, '');
  
  // Remove common suffixes like (1), (2), etc.
  name = name.replace(/\s*\(\d+\)\s*$/i, '');
  
  // Clean up: replace underscores/hyphens with hyphens, lowercase
  name = name.replace(/[_\s]+/g, '-').toLowerCase();
  
  // Remove trailing/leading hyphens
  name = name.replace(/^-+|-+$/g, '');
  
  return name || 'screenshot';
}

/**
 * Convert a PNG file to WebP using sharp.
 */
async function convertToWebP(inputPath, outputPath, quality = 75) {
  await sharp(inputPath)
    .webp({ quality, effort: 6 })
    .toFile(outputPath);
  
  const original = fs.statSync(inputPath).size;
  const converted = fs.statSync(outputPath).size;
  const reduction = ((1 - converted / original) * 100).toFixed(1);
  
  return { original, converted, reduction };
}

// --- Main Migration ---

async function migrate() {
  console.log('🚀 Starting image migration...\n');
  
  // Read identity.json
  const identity = JSON.parse(fs.readFileSync(IDENTITY_PATH, 'utf-8'));
  
  // Create target directory
  fs.mkdirSync(TARGET_DIR, { recursive: true });
  
  const results = [];
  
  for (const [folderName, slug] of Object.entries(FOLDER_TO_SLUG)) {
    const sourcePath = path.join(SOURCE_DIR, folderName);
    const targetPath = path.join(TARGET_DIR, slug);
    
    if (!fs.existsSync(sourcePath)) {
      console.log(`⚠️  Source folder not found: ${folderName}`);
      continue;
    }
    
    console.log(`📁 Processing: ${folderName} → ${slug}`);
    
    // Create target directory
    fs.mkdirSync(targetPath, { recursive: true });
    
    // Get all PNG files
    const files = fs.readdirSync(sourcePath).filter(f => f.toLowerCase().endsWith('.png'));
    
    if (files.length === 0) {
      console.log(`   No PNG files found in ${folderName}`);
      continue;
    }
    
    const imagePaths = [];
    let galleryIndex = 1;
    
    // Sort files: inicio.png first, then alphabetically
    files.sort((a, b) => {
      if (a.toLowerCase() === 'inicio.png') return -1;
      if (b.toLowerCase() === 'inicio.png') return 1;
      return a.localeCompare(b);
    });
    
    for (const file of files) {
      const inputPath = path.join(sourcePath, file);
      let outputPath;
      let label;
      
      if (file.toLowerCase() === 'inicio.png') {
        // Hero image
        outputPath = path.join(targetPath, 'hero.webp');
        label = 'hero';
      } else {
        // Gallery image
        const descriptive = makeDescriptiveName(file);
        const num = String(galleryIndex).padStart(2, '0');
        const filename = `${num}-${descriptive}.webp`;
        outputPath = path.join(targetPath, filename);
        label = filename;
        galleryIndex++;
      }
      
      const quality = file.toLowerCase() === 'inicio.png' ? 80 : 75;
      const stats = await convertToWebP(inputPath, outputPath, quality);
      
      console.log(`   ✅ ${file} → ${label} (${stats.reduction}% smaller)`);
      
      // Add to image paths array
      imagePaths.push(`/img/projects/${slug}/${path.basename(outputPath)}`);
    }
    
    results.push({ slug, imageCount: imagePaths.length, imagePaths });
    
    // Update identity.json
    const project = identity.projects.find(p => p.slug === slug);
    if (project) {
      project.images = imagePaths;
      console.log(`   📝 Updated identity.json for ${slug} (${imagePaths.length} images)`);
    } else {
      console.log(`   ⚠️  Project not found in identity.json: ${slug}`);
    }
    
    console.log();
  }
  
  // Write updated identity.json
  fs.writeFileSync(IDENTITY_PATH, JSON.stringify(identity, null, 2) + '\n', 'utf-8');
  console.log('💾 identity.json saved\n');
  
  // Summary
  console.log('📊 Migration Summary:');
  console.log('─'.repeat(50));
  for (const r of results) {
    console.log(`   ${r.slug}: ${r.imageCount} images`);
  }
  console.log('─'.repeat(50));
  console.log(`   Total: ${results.reduce((sum, r) => sum + r.imageCount, 0)} images converted`);
  console.log('\n✅ Migration complete! Original files preserved in "public/fotos de proyectos/"');
}

migrate().catch(err => {
  console.error('❌ Migration failed:', err);
  process.exit(1);
});
