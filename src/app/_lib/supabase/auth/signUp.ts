import supabase from "../supabase";
import { SUPABASE_USER_PROFILES } from "@/app/_constant/constant";

export default async function signUp({
  email,
  password,
  name,
}: {
  email: string;
  password: string;
  name: string;
}) {
  // 이메일 중복확인
  const { data: existingEmail, error: existingEmailError } = await supabase
    .from(SUPABASE_USER_PROFILES)
    .select("email")
    .eq("email", email);
  if (existingEmailError) throw new Error(existingEmailError.message);
  if (existingEmail.length > 0)
    throw new Error("존재하는 Email입니다. 다른 Email을 사용해주세요.");

  // 닉네임 중복확인
  const { data: existingName, error: existingNameError } = await supabase
    .from(SUPABASE_USER_PROFILES)
    .select("name")
    .eq("name", name);

  if (existingNameError) throw new Error(existingNameError.message);
  if (existingName.length > 0)
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

  if (signUpError?.status === 422)
    throw new Error("비밀번호는 6자 이상으로 입력해주세요.");

  if (signUpError) throw new Error(signUpError.message);

  // 가입 후 닉네임 및 Email을 user_profiles에 저장 (중복확인DB)
  const { error: userProfilesError } = await supabase
    .from("user_profiles")
    .insert([{ user_id: data?.user?.id, name, email }]);

  if (userProfilesError) throw new Error(userProfilesError.message);

  return data;
}
