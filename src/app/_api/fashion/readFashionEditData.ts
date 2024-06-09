import supabase from "../supabase";

export default async function readFashionEditData(
  id: string,
  userId: string | undefined,
  tag: string,
) {
  const { data: findItem, error } = await supabase
    .from(`fashion-${tag}`)
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);
  if (findItem?.user_id !== userId) throw new Error("권한이 없습니다");

  return findItem;
}
