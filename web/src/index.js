import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import SceneThree from "./components/SceneThree";
import SceneThree2 from "./components/SceneThree";
import About from "./components/About";
import Nav from "./components/Nav";
import Apply from "./components/Apply";
import Team from "./components/Team";
import Events from "./components/Events";
import PrevEvents from "./components/PrevEvents";
import Footer from "./components/Footer";
ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/team">
        <Nav />
        <Team />
        <Footer />
      </Route>
      <Route path="/about">
        <Nav />
        <About />
        <Footer />
      </Route>
      <Route path="/apply">
        <Nav />
        <Apply />
        <Footer />
      </Route>
      <Route path="/events">
        <Nav />
        <Events />
        <Footer />
      </Route>
      <Route path="/previous-events">
        <Nav />
        <PrevEvents />
        <Footer />
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
