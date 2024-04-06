import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AddToCart from "../../components/AddToCart";
import * as S from "./index.styles";
import { PuffLoader } from "react-spinners";

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
    return (
      <>
        <S.SpinnerDiv>
          <PuffLoader
            loading={isLoading}
            size={60}
            aria-label="Loading Spinner"
            data-testid="loader"
            color="#97b0de"
          />
        </S.SpinnerDiv>
      </>
    );
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
        <h4 className="title">{review.username} says:</h4>
        <p className="text">{review.description}</p>
      </div>
    </S.ProductReviews>
  ));

  if (reviews.length === 0) {
    reviews = (
      <S.ProductReviews>
        <p className="text">No reviews</p>
      </S.ProductReviews>
    );
  }

  const hasDiscount = Discount !== Price;

  function price() {
    if (hasDiscount === true) {
      return (
        <>
          <S.ProductPrice className="text">
            {productDetails.price}
          </S.ProductPrice>
          <S.SavePrice className="text"> - {Save}</S.SavePrice>
          <S.DiscountPrice className="text">
            {productDetails.discountedPrice}
          </S.DiscountPrice>
        </>
      );
    } else {
      return (
        <>
          <S.NoDiscount>{productDetails.price}</S.NoDiscount>
        </>
      );
    }
  }

  return (
    <div>
      <h1 className="title">Shop-drop</h1>
      <S.ProductPageDiv>
        <S.Wrapper>
          <S.ProductTitle className="title">
            {productDetails.title}
          </S.ProductTitle>
          <S.ProductImage
            alt={productDetails.image.alt}
            src={productDetails.image.url}
          ></S.ProductImage>
          {price()}
          <S.ProductDescription className="text">
            {productDetails.description}
          </S.ProductDescription>
          <AddToCart
            addToCart={addToCart.addToCart}
            productDetails={productDetails}
          />
          <S.ReviewTitle className="title">Reviews</S.ReviewTitle>
          {reviews}
          <Link to="/">
            <S.BackButton>Go back</S.BackButton>
          </Link>
        </S.Wrapper>
      </S.ProductPageDiv>
    </div>
  );
}
