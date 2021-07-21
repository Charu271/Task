import React from "react";
import "./HRManage.css";

function HRManage() {
  return (
    <div className="managecontainer" style={{ marginTop: "100px" }}>
      <div className="manageleft">
        <div className="manageheading">
          <h1>
            <span>HR</span> Manage your people with ease
          </h1>
        </div>
        <div className="manageleftBottom">
          <div className="manageaddCandidate">
            <h2>Add a candidate</h2>
            <div className="managecandidateList">
              <div>
                <p></p>
                <p></p>
              </div>
              <div>
                <p></p>
                <p></p>
              </div>
              <div>
                <p></p>
                <p></p>
              </div>
              <div>
                <p></p>
                <p></p>
              </div>
            </div>
          </div>
          <div className="managereview">
            <h2>Review your offer letter for Jillian Wilde</h2>
            <div>
              <p></p>
              <p></p>
            </div>
          </div>
          <div className="manageletter">
            <h2>Dear Jillian Wilde,</h2>
            <div className="manageletterBottom">
              <div className="manageletterBottomLeft">
                <div>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
                <div>
                  <p></p>
                  <p></p>
                </div>
                <div>
                  <p></p>
                  <p></p>
                  <p></p>
                  <p></p>
                </div>
                <div>
                  <p></p>
                  <p></p>
                </div>
              </div>
              <div className="manageletterBottomRight">
                <div>
                  <p>Position</p>
                  <h3>Manager</h3>
                </div>
                <div>
                  <p>Salary</p>
                  <h3>$999.00 Per Week</h3>
                </div>
                <div>
                  <p>Joining Date</p>
                  <h3>August 01,2021</h3>
                </div>
                <div>
                  <p>Employer</p>
                  <h3>Rose Amador</h3>
                </div>
                <button>SEND OFFER</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="manageright">
        <div className="managejobDetails">
          <h2>Job Details</h2>
          <div>
            <h3>Job Title</h3>
            <div>
              <p>Class Instructor</p>
              <p>
                <img
                  src="https://e7.pngegg.com/pngimages/930/741/png-clipart-round-green-check-mark-illustration-check-mark-bottle-material-green-tick-miscellaneous-angle.png"
                  alt=""
                />
              </p>
            </div>
          </div>
          <div>
            <h3>DepartMent</h3>
            <div>
              <p>Fitness Training</p>
              <p>
                <img
                  src="https://e7.pngegg.com/pngimages/930/741/png-clipart-round-green-check-mark-illustration-check-mark-bottle-material-green-tick-miscellaneous-angle.png"
                  alt=""
                />
              </p>
            </div>
          </div>
          <div>
            <h3>Work Location</h3>
            <div>
              <p>Los Angeles</p>
              <p>
                <img
                  src="https://e7.pngegg.com/pngimages/930/741/png-clipart-round-green-check-mark-illustration-check-mark-bottle-material-green-tick-miscellaneous-angle.png"
                  alt=""
                />
              </p>
            </div>
          </div>
          <div>
            <h3>Classification</h3>
            <div>
              <p>Independent Contractor</p>
              <p>
                <img
                  src="https://e7.pngegg.com/pngimages/930/741/png-clipart-round-green-check-mark-illustration-check-mark-bottle-material-green-tick-miscellaneous-angle.png"
                  alt=""
                />
              </p>
            </div>
          </div>
          <div>
            <h3>Hire Date</h3>
            <div>
              <p>01/08/2020</p>
              <p>
                <img
                  src="https://e7.pngegg.com/pngimages/930/741/png-clipart-round-green-check-mark-illustration-check-mark-bottle-material-green-tick-miscellaneous-angle.png"
                  alt=""
                />
              </p>
            </div>
          </div>
        </div>
        <div className="manageempDirectory">
          <div className="managehead">
            <h2>Employee Directory</h2>
            <p>Show All</p>
          </div>
          <div className="manageprofiles">
            <div className="manageprofile">
              <img
                src="https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-.jpg"
                alt=""
              />
              <h3>Naomi Brett</h3>
              <p>Software Engineer </p>
              <p>Full Time</p>
              <p>Sanfransisco</p>
            </div>
            <div className="manageprofile">
              <img
                src="https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-.jpg"
                alt=""
              />
              <h3>Naomi Brett</h3>
              <p>Software Engineer </p>
              <p>Full Time</p>
              <p>Sanfransisco</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HRManage;
