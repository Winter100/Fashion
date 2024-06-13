"use client";

import { setFashionRoute } from "../_utils/setFashionRoute";
import HomeLayout from "../_layouts/HomeLayout";
import { TAG_NAME } from "../_constant/constant";
import { useRouter } from "next/navigation";
import { autoSignOut } from "../_utils/autoSignOut";

export default function Page() {
  const router = useRouter();

  function handleRoute() {
    autoSignOut();
    router.push(setFashionRoute(TAG_NAME.fashion, TAG_NAME.today));
  }
  return (
    <HomeLayout>
      <h1 className="hidden">이 옷 어때?</h1>
      <p className="text-4xl sm:text-5xl">내 패션을 기록하고 자랑해 보세요!</p>
      <button
        onClick={handleRoute}
        className=" flex h-12 w-20 items-center justify-center rounded-lg border border-borderColor text-2xl hover:border-gray-700"
      >
        이 옷 어때?
      </button>
    </HomeLayout>
  );
}
