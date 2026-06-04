// import React from "react";
// import { Navigate,Outlet } from "react-router-dom";
// const ProtectedRoutes = ()=>{
//     var isUserAvailable = JSON.parse(localStorage.getItem('user')||false);
//     let getData = localStorage.getItem('user')
//     if(getData){
//         isUserAvailable = true;

//     }

//     return(
//         isUserAvailable?<Outlet/> : <Navigate to='/login' replace/>
//     )
// }
// export default ProtectedRoutes;

import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const user = localStorage.getItem("user");

  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;