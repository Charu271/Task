import React, { Component } from "react";
import "./Navbar.css";
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target="#myNavbar"
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">
              TRIPUPP HR
            </a>
          </div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="active nav-item">
                <a href="#" className="nav-link">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PAYROLL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  BENEFITS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  PRICING
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  WORK WITH US
                </a>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#" className="signin">
                  Sign In &gt;
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
