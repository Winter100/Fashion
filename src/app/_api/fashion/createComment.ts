import { CommentData } from "@/app/_types/type";
import supabase from "../supabase";

export default async function createComment({
  user,
  content,
  fashionId,
  tag,
}: CommentData) {
  const { error } = await supabase.from(`fashion-${tag}-comments`).insert([
    {
      user: user?.user_metadata.name,
      content,
      fashion_id: fashionId,
      user_id: user?.id,
    },
  ]);

  if (error) throw new Error(error.message);

  return "";
}
