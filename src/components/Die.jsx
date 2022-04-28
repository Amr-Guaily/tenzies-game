import React from 'react';

const Die = ({ value, isHeld, holdDice }) => {
  return (
    <div className={`die ${isHeld ? 'held' : ''}`} onClick={holdDice}>
      <h2>{value}</h2>
    </div>
  );
};

export default Die;
