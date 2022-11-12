import { Trash } from "phosphor-react";
import { useContext } from "react";
import { QuantityInputGroup } from "../../../../components/QuantityInputGroup";
import { CartContext } from "../../../../contexts/CartContext";
import { CartItemCard, CartItemCardActions } from "./styles";

interface CartItemProps {
  price: {
    id: string;
    formatted_price: string;
    unit_amount: number;
    product: {
      id: string;
      image_url: string;
      name: string;
      amount: number;
    };
  };
}

export function CartItem({ price }: CartItemProps) {
  const {
    onIncrementProductAmount,
    onDecrementProductAmount,
    onRemoveProduct,
  } = useContext(CartContext);

  function handleIncrementProductAmount() {
    onIncrementProductAmount(price.product.id);
  }

  function handleDecrementProductAmount() {
    onDecrementProductAmount(price.product.id);
  }

  function handleRemoveFromCart() {
    onRemoveProduct(price.product.id);
  }

  return (
    <CartItemCard>
      <img src={price.product.image_url} alt="" />

      <div>
        <span>{price.product.name}</span>

        <CartItemCardActions>
          <QuantityInputGroup
            amount={price.product.amount}
            onIncrement={handleIncrementProductAmount}
            onDecrement={handleDecrementProductAmount}
          />

          <button type="button" onClick={handleRemoveFromCart}>
            <Trash /> Remover
          </button>
        </CartItemCardActions>
      </div>

      <span>{price.formatted_price}</span>
    </CartItemCard>
  );
}
