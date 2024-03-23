import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../assets/css/global.css";

function Project(props) {
  return (
    <>
      <Link to={props.link} className="card" target="_blank">
        <img className="card-image proj-img p-3" src={props.src} />
        {/*         <div className="proj">
          <div className="has-text-center">Project</div>
        </div> */}
      </Link>
    </>
  );
}

Project.propTypes = {
  link: PropTypes.string,
  src: PropTypes.string,
};

export default Project;
