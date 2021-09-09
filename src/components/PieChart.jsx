import React, { useRef, useEffect, useState } from 'react';
import PieChartFunctional from "./PieChartFunctional";
import Entry from "./Entry.jsx";
import TotalPercantage from "./TotalPercentage.jsx";

function PieChart(props) {
  const [curSum, updateSum] = useState(0);

  function calSum() {
    if (props.curStage == 0) {  //sum for rev
      let newSum = 0;
      for (let [key, elem] of props.rev) {
        if (elem.name != "$empty") {
          newSum += elem.value;
        }
      }
      updateSum(newSum);
    }
    else if (props.curStage == 1) {  //sum for exp
      let newSum = 0;
      for (let [key, elem] of props.exp) {
        if (elem.name != "$empty") {
          newSum += elem.value;
        }
      }
      updateSum(newSum);
    }
  }

  const entries = [];
  for (let i = 0; i < props.data.length; i++) {
    entries.push(<Entry curStage = {props.curStage} key={i} id={i} name={props.data[i].name} info = {props.data[i].info} color = {props.data[i].color} rev = {props.rev} updateRev = {props.updateRev} exp = {props.exp} updateExp = {props.updateExp} sum = {curSum} calSum = {calSum}/>);
  }

  if (props.curStage == 0) {
    return (
      <div className="Chart">
        <p> {props.name} </p>
        <div>
          <PieChartFunctional data={Array.from(props.rev, ([name, value]) => (value))} />
        </div>
        <div id = "above-inputs">
          <p> Function </p>
          <p> Percentage (%) </p>
        </div>
        {entries}
        <TotalPercantage sum={curSum}/>
      </div>
    )
  }
  else if (props.curStage == 1) {
    return (
      <div className="Chart">
        <p> {props.name} </p>
        <div>
          <PieChartFunctional data={Array.from(props.exp, ([name, value]) => (value))} />
        </div>
        <div id = "above-inputs">
          <p> Function </p>
          <p> Percentage (%) </p>
        </div>
        {entries}
        <TotalPercantage sum={curSum}/>
      </div>
    )
  }
};

export default PieChart;


