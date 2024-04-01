import { Label } from "flowbite-react";

export default function Detail() {
  return (
    <>
      <div className="flex-rows m-auto flex max-w-5xl gap-4  p-4">
        <div className="h-[500px] flex-1 p-1">
          <div className="relative m-auto h-[460px] w-4/5 border-2">
            <p>이미지 링크 자리</p>
          </div>
        </div>

        <div className="flex-1">
          <div className=" flex flex-col gap-6">
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
                className=" border-bold rounded-lg border-2 p-2 text-xl"
              >
                asdf제목
              </p>
            </div>
            <div>
              <div className="block ">
                <Label
                  htmlFor="concept"
                  className=" m-auto text-xl"
                  value="오늘의 나"
                />
              </div>
              <p
                id="title"
                className=" border-bold rounded-lg border-2 p-2 text-xl"
              >
                asdf
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
                className=" border-bold h-60 rounded-lg border-2 p-2 text-xl"
              >
                asdf
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <p>
          <span className=" text-2xl">댓글?</span>
        </p>
      </div>
    </>
  );
}
