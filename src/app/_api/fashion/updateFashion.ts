import { UpdateData } from "@/app/_types/type";
import supabase, { supabaseUrl } from "../supabase";

export default async function updateFashion({
  title,
  content,
  tag,
  image,
  id,
}: UpdateData) {
  if (image) {
    const imageName = `${Math.random()}-${image.name}`.replaceAll("/", "");
    const imagePath = `${supabaseUrl}/storage/v1/object/public/fashion-images/${imageName}`;

    const { error } = await supabase
      .from(`fashion-${tag}`)
      .update({ title, content, image: imagePath })
      .eq("id", id);

    const { error: imageError } = await supabase.storage
      .from("fashion-images")
      .upload(imageName, image);

    if (error) throw new Error(error.message);
    if (imageError) throw new Error(imageError.message);
  } else {
    const { error } = await supabase
      .from(`fashion-${tag}`)
      .update({ title, content })
      .eq("id", id);

    if (error) throw new Error(error.message);
  }
}
