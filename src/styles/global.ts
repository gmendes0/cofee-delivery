import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,
  textarea,
  select,
  button,
  input {
    font-family: Roboto, 'sans-serif';
    font-weight: 400;
    font-size: 1rem;
  }

  body {
    background: ${(props) => props.theme["gray-50"]}
  }
`;
