import React from "react";
import * as S from "./index.styles";
import { Link } from "react-router-dom";

export default function Product(product) {
  return (
    <S.ProductCard>
      <S.ProductImage
        alt={product.image.alt}
        src={product.image.url}
      ></S.ProductImage>
      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.ProductDescription>{product.description}</S.ProductDescription>
      <Link to={`../../Pages/ProductPage/${product.id}`}>
        <S.ProductButton>View product</S.ProductButton>
      </Link>
      <S.ProductPrice>{product.price}</S.ProductPrice>
      <S.DiscountPrice>{product.discountedPrice}</S.DiscountPrice>
    </S.ProductCard>
  );
}
