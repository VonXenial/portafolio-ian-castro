
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const imagesDir = path.join(process.cwd(), 'public', 'images');

async function optimizeImages() {
    const files = fs.readdirSync(imagesDir);

    for (const file of files) {
        const filePath = path.join(imagesDir, file);
        const ext = path.extname(file).toLowerCase();

        // Skip if not an image or already optimized (we'll just check if it's not a common format)
        if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;

        const tempPath = path.join(imagesDir, `temp_${file}`);

        console.log(`Optimizing ${file}...`);

        try {
            const metadata = await sharp(filePath).metadata();

            // Resize if width is larger than 1200px
            let pipeline = sharp(filePath);
            if (metadata.width && metadata.width > 1200) {
                pipeline = pipeline.resize({ width: 1200 });
            }

            if (ext === '.png') {
                await pipeline.png({ quality: 80, compressionLevel: 9 }).toFile(tempPath);
            } else if (ext === '.jpg' || ext === '.jpeg') {
                await pipeline.jpeg({ quality: 80, mozjpeg: true }).toFile(tempPath);
            } else if (ext === '.webp') {
                await pipeline.webp({ quality: 80 }).toFile(tempPath);
            }

            // Replace original with optimized
            fs.unlinkSync(filePath);
            fs.renameSync(tempPath, filePath);
            console.log(`✅ Optimized ${file}`);
        } catch (error) {
            console.error(`❌ Error optimizing ${file}:`, error);
            if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
        }
    }
}

optimizeImages();
