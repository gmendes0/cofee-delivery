import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

import successIllustrationPNG from "../../assets/success-illustration.png";
import { RoundedIcon } from "../../components/RoudedIcon";
import {
  MainContentContainer,
  SuccessCard,
  SuccessCardRow,
  SuccessContainer,
} from "./styles";

export function Success() {
  return (
    <SuccessContainer>
      <MainContentContainer>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <SuccessCard>
          <SuccessCardRow>
            <RoundedIcon
              icon={<MapPin weight="fill" />}
              background="purple-500"
            />

            <span>
              <span>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </span>
              <span>Farrapos - Porto Alegre, RS</span>
            </span>
          </SuccessCardRow>

          <SuccessCardRow>
            <RoundedIcon
              icon={<Timer weight="fill" />}
              background="yellow-500"
            />

            <span>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </span>
          </SuccessCardRow>

          <SuccessCardRow>
            <RoundedIcon
              icon={<CurrencyDollar weight="fill" />}
              background="yellow-700"
            />

            <span>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </span>
          </SuccessCardRow>
        </SuccessCard>
      </MainContentContainer>

      <img src={successIllustrationPNG} alt="" />
    </SuccessContainer>
  );
}
