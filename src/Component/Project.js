import React, { useEffect } from "react";
import "./Css/Project.css";
import { CgWebsite } from "react-icons/cg";
import { ImMobile } from "react-icons/im";
import { PiDevicesBold } from "react-icons/pi";
import { motion, useAnimation } from "framer-motion";

export default function Project() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("project");
      const offset = window.innerHeight * 0.8; // Adjust this value according to when you want the animation to start

      if (element.getBoundingClientRect().top < offset) {
        controls.start({
          opacity: 1,
          y: 0,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);
  return (
    <div className="Project-Container">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={controls}
        transition={{ delay: 0.1, duration: 1, ease: "backInOut" }}
        className="Project-HeaderText"
        id="project"
      >
        We Support Various Project Types
      </motion.h1>
      <div className="Project-BodyContainer">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
          transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
          className="ProjectBox"
        >
          <CgWebsite
            style={{ color: "#535353", fontSize: "4em", marginBottom: "3rem" }}
          />
          <h4 className="ProjectBoxHeader">Web Application</h4>
          <p className="ProjectBoxDescription">
            From dynamic websites to robust web-based platforms, we're here to
            help you create innovative web applications that cater to diverse
            needs and audiences.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
          transition={{ delay: 0.3, duration: 1, ease: "backInOut" }}
          className="ProjectBox"
        >
          <ImMobile
            style={{ color: "#535353", fontSize: "4em", marginBottom: "3rem" }}
          />
          <h4 className="ProjectBoxHeader">Mobile Application</h4>
          <p className="ProjectBoxDescription">
            From iOS to Android and cross-platform development, we assist in
            creating engaging and user-friendly mobile applications that cater
            to various industries and functionalities.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
          transition={{ delay: 0.4, duration: 1, ease: "backInOut" }}
          className="ProjectBox"
        >
          <PiDevicesBold
            style={{ color: "#535353", fontSize: "4em", marginBottom: "3rem" }}
          />
          <h4 className="ProjectBoxHeader">IOT Project</h4>
          <p className="ProjectBoxDescription">
            Dive into the world of IoT with our support in designing and
            implementing connected devices, sensors, and systems, enabling you
            to innovate and transform industries with IoT solutions.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
