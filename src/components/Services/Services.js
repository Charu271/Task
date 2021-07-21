import React, { Component } from "react";
import CheckIcon from "@material-ui/icons/Check";
import "./Services.css";

class Services extends Component {
  render() {
    return (
      <div className="row services">
        <div className="col-12 col-sm-4 box">
          <CheckIcon
            className="check"
            style={{ fontSize: "30px", padding: "2px" }}
          />
          &nbsp;&nbsp; Free 14-day Demo
        </div>
        <div className="col-12 col-sm-4 box">
          <CheckIcon
            className="check"
            size={30}
            style={{ fontSize: "30px", padding: "2px" }}
          />
          &nbsp;&nbsp; No Credit Card Needed
        </div>
        <div className="col-12 col-sm-4 box">
          <CheckIcon
            className="check"
            style={{ fontSize: "30px", padding: "2px" }}
          />
          &nbsp;&nbsp; No Setup
        </div>
      </div>
    );
  }
}

export default Services;
