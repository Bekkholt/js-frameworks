import Product from "../ProductList";

export default function HomePage() {
  return (
    <div>
      <h2>Shop Products</h2>
      <div className="Cards">
        <Product />
      </div>
    </div>
  );
}
