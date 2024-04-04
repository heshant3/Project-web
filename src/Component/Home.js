import React from "react";
import "./Home.css";
import Navbar from "./Navbar.js";

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="box"></div>
    </div>
  );
}
