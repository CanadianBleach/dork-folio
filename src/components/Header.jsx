import { Link } from "react-router-dom";
import "../assets/css/header.css";

function Header() {
  return (
    <>
      <div className="cont">
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
      </div>
    </>
  );
}

export default Header;
