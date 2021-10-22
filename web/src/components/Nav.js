import React from "react"; //imports react
import { NavLink } from "react-router-dom";
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
            ▲
          </NavLink>
          <NavLink
            className="navLinkText hover"
            activeClassName="linkActive"
            to="/team"
          >
            Team
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
