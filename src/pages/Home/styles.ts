import styled from "styled-components";

export const HomeContainer = styled.div`
  /* margin: 0 auto; */
  /* max-width: 1120px; */
`;

export const MainContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 2rem auto 0;

  h2 {
    font-family: "Baloo 2", sans-serif;
    font-size: 2rem;
    color: ${(props) => props.theme["gray-700"]};
  }

  @media screen and (max-width: 1024px) {
    padding: 0 3rem;
  }
`;

export const CoffeeListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    256px
  ); // auto-fill tenta preencher o espaço com quantos items der
  gap: 20px 32px;
  justify-content: center;
  padding: 2.125rem 0;
`;
