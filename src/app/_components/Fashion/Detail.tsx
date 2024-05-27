import Image from "next/image";

import { convertToKST } from "@/app/_utils/convertToKST";
import DetailContentArea from "./DetailContentArea";

interface DetailType {
  user: string;
  title: string;
  content: string;
  image: string;
  created_at: Date;
}

export default function Detail({
  user,
  title,
  content,
  image,
  created_at,
}: DetailType) {
  return (
    <div className="flex ">
      <div className="flex-rows flex w-full items-center gap-2 p-2">
        <div className="flex-co flex h-full flex-1">
          <div className="relative w-full">
            <Image
              src={image}
              alt="패션 이미지"
              fill
              quality={100}
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex-1">
          <div className=" flex flex-col gap-2">
            <DetailContentArea id="title" KrTitle="제목" value={title} />
            <DetailContentArea id="user" KrTitle="글쓴이" value={user} />
            <DetailContentArea
              id="date"
              KrTitle="작성일"
              value={convertToKST(created_at)}
            />
            <DetailContentArea
              className="h-60 overflow-y-auto"
              id="content"
              KrTitle="내용"
              value={content}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
