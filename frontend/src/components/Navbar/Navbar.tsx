import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="flex-row">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="/">Home</a>
          <a href="/about">About us</a>
          <a href="/services">Exchange</a>
          <a href="/contact">News</a>
          <a href="/contact">Partners</a>
          <a href="/contact">Q&A</a>
          <a href="/contact">IFMSA Journal</a>
          <div className="loginBtn">
            <button>Login</button>
          </div>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
