import React, { useEffect, useRef } from "react";
import "./HomeBanner.css";
import { useSelector } from "react-redux";
import MyImage from "/src/assets/profile.png";
import { motion } from "framer-motion";
import { NavLink, useNavigate } from "react-router-dom";
import TypingAnimation from "../../../Utils/TypingAnimation/TypingAnimation";
// import animatedText from "../../../assets/AnimatedText.png";

const HomeBanner = () => {
  const navigate = useNavigate();
  const theme = useSelector((state) => state.theme.appTheme);

  const myName = useRef(null);

  return (
    <div className={`homeBanner__container ${theme ? "light" : ""}`}>
      <div className="homeBanner__top">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="homeBanner__left"
        >
          <div className="homeBannerLeft__greeting">
            <div>
              <span className="hey">Hey,</span>
              <span className="selfIntro">
                My name is{" "}
                <span className="name">
                  <TypingAnimation element={myName} text={["Pranav"]} />
                </span>
              </span>
            </div>
            <div className="homeBannerLeft__intro">
              <div>
                <span className="intro__tagline">
                  Turning passion into proficiency,
                </span>{" "}
                I am an enthusiastic software developer with over{" "}
                <span className="intro__tagline">
                2 years of experience
                </span>{" "}
                 ,who believes in skill and is on an exciting journey through the boundless realm of software development.
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="homeBanner__right"
          style={{
            backgroundColor: !theme ? "#191825" : "#191825",
            filter: ` drop-shadow(2px 2px 10px ${theme ? "#111" : "#fff"})`,
          }}
        >
          <img src={MyImage} alt="user" />
        </motion.div>
      </div>

      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="homeBanner__bottom"
      >
        <div className="homeBannerBottom__buttons">
          <a
            className={`button__resume bottom__button ${theme ? "light" : ""}`}
            onClick={() => navigate("/resume")}
          >
            Resume
          </a>

          <NavLink
            // href="https://github.com/"

            to="/about"
            className={`button__Github bottom__button ${theme ? "light" : ""}`}
          >
            More about me
          </NavLink>
        </div>
        {/* <div className="hireMe">
          <img className="hireMe__image" src={animatedText} alt="" />
          <div className="hireText">Excited to work </div>
        </div> */}
      </motion.div>
    </div>
  );
};

export default HomeBanner;
