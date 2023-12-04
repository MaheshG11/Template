import { useState } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

var server="http://localhost:5000"

export const Login = () =>{
    const navigate=useNavigate()
    const [email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const  handleSubimt= async(e)=>{
        
        e.preventDefault();
        try {
           
          const res = await axios.post(server+"/Login", {email,Password });
          navigate("/loggedIn")
          console.log(res.data)
        } catch (err) {
            console.log(err)
            navigate("/loggedIn")
        }
    
}
    return <>
    <form action="">
        <label htmlFor ="Email">Email</label>
        <input value={email} type="email" placeholder="Enter Your Email" id="email" onChange={(e)=>{
            setEmail(e.target.value)
        }} />
        <label htmlFor ="Password">Password</label>
        <input type="Password" value={Password} placeholder="Enter Your Password" id="Password" onChange={(e)=>{
            setPassword(e.target.value)
        }}/>
        
        <button type="submit" onClick={handleSubimt}>Login</button>
        <br></br>
        <h3>Do not Have an account? <Link to="/register">Register</Link></h3>
    </form>
    </>
}


