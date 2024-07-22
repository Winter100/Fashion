"use client";

import Link from "next/link";

import MyFashionItem from "./MyFashionItem";
import AlertWrapper from "../../Common/AlertWrapper";
import LoadingSpinner from "../../Common/LoadingSpinner";
import { convertToTag } from "@/app/_lib/utils/convertToTag";
import { useReadMyFashionList } from "@/app/_hooks/useFashion";
import { MyFashionListType } from "@/app/_types/type";
import { useMyFashionFilter } from "@/app/_provider/MyFashionFilterProvider";
import { useMyFashionDelete } from "@/app/_provider/MyFashionDeleteProvider";
import { filterData, sortData } from "@/app/_lib/utils/filterData";

export default function MyFashionList() {
  const { data, isLoading } = useReadMyFashionList<MyFashionListType>();

  const { tagFilter, dateFilter } = useMyFashionFilter();
  const { handleCheck } = useMyFashionDelete();

  if (isLoading || !data) return <LoadingSpinner />;

  const filteredData = filterData(data, tagFilter);
  const sortedData = sortData(filteredData, dateFilter);

  if (sortedData.length === 0) {
    return (
      <AlertWrapper
        description={`${convertToTag(tagFilter)} 의 기록이 없습니다.`}
      >
        <Link className="m-auto text-xl" href="/write">
          기록 남기기
        </Link>
      </AlertWrapper>
    );
  }

  return (
    <ul>
      {sortedData.map((item) => (
        <li
          key={item.id}
          className="my-2 grid h-36 grid-cols-6 items-center justify-items-center text-base hover:bg-backgroundOne/70 md:text-xl"
        >
          <MyFashionItem item={item} handleCheck={handleCheck} />
        </li>
      ))}
    </ul>
  );
}
