import React, { Component } from "react";
import "./Header.scss";
import home from "./Assets/home.png";
import me from "./Assets/relax.png";
import skills from "./Assets/tools.png";
import work from "./Assets/coding.png";
import paperPlane from "./Assets/paper-plane.png";
import github from "./Assets/github.png";
import linkedIn from "./Assets/linkedin-logo.png";
import { Link } from "react-router-dom";
const GitHubLink = "https://github.com/RotemKincaid";
const linkedInLink = "https://www.linkedin.com/in/rotem-kincaid";

class Header extends Component {
  render() {
    return (
      <div className="header-main">
        <Link className="home-link" to="/">
          {/* <div id="h-home"> */}
          <img className="home-pic" src={home} />
          {/* <h5 className="text">Home</h5> */}
          {/* </div> */}
        </Link>
        <Link to="/about">
          <img className="me" src={me} />
        </Link>
        <Link to="/skills">
          <img className="skills-pic" src={skills} />
        </Link>
        <Link to="/work">
          <img className="code-pic" src={work} />
        </Link>
        <Link to="/contact">
          <img className="paper-plane" src={paperPlane} />
        </Link>
        <div>
          <a href={GitHubLink}>
            <img className="github" src={github} />
          </a>
          {/* </Link> */}
          <a href={linkedInLink}>
            <img className="linkedin" src={linkedIn} />
          </a>
        </div>
        {/* <Link to="/admin">
          <div>Admin Login</div>
        </Link> */}
      </div>
    );
  }
}

export default Header;
