"use client";

import { Pagination } from "flowbite-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Paginations({
  route,
  query,
  totalPage,
}: {
  route: string;
  query: string;
  totalPage: number;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page"));
  const router = useRouter();

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  function onPageChange(page: number) {
    setCurrentPage(page);
    router.push(`${route}?${query}=${page}`);
  }

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination
        className="text-xl"
        previousLabel="이전"
        nextLabel="다음"
        currentPage={currentPage}
        totalPages={totalPage}
        onPageChange={onPageChange}
        showIcons
      />
    </div>
  );
}
