import { Link } from "react-router-dom";
import CheckoutProducts from "../../components/CheckoutProducts";

export default function CheckoutPage(inCart) {
  return (
    <div>
      <h1>In cart</h1>
      {inCart.inCart.inCart.map((inCart, i) => (
        <CheckoutProducts key={i + inCart.id} inCart={inCart} />
      ))}
      <Link to="../../Pages/CheckoutSuccessPage">
        <button>Checkout</button>
      </Link>
      <p>Total price: {inCart.inCart.total.toFixed(2)}</p>
    </div>
  );
}
