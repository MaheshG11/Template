const User = require('../models/user.js')


const register= async (req,res,next)=>{
    const { Name, UserName,Email, Password,DateOfBirth,iMG } = req.body;
    
    if (!Name || !Email || !Password || !DateOfBirth || !UserName) {

            res.status(400).send(req.body.Name);
          }
    else{
    let user= new User({
        name:Name,
        userName:UserName,
        email : Email,
        password:Password,
        dateOfBirth:DateOfBirth,
        IMG:iMG.length ? iMG:null

    })
    await user.save().then(response=>{
        res.json({
            message:'User Registered Successfully'
        })
    })
    .catch(error=>{
        res.json({
            message:'An error Occured\n'
        })
        console.log(error)
    })}
}
const update= async (req,res,next)=>{
    let userID=req.body.userID
    let user={ 
        name:req.body.name,
        userName:req.body.userName,
        email : req.body.email,
        password:req.body.password,
        dateOfBirth:req.body.dateOfBirth,
        IMG:req.body.IMG

    }
    user.findByIdAndUpdate(userID,{$set:user}).then(response=>{
        res.json({
            message:'User updated Successfully'
        })
    })
    .catch(error=>{
        res.json({
            message:'An error Occured\n'
        })
    })
}


const destroy = async (req,res,next)=>{
    let userID=req.body.userID
    
    user.findByIdAndRemove(userID).then(response=>{
        res.json({
            message:'User deleted Successfully'
        })
    })
    .catch(error=>{
        res.json({
            message:'An error Occured\n'
        })
    })
}

const numb = async(req,res,next)=>{
    res.send("Hahaha! it's done")
}
module.exports={register,update,destroy,numb}