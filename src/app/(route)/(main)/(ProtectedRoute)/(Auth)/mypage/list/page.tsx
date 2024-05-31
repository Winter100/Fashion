"use client";

import { useEffect, useState } from "react";

import { useDelete } from "@/app/_hooks/useFashionMethods";
import { DeleteListType } from "@/app/_types/type";
import {
  getFilteredValueForLocalStorage,
  setFilterValueForLocalStorage,
} from "@/app/_utils/localstorage";
import MyFashionListTitle from "@/app/_components/Fashion/MyFashion/MyFashionListTitle";
import MyFashionList from "@/app/_components/Fashion/MyFashion/MyFashionList";

export default function Page() {
  const { deleteFashion, isLoading, setLoading } = useDelete();
  const [checkedIds, setCheckedIds] = useState<DeleteListType[]>([]);
  const [tagFilter, setTagFilter] = useState(
    () => getFilteredValueForLocalStorage("tagFilter") || "all",
  );
  const [dateFilter, setDateFilter] = useState(
    () => getFilteredValueForLocalStorage("dateFilter") || "down",
  );

  function handleCheck(id: string, tag: string) {
    const isAlreadyChecked = checkedIds.some((item) => item.id === id);
    if (isAlreadyChecked) {
      setCheckedIds(checkedIds.filter((item) => item.id !== id));
    } else {
      setCheckedIds([...checkedIds, { id, tag }]);
    }
  }

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
    <div className="cursor-default">
      <h1 className="my-6 text-center text-5xl">기록 관리</h1>
      <MyFashionListTitle
        tagFilter={tagFilter}
        setTagFilter={setTagFilter}
        dateFilter={dateFilter}
        setDateFilter={setDateFilter}
        onDelete={handleDelete}
        isLoading={isLoading}
        disabled={checkedIds.length === 0}
      />

      <MyFashionList
        tagFilter={tagFilter}
        dateFilter={dateFilter}
        checkedIds={checkedIds}
        handleCheck={handleCheck}
      />
    </div>
  );
}
