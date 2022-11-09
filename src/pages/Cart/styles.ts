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

const iconColors = {
  yellow: "yellow-700",
  purple: "purple-500",
} as const;

interface CheckoutDataTitleProps {
  iconColor: keyof typeof iconColors;
}

export const CheckoutDataTitle = styled.div<CheckoutDataTitleProps>`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;

  svg {
    width: 1.375rem;
    height: 1.375rem;
    color: ${(props) => props.theme[iconColors[props.iconColor]]};
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

export const CheckoutPaymentMethods = styled.div`
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

export const CartAside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const CartAsideCard = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-self: flex-start;

  padding: 2.5rem;
  background-color: ${(props) => props.theme["gray-100"]};
  border-radius: 6px 44px;

  & > ul {
    list-style: none;

    display: flex;
    flex-direction: column;
  }
`;

export const CartItemCard = styled.li`
  display: flex;
  gap: 1.25rem;
  padding: 0.5rem 0.25rem 2rem;
  border-bottom: 1px solid ${(props) => props.theme["gray-300"]};
  justify-content: space-between;

  & + & {
    padding-top: 2rem;
  }

  img {
    width: 4rem;
    height: 4rem;
  }

  @media screen and (min-width: 375px) and (max-width: 425px) {
    padding: 0.5rem 0 2rem;
    align-items: center;

    img {
      width: 1.5rem;
      height: 1.5rem;
    }

    & > span {
      display: block;
      text-align: end;
    }
  }

  @media screen and (min-width: 320px) and (max-width: 375px) {
    padding: 0.5rem 0 2rem;
    align-items: center;

    img {
      display: none;
    }

    & > span {
      display: block;
      text-align: end;
    }
  }

  @media screen and (max-width: 320px) {
    flex-direction: column;

    padding: 0.5rem 0 2rem;
    align-items: center;

    img {
      display: none;
    }

    & > span {
      display: block;
      text-align: end;
    }
  }

  & > div {
    gap: 0.5rem;
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  & > div span {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme["gray-700"]};
  }

  & > span {
    font-family: "Baloo 2", sans-serif;
    font-size: 1rem;
    font-weight: 700;

    white-space: nowrap;
  }
`;

export const CartItemCardActions = styled.div`
  display: flex;
  gap: 0.5rem;

  & > button {
    line-height: 0;
    display: flex;
    gap: 0.25rem;
    align-items: center;
    font-size: 0.75rem;
    font-weight: 400;
    color: ${(props) => props.theme["gray-600"]};
    border: 0;
    background-color: ${(props) => props.theme["gray-300"]};
    padding: 0.5rem;
    border-radius: 6px;
    cursor: pointer;
    transition: color, background-color 0.2s;

    &:hover {
      background-color: ${(props) => props.theme["gray-400"]};
      color: ${(props) => props.theme["gray-700"]};
    }

    &:hover svg {
      color: ${(props) => props.theme["purple-700"]};
    }

    & svg {
      color: ${(props) => props.theme["purple-500"]};
      width: 16px;
      height: 16px;
    }
  }
`;

export const TotalContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  margin: 1.5rem 0;
`;

export const SubtotalRow = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 0.875rem;
  font-weight: 400;
  color: ${(props) => props.theme["gray-600"]};

  span + span {
    font-size: 1rem;
  }
`;

export const FinalTotalRow = styled(SubtotalRow)`
  font-weight: 700;
  font-size: 1.25rem;
  color: ${(props) => props.theme["gray-700"]};

  span + span {
    font-size: 1.25rem;
  }
`;

export const SubmitOrderButton = styled.button`
  border: 0;
  background-color: ${(props) => props.theme["yellow-500"]};
  padding: 0.75rem;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme["yellow-700"]};
  }
`;
