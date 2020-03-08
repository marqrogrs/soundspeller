import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ isAuthenticated }) => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-dark bg-dark bg-light mb-5">
        <div className="container">
          <NavLink className="navbar-brand" to={`${process.env.PUBLIC_URL}/`}>
            SoundSpeller
          </NavLink>

          <ul className="navbar-nav">
            <li className="nav-item active">
              {isAuthenticated ? (
                <p className="d-none"></p>
              ) : (
                <NavLink
                  to={`${process.env.PUBLIC_URL}/auth`}
                  className="nav-link"
                >
                  Log In
                </NavLink>
              )}
              <span className="sr-only">(current)</span>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
