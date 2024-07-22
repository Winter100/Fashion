"use client";

import { createContext, useContext } from "react";

import { useDelete } from "../_hooks/useFashion";

interface MyFashionDeleteValue {
  handleCheck: (id: string, tag: string) => void;
  isLoading: boolean;
  handleDelete: () => void;
  disabled: boolean;
}

export const MyFashionDeleteContext =
  createContext<MyFashionDeleteValue | null>(null);

export function useMyFashionDelete() {
  const context = useContext(MyFashionDeleteContext);

  if (context === null) {
    throw new Error("DeleteContext는 제공된 Proivder내에서 사용되어야 합니다.");
  }

  return context;
}

export default function MyFashionDeleteProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const deleteObj = useDelete();

  return (
    <MyFashionDeleteContext.Provider value={{ ...deleteObj }}>
      {children}
    </MyFashionDeleteContext.Provider>
  );
}
