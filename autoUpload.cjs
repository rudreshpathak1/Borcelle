const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const cloudinary = require('./Backend/cloudinaryConfig.cjs');

const folder = path.join(__dirname, 'upload');
let uploadedImages = [];
const TARGET_SIZE = 250 * 1024; // 250KB target size

// compress function
async function compressToTarget(inputPath, outputPath) {
  let quality = 80;
  let buffer = await sharp(inputPath).jpeg({ quality }).toBuffer();

  while (buffer.length > TARGET_SIZE && quality > 10) {
    quality -= 5;
    buffer = await sharp(inputPath).jpeg({ quality }).toBuffer();
  }

  await sharp(buffer).toFile(outputPath);
}

// main process
fs.readdir(folder, async (err, files) => {
  if (err) return console.error(err);

  for (const file of files) {
    const inputPath = path.join(folder, file);
    const compressedPath = path.join(folder, 'compressed-' + file);

    await compressToTarget(inputPath, compressedPath);

    const result = await cloudinary.uploader.upload(compressedPath, { folder: 'foodItems' });
    console.log('✅ Uploaded:', result.secure_url);

    uploadedImages.push({ name: file, url: result.secure_url });
  }

  fs.writeFileSync('uploadedImages.json', JSON.stringify(uploadedImages, null, 2));
  console.log('🎉 All done! Links saved in uploadedImages.json');
});
