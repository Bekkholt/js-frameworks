import Products from "../Products";
import FetchAPI from "../../Hooks/API";
import * as S from "./index.styles";
import { PuffLoader } from "react-spinners";

export default function ProductList() {
  const { products } = FetchAPI("https://v2.api.noroff.dev/online-shop/");
  const { isLoading } = FetchAPI("https://v2.api.noroff.dev/online-shop/");
  <FetchAPI />;

  function Spinner() {
    if (isLoading === true) {
      return (
        <>
          <PuffLoader
            loading={isLoading}
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="#97b0de"
          />
        </>
      );
    } else {
      return <></>;
    }
  }
  return (
    <S.ProductWrapper>
      <Spinner />
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
