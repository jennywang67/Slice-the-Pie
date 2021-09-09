import React, { useRef, useEffect } from 'react';

function ProBarPieces(props){
  return(
    <div className = "progress-bar">
      <svg width = "100%" height = "15">
        <text textAnchor="middle" x="10%" y="10" fill = {props.txtcolor1}className="progress-text">REVENUES</text>
        <text textAnchor="middle" x="50%" y="10" fill = {props.txtcolor2}className="progress-text">EXPENSES</text>
        <text textAnchor="middle" x="90%" y="10" fill = {props.txtcolor3}className="progress-text">COMPARE</text>
      </svg>
      <svg width = "100%" height = "30">
        <line x1 = "10%" y1 = "15" x2 = "50%" y2 = "15" stroke = {props.color2} strokeWidth="5"/>
        <circle cx = "10%" cy = "15" r = "8" fill = {props.color1}/>
        <line x1 = "50%" y1 = "15" x2 = "90%" y2 = "15" stroke = {props.color3}  strokeWidth="5"/>
        <circle cx = "50%" cy = "15" r = "8" fill = {props.color2}/>
        <circle cx = "90%" cy = "15" r = "8" fill = {props.color3}/>
      </svg>
    </div>
  )
}

export default ProBarPieces;