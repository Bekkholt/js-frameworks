import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "./index.styles";

export default function ProductPage() {
  const [productDetails, setProductDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    async function getData(url) {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(url);
        const json = await response.json();

        setProductDetails(json.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }

    getData(`https://v2.api.noroff.dev/online-shop/${id}`);
  }, [id]);

  if (isLoading || !productDetails) {
    return <div>Loading</div>;
  }

  if (isError) {
    return <div>Error</div>;
  }

  let reviews = productDetails.reviews.map((review) => (
    <S.ProductReviews key={review.id}>
      <div>
        <h4>{review.username} says:</h4>
        <p>{review.description}</p>
      </div>
    </S.ProductReviews>
  ));

  if (reviews.length === 0) {
    reviews = <p>No reviews</p>;
  }

  console.log(productDetails);

  return (
    <div>
      <S.ProductTitle>{productDetails.title}</S.ProductTitle>
      <S.ProductImage
        alt={productDetails.image.alt}
        src={productDetails.image.url}
      ></S.ProductImage>
      <S.DiscountPrice>{productDetails.discountedPrice}</S.DiscountPrice>
      <S.ProductPrice>{productDetails.price}</S.ProductPrice>
      <S.ProductDescription>{productDetails.description}</S.ProductDescription>
      <S.ProductButton>Add to cart</S.ProductButton>
      <S.ReviewTitle>Reviews</S.ReviewTitle>
      {reviews}
    </div>
  );
}
