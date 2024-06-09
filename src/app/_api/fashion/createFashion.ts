import { PostData } from "@/app/_types/type";
import supabase, { supabaseUrl } from "../supabase";

export default async function createFashion({
  user,
  title,
  content,
  tag,
  image,
}: PostData) {
  const imageName = `${Math.random()}-${image.name}`.replaceAll("/", "");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/fashion-images/${imageName}`;
  const { error } = await supabase.from(`fashion-${tag}`).insert([
    {
      title,
      content,
      tag,
      image: imagePath,
      user: user?.user_metadata.name,
      email: user?.email,
      user_id: user?.id,
    },
  ]);

  const { error: imageError } = await supabase.storage
    .from("fashion-images")
    .upload(imageName, image);

  if (error) throw new Error(error.message);
  if (imageError) throw new Error(imageError.message);

  return tag;
}
