import React, { useState } from "react";
import "./Header.css";
import HamburgerMenu from "../HamburgerMenu.js/HamburgerMenu";
import Slider from '../Slider/Slider.js'
import NavMenu from "../NavMenu/NavMenu";
import Navbar from "../Navbar/Navbar";
function Header() {
  const [open, setOpen] = useState(false)

  return (
    <section className="header">
      <HamburgerMenu open={open} setOpen={setOpen} />
      <NavMenu className="burgerNav" open={open} setOpen={setOpen} />
      <Navbar />
      <Slider />
    </section>
  );
}

export default Header;
