import React, { useEffect, useState } from "react";
import "./ProjectDetails.css";
import { useSelector } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import Loader from "../Loader/Loader";
const ProjectDetails = () => {
  const theme = useSelector((state) => state.theme.appTheme);

  const projectName = useParams();
  const [showLoading, setShowLoading] = useState(false);
  const [showBackIcon, setShowBackIcon] = useState(false);
  const details = useSelector((state) => state.eachProject);
  // console.log(details);
  const navigate = useNavigate();

  useEffect(() => {
    if (details.projectImage) {
      setTimeout(() => {
        setShowLoading(false);
        setShowBackIcon(true);
      }, 1000);
      setShowLoading(true); // first this will run then settimeout will run call stack
    } else {
      setShowLoading(true);
      setTimeout(() => {
        navigate("/projects");
      }, 1000);
    }
  }, []);

  //   console.log(projectName);
  return (
    <div className="projectDetails__container container">
      {showBackIcon && (
        <div
          className="projectDetails__mainHeading"
          onClick={() => navigate("/projects")}
        >
          <FaArrowLeft />
        </div>
      )}
      {showLoading ? (
        <div className="projectDetails__loadingIcon">
          <Loader />
        </div>
      ) : (
        <div className="projectDetails__content">
          <div className="projectDetails__left">
            <img
              src={details.projectImage}
              alt={details.projectName}
              className="projectDetails__image"
            />
          </div>
          <div className="projectDetails__right">
            <h1 className="projectDetails__heading">{details.projectName}</h1>
            <div className="projectDetails__description">
              {details.projectDescription}
            </div>
            <NavLink
              target="_blank"
              to={details.projectLiveDemo}
              className={`projectDetails__Live ${theme ? "light" : ""}`}
            >
              Go Live
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
