import React, { Component } from "react";
import "./About.scss";
import skills from "./skills2.png";
import me from "./mePic.jpg";
// import WOW from "wow.js";
class About extends Component {
  // componentDidMount() {
  //   const wow = new WOW.WOW();
  //   wow.init();
  // }
  render() {
    return (
      <div className="about-main">
        <div className="about-inner">
          <div className="paragraphs">
            <h1 className="about-me wow bounce">About me...</h1>
            <br />
            <p className="about-1">
              I am a passionate, creative, and dedicated Web Developer. I
              recently graduated from DevMountain Web Development program, and I
              am currently seeking a full time employment opportunity with a
              company that is looking for a Web Developer that has a positive
              drive to continuously learn and contribute to the organizational
              goals.
            </p>
            <br />
            <p className="about-2">
              I bring many years of experience in software sales, customer
              service and support with me, in addition to my newly acquired
              skills learned at Dev Mountain, which would include React js,
              JavaScript, HTML, CSS/SASS, PostgreSQL, Node js, Express, and
              Redux, among other technologies.
            </p>
          </div>
          <div className="about-side">
            <img className="me-pic" src={me} alt="me" />
            <img className="skills-icons" src={skills} alt="skills" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
