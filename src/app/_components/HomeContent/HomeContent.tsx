"use client";

import { useRouter } from "next/navigation";

import { TAG_NAME } from "@/app/_constant/constant";
import { autoSignOut } from "@/app/_lib/utils/autoSignOut";
import { setFashionRoute } from "@/app/_lib/utils/setFashionRoute";

export default function HomeContent() {
  const router = useRouter();

  function handleRoute() {
    autoSignOut();
    router.push(setFashionRoute(TAG_NAME.fashion, TAG_NAME.today));
  }
  return (
    <>
      <h1 className="hidden">이 옷 어때?</h1>
      <p className="text-4xl sm:text-5xl">내 패션을 기록하고 자랑해 보세요!</p>
      <button
        onClick={handleRoute}
        className=" flex h-12 w-20 items-center justify-center rounded-lg border border-borderColor text-2xl hover:border-gray-700"
      >
        이 옷 어때?
      </button>
    </>
  );
}
