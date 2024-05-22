"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import {
  Button,
  Label,
  Select,
  Spinner,
  TextInput,
  Textarea,
} from "flowbite-react";

import { usePreview } from "@/app/_hooks/usePreview";

import { inputType } from "@/app/_types/type";
import { TAG_NAME } from "@/app/_utils/constant";

export default function Write({
  onSubmit,
  item,
  btnText,
  submitLoading,
}: {
  onSubmit: (value: inputType) => void;
  submitLoading: boolean;
  btnText: string;
  item?: any;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<inputType>({
    defaultValues: {
      title: item?.title,
      content: item?.content,
      tag: item?.tag || "",
    },
  });
  const { preview, handlePreview } = usePreview();
  const [isSelectDisabled, setIsSelectDisabled] = useState(!!item?.tag);
  const router = useRouter();

  const isImage = preview || item?.image;

  useEffect(() => {
    setIsSelectDisabled(!!item?.tag);
  }, [item?.tag]);
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex h-full w-full flex-col items-center"
    >
      <div className="h-13  layout-max-width flex w-full items-center justify-between">
        <Button
          className="h-full"
          onClick={() => router.back()}
          size="md"
          color="green"
          disabled={submitLoading}
        >
          <span className="text-xl">뒤로가기</span>
        </Button>
        <Button
          className="h-full"
          color="green"
          disabled={submitLoading}
          type="submit"
        >
          {!submitLoading ? (
            <span className="text-xl">{btnText}</span>
          ) : (
            <span>
              <Spinner size="md" />
            </span>
          )}
        </Button>
      </div>

      <div className="flex-rows flex w-full items-center gap-2 p-2">
        <div className="flex h-full flex-1 flex-col items-center">
          <div className="image-parents-div-fill">
            {!errors?.imageFile && isImage && (
              <Image
                src={preview || item?.image}
                alt="업로드 이미지"
                fill
                quality={100}
                sizes="100vw"
                className="object-contain"
              />
            )}
            {
              <span className=" text-2xl text-red-500">
                {errors?.imageFile && errors?.imageFile.message}
              </span>
            }
          </div>

          <div className="flex h-8 items-center justify-center">
            {!submitLoading && (
              <label
                htmlFor="imageFile"
                className="cursor-pointer text-2xl hover:font-bold"
              >
                이미지 첨부
              </label>
            )}

            <input
              {...register("imageFile", {
                required: !item?.image && "이미지가 필요합니다.",
                onChange: handlePreview,
              })}
              disabled={submitLoading}
              id="imageFile"
              hidden
              type="file"
              accept="image/*"
            />
          </div>
        </div>

        <div className=" flex h-full flex-1">
          <div className=" flex h-full w-full flex-col justify-center gap-10">
            <div>
              <div className="block ">
                <Label
                  htmlFor="title"
                  className=" m-auto text-2xl"
                  value="제목"
                />
                <span className=" ml-4 text-2xl text-red-500">
                  {errors?.title && errors?.title.message}
                </span>
              </div>
              <TextInput
                {...register("title", {
                  required: "제목을 입력해주세요.",
                })}
                style={{ fontSize: "0.75rem", lineHeight: "1rem" }}
                disabled={submitLoading}
                spellCheck={false}
                id="title"
                name="title"
                type="text"
                maxLength={40}
                className=" font-mono  font-bold"
              />
            </div>

            <div className="w-full ">
              <div className="block">
                <Label htmlFor="tag" className="text-2xl" value="게시판 선택" />
                <span className=" ml-4 text-2xl text-red-500">
                  {errors?.tag && errors?.tag.message}
                </span>
              </div>
              <Select
                {...register("tag", {
                  required: "게시판을 선택해주세요.",
                })}
                style={{ fontSize: "20px" }}
                id="tag"
                name="tag"
                disabled={isSelectDisabled || submitLoading}
              >
                <option disabled value="">
                  게시판을 선택해주세요
                </option>
                <option value={TAG_NAME.today}>오늘 어때?</option>
                <option value={TAG_NAME.tomorrow}>내일 어때?</option>
                <option value={TAG_NAME.this}>이거 어때?</option>
              </Select>
            </div>
            <div>
              <div className="block ">
                <Label
                  htmlFor="content"
                  className=" m-auto text-2xl"
                  value="내용"
                />
                <span className=" ml-4 text-2xl text-red-500">
                  {errors?.content && errors?.content.message}
                </span>
              </div>
              <Textarea
                disabled={submitLoading}
                {...register("content", { required: "내용을 입력해주세요." })}
                id="content"
                name="content"
                spellCheck={false}
                className="resize-none font-mono text-xs font-bold"
                rows={15}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
