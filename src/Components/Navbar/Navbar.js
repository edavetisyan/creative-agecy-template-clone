import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/img/5527f403715879bc5767fce1_hipster-white.png";
import NavLink from "../NavLink/NavLink.js";

function Navbar() {
  const [img, setImg] = useState(logo);
  return (
    <div className="nav-container">
       <a href="home" className="logo">
          <img src={img} alt="hipster-white" className="logo-name" />
        </a>
      <nav className="h-navbar">
       <NavLink linkName = "home" />
       <NavLink linkName = "about" />
       <NavLink linkName = "services" />
       <NavLink linkName = "portfolio" />
       <NavLink linkName = "contact" />
      </nav>
    </div>
  );
}

export default Navbar;
