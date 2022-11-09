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
import {
  CartAside,
  CartAsideCard,
  CartContainer,
  CartItemCard,
  CartItemCardActions,
  CheckoutDataAddress,
  CheckoutDataContainer,
  CheckoutDataTitle,
  CheckoutPaymentMethods,
  FinalTotalRow,
  PaymentMethodOption,
  SubmitOrderButton,
  SubtotalRow,
  TotalContainer,
} from "./styles";

export function Cart() {
  return (
    <CartContainer>
      <CheckoutDataContainer>
        <h2>Complete seu pedido</h2>

        <div>
          <CheckoutDataTitle iconColor="yellow">
            <MapPinLine />
            <div>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </div>
          </CheckoutDataTitle>

          <CheckoutDataAddress>
            <input style={{ gridArea: "c" }} type="text" placeholder="CEP" />
            <input style={{ gridArea: "r" }} type="text" placeholder="Rua" />
            <input style={{ gridArea: "n" }} type="text" placeholder="Número" />
            <input
              style={{ gridArea: "cc" }}
              type="text"
              placeholder="Complemento (opcional)"
            />
            <input style={{ gridArea: "b" }} type="text" placeholder="Bairro" />
            <input
              style={{ gridArea: "ct" }}
              type="text"
              placeholder="Cidade"
            />
            <input style={{ gridArea: "uf" }} type="text" placeholder="UF" />
          </CheckoutDataAddress>
        </div>

        <div>
          <CheckoutDataTitle iconColor="purple">
            <CurrencyDollar />

            <div>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </div>
          </CheckoutDataTitle>

          <CheckoutPaymentMethods>
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
          </CheckoutPaymentMethods>
        </div>
      </CheckoutDataContainer>

      <CartAside>
        <h2>Cafés selecionados</h2>

        <CartAsideCard>
          <ul>
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
          </ul>

          <TotalContainer>
            <SubtotalRow>
              <span>Total de itens</span>
              <span>R$ 29,70</span>
            </SubtotalRow>

            <SubtotalRow>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </SubtotalRow>

            <FinalTotalRow>
              <span>Total</span>
              <span>R$ 33,20</span>
            </FinalTotalRow>
          </TotalContainer>

          <SubmitOrderButton type="submit">confirmar pedido</SubmitOrderButton>
        </CartAsideCard>
      </CartAside>
    </CartContainer>
  );
}
