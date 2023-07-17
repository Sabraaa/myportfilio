import React from "react";
import "./Hamburger.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Hamburger = () => {
  return (
    <div>
      <div className="header-hamburger-container">
        <div className="header-hamburger-right-name">Sabra</div>
        <button className="header-hamburger-button">
          {<FontAwesomeIcon icon={faBars} />} 
        </button>
      </div>
    </div>
  );
};

export default Hamburger;
