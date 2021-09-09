import React, { useRef, useEffect, useState } from 'react';
import ProBarPieces from "./ProBarPieces.jsx";

function ProgressBar(props){
  if (props.curStage == 0){
    return(
      <ProBarPieces color1 = "#71A8FF" color2 = "#7F8187" color3 = "#7F8187"
      txtcolor1 = "#71A8FF" txtcolor2 = "white" txtcolor3 = "white"/>
    )
  }
  else if(props.curStage == 1){
    return(
      <ProBarPieces color1 = "#71A8FF" color2 = "#71A8FF" color3 = "#7F8187"
      txtcolor1 = "#71A8FF" txtcolor2 = "#71A8FF" txtcolor3 = "white"/>
    )
  } else if(props.curStage == 2 || props.curStage == 3){
    return(
      <ProBarPieces color1 = "#71A8FF" color2 = "#71A8FF" color3 = "#71A8FF"
      txtcolor1 = "#71A8FF" txtcolor2 = "#71A8FF" txtcolor3 = "#71A8FF"/>
    )
  } 
}

export default ProgressBar;