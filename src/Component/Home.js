import React from "react";
import "./Home.css";
import Navbar from "./Navbar.js";
import About from "./About.js";
import Project from "./Project.js";
import Contact from "./Contact.js";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="body-container">
        <div className="box">
          <h1 className="HeadText">The best way to build your project</h1>
          <h4 className="DescriptionText">
            Welcome to our exclusive platform, tailored for ICT students across
            Sri Lanka! Here, we're dedicated to amplifying your innovative
            projects, ensuring better results every step of the way. Let's turn
            your ideas into impactful realities together!
          </h4>
          <div className="ProjectData">
            <div className="Data">
              <h1 className="DataValue">8</h1>
              <h2 className="DataText">Client</h2>
            </div>
            <div className="line"></div>
            <div className="Data">
              <h1 className="DataValue">11</h1>
              <h2 className="DataText">Project</h2>
            </div>
            <div className="line"></div>
            <div className="Data">
              <h1 className="DataValue">12</h1>
              <h2 className="DataText">Languages</h2>
            </div>
          </div>
          <div className="ButtonContainer">
            <button className="Button">Get Quotation</button>
          </div>
        </div>
        <div className="box"></div>
      </div>

      {/* 2nd scroller   */}
      <div className="ModelCOntainer"></div>

      {/* 3rd scroller   */}
      <div className="ModelCOntainer">
        <About />
      </div>

      {/* 4th scroller   */}
      <div className="ModelCOntainer">
        <Project />
      </div>

      {/* 5th scroller   */}
      <div className="ModelCOntainer">
        <Contact />
      </div>
    </div>
  );
}
