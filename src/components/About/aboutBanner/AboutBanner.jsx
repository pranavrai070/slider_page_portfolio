/*eslint-disable*/
import React, { useEffect, useRef, useState } from "react";
import "./AboutBanner.css";
import TypingAnimation from "../../../Utils/TypingAnimation/TypingAnimation";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
// import ArrowDownwardSharpIcon from "@mui/icons-material/ArrowDownwardSharp";
import { MdOutlineExpandMore } from "react-icons/md";

const AboutBanner = () => {
  const theme = useSelector((state) => state.theme.appTheme);
  const [showScrollButton, setShowScrollButton] = useState(true);

  const handleScrollOnClick = () => {
    const totalScrollHeight = document.documentElement.scrollHeight;
    const scrollPositionFromBottom = totalScrollHeight - window.innerHeight - 0; // Scroll 200 pixels from the bottom

    window.scrollTo({
      top: scrollPositionFromBottom,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowScrollButton(false);
      } else {
        setShowScrollButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const textEleme = useRef(null);
  return (
    <div className="aboutBanner__container container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="aboutBanner__intro"
      >
        {" "}
        I am
        <span className="aboutBanner__abilities">
          <TypingAnimation
            element={textEleme}
            text={[
              "Ambitious,",
              "Learner,",
              "Self-Disciplined,",
              "Self-Motivated,",
              //   "fearless,",
              "Supportive.",
            ]}
          />
        </span>
      </motion.div>
      <div className="aboutBanner__objective">
        <ul>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className={` ${theme ? "light" : ""}`}
          >
            I am a full stack developer with expertise in{" "}
            <span className="highlighted__text">
              React, Node.js, Python, React Native, Web Sockets,{" "}
            </span>
            and the
            <span className="highlighted__text"> OpenAI API</span>. I excel in
            creating comprehensive solutions for websites and mobile or web
            applications, handling everything from backend development to
            frontend design.
          </motion.p>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className={` ${theme ? "light" : ""}`}
          >
            Crafting seamless user experiences and translating design into
            functional code is my true passion. My full stack development
            expertise allows me to approach
            <span className="highlighted__text"> problem-solving</span>
            systematically with a keen attention to detail, ensuring harmonious
            outcomes across all stages of development.
          </motion.p>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className={` ${theme ? "light" : ""}`}
          >
            My journey began with a strong academic foundation, during which I
            discovered my passion for technology and problem-solving. This
            passion led me to embrace full stack development as my true calling,
            and I decided to pivot my career to excel in this rapidly evolving
            domain.
          </motion.p>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className={` ${theme ? "light" : ""}`}
          >
            My portfolio showcases my journey in full stack development with a collection of projects highlighting my dedication to creating seamless and functional web and mobile applications. I'm passionate about collaborating with creative and driven teams to build innovative digital experiences. If you share this enthusiasm for pushing technology and design boundaries, let's connect and shape the future together!
          </motion.p>
          <motion.p
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className={` ${theme ? "light" : ""}`}
          >
            Thank you for visiting my portfolio. If you have any questions or
            would like to explore potential opportunities, please don't hesitate
            to reach out. I look forward to connecting with you!
          </motion.p>
        </ul>
      </div>
      {showScrollButton && (
        <motion.div
          onClick={handleScrollOnClick}
          // initial={{ scale: 1 }}
          // whileHover={{ scale: 1.2 }}
          animate={{
            y: [0, 20, 0], // The animation will scale from 1 to 1.2 and then back to 1
            transition: {
              duration: 0.5,
              repeat: Infinity, // Repeat the animation indefinitely
              // repeatType: "reverse", // Reverse the animation on repeat (yoyo effect)
            },
          }}
          // transition={{ yoyo: 10 }}
          className="scroll__down"
        >
          <MdOutlineExpandMore className="scrollDown__icon" fontSize="30" />
        </motion.div>
      )}
    </div>
  );
};

export default AboutBanner;
