import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about-container">
      <div className="top-about-container">
        <div className="top-about-title-one"> About me</div>
        <div className="top-about-title-two"> Here is my story;</div>
        <div className="top-about-prgrph"> Hi, I'm Sabra Akhavan. a front-end web developer from Iran. I enjoy seeking out creative solutions to complex problems. It was back in late 2021 when I got interested in Web Development and decided to learn HTML & CSS. Fast forward to today, I learned various web technologies and their best practices and built projects.

I love programming because it is so practical, and I can solve real-world challenges with it. For me, programming is a tool to express myself in a creative way. Plus, there is so much to explore that always keeps me excited!
<br/>
<br/>
In my free time, I get inspiration from other people's work and try out new technologies to build side projects. Apart from that, I also read books, Paint, watch movies, practice Adobes and so on.
</div>
      </div>
      <div className="bottom-about-container">
        <div className="bottom-about-title"> Skills & Tools </div>
        <div className="bottom-about-icons"></div>
      </div>
    </div>
  );
};

export default About;
