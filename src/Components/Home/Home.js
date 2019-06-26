import React, { Component } from "react";
import { Spring, animated } from "react-spring/renderprops";
import { Link } from "react-router-dom";
import "./Home.scss";

class Home extends Component {
  render() {
    // const props = Spring({ opacity: 1, from: { opacity: 0 } });
    return (
      <div className="home-main">
        <div className="home-inner">
          <div className="home-pres">
            <Spring
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              config={{ delay: 800, duration: 1000 }}
            >
              {props => (
                <h1 className="home-hello" style={props}>
                  Hello!
                </h1>
              )}
            </Spring>
            <Spring
              from={{ margin: -500 }}
              to={{ margin: 0 }}
              config={{ delay: 1300, duration: 1000 }}
            >
              {props => (
                <h1 className="home-i-am" style={props}>
                  I am
                </h1>
              )}
            </Spring>
            <Spring
              from={{ marginLeft: "-500px" }}
              to={{ marginLeft: 0 }}
              config={{ delay: 1900, duration: 1000 }}
            >
              {prop => (
                <h1 style={prop} className="home-name">
                  Rotem Kincaid
                </h1>
              )}
            </Spring>
          </div>
          <Spring
            from={{ opacity: 0, marginBottom: "-300px" }}
            to={{ opacity: 1, marginBottom: "100px" }}
            config={{ delay: 2500, duration: 2000 }}
          >
            {props => (
              <animated.div style={props} className="home-web">
                A Full Stack Web Developer
              </animated.div>
            )}
          </Spring>
          <Spring
            from={{ opacity: 0, marginRight: "-300px" }}
            to={{ opacity: 1, marginRight: "0" }}
            config={{ delay: 3000, duration: 2000 }}
          >
            {props => (
              <Link to="/about">
                <button style={props}>More about me -></button>
              </Link>
            )}
          </Spring>
        </div>
      </div>
    );
  }
}

export default Home;
