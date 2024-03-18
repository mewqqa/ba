const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const authController = require('../controller/auth-controller')
const bookingController = require('../controller/booking-controller')
const paymentController = require('../controller/payment-controller')
const upload = require('../middlewares/upload')

router.post('/register' , authController.register)
router.post('/login' , authController.login)
router.get('/me' , authenticate , authController.getme)  


router.post('/booking' , authenticate , bookingController.createbooking)
router.get('/bookings' , bookingController.getbooking)

router.patch('/updatebooking/:booking_id' , bookingController.editbooking)
router.delete("/deletebooking/:booking_id" , authenticate , bookingController.deletebooking)

router.patch('/showbooking/:user_id' , bookingController.getbooking)

router.post('/payment' ,authenticate,  upload.array("image" , 1),paymentController.payment)
router.get('/payment' , paymentController.getpayment)




module.exports = router 