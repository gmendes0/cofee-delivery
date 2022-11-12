import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import {
  CheckoutDataTitle,
  CheckoutPaymentMethodsContainer,
  CheckoutPaymentMethodsList,
  PaymentMethodOption,
} from "./styles";

export function CheckoutPaymentMethods() {
  const { register } = useFormContext();

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
            id="payment_method_credit_card"
            value="credit_card"
            defaultChecked
            {...register("payment_method")}
          />
          <label htmlFor="payment_method_credit_card">
            <CreditCard /> Cartão de crédito
          </label>
        </PaymentMethodOption>

        <PaymentMethodOption>
          <input
            type="radio"
            id="payment_method_debit_card"
            value="debit_card"
            {...register("payment_method")}
          />
          <label htmlFor="payment_method_debit_card">
            <Bank /> Cartão de débito
          </label>
        </PaymentMethodOption>

        <PaymentMethodOption>
          <input
            type="radio"
            id="payment_method_money"
            value="money"
            {...register("payment_method")}
          />
          <label htmlFor="payment_method_money">
            <Money /> Dinheiro
          </label>
        </PaymentMethodOption>
      </CheckoutPaymentMethodsList>
    </CheckoutPaymentMethodsContainer>
  );
}
