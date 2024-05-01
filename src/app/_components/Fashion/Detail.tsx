import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button, Label } from "flowbite-react";

interface DetailType {
  title: string;
  image: string;
  concept: string;
  content: string;
}

export default function Detail({ title, image, concept, content }: DetailType) {
  const router = useRouter();
  return (
    <div className="layout-max-width m-auto flex h-full w-full flex-col items-center justify-center bg-backgroundTwo">
      <div className="h-13 layout-max-width m-auto flex w-full items-center justify-between bg-backgroundOne">
        <Button
          className="h-full"
          onClick={() => router.back()}
          size="md"
          color="green"
        >
          <span className="text-xl">뒤로가기</span>
        </Button>
      </div>

      <div className="flex-rows flex h-full w-full items-center gap-2 rounded-lg bg-backgroundTwo p-2">
        <div className="flex h-full flex-1 flex-col items-center">
          <div className="image-parents-div-fill">
            <Image
              src={image}
              alt="업로드 이미지"
              fill
              quality={100}
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>

        <div className="m-auto flex-1">
          <div className=" flex flex-col gap-10">
            <div>
              <div className=" block ">
                <Label
                  htmlFor="title"
                  className=" m-auto text-xl"
                  value="제목"
                />
              </div>
              <p
                id="title"
                className=" rounded-lg border border-borderColor p-2 text-xl"
              >
                {title}
              </p>
            </div>
            <div>
              <div className="block ">
                <Label
                  htmlFor="concept"
                  className=" m-auto text-xl"
                  value="컨셉"
                />
              </div>
              <p
                id="concept"
                className="  rounded-lg border border-borderColor p-2 text-xl"
              >
                {concept}
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
                className=" h-[26rem] overflow-y-auto whitespace-pre-wrap rounded-lg border border-borderColor p-2 text-xl"
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
