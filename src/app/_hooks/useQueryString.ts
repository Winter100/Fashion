"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { setDateFormat, isValidDateFormat } from "../_utils/dateFn";

export function useQueryString() {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const start = searchParams.get("start") || "";
  const end = searchParams.get("end") || "";
  const q = searchParams.get("q") || "";

  const validStart = isValidDateFormat(start) ? start : setDateFormat(true);
  const validEnd = isValidDateFormat(end) ? end : setDateFormat();

  return { page, validStart, validEnd, q };
}

export function useChageQueryString() {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  function changeQuery(
    queryStringValue: string = "page",
    changeValue: string | number,
  ) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(queryStringValue, changeValue.toString());

    const changedURI = `${pathName}?${params.toString()}`;

    return changedURI;
  }

  return { changeQuery };
}
