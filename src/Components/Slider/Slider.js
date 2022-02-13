import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import _slides from "../../slides.json";
import "./Slider.css";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function Slider() {
  // json slides to object
  let slides = JSON.parse(JSON.stringify(_slides));

  // pushing object into array for indexing
  let imgArray = [];
  for (const key in slides) {
    imgArray.push(slides[key]);
  }
  // set state for slide
  let [state, setState] = useState(0);

  //slide animation on load

  const timeoutRef = useRef(null);
  const delay = 5500;
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setState((prevIndex) =>
          prevIndex < imgArray.length - 1 ? prevIndex + 1 : 0
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [state]);

  // next slide function
  function nextSlide() {
    state >= imgArray.length - 1
      ? setState((state = 0))
      : setState((prev) => prev + 1);
  }

  // previous slide function
  function prevSlide() {
    state <= 0
      ? setState((state = imgArray.length - 1))
      : setState((prev) => prev - 1);
  }

  return (
    <div className="slider-wrapper">
      <div className="slider-container">
        <div
          className="arrow-container left-arrow-container"
          onClick={prevSlide}
        >
          <FontAwesomeIcon className="leftArrow" icon={faChevronLeft} />
        </div>

        <div
          className="slide"
          data-active="active"
          style={{ backgroundImage: `url(${imgArray[state].img})` }}
        >
          <div className="slide-container">
            <h1>
              {imgArray[state].h1.first}
              <br />
              {imgArray[state].h1.last}
            </h1>
            <h4> {imgArray[state].h4} </h4>
          </div>
        </div>
        <div
          className="arrow-container right-arrow-container"
          onClick={nextSlide}
        >
          <FontAwesomeIcon className="rightArrow" icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
}

export default Slider;
