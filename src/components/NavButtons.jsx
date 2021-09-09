import React, {useState, useEffect} from 'react';

function NavButtons(props){
  if (props.curStage == 0){
    return(
      <div className = "nav-buttons">
        <button onClick={props.changeState}> Next </button>
      </div>
    )
  } else if (props.curStage == 1) {
    return(
      <div className = "nav-buttons">
        <button className="compare-button" onClick={props.changeState}>Compare</button>
        <button className="previous-button" onClick={props.preState}> Previous</button>
      </div>
    )
  } else if (props.curStage == 2) {
    return(
      <div className = "nav-buttons">
        <button onClick={props.changeState}>Next
        </button>
      </div>
    )
  } else if (props.curStage == 3) {
    return(
      <div className = "nav-buttons">
        <button onClick={props.changeState}>Restart</button>
      </div>
    )
  }
  return(
    <div className = "nav-buttons">
      <button onClick={props.changeState}>Next</button>
    </div>
  )
}

export default NavButtons;