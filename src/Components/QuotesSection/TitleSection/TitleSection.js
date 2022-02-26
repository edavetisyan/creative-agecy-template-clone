import React, { useEffect } from "react";
import onEntry from "../../onEntry";
import "./TitleSection.css";
function TitleSection() {

  useEffect(() => {
    let options = { threshold: [0.1] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll(".animated");
    console.log(elements);
    for (let elm of elements) {
      observer.observe(elm);
    }
  }, []);
  return (
    <div className="TitleSection">
      <h2
        className="animated"
        style={{
          transform: `translateX(0px) translateY(80px)`,
          transition: `opacity 750ms ease 0s, transform 500ms ease 0s`,
          opacity: 0,
        }}
      >
        Our clients love our work
      </h2>
      <h5
        className="animated"
        style={{
          opacity: 0,
          transform: `translateX(-50px) translateY(0px)`,
          transition: "opacity 750ms ease 0s, transform 750ms ease 0s",
        }}
      >
        But don't just take our word for it...
      </h5>
    </div>
  );
}

export default TitleSection;
