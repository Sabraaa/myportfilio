import React from "react";
import "./Header.scss";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faSolid} from '@fortawesome/fontawesome-svg-core/import.macro'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

function Header() {
  return (
    <div>
      <div className="main-header-container">
    <div className="header-container">

        <h1> Sabra</h1>
        <div className="header-container-right">
          <div className="header-container-right-title">
            <h6> Home </h6>
            <h6> About </h6>
            <h6> Project </h6>
            <h6> Resume </h6>
          </div>
          <button className="btn">
            <FontAwesomeIcon icon={faSun} />
            {/* <i className="fa-solid fa-sun-bright"></i> */}
            {/* <FontAwesomeIcon icon={solid('sun-bright')} /> */}
          </button>
        </div>
    </div>
      </div>
    </div>
  );
}

export default Header;
