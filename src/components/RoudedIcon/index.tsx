import { ReactNode } from "react";
import { RoundedIconContainer } from "./styles";
import type { BackgroundType, ColorType } from "./styles";

interface RoundedIconProps {
  icon: ReactNode;
  background?: BackgroundType;
  color?: ColorType;
}

export function RoundedIcon({
  icon,
  background = "gray-500",
  color = "gray-50",
}: RoundedIconProps) {
  return (
    <RoundedIconContainer background={background} color={color}>
      {icon}
    </RoundedIconContainer>
  );
}
