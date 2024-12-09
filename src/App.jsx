import { useSelector } from "react-redux";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About/About";
import Project from "./components/Projects/Project";
import { useEffect } from "react";
import ProjectDetails from "./components/Details/ProjectDetails";
import Contact from "./components/Contact/Contact";
import Resume from "./components/Resume/Resume";
import Achievement from "./components/Achievements/Achievement";

function App() {
  const theme = useSelector((state) => state.theme.appTheme);
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className={`app ${theme ? "light" : ""}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route
          path="/projects/details/:projectName"
          element={<ProjectDetails />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/achievement" element={<Achievement />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
