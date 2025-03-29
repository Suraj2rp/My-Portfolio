import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = ({ darkMode, setDarkMode }) => {
  const location = useLocation(); // Get the current path

  return (
    <nav className="navbar">
      {/* Logo */}
      <h1 className="logo">My Portfolio</h1>

      {/* Navigation Links */}
      <ul className="nav-links">
        <li>
          <Link to="/" className={location.pathname === "/" ? "active" : ""}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className={location.pathname === "/about" ? "active" : ""}>
            About
          </Link>
        </li>
        <li>
          <Link to="/projects" className={location.pathname === "/projects" ? "active" : ""}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/contact" className={location.pathname === "/contact" ? "active" : ""}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Dark Mode Toggle Button */}
      <button 
        className="dark-mode-toggle" 
        onClick={() => setDarkMode(!darkMode)}
        aria-label="Toggle Dark Mode"
      >
        {darkMode ? "☀️   L" : "🌙   D"}
      </button>
    </nav>
  );
};

export default Navbar;
