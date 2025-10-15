import React from "react";
import { NavLink } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div className="mainDiv">
        <div className="mainMarginDiv">
          <div className="row centerRow" style={{ gap: 16 }}>
            <NavLink className="navLinkText hover" to="/about">About</NavLink>
            <NavLink className="navLinkText hover" to="/apply">Apply</NavLink>
            <NavLink className="navLinkText hover" to="/events">Events</NavLink>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;


