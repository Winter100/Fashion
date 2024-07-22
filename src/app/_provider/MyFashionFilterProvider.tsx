"use client";

import React, { createContext, useContext } from "react";

import { useMyFilter } from "../_hooks/useFashion";

interface MyFilterValue {
  setTagFilter: React.Dispatch<React.SetStateAction<string>>;
  setDateFilter: React.Dispatch<React.SetStateAction<string>>;
  tagFilter: string;
  dateFilter: string;
}

export const MyFashionFilterContext = createContext<MyFilterValue | null>(null);

export function useMyFashionFilter() {
  const context = useContext(MyFashionFilterContext);

  if (context === null) {
    throw new Error("FilterContext는 제공된 Proivder내에서 사용되어야 합니다.");
  }

  return context;
}

export default function MyFashionFilterProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const myFilter = useMyFilter();
  return (
    <MyFashionFilterContext.Provider value={myFilter}>
      {children}
    </MyFashionFilterContext.Provider>
  );
}
