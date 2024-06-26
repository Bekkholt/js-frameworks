import { Link } from "react-router-dom";
import CheckoutProducts from "../../components/CheckoutProducts";
import * as S from "./index.styles";

export default function CheckoutPage({ inCart, reset, remove }) {
  function Checkout() {
    if (inCart.count === 0) {
      return <></>;
    } else {
      return (
        <>
          <Link to="../../Pages/CheckoutSuccessPage">
            <S.Button onClick={() => reset()}>Checkout</S.Button>
          </Link>
        </>
      );
    }
  }
  return (
    <div>
      <h1 className="title">Shop-drop</h1>
      <S.Header className="title">In cart</S.Header>
      {inCart.inCart.map((inCart, i) => (
        <CheckoutProducts key={i + inCart.id} inCart={inCart} remove={remove} />
      ))}
      <p className="text">Total price: {inCart.total.toFixed(2)}</p>
      {Checkout()}
      <div>
        <Link to="/">
          <S.Button>Go back</S.Button>
        </Link>
      </div>
    </div>
  );
}
