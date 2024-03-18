const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: 'dtxxyaydo', 
    api_key: '464987729564756',
    api_secret: process.env.CLOUDINARY_SECRET,
});

module.exports = cloudinary;