import React, { Component } from "react";
import "./Advisor.css";
class Advisor extends Component {
  render() {
    return (
      <div className="row advice">
        <div className="col-12 col-sm-6 left-advice">
          <p>We're here to help You. Ask us anythingor schedule a demo call.</p>
        </div>
        <div className="col-12 col-sm-6 right-advice">
          <button>Talk to advisor</button>
        </div>
      </div>
    );
  }
}

export default Advisor;
