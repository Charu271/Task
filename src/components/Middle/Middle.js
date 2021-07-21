import React, { Component } from "react";
import emp1 from "../../assets/emp1.jpeg";
import emp2 from "../../assets/emp2.jpeg";
import emp3 from "../../assets/emp3.jpeg";

class Middle extends Component {
  render() {
    return (
      <div>
        <img src={emp1} />
        <div>
          When we onboard our employees, its really quick and easy. We get to
          focus on making sure that they're okay and happy and being introduced
          to the company.
        </div>
        <div>
          <div>
            <img src={emp3} />
          </div>
          <div>
            <img src={emp2} />
          </div>
          <div>
            <img src={emp1} />
          </div>
          <div>
            <img src={emp2} />
          </div>
          <div>
            <img src={emp3} />
          </div>
        </div>
      </div>
    );
  }
}

export default Middle;
