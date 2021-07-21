import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import "./Top.css";
import img1 from "../../assets/img1.PNG";
class Top extends Component {
  render() {
    return (
      <div>
        <div className="top">
          <Navbar />
        </div>
        <div className="right row">
          <div className="col-12 col-sm-7">
            <div className="btn">
              Try for Free Now!&nbsp;&nbsp;&nbsp;&nbsp;&gt;
            </div>
            <div className="top-text">
              Set your Buisness Up with modern payroll, benefits, and Hr
            </div>
            <div className="email">
              <span className="at">@&nbsp;</span>
              <span>
                <input type="text" placeholder="Your email address" />
              </span>
              <button>Get Started</button>
            </div>
            <div className="bottom-text">
              Our plans were built to fit your unique needs. Streamline
              onboarding, benefits, payroll, PTO and more with our simple,
              intuitive platform.
            </div>
          </div>
          <div className="col-12 col-sm-5">
            <img src={img1} className="img-right" />
          </div>
        </div>
      </div>
    );
  }
}

export default Top;
