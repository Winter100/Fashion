import supabase from "../supabase";

export default async function readComments(id: string, tag: string) {
  const { data: comments, error } = await supabase
    .from(`fashion-${tag}-comments`)
    .select("id,user,created_at,content,rating,user_id")
    .order("created_at", { ascending: true })
    .eq("fashion_id", id);

  if (error) throw new Error(error.message);

  return comments;
}
