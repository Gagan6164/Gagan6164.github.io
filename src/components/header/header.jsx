import React, { Component } from "react";
import { Link } from "react-scroll";
import "./header.scss";
import Home from "../../components/home/home";
import About from "../../components/about/about";
import Skills from "../../components/skills/skills";
import Project from "../../components/projects/projects";
import Contact from "../../components/contact/contact";

export default class Header extends Component {
  componentDidMount() {
    if (window.innerWidth >= 900) {
      window.onscroll = function() {
        if (window.pageYOffset === 0) {
          document.getElementById("heade").classList.remove("scroll");
        } else {
          document.getElementById("heade").classList.add("scroll");
        }
      };
    }
  }
  render() {
    return (
      <>
        <div id="heade" className="nav">
          <span className="nav_brand">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="nav_item_brand"
            >
              Gagan Singh Saini
            </Link>
          </span>

          <span className="nav_array">
            <Link
              activeClass="nav_array_active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="nav_items"
            >
              Home
            </Link>

            <Link
              activeClass="nav_array_active"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="nav_items"
            >
              About
            </Link>

            <Link
              activeClass="nav_array_active"
              to="skills"
              spy={true}
              smooth={true}
              duration={500}
              className="nav_items"
            >
              Skills
            </Link>

            <Link
              activeClass="nav_array_active"
              to="project"
              spy={true}
              smooth={true}
              duration={500}
              className="nav_items"
            >
              Projects
            </Link>

            <Link
              activeClass="nav_array_active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="nav_items"
            >
              Contact
            </Link>
          </span>
        </div>
        <Home />
        <About />
        <Skills />
        <Project />
        <Contact />
      </>
    );
  }
}
