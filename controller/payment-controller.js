const db = require("../models/db");
const clounUpload = require("../utills/cloudupload");

exports.payment = async (req, res, next) => {
  try {
    const { payment_method, payment_amount ,order_number} = req.body;


    const imagePromise = req.files.map((file) => {
      return clounUpload(file.path);
    });
    const imageUrArray = await Promise.all(imagePromise); 

    const payment = await db.payment.create({
      data : {
        payment_method,
        payment_amount,
        payment_status : "pending",
        order_number,
        img : imageUrArray[0],
      },

    });

    res.json({ msg: "payment successful" , payment});
  } catch (err) {
    next(err);
    console.log(err)
  }
};


exports.getpayment = async (req , res , next) => {
  try {
    const payment = await db.payment.findMany();
    res.json({payment});
  } catch (err) {
    next(err)
  }
};



