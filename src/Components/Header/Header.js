import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar.js";
import Slider from "../Slider/Slider.js";
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
function Header() {
 function toggleMenu(){
   
 }
  return (
    <div className="header">
      <HamburgerMenu onClick={toggleMenu} />
      <Navbar />
      <Slider />
    </div>
  );
}

export default Header;
