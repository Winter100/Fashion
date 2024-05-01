import Image from "next/image";

import { ListItemType } from "@/app/_types/type";

export default function Item({ title, image, concept }: ListItemType) {
  return (
    <div className="duration-400 flex h-full w-full cursor-pointer  flex-col transition-shadow ease-in-out hover:bg-backgroundOne hover:shadow-2xl">
      <div className="relative h-full w-full ">
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
      <div className="flex h-[5rem] flex-col items-center justify-center gap-2 sm:h-[7rem]">
        <p className=" text-3xl">{title}</p>
        <p className=" text-xl">{concept}</p>
      </div>
    </div>
  );
}
