import React from "react";

import PhotoCard from "./components/PhotoCard"
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
        <PhotoCard />
      </div>
      <div>
        <Button />
      </div>
      <Data />
    </div>
  );
}

export default App;
