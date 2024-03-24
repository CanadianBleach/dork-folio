import React, { Component } from "react";
import "../assets/css/global.css";
import { RxLinkedinLogo } from "react-icons/rx";
import { RxGithubLogo } from "react-icons/rx";

function Footer() {
  return (
    <>
      <footer className="footer">
        <a href="https://www.linkedin.com/in/connorbaltich/" target="_blank">
          <RxLinkedinLogo className="icon m-2" />
        </a>
        <a href="https://github.com/CanadianBleach" target="_blank">
          <RxGithubLogo className="icon m-2" />
        </a>
      </footer>
    </>
  );
}

export default Footer;
