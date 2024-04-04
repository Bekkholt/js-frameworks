import SolarTrashBinTrashLinear from "../BinIcon";
import * as S from "./index.styles";

export default function CheckoutProducts({ inCart, remove }) {
  function RemoveProduct() {
    if (inCart.count === 0) {
      return <></>;
    } else {
      return (
        <>
          <SolarTrashBinTrashLinear
            onClick={() => remove({ type: "remove", id: inCart.id })}
          >
            Remove
          </SolarTrashBinTrashLinear>
        </>
      );
    }
  }
  return (
    <S.CheckoutDiv>
      <S.ProductDiv>
        <S.ProductImage alt={inCart.image.alt} src={inCart.image.url} />
        <p className="text">{inCart.title}</p>
        <p className="text">{inCart.discountedPrice}</p>
        {RemoveProduct()}
      </S.ProductDiv>
    </S.CheckoutDiv>
  );
}
