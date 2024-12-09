import React from "react";
import "./Project.css";
import ProjectBanner from "./projectBanner/ProjectBanner";
import TransitionEffect from "../Transition/TransitionEffect";

const Project = () => {
  return (
    <div className="project__container container">
      <TransitionEffect />

      <ProjectBanner />
    </div>
  );
};

export default Project;
