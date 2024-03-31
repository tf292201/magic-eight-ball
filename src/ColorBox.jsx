import React from 'react';

const ColorBox = ({ color }) => {
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
    >
    </div>
  );
}

export default ColorBox;