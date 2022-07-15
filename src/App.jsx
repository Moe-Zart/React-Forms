import "./App.css";
import React from "react";
import Forms1 from "./components/Forms1";
import Forms2 from "./components/Forms2";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Forms1 />
        <br />
        <Forms2 />
      </div>
    );
  }
}

export default App;
