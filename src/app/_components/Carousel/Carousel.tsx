"use client";

import supabase from "@/app/_utils/supabase";

import { getUserDataForLocalStorage } from "@/app/_utils/localstorage";
import { toast } from "react-toastify";
import { usePathname } from "next/navigation";

export default function CarouselItem() {
  async function handleSubmit() {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    console.log(user);
  }
  function local() {
    console.log(getUserDataForLocalStorage());
  }

  const searchPaams = usePathname();

  function toastSuccess() {
    toast.success("로그인이 필요합니다!");
    toast.error("로그인이 필요합니다!");
    toast.warn("로그인이 필요합니다!");
    toast.info("로그인이 필요합니다!");

    console.log(searchPaams);
  }

  return (
    <div className=" m-auto flex h-56 w-4/6  gap-6 sm:h-64 xl:h-80 2xl:h-96">
      <button onClick={handleSubmit}>인증</button>
      <button onClick={local}>로컬스토리지 </button>
      <button onClick={() => toastSuccess()}>toast 테스트 </button>
    </div>
  );
}
