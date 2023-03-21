import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="main-header-container">
        <div className="header-container">
          <h1> Sabra</h1>
          <div className="header-container-right">
            <div className="header-container-right-title">
              <Link className="header-link" to="/">
                Home
              </Link>
              {/* <Link className="header-link" to="/About">
                About
              </Link> */}
              <NavLink to="/About"> About </NavLink>
              {/* <Link to="/projects">Projects</Link> */}
              {/* <Link to="/resume">Resume</Link> */}
            </div>
            <button className="btn">
              <FontAwesomeIcon icon={faSun} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
