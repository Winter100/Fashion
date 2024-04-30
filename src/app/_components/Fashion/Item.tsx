import Image from "next/image";

import { ListItemType } from "@/app/_types/type";

export default function Item({ title, image, concept }: ListItemType) {
  return (
    <div className="duration-400 flex h-[24rem] w-full cursor-pointer flex-col transition-shadow ease-in-out hover:shadow-2xl">
      <div className="relative h-full ">
        <Image
          className=" rounded-xl object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={image}
          quality={90}
          alt={title}
          fill
          priority
        />
      </div>
      <div className="flex h-[9rem] flex-col items-center justify-center gap-4 p-2">
        <p className=" text-3xl">{title}</p>
        <p className=" text-xl">{concept}</p>
      </div>
    </div>
  );
}
