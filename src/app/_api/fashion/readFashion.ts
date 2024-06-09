import supabase from "../supabase";

export default async function readFashion(id: string, tag: string) {
  const { data: findItem, error } = await supabase
    .from(`fashion-${tag}`)
    .select("*")
    .eq("id", id)
    .single();

  if (error) throw new Error(error.message);

  return findItem;
}
