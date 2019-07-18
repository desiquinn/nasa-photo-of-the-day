import React from "react";
import Button from "./components/Button"

import Data from "./data"

import "./App.css";


function App() {  


  return (
    <div className="App">
      <h1>
        NASA Photo of The Day
      </h1>
      <div>
        <Data />
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
}

export default App;
