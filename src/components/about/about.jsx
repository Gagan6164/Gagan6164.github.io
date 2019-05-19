import React, { Component } from "react";
import "./about.scss";
import { Element } from "react-scroll";

export default class About extends Component {
  render() {
    return (
      <Element className="about" name="about">
        <center>
          <h1>ABOUT ME</h1>
          <center>
            <img
              src={require("../../static/images/section-divider.png")}
              alt="anything"
            />
          </center>
        </center>
        <div className="container">
          <div>
            <center>
              <img
                src={require("../../static/images/about-me.png")}
                alt="anything"
              />
            </center>
          </div>
          <div className="about_me">
            <h2>HELLO IT'S MY STORY</h2>
            <p>
              I am a sophomore at IIT Roorkee, studying B. Tech. Engineering
              Physics. I have a keen interest in Programming. My areas of
              interests include Machine learning and deep learning. I love to
              play with tech around me. I'm a quick learner and a problem solver
              with an experience in the web development and data science.
            </p>
            <h2>WHAT I DO ?</h2>
            <div className="grid">
              <div className="window">
                <center>
                  <img
                    src="https://img.icons8.com/ios/100/000000/artificial-intelligence.png"
                    style={{
                      height: "10vh",
                      width: "auto"
                    }}
                    alt="anything"
                  />
                  <h3>Deep Learning</h3>
                </center>
                <ul>
                  <li>Pytorch</li>
                  <li>tensorflow</li>
                  <li>NLP</li>
                  <li>Computer Vision</li>
                  <li>Machine Learning</li>
                </ul>
              </div>
              <div className="window">
                <center>
                  <img
                    src="https://img.icons8.com/ios/100/000000/developer.png"
                    style={{
                      height: "10vh",
                      width: "auto"
                    }}
                    alt="anything"
                  />
                  <h3>Competitive Programming</h3>
                </center>
                <ul>
                  <li>Data Structure</li>
                  <li>Algorithms</li>
                  <li>Numerical Analysis</li>
                  <li>Computer Vision</li>
                  <li>Machine Learning</li>
                </ul>
              </div>
              <div className="window">
                <center>
                  <img
                    src="https://img.icons8.com/ios/100/000000/atom-editor.png"
                    style={{
                      height: "10vh",
                      width: "auto"
                    }}
                    alt="anything"
                  />
                  <h3>Web development</h3>
                </center>
                <ul>
                  <li>ReactJs</li>
                  <li>Django</li>
                  <li>HTML 5</li>
                  <li>CSS 3</li>
                  <li>JavaScript</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}
