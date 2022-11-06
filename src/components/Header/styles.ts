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
`;

export const CartButton = styled.button`
  border: 0;
  line-height: 0;
  padding: 0.5rem;
  color: ${(props) => props.theme["yellow-700"]};
  background-color: ${(props) => props.theme["yellow-200"]};
  border-radius: 6px;
  cursor: pointer;

  svg {
    width: 1.375rem;
    height: 1.375rem;
  }
`;
