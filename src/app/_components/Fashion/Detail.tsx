import Image from "next/image";
import { Label } from "flowbite-react";
import { convertToKST } from "@/app/_utils/convertToKST";

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
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex-rows flex w-full items-center gap-2 p-2">
        <div className="flex h-full flex-1 flex-col items-center">
          <div className="image-parents-div-fill">
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

        <div className="m-auto flex-1">
          <div className=" flex flex-col gap-4">
            <div>
              <div className=" block ">
                <Label
                  htmlFor="title"
                  className=" m-auto text-xl"
                  value="제목"
                />
              </div>
              <p id="title" className="rounded-xl border p-2 text-xl">
                {title}
              </p>
            </div>
            <div>
              <div className="block ">
                <Label
                  htmlFor="user"
                  className=" m-auto text-xl"
                  value="글쓴이"
                />
              </div>
              <p id="user" className="rounded-xl border p-2 text-xl">
                {user}
              </p>
            </div>
            <div>
              <div className="block ">
                <Label
                  htmlFor="date"
                  className=" m-auto text-xl"
                  value="작성일"
                />
              </div>
              <p id="date" className="rounded-xl border p-2 text-xl">
                {convertToKST(created_at)}
              </p>
            </div>
            <div>
              <div className="block ">
                <Label
                  htmlFor="content"
                  className=" m-auto text-xl"
                  value="내용"
                />
              </div>
              <p
                id="title"
                className=" h-48 overflow-y-auto whitespace-pre-wrap rounded-xl border p-2 text-xl"
              >
                {content}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
