import * as S from "./index.styles";

export default function CheckoutProducts({ inCart }) {
  return (
    <S.CheckoutDiv>
      <S.ProductDiv>
        <S.ProductImage alt={inCart.image.alt} src={inCart.image.url} />
        <p>{inCart.title}</p>
        <p>{inCart.discountedPrice}</p>
      </S.ProductDiv>
    </S.CheckoutDiv>
  );
}
