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
// import burger from "./menu.png";
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

  closeToggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };
  render() {
    console.log(this.state.toggle);
    const { toggle } = this.state;
    return (
      <div className="header-main">
        <button className="toggle-sidebar" onClick={() => this.sideBarToggle()}>
          {!toggle ? (
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

        <div
          className={toggle ? "header-inner show test1" : "header-inner hide"}
        >
          {toggle ? (
            <Link to="/">
              <div className="nav-links" onClick={this.closeToggle}>
                <img className="home-pic" src={home} alt="home" />
                <h5>Home</h5>
              </div>
            </Link>
          ) : (
            <Link to="/">
              <img className="home-pic" src={home} alt="home" />
            </Link>
          )}
          {toggle ? (
            <Link to="/about">
              <div className="nav-links" onClick={this.closeToggle}>
                <img className="me" src={me} alt="me" />
                <h5>About</h5>
              </div>
            </Link>
          ) : (
            <Link to="/about">
              <img className="me" src={me} alt="me" />
            </Link>
          )}
          {toggle ? (
            <Link to="/skills">
              <div className="nav-links" onClick={this.closeToggle}>
                <img className="skills-pic" src={skills} alt="skills" />
                <h5>Skills</h5>
              </div>
            </Link>
          ) : (
            <Link to="/skills">
              <img className="skills-pic" src={skills} alt="skills" />
            </Link>
          )}
          {toggle ? (
            <Link to="/work">
              <div className="nav-links" onClick={this.closeToggle}>
                <img className="code-pic" src={work} alt="code" />
                <h5>Projects</h5>
              </div>
            </Link>
          ) : (
            <Link to="/work">
              <img className="code-pic" src={work} alt="code" />
            </Link>
          )}
          {toggle ? (
            <Link to="/contact">
              <div className="nav-links" onClick={this.closeToggle}>
                <img className="paper-plane" src={paperPlane} alt="message" />
                <h5>Contact</h5>
              </div>
            </Link>
          ) : (
            <Link to="/contact">
              <img className="paper-plane" src={paperPlane} alt="message" />
            </Link>
          )}
          <div className="links">
            {toggle ? (
              <div className="github-link">
                <a href={GitHubLink}>
                  <img className="github" src={github} alt="github" />
                  {/* <h5>My GitHub</h5> */}
                </a>
              </div>
            ) : (
              <a href={GitHubLink}>
                <img className="github" src={github} alt="github" />
              </a>
            )}
            {toggle ? (
              <div className="linkedin-link">
                <a href={linkedInLink}>
                  <img className="linkedin" src={linkedIn} alt="linkedin" />
                  {/* <h5>My LinkedIn</h5> */}
                </a>
              </div>
            ) : (
              <a href={linkedInLink}>
                <img className="linkedin" src={linkedIn} alt="linkedin" />
              </a>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
