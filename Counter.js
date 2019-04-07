import React from 'react';
import store from './Store';

function Counter(props) {
  return (
    <div>
      <p>{props.count}</p>
      <button click={props.onIncrement}>+</button>
      <button click={props.onDecrement}>-</button>
      <button>Increment if odd</button>
      <button>Increment async</button>
    </div>
  );
}

export default Counter;
