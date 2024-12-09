import React from "react";
import "./Card.css";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

const Card = ({ icon, title, color }) => {
  const defaultOptions = {
    reverse: false, // reverse the tilt direction
    max: 35, // max tilt rotation (degrees)
    perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000, // Speed of the enter/exit transition
    transition: true, // Set a transition on enter/exit.
    axis: null, // What axis should be disabled. Can be X or Y.
    reset: true, // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
  };
  return (
    <div className="card__container">
      <Tilt coptions={defaultOptions}>
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="cardItem"
          style={{
            background: `${color}`,
            color: "white",
            filter: `drop-shadow(3px 3px 5px ${color} )`,
          }}
        >
          <div className="cardItem__icon">{icon}</div>
          <div className="cardItem__name">{title}</div>
        </motion.div>
      </Tilt>
    </div>
  );
};

export default Card;
