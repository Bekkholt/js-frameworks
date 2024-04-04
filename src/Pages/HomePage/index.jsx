import ProductList from "../../components/ProductList";
import Searchbar from "../../components/Searchbar";
import * as S from "./index.styles";

export default function HomePage() {
  return (
    <div>
      <h1 className="title">Shop-drop</h1>
      <Searchbar />
      <S.Header className="title">All products</S.Header>
      <S.Cards>
        <ProductList />
      </S.Cards>
    </div>
  );
}
