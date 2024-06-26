import React from "react";
import { FieldError, UseFormRegister } from "react-hook-form";

interface IFormInput {
  name: string;
  email: string;
  age: number;
}
interface InputFieldProps {
  id: string;
  type?: string;
  label: string;
  register: UseFormRegister<IFormInput>;
  rules?: object;
  error?: FieldError;
  labelStyle?: object;
  inputStyle?: object;
  styleErr?: object;
}

const InputField: React.FC<InputFieldProps> = ({
  id,
  type = "text",
  label,
  register,
  rules,
  error,
  labelStyle,
  inputStyle,
  styleErr,
}) => {
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...register(id as keyof IFormInput, rules)}
        style={inputStyle}
      />
      <br></br>
      {error && <span style={styleErr}>{error.message}</span>}
    </div>
  );
};

export default InputField;
