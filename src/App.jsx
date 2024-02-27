import React from "react";
import "./App.css";
import IonCartOutline from "./components/Cart-Icon";
import Counters from "./components/Counters";

function App() {
  return (
    <div>
      <header className="App-header">
        <nav className="App-nav">
          <li>Home</li>
          <li>Contact</li>
        </nav>
        <div className="Cart-Icon">
          <IonCartOutline />
          <Counters />
        </div>
      </header>
    </div>
  );
}

export default App;
