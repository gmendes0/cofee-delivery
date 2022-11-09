import styled from "styled-components";

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
`;
