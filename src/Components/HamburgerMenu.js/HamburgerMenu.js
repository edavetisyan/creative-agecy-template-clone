import React from "react";
import "./HamburgerMenu.css";
function HamburgerMenu({open, setOpen}) {
  return (
    <div className="hamburger" >
      <div className="hamburger-container" onClick={()=>setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default HamburgerMenu;
