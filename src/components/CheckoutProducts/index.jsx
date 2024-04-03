import * as S from "./index.styles";

export default function CheckoutProducts({ inCart, remove }) {
  function RemoveProduct() {
    if (inCart.count === 0) {
      return <></>;
    } else {
      return (
        <>
          <button onClick={() => remove({ type: "remove", id: inCart.id })}>
            Remove
          </button>
        </>
      );
    }
  }
  return (
    <S.CheckoutDiv>
      <S.ProductDiv>
        <S.ProductImage alt={inCart.image.alt} src={inCart.image.url} />
        <p>{inCart.title}</p>
        <p>{inCart.discountedPrice}</p>
        {RemoveProduct()}
      </S.ProductDiv>
    </S.CheckoutDiv>
  );
}
