import Products from "../Products";
import FetchAPI from "../../Hooks/API";
import * as S from "./index.styles";

export default function ProductList() {
  const { products } = FetchAPI("https://v2.api.noroff.dev/online-shop/");

  <FetchAPI />;
  return (
    <S.ProductWrapper>
      {products.map((product) => (
        <Products
          key={product.id}
          id={product.id}
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price}
          discountedPrice={product.discountedPrice}
        />
      ))}
    </S.ProductWrapper>
  );
}
