import ProductList from "../../components/ProductList";
import Searchbar from "../../components/Searchbar";
import * as S from "./index.styles";

export default function HomePage() {
  return (
    <div>
      <h2>Shop Products</h2>
      <Searchbar />
      <S.Cards>
        <ProductList />
      </S.Cards>
    </div>
  );
}
