import supabase from "./supabase";

export async function getAuth() {
  const { data: session } = await supabase.auth.getSession();

  if (!session?.session) return null;

  const { data, error } = await supabase.auth.getUser();

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function signIn({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function signUp({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}) {
  const sanitizedName = name.replace(/\s+/g, "");

  const { data: existingUsers, error: searchError } = await supabase
    .from("user_profiles")
    .select("name")
    .eq("name", sanitizedName);

  if (searchError) throw new Error(searchError.message);
  if (existingUsers.length > 0)
    throw new Error("존재하는 닉네임입니다. 다른 닉네임을 사용해주세요.");

  const { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name: sanitizedName,
      },
    },
  });

  if (signUpError) throw new Error(signUpError.message);

  const { data: nameData, error: nameError } = await supabase
    .from("user_profiles")
    .insert([{ user_id: data?.user?.id, name: name }]);

  if (nameError) throw new Error(nameError.message);

  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
}
