import React from "react";
import "./About.scss"; 

import HTML from "../../assets/html.png";
import CSS from "../../assets/css.png";
import JS from "../../assets/js.png";
import RT from "../../assets/react.png";
import Tailwind from "../../assets/tailwind.png";
import Sass from "../../assets/sass.png";
import Git from "../../assets/git.png";

const About = () => {
  return (
    <div className="about-container">
      <div className="top-about-container">
        <div className="top-about-title-one"> About me</div>
        <div className="top-about-title-two"> Here is my story;</div>
        <div className="top-about-prgrph">
          {" "}
          Hi, I'm Sabra Akhavan. A front-end web developer from Iran. I enjoy
          seeking out creative solutions to complex problems. It was back in
          late 2021 when I got interested in Web Development and decided to
          learn HTML & CSS. Fast forward to today, I learned various web
          technologies and their best practices and built projects. I love
          programming because it is so practical, and I can solve real-world
          challenges with it. For me, programming is a tool to express myself in
          a creative way. Plus, there is so much to explore that always keeps me
          excited!
          <br />
          <br />
          In my free time, I get inspiration from other people's work and try
          out new technologies to build side projects. Apart from that, I also
          read books, Paint, watch movies, practice Adobes and so on.
        </div>
      </div>
      <div className="bottom-about-container">
        <div className="bottom-about-title"> Skills & Tools: </div>
        <div className="bottom-about-icons">
          <img src={HTML} alt="..." className="img-in-about" />
          <img src={CSS} alt="..." className="img-in-about" />
          <img src={JS} alt="..." className="img-in-about" />
          <img src={RT} alt="..." className="img-in-about" />
          <img src={Tailwind} alt="..." className="img-in-about" />
          <img src={Sass} alt="..." className="img-in-about" />
          <img src={Git} alt="..." className="img-in-about" />
        </div>
      </div>
    </div>
  );
};

export default About;
