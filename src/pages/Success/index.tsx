import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import successIllustrationPNG from "../../assets/success-illustration.png";
import { RoundedIcon } from "../../components/RoudedIcon";
import { CartContext } from "../../contexts/CartContext";
import { stripe } from "../../services/stripe";
import {
  MainContentContainer,
  SuccessCard,
  SuccessCardRow,
  SuccessContainer,
} from "./styles";

export function Success() {
  const { onClearCart } = useContext(CartContext);
  const { session } = useParams();

  useEffect(() => {
    if (!session) return;

    onClearCart();

    stripe
      .post(`/payment_links/${session}`, { active: false })
      .catch((err) => console.log("Failed to deactivate payment link"));
  }, [session]);

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
