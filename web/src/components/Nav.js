import React from "react"; //imports react
import { NavLink } from "react-router-dom";
import logo from "../imgs/bc.png";


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
            to="/"
          >
            <img src={logo} className="logoNav" alt="logo" />
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
        </div>
      </nav>
    );
  }
}

export default Nav;
