import React from "react";
import "./TransitionEffect.css";
import { motion } from "framer-motion";

const TransitionEffect = () => {
  return (
    <>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="tansitionPage pageOne"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.9, ease: "easeInOut" }}
        className="tansitionPage pageTwo"
      />
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
        className="tansitionPage pageThree"
      />
    </>
  );
};

export default TransitionEffect;
