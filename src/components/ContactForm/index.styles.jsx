import styled from "styled-components";

export const contact = styled.div`
  display: flex;
  justify-content: center;
`;

export const form = styled.form`
  background-color: white;
  padding: 2%;
  width: 60%;
  border-radius: 0.2rem;
  box-shadow: 2px 2px 2px 2px rgb(0 0 0 / 20%);
`;

export const inputs = styled.input`
  border-radius: 0.3rem;
  background-color: #d0f0fd;
`;

export const message = styled.input`
  height: 100px;
  border-radius: 0.3rem;
  background-color: #d0f0fd;
`;

export const SubmitButton = styled.input`
  background-color: #d0f0fd;
  padding: 1%;
  border-radius: 0.2rem;
  margin: 2%;
  width: 30%;

  :hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const error = styled.p`
  color: #892c25;
`;

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BackButton = styled.button`
  background-color: #d0f0fd;
  padding: 1%;
  border-radius: 0.2rem;
  margin: 2%;
  width: 30%;
`;
