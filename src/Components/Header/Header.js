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
import burger from "./menu.png";
const GitHubLink = "https://github.com/RotemKincaid";
const linkedInLink = "https://www.linkedin.com/in/rotem-kincaid";

class Header extends Component {
  constructor() {
    super();

    this.state = {
      toggle: false
    };
  }

  sideBarToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };
  render() {
    return (
      <div className="header-main">
        <button className="toggle-sidebar" onClick={() => this.sideBarToggle()}>
          {!this.state.toggle ? (
            <div className="toggle-container">
              <div className="header-line" />
              <div className="header-line" />
              <div className="header-line" />
            </div>
          ) : (
            <div className="toggle-container">
              <div className="header-line" />
              <div className="header-line" />
              <div className="header-line" />
            </div>
          )}
        </button>
        <div className={this.state.toggle ? "show" : "header-inner"}>
          <Link className="home-link" to="/">
            <img className="home-pic" src={home} alt="home" />
          </Link>
          <Link to="/about">
            <img className="me" src={me} alt="me" />
          </Link>
          <Link to="/skills">
            <img className="skills-pic" src={skills} alt="skills" />
          </Link>
          <Link to="/work">
            <img className="code-pic" src={work} alt="code" />
          </Link>
          <Link to="/contact">
            <img className="paper-plane" src={paperPlane} alt="message" />
          </Link>
        </div>
        <div className="links">
          <a href={GitHubLink}>
            <img className="github" src={github} alt="github" />
          </a>

          <a href={linkedInLink}>
            <img className="linkedin" src={linkedIn} alt="linkedin" />
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
