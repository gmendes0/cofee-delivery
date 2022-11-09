import styled from "styled-components";

export const CheckoutAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  background-color: ${(props) => props.theme["gray-100"]};
  border-radius: 6px;
`;

export const CheckoutDataTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  svg {
    width: 1.375rem;
    height: 1.375rem;
    color: ${(props) => props.theme["yellow-700"]};
  }

  & > div {
    p {
      font-weight: 400;
      font-size: 1rem;
      color: ${(props) => props.theme["gray-700"]};
    }

    span {
      font-weight: 400;
      font-size: 0.875rem;
      color: ${(props) => props.theme["gray-600"]};
    }
  }
`;

export const CheckoutDataAddress = styled.div`
  margin: 2rem 0 0;
  /* display: flex;
  flex-direction: column;
  gap: 1rem; */

  display: grid;
  grid-template-areas:
    "c . ."
    "r r r"
    "n cc cc"
    "b ct uf";
  grid-template-columns: 28% auto 09.333333333333334%;
  gap: 1rem 0.75rem;

  input {
    padding: 0.75rem;
    border-radius: 4px;
    background-color: ${(props) => props.theme["gray-200"]};
    border: 1px solid ${(props) => props.theme["gray-300"]};
    font-size: 0.875rem;
    font-weight: 400;
    color: ${(props) => props.theme["gray-600"]};

    &::placeholder {
      font-size: 0.875rem;
      font-weight: 400;
      color: ${(props) => props.theme["gray-500"]};
    }

    &:focus {
      outline-color: ${(props) => props.theme["yellow-700"]};
    }
  }

  @media screen and (max-width: 768px) {
    grid-template-areas:
      "c"
      "r"
      "n"
      "cc"
      "b"
      "ct"
      "uf";
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    grid-template-areas:
      "c ."
      "r r"
      "n cc"
      "b b"
      "ct uf";

    grid-template-columns: 50% 50%;
  }
`;
