import React from "react";
import "./Page.css";
import Home from "./Home";
import Navbar from "./Navbar.js";
import About from "./About.js";
import Project from "./Project.js";
import Contact from "./Contact.js";
import ModelFull from "./ModelFull.js";
import { Canvas } from "@react-three/fiber";
import Scene from "./Scene.js";
import { Scroll, ScrollControls } from "@react-three/drei";

export default function Pages() {
  return (
    <div className="home-container">
      <Navbar />
      <Canvas>
        <ScrollControls pages={2} damping={0.1}>
          <Scene />
          <Scroll></Scroll>

          <Scroll html>
            <Home />
            <ModelFull />
          </Scroll>
        </ScrollControls>
      </Canvas>
      <About />
      <Project />
      <Contact />
    </div>
  );
}
