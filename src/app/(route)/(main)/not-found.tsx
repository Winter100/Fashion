import Image from "next/image";

export default function NotFound() {
  return (
    <div className=" flex h-full w-full flex-col items-center justify-center gap-4 font-sans">
      <Image
        src={"/404.png"}
        alt="찾을 수 없는 페이지"
        width={400}
        height={500}
      />
      <h2 className="text-2xl font-medium md:text-3xl">
        해당 페이지를 찾을 수 없습니다.
      </h2>

      <div className=" text-center text-sm md:text-base">
        <p>찾으려는 페이지의 주소가 잘못 입력되었거나,</p>
        <p>주소의 변경 또는 삭제로 인해 사용하실 수 없습니다.</p>
        <p>입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주세요.</p>
      </div>
    </div>
  );
}