import "./index.css";
import IonCartOutline from "../Cart-Icon/Cart-Icon";
import Counter from "../Counter/Counter";

export default function Header() {
  return (
    <header className="App-header">
      <nav className="App-nav">
        <li>Home</li>
        <li>Contact</li>
      </nav>
      <div className="Cart-Icon">
        <IonCartOutline />
        <Counter />
      </div>
    </header>
  );
}
