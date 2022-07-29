import React, { useState } from "react";
import "./Footer.css";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import logo from "../../assets/images/logoColor.png";

export default () => {
  const [newsLetterMail, setNewsLetterMail] = useState("");

  return (
    <div className="Footer">
      <div className="f-bg">
        <svg
          viewBox="0 0 1324 534"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1217.57 1.54934L-16.1456 116.047L-171.003 135.296V726.904L1492.8 735.669C1426.44 516.904 1291.05 70.7827 1280.37 36.42C1269.69 2.05729 1238.71 -1.19925 1217.57 1.54934Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1445.61"
              y1="183.61"
              x2="-124.105"
              y2="474.979"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#DEE5FF" />
              <stop offset="1" stopColor="#EDEDED" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <ContentWrapper>
        <div className="f-head-wrapper">
          <div className="f-head">
            <div className="fh-text">
              {/* <div className="fht-heading">Ready to get started?</div>
              <div className="fht-desc">
                Unlock the power of understanding your users and get the next
                level analytics from it!
              </div> */}
            </div>
            <div className="fh-buttons">
              {/* <div className="fhb-button">Start Now</div>
              <div className="fhb-button -lite">Contact Us</div> */}
            </div>
          </div>
        </div>
        <div className="f-content-wrapper" id="contactUs">
          <div className="f-content">
            <div className="fc-about">
              <div className="fca-logo">
                <img src={logo} alt="" />
                <span>Autobots.co.in</span>
              </div>
              <div className="fca-desc">Do what excite!</div>
              {/* <div className='fca-contact'>+91 8765 543 321</div> */}
              {/* <div className='fca-contact'>support@applytics.in</div>  */}
            </div>
            <div className="fc-link">
              <div className="fc-heading">Quick Links</div>
              <div
                className="fc-sub"
                onClick={() => window.scrollElToView("header")}
              >
                About Us
              </div>
              {/* <div className="fc-sub" onClick={() => window.contactUs()}>
                Contact Us
              </div> */}
              <div
                className="fc-sub"
                onClick={() => window.scrollElToView("products")}
              >
                Products
              </div>
              <div
                className="fc-sub"
                onClick={() => window.open("/tc.html", "_blank")}
              >
                Terms & conditions
              </div>
              <div
                className="fc-sub"
                onClick={() => window.open("/pp.html", "_blank")}
              >
                Privacy Policy
              </div>
              {/* <div className='fc-sub' onClick={()=> window.scrollElToView('pricing')}>Pricing Plans</div> */}
              {/* <div className='fc-sub'>FAQ's</div> */}
            </div>
            <div className="fc-sm">
              {/* <div className="fc-heading">News Letter</div>
              <div className="fc-input">
                <input
                  placeholder="Your Email"
                  value={newsLetterMail}
                  onChange={(e) => setNewsLetterMail(e.target.value)}
                />
                <div
                  className="fci-button"
                  onClick={() => setNewsLetterMail("")}
                >
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.4673 0.412598L0.796509 8.84038L5.55404 11.4227L10.9912 8.02452L7.45706 12.782V17.5396L10.9912 13.5976L14.2535 15.6366L18.4673 0.412598Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div> */}
              {/* <div className="fcsm-buttons">
                <div className='fcsmb-button'><i className='fab fa-facebook-square'></i></div>
                <div className='fcsmb-button'><i className='fab fa-instagram-square'></i></div>
                <div className='fcsmb-button'><i className='fab fa-twitter-square'></i></div>
              </div> */}
            </div>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};
