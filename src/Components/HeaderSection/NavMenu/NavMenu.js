import React from "react";
import NavLink from "../NavLink/NavLink.js";
import "./NavMenu.css";
import blackLogo from "../../../assets/img/blacklogo.png";
function NavMenu({ open,setOpen }) {
  return (
    <nav
      className="navMenu-navbar"
      style={{ transform: `${open ? "translateX(0%)" : "translateX(100%)"}` }}
      onClick={()=>setOpen(!open)}
    >
      <img className="blackLogo" src={blackLogo} alt="logo" />
      <NavLink linkName="home" />
      <NavLink linkName="about" />
      <NavLink linkName="services" />
      <NavLink linkName="portfolio" />
      <NavLink linkName="contact" />
    </nav>
  );
}

export default NavMenu;
