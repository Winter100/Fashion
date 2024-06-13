"use client";

import { useCallback, useEffect, useState } from "react";

import { DeleteListType } from "@/app/_types/type";
import {
  getFilteredValueForLocalStorage,
  setFilterValueForLocalStorage,
} from "@/app/_utils/localstorage";
import MyFashionListTitle from "@/app/_components/Fashion/MyFashion/MyFashionListTitle";
import MyFashionList from "@/app/_components/Fashion/MyFashion/MyFashionList";
import { useDelete } from "@/app/_hooks/useFashion";

export default function Page() {
  const { deleteFashion, isLoading, setLoading } = useDelete();
  const [checkedIds, setCheckedIds] = useState<DeleteListType[]>([]);
  const [tagFilter, setTagFilter] = useState(
    () => getFilteredValueForLocalStorage("tagFilter") || "all",
  );
  const [dateFilter, setDateFilter] = useState(
    () => getFilteredValueForLocalStorage("dateFilter") || "down",
  );

  const handleCheck = useCallback((id: string, tag: string) => {
    setCheckedIds((prevCheckedIds) => {
      const isAlreadyChecked = prevCheckedIds.some((item) => item.id === id);
      if (isAlreadyChecked) {
        return prevCheckedIds.filter((item) => item.id !== id);
      } else {
        return [...prevCheckedIds, { id, tag }];
      }
    });
  }, []);

  function handleDelete() {
    setLoading(true);
    deleteFashion(checkedIds, {
      onSuccess: () => {
        setCheckedIds([]);
        setLoading(false);
      },
    });
  }

  useEffect(() => {
    setFilterValueForLocalStorage("tagFilter", tagFilter);
  }, [tagFilter]);

  useEffect(() => {
    setFilterValueForLocalStorage("dateFilter", dateFilter);
  }, [dateFilter]);

  return (
    <div className="flex h-full cursor-default flex-col">
      <h1 className=" flex h-20 items-center justify-center text-5xl">
        기록 관리
      </h1>
      <div>
        <MyFashionListTitle
          tagFilter={tagFilter}
          setTagFilter={setTagFilter}
          dateFilter={dateFilter}
          setDateFilter={setDateFilter}
          onDelete={handleDelete}
          isLoading={isLoading}
          disabled={checkedIds.length === 0}
        />
      </div>
      <div className=" h-full">
        <MyFashionList
          tagFilter={tagFilter}
          dateFilter={dateFilter}
          handleCheck={handleCheck}
        />
      </div>
    </div>
  );
}
