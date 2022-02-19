import React, { useEffect } from "react";
import "./GrayBox.css";
function GrayBox(props) {
  useEffect(() => {
    function onEntry(entry) {
      entry.forEach((change) => {
        if (change.isIntersecting) {
          if (change.target.localName === "h5") {
            setTimeout(() => {
              change.target.style.opacity = 1;
              change.target.style.transform = "translateX(0px) translateY(0px)";
            }, 750);
          } else {
            change.target.style.opacity = 1;
            change.target.style.transform = "translateX(0px) translateY(0px)";
          }
        }
      });
    }
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll(".animatedTitle");
    for (let elm of elements) {
      observer.observe(elm);
    }
  }, []);

  return (
    <div className="grayBox-cont">
      <div className="grayBox">
        <h2
          className="h2 animatedTitle"
          style={{
            transform: `translateX(0px) translateY(80px)`,
            transition: `opacity 750ms ease 0s, transform 500ms ease 0s`,
            opacity: 0,
          }}
        >
          {props.title}
        </h2>
        <h5
          className="h5 animatedTitle"
          style={{
            opacity: 0,
            transform: `translateX(-50px) translateY(0px)`,
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
