import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { Backdrop, Box, Grow, Modal } from "@mui/material";
import Login from "../Login/Login";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLoginClick = () => {
    setLoginModalOpen(true);
  };

  const handleCloseModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="flex-row">
        <div className="navbar-logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className={`navbar-links ${isOpen ? "active" : ""}`}>
          <a href="/">Home</a>
          <a href="/whoarewe">About us</a>
          <a href="/services">Exchange</a>
          <a href="/contact">News</a>
          <a href="/contact">Partners</a>
          <a href="/contact">Q&A</a>
          <a href="/contact">IFMSA Journal</a>
          <div className="loginBtn">
            <button onClick={handleLoginClick}>Login</button>{" "}
          </div>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <Modal
        open={loginModalOpen}
        onClose={handleCloseModal}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 300,
          },
        }}
      >
        <div className="modal-box">
          <Grow in={loginModalOpen} timeout={300}>
            <Box className="modal-content">
              <Login onSuccess={handleCloseModal} />
            </Box>
          </Grow>
        </div>
      </Modal>
    </nav>
  );
};

export default Navbar;
