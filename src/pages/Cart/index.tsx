import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from "phosphor-react";
import { Link } from "react-router-dom";
import { QuantityInputGroup } from "../../components/QuantityInputGroup";
import { CartItem } from "./components/CartItem";
import { CartItemsCard } from "./components/CartItemsCard";
import { CheckoutAddress } from "./components/CheckoutAddress";
import { CheckoutPaymentMethods } from "./components/CheckoutPaymentMethods";
import { CartContainer, CheckoutDataContainer } from "./styles";

export function Cart() {
  return (
    <CartContainer>
      <CheckoutDataContainer>
        <h2>Complete seu pedido</h2>

        <CheckoutAddress />

        <CheckoutPaymentMethods />
      </CheckoutDataContainer>

      <CartItemsCard />
    </CartContainer>
  );
}
