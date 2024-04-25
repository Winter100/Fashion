import { PostData, UpdateData } from "../_types/type";
import supabase, { supabaseUrl } from "../_utils/supabase";

export async function deleteFashionItem({ id }: { id: string }) {
  const { error } = await supabase.from("fashionList").delete().eq("id", id);

  if (error) throw new Error(error.message);

  return id;
}

export async function getFashionItem(id: string) {
  const { data: findItem, error } = await supabase
    .from("fashionList")
    .select("*")
    .eq("id", id);

  if (error) throw new Error(error.message);

  return findItem[0];
}
export async function getFashionEditItem(
  id: string,
  userId: string | undefined,
) {
  const { data: findItem, error } = await supabase
    .from("fashionList")
    .select("*")
    .eq("id", id);

  if (error) throw new Error(error.message);
  if (findItem[0]?.user_id !== userId) throw new Error("권한이 없습니다");

  return findItem[0];
}

export async function getFashionList() {
  const { data: fashionList, error } = await supabase
    .from("fashionList")
    .select("id,title,image,user,concept");

  if (error) throw new Error(error.message);

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

  if (error) throw new Error(error.message);
  if (imageError) throw new Error(imageError.message);
}

export async function updateFashionItem({
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

    if (error) throw new Error(error.message);
    if (imageError) throw new Error(imageError.message);
  } else {
    const { error } = await supabase
      .from("fashionList")
      .update({ title, content, concept })
      .eq("id", fashionId);

    if (error) throw new Error(error.message);
  }
}
