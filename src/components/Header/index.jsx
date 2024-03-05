import "./index.css";
import IonCartOutline from "../CartIcon";
import Counter from "../Counter";
import { Link } from "react-router-dom";
import Searchbar from "../Searchbar";

export default function Header() {
  return (
    <header className="App-header">
      <nav className="App-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/src/components/ContactPage">Contact</Link>
        </li>
      </nav>
      <Searchbar />
      <div className="Cart-Icon">
        <Link to="/src/components/CheckoutPage">
          <IonCartOutline />
        </Link>
        <Counter />
      </div>
    </header>
  );
}
