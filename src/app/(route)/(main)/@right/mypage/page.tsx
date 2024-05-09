import RightWrapper from "@/app/_components/Layout/RightWrapper";

export default function Page() {
  return (
    <RightWrapper className="flex h-full items-center justify-center border">
      <div>
        <h2 className=" my-4 text-6xl">
          <label>Menu</label>
        </h2>

        <div>
          <ul className=" flex flex-col items-center justify-center text-3xl">
            <li>
              <button>내 정보</button>
            </li>
            <li>
              <button>내 기록</button>
            </li>
          </ul>
        </div>
      </div>
    </RightWrapper>
  );
}
