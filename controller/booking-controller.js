const db = require("../models/db");

exports.createbooking = async (req, res, next) => {
  const { username, booking_date, wedding_venue, users_id } = req.body;
  try {
    const datetime = new Date(booking_date);
    const { themes_id } = req.body;
    const booking = await db.booking.create({
      data: {
        
        themes: {
            connect: {
              themes_id: Number(themes_id),
            }
        },
        users : {
          connect: {
            user_id: +users_id,
          }
        },
        username,
        booking_date: datetime,
        wedding_venue,
        status : "pending",
      },
    });

    res.json({ msg: "successful", booking });
    console.log(datetime);
  } catch (err) {
    next(err);
    console.log(err);
  }
};

exports.getbooking = async (req, res, next) => {
  try {
    const booking = await db.booking.findMany();
    res.json({ booking });
  } catch (err) {
    next(err);
  }
};


exports.deletebooking = async (req, res, next)=>{
  const {booking_id} = req.params
  try {
    const rs = await db.booking.delete({where:{booking_id:+booking_id}})
    res.json({msg:'Delete Ok',result: rs})
  } catch (err) {
    next(err)
  }
}


exports.editbooking = async (req,res ,next) => {
  const { booking_id} = req.params;
  const { 
      themes_id,
      username,
      booking_date,
      wedding_venue,
      status,
      users_id,
  

    author,
  } = req.body;
  try {
    const rs = await db.booking.update({
      data: { themes_id,
        username,
        booking_date,
        wedding_venue,
        status,
        users_id
      },
      where: { booking_id : Number(booking_id)},
    })
    res.json({ img : "update!" , result : rs});
  } catch (err) {
    next(err);
  }
}




