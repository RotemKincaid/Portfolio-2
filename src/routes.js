import React from "react";
import { Switch, Route } from "react-router-dom";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Work from "./Components/Work/Work";
import About from "./Components/About/About";
import AdminLogin from "./Components/AdminLogin/AdminLogin";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/skills" component={Skills} />
    <Route path="/work" component={Work} />
    <Route path="/contact" component={Contact} />
    <Route path="/admin" component={AdminLogin} />
  </Switch>
);
