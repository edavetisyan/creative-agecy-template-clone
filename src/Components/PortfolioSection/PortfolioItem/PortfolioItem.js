import React from 'react'
import './PortfolioItem.css'
function PortfolioItem(props) {
    
  return (
    <div className='PortfolioItem' onMouseEnter={()=>console.log(props)}>
        <img src={props.img} alt={props.img}  />
    </div>
  )
}

export default PortfolioItem