const express = require('express')
const router = express.Router()
const adminController = require('../controller/admin-controller')
const themeController = require('../controller/theme-controller')
const authenticate = require('../middlewares/authenticate')


router.get("/users", adminController.getUsers)
router.get("/theme", authenticate,  themeController.getthemes)
router.post("/theme", authenticate,themeController.theme)

router.delete("/deleteProduct/:themes_id" , authenticate ,themeController.deleteTheme )
router.delete("/deleteUser/:user_id" , authenticate , adminController.deleteUser)


router.patch('/updatethemes/:themes_id' , adminController.editthemes)


module.exports = router