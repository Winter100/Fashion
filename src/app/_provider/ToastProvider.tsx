"use client";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <ToastContainer
        bodyClassName=" text-xs"
        position="bottom-right"
        autoClose={1000}
        pauseOnHover={false}
        closeOnClick={true}
        pauseOnFocusLoss={false}
        draggable
        theme="light"
        transition={Bounce}
      />
    </>
  );
}
