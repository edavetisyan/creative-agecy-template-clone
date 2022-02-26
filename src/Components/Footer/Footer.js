import React from "react";
import Navbar from "../HeaderSection/Navbar/Navbar";
import "./Footer.css";
function Footer() {
  return (
    <footer className="Footer">
      <div className="footer-content">
        <div className="columns">
          <img
            className="footer-logo"
            src="https://daks2k3a4ib2z.cloudfront.net/5527a015715879bc5767ece2/5527f403715879bc5767fce1_hipster-white.png"
            alt="whiteLogo"
          />
        </div>
        <div className="columns">
          <h6>menu</h6>
          <Navbar />
        </div>
        <div className="columns">
          <h6>address</h6>
          <p className="footer-text">
            <span>Suite #913</span>
            <span>Corporation Building</span>
            <span>Tibb Street</span>
            <span>Manchester</span>
            <span>M1 1TA</span>
          </p>
        </div>
        <div className="columns">
          <h6>contact</h6>
          <p className="footer-text">
            <span>E: info(at)youragency.com</span>
            <span>T: +44 800 123 456</span>
            <span>F: +44 800 123 400</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
