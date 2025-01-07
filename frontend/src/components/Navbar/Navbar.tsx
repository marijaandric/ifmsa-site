import { SetStateAction, useState } from 'react';
import './NavBar.css';
import logo from "../../assets/images/logo.png";
import menuIcons from "../../assets/icons/menu.svg"
import closeIcon from "../../assets/icons/close.svg"

const NavBar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("srpski");

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLanguageChange = (e: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedLanguage(e.target.value);
  };

  return (
    <>
      <nav className="navbar">
        <img src={logo} alt="Logo" />
        <div className='navbar-content'>
          <div className="navbar-links">
            <input type="text" placeholder="Pretraži..." className="search-input" />
            <div className="language-dropdown">
              <select value={selectedLanguage} onChange={handleLanguageChange} className="language-select">
                <option value="srpski">Srpski</option>
                <option value="engleski">Engleski</option>
              </select>
            </div>
          </div>
          <div className="sidebar-toggle" onClick={toggleSidebar}>
            <img src={menuIcons} className='icon'></img>
          </div>
        </div>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <div className="sidebar-close icon" onClick={toggleSidebar}>
          <img src={closeIcon} className="icon-close" alt="close" />
        </div>
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
