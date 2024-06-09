import supabase from "../supabase";

export default async function signUp({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}) {
  // 닉네임 중복확인
  const { data: existingUsers, error: searchError } = await supabase
    .from("user_profiles")
    .select("name")
    .eq("name", name);

  if (searchError) throw new Error(searchError.message);
  if (existingUsers.length > 0)
    throw new Error("존재하는 닉네임입니다. 다른 닉네임을 사용해주세요.");

  // 회원가입
  const { data, error: signUpError } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  if (signUpError) {
    throw new Error("존재하는 이메일입니다. 다른 이메일을 사용해주세요.");
  }

  // 가입 후 닉네임 저장
  const { error: nameError } = await supabase
    .from("user_profiles")
    .insert([{ user_id: data?.user?.id, name }]);

  if (nameError) throw new Error(nameError.message);

  return data;
}
