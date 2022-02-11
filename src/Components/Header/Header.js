import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar.js";
import Slider from "../Slider/Slider.js";
function Header() {
  return (
    <div className="header">
      <Navbar />
      <Slider />
    </div>
  );
}

export default Header;
