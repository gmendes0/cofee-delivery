import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  input {
    width: 100%;

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

  span {
    font-size: 0.7rem;
    font-weight: 700;
    color: ${(props) => props.theme["red-500"]};
    padding: 0;
    margin: 0;
  }
`;
