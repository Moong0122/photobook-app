import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        This Photobook shows you the 10 most recent photos from <b>Unsplash</b>
      </span>
    </div>
  );
}

export default About;
