import React, { Component } from "react";
import logo from "../logo.svg";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <nav className="NavbarItems">
        <div className="menu-icon" onClick={this.toggleMenu}>
          <i className={this.state.isOpen ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <a href="#" className="logo">
          <img src={logo} alt="" />
        </a>
        <ul className={this.state.isOpen ? "nav-menu active" : "nav-menu"}>
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
}

export default Navbar;
