import React from "react";
import "./App.css";
import StateExample from "./state/StateExample";
import ForceUpdateExample from "./state/ForceUpdateExample";
import Test from "./state/Test";
class App extends React.Component {
  render() {
    return (
      <>
        <StateExample></StateExample>
        <hr />
        <ForceUpdateExample />
        <hr />
        <Test />
      </>
    );
  }
}
export default App;
