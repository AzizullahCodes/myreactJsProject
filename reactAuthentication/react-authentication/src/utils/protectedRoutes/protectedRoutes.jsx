import React from "react";
import { Navigate,Outlet } from "react-router-dom";
const ProtectedRoutes = ()=>{
    const isUserAvailable = JSON.parse(localStorage.getItem('user')||true);

    return(
        isUserAvailable?<Outlet/> : <Navigate to='/login' replace/>
    )
}
export default ProtectedRoutes;