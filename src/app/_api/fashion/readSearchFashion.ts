import { TAG_NAME } from "@/app/_constant/constant";
import supabase from "../supabase";

export default async function readSearchFashion(titleValue: string) {
  const tags = [TAG_NAME.today, TAG_NAME.tomorrow, TAG_NAME.this];

  let allData: any[] = [];

  for (const tag of tags) {
    const { data, error } = await supabase
      .from(`fashion-${tag}`)
      .select("id,title,image,user,created_at,tag")
      .ilike("title", `%${titleValue}%`)
      .order("created_at", { ascending: false });

    if (error) throw new Error(error.message);

    allData = allData.concat(data);
  }

  return allData;
}
