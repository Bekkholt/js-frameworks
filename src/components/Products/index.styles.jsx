import styled from "styled-components";

export const ProductCard = styled.div`
  background-color: white;
  max-width: 50vh;
  margin: 2%;
  border-radius: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 20%);
`;

export const ProductTitle = styled.h2`
  font-size: 1.5rem;
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
  background-color: #d0f0fd;
  margin: 2%;
  border-radius: 0.2rem;
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

export const NoDiscount = styled.p`
  font-size: x-large;
  font-weight: bold;
`;
