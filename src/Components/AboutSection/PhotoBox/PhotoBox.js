import React, { useState } from "react";
import "./PhotoBox.css";
function PhotoBox({ imgurl }) {
  return (
    <div className="photoBox-cont">
      <div
        className="photoBox"
        style={{ backgroundImage: `url(${imgurl})` }}
      ></div>
    </div>
  );
}

export default PhotoBox;
