import styled from "styled-components";

export const CheckoutDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ProductDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  padding-top: 0;
  padding-bottom: 0;
  background: white;
  margin: 2%;
  border-radius: 0.2rem;
  width: 50vh;
  height: 200px;
  box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 20%);
`;

export const ProductImage = styled.img`
  max-width: 50%;
  max-height: 50%;
`;
