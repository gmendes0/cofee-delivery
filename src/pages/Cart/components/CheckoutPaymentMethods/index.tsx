import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import {
  CheckoutDataTitle,
  CheckoutPaymentMethodsContainer,
  CheckoutPaymentMethodsList,
  PaymentMethodOption,
} from "./styles";

export function CheckoutPaymentMethods() {
  return (
    <CheckoutPaymentMethodsContainer>
      <CheckoutDataTitle>
        <CurrencyDollar />

        <div>
          <p>Pagamento</p>
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </div>
      </CheckoutDataTitle>

      <CheckoutPaymentMethodsList>
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

        <PaymentMethodOption>
          <input type="radio" name="payment_method" id="payment_method_2" />
          <label htmlFor="payment_method_2">
            <Bank /> Cartão de débito
          </label>
        </PaymentMethodOption>

        <PaymentMethodOption>
          <input type="radio" name="payment_method" id="payment_method_3" />
          <label htmlFor="payment_method_3">
            <Money /> Dinheiro
          </label>
        </PaymentMethodOption>
      </CheckoutPaymentMethodsList>
    </CheckoutPaymentMethodsContainer>
  );
}
