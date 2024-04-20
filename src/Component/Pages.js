import React from "react";
import "./Css/Page.css";
import Home from "./Home";
import Navbar from "./Navbar.js";
import About from "./About.js";
import Project from "./Project.js";
import Contact from "./Contact.js";
import Galary from "./Galary.js";

export default function Pages() {
  return (
    <div className="home-container">
      <Navbar />
      <Home />
      <Galary />
      <About />
      <Project />
      <Contact />
    </div>
  );
}
