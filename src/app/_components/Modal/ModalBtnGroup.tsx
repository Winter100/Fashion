import { ReactNode } from "react";

export default function ModalBtnGroup({ children }: { children: ReactNode }) {
  return <div className=" m-auto flex gap-4">{children}</div>;
}
