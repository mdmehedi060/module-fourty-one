import React from 'react';
import './sunglass.css'
import Watch from '../Watch/Watch';
import { add, multiply } from '../../Utility/calculate';
// import add from '../../Utility/calculate';


const Sunglass = () => {
  const first = 55;
  const seconed = 199;
  const sum = add(first, seconed);
  const mult = multiply(first, seconed);
  
  return (
    <div>
      <Watch></Watch>
    </div>
  );
};

export default Sunglass;