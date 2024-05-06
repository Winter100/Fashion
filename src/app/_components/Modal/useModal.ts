import { useContext } from "react";

import { ModalContext } from "./Modal";

export function useModal() {
  const data = useContext(ModalContext);

  if (!data) {
    throw new Error("Modal Context를 벗어났습니다.");
  }

  return data;
}
