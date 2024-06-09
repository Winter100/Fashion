"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Pagination } from "flowbite-react";

import {
  useChangeQueryString,
  useQueryString,
} from "@/app/_hooks/useQueryString";

export default function Paginations() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);

  const { page } = useQueryString();
  const { changeQuery } = useChangeQueryString();

  useEffect(() => {
    setCurrentPage(Number(page));
  }, [page]);

  function onPageChange(page: number) {
    setCurrentPage(page);
    router.push(changeQuery("page", page));
  }

  return (
    <div className="flex h-14 justify-center overflow-x-auto">
      <Pagination
        className="text-xl"
        previousLabel="이전"
        nextLabel="다음"
        currentPage={currentPage}
        totalPages={100}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
}
