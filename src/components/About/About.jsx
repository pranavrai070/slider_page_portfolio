import React from "react";
import "./About.css";
import TransitionEffect from "../Transition/TransitionEffect";
import AboutBanner from "./aboutBanner/AboutBanner";
import Technologies from "./technologies/Technologies";

const About = () => {
  return (
    <div className="about__container container">
      <TransitionEffect />
      <AboutBanner />
      <Technologies />
    </div>
  );
};

export default About;
