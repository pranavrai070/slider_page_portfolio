import React from "react";
import "./Resume.css";
import resumeData from "../../json/ResumeData/ResumeData.json";
import TransitionEffect from "../Transition/TransitionEffect";
import { NavLink } from "react-router-dom";

const Resume = () => {
  return (
    <div className="resume__container container">
      <TransitionEffect />

      <div className="resume__heading">Check My Resume</div>
      <div>
        <NavLink
          to={
            "https://drive.google.com/file/d/1ZbqFLNgFGaKW1waUcVLsNKrZ-kfIgf1w/view"
          }
          download
          target="_blank"
          className="resume__download"
        >
          Download Resume
        </NavLink>
      </div>

      <div className="resume__eachSection">
        {/* Education  */}
        <div className="resume__education">
          <div className="resume__subSectionHeading">Education</div>
          {resumeData.education.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div className="resume__eductionSchool">
                  <div className="resume__eachMainHeading resume__educationMainHeading ">
                    {item.degree}
                  </div>
                  <div className="resume__educationYear">{item.graduation}</div>
                  <div className="resume__educationCenterName resume__eachSubHeading">
                    {item.university}
                  </div>
                  <div className="resume__eductionCity resume__eachSubHeading">
                    {item.location}
                  </div>
                  <div className="resume__educationGrade">Grade {item.gpa}</div>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        <div className="resume__projects">
          <div className="resume__subSectionHeading">Projects </div>
          <ul>
            {resumeData.projects.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <li className="resume__technicalSkillList">
                    <div className="resume__eachMainHeading">{item.name}</div>
                    <div className="resume__eachSubHeading">
                      {item.description}
                    </div>
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>
        {/* Technical Skills */}

        <div className="resume__technicalSkills">
          <div className="resume__subSectionHeading">Technical Skills</div>
          <div className="resume__techincalSkillContainer">
            <ul>
              {resumeData.skills.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <li className="resume__technicalSkillList">
                      <div className="resume__eachMainHeading">{item.name}</div>
                      <div className="resume__eachSubHeading">
                        {item.description.join(", ")}
                      </div>
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="resume__projects">
          <div className="resume__subSectionHeading">Additional Skills</div>
          <ul>
            {resumeData.additionalSkills.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  <li className="resume__technicalSkillList">
                    <div className="resume__eachMainHeading">{item.name}</div>
                    <div className="resume__eachSubHeading">
                      {item.description}
                    </div>
                  </li>
                </React.Fragment>
              );
            })}
          </ul>
        </div>

        <div className="resume__technicalSkills">
          <div className="resume__subSectionHeading">Interest</div>
          <div className="resume__techincalSkillContainer">
            <ul>
              {resumeData.interests.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <li className="resume__technicalSkillList resume__languagesList">
                      <div className="resume__eachSubHeading">{item}</div>
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="resume__technicalSkills">
          <div className="resume__subSectionHeading">Languages</div>
          <div className="resume__techincalSkillContainer">
            <ul>
              {resumeData.languages.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <li className="resume__technicalSkillList resume__languagesList ">
                      <div className="resume__eachSubHeading">{item}</div>
                    </li>
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
