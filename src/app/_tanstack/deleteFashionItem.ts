import supabase from "../_utils/supabase";

export async function deleteFashionItem({ id }: { id: string }) {
  const { error } = await supabase.from("fashionList").delete().eq("id", id);
}
