import { UpdateData } from "../_types/type";
import supabase, { supabaseUrl } from "../_utils/supabase";

export async function updateFashionItem({
  user,
  title,
  content,
  concept,
  image,
  fashionId,
}: UpdateData) {
  if (image) {
    const imageName = `${Math.random()}-${image.name}`.replaceAll("/", "");
    const imagePath = `${supabaseUrl}/storage/v1/object/public/fashion-images/${imageName}`;

    const { error } = await supabase
      .from("fashionList")
      .update({ title, content, concept, image: imagePath })
      .eq("id", fashionId);

    const { error: imageError } = await supabase.storage
      .from("fashion-images")
      .upload(imageName, image);
  } else {
    const { error } = await supabase
      .from("fashionList")
      .update({ title, content, concept })
      .eq("id", fashionId);
  }
}
