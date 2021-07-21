import React, { Component } from "react";
import icon5 from "../../assets/icon5.PNG";
import icon6 from "../../assets/icon6.PNG";
import icon7 from "../../assets/icon7.PNG";
class Services2 extends Component {
  render() {
    return (
      <div className="row serve">
        <div className="col-12 col-sm-4 wrapper-div">
          <img src={icon5} className="icons" />
          <p className="payroll-text">
            Our benefits are designed to be accessible for all.
          </p>
        </div>
        <div className="col-12 col-sm-4 wrapper-div">
          <img src={icon6} className="icons" />
          <p className="payroll-text">
            A healthy team can better support your buisness and your bottom
            line.
          </p>
        </div>
        <div className="col-12 col-sm-4 wrapper-div">
          {" "}
          <img src={icon7} className="icons" />
          <p className="payroll-text">
            Become a buisness where talented people want to work and stay around
          </p>
        </div>
      </div>
    );
  }
}

export default Services2;
