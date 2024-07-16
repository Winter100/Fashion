import { TextInput } from "flowbite-react";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import Manage from "./Manage/Manage";
import { signUpType } from "@/app/_types/type";

interface InputField {
  register: UseFormRegister<signUpType>;
  id: "email" | "password" | "name" | "passwordConfirm";
  label: "이메일" | "비밀번호" | "닉네임" | "비밀번호 확인";
  errors: FieldErrors<signUpType>;
  disabled: boolean;
  type: "email" | "password" | "name";
  autoComplete: "off" | "current-password" | "new-password";
  validation: object;
  placeholder: string;
}

export default function InputField({
  register,
  id,
  label,
  errors,
  disabled,
  type,
  autoComplete,
  validation,
  placeholder,
}: InputField) {
  return (
    <Manage.Label className="flex w-full items-center justify-center">
      <div className={`w-20 text-center ${errors[id] ? "text-red-500" : ""}`}>
        {label}
      </div>
      <Manage.Content className="w-full">
        <TextInput
          style={{ fontSize: "20px" }}
          disabled={disabled}
          id={id}
          type={type}
          autoComplete={autoComplete}
          placeholder={placeholder}
          {...register(id, validation)}
        />
      </Manage.Content>
    </Manage.Label>
  );
}
