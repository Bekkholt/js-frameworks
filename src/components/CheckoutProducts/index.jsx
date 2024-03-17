import { ProductDiv, ProductImage } from "./index.styles";

export default function CheckoutProducts({ inCart }) {
  return (
    <div>
      <ProductDiv>
        <ProductImage alt={inCart.image.alt} src={inCart.image.url} />
        <p>{inCart.title}</p>
        <p>{inCart.discountedPrice}</p>
      </ProductDiv>
    </div>
  );
}
