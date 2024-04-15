import React from "react";
import "./App.css";
import Game from "./component/game";

function App() {
  return (
    <div className="App">
      <Game />
      <div id="errors"></div>
      <div id="root"></div>
    </div>
  );
}

export default App;
