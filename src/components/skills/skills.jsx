import React, { Component } from "react";
import "./skills.scss";
import { Element } from "react-scroll";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { easeQuadInOut } from "d3-ease";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

export default class Skills extends Component {
  render() {
    return (
      <Element className="skills" name="skills">
        <center>
          <h1>SKILLS</h1>
          <center>
            <img
              src={require("../../static/images/section-divider.png")}
              alt="anything"
            />
          </center>
        </center>
        <div className="column">
          <div className="row">
            <div className="linear">
              <div>Python</div>
              <div className="lang">
                <Progress percent={95} />
              </div>
            </div>
            <div className="linear">
              <div>Matlab</div>
              <div className="lang">
                <Progress percent={90} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="linear">
              <div>Fortran77</div>
              <div className="lang">
                <Progress percent={81} />
              </div>
            </div>
            <div className="linear">
              <div>Javascript</div>
              <div className="lang">
                <Progress percent={50} />
              </div>
            </div>
          </div>
        </div>
        <center>
          <h3>MORE SKILLS</h3>
        </center>
        <div className="grid">
          <div>
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={91}
              duration={1.7}
              easingFunction={easeQuadInOut}
              repeat={false}
            >
              {value => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "#ffffff",
                      pathColor: `rgba(21, 141, 228, ${value / 100})`
                    })}
                    strokeWidth={6}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <div className="text">Leadership</div>
          </div>
          <div>
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={62}
              duration={1.7}
              easingFunction={easeQuadInOut}
              repeat={false}
            >
              {value => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "#ffffff",
                      pathColor: `rgba(21, 141, 228, ${value / 100})`
                    })}
                    strokeWidth={6}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <div className="text">Creativity</div>
          </div>
          <div>
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={68}
              duration={1.7}
              easingFunction={easeQuadInOut}
              repeat={false}
            >
              {value => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "#ffffff",
                      pathColor: `rgba(21, 141, 228, ${value / 100})`
                    })}
                    strokeWidth={6}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <div className="text">Management</div>
          </div>
          <div>
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={100}
              duration={1.7}
              easingFunction={easeQuadInOut}
              repeat={false}
            >
              {value => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "#ffffff",
                      pathColor: `rgba(21, 141, 228, ${value / 100})`
                    })}
                    strokeWidth={6}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <div className="text">Hardwork</div>
          </div>
          <div>
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={100}
              duration={1.7}
              easingFunction={easeQuadInOut}
              repeat={false}
            >
              {value => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "#ffffff",
                      pathColor: `rgba(21, 141, 228, ${value / 100})`
                    })}
                    strokeWidth={6}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <div className="text">Will Power</div>
          </div>
          <div>
            <AnimatedProgressProvider
              valueStart={0}
              valueEnd={100}
              duration={1.7}
              easingFunction={easeQuadInOut}
              repeat={false}
            >
              {value => {
                const roundedValue = Math.round(value);
                return (
                  <CircularProgressbar
                    value={value}
                    text={`${roundedValue}%`}
                    styles={buildStyles({
                      pathTransition: "none",
                      textColor: "#ffffff",
                      pathColor: `rgba(21, 141, 228, ${value / 100})`
                    })}
                    strokeWidth={6}
                  />
                );
              }}
            </AnimatedProgressProvider>
            <div className="text">Motivation</div>
          </div>
        </div>
      </Element>
    );
  }
}
