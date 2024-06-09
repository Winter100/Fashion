import Image from "next/image";

import { convertToKST } from "@/app/_utils/convertToKST";
import DetailContentArea from "./DetailContentArea";
import { DetailType } from "@/app/_types/type";

export default function Detail({
  user,
  title,
  content,
  image,
  created_at,
}: DetailType) {
  return (
    <div className="flex ">
      <div className="flex w-full flex-col items-center gap-2 p-2 md:flex-row">
        <div className="flex h-96 w-full flex-col md:h-full md:flex-1">
          <div className="relative h-full rounded-xl border border-backgroundTwo">
            <Image
              src={image}
              alt="패션 이미지"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="w-full flex-1">
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
