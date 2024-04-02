import styled from "styled-components";

export const ProductPageDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  background: white;
  width: 70vh;
  padding: 2%;
  margin: 2%;
`;

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

export const BackButton = styled.button`
  border: 2;
  background: none;
  background-color: #d0f0fd;
  border-radius: 0.2rem;
`;

export const ProductReviews = styled.div`
  h4 {
    display: flex;
    align-items: flex-start;
    text-decoration: underline;
  }

  p {
    display: flex;
    align-items: flex-start;
  }
`;
