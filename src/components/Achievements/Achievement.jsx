import React from "react";
import "./Achievement.css";
import TransitionEffect from "../Transition/TransitionEffect";
import Certificates from "./Certificates/Certificates";
import AchievementPointes from "./AchievementsPointes/AchievementPointes";

const Achievement = () => {
  return (
    <div className="container achievement__container">
      <TransitionEffect />
      <AchievementPointes />
      {/* <Certificates /> */}
    </div>
  );
};

export default Achievement;
