import { PostData } from "../_types/type";
import supabase, { supabaseUrl } from "../_utils/supabase";

export async function postFashionItem({
  user,
  title,
  content,
  concept,
  image,
}: PostData) {
  const imageName = `${Math.random()}-${image.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/fashion-images/${imageName}`;
  const { error } = await supabase.from("fashionList").insert([
    {
      title,
      content,
      concept,
      image: imagePath,
      user: user?.user_metadata.name,
      email: user?.email,
      user_id: user?.id,
    },
  ]);

  const { error: imageError } = await supabase.storage
    .from("fashion-images")
    .upload(imageName, image);

  if (error || imageError) {
    throw new Error("실패");
  }
}
