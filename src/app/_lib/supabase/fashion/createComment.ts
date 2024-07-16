import supabase from "../supabase";
import { CommentData } from "@/app/_types/type";

export default async function createComment({
  user,
  content,
  fashionId,
  tag,
  parent_id,
}: CommentData) {
  const { error } = await supabase.from(`fashion_${tag}_comments`).insert([
    {
      user: user?.user_metadata.name,
      content,
      fashion_id: fashionId,
      user_id: user?.id,
      parent_id,
    },
  ]);

  if (error) throw new Error(error.message);

  return "";
}
