"use client";

import Image from "next/image";
import { ChangeEvent, useState } from "react";

import { Label, TextInput, Textarea } from "flowbite-react";

export default function Page() {
  const [value, setValue] = useState("");

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <form className="flex-rows m-auto flex max-w-5xl gap-4 border-2 p-4">
      <div className="h-[500px] flex-1 p-1">
        <div className="relative m-auto h-[460px] w-4/5">
          <Image src={"/woman.png"} alt="업로드 이미지" fill />
        </div>

        <div className="flex justify-center">
          <label
            htmlFor="image"
            className="cursor-pointer text-2xl hover:font-bold"
          >
            이미지 첨부
          </label>
          <input id="image" hidden type="file" />
        </div>
      </div>

      <div className="flex-1">
        <div className=" flex flex-col gap-6">
          <div>
            <div className=" block ">
              <Label
                htmlFor="title"
                className=" m-auto text-xl"
                value="제목을 입력해주세요"
              />
            </div>
            <TextInput
              id="title"
              onChange={handleChange}
              type="text"
              style={{ fontSize: "20px", padding: "7px" }}
              className=" font-bold"
              value={value}
              required
            />
          </div>
          <div>
            <div className="block ">
              <Label
                htmlFor="concept"
                className=" m-auto text-xl"
                value="오늘의 나를 표현해해주세요"
              />
            </div>
            <TextInput
              id="concept"
              onChange={handleChange}
              type="text"
              style={{ fontSize: "20px", padding: "7px" }}
              className=" font-bold"
              value={value}
              required
            />
          </div>
          <div>
            <div className="block ">
              <Label
                htmlFor="content"
                className=" m-auto text-xl"
                value="내용"
              />
            </div>
            <Textarea
              id="content"
              className=" resize-none"
              style={{ fontSize: "25px", padding: "10px" }}
              rows={11}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
