"use client";

import Image from "next/image";
import { ChangeEvent, FormEvent, useState } from "react";

import { Button, Label, TextInput, Textarea } from "flowbite-react";

export default function Page() {
  const [value, setValue] = useState({
    title: "",
    concept: "",
    content: "",
    image: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState("");

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(value);
  }

  function handleImage(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      return;
    } else {
      const file = e.target.files[0];
      URL.revokeObjectURL(image);
      setImage(URL.createObjectURL(file));
    }
  }

  return (
    <form>
      <div className="flex-rows m-auto flex max-w-5xl gap-4  p-4">
        <div className="h-[500px] flex-1 p-1">
          <div className="relative m-auto h-[460px] w-4/5">
            {image && <Image src={image} alt="업로드 이미지" fill />}
          </div>

          <div className="flex justify-center">
            <label
              htmlFor="image"
              className="cursor-pointer text-2xl hover:font-bold"
            >
              이미지 첨부
            </label>
            <input
              onChange={handleImage}
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
                onChange={handleChange}
                type="text"
                style={{ fontSize: "20px", padding: "7px" }}
                className=" font-bold"
                value={value.title}
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
                onChange={handleChange}
                type="text"
                style={{ fontSize: "20px", padding: "7px" }}
                className=" font-bold"
                value={value.concept}
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
                onChange={handleChange}
                className=" resize-none"
                style={{ fontSize: "25px", padding: "10px" }}
                value={value.content}
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
