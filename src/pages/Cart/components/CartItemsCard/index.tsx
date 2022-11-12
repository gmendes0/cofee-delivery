import { useContext, useEffect, useMemo, useState } from "react";
import { CartContext } from "../../../../contexts/CartContext";
import { CartItem } from "../CartItem";
import {
  CartAside,
  CartAsideCard,
  FinalTotalRow,
  SubmitOrderButton,
  SubtotalRow,
  TotalContainer,
} from "./styles";
import { prices as pricesMock } from "../../../../../prices";
import { priceFormat } from "../../../../utils/formatters";

interface Price {
  id: string;
  formatted_price: string;
  unit_amount: number;
  product: {
    id: string;
    image_url: string;
    name: string;
    amount: number;
  };
}

export function CartItemsCard() {
  const { productAmountList } = useContext(CartContext);

  /**
   * Não usei useEffect e useState porque criaria um derived state
   */
  const prices: Price[] = useMemo(() => {
    /**
     * API CALL
     */
    const pricesResponse = pricesMock.data.filter((price) =>
      productAmountList
        .map((productAmount) => productAmount.id)
        .includes(price.product.id)
    );

    return pricesResponse.map((price) => ({
      id: price.id,
      unit_amount: price.unit_amount,
      formatted_price: new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price.unit_amount / 100),
      product: {
        id: price.product.id,
        image_url: price.product.images[0],
        name: price.product.name,
        amount:
          productAmountList.find(
            (productAmount) => productAmount.id === price.product.id
          )?.amount ?? 1,
      },
    }));
  }, [productAmountList]);

  const subTotal = useMemo(
    () =>
      prices.reduce(
        (acc, price) => acc + (price.unit_amount / 100) * price.product.amount,
        0
      ),
    [prices]
  );

  /**
   * @todo frete
   */
  const shippingCost = 3.5;
  const formattedSubTotal = priceFormat(subTotal);
  const formattedShippingCost = priceFormat(shippingCost);
  const formattedTotal = priceFormat(subTotal + shippingCost);

  return (
    <CartAside>
      <h2>Cafés selecionados</h2>

      <CartAsideCard>
        <ul>
          {prices.map((price) => (
            <CartItem key={price.id} price={price} />
          ))}
        </ul>

        <TotalContainer>
          <SubtotalRow>
            <span>Total de itens</span>
            <span>{formattedSubTotal}</span>
          </SubtotalRow>

          <SubtotalRow>
            <span>Entrega</span>
            <span>{formattedShippingCost}</span>
          </SubtotalRow>

          <FinalTotalRow>
            <span>Total</span>
            <span>{formattedTotal}</span>
          </FinalTotalRow>
        </TotalContainer>

        <SubmitOrderButton type="submit">confirmar pedido</SubmitOrderButton>
      </CartAsideCard>
    </CartAside>
  );
}
