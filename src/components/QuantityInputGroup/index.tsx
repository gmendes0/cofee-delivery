import { Minus, Plus } from "phosphor-react";
import {
  QuantityButton,
  QuantityInput,
  QuantityInputGroupContainer,
} from "./styles";

export function QuantityInputGroup() {
  return (
    <QuantityInputGroupContainer>
      <QuantityButton type="button">
        <Minus weight="bold" />
      </QuantityButton>
      <QuantityInput type="number" min={1} max={9} step={1} value={1} />
      <QuantityButton type="button">
        <Plus weight="bold" />
      </QuantityButton>
    </QuantityInputGroupContainer>
  );
}
