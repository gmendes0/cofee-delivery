import { Minus, Plus } from "phosphor-react";
import {
  QuantityButton,
  // QuantityInput,
  QuantityInputGroupContainer,
} from "./styles";

interface QuantityInputGroupProps {
  amount: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export function QuantityInputGroup({
  amount = 1,
  onDecrement,
  onIncrement,
}: QuantityInputGroupProps) {
  return (
    <QuantityInputGroupContainer>
      <QuantityButton type="button" onClick={onDecrement}>
        <Minus weight="bold" />
      </QuantityButton>
      <span>{amount}</span>
      <QuantityButton type="button" onClick={onIncrement}>
        <Plus weight="bold" />
      </QuantityButton>
    </QuantityInputGroupContainer>
  );
}
