import { ChangeEventHandler, FormEvent } from "react";

export type inputType = {
  title: string;
  concept: string;
  content: string;
  image: string;
};
export type WriteType = {
  input: inputType;
  preview: string;
  onChageInput: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handlePreview: ChangeEventHandler<HTMLInputElement>;
  handleSubmit: (e: FormEvent) => void;
};
export type signInType = {
  email: string;
  password: string;
};

export type signUpType = signInType & {
  name: string;
  passwordConfirm: string;
};
