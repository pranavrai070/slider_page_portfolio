import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { setTheme } from "../../Store/Slice/ThemeSlice";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const theme = useSelector((state) => state.theme.appTheme);
  //   console.log(theme);
  const [showHamburger, setShowHamburger] = useState(true);
  // const [mobileMenuColor, setMobileMenuColor] = useState(true);
  const dispatch = useDispatch();
  const hamburgerIcon = useRef();
  const handleHamburgerMenu = () => {
    if (showHamburger) {
      hamburgerIcon.current.classList.add("show");
    } else {
      hamburgerIcon.current.classList.remove("show");
    }
    setShowHamburger(!showHamburger);
  };

  const handleManu = () => {
    setShowHamburger(!showHamburger);
    hamburgerIcon.current.classList.remove("show");
  };

  return (
    <header className="header__container  container">
      <nav className={`navbar__container ${theme ? "light" : ""}`}>
        <NavLink to="/" className="logo">
          PR
        </NavLink>
        <div className={`navbar__menu ${theme ? "light" : ""}`}>
          <div className="hamburgerMenu" onClick={handleHamburgerMenu}>
            {showHamburger ? <GiHamburgerMenu /> : <RxCross2 />}
          </div>
          <ul
            ref={hamburgerIcon}
            className="navbar__menuUl"
            style={{
              backgroundColor: theme ? "#FAF3F0" : "#191825",
            }}
            onClick={handleManu}
          >
            <li className="navbar__menuLi">
              <NavLink
                activeclassname="active"
                to="/"
                className={`navbar__menuLink ${theme ? "light" : ""}`}
              >
                Home
              </NavLink>
            </li>
            <li className="navbar__menuLi">
              <NavLink
                activeclassname="active"
                to="/about"
                className={`navbar__menuLink ${theme ? "light" : ""}`}
              >
                About
              </NavLink>
            </li>
            <li className="navbar__menuLi">
              <NavLink
                activeclassname="active"
                to="/projects"
                className={`navbar__menuLink ${theme ? "light" : ""}`}
              >
                Projects
              </NavLink>
            </li>
            <li className="navbar__menuLi">
              <NavLink
                activeclassname="active"
                to="/achievement"
                className={`navbar__menuLink ${theme ? "light" : ""}`}
              >
                Achievements
              </NavLink>
            </li>
            <li className="navbar__menuLi">
              <NavLink
                activeclassname="active"
                to="/contact"
                className={`navbar__menuLink ${theme ? "light" : ""}`}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="theme" onClick={() => dispatch(setTheme(!theme))}>
          {theme ? <BsFillMoonStarsFill /> : <BsFillSunFill color="gold" />}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
