import React from "react";
import "./App.css";
import Header from "./components/header/header";
import { BrowserRouter as HashRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Switch />
      </HashRouter>
    </div>
  );
}

export default App;
