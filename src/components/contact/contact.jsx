import React, { Component } from "react";
import "./contact.scss";
import { Element } from "react-scroll";
import {
  FiMail,
  FiPhoneCall,
  FiFacebook,
  FiLinkedin,
  FiGithub
} from "react-icons/fi";
import { GiEternalLove } from "react-icons/gi";
export default class Contact extends Component {
  render() {
    return (
      <Element className="contact" name="contact">
        <center>
          <h1>Contact me</h1>
          <center>
            <img
              src={require("../../static/images/section-divider.png")}
              alt="anything"
            />
          </center>
        </center>
        <div className="container">
          <div className="form">
            <h2>Get In Touch!</h2>
            <div className="link">
              <div className="unit">
                <a href="mailto:gsaini@ph.iitr.ac.in">
                  <FiMail />
                  &nbsp;Gsaini@ph.iitr.ac.in
                </a>
              </div>
              <div className="unit">
                <FiPhoneCall /> &nbsp;(+ 91) 9929068119
              </div>
            </div>
          </div>
          <div className="social">
            <h2>My Contact Details</h2>
            <div className="link">
              <div className="unit">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/Gagan6164"
                >
                  <FiGithub /> Github
                </a>
              </div>

              <div className="unit">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="http://www.linkedin.com/in/gagan-singh-saini123456/"
                >
                  <FiLinkedin /> Linkedin
                </a>
              </div>

              <div className="unit">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/gagansingh.saini.52"
                >
                  <FiFacebook /> Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="credits">
          Crafted with <GiEternalLove /> by Me
        </div>
      </Element>
    );
  }
}
