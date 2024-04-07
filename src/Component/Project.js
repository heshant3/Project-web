import React from "react";
import "./Project.css";
import { CgWebsite } from "react-icons/cg";
import { ImMobile } from "react-icons/im";
import { PiDevicesBold } from "react-icons/pi";

export default function Project() {
  return (
    <div className="Project-Container">
      <h1 className="Project-HeaderText">We Support Various Project Types</h1>
      <div className="Project-BodyContainer">
        <div className="ProjectBox">
          <CgWebsite
            style={{ color: "#535353", fontSize: "4em", marginBottom: "3rem" }}
          />
          <h4 className="ProjectBoxHeader">Web Application</h4>
          <p className="ProjectBoxDescription">
            From dynamic websites to robust web-based platforms, we're here to
            help you create innovative web applications that cater to diverse
            needs and audiences.
          </p>
        </div>
        <div className="ProjectBox">
          <ImMobile
            style={{ color: "#535353", fontSize: "4em", marginBottom: "3rem" }}
          />
          <h4 className="ProjectBoxHeader">Mobile Application</h4>
          <p className="ProjectBoxDescription">
            From iOS to Android and cross-platform development, we assist in
            creating engaging and user-friendly mobile applications that cater
            to various industries and functionalities.
          </p>
        </div>
        <div className="ProjectBox">
          <PiDevicesBold
            style={{ color: "#535353", fontSize: "4em", marginBottom: "3rem" }}
          />
          <h4 className="ProjectBoxHeader">IOT Project</h4>
          <p className="ProjectBoxDescription">
            Dive into the world of IoT with our support in designing and
            implementing connected devices, sensors, and systems, enabling you
            to innovate and transform industries with IoT solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
