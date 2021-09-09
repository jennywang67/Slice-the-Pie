import React, { useRef, useEffect } from 'react';

function Circles(props){
  return(
    <div className = 'labels'>
      <div>
        <svg height = "16" width = "16">
          <circle cx = "8" cy = "8" r = "8" fill = {props.color}/>
        </svg>
      </div>
      <div className = "labelContainer">
        <label>{props.name}</label>
      </div>
      <div className = "tooltip">
        <svg width="10" height="10">
          <circle cx="5" cy="5" fill="white" r="5"/>
          <text fill="#2E2E2E" x="5" y="8" fontSize="8" textAnchor="middle">i</text>
        </svg>
        <span className = "tooltipText">{props.info}</span>
      </div>
    </div>
  )
}

export default Circles;