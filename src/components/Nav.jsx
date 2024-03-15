import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <>
        {" "}
        <nav className="navbar" role="navigation" aria-label="main navigation">
          <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
              <Link to="../" className="navbar-item">
                Home
              </Link>
              <Link to="../about" className="navbar-item">
                About
              </Link>
            </div>
          </div>

          <div className="navbar-end">
            <Link to="../contact" className="navbar-item">
              Contact
            </Link>
          </div>
        </nav>
      </>
    );
  }
}
