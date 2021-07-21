import React, { Component } from "react";
import "./HR.css";
class HR extends Component {
  render() {
    return (
      <div className="row hr">
        <div className="col-12 col-sm-5 hr-left">
          A complete HR PLatform saves You time
        </div>
        <div className="col-12 col-sm-7 hr-right">
          {" "}
          TripUpp streamlines your workflow by automatically <br />
          connecting HR, BEnefits, Payroll and scheduling, together in one
          platform. This means less time spent on low-priority tasks so your
          team can focus on more important things.
        </div>
      </div>
    );
  }
}

export default HR;
