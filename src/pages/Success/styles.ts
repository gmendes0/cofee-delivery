import styled from "styled-components";

export const SuccessContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  padding: 5rem 0 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    height: 18.3125rem;
    width: 30.75rem;
  }

  @media screen and (max-width: 1024px) {
    padding: 5rem 3rem;

    > img {
      display: none;
    }
  }
`;

export const MainContentContainer = styled.main`
  > h2 {
    font-family: "Baloo 2";
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme["yellow-700"]};
    margin-bottom: 0.25rem;
  }

  > p {
    font-weight: 400;
    font-size: 1.25rem;
    color: ${(props) => props.theme["gray-700"]};
  }
`;

export const SuccessCard = styled.div`
  /* Borda gradiente */
  border: double 1px transparent;
  background-image: linear-gradient(white, white),
    radial-gradient(
      circle at top left,
      ${(props) => props.theme["yellow-500"]},
      ${(props) => props.theme["purple-500"]}
    );
  background-origin: border-box;
  background-clip: padding-box, border-box;
  border-radius: 6px 36px;
  overflow: hidden;

  padding: 2.5rem;
  margin: 2.5rem 0;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const SuccessCardRow = styled.div`
  display: flex;
  gap: 0.75rem;

  > span {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    color: ${(props) => props.theme["gray-600"]};
  }
`;
