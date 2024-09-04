import React from 'react';
// import logo from './logo.svg';
import './App.css';

// We are creating a BMI Calculator
function App() {
  return (
    <div className='container'>
      <p className='heading'>BMI Calculator</p>
      <p className='slider'>Weight</p>
      <input className='inputslider' type="range" step="1" min="40" max="200" />
      <p className='slider'>Height</p>
    </div>
  );
}

export default App;
