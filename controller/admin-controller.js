const db = require("../models/db");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await db.user.findMany();
    res.json({ users });
    next() ;
  } catch (err) {
    next(err);
  }
}

exports.deleteUser = async (req, res, next)=>{
  const {user_id} = req.params
  try {
    const rs = await db.user.delete({where:{user_id:+user_id}})
    res.json({msg:'Delete Ok',result: rs})
  } catch (err) {
    next(err)
  }
}

exports.editthemes = async (req,res ,next) => {
  const { themes_id} = req.params;
  const {
    themes_name,
    price,
    themes_img,

    author,
  } = req.body;
  try {
    const rs = await db.themes.update({
      data: {themes_name,price,themes_img},
      where: { themes_id : Number(themes_id)},
    })
    res.json({ img : "update!" , result : rs});
  } catch (err) {
    next(err);
  }
}



// exports.createBookings = async (req, res , next ) => {
//   const {username , wedding_venue , booking_date , booking_time} = req.body;
//   try {

//   }
// }