"use client";

import { useDelete } from "@/app/_hooks/useFashion";
import MyFashionListTitle from "@/app/_components/Fashion/MyFashion/MyFashionListTitle";
import MyFashionList from "@/app/_components/Fashion/MyFashion/MyFashionList";

export default function Page() {
  const {
    isLoading,
    handleCheck,
    handleDelete,
    setDateFilter,
    setTagFilter,
    dateFilter,
    tagFilter,
    checkedIds,
  } = useDelete();

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
