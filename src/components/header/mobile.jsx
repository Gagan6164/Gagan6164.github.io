import React, { Component } from "react";
import { Link } from "react-scroll";
import "./mobile.scss";

export default class Header extends Component {
  componentDidMount() {
    if (window.innerWidth <= 900) {
      window.onscroll = function() {
        if (window.pageYOffset === 0) {
          document.getElementById("head_mobile").classList.remove("scroll");
        } else {
          document.getElementById("head_mobile").classList.add("scroll");
        }
      };
    }
  }
  render() {
    return (
      <div id="head_mobile" className="nav_mobile">
        <span className="nav_brand_mobile">
          <Link
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className="nav_item_brand_mobile"
          >
            Gagan Singh Saini
          </Link>
        </span>
      </div>
    );
  }
}
