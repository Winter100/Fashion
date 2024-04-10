"use client";

import Image from "next/image";
import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { WriteType } from "@/app/_types/type";

export default function Write({
  input,
  onChageInput,
  preview,
  handlePreview,
  handleSubmit,
}: WriteType) {
  return (
    <form>
      <div className="flex-rows m-auto flex max-w-5xl gap-4  p-4">
        <div className="h-[500px] flex-1 p-1">
          <div className="relative m-auto h-[460px] w-4/5 border-2">
            {preview && <Image src={preview || ""} alt="업로드 이미지" fill />}
          </div>

          <div className="flex justify-center">
            <label
              htmlFor="image"
              className="cursor-pointer text-2xl hover:font-bold"
            >
              이미지 첨부
            </label>
            <input
              onChange={handlePreview}
              id="image"
              hidden
              type="file"
              accept="image/*"
            />
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
                name="title"
                onChange={onChageInput}
                type="text"
                style={{ fontSize: "20px", padding: "7px" }}
                className=" font-bold"
                value={input?.title || ""}
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
                name="concept"
                onChange={onChageInput}
                type="text"
                style={{ fontSize: "20px", padding: "7px" }}
                className=" font-bold"
                value={input?.concept || ""}
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
                name="content"
                onChange={onChageInput}
                className=" resize-none"
                style={{ fontSize: "25px", padding: "10px" }}
                value={input?.content || ""}
                rows={11}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button onClick={handleSubmit}>
          <span className=" text-2xl">작성</span>
        </Button>
      </div>
    </form>
  );
}
