const db = require("../models/db");

exports.theme = async (req, res, next) => {
  try {
    const { themes_name, price,themes_img, detail} = req.body;
    const theme = await db.themes.create({
      data : {
        themes_name,
        price,
        themes_img,
        detail,
      }
    });

    res.json({ msg: "Add-theme successful" , theme});
  } catch (err) {
    next(err);
    console.log(err)
  }
};

exports.deleteTheme = async (req, res, next)=>{
  const {themes_id} = req.params
  try {
    const rs = await db.themes.delete({where:{themes_id:+themes_id}})
    res.json({msg:'Delete Ok',result: rs})
  } catch (err) {
    next(err)
  }
}

exports.getthemes = async (req , res , next) => {
  try {
    const theme = await db.themes.findMany();
    res.json({theme});
  } catch (err) {
    next(err)
  }
};



