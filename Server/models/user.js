const { Timestamp } = require('mongodb')
const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema = new Schema({
    name: {
        type:String,
        required : true
    },
    userName : {
        type :String,
        required:true,
        unique : true
    },
    email:{
        type : String,
        required : true
    },
    password :{
        type :String,
        required : true
    },
    dateOfBirth:{
        type : String,
        required : true 
    },
    IMG :{
        type : String
    }


},{Timestamp:true})


const User=mongoose.model('User',userSchema);

module.exports= User 