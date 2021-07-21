import React, { Component } from "react";
import "./WhyUs.css";
class WhyUs extends Component {
  render() {
    return (
      <div className="why-wrapper">
        <div className="purple"></div>
        <div className="whyHead">Why US?</div>
        <div className="row top-div">
          <div className="col-6 col-sm-3 inner-div">
            <h4>Hire and retain top talent.</h4>
            <p>
              We make onboarding new employees ridiculously easy. On dayone,
              they're ready to go. And retaining them its easier, too, with
              advanvced HR tools like compenstaion reporting.
            </p>
          </div>
          <div className="col-6 col-sm-3 inner-div spec">
            <h4>Stay Compliant</h4>
            <p>
              Keeping a buisness compliant is made easier with Zenefits. We
              automate many of the compliance tasks and government fillings for
              you.
            </p>
          </div>
          <div className="col-6 col-sm-3 inner-div">
            <h4>Improve Productivity</h4>
            <p>
              Many of our features like self onboarding, selecting benefits, and
              signing documents happen completely online, which means your
              employees will soend more time focused on their core functions.
            </p>
          </div>
          <div className="col-6 col-sm-3 inner-div spec">
            <h4>Improve Employee Experience </h4>
            <p>
              We improve your eployees overall experience. From a mobile app
              that streamlines onboarding and requesting time off, to a modern
              experience that lets employees sign up for benefits online.{" "}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default WhyUs;
