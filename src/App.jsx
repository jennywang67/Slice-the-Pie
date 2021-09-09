import React, { useRef, useEffect, useState } from 'react';
import './App.css';
import './percentage.css';
import './tooltip.css';
import './buttons.css';
import Header from "./components/Header.jsx"
import ProgressBar from "./components/ProgressBar.jsx";
import NavButtons from "./components/NavButtons.jsx";
import Compare from "./components/Compare.jsx";
import { revData, expData } from './Data.js';


/* App */
function App() {
  const [curStage, setStage] = useState(0);
  const [previous, setPrevious] = useState(0);

  function changeState() {
    //stage 4 is reset stage
    if (curStage < 4) {   //not at last stage
      setStage(curStage + 1);
    }
    else {              //return to first stage
      setStage(0);
    }
    setPrevious(curStage);
  }
  
  function preState(){
    setStage(0);
    setPrevious(1);
  }

  function revert(){
    setPrevious(0);
  }

  if (curStage == 0){
    return (
      <div>
        <Header/>
        <ProgressBar curStage = {curStage}/>
        <Compare name = "UC Davis Revenues" data = {revData} curStage = {curStage} previous = {previous}/>
        <NavButtons changeState = {changeState}/>
      </div>
    )
  } else if (curStage == 1) {
    return (
      <div>
        <Header/>
        <ProgressBar curStage = {curStage}/>
        <Compare name = "UC Davis Expenses" data = {expData} curStage = {curStage} previous = {previous}/>
        <NavButtons changeState = {changeState} preState = {preState} curStage = {curStage}/>
      </div>
    )
  } else if (curStage == 2){
    return(
      <div>
        <Header/>
        <ProgressBar curStage = {curStage}/>
        <Compare curStage = {curStage} previous = {previous}/>
        <NavButtons changeState = {changeState} curStage = {curStage}/>
      </div>);
  } else if (curStage == 3) {
    return(
      <div>
        <Header/>
        <ProgressBar curStage = {curStage}/>
        <Compare curStage = {curStage} previous = {previous} revert = {revert}/>
        <NavButtons changeState = {changeState} curStage = {curStage}/>
      </div>
    )
  }
  else if (curStage == 4) { //intermediate reset stage, should not persist
    return(
    <Compare curStage = {curStage} previous = {previous} revert = {revert} changeState = {changeState}/>
    );
  }
  //return(<p/>);
}

export default App;

