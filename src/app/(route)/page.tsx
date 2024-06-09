import Link from "next/link";

import { setFashionRoute } from "../_utils/setFashionRoute";
import HomeLayout from "../_layouts/HomeLayout";
import { TAG_NAME } from "../_constant/constant";

export default async function page() {
  return (
    <HomeLayout>
      <h1 className="hidden">이 옷 어때?</h1>
      <p className="text-4xl sm:text-5xl">내 패션을 기록하고 자랑해 보세요!</p>
      <Link
        prefetch={false}
        href={setFashionRoute(TAG_NAME.fashion, TAG_NAME.today)}
        className=" flex h-12 w-20 items-center justify-center rounded-lg border border-borderColor text-2xl hover:border-gray-700"
      >
        이 옷 어때?
      </Link>
    </HomeLayout>
  );
}
