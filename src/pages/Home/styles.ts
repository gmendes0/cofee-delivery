import styled from "styled-components";

export const HomeContainer = styled.div`
  /* margin: 0 auto; */
  /* max-width: 1120px; */
`;

export const CoverContainer = styled.div`
  width: 100vw;

  background-image: url("/background.png");
  background-size: cover;
  background-repeat: no-repeat;

  & > div {
    display: flex;
    justify-content: space-between;

    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 92px 0;
  }
`;

export const Cover = styled.img`
  margin-left: 77px;
  width: 476px;
  height: 360px;
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
`;

export const BadgesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.25rem 0;

  margin: 4.125rem auto 0;

  > span {
    /* display: flex;
    align-items: center;
    gap: 0.75rem;

    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme["gray-600"]};

    svg {
      width: 1rem;
      height: 1rem;
      box-sizing: content-box;

      padding: 0.5rem;
      background-color: ${(props) => props.theme["yellow-700"]};
      border-radius: 50%;
      color: ${(props) => props.theme.white};
    } */
  }
`;

/**
 * 'as const' diz ao TS que o tipo dos valores é exatamente o que está escrito e nao uma string qualquer
 */
const badgeVariantColor = {
  brown: "yellow-700",
  yellow: "yellow-500",
  gray: "gray-600",
  purple: "purple-500",
} as const;

interface BadgeProps {
  variant: keyof typeof badgeVariantColor;
}

export const Badge = styled.span<BadgeProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => props.theme["gray-600"]};

  svg {
    width: 1rem;
    height: 1rem;
    box-sizing: content-box;

    padding: 0.5rem;
    background-color: ${(props) =>
      props.theme[badgeVariantColor[props.variant]]};
    border-radius: 50%;
    color: ${(props) => props.theme.white};
  }
`;
