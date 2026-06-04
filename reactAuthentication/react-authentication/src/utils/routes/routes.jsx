import React from "react";
import ProtectedRoutes from "../protectedRoutes/protectedRoutes";
import {Route,Routes} from 'react-router-dom';
import Home from "../../pages/home/home";
import About from "../../pages/about/about";
import Contact from "../../pages/contact/contact";
import SignUp from "../../pages/signup/signup";
import Login from "../../pages/login/login";
const AppRoutes = ()=>{
    return(
        <Routes>
            {/* public routes */}
            <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        {/* protectedRoutes */}
<Route element={<ProtectedRoutes/>}>
 <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>

</Route>
        {/* <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/> */}
        
    </Routes>
    )
}
export default AppRoutes;