import Image from "next/image";

export default function Item() {
  return (
    <div>
      <div className="relative h-96 w-full border-2">
        <Image src={"/woman.png"} alt="더미" fill />
      </div>
      <div className=" text-2xl">제목</div>
    </div>
  );
}
