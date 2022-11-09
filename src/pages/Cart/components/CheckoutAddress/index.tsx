import { MapPinLine } from "phosphor-react";
import {
  CheckoutDataTitle,
  CheckoutDataAddress,
  CheckoutAddressContainer,
} from "./styles";

export function CheckoutAddress() {
  return (
    <CheckoutAddressContainer>
      <CheckoutDataTitle>
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
        <input style={{ gridArea: "ct" }} type="text" placeholder="Cidade" />
        <input style={{ gridArea: "uf" }} type="text" placeholder="UF" />
      </CheckoutDataAddress>
    </CheckoutAddressContainer>
  );
}
