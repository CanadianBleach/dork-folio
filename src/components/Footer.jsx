import React, { Component } from "react";
import "../assets/css/global.css";

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>connor.baltich@gmail.com</p>
          </div>

          <div className="columns">
            <div className="column">
              <h4
                className="bd-footer-title  
                 has-text-weight-medium 
                 has-text-left"
              >
                GeeksforGeeks
              </h4>

              <p
                className="bd-footer-link  
                has-text-left"
              >
                GeeksforGeeks is a web portal for geeks who wants to learn about
                Computer Science and want to see Tutorials, Articles, etc.
              </p>
            </div>

            <div className="column">
              <h4
                className="bd-footer-title  
                 has-text-weight-medium  
                 has-text-justify"
              >
                Explore
              </h4>

              <p className="bd-footer-link">
                <a href="https://">
                  <span className="icon-text">
                    <span>Practice</span>
                  </span>
                </a>
                <br />
                <a href="https://">
                  <span className="icon-text">
                    <span>Blogs</span>
                  </span>
                </a>
                <br />
                <a href="https://">
                  <span className="icon-text">
                    <span>Careers</span>
                  </span>
                </a>
              </p>
            </div>

            <div className="column">
              <h4
                className="bd-footer-title 
                 has-text-weight-medium 
                 has-text-justify"
              >
                Contact us
              </h4>

              <p className="bd-footer-link">
                <a href="https://">
                  <span className="icon-text">
                    <span>Email</span>
                  </span>
                </a>
                <br />
                <a href="https://">
                  <span className="icon-text">
                    <span>Call Us</span>
                  </span>
                </a>
                <br />
                <a href="https://">
                  <span className="icon-text">
                    <span>Chat with us!</span>
                  </span>
                </a>
              </p>
            </div>
          </div>
        </footer>
      </>
    );
  }
}
