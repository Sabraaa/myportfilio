import React from "react";
import "./Footer.scss";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSquareGithub,
//   faLinkedin,
//   faEnvelope,
//   faInsragram,
// } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="mainfooter-container">
      <div className="footer-container">
        {/* <div>
          <FontAwesomeIcon icon={faSquareGitHub} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faInsragram} />
        </div> */}
        <p>Designed and coded by Sabra</p>
      </div>
    </div>
  );
};

export default Footer;
