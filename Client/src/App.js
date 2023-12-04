
import { Register} from './Components/Register.jsx';
import {Login} from './Components/Login.jsx';
import {HomePage} from './Components/HomePage.jsx'
import {LoggedIn,LoggedOut} from './Components/Status.jsx'
import './App.css';
import { BrowserRouter,Routes, Route, Link} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage}></Route>
        <Route path="/register" Component={Register}/>
        <Route path="/login" Component={Login}/>
        <Route path="/loggedIn" Component={LoggedIn}/>
        <Route path="/loggedOut" Component={LoggedOut}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
