import React from "react";
import "./About.css";
import Lottie from "react-lottie";
import animationData from "../assest/Animation.json";

export default function About() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="About-Container">
      <h1 className="HeaderText">Why you choose us </h1>
      <div className="About-BodyContainer">
        <div className="AboutBox">
          <h2 className="BodyText">
            • Innovative & Creative Project Designing
          </h2>
          <h2 className="BodyText">• Securing your project privacy</h2>
          <h2 className="BodyText">• Track Your project progress</h2>
          <h2 className="BodyText">• User Friendly Designing</h2>
          <h2 className="BodyText">• Guiding for setup</h2>
          <h2 className="BodyText">• Easy to implement</h2>
          <h2 className="BodyText">• Trustable Service</h2>
          <h2 className="BodyText">• On-Time delivery</h2>
        </div>
        <div className="AboutBox1">
          <Lottie options={defaultOptions} height={700} width={700} />
        </div>
      </div>
    </div>
  );
}
