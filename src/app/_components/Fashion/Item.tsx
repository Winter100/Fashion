import Image from "next/image";

export default function Item() {
  return (
    <div className="cursor-pointer">
      <div className="relative h-96 w-full overflow-hidden border-2">
        <Image
          className="transition-transform duration-200 hover:scale-105"
          src={"/woman.png"}
          alt="더미"
          fill
        />
      </div>
      <div className=" text-2xl">제목</div>
    </div>
  );
}
