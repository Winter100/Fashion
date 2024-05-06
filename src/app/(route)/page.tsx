import Link from "next/link";

import HomeLayout from "../_components/Layout/HomeLayout";
import { TAG_NAME } from "../_utils/constant";
import { getRoute } from "../_utils/getRoute";

export default async function page() {
  return (
    <HomeLayout>
      <h1 className="hidden text-7xl">오늘 어때?</h1>
      <p className="text-5xl">오늘의 나를 한장의 사진으로 기록해보세요!</p>
      <Link
        href={getRoute(TAG_NAME.fashion, TAG_NAME.today, 1)}
        className=" flex h-12 w-20 items-center justify-center rounded-lg border border-borderColor text-2xl hover:border-gray-700"
      >
        오늘 어때?
      </Link>
    </HomeLayout>
  );
}
