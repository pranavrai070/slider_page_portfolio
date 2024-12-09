import React from "react";
import "./EachCertificate.css";
import { Link } from "react-router-dom";

const EachCertificate = ({ link, certificateImage }) => {
  return (
    <div className="eachCertificate__container">
      <a target="_blank" href={link}>
        <img src={certificateImage} alt="certificate Image" />
      </a>
    </div>
  );
};

export default EachCertificate;
