import React from "react";
import logo from "./logo.svg";
import "./App.css";

// practice client data persistence
// plan on using object to store successful goal days
// where key is month and value is array of booleans, each element is a day
// when there is a new month, new month

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
