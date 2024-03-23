import React, { Component } from "react";
import "../assets/css/global.css";
import { RxLinkedinLogo } from "react-icons/rx";
import { RxGithubLogo } from "react-icons/rx";

function Footer() {
  return (
    <>
      <footer className="footer">
        <a>
          <RxLinkedinLogo className="icon m-2" />
        </a>
        <a>
          <RxGithubLogo className="icon m-2" />
        </a>
      </footer>
    </>
  );
}

export default Footer;
