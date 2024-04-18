import { User } from "@supabase/supabase-js";
import { ChangeEventHandler, FormEvent } from "react";

export interface inputType {
  title: string;
  concept: string;
  content: string;
  preview: string;
  // image: { 0: File };
  imageFile: { 0: File };
}

export interface PostData {
  user?: User | null;
  title: string;
  concept: string;
  content: string;
  image: File;
  fashionId?: string;
}

export interface UpdateData {
  user: User;
  title: string;
  concept: string;
  content: string;
  image?: File;
  fashionId?: string;
}
export interface WriteType {
  input: inputType;
  preview: string;
  onChageInput: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  handlePreview: ChangeEventHandler<HTMLInputElement>;
  handleSubmit: (e: FormEvent) => void;
}
export type signInType = {
  email: string;
  password: string;
};

export type signUpType = signInType & {
  name: string;
  passwordConfirm: string;
};

export interface ItemType {
  id: string;
  title: string;
  concept: string;
  content: string;
  created_at: string;
  image: string;
  user: string;
}

export interface ModalContextType {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}
