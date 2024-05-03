import FashionList from "@/app/_components/Fashion/List";
import Paginations from "@/app/_components/Pagination/Pagination";
import { TAG_NAME } from "@/app/_utils/constant";

export default function Page() {
  return (
    <div className=" flex h-full flex-col justify-between">
      <FashionList tag={TAG_NAME.today} />

      <div className=" h-16 w-full">
        <Paginations
          route={`fashion${TAG_NAME.today}`}
          query="page"
          totalPage={100}
        />
      </div>
    </div>
  );
}
