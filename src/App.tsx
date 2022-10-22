import React from "react";
import CalenderView from "./components/Calender";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="calender-container">
          <CalenderView />
        </div>
      </header>
    </div>
  );
}

export default App;
