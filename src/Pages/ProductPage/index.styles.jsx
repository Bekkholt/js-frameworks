import styled from "styled-components";

export const ProductTitle = styled.h2`
  text-decoration: underline;
`;

export const ProductImage = styled.img`
  max-width: 30%;
  max-height: 30%;
`;

export const ProductDescription = styled.p`
  margin-left: 5%;
  margin-right: 5%;
`;

export const ProductButton = styled.button`
  border: 2;
  background: none;
  background-color: lightblue;
`;

export const ProductPrice = styled.p`
  font-size: large;
  text-decoration: line-through;
  margin-bottom: 0;
`;

export const SavePrice = styled.p`
  font-size: large;
  margin-top: 0;
`;

export const DiscountPrice = styled.p`
  font-size: x-large;
  margin-top: 0;
  color: darkred;
  font-weight: bold;
`;

export const ReviewTitle = styled.h3`
  text-decoration: underline;
  padding-top: 5%;
`;

export const ProductReviews = styled.div`
  h4 {
    display: flex;
    align-items: flex-start;
    margin-left: 10%;
    text-decoration: underline;
  }

  p {
    display: flex;
    align-items: flex-start;
    margin-left: 10%;
  }
`;
