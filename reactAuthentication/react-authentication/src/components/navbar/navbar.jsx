// import React from "react";
// import { Link } from "react-router-dom";
// const Navbar = ()=>{
//     return(
//         <div>
//             <ul>
//                 <li><Link to='/'>Home</Link></li>
//                 <li><Link to='/about'>About</Link></li>
//                 <li><Link to='/contact'>Contact</Link></li>
//             </ul>
//         </div>
//     )
// }
// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>AuthApp</h2>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="auth-buttons">
        <Link to="/login" className="login-btn">
          Login
        </Link>

        <Link to="/signup" className="signup-btn">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;