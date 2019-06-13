import React, { Component } from "react";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div className="home-main">
        <div className="home-inner">
          <div className="home-pres">
            <h1 className="home-hello">Hello!</h1>
            <h1 className="home-i-am">I am</h1>
            <h1 className="home-name">Rotem Kincaid</h1>
          </div>
          <div className="home-web">A Web Developer</div>
        </div>
      </div>
    );
  }
}
export default Home;
