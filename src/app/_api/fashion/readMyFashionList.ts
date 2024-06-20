import { TAG_NAME } from "@/app/_constant/constant";
import supabase from "../supabase";

export default async function readMyFashionList(userName: string) {
  const tags = [TAG_NAME.today, TAG_NAME.tomorrow, TAG_NAME.this];

  let allData: any[] = [];

  for (const tag of tags) {
    const { data, error } = await supabase
      .from(`fashion_${tag}`)
      .select("id,title,image,user,created_at,tag")
      .eq("user", userName);

    allData = allData.concat(data);

    if (error) throw new Error(error.message);
  }
  return allData;
}
