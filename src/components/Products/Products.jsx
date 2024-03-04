import React from "react";
import * as S from "./index.styles";

export default function Products(product) {
  return (
    <S.ProductCard>
      <S.ProductImage
        alt={product.image.alt}
        src={product.image.url}
      ></S.ProductImage>
      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.ProductDescription>{product.description}</S.ProductDescription>
      <S.ProductButton>View product</S.ProductButton>
      <S.ProductPrice>{product.price}</S.ProductPrice>
      <S.DiscountPrice>{product.discountedPrice}</S.DiscountPrice>
    </S.ProductCard>
  );
}
