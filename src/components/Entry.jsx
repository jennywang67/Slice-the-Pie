import React, { useRef, useEffect, useState } from 'react';
import Circles from "./Circles.jsx";
function Entry(props) {
  const [val, updateVal] = useState(-1);

  useEffect(()=> { //not yet initialized
    if (props.curStage === 0) {
      if (props.rev.has(props.id)) {  //self is in dataset, set to its value
        updateVal(props.rev.get(props.id).value);
      }
      else {  //add self to dataset
        props.updateRev(props.rev.set(props.id, {name: props.name, info: props.info, color: props.color, value: 0}));
        //console.log("added",props.id)
        updateVal(0);
      }
    }
    else if (props.curStage == 1) {
      if (props.exp.has(props.id)) {
        updateVal(props.exp.get(props.id).value);
      }
      else {  
        props.updateExp(props.exp.set(props.id, {name: props.name, info: props.info, color: props.color, value: 0}));
        updateVal(0);
      }
    }
    props.calSum(); //update sum for new state
  });

  /* makes sure input value does not go beyond 100
    will need to modify later so that the new input value does not
    exceed 100 when added to total*/

  function onChangeVal (event) {
    let {value, min, max } = event.target;
    value = Math.max(Number(min), Math.min(Number(max), Number(value)));

    let newSum = props.sum - val + value;
    //console.log("prevSum:", props.sum, "prevVal:", val, "newVal:", value, "newSum:",newSum);
    if (newSum > 100) {
      value = 100 - props.sum + val; //100 - (old sum - old val) i.e., new val is 100 minus the sum of all values other than this entry's
    }

    updateVal(value); //update self to correct displayed value
    //console.log("here!", value, props.id,props.rev.get(props.id));

    if (props.curStage == 0) {
      let newRev = props.rev; //duplicate for new
      let newItem = props.rev.get(props.id);
      newItem.value = value;
      newRev.set(props.id, newItem)
      props.updateRev(newRev);
    }
    else if (props.curStage == 1) {
      let newExp = props.exp; //duplicate for new
      let newItem = props.exp.get(props.id);
      newItem.value = value;
      newExp.set(props.id, newItem)
      props.updateExp(newExp);
    }
    //console.log("now is:", newRev);

    //
    props.calSum(); //maybe use useEffect in PieChart instead?
  }

  return (
    <div className = 'inputs'> 
      <Circles name = {props.name} color = {props.color} info = {props.info}/>
      <div>
        <span className = {`percentage-sign ${val == 0 ? "" : "inputs-non-zero"}`}>
          <input className = {`inputs-background-color ${val <= 0 ? "" : "inputs-non-zero"}`} value = {val > 0 ? val : ""} placeholder = "0" min="0" max = {100} type="number" onChange = {onChangeVal}/>%
        </span>
      </div>
    </div>
  )
};
export default Entry;