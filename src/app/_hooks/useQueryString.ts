"use client";

import { useSearchParams } from "next/navigation";
import { setDateFormat, isValidDateFormat } from "../_utils/dateFn";

export function useQueryString() {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) || 1;
  const start = searchParams.get("start") || "";
  const end = searchParams.get("end") || "";

  const validStart = isValidDateFormat(start) ? start : setDateFormat(true);
  const validEnd = isValidDateFormat(end) ? end : setDateFormat();

  return { page, validStart, validEnd };
}
