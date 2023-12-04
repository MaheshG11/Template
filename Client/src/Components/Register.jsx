import { useState } from "react"
import { Link,useNavigate } from "react-router-dom";
import axios from 'axios'
export const Register = () =>{
    const [email,setEmail]=useState("");
    const [Password,setPassword]=useState("");
    const [name,setName]=useState("");
    var server="http://localhost:5000"
    const navigate = useNavigate()
        const  handleSubimt= async(e)=>{
        
            e.preventDefault();
            try {
              const res = await axios.post(server+"/register", { name,email,Password });
              navigate("/loggedIn")
              console.log(res.data)
            } catch (err) {
                console.log(err)
                navigate("/loggedIn")
            }
        
    }
  
    return <div>  
    <form class="form-inline" action="">
        <div class="form-group form-inline">
        <label  class="control-label col-sm-2"htmlFor ="Name">Name</label>
        <input type="Name" class="form-control" placeholder="Enter Your Name" id="Name" onChange={(e)=>{
            setName(e.target.value)
        }}/>
        </div>
        <div class="form-goup form-inline">
        <label   class="control-label col-sm-2" htmlFor =" Email">Email</label>
        <input type="email" class="form-control"  placeholder="Enter Your Email" id="email" onChange={(e)=>{
            setEmail(e.target.value)
        }}/>
        </div>

        <div class="form-group  form-inline">
        <label  class="control-label col-sm-2"htmlFor ="Password">Password</label>
        <input type="Password" class="form-control" placeholder="Enter Your Password" id="Password" onChange={(e)=>{
            setPassword(e.target.value)
        }}/> 
        </div>

        

        <button  class="btn btn-default" onClick={handleSubimt}>Register</button>

        </form>
        <h3>Already Have an account. <Link to="/login"> Sign In </Link></h3>

    
    </div>
}
  
  