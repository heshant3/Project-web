import React, { useEffect } from "react";
import "./Css/Contact.css";
import { motion, useAnimation } from "framer-motion";

export default function Contact() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("contact");
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
    <div className="Contact-Container" id="contact">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={controls}
        transition={{ delay: 0.1, duration: 1, ease: "backInOut" }}
        className="EmailText"
      >
        Info@heshan.dev
      </motion.h1>
    </div>
  );
}
