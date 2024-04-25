import { ReactNode } from "react";
import { Button } from "flowbite-react";

import { useModal } from "./useModal";

export default function ModalBtnGroup({
  children,
  ...props
}: {
  children: ReactNode;
  [key: string]: any;
}) {
  const { isProcessing, className } = props;
  const { handleClose } = useModal();

  return (
    <div className={className}>
      <Button color="gray" disabled={isProcessing} onClick={handleClose}>
        <span className="text-xl">취 소</span>
      </Button>
      {children}
    </div>
  );
}
