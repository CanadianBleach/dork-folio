import { Link } from "react-router-dom";
import "../assets/css/header.css";
import Nav from "./Nav";

function Header() {
  return (
    <>
      <div className="cont p-2">
        <div className="columns">
          <div className="column m-3 subtitle">Connor Baltich</div>
          <Nav className="column" />
        </div>
      </div>
      <div className="section"></div>
    </>
  );
}

export default Header;
