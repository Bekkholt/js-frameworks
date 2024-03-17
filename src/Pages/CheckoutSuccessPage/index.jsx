import { Link } from "react-router-dom";

export default function CheckoutSuccessPage() {
  return (
    <div>
      <p>Your order was successful!</p>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
}
