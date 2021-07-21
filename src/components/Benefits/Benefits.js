import React, { Component } from "react";
import benefits from "../../assets/benefits.PNG";
import CheckIcon from "@material-ui/icons/Check";
import "./Benefits.css";
class Benefits extends Component {
  render() {
    return (
      <div>
        <div className="top-border"></div>
        <div className="benefits">
          <div className="row">
            <div className="col-12 benefit-container">
              <img src={benefits} className="benefit-img" />
              &emsp;
              <span className="benefit-head">Benefits</span>&emsp;
              <span className="benefit-desc">
                Finally,employee benefits for every buisness.
              </span>
            </div>
            <div className="row">
              <div className="col-12 col-sm-6" style={{ padding: "2% 10%" }}>
                <div
                  style={{
                    backgroundColor: "white",
                    borderRadius: "20px",
                    padding: "5%",
                  }}
                >
                  <h1 style={{ color: "#3b3b3b" }}>Benefits</h1>
                  <p style={{ color: "#3b3b3b" }}>
                    Select the mediacal plan that's best for you and your
                    family.
                  </p>
                  <div
                    style={{
                      height: "10px",
                      width: "100%",
                      backgroundColor: "#DFDFDF",
                      borderRadius: "6px",
                      margin: "1%",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "10px",
                      width: "80%",
                      backgroundColor: "#DFDFDF",
                      borderRadius: "6px",
                      margin: "1%",
                    }}
                  ></div>
                  <div
                    style={{
                      height: "10px",
                      width: "100%",
                      backgroundColor: "#DFDFDF",
                      borderRadius: "6px",
                      margin: "1%",
                    }}
                  ></div>
                  <div
                    style={{
                      border: "5px solid #F9A174",
                      borderRadius: "10px",
                      marginTop: "20px",
                      padding: "4%",
                    }}
                  >
                    <CheckIcon
                      style={{
                        float: "right",
                        color: "white",
                        backgroundColor: "#F9A174",
                        borderRadius: "50%",
                        fontSize: "2.5rem",
                      }}
                    />
                    <h3>Blue Cross</h3>
                    <h3>PPO Direct HSA 3K</h3>
                    <div
                      style={{
                        height: "10px",
                        width: "100%",
                        backgroundColor: "#DFDFDF",
                        borderRadius: "6px",
                        margin: "1%",
                        marginTop: "20px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "10px",
                        width: "100%",
                        backgroundColor: "#DFDFDF",
                        borderRadius: "6px",
                        margin: "1%",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "10px",
                        width: "100%",
                        backgroundColor: "#DFDFDF",
                        borderRadius: "6px",
                        margin: "1%",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "10px",
                        width: "50%",
                        backgroundColor: "#DFDFDF",
                        borderRadius: "6px",
                        margin: "1%",
                      }}
                    ></div>
                    <div style={{ color: "#3b3b3b", fontSize: "4rem" }}>
                      $393
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6" style={{ paddingRight: "7%" }}>
                <div
                  style={{
                    padding: "1%",
                    background:
                      "linear-gradient(to right,#FEEEC4,#FBC79C,#F9A174)",
                    psdding: "6%",
                    borderRadius: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "3%",
                    }}
                  >
                    <div style={{ color: "black" }}>Tripupp</div>
                    <div style={{ color: "white" }}>Benefits Card</div>
                  </div>
                  <div
                    style={{
                      color: "black",
                      fontSize: "3rem",
                      marginTop: "20px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    1234 5678 9000 0000
                  </div>
                  <div
                    className="row"
                    style={{
                      color: "grey",
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="col-6">1234</div>
                    <div className="col-6">VALID THRU 12/19</div>
                  </div>
                  <div
                    style={{
                      fontSize: "1.5rem",
                      marginTop: "20px",
                      padding: "3%",
                    }}
                  >
                    MICHEAL WILLIAMS
                    {/* <img src={} /> */}
                  </div>
                </div>
                <div
                  style={{
                    backgroundColor: "white",
                    marginTop: "10px",
                    borderRadius: "10px",
                    padding: "3%",
                  }}
                >
                  <div>
                    <h3>Benefits</h3>
                  </div>
                  <div style={{ fontWeight: "bold" }}>
                    Here's A summary of the plans selected
                  </div>
                  <div className="row">
                    <div
                      className="col-4"
                      style={{ padding: "1%", boxShadow: "2px 2px  2px grey" }}
                    >
                      <div></div>
                      <div>
                        <h6>Medical</h6>
                        <h6>$393.23</h6>
                      </div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div>
                        <button>Plan Detail</button>
                        <button>Change Detail</button>
                      </div>
                    </div>
                    <div className="col-4">
                      <div></div>
                      <div>
                        <h3>Medical</h3>
                        <h3>$393.23</h3>
                      </div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div>
                        <button>Plan Detail</button>
                        <button>Change Detail</button>
                      </div>
                    </div>
                    <div className="col-4">
                      <div></div>
                      <div>
                        <h3>Medical</h3>
                        <h3>$393.23</h3>
                      </div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div>
                        <button>Plan Detail</button>
                        <button>Change Detail</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="bottom-border"></div>
      </div>
    );
  }
}

export default Benefits;
