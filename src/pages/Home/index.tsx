import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import coverSVG from "../../assets/cover.png";
import {
  Badge,
  BadgesContainer,
  Cover,
  CoverContainer,
  HomeContainer,
  TitleContainer,
} from "./styles";

export function Home() {
  return (
    <>
      <CoverContainer>
        <div>
          <div>
            <TitleContainer>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </p>
            </TitleContainer>

            <BadgesContainer>
              <Badge variant="brown">
                <ShoppingCart weight="fill" /> Compra simples e segura
              </Badge>

              <Badge variant="gray">
                <Package weight="fill" /> Embalagem mantém o café intacto
              </Badge>

              <Badge variant="yellow">
                <Timer weight="fill" /> Entrega rápida e rastreada
              </Badge>

              <Badge variant="purple">
                <Coffee weight="fill" /> O café chega fresquinho até você
              </Badge>
            </BadgesContainer>
          </div>

          <Cover src={coverSVG} alt="" />
        </div>
      </CoverContainer>
    </>
  );
}
