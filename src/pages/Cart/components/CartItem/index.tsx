import { Trash } from "phosphor-react";
import { QuantityInputGroup } from "../../../../components/QuantityInputGroup";
import { CartItemCard, CartItemCardActions } from "./styles";

export function CartItem() {
  return (
    <CartItemCard>
      <img src="/coffee.png" alt="" />

      <div>
        <span>Expresso Tradicional</span>

        <CartItemCardActions>
          <QuantityInputGroup />

          <button type="button">
            <Trash /> Remover
          </button>
        </CartItemCardActions>
      </div>

      <span>R$ 9,90</span>
    </CartItemCard>
  );
}
