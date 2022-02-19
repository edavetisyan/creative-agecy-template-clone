import React from "react";

function ServiceCard(cardData) {
  return (
    <div
      style={{
        transition: "all 0.75s ease 0s, opacity 750ms ease 0s, transform 750ms ease 0s",
        opacity: 0,
        transform: "translateX(0px) translateY(100px)"
      }}
      className={`ServiceCard-cont animatedCard ${cardData.className}`}
    >
      <div className="ServiceCard">
        <img src={cardData.imgUrl} alt={cardData.imgUrl} />
        <h2>{cardData.title}</h2>
        <p>{cardData.par}</p>
      </div>
    </div>
  );
}

export default ServiceCard;
