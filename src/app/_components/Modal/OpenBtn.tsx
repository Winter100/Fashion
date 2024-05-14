import React, { cloneElement } from "react";
import { useModal } from "./useModal";

export default function OpenBtn({ children }: { children: any }) {
  const { handleOpen } = useModal();
  return <div>{cloneElement(children, { onClick: handleOpen })}</div>;
}
