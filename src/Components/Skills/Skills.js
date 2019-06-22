import React, { Component } from "react";
import "./Skills.scss";
import reactLogo from "../Header/Assets/react.png";
import jsLogo from "../Header/Assets/jslogo.png";
import cssLogo from "../Header/Assets/css3-logo.png";
import htmlLogo from "../Header/Assets/html-logo.png";
import reduxLogo from "../Header/Assets/redux.png";
import postgresLogo from "../Header/Assets/postgresql-logo.png";
import gitLogo from "../Header/Assets/git-logo.png";
import sassLogo from "../Header/Assets/sass.png";
import nodeLogo from "../Header/Assets/node-icon.png";

class Skills extends Component {
  render() {
    return (
      <div className="skills-main">
        <div className="skills-inner">
          <h1>My Skills...</h1>
          <div className="skills-img-container">
            <img src={reactLogo} alt="react" />
            <img className="css-logo" src={cssLogo} alt="css" />
            <img className="js-logo" src={jsLogo} alt="js" />
            <img className="html-logo" src={htmlLogo} alt="html" />
            <img src={reduxLogo} alt="redux" />
            <img src={postgresLogo} alt="postgresql" />
            <img src={gitLogo} alt="git" />
            <img src={sassLogo} alt="sass" />
            <img className="node-icon" src={nodeLogo} alt="node" />
          </div>
          <p>
            I am a fun, creative individual, with a strong work ethic, excellent
            communication skills, and great attention to detail. I have
            experience working with React, node, PostgreSQL, Redux, HTML5, CSS,
            SASS, and other technologies. I am goal oriented and driven, and
            seeking a full time opportunity to grow my skill set and
            continuously learn.
          </p>
          <p>
            {" "}
            When I am not developing and designing, I enjoy playing or listening
            to music, nature, cooking, visiting cool new places and spending
            time with my two wonderful little humans, family and friends.
          </p>
        </div>
      </div>
    );
  }
}

export default Skills;
