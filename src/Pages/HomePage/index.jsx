import ProductList from "../../components/ProductList";
import Searchbar from "../../components/Searchbar";

export default function HomePage() {
  return (
    <div>
      <h2>Shop Products</h2>
      <Searchbar />
      <div className="Cards">
        <ProductList />
      </div>
    </div>
  );
}
