import React from "react";
import "./HamburgerMenu.css";
function HamburgerMenu({open, setOpen}) {
  return (
    <div className="hamburger"onClick={()=>setOpen(!open)} >
      <div className="hamburger-container" >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default HamburgerMenu;
