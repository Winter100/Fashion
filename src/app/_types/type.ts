import { ChangeEventHandler, FormEvent } from "react";

import { User } from "@supabase/supabase-js";

export interface inputType {
  title: string;
  tag: string;
  content: string;
  preview: string;
  imageFile: { 0: File };
}

export interface PostData {
  user?: User | null;
  title: string;
  tag: string;
  content: string;
  image: File;
  fashionId?: string;
}

export interface CommentData {
  user: User | null;
  content: string;
  fashionId: string;
  tag: string;
  rating: number;
}

export interface CommentType {
  id: string;
  created_at: string;
  user: string;
  content: string;
  rating: number;
  sameUser: boolean;
  onDelete: (items: DeleteListType) => void;
  commentLoading: boolean;
}

export interface UpdateDataFn {
  title: string;
  content: string;
  image?: File;
  fashionId?: string;
}
export interface UpdateData {
  title: string;
  tag: string;
  content: string;
  image?: File;
  id?: string;
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

export interface ListItemType {
  id: string;
  title: string;
  user: string;
  image: string;
  created_at: string;
}

export interface ItemType extends ListItemType {
  content: string;
  created_at: string;
  user: string;
}

export interface ModalContextType {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

export interface EditDataType extends ItemType {
  user_id: string;
}

export interface MyFashionListType {
  email: string;
  id: string;
  user: string;
  user_id: string;
  title: string;
  image: string;
  tag: string;
  created_at: Date;
  content: string;
}
export interface MyItemType {
  item: MyFashionListType;
  isChecked: boolean;
  handleCheck: (id: string, tag: string) => void;
}

export interface DeleteListType {
  id: string;
  tag: string;
}

export interface DeletePropsType {
  title?: string;
  isLoading: boolean;
  onDelete: (items: any) => void;
  color?:
    | ""
    | "dark"
    | "failure"
    | "gray"
    | "light"
    | "purple"
    | "success"
    | "warning"
    | "blue"
    | "cyan"
    | "green"
    | "indigo"
    | "lime"
    | "pink"
    | "red"
    | "teal"
    | "yellow";
  size: "xs" | "sm" | "md" | "lg" | "xl";
}
