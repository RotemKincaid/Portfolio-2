import React, { Component } from "react";
import "./App.css";
import routes from "./routes";
import Header from "./Components/Header/Header";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.location.pathname === "/" ? <div /> : <Header />}
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
