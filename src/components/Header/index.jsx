import "./index.css";
import IonCartOutline from "../CartIcon";
import Counter from "../Counter";
import { Link } from "react-router-dom";

export default function Header(count) {
  return (
    <header className="App-header">
      <nav className="App-nav">
        <li>
          <Link to="/" className="text">
            Home
          </Link>
        </li>
        <li>
          <Link to="../../Pages/ContactPage" className="text">
            Contact
          </Link>
        </li>
      </nav>
      <div className="Cart-Icon">
        <Link to="../../Pages/CheckoutPage">
          <IonCartOutline />
        </Link>
        <Counter count={count.count} />
      </div>
    </header>
  );
}
