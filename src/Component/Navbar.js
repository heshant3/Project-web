import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../logo.svg";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="NavbarItems">
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
