import React from "react";
import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faGithub,
  faLinkedin,
  faEnvelope,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as solidEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="mainfooter-container">
      <div className="footer-container">
        <div className="footer-icon-container">
          <a
            href="https://www.instagram.com/sabraaxavan"
            className="footer-icon"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://github.com/Sabraaa" className="footer-icon">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/sabra-akhavan-5471ab229"
            className="footer-icon"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:sabraxavan@gmail.com" className="footer-icon">
            <FontAwesomeIcon icon={solidEnvelope} />
          </a>
        </div>
        <p>Designed and coded by Sabra</p>
      </div>
    </div>
  );
};

export default Footer;
