import React, { useEffect } from "react";
import "./Css/Galary.css";
import Image1 from "../assest/img-1.png";
import Image2 from "../assest/img-2.png";
import Image3 from "../assest/img-3.png";
import Image4 from "../assest/img-4.png";
import Image5 from "../assest/img-5.png";
import Image6 from "../assest/img-7.png";
import { motion, useAnimation } from "framer-motion";

export default function Galary() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("Galary");
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
    <div className="Galary-Container" id="Galary">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={controls}
        transition={{ delay: 0.1, duration: 1, ease: "backInOut" }}
        className="Galary-HeaderText"
      >
        Discover
      </motion.h1>

      <div className="Galary-BodyContainer">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
          transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
          className="itemBox one"
        >
          <motion.div
            className="Center"
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ delay: 0.3, duration: 1, ease: "backInOut" }}
          >
            <img src={Image1} alt="" className="Image" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
          transition={{ delay: 0.4, duration: 1, ease: "backInOut" }}
          className="itemBox two"
        >
          <motion.div
            className="Center"
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ delay: 0.5, duration: 1, ease: "backInOut" }}
          >
            <img src={Image2} alt="" className="Image" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
          transition={{ delay: 0.6, duration: 1, ease: "backInOut" }}
          className="itemBox three"
        >
          <motion.div
            className="Center"
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ delay: 0.7, duration: 1, ease: "backInOut" }}
          >
            <img src={Image3} alt="" className="Image" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
          transition={{ delay: 0.8, duration: 1, ease: "backInOut" }}
          className="itemBox four"
        >
          <motion.div
            className="Center"
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ delay: 0.9, duration: 1, ease: "backInOut" }}
          >
            <img src={Image4} alt="" className="Image" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
          transition={{ delay: 1.0, duration: 1, ease: "backInOut" }}
          className="itemBox five"
        >
          <motion.div
            className="Center"
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ delay: 1.1, duration: 1, ease: "backInOut" }}
          >
            <img src={Image5} alt="" className="Image" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
          transition={{ delay: 1.2, duration: 1, ease: "backInOut" }}
          className="itemBox six"
        >
          <motion.div
            className="Center"
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ delay: 1.3, duration: 1, ease: "backInOut" }}
          >
            <img src={Image6} alt="" className="Image" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
