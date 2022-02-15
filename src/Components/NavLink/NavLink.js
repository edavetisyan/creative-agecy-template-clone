import React from "react";
import './NavLink.css'

function NavLink({linkName}) {
  return (    
    <a className="nav-link" href={"#"+linkName}>
      {linkName}
    </a>
  );
}

export default NavLink;
