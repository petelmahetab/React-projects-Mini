import React from "react";
import useCustomHook from "./Hooks/customHooks";

const App = () => {
  const { Time, StartTimer, StopTimer, hr, min, sec } = useCustomHook();

  return (
    <div className="main">
      <h1>Hello G...</h1>
      <h4>Timer</h4>
      <h5>
        {hr(Time)} : {min(Time)} : {sec(Time)}
      </h5>
      <button onClick={StartTimer}>Start</button>
      <button onClick={StopTimer}>Stop</button>
    </div>
  );
};

export default App;
