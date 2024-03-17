import React from "react";
import * as S from "./index.styles";

export default function AddToCart({ addToCart, productDetails }) {
  const onButtonClick = () => {
    addToCart({
      type: "increment",
      productDetails: productDetails,
    });
  };

  return <S.ProductButton onClick={onButtonClick}>Add to cart</S.ProductButton>;
}
