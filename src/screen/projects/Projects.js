import React from "react";
import Fullscreen from "../../components/Fullscreen/Fullscreen";
import { useState } from "react";
import "./Projects.scss";
import ProImg from "../../assets/imgproject.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareArrowUpRight,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  // const [fullScreenImage, setFullScreenImage] = useState(null);
  // const handleImgClick = (ProImg) => {
  //   setFullScreenImage(null);
  // };

  return (
    <div className="pro-main-container">
      <div className="pro-container">
        <div className="pro-title">
          <p>My Projects</p>
        </div>
        <div className="pro-example-container">
          <div className="pro-examples">
            <div className="pro-img-ex-row">
              <div className="the-rest-column">
                <div className="pro-examples-title">Dashboard</div>
                <div className="pro-examples-techstack">
                  Tech Stack: Js, React, BEM, SASS CSS, HTML, Bootstrap, other
                  libraries
                </div>
                <div className="pro-examples-desc">
                  {" "}
                  The dashboard project is a web application that allows users
                  to switch between viewing bitcoin and etherium prices, and
                  provides various wallet options such as buying, selling, and
                  transferring cryptocurrency. The dashboard will display
                  current prices, trends, and market data, as well as user
                  account information and transaction history.
                </div>
                <div className="pro-examples-btn">
                  {/* <button className="pro-examples-btn-live">
                    <FontAwesomeIcon icon={faSquareArrowUpRight} />
                    Live
                  </button> */}
                  <a href="https://github.com/Sabraaa/sabrasportfilio">
                    <button className="pro-examples-btn-sourse">
                      <FontAwesomeIcon icon={faCode} />
                      Sourse
                    </button>
                  </a>
                </div>
              </div>
              <div className="pro-examples-image">
                <img
                  className="pro-examples-image"
                  alt="..."
                  src={ProImg}
                  // onClick={() => handleImgClick("ProImg")}
                />
              {/* {fullScreenImage && (
                <fullScreenImage ProImg={fullScreenImage} onClose={handleCloseFullScreenImage} /> */}
              {/* )} */}
              </div>
            </div>
          </div>
          <a href="https://github.com/Sabraaa">
            <button className="seeall">See All</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
