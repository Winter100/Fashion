import { createPortal } from "react-dom";
import { useModal } from "./useModal";

export default function ModalWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { open, handleClose } = useModal();

  return (
    open &&
    createPortal(
      <div
        onClick={handleClose}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-70"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="grid h-72 w-96 grid-rows-3 rounded-lg bg-white p-5"
        >
          {children}
        </div>
      </div>,
      document.body,
    )
  );
}
