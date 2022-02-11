import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/img/5527f403715879bc5767fce1_hipster-white.png";

function Navbar() {
  const [img, setImg] = useState(logo);
  return (
    <div className="nav-container">
       <a href="home" className="logo">
          <img src={img} alt="hipster-white" className="logo-name" />
        </a>
      <nav className="h-navbar">
       
        <a className="nav-link" href="home">home</a>
        <a className="nav-link" href="about">about</a>
        <a className="nav-link" href="services">services</a>
        <a className="nav-link" href="portfolio">portfolio</a>
        <a className="nav-link" href="contact">contact</a>
      </nav>
    </div>
  );
}

export default Navbar;
