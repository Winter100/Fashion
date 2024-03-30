import List from "@/app/_components/Fashion/List";
import Link from "next/link";

export default async function Page() {
  return (
    <div>
      <ul className=" mb-2 mt-2 flex justify-end">
        <Link
          href="fashion/write"
          className="cursor-pointer text-4xl hover:font-bold"
        >
          글쓰기
        </Link>
      </ul>
      <List />
    </div>
  );
}
