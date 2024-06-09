import { TAG_NAME } from "@/app/_constant/constant";
import supabase from "../supabase";

export default async function readFashionList(
  tag: string = TAG_NAME.today,
  page: number = 1,
  start: string,
  end: string,
) {
  const itemsPerPage = 30;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage - 1;

  const startDate = `${start}T00:00:00Z`;
  const endDate = `${end}T23:59:59Z`;

  const { data: fashionList, error } = await supabase
    .from(`fashion-${tag}`)
    .select("id,title,image,user,created_at,tag")
    .order("created_at", { ascending: false })
    .gte("created_at", startDate)
    .lte("created_at", endDate)
    .limit(itemsPerPage)
    .range(startIndex, endIndex);

  if (error) throw new Error(error.message);

  return fashionList;
}
