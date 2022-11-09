import styled from "styled-components";

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
