import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import AddToCart from "../../components/AddToCart";
import * as S from "./index.styles";

export default function ProductPage(addToCart) {
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

  let Price = productDetails.price;
  let Discount = productDetails.discountedPrice;
  let Save = (Price - Discount).toFixed(2);

  let reviews = productDetails.reviews.map((review) => (
    <S.ProductReviews key={review.id}>
      <div>
        <h4>{review.username} says:</h4>
        <p>{review.description}</p>
      </div>
    </S.ProductReviews>
  ));

  if (reviews.length === 0) {
    reviews = (
      <S.ProductReviews>
        <p>No reviews</p>
      </S.ProductReviews>
    );
  }

  return (
    <S.ProductPageDiv>
      <S.Wrapper>
        <S.ProductTitle>{productDetails.title}</S.ProductTitle>
        <S.ProductImage
          alt={productDetails.image.alt}
          src={productDetails.image.url}
        ></S.ProductImage>
        <S.ProductPrice>{productDetails.price}</S.ProductPrice>
        <S.SavePrice> - {Save}</S.SavePrice>
        <S.DiscountPrice>{productDetails.discountedPrice}</S.DiscountPrice>
        <S.ProductDescription>
          {productDetails.description}
        </S.ProductDescription>
        <AddToCart
          addToCart={addToCart.addToCart}
          productDetails={productDetails}
        />
        <S.ReviewTitle>Reviews</S.ReviewTitle>
        {reviews}
      </S.Wrapper>
    </S.ProductPageDiv>
  );
}
