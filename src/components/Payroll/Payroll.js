import React, { Component } from "react";
import icon1 from "../../assets/icon1.PNG";
import icon2 from "../../assets/icon2.PNG";
import icon3 from "../../assets/icon3.PNG";
import icon4 from "../../assets/icon4.PNG";
import payroll from "../../assets/payroll.PNG";
import "./Payroll.css";

class Payroll extends Component {
  render() {
    return (
      <div className="row payroll">
        <div className="col-12 outer-div">
          <img src={payroll} style={{ height: "40px", width: "40px" }} />
          &emsp;
          <span className="payroll-head">Payroll</span>&emsp;
          <span className="payroll-desc">
            {" "}
            Payroll that's easy to use and seriously smart.
          </span>
        </div>
        <div className="col-12">
          <div className="row">
            <div className="col-12 col-sm-2 col-md-3 payroll-container">
              <div>
                <img src={icon1} />
              </div>
              <div className="payroll-text">
                Unlimitedpayrolls. Clear pricing. No surprises.
              </div>
            </div>
            <div className="col-12 col-sm-2 col-md-3 payroll-container">
              <div>
                <img src={icon2} />
              </div>
              <div className="payroll-text">
                Automatically files your payroll taxes
              </div>
            </div>
            <div className="col-12 col-sm-2 col-md-3 payroll-container">
              <div>
                <img src={icon3} />
              </div>
              <div className="payroll-text">
                Everything you need synced with payroll.
              </div>
            </div>
            <div className="col-12 col-sm-2 col-md-3 payroll-container">
              <div>
                <img src={icon4} />
              </div>
              <div className="payroll-text">
                Compliance, accuracy, and peace of mind.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Payroll;
