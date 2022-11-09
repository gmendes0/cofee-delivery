import styled from "styled-components";

export const HomeContainer = styled.div`
  /* margin: 0 auto; */
  /* max-width: 1120px; */
`;

export const CoverContainer = styled.div`
  width: 100%;

  background-image: url("/background.png");
  background-size: cover;
  background-repeat: no-repeat;

  & > div {
    display: flex;
    justify-content: space-between;

    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 5.75rem 0;

    @media screen and (max-width: 1024px) {
      padding: 5.75rem 3rem;
    }
  }
`;

export const Cover = styled.img`
  /* margin-left: 77px; */
  width: 476px;
  height: 360px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1 {
    font-family: "Baloo 2", sans-serif;
    font-size: 3rem;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme["gray-800"]};
  }

  p {
    font-size: 1.25rem;
    font-weight: 400;
    color: ${(props) => props.theme["gray-700"]};
  }

  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`;

export const BadgesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 18.375rem);
  gap: 1.25rem 0;
  justify-content: center;

  width: 100%;

  margin: 4.125rem auto 0;

  @media screen and (min-width: 768px) and (max-width: 1024px) {
    max-width: calc((18.375rem + 1.25rem) * 2);
  }
`;

export const Badge = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => props.theme["gray-600"]};
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
