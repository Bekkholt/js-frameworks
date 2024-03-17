import { Link } from "react-router-dom";
import CheckoutProducts from "../../components/CheckoutProducts";

export default function CheckoutPage(inCart) {
  console.log(inCart);

  return (
    <div>
      <h1>In cart</h1>
      {inCart.inCart.map((inCart, i) => (
        <CheckoutProducts key={i + inCart.id} inCart={inCart} />
      ))}
      <Link to="../../Pages/CheckoutSuccessPage">
        <button>Checkout</button>
      </Link>
    </div>
  );
}
