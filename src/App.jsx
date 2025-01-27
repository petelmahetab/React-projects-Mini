import React, { Component } from "react";
// import Test1 from "./Test1";
// import { ErrorBoundary } from "/ErrorBoundary";
// import Test2 from "./Test2";

const Component1 = () => {
  // throw new Error("Error in Component1");
  // return <div>Component 1</div>;
};

const Component2 = () => {
  return <div>Component 2</div>;
};

const App = () => {
  return (
    <div>
      <Boundary>
      
        <Component1 />
      </Boundary>
      <Boundary fallback={<h1>ErrOr with Custom </h1>}>
      
        <Component2 />
      </Boundary>
    </div>
  );
};

class Boundary extends Component {
  constructor(props) {
    super(props);
    this.state = { isShow: false };
  }

  componentDidCatch(err, mess) {
    console.log("Error in Error-Boundary", err + "", mess);
  }

  render() {
    if (this.state.isShow) {
      return this.props.fallback || <h1>Something is Went Wrong </h1>;
    }

    return <>{this.props.children}</>;
  }
}
export default App;
