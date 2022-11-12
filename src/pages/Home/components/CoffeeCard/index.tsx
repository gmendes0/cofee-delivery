import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useCallback, useContext, useState } from "react";
import { QuantityInputGroup } from "../../../../components/QuantityInputGroup";
import { CartContext } from "../../../../contexts/CartContext";
import {
  CardImageContainer,
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeCardTag,
} from "./styles";

interface Product {
  id: string;
  description: string;
  image_url: string;
  price: {
    amount: number;
    formatted: {
      currency: string;
      amount: string;
    };
  };
  categories: string[];
  name: string;
}

interface CoffeeCardProps {
  product: Product;
}

export function CoffeeCard({ product }: CoffeeCardProps) {
  const { onAddToCart } = useContext(CartContext);

  const [amount, setAmount] = useState(1);

  function handleAddToCart() {
    onAddToCart(product.id, amount);
    setAmount(1);
  }

  const handleIncrementAmount = useCallback(() => {
    setAmount((state) => (state < 99 ? state + 1 : state));
  }, []);

  const handleDecrementAmount = useCallback(() => {
    setAmount((state) => (state > 1 ? state - 1 : state));
  }, []);

  return (
    <CoffeeCardContainer>
      <CardImageContainer>
        <img src={product.image_url} alt="" />
      </CardImageContainer>

      <ul>
        {product.categories.map((category) => (
          <CoffeeCardTag key={category}>{category}</CoffeeCardTag>
        ))}
      </ul>

      <h3>{product.name}</h3>
      <p>{product.description}</p>

      <CoffeeCardFooter>
        <p>
          <span>{product.price.formatted.currency}</span>{" "}
          {product.price.formatted.amount}
        </p>

        <QuantityInputGroup
          amount={amount}
          onIncrement={handleIncrementAmount}
          onDecrement={handleDecrementAmount}
        />

        <button type="button" onClick={handleAddToCart}>
          <ShoppingCart weight="fill" />
        </button>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  );
}
