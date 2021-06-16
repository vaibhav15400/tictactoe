import React from 'react';
const Square = ({ value, onClicked, iswinningSquares }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClicked}
      style={{ fontWeight: iswinningSquares ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
