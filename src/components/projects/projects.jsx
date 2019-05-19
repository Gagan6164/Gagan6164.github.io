import React, { Component } from "react";
import "./projects.scss";
import { Element } from "react-scroll";

export default class Projects extends Component {
  render() {
    return (
      <Element className="project" name="project">
        <center>
          <h1>My Projects</h1>
          <center>
            <img
              src={require("../../static/images/section-divider.png")}
              alt="anything"
            />
          </center>
        </center>
      </Element>
    );
  }
}
