import React, { useState } from "react";
import "./PortfolioItem.css";
function PortfolioItem(props) {
  const [opacity, setOpacity] = useState(false);
  return (
    <div
      className="PortfolioItem"
      onMouseEnter={() => setOpacity((prev) => !prev)}
      onMouseLeave={() => setOpacity((prev) => !prev)}
    >
      <img src={props.img} alt={props.img} />
      <div className="hover-inner" >
        <div className="color" style={{ opacity: opacity ? 1 : 0}}>
          <div className="inner-portfolio">
            <p>
              <span>
                PORTFOLIO TITLE
                <br />
                Branding, Web Design
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioItem;
