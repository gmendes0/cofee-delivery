import { CreditCard } from "phosphor-react";
import { PaymentMethodOption } from "./styles";

interface PaymentMethodProps {
  label: string;
}

export function PaymentMethod({ label }: PaymentMethodProps) {
  return (
    <PaymentMethodOption>
      <input
        type="radio"
        name="payment_method"
        id="payment_method_1"
        defaultChecked
      />
      <label htmlFor="payment_method_1">
        <CreditCard /> Cartão de crédito
      </label>
    </PaymentMethodOption>
  );
}
