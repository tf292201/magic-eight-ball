import React, { useState } from 'react';
import ColorBox from './ColorBox';
import './ColorBoxApp.css';

const possibleColors = ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'cyan'];

const ColorBoxesApp = () => {
  const [boxColors, setBoxColors] = useState(Array.from({ length: 16 }, getRandomColor));

  function getRandomColor() {
    return possibleColors[Math.floor(Math.random() * possibleColors.length)];
  }

  function handleChangeColor() {
    const randomIndex = Math.floor(Math.random() * boxColors.length);
    const newBoxColors = [...boxColors];
    newBoxColors[randomIndex] = getRandomColor();
    setBoxColors(newBoxColors);
  }

  return (
    <div className="color-boxes-app">
      <div className="color-boxes-container">
        {boxColors.map((color, index) => (
          <ColorBox key={index} color={color} />
        ))}
      </div>
      <button onClick={handleChangeColor}>Change</button>
    </div>
  );
};

export default ColorBoxesApp;
