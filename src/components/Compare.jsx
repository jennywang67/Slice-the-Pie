import React, { useRef, useEffect, useState } from 'react';
import PieChartFunctional from "./PieChartFunctional.jsx";
import PieChart from "./PieChart.jsx";
import { revData, expData } from '../Data.js';

function Compare(props){
  const[revDataUser, updateRev] = useState(new Map());
  const[expDataUser, updateExp] = useState(new Map());
  const [sum, updateSum] = useState(0);

  useEffect(() => {
    if (props.curStage == 4) { //intermediate reset stage
    updateRev(new Map());
    updateExp(new Map());
    props.changeState()  //go back to beginning
    return(<p/>); //doesn't really matter, this state should be left immediately
  }});

  if (props.curStage == 0 || props.curStage == 1) {
    return(
      <div>
        <PieChart name = {props.name} data = {props.data} rev = {revDataUser} updateRev = {updateRev} exp = {expDataUser} updateExp = {updateExp} sum = {sum} updateSum = {updateSum} curStage = {props.curStage} previous = {props.previous} revert = {props.revert}/>
      </div>
      )
  } else if (props.curStage == 2){
    return(
      <div className = "Chart">
        <h2>RESULTS</h2>
        <p>Your Revenue Guess</p>
        <PieChartFunctional name = "Chart1" data={Array.from(revDataUser, ([name, value]) => (value))} />
        <p>Actual Revenue</p>
        <PieChartFunctional name = "Chart2" data={revData} />
      </div>
    )
  }

  return(
    <div className = "Chart">
      <h2>RESULTS</h2>
      <p>Your Expenses Guess</p>
      <PieChartFunctional name = "Chart1" data={Array.from(expDataUser, ([name, value]) => (value))} />
      <p>Actual Expenses</p>
      <PieChartFunctional name = "Chart2" data={expData} />
    </div>
  )
}

export default Compare;
