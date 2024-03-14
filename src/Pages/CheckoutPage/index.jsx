import { Link } from "react-router-dom";

export default function CheckoutPage(inCart) {
  console.log(inCart);

  return (
    <div>
      <h1>In cart</h1>
      <p>{inCart.inCart}</p>
      <Link to="../../Pages/CheckoutSuccessPage">
        <button>Checkout</button>
      </Link>
    </div>
  );
}
