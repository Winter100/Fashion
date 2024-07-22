import { MyFashionListType } from "@/app/_types/type";

export function filterData(data: MyFashionListType[], tagFilter: string) {
  return tagFilter === "all"
    ? data
    : data.filter((item) => item.tag === tagFilter);
}

export function sortData(data: MyFashionListType[], dateFilter: string) {
  return [...data].sort((a, b) => {
    const dateA = new Date(a.created_at).getTime();
    const dateB = new Date(b.created_at).getTime();
    return dateFilter === "up" ? dateA - dateB : dateB - dateA;
  });
}
