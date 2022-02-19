import React from "react";

function InfoNumbers({ number, subtitle }) {
  return (
    <div
    id="InfoNumbers"
      className=" animatedTitle"
      style={{
        transition: "opacity 750ms ease 0s",
        opacity: 0,
      }}
    >
      <h2>{number}</h2>
      <h5>{subtitle}</h5>
    </div>
  );
}

export default InfoNumbers;
