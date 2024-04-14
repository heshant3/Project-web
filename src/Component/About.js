import React, { useEffect } from "react";
import "./Css/About.css";
import Lottie from "react-lottie";
import animationData from "../assest/Animation.json";
import { motion, useAnimation } from "framer-motion";

export default function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      // preserveAspectRatio: "xMidYMid slice"
    },
  };

  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("about");
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
    <div className="About-Container" id="about">
      <motion.h1
        initial={{ y: 50, opacity: 0 }}
        animate={controls}
        transition={{ delay: 0.1, duration: 1, ease: "backInOut" }}
        className="HeaderText"
      >
        Why you choose us{" "}
      </motion.h1>
      <div className="About-BodyContainer">
        <div className="AboutBox">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
            className="BodyText"
          >
            • Innovative & Creative Project Designing
          </motion.h2>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ delay: 0.3, duration: 1, ease: "backInOut" }}
            className="BodyText"
          >
            • Securing your project privacy
          </motion.h2>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ delay: 0.4, duration: 1, ease: "backInOut" }}
            className="BodyText"
          >
            • Track Your project progress
          </motion.h2>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ delay: 0.5, duration: 1, ease: "backInOut" }}
            className="BodyText"
          >
            • User Friendly Designing
          </motion.h2>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ delay: 0.6, duration: 1, ease: "backInOut" }}
            className="BodyText"
          >
            • Guiding for setup
          </motion.h2>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ delay: 0.7, duration: 1, ease: "backInOut" }}
            className="BodyText"
          >
            • Easy to implement
          </motion.h2>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ delay: 0.8, duration: 1, ease: "backInOut" }}
            className="BodyText"
          >
            • Trustable Service
          </motion.h2>
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={controls}
            transition={{ delay: 0.9, duration: 1, ease: "backInOut" }}
            className="BodyText"
          >
            • On-Time delivery
          </motion.h2>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={controls}
          transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
          className="AboutBox1"
        >
          <Lottie options={defaultOptions} isClickToPauseDisabled={true} />
        </motion.div>
      </div>
    </div>
  );
}
