import Image from "next/image";
import { Label } from "flowbite-react";

interface DetailType {
  title: string;
  image: string;
  concept: string;
  content: string;
}

export default function Detail({ title, image, concept, content }: DetailType) {
  return (
    <div className="flex-rows layout-max-width m-auto flex gap-2 rounded-lg  p-2">
      <div className="flex-1">
        <div className="image-parents-div-fill">
          <Image
            src={image}
            quality={100}
            alt={title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            priority
            className=" object-contain"
          />
        </div>
      </div>

      <div className="m-auto flex-1">
        <div className=" flex flex-col gap-6">
          <div>
            <div className=" block ">
              <Label htmlFor="title" className=" m-auto text-xl" value="제목" />
            </div>
            <p
              id="title"
              className=" border-borderColor rounded-lg border p-2 text-xl"
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
              className="  border-borderColor rounded-lg border p-2 text-xl"
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
              className="  border-borderColor h-60 overflow-y-auto whitespace-pre-wrap rounded-lg border p-2 text-xl"
            >
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
