import React from "react"; //imports react
import { NavLink } from "react-router-dom";
// import logo from "../imgs/bc.png";


class Nav extends React.Component {
  render() {
    return (
      <nav>
        <div className="menu">
          <NavLink
            exact={true}
            className="navLinkText hover"
            activeClassName="linkActive"
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className="navLinkText hover"
            activeClassName="linkActive"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="navLinkText hover"
            activeClassName="linkActive"
            to="/events"
          >
            Events
          </NavLink>

          <NavLink
            className="navLinkText hover"
            activeClassName="linkActive"
            to="/apply"
          >
            Apply
          </NavLink>
          {/* Logo link removed for simplicity */}
        </div>
      </nav>
    );
  }
}

export default Nav;
