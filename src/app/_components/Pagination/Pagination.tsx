"use client";

import { TAG_NAME } from "@/app/_utils/constant";
import { getRoute } from "@/app/_utils/getRoute";
import { Pagination } from "flowbite-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Paginations() {
  const [currentPage, setCurrentPage] = useState(1);

  const searchParams = useSearchParams();
  const router = useRouter();

  const { tag } = useParams();
  const page = Number(searchParams.get("page"));

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  function onPageChange(page: number) {
    setCurrentPage(page);
    router.push(getRoute(TAG_NAME.fashion, tag as string, page));
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
