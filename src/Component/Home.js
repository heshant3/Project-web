import React, { useState, useEffect } from "react";
import "./Css/Home.css";
import Lottie from "react-lottie";
import animationData from "../assest/Animation2.json";
import { motion } from "framer-motion";
import { ref, onValue } from "firebase/database";
import { db } from "./firebase";

export default function Home() {
  const [Client, setClient] = useState(null);
  const [Project, setProject] = useState(null);
  const [Technology, setTechnology] = useState(null);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      // preserveAspectRatio: "xMidYMid slice"
    },
  };

  const handleButtonClick = () => {
    window.open("https://wa.me/message/SOFTZIICGYYAM1", "_blank");
  };

  useEffect(() => {
    const ClientRef = ref(db, "Client");
    const ProjectRef = ref(db, "Project");
    const TechnologyRef = ref(db, "Technology");

    onValue(ClientRef, (snapshot) => {
      const data = snapshot.val();
      setClient(data);
    });

    onValue(ProjectRef, (snapshot) => {
      const data = snapshot.val();
      setProject(data);
    });

    onValue(TechnologyRef, (snapshot) => {
      const data = snapshot.val();
      setTechnology(data);
    });
  }, []);

  return (
    <div className="home-containerq" id="home">
      <div className="body-container">
        <div className="box">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1, duration: 1, ease: "backInOut" }}
            className="HeadText"
          >
            The best way to build your project
          </motion.h1>
          <motion.h4
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
            className="DescriptionText"
          >
            Welcome to our exclusive platform, tailored for ICT students across
            Sri Lanka! Here, we're dedicated to amplifying your innovative
            projects, ensuring better results every step of the way. Let's turn
            your ideas into impactful realities together!
          </motion.h4>
          <div className="ProjectData">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 1, ease: "backInOut" }}
              className="Data"
            >
              <h1 className="DataValue">{Client}</h1>
              <h2 className="DataText">Client</h2>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 1, ease: "backInOut" }}
              className="line"
            ></motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "backInOut" }}
              className="Data"
            >
              <h1 className="DataValue">{Project}</h1>
              <h2 className="DataText">Project</h2>
            </motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 1, ease: "backInOut" }}
              className="line"
            ></motion.div>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 1, ease: "backInOut" }}
              className="Data"
            >
              <h1 className="DataValue">{Technology}</h1>
              <h2 className="DataText">Languages</h2>
            </motion.div>
          </div>
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1, ease: "backInOut" }}
            className="ButtonContainer"
          >
            <button onClick={handleButtonClick} className="Button">
              Get Quotation
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
          className="box2"
        >
          <Lottie
            // style={{ width: "110%", height: "110%" }}
            options={defaultOptions}
            isClickToPauseDisabled={true}
          />
        </motion.div>
      </div>
    </div>
  );
}
