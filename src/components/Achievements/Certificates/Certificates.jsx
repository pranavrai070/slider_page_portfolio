import React from "react";
import "./Certificates.css";
import EachCertificate from "./EachCertificate";
import "react-vertical-timeline-component/style.min.css";
import cssCertificate from "../../../assets/css_certificate.png";
import ReactCertificate from "../../../assets/React_certificate.png";
import JavascriptCertificate from "../../../assets/Javascript_certificate.png";

const Certificates = () => {
  return (
    <div className="certificates__container">
      <h2 className="certificates__heading">Certificates</h2>
      <div className="certificates__images">
        <EachCertificate
          link="https://www.hackerrank.com/certificates/7dfcba1d9c07"
          certificateImage={cssCertificate}
        />

        <EachCertificate
          link="https://www.hackerrank.com/certificates/3e058d105bd2"
          certificateImage={JavascriptCertificate}
        />

        <EachCertificate
          link="https://www.hackerrank.com/certificates/d93047d83b38"
          certificateImage={ReactCertificate}
        />
      </div>
    </div>
  );
};

export default Certificates;
