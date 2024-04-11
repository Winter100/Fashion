import supabase from "./supabase";

export default async function getAuth() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return { user };
}
