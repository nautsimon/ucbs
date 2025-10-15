import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./components/About";
import SceneThree from "./components/SceneThree";
import Events from "./components/Events";
import Apply from "./components/Apply";
import PrevEvents from "./components/PrevEvents";
import Graduates from "./components/Graduates";

function App() {
  return (
    <Router>
      <Switch>
        {/* Home: no top nav, just the animated landing */}
        <Route exact path="/" component={SceneThree} />

        {/* All other routes: include Nav + Footer */}
        <Route
          path="/"
          render={() => (
            <>
              <Nav />
              <Switch>
                <Route exact path="/about" component={About} />
                <Route exact path="/events" component={Events} />
                <Route exact path="/apply" component={Apply} />
                <Route exact path="/previous-events" component={PrevEvents} />
                <Route exact path="/graduates/:address" component={Graduates} />
              </Switch>
              <Footer />
            </>
          )}
        />
      </Switch>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
