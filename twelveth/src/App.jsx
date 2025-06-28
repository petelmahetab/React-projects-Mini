import React from "react";
import { styled, keyframes } from "styled-components"; // Correct import
import "./App.css";

function App(props) {
  const progress = props.percentage || 0; // Default to 0 if percentage is not provided

  return (
    <OuterContainer percentage={progress}>
      <div className="child">
        <h1>{progress}%</h1>
      </div>
    </OuterContainer>
  );
}

// Dynamic Keyframes
const createAnimation = (percentage) => keyframes`
  0% {
    background: conic-gradient(blue, 0deg, rgb(228,225,225), 180deg);
  }
  100% {
    background: conic-gradient(blue, ${
      (percentage / 100) * 360
    }deg, 0deg);
  }
`;

const OuterContainer = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 30%;
  top:20%;
  background: conic-gradient(blue, 0deg, white, 180deg);
  animation: ${(props) => createAnimation(props.percentage)} 2s forwards;
`;

// const InnerContainer = styled.div`
//   background-color: rgb(58, 55, 55);
//   width: 460px;
//   height: 470px;
//   border-radius: 50%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: white;
// `;

export default App;
