/* eslint-disable react/jsx-key */
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import achievementPoints from "../../../json/achievementData/AchievementData.json";
import "./AchievementPointes.css";

const AchievementPointes = () => {
  return (
    <div className="achievementPointes__container">
      <VerticalTimeline>
        {achievementPoints.achievements.map((achievement) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgba(132, 94, 194, 0.2)" }}
            contentArrowStyle={{
              borderRight: "7px solid  #845EC2",
            }}
            //   date="2011 - present"
            iconStyle={{
              background: "#191825",
              color: "#fff",
              fontSize: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            icon={achievement.id}
          >
            <div>
              <h3 className="achievement__title">{achievement.title}</h3>
              <p className="achievement__desc">{achievement.description}</p>
            </div>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default AchievementPointes;
