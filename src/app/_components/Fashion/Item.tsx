import { ListItemType } from "@/app/_types/type";
import Image from "next/image";

export default function Item({ title, image, concept }: ListItemType) {
  return (
    <div className="duration-400 border-borderColor flex h-[28rem] w-72 cursor-pointer flex-col border transition-shadow ease-in-out hover:border-gray-600 hover:shadow-2xl">
      <div className="relative h-full ">
        <Image
          className=" object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={image}
          quality={90}
          alt={title}
          fill
          priority
        />
      </div>
      <div className="flex h-[14rem] flex-col items-center justify-center gap-4  p-2">
        <p className=" text-3xl">{title}</p>
        <p className=" text-xl">{concept}</p>
      </div>
    </div>
  );
}
