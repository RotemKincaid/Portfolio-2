import React, { Component } from "react";
import "./App.css";
import routes from "./routes";

import Header from "./Components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        {/* <Home />
        <Work />
        <About />
        <Contact /> */}
        {routes}
      </div>
    );
  }
}

export default App;
