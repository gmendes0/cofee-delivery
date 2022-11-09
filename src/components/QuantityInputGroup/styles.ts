import styled from "styled-components";

export const QuantityInputGroupContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  background-color: ${(props) => props.theme["gray-300"]};
  padding: 0.53125rem 0.5rem;
  border-radius: 6px;

  /* width: 4rem; */
`;

export const QuantityButton = styled.button`
  width: 0.875rem;
  height: 0.875rem;
  line-height: 0;
  border: 0;
  background: inherit;
  cursor: pointer;
  transition: color 0.2s;

  svg {
    width: 0.68375rem;
    height: 0.68375rem;
    color: ${(props) => props.theme["purple-500"]};
    /* font-weight: bold; */
  }

  &:hover svg {
    color: ${(props) => props.theme["purple-700"]};
  }
`;

export const QuantityInput = styled.input`
  width: 1.25rem;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  border: 0;
  background: inherit;
  color: ${(props) => props.theme["gray-800"]};

  // disable arrows
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    padding: 0;
    line-height: 0;
  }
  -moz-appearance: textfield;
`;
