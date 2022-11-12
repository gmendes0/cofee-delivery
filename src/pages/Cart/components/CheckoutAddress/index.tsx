import { MapPinLine } from "phosphor-react";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { FormDataType } from "../..";
import { Input } from "../../../../components/Input";
import { api } from "../../../../services/api";
import {
  CheckoutDataTitle,
  CheckoutDataAddress,
  CheckoutAddressContainer,
} from "./styles";

interface ZipcodeResponse {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  complemento: string;
}

export function CheckoutAddress() {
  const { register, formState, watch, setValue } =
    useFormContext<FormDataType>();

  const zipcode = watch("zipcode");

  async function handleFetchZipcode() {
    try {
      if (!zipcode || !/^\d{8}$/.test(zipcode) || formState.errors.zipcode)
        return;

      const response = await api.get<ZipcodeResponse>(`${zipcode}/json`);

      if (!response.data) return;

      setValue("street", response.data.logradouro, { shouldValidate: true });
      setValue("neighborhood", response.data.bairro, { shouldValidate: true });
      setValue("city", response.data.localidade, { shouldValidate: true });
      setValue("state", response.data.uf, { shouldValidate: true });
    } catch (error) {
      console.log(
        `Não foi possível obter o endereço através do CEP: ${zipcode}`
      );
    }
  }

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
        <Input
          style={{ gridArea: "c" }}
          type="text"
          placeholder="CEP"
          maxLength={8}
          register={{ ...register("zipcode") }}
          error={formState.errors.zipcode?.message}
          onBlur={handleFetchZipcode}
        />

        <Input
          style={{ gridArea: "r" }}
          type="text"
          placeholder="Rua"
          register={{ ...register("street") }}
          error={formState.errors.street?.message}
        />
        <Input
          style={{ gridArea: "n" }}
          type="text"
          placeholder="Número"
          register={{ ...register("number") }}
          error={formState.errors.number?.message}
        />
        <Input
          style={{ gridArea: "cc" }}
          type="text"
          placeholder="Complemento (opcional)"
          register={{ ...register("line_two") }}
          error={formState.errors.line_two?.message}
        />
        <Input
          style={{ gridArea: "b" }}
          type="text"
          placeholder="Bairro"
          register={{ ...register("neighborhood") }}
          error={formState.errors.neighborhood?.message}
        />
        <Input
          style={{ gridArea: "ct" }}
          type="text"
          placeholder="Cidade"
          register={{ ...register("city") }}
          error={formState.errors.city?.message}
        />
        <Input
          style={{ gridArea: "uf" }}
          type="text"
          placeholder="UF"
          register={{ ...register("state") }}
          error={formState.errors.state?.message}
        />
      </CheckoutDataAddress>
    </CheckoutAddressContainer>
  );
}
