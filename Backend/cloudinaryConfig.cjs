const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'duqwpptvw',       // your cloud name (keep inside quotes)
  api_key: '225581943128318',    // your API key (keep inside quotes)
  api_secret: 'GPBsj6VNb1TzxT5_QDd5YVjq46E'  // your API secret (keep inside quotes)
});

module.exports = cloudinary;