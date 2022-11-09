import styled from "styled-components";

export const CartContainer = styled.form`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  gap: 2rem;
  padding-bottom: 3rem;

  display: flex;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-family: 700;
    font-size: 1.125rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 0 3rem 3rem;

    flex-direction: column;
  }
`;

export const CheckoutDataContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & > div {
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    background-color: ${(props) => props.theme["gray-100"]};
    border-radius: 6px;
  }
`;
