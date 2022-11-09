import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { QuantityInputGroup } from "../../../../components/QuantityInputGroup";
import {
  CardImageContainer,
  CoffeeCardContainer,
  CoffeeCardFooter,
  CoffeeCardTag,
  // QuantityButton,
  // QuantityInput,
  // QuantityInputGroup,
} from "./styles";

interface CoffeeCardProps {
  n: number;
}

export function CoffeeCard({ n }: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <CardImageContainer>
        <img src="/coffee.png" alt="" />
      </CardImageContainer>

      <ul>
        <CoffeeCardTag>tradicional</CoffeeCardTag>
        <CoffeeCardTag>com leite</CoffeeCardTag>
        <CoffeeCardTag>com leite</CoffeeCardTag>
        <CoffeeCardTag>com leite</CoffeeCardTag>
      </ul>

      <h3>Café com Leite {n}</h3>
      <p>Meio a meio de expresso tradicional com leite vaporizado</p>

      <CoffeeCardFooter>
        <p>
          <span>R$</span> 9,90
        </p>
        {/* <input type="number" min={1} step={1} /> */}

        {/* <QuantityInputGroup>
          <QuantityButton>
            <Minus weight="bold" />
          </QuantityButton>
          <QuantityInput type="number" min={1} max={9} step={1} value={1} />
          <QuantityButton>
            <Plus weight="bold" />
          </QuantityButton>
        </QuantityInputGroup> */}
        <QuantityInputGroup />

        <button>
          <ShoppingCart weight="fill" />
        </button>
      </CoffeeCardFooter>
    </CoffeeCardContainer>
  );
}
