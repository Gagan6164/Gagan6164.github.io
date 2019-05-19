import React, { Component } from "react";
import { Element } from "react-scroll";
import { Link } from "react-scroll";
import "./home.scss";
import Particles from "react-particles-js";
import ReactTypingEffect from "react-typing-effect";
import Plx from "react-plx";
const ParallaxData = [
  {
    start: 0,
    duration: 650,
    properties: [
      {
        startValue: 0,
        endValue: 345,
        property: "translateY"
      },
      {
        startValue: 1,
        endValue: 0.4,
        property: "scale"
      }
    ]
  }
];
const particleData = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100
      }
    },
    opacity: {
      value: 0.9934862554381346,
      random: false,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.1,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false
      }
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onclick: {
        enable: false,
        mode: "remove"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 8,
        speed: 3
      },
      repulse: {
        distance: 200,
        duration: 0.4
      },
      push: {
        particles_nb: 4
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: false
};

export default class Home extends Component {
  render() {
    return (
      <Element name="home" className="home">
        <div className="overlay">
          <span>
            <Particles params={particleData} />
          </span>
        </div>
        <Plx className="MyAwesomeParallax" parallaxData={ParallaxData}>
          <div>
            <div className="title">Hello it's me Gagan</div>
            <div className="about_me">
              <ReactTypingEffect
                text={["AN ENGINEER.", "A DATA ANALYST.", "A DEVELOPER."]}
                staticText="I'M "
                speed="100"
                eraseDelay="100"
              />
            </div>
            <div className="abt">
              <Link
                activeClass="nav_array_active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="nav_items"
              >
                About Me
              </Link>
            </div>
          </div>
        </Plx>
      </Element>
    );
  }
}
