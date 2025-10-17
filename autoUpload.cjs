const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const cloudinary = require('./Backend/cloudinaryConfig.cjs'); // make sure this path is correct

const folder = path.join(__dirname, 'upload'); // your upload folder
const TARGET_SIZE = 250 * 1024; // 250KB target size
let uploadedImages = [];

// Compress image to target size
async function compressToTarget(inputPath, outputPath) {
  let quality = 80;
  let buffer = await sharp(inputPath).jpeg({ quality }).toBuffer();

  while (buffer.length > TARGET_SIZE && quality > 10) {
    quality -= 5;
    buffer = await sharp(inputPath).jpeg({ quality }).toBuffer();
  }

  await sharp(buffer).toFile(outputPath);
}

// Main function
fs.readdir(folder, async (err, files) => {
  if (err) return console.error('❌ Error reading folder:', err);
  if (!files.length) return console.log('⚠️ No files found in upload folder.');

  console.log(`📁 Found ${files.length} files. Starting upload...\n`);

  await Promise.all(
    files.map(async (file, index) => {
      try {
        const inputPath = path.join(folder, file);
        const compressedPath = path.join(folder, `compressed-${file}`);

        // Compress image
        await compressToTarget(inputPath, compressedPath);

        // Upload to Cloudinary with sequential ID
        const publicId = (index + 1).toString(); // 1,2,3...
        const result = await cloudinary.uploader.upload(compressedPath, {
          folder: 'foodItems',
          public_id: publicId,
        });

        console.log(`✅ Uploaded (${publicId}):`, result.secure_url);

        uploadedImages.push({
          id: publicId,
          name: file,
          url: result.secure_url,
        });

        // Delete compressed file after upload
        fs.unlinkSync(compressedPath);

      } catch (uploadErr) {
        console.error('❌ Upload failed for', file, uploadErr);
      }
    })
  );

  // Save all uploaded URLs to JSON
  fs.writeFileSync('uploadedImages.json', JSON.stringify(uploadedImages, null, 2));
  console.log('\n🎉 All done! Links saved in uploadedImages.json');
});
