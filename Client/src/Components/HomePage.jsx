import { Routes, Route, Link } from "react-router-dom";
import { Login } from "./Login";
import { Register } from "./Register";

export const HomePage = () =>{
    
    return <div>
        <h1>HOME PAGE</h1>
        <button> <Link to ='/register'>Register</Link></button>
        <button> <Link to ='/login'>Login</Link></button>
        </div>
}


