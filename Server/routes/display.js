const express=require('express')
const router=express.Router()
const display=require('../controllers/display.js')


router.route('/').get(display)
module.exports=router