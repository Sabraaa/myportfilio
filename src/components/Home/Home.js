import React from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import Avatar from "../../assets/homepfp.jpg";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/about");
  };

  return (
    <div>
      <div className="home-container">
        <div className="home-profile">
          <img className="home-avatar" alt="..." src={Avatar} />
        </div>
        <div className="home-column">
          <div className="home-row">
            <div className="home-title"> Hey I am </div>
            <div className="home-myname"> Sabra Akhavan</div>
          </div>
          <div className="home-description"> "Front-end Developer"</div>
        </div>
        <div className="home-btn-container">
          <button
            className="home-btn"
            type="button"
            // onClick={() => navigate("/About")}
            onClick={handleClick}
          >
            More about me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
