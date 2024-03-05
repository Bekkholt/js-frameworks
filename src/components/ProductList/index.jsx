import React, { useEffect, useState } from "react";
import Products from "../Products";

const url = "https://v2.api.noroff.dev/online-shop";

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const json = await response.json();
      setProducts(json.data);
    }
    getData();
  }, []);

  return (
    <div>
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
    </div>
  );
}
