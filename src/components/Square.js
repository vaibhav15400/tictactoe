import React from 'react';
const Square = ({ value, onClicked }) => {
  return (
    <button type="button" className="square" onClick={onClicked}>
      {value}
    </button>
  );
};

export default Square;
