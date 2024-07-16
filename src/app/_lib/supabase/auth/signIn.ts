import supabase from "../supabase";

export default async function signIn({
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

  if (error) throw new Error("이메일 또는 비밀번호를 확인해주세요.");

  return data;
}
