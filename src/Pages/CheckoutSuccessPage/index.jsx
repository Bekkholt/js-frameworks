import { Link } from "react-router-dom";
import * as S from "./index.styles";

export default function CheckoutSuccessPage() {
  return (
    <div>
      <h1 className="title">Shop-drop</h1>
      <p className="text">Your order was successful!</p>
      <Link to="/">
        <S.BackButton>Go back</S.BackButton>
      </Link>
    </div>
  );
}
