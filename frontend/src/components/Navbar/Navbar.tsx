import { useState } from 'react';
import './NavBar.css';
import logo from "../../assets/images/logo.png"

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="Logo" />
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Partneri</a>
          <a href="#">O nama</a>
          <a href="#">Novosti</a>
          <a href="#">Razmena</a>
        </div>
        <div className="menu-icon" onClick={toggleSidebar}>
          <button>Click</button>
        </div>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <a href="#">Home</a>
        <a href="#">Partneri</a>
        <a href="#">O nama</a>
        <a href="#">Novosti</a>
        <a href="#">Razmena</a>
      </div>
    </>
  );
};

export default NavBar;
