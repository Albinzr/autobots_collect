import React from "react";
import "./Header.css";
import logo from "../../assets/images/logoColor.png";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

const cid =
  "487221318384-mq3oc14o4r8bhq6u1odtel72f1h7mlbk.apps.googleusercontent.com";

const loginSuccess = (res) => {
  console.log("loginSuccess", res);
};

const loginFailuer = (res) => {
  console.log("loginFailuer", res);
};

export default () => {
  const openApp = () => window.open("https://app.applytics.in", "_blank");

  return (
    <div className="Header" id="header">
      <div className="h-logo">
        <img src={logo} alt="" />
        <span>Autobots.co.in</span>
      </div>
      <div className="h-navs">
        <div className="hn-nav" onClick={() => window.scrollElToView("header")}>
          Home
        </div>
        <div
          className="hn-nav"
          onClick={() => window.scrollElToView("products")}
        >
          Products
        </div>
        <div
          className="hn-nav"
          onClick={() => window.open("/tc.html", "_blank")}
        >
          Terms & conditions
        </div>
        <div
          className="hn-nav"
          onClick={() => window.open("/pp.html", "_blank")}
        >
          Privacy Policy
        </div>
        {/* <div className='hn-nav' onClick={()=> window.scrollElToView('pricing')}>Pricing.</div> */}
        {/* <div
          className="hn-nav"
          onClick={() => window.scrollElToView("contactUs")}
        >
          Contact Us.
        </div> */}
        <div>
          <GoogleOAuthProvider clientId={cid}>
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
            {/* <GoogleLogin
              onSuccess={(credentialResponse) => {
                console.log(credentialResponse);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
              useOneTap
            /> */}
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
};
