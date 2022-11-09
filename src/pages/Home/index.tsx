import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import coverSVG from "../../assets/cover.png";
import { RoundedIcon } from "../../components/RoudedIcon";
import { CoffeeCard } from "./components/CoffeeCard";
import {
  Badge,
  BadgesContainer,
  CoffeeListContainer,
  Cover,
  CoverContainer,
  MainContainer,
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
              <Badge>
                <RoundedIcon
                  icon={<ShoppingCart weight="fill" />}
                  background="yellow-700"
                />{" "}
                Compra simples e segura
              </Badge>

              <Badge>
                <RoundedIcon
                  icon={<Package weight="fill" />}
                  background="gray-600"
                />{" "}
                Embalagem mantém o café intacto
              </Badge>

              <Badge>
                <RoundedIcon
                  icon={<Timer weight="fill" />}
                  background="yellow-500"
                />
                Entrega rápida e rastreada
              </Badge>

              <Badge>
                <RoundedIcon
                  icon={<Coffee weight="fill" />}
                  background="purple-500"
                />{" "}
                O café chega fresquinho até você
              </Badge>
            </BadgesContainer>
          </div>

          <Cover src={coverSVG} alt="" />
        </div>
      </CoverContainer>

      <MainContainer>
        <h2>Nossos cafés</h2>

        <CoffeeListContainer>
          {[...new Array(50)].map((e, key) => (
            <CoffeeCard n={key} />
          ))}
        </CoffeeListContainer>
      </MainContainer>
    </>
  );
}
