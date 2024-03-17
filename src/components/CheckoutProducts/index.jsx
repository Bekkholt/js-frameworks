import { ProductDiv, ProductImage } from "./index.styles";

export default function CheckoutProducts({ inCart }) {
  return (
    <ProductDiv>
      <ProductImage alt={inCart.image.alt} src={inCart.image.url} />
      <p>{inCart.title}</p>
      <p>{inCart.price}</p>
    </ProductDiv>
  );
}
