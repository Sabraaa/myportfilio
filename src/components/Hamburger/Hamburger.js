import React, { useState } from "react";
import "./Hamburger.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import RSM from "../../assets/sabracodes.pdf";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="header-hamburger-container">
        <div className="header-hamburger-right-name">Sabra</div>
        <button className="header-hamburger-button" onClick={handleMenuClick}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      {isOpen && (
        <Menu>
          <nav className="header-link-nav">
            <Link className="header-link-nav-ham" to="/">
              {" "}
              Home{" "}
            </Link>
            <Link className="header-link-nav-ham" to="/about">
              {" "}
              About{" "}
            </Link>
            <Link className="header-link-nav-ham" to="/projects">
              {" "}
              Projects
            </Link>
            <div 
              className="header-link-nav-ham"
              onClick={() => window.open(`${RSM}`, "_blank")}
            >
              <button className="btn-resume">Resume</button>
            </div>
          </nav>
        </Menu>
      )}
    </div>
  );
};

export default Hamburger;
