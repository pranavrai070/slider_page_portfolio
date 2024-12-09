/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./Contact.css";
import ContactCard from "./contactCard/ContactCard";
import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { FiPhoneCall, FiShare2 } from "react-icons/fi";
import { SiGithub, SiLeetcode, SiLinkedin } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { useSelector } from "react-redux";
import TransitionEffect from "../Transition/TransitionEffect";

const Contact = () => {
  const theme = useSelector((state) => state.theme.appTheme);

  return (
    <>
      <TransitionEffect />
      <div className={`contact__container container ${theme ? "light" : ""}`}>
        <div className="contact__banner">
          <div className="contact__heading">Contact Me</div>
          <div className="contact__blocks">
            <ContactCard
              icon={<HiOutlineLocationMarker className="contactIcon" />}
              title="My Address"
              subtitle="Delhi, India 110092"
            />
            <ContactCard
              icon={<FiShare2 className="contactIcon" />}
              title="Social Profiles"
              subIcons={[
                {
                  subIcon: <SiLinkedin className="contact__subIcons" />,
                  link: "https://www.linkedin.com/in/pranavrai070/",
                },
                {
                  subIcon: <SiGithub className="contact__subIcons" />,
                  link: "https://github.com/pranavrai070",
                },
                {
                  subIcon: <SiLeetcode className="contact__subIcons" />,
                  link: "https://leetcode.com/u/pranavrai070/",
                },
              ]}
            />
            <ContactCard
              icon={<HiOutlineMail className="contactIcon" />}
              title="Email Me"
              subtitle="pranavrai070@gmail.com"
            />
            <ContactCard
              icon={<FiPhoneCall className="contactIcon" />}
              title="Calendly"
              subtitlelink="Book a Slot"
            />
          </div>
          <div className="contact__subHeading">Get in Touch</div>
          <div className="contact__tagline">
          Thank you for visiting my portfolio. If you have any questions or would like to explore potential opportunities, please don't hesitate to reach out. With 2 years of experience in the software development industry, I am actively seeking new opportunities in the field of software development.
          </div>
          <form
            action="mailto:pranavrai070@gmail.com"
            method="GET"
            encType="text/plain"
            className="contact__form"
          >
            <button type="submit" className="contact__button">
              Contact Me
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
