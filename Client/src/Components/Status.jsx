import { Routes, Route, Link } from "react-router-dom";

export const LoggedIn = () =>{
    
    return <div>
        <h1>You Have Logged In</h1>
        <h1><button> <Link to ='/loggedOut'>Logout</Link></button></h1>
        </div>
}
export const LoggedOut = () =>{
    
    return <div>
        <h1>You Have Logged Out</h1>
        <h1>Press <Link to ='/'>This</Link> To go to the HomePage</h1>
        </div>
}



