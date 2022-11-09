import styled from "styled-components";

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
