import ProductList from "../ProductList";

export default function HomePage() {
  return (
    <div>
      <h2>Shop Products</h2>
      <div className="Cards">
        <ProductList />
      </div>
    </div>
  );
}
