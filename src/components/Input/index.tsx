import { InputHTMLAttributes } from "react";
import { InputContainer } from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  register: any;
}

export function Input({ error, style, register, ...rest }: InputProps) {
  return (
    <InputContainer style={style}>
      <input {...register} {...rest} />
      {error && <span>{error}</span>}
    </InputContainer>
  );
}
