import styled from "styled-components";
import { defaultTheme } from "../../styles/themes/default";

export type BackgroundType = keyof typeof defaultTheme;
export type ColorType = keyof typeof defaultTheme;

interface RoundedIconContainerProps {
  background: BackgroundType;
  color: ColorType;
}

export const RoundedIconContainer = styled.div<RoundedIconContainerProps>`
  background-color: ${(props) => props.theme[props.background]};

  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;

  > svg {
    width: 1rem;
    height: 1rem;
    color: ${(props) => props.theme[props.color]};
  }
`;
