import React, { useEffect, useState } from "react";

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
        <div key={product.id}>
          <div>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button>View product</button>
          </div>
        </div>
      ))}
    </div>
  );
}
