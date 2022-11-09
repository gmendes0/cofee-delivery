import { CartItem } from "../CartItem";
import {
  CartAside,
  CartAsideCard,
  FinalTotalRow,
  SubmitOrderButton,
  SubtotalRow,
  TotalContainer,
} from "./styles";

export function CartItemsCard() {
  return (
    <CartAside>
      <h2>Cafés selecionados</h2>

      <CartAsideCard>
        <ul>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
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
  );
}
