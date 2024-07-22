import MyFashionDeleteProvider from "@/app/_provider/MyFashionDeleteProvider";
import MyFashionFilterProivder from "@/app/_provider/MyFashionFilterProvider";
import MyFashionListTitle from "@/app/_components/Fashion/MyFashion/MyFashionListTitle";
import MyFashionList from "@/app/_components/Fashion/MyFashion/MyFashionList";

export default function Page() {
  return (
    <MyFashionDeleteProvider>
      <MyFashionFilterProivder>
        <div className="flex h-full cursor-default flex-col">
          <h1 className=" flex h-20 items-center justify-center text-5xl">
            기록 관리
          </h1>
          <div>
            <MyFashionListTitle />
          </div>
          <div className=" h-full">
            <MyFashionList />
          </div>
        </div>
      </MyFashionFilterProivder>
    </MyFashionDeleteProvider>
  );
}
