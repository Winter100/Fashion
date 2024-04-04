import supabase from "./supabase";

export default async function handleSignUp(
  email: string,
  password: string,
  name: string,
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  return { data, error };
}
