"use client";

import MyFashionItem from "./MyFashionItem";

import { useMyFashionList } from "@/app/_hooks/useFashionMethods";
import { DeleteListType, MyFashionListType } from "@/app/_types/type";
import LoadingSpinner from "../Spinner/LoadingSpinner";

export default function MyFashionList({
  checkedIds,
  handleCheck,
}: {
  checkedIds: DeleteListType[];
  handleCheck: (id: string, tag: string) => void;
}) {
  const { flattenedArray, pending: isPending } =
    useMyFashionList<MyFashionListType[]>();

  if (isPending) {
    return <LoadingSpinner />;
  }

  return (
    <ul>
      {flattenedArray.map((item) => (
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
