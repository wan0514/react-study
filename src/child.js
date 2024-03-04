import React from 'react';

export default function Child({ count, handleIncrease, handleDecrease }) {
  return (
    <>
      <h2>{count}</h2>
      <button onClick={handleIncrease}>+</button>
      <button onClick={handleDecrease}>-</button>
    </>
  );
}
