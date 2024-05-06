import Image from "next/image";

import { ListItemType } from "@/app/_types/type";

export default function Item({ title, image, user }: ListItemType) {
  return (
    <div className="duration-400 flex h-full w-full cursor-pointer  flex-col transition-shadow ease-in-out hover:bg-backgroundOne hover:shadow-2xl">
      <div className="relative h-full w-full ">
        <Image
          className=" rounded-xl object-cover"
          src={image}
          quality={90}
          alt={title}
          fill
          priority
        />
      </div>
      <div className="flex h-[5rem] flex-col items-center justify-center gap-2 sm:h-[7rem]">
        <p className="w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-center text-3xl">
          {title}
        </p>
        <p className="w-full overflow-hidden overflow-ellipsis whitespace-nowrap text-center text-xl">
          {user}
        </p>
      </div>
    </div>
  );
}
