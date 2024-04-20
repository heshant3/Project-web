import React from "react";
import "./Css/Galary.css";
import Image1 from "../assest/img-1.png";

export default function Galary() {
  return (
    <div className="Galary-Container">
      <h1 className="Galary-HeaderText">Discover</h1>

      <div className="Galary-BodyContainer">
        <div className="GalaryBox1">
          <img src={Image1} alt="" className="Image" />
        </div>
      </div>
    </div>
  );
}
