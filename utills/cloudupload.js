const cloudinary = require("../config/cloudinary");

const clounUpload = async (path) =>  {
    const res = await cloudinary.uploader.upload(path);
    return res.secure_url;
};

module.exports = clounUpload;