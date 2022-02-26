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
      <div className="dev-info">
       <div className="dev-container">
       <svg
          height="32"
          aria-hidden="true"
          viewBox="0 0 16 16"
          version="1.1"
          width="32"
          data-view-component="true"
          className="git-logo"
        >
          <path
            fill-rule="evenodd"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
          ></path>
        </svg>
        <a href="https://github.com/edavetisyan/creative-agecy-template-clone/tree/master">source code</a>
       </div>
      </div>
    </footer>
  );
}

export default Footer;
