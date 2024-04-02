import { Link } from "react-router-dom";
import CheckoutProducts from "../../components/CheckoutProducts";
import * as S from "./index.styles";

export default function CheckoutPage({ inCart, reset }) {
  function Checkout() {
    if (inCart.count === 0) {
      return <></>;
    } else {
      return (
        <>
          <Link to="../../Pages/CheckoutSuccessPage">
            <S.CheckoutButton onClick={() => reset()}>
              Checkout
            </S.CheckoutButton>
          </Link>
        </>
      );
    }
  }
  return (
    <div>
      <h1>In cart</h1>
      {inCart.inCart.map((inCart, i) => (
        <CheckoutProducts key={i + inCart.id} inCart={inCart} />
      ))}
      <p>Total price: {inCart.total.toFixed(2)}</p>
      {Checkout()}
    </div>
  );
}
