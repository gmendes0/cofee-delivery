import styled from "styled-components";

export const CoffeeCardContainer = styled.div`
  background-color: ${(props) => props.theme["gray-100"]};
  width: 256px;
  padding: calc(120px - 20px) 1.5rem 1.25rem; // tamanho da imagem - 20px pra fora do card
  margin-top: 20px; // 20px do pedaço da imagem fora do card
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  ul {
    list-style: none;

    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    max-width: 256px;
    width: 100%;
    overflow-x: scroll;
    white-space: nowrap;
    margin: 0.75rem 0 1rem;

    // todo - scrollbar
    &::-webkit-scrollbar {
      display: none;
    }
  }

  h3 {
    font-family: "Baloo 2", sans-serif;
    color: ${(props) => props.theme["gray-700"]};
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  > p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-500"]};
    text-align: center;
    font-weight: 400;
    margin-bottom: 2.0625rem;
  }

  img {
    width: 120px;
    height: 120px;
    object-fit: cover;
  }
`;

export const CardImageContainer = styled.div`
  width: 120px;
  height: 120px;

  position: absolute;
  top: -20px;
  left: auto;

  border-radius: 50%;
  overflow: hidden;
`;

export const CoffeeCardTag = styled.li`
  background-color: ${(props) => props.theme["yellow-200"]};
  border-radius: 100px;
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  color: ${(props) => props.theme["yellow-700"]};
  font-weight: 700;
  font-size: 0.625rem;
`;

export const CoffeeCardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;

  p {
    white-space: nowrap;
    align-items: flex-start;
    font-size: 0.875rem;
    color: ${(props) => props.theme["gray-600"]};
    font-weight: 800;
    font-family: "Baloo 2", sans-serif;
    font-size: 1.5rem;

    span {
      font-weight: 400;
      font-size: 0.875rem;

      font-family: "Roboto", sans-serif;
    }
  }

  /* input {
    width: 4.5rem;
    padding: 0.5rem;
  } */

  > button {
    background-color: ${(props) => props.theme["purple-700"]};
    border: 0;
    border-radius: 6px;
    padding: 0.5rem;
    line-height: 0;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${(props) => props.theme["purple-500"]};
    }

    svg {
      width: 1.375rem;
      height: 1.375rem;
      color: ${(props) => props.theme.white};
    }
  }
`;
