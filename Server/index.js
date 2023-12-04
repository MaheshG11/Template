const express=require('express')
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const display=require('./routes/display.js')
const User=require('./routes/user.js')
const cors=require('cors')
const app=express()
dotenv.config()

const connect = () => {
    mongoose
      .connect(process.env.MONGO)
      .then(() => {
        console.log("Connected to DB");
      })
      .catch((err) => {
        throw err;
      });
  };
app.use(express.json())
app.use(cors())
app.use("/display", display);
app.use('/User',User)
  

app.listen(process.env.PORT,()=>{
    connect()
    console.log("connected to http://localhost:"+process.env.PORT)
})