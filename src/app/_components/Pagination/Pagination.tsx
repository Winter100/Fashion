"use client";

import { useSearchName } from "@/app/_hooks/useSearchName";
import { TAG_NAME } from "@/app/_utils/constant";
import { setFashionRoute } from "@/app/_utils/setFashionRoute";
import { Pagination } from "flowbite-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Paginations() {
  const [currentPage, setCurrentPage] = useState(1);
  const router = useRouter();

  const { tag } = useParams();
  const { page, start, end } = useSearchName();

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  function onPageChange(page: number) {
    setCurrentPage(page);
    router.push(
      setFashionRoute(TAG_NAME.fashion, tag as string, page, start, end),
    );
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
