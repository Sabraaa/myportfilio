import React, { useState } from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import RSM from "../../assets/sabracodes.pdf";

function Header() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <div className={`main-header-container ${theme}`}>
        <div className="header-container">
          <div className="header-profile-name"> Sabra</div>
          <div className="header-container-right">
            <div>
              <nav className="header-container-right-title">
                <Link className="header-link" to="/">
                  Home
                </Link>
                <Link className="header-link" to="/about">
                  About
                </Link>
                <Link className="header-link" to="/projects">
                  Projects
                </Link>
                <div onClick={() => window.open(`${RSM}`, "_blank")}>
                  <button className="btn-resume">Resume</button>
                </div>
              </nav>
            </div>
            {/* <button className="btn">
                <FontAwesomeIcon icon={theme === "light" ? faMoon : faSun} />
              </button> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
