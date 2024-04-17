import { useContext } from "react";
import { ModalContext } from "./Modal";

export function useModal() {
  const data = useContext(ModalContext);

  if (!data) {
    throw new Error("Modal Context안에서만 사용 가능합니다.");
  }

  return data;
}
