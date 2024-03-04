import React, { useEffect, useState } from "react";
import * as S from "./index.styles";

const url = "https://v2.api.noroff.dev/online-shop";

export default function Product() {
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
          <S.ProductCard>
            <S.ProductImage
              alt="ProductImage"
              src={product.image.url}
            ></S.ProductImage>
            <S.ProductTitle>{product.title}</S.ProductTitle>
            <S.ProductDescription>{product.description}</S.ProductDescription>
            <S.ProductButton>View product</S.ProductButton>
            <S.ProductPrice>{product.price}</S.ProductPrice>
          </S.ProductCard>
        </div>
      ))}
    </div>
  );
}
