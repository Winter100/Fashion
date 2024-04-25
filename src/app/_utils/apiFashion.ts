import { PostData, UpdateData } from "../_types/type";
import supabase, { supabaseUrl } from "../_utils/supabase";

export async function deleteFashionItem({ id }: { id: string }) {
  const { error } = await supabase.from("fashionList").delete().eq("id", id);

  return id;
}

export async function getFashionItem(id: string) {
  const { data: findItem, error }: any = await supabase
    .from("fashionList")
    .select("*")
    .eq("id", id);

  return findItem[0];
}

export async function getFashionList() {
  let { data: fashionList, error } = await supabase
    .from("fashionList")
    .select("id,title,image,user");
  return fashionList;
}

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
