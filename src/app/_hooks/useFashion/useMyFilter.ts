import { useEffect, useState } from "react";

import {
  getFilteredValueForLocalStorage,
  setFilterValueForLocalStorage,
} from "@/app/_lib/utils/localstorage";

export default function useMyFilter() {
  const [tagFilter, setTagFilter] = useState(
    () => getFilteredValueForLocalStorage("tagFilter") || "all",
  );
  const [dateFilter, setDateFilter] = useState(
    () => getFilteredValueForLocalStorage("dateFilter") || "down",
  );

  useEffect(() => {
    setFilterValueForLocalStorage("tagFilter", tagFilter);
  }, [tagFilter]);

  useEffect(() => {
    setFilterValueForLocalStorage("dateFilter", dateFilter);
  }, [dateFilter]);

  return {
    setTagFilter,
    setDateFilter,
    tagFilter,
    dateFilter,
  };
}
