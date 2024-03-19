import styled from "styled-components";

export const ProductCard = styled.div`
  background-color: white;
  max-width: 50vh;
  margin: 2%;
  border-radius: 0.2rem;
`;

export const ProductTitle = styled.h2`
  text-decoration: underline;
`;

export const ProductImage = styled.img`
  max-width: 70%;
  margin-top: 10%;
`;

export const ProductDescription = styled.p`
  border: 0;
  background: none;
  margin: 5%;
`;

export const ProductButton = styled.button`
  border: 2;
  background: none;
  background-color: lightblue;
  margin: 2%;
`;

export const ProductPrice = styled.p`
  font-size: large;
  text-decoration: line-through;
  margin-bottom: 0;
`;

export const DiscountPrice = styled.p`
  font-size: x-large;
  margin-top: 0;
  padding-bottom: 5%;
  color: darkred;
  font-weight: bold;
`;
