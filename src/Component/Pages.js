import React from "react";
import "./Page.css";
import Home from "./Home";
import Navbar from "./Navbar.js";
import About from "./About.js";
import Project from "./Project.js";
import Contact from "./Contact.js";

export default function Pages() {
  return (
    <div className="home-container">
      <Navbar />

      <Home />

      <About />
      <Project />
      <Contact />
    </div>
  );
}
