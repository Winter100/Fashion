"use client";

import { useSearchParams } from "next/navigation";
import { convertPadZeroDate } from "../_utils/dateFn";

export function useSearchName() {
  const searchParams = useSearchParams();

  const page = Number(searchParams.get("page")) ?? 1;
  const start = searchParams.get("start") ?? convertPadZeroDate(null, true);
  const end = searchParams.get("end") ?? convertPadZeroDate();

  return { page, start, end };
}
