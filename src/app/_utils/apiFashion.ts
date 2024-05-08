import { PostData, UpdateData } from "../_types/type";
import supabase, { supabaseUrl } from "../_utils/supabase";
import { TAG_NAME } from "./constant";

export async function getFashionList(
  tag: string = TAG_NAME.today,
  page: number = 1,
  date: string | Date,
) {
  const itemsPerPage = 30;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = page * itemsPerPage - 1;

  const startDate = `${date}T00:00:00Z`; // 해당 날짜의 시작 (UTC 기준)
  const endDate = `${date}T23:59:59Z`; // 해당 날짜의 종료 (UTC 기준)

  const { data: fashionList, error } = await supabase
    .from(`fashion-${tag}`)
    .select("id,title,image,user,created_at")
    .order("created_at", { ascending: false })
    .gte("created_at", startDate) // 지정된 날짜 이상의 데이터
    .lte("created_at", endDate) // 지정된 날짜 이하의 데이터
    .limit(itemsPerPage)
    .range(startIndex, endIndex);

  if (error) throw new Error(error.message);

  return fashionList;
}

export async function getFashionItem(id: string, tag: string) {
  const { data: findItem, error } = await supabase
    .from(`fashion-${tag}`)
    .select("*")
    .eq("id", id);

  if (error) throw new Error(error.message);

  return findItem[0];
}

export async function getFashionEditItem(
  id: string,
  userId: string | undefined,
  tag: string,
) {
  const { data: findItem, error } = await supabase
    .from(`fashion-${tag}`)
    .select("*")
    .eq("id", id);

  if (error) throw new Error(error.message);
  if (findItem[0]?.user_id !== userId) throw new Error("권한이 없습니다");

  return findItem[0];
}

export async function deleteFashionItem({
  id,
  tag,
}: {
  id: string;
  tag: string;
}) {
  const { error } = await supabase.from(`fashion-${tag}`).delete().eq("id", id);

  if (error) throw new Error(error.message);

  return { id, tag };
}

export async function postFashionItem({
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

export async function updateFashionItem({
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
