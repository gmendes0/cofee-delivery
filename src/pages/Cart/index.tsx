import { useForm, FormProvider, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { CartItemsCard } from "./components/CartItemsCard";
import { CheckoutAddress } from "./components/CheckoutAddress";
import { CheckoutPaymentMethods } from "./components/CheckoutPaymentMethods";
import { CartContainer, CheckoutDataContainer } from "./styles";
import { useCallback, useEffect } from "react";

const schema = z.object({
  zipcode: z
    .string({ required_error: "O CEP é obrigatório" })
    .length(8, { message: "O CEP deve ter 8 caracteres" }),
  street: z
    .string({ required_error: "A rua é obrigatória" })
    .min(1, { message: "A rua deve ter no mínimo 1 caractere" }),
  number: z
    .string({ required_error: "O número é obrigatório" })
    .min(1, { message: "O número deve ter no mínimo 1 caractere" }),
  line_two: z.string().optional(),
  neighborhood: z
    .string({ required_error: "O bairro é obrigatório" })
    .min(1, { message: "O bairro deve ter no mínimo 1 caractere" }),
  city: z
    .string({ required_error: "A cidade é obrigatório" })
    .min(1, { message: "A cidade deve ter no mínimo 1 caractere" }),
  state: z
    .string({ required_error: "A UF é obrigatória" })
    .length(2, { message: "A UF deve ter 2 caracteres" }),
  payment_method: z.enum(["money", "debit_card", "credit_card"]),
});

export type FormDataType = z.infer<typeof schema>;

export function Cart() {
  const form = useForm<FormDataType>({
    resolver: zodResolver(schema),
  });

  const { handleSubmit } = form;

  const handleSubmitCheckout: SubmitHandler<FormDataType> = (data) => {
    console.log(data);
  };

  return (
    <FormProvider {...form}>
      <CartContainer onSubmit={handleSubmit(handleSubmitCheckout)}>
        <CheckoutDataContainer>
          <h2>Complete seu pedido</h2>

          <CheckoutAddress />

          <CheckoutPaymentMethods />
        </CheckoutDataContainer>

        <CartItemsCard />
      </CartContainer>
    </FormProvider>
  );
}
