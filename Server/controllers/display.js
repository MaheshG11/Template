

const display=(req,res,next)=>{
    res.send("Hahaha! it's done")
    next();
};
module.exports=display