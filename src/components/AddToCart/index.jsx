import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./index.styles";

export default function AddToCart(addToCart) {
  const { id } = useParams();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const cartProducts = JSON.parse(localStorage.getItem("cart")) || [];
    const product = cartProducts.find((product) => product.id === id);
    setAdded(!!product);
  }, [id]);

  const onButtonClick = () => {
    addToCart.addToCart({ type: "increment", id });
  };

  return <S.ProductButton onClick={onButtonClick}>Add to cart</S.ProductButton>;
}
