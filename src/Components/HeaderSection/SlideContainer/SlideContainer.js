import React from 'react'
import './SlideContainer.css'

function SlideContainer(props) {
  return (
    <div className="slide-container">
            <h1>
              {props.slides[props.current].h1.first}
              <br />
              {props.slides[props.current].h1.last}
            </h1>
            <h4> {props.slides[props.current].h4} </h4>
          </div>
  )
}

export default SlideContainer