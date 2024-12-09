import React, { Suspense, useRef, useState } from "react";
import "./EachProject.css";
import { motion } from "framer-motion";
import { CgChevronDoubleRight } from "react-icons/cg";
import { MdOutlineExpandMore } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addEachProjectDescription,
  addEachProjectImage,
  addEachProjectLiveDemo,
  addEachProjectName,
} from "../../../Store/Slice/EachProjectSlice";
import Loader from "../../Loader/Loader";

const EachProject = ({ link, name, description, liveDemo }) => {
  // console.log(description);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // console.log(liveDemo);

  return (
    <motion.div
      initial={{ x: 500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="eachProject__container"
    >
      <div className="eachProject__image">
        <Suspense fallback={<Loader />}>
          <img src={link} alt="Project Image" />
        </Suspense>
      </div>
      <div
        className="eachProject__projectDetails"
        onClick={() => {
          navigate(`/projects/details/${name}`);
          dispatch(addEachProjectImage(link));
          dispatch(addEachProjectName(name));
          dispatch(addEachProjectLiveDemo(liveDemo));
          dispatch(addEachProjectDescription(description));
        }}
      >
        Know more
      </div>
    </motion.div>
  );
};

export default EachProject;
