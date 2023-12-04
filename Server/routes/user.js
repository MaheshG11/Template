const express=require('express')
const router=express.Router()
const userController=require('../controllers/User.js')

router.post('/',userController.numb)
router.post('/delete',userController.destroy)
router.post('/register',userController.register)
router.post('/update',userController.update)

module.exports=router;