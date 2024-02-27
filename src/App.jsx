import React from "react";
import "./App.css";
import IonCartOutline from "./components/cartIcon";

function App() {
  return (
    <div>
      <header className="App-header">
        <nav className="App-nav">
          <li>Home</li>
          <li>Contact</li>
        </nav>
        <IonCartOutline />
      </header>
    </div>
  );
}

export default App;
