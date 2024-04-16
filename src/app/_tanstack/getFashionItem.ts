import supabase from "../_utils/supabase";

export async function getFashionItem(id: string) {
  const { data: findItem, error }: any = await supabase
    .from("fashionList")
    .select("*")
    .eq("id", id);

  return findItem[0];
}
