import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        <h2>AuthApp</h2>
      </div>

      {/* Hamburger */}
      <div
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </ul>

      {/* Auth Buttons */}
      <div className={`auth-buttons ${menuOpen ? "active" : ""}`}>
        <Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>
          Login
        </Link>

        <Link to="/signup" className="signup-btn" onClick={() => setMenuOpen(false)}>
          Sign Up
        </Link>
      </div>

    </nav>
  );
};

export default Navbar;