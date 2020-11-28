import React from 'react';
import './App.css';
import Routes from './Routes'
import { BrowserRouter } from "react-router-dom";
import "reflect-metadata";


function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes />
      </React.Fragment>
    </BrowserRouter>
  )
}


export default App;


