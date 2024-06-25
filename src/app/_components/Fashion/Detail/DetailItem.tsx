import Image from "next/image";

import { convertToKST } from "@/app/_utils/convertToKST";
import { DetailType } from "@/app/_types/type";
import Manage from "../../Manage/Manage";

export default function DetailItem({
  user,
  title,
  content,
  image,
  created_at,
}: DetailType) {
  return (
    <div className="flex ">
      <div className="flex min-h-[500px] w-full flex-col items-center gap-2 p-2 md:flex-row">
        <div className="flex h-96 w-full flex-col md:h-full md:flex-1">
          <div className="relative h-full">
            <Image
              src={image}
              alt="패션 이미지"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="h-full w-full flex-1">
          <Manage className="w-full text-lg ">
            <Manage.ContentWrapper className="flex h-full gap-4">
              <Manage.ContentArea className="">
                <Manage.Label className=" flex items-center">
                  <span className="flex w-16 items-center justify-center">
                    제목
                  </span>
                  <Manage.Content className="rounded-xl border border-gray-400 px-2 py-1">
                    <p>{title}</p>
                  </Manage.Content>
                </Manage.Label>
              </Manage.ContentArea>

              <Manage.ContentArea>
                <Manage.Label className=" flex items-center">
                  <span className="flex w-16 items-center justify-center">
                    글쓴이
                  </span>
                  <Manage.Content className="rounded-xl border border-gray-400 px-2 py-1">
                    <p>{user}</p>
                  </Manage.Content>
                </Manage.Label>
              </Manage.ContentArea>

              <Manage.ContentArea>
                <Manage.Label className=" flex items-center">
                  <span className="flex w-16 items-center justify-center">
                    작성일
                  </span>
                  <Manage.Content className="rounded-xl border border-gray-400 px-2 py-1">
                    <p>{convertToKST(created_at)}</p>
                  </Manage.Content>
                </Manage.Label>
              </Manage.ContentArea>

              <Manage.ContentArea className="h-full min-h-40">
                <Manage.Label className="flex h-full items-center">
                  <span className="flex w-16 items-center justify-center">
                    내용
                  </span>
                  <Manage.Content className="h-full max-h-64 overflow-y-auto whitespace-pre-wrap rounded-xl border border-gray-400 px-2 py-1">
                    <p>{content}</p>
                  </Manage.Content>
                </Manage.Label>
              </Manage.ContentArea>
            </Manage.ContentWrapper>
          </Manage>
        </div>
      </div>
    </div>
  );
}
