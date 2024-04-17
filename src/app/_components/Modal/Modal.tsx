import { ModalContextType } from "@/app/_types/type";
import { createContext, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import OpenModalBtn from "./OpenModalBtn";
import ModalTitle from "./ModalTitle";
import ModalContent from "./ModalContent";
import ModalBtnGroup from "./ModalBtnGroup";

export const ModalContext = createContext<ModalContextType>({
  open: false,
  handleOpen: () => {},
  handleClose: () => {},
});

export default function Modal({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  function handleOpen() {
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }

  return (
    <ModalContext.Provider value={{ open, handleOpen, handleClose }}>
      {children}
    </ModalContext.Provider>
  );
}

Modal.OpenModalBtn = OpenModalBtn;
Modal.Wrapper = ModalWrapper;
Modal.Title = ModalTitle;
Modal.Content = ModalContent;
Modal.ButtonWrapper = ModalBtnGroup;
