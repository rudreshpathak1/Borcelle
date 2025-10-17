const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'duqwpptvw',       // your cloud name (keep inside quotes)
  api_key: '462469174381513',    // your API key (keep inside quotes)
  api_secret: 'KiSTZSCMKImesOl-n_1Ja5adtdQ'  // your API secret (keep inside quotes)
});

module.exports = cloudinary;