import supabase from "../_utils/supabase";

export async function getFashionList() {
  let { data: fashionList, error } = await supabase
    .from("fashionList")
    .select("id,title,image,user");
  return fashionList;
}
