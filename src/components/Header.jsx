import { Link } from "react-router-dom";
import "../assets/css/header.css";
import Nav from "./Nav";

function Header() {
  return (
    <>
      <div className="cont">
        <Nav/>
      </div>
    </>
  );
}

export default Header;
