import React from "react";
import "./Technologies.css";
import Card from "../../Card/Card";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiTypescript,
  SiCplusplus,
  SiDjango,
  SiPython,
  SiMysql,
  SiThreedotjs,
  SiNextdotjs,
  SiExpress,
  SiGraphql,
  SiMongodb
} from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { BiLogoNodejs } from "react-icons/bi";
import { AiFillAndroid } from "react-icons/ai";
import { TbBrandFramerMotion, TbBrandRedux } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className="technologies__container">
      <h1 className="technologies__heading">TECHNOLOGIES I KNOW</h1>
      <div className="card">

      <Card icon={<SiJavascript />} title="JavaScript" color="#F7E025" />
      <Card icon={<BiLogoNodejs />} title="Node" color="#539E43" />
      <Card icon={<SiReact />} title="React" color="#1675e0" />
      <Card icon={<AiFillAndroid />} title="React Native" color="#3DDC84" />

      <Card icon={<SiNextdotjs />} title="Next" color="#000000" />
      <Card icon={<SiDjango />} title="dJango" color="#084432" />
      <Card icon={<SiPython />} title="Python" color="#FCD043" />
      <Card icon={<SiTypescript />} title="TypeScript" color="#007BD0" />

      <Card icon={<SiExpress />} title="Express" color="#868686" />
      <Card icon={<SiMysql />} title="SQL" color="#42759C" />
      <Card icon={<SiGraphql />} title="GraphQl" color="#E63BAE" />
      <Card icon={<SiMongodb />} title="MongoDB" color="#08EE69" />

      <Card icon={<FaGitAlt />} title="Git" color="#F35825" />
      <Card icon={<SiHtml5 />} title="HTML" color="#DD4B25" />
      <Card icon={<SiCss3 />} title="CSS" color="#254BDD" />
      <Card icon={<SiTailwindcss />} title="Tailwind Css" color="#49ABB6" />

      <Card icon={<SiSass />} title="Sass" color="#CF6C9C" />
      <Card icon={<SiThreedotjs />} title="Three" color="#000000" />
      <Card icon={<TbBrandFramerMotion />} title="Framer Motion" color="linear-gradient(135deg, #cf25b2 0%, #7447f9 100%)"/>
      <Card icon={<SiStyledcomponents />} title="Styled Components" color="#E48F83"/>

      <Card icon={<TbBrandRedux />} title="Redux" color="#7248B6" />
      <Card icon={<SiCplusplus />} title="C++" color="#084A86" />
 
      </div>
    </div>
  );
};

export default Technologies;
