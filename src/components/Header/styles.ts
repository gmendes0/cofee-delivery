import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 2rem 3rem;
  }
`;

export const LocationContainer = styled.span`
  line-height: 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: ${(props) => props.theme["purple-200"]};
  color: ${(props) => props.theme["purple-700"]};
  padding: 0.5rem;
  border-radius: 6px;
  font-weight: 400;
  font-size: 0.875rem;

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const CartButton = styled(Link)`
  border: 0;
  line-height: 0;
  padding: 0.5rem;
  color: ${(props) => props.theme["yellow-700"]};
  background-color: ${(props) => props.theme["yellow-200"]};
  border-radius: 6px;
  cursor: pointer;
  transition: filter 0.2s;
  text-decoration: none;

  position: relative;

  &:hover {
    filter: brightness(0.95);
  }

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }
`;

export const ShoppingCartItemsAmount = styled.span`
  background-color: ${(props) => props.theme["yellow-700"]};
  color: ${(props) => props.theme.white};

  width: 1.25rem;
  height: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;

  font-size: 0.75rem;
  font-weight: 700;

  position: absolute;
  top: calc(1.25rem / 2 * -1); // metade do height
  right: calc(1.25rem / 2 * -1); // metade do width
`;
