import React, { Component } from "react";
import "./Footer.css";
class Footer extends Component {
  render() {
    return (
      <div className="footer row">
        <div className="col-12 col-sm-4">
          <h3 className="footer-head">All-in-one-platform</h3>
          <ul>
            <li>Payroll</li>
            <li>Employee benefits</li>
            <li>Health insurance</li>
            <li>Financial benefits</li>
            <li>Hiring and onboarding</li>
            <li>Expert HR</li>
            <li>Time tracking tools</li>
            <li>Workers' comp</li>
            <li>Integrations</li>
            <li>GUsto Wallet</li>
            <li>Gusto Partner offers</li>
          </ul>
        </div>
        <div className="col-12 col-sm-4">
          <h3 className="footer-head">Tools</h3>
          <ul>
            <li>Small Buisness Financial Relief</li>
            <li>Employer tax calculator</li>
            <li>Burn rate Calculator</li>
            <li>Salary Comparison tool</li>
            <li>Hiring and onboarding</li>
            <li>New hire checklist</li>
            <li>Time tracking tools</li>
            <li>Small buisness guides</li>
          </ul>
          <div
            style={{
              color: "#3b3b3b",
              fontSize: "2rem",
              fontWeight: "bolder",
              marginTop: "40px",
            }}
          >
            <div>
              Social{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Ebene 1"
                height="35"
                width="35"
                viewBox="0 0 1024 1024"
                style={{ margin: "2%", marginBottom: "-10px" }}
              >
                <path
                  fill="#1877f2"
                  d="M1024,512C1024,229.23016,794.76978,0,512,0S0,229.23016,0,512c0,255.554,187.231,467.37012,432,505.77777V660H302V512H432V399.2C432,270.87982,508.43854,200,625.38922,200,681.40765,200,740,210,740,210V336H675.43713C611.83508,336,592,375.46667,592,415.95728V512H734L711.3,660H592v357.77777C836.769,979.37012,1024,767.554,1024,512Z"
                />
                <path
                  fill="#fff"
                  d="M711.3,660,734,512H592V415.95728C592,375.46667,611.83508,336,675.43713,336H740V210s-58.59235-10-114.61078-10C508.43854,200,432,270.87982,432,399.2V512H302V660H432v357.77777a517.39619,517.39619,0,0,0,160,0V660Z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="32"
                width="32"
                viewBox="0 0 28.87 28.87"
                style={{ margin: "2%", marginBottom: "-10px" }}
              >
                <defs>
                  <linearGradient
                    id="a"
                    x1="-1.84"
                    x2="32.16"
                    y1="30.47"
                    y2="-3.03"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0" stop-color="#fed576" />
                    <stop offset=".26" stop-color="#f47133" />
                    <stop offset=".61" stop-color="#bc3081" />
                    <stop offset="1" stop-color="#4c63d2" />
                  </linearGradient>
                </defs>
                <g data-name="Layer 2">
                  <g data-name="Layer 1">
                    <rect
                      width="28.87"
                      height="28.87"
                      fill="url(#a)"
                      rx="6.48"
                      ry="6.48"
                    />
                    <g data-name="&lt;Group&gt;">
                      <path
                        fill="#fff"
                        d="M10 5h9c.2.1.5.1.7.2a4.78 4.78 0 0 1 3.8 3.3 8 8 0 0 1 .3 1.5v8.8a6.94 6.94 0 0 1-1.2 3.1 5.51 5.51 0 0 1-4.5 1.9h-7.5a5.49 5.49 0 0 1-3.7-1.2A5.51 5.51 0 0 1 5 18.14v-7a7.57 7.57 0 0 1 .1-1.5 4.9 4.9 0 0 1 3.8-4.3zm-3.1 9.5v3.9a3.42 3.42 0 0 0 3.7 3.7q3.9.15 7.8 0c2.3 0 3.6-1.4 3.7-3.7q.15-3.9 0-7.8a3.52 3.52 0 0 0-3.7-3.7q-3.9-.15-7.8 0a3.42 3.42 0 0 0-3.7 3.7z"
                        data-name="&lt;Compound Path&gt;"
                      />
                      <path
                        fill="#fff"
                        d="M9.64 14.54a4.91 4.91 0 0 1 4.9-4.9 5 5 0 0 1 4.9 4.9 4.91 4.91 0 0 1-4.9 4.9 5 5 0 0 1-4.9-4.9zm4.9-3.1a3.05 3.05 0 1 0 3 3 3 3 0 0 0-3-3z"
                        data-name="&lt;Compound Path&gt;"
                      />
                      <path
                        fill="#fff"
                        d="M18.34 9.44a1.16 1.16 0 0 1 1.2-1.2 1.29 1.29 0 0 1 1.2 1.2 1.2 1.2 0 0 1-2.4 0z"
                        data-name="&lt;Path&gt;"
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div style={{ marginTop: "17px" }}>
              Contact <span style={{ color: "red" }}>0012576469</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-4">
          <h3 className="footer-head">About Gusto</h3>
          <ul>
            <li>About</li>
            <li>
              Careers - <span style={{ color: "red" }}>We're hiring!</span>
            </li>
            <li>Press</li>
            <li>Contact</li>
            <li>Investors</li>
            <li>Affiliate program</li>
          </ul>
        </div>
        <div></div>
      </div>
    );
  }
}

export default Footer;
