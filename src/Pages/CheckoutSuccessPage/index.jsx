import { Link } from "react-router-dom";
import * as S from "./index.styles";

export default function CheckoutSuccessPage() {
  return (
    <div>
      <p className="text">Your order was successful!</p>
      <Link to="/">
        <S.BackButton>Go back</S.BackButton>
      </Link>
    </div>
  );
}
