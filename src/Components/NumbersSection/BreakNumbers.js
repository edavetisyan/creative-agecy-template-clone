import React, { useEffect } from 'react'
import './BreakNumbers.css'
import InfoNumbers from './InfoNumbers'
import _numInfo from '../../Data/numberInfo.json'
import onEntry from '../onEntry';
function BreakNumbers() {
    useEffect(() => {
        let options = { threshold: [0.5] };
        let observer = new IntersectionObserver(onEntry, options);
        let elements = document.querySelectorAll(".animatedTitle");
        for (let elm of elements) {
          observer.observe(elm);
        }
      }, []);
  return (
    <div className='BreakNumbers'>
        <InfoNumbers number={_numInfo.coffe.num} subtitle={_numInfo.coffe.text} />
        <InfoNumbers number={_numInfo.bicycle.num} subtitle={_numInfo.bicycle.text} />
        <InfoNumbers number={_numInfo.brainstorm.num} subtitle={_numInfo.brainstorm.text} />
        <InfoNumbers number={_numInfo.video.num} subtitle={_numInfo.video.text} />
    </div>
  ) 
}

export default BreakNumbers