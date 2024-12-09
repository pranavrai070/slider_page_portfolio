import React, { useEffect } from "react";
import Typewriter from "typewriter-effect/dist/core";

const TypingAnimation = ({ element, text }) => {
  useEffect(() => {
    new Typewriter(element.current, {
      strings: text,
      autoStart: true,
      loop: true,
    });
  }, []);
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "100%",
        marginLeft: "1rem",
        width: "max-content",
      }}
      className="animatedText"
      ref={element}
    ></div>
  );
};

export default TypingAnimation;
