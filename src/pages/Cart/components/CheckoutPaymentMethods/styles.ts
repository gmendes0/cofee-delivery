import styled from "styled-components";

export const CheckoutPaymentMethodsContainer = styled.div`
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
    color: ${(props) => props.theme["purple-500"]};
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

export const CheckoutPaymentMethodsList = styled.div`
  margin: 2rem 0 0;
  display: flex;
  flex-direction: row;
  gap: 0.75rem;

  @media screen and (max-width: 565px) {
    flex-direction: column;
  }
`;

export const PaymentMethodOption = styled.span`
  font-size: 0.75rem;
  text-transform: uppercase;
  font-weight: 400;
  display: flex;
  align-items: center;

  border-radius: 6px;
  overflow: hidden;

  input[type="radio"] {
    // nao usei display none para continuar funcionando as setinhas
    max-width: 0;
    max-height: 0;
  }

  input[type="radio"]:checked + label {
    background-color: ${(props) => props.theme["purple-200"]};
    border: 1px solid ${(props) => props.theme["purple-500"]};
  }

  label {
    border-radius: 6px;

    padding: 1.0625rem 1rem;
    background-color: ${(props) => props.theme["gray-300"]};

    display: flex;
    align-items: center;
    color: ${(props) => props.theme["gray-600"]};
    cursor: pointer;
  }

  label svg {
    color: ${(props) => props.theme["purple-500"]};
    width: 16px;
    height: 16px;
    margin-right: 0.75rem;
  }

  @media screen and (max-width: 565px) {
    label {
      width: 100%;
    }
  }
`;
