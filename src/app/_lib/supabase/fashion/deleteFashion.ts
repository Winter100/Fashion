import supabase from "../supabase";
import { DeleteListType } from "@/app/_types/type";

export default async function deleteFashion(items: DeleteListType[]) {
  try {
    await Promise.all(
      items.map(({ id, tag }) =>
        supabase.from(`fashion_${tag}`).delete().eq("id", id),
      ),
    );
  } catch (error: any) {
    throw new Error(error?.message);
  }
}
