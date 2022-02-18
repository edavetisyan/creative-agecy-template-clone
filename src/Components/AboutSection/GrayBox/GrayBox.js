import React, { useEffect, useState } from "react";
import "./GrayBox.css";
function GrayBox(props) {
  const [translate, setTranslate] = useState(80);
  const [opacity, setOpacity] = useState(0);
  
  let animateHeadings = () => {
    setTimeout(() => {
      setOpacity(1);
      setTranslate(0);
    }, 500);
  };
  
  useEffect(() => {
    const onScroll = (e) => {
      
      if (e.target.documentElement.scrollTop) {
        animateHeadings();
      }
      // else if(e.target.location){

      // }
    };

    window.addEventListener("scroll", onScroll);
    let about = document.querySelector('#about')
    about.addEventListener('mouseover', animateHeadings)
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="grayBox-cont">
      <div className="grayBox">
        <h2
          style={{
            transform: `translateX(0px) translateY(${translate}px)`,
            transition: `opacity 750ms ease 0s, transform 500ms ease 0s`,
            opacity: opacity,
          }}
        >
          {props.title}
        </h2>
        <h5
          style={{
            opacity: opacity,
            transform: `translateX(${-translate}px) translateY(0px)`,
            transition: "opacity 750ms ease 0s, transform 750ms ease 0s",
          }}
        >
          {props.subTitle}
        </h5>
        <p>{props.paragraph}</p>
        <a className="gray-btn" href={props.href}>
          {props.button}
        </a>
      </div>
    </div>
  );
}

export default GrayBox;
