"use client";

import Link from "next/link";
import MyFashionItem from "./MyFashionItem";

import { useReadMyFashionList } from "@/app/_hooks/useFashion";
import { MyFashionListType } from "@/app/_types/type";
import { convertToTag } from "@/app/_utils/convertToTag";
import LoadingSpinner from "../../Spinner/LoadingSpinner";
import ErrorWrapper from "../../Error/ErrorWrapper";

export default function MyFashionList({
  handleCheck,
  tagFilter,
  dateFilter,
}: {
  handleCheck: (id: string, tag: string) => void;
  tagFilter: string;
  dateFilter: string;
}) {
  const { data, isLoading } = useReadMyFashionList<MyFashionListType>();

  if (isLoading || !data) {
    return <LoadingSpinner />;
  }

  const filteredData =
    tagFilter === "all" ? data : data.filter((item) => item.tag === tagFilter);

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

  if (!isLoading && sortedData.length === 0) {
    return (
      <ErrorWrapper className="flex h-full w-full items-center justify-center text-4xl">
        <div>
          <div>
            <span>{convertToTag(tagFilter)}</span> 에 기록된 정보가 없습니다.
          </div>
          <div className=" text-center">
            <Link prefetch={false} href="/write" className=" text-xl">
              기록 남기기
            </Link>
          </div>
        </div>
      </ErrorWrapper>
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
