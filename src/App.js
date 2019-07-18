import React from "react";
import PrevButton from "./components/Button"
import { Header } from 'semantic-ui-react'

import Data from "./data"

import "./App.css";


function App() {  


  return (
    <div className="App">
      <Header as='h1' color='violet'>
        NASA Photo of The Day
      </Header>
      <div>
        <Data />
      </div>
      <div>
        <PrevButton />
      </div>
    </div>
  );
}

export default App;
