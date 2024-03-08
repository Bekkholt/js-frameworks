import "./index.css";
import IonCartOutline from "../CartIcon";
import Counter from "../Counter";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="App-header">
      <nav className="App-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="../../Pages/ContactPage">Contact</Link>
        </li>
      </nav>
      <div className="Cart-Icon">
        <Link to="../../Pages/CheckoutPage">
          <IonCartOutline />
        </Link>
        <Counter />
      </div>
    </header>
  );
}
