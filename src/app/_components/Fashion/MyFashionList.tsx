"use client";

import MyFashionItem from "./MyFashionItem";

import { useMyFashionList } from "@/app/_hooks/useFashionMethods";
import { DeleteListType, MyFashionListType } from "@/app/_types/type";
import LoadingSpinner from "../Spinner/LoadingSpinner";

export default function MyFashionList({
  checkedIds,
  handleCheck,
  tagFilter,
  dateFilter,
}: {
  checkedIds: DeleteListType[];
  handleCheck: (id: string, tag: string) => void;
  tagFilter: string;
  dateFilter: string;
}) {
  const { flattenedArray, pending: isPending } =
    useMyFashionList<MyFashionListType[]>();

  if (isPending) {
    return <LoadingSpinner />;
  }

  const filteredData =
    tagFilter === "all"
      ? flattenedArray
      : flattenedArray.filter((item) => item.tag === tagFilter);

  const sortedData =
    dateFilter === "up"
      ? filteredData.sort((a, b) => {
          return (
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
          );
        })
      : filteredData.sort((a, b) => {
          return (
            new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
          );
        });

  return (
    <ul>
      {sortedData.map((item) => (
        <li
          key={item.title}
          className="my-2  grid h-36 grid-cols-6 items-center justify-items-center text-xl hover:bg-backgroundOne/70"
        >
          <MyFashionItem
            isChecked={checkedIds.some(
              (itemChecked) => itemChecked.id === item.id,
            )}
            item={item}
            handleCheck={handleCheck}
          />
        </li>
      ))}
    </ul>
  );
}
