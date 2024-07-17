import { TAG_NAME } from "@/app/_constant/constant";
import { MyFashionListType } from "@/app/_types/type";

export function tagCount(flattenedArray: MyFashionListType[]) {
  const counts = flattenedArray.reduce(
    (acc, item) => {
      if (item?.tag === TAG_NAME.today) acc.todayCount++;
      else if (item?.tag === TAG_NAME.tomorrow) acc.tomorrowCount++;
      else if (item?.tag === TAG_NAME.this) acc.thisCount++;
      acc.totalCount++;
      return acc;
    },
    { todayCount: 0, tomorrowCount: 0, thisCount: 0, totalCount: 0 },
  );

  return counts;
}
