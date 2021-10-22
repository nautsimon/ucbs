import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import SceneThree from "./components/SceneThree";
import SceneThree2 from "./components/ThreeScene3";
import About from "./components/About";
import Nav from "./components/Nav";
import Apply from "./components/Apply";
import Team from "./components/Team";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/team">
        <Nav />
        <Team />
      </Route>
      <Route path="/about">
        <Nav />
        <About />
      </Route>
      <Route path="/apply">
        <Nav />
        <Apply />
      </Route>
      {/* <Route path="/test">
        <SceneThree />
      </Route>
      <Route path="/test2">
        <SceneThree2 />
      </Route> */}
      <Route path="/">
        <SceneThree2 />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
