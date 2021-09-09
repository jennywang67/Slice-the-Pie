import React, { useState } from 'react';

function TotalPercentage(props){
  //const [curStage, updateStage] = useState(0);
  //const [curSum, updateSum] = useState(0);

  let sum = props.sum;
  return(
    <div className = 'total-percentage'>
      <div>
        <label className = "total-space">Total %</label>
        <span className = {`percentage-sign ${sum == 0 ? "" : "inputs-non-zero"}`}>
          <input className = {`inputs-background-color ${sum == 0 ? "" : "inputs-non-zero"}`} value = {sum} min="0" max = "100" type="number" readOnly/>%
        </span>
      </div>
    </div>
  )
}

export default TotalPercentage;