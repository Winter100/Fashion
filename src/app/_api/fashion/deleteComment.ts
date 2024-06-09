import supabase from "../supabase";

export default async function deleteComment(id: string, tag: string) {
  const { error } = await supabase
    .from(`fashion-${tag}-comments`)
    .delete()
    .eq("id", id);

  if (error) throw new Error(error.message);
}
