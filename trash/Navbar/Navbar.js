import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-light bg-light mb-5">
        <div className="container">
          <NavLink className="navbar-brand" to={`${process.env.PUBLIC_URL}/`}>
            SoundSpeller
          </NavLink>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
