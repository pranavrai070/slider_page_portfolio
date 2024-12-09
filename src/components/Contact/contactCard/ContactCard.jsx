import React from "react";
import "./ContactCard.css";
import { NavLink } from "react-router-dom";

const ContactCard = ({ icon, title, subtitle, subIcons, subtitlelink }) => {
  return (
    <div className="contactCard__container">
      <div className="contactCard__icon">{icon}</div>
      <div className="contactCard__title">
        <h1>{title}</h1>
        {subtitle ? (
          <span>{subtitle}</span>
        ) : subIcons ? (
          <span>
            {subIcons.map((item, index) => {
              return (
                <NavLink target="_blank" to={item.link} key={index}>
                  {item.subIcon}
                </NavLink>
              );
            })}
          </span>
        ) : (
          <NavLink target="_blank" to={"https://calendly.com/pranavrai070/30min"}>
            {subtitlelink}
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default ContactCard;
