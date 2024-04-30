"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button, Label, Spinner, TextInput, Textarea } from "flowbite-react";

import usePreview from "@/app/_hooks/usePreview";
import { inputType } from "@/app/_types/type";

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
      concept: item?.concept,
      content: item?.content,
    },
  });
  const { preview, handlePreview } = usePreview();
  const router = useRouter();

  const isImage = preview || item?.image;
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="layout-max-width bg-backgroundTwo m-auto flex h-4/5 w-full flex-col items-center justify-center"
    >
      <div className="h-13 bg-backgroundOne layout-max-width m-auto flex w-full items-center justify-between">
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

      <div className="flex-rows bg-backgroundTwo flex h-full w-full items-center gap-2 rounded-lg p-2">
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
                disabled={submitLoading}
                id="title"
                name="title"
                type="text"
                style={{ fontSize: "20px", padding: "7px" }}
                className=" font-bold"
              />
            </div>
            <div>
              <div className="block ">
                <Label
                  htmlFor="concept"
                  className=" m-auto text-2xl"
                  value="컨셉"
                />
                <span className=" ml-4 text-2xl text-red-500">
                  {errors?.concept && errors?.concept.message}
                </span>
              </div>
              <TextInput
                {...register("concept", {
                  required: "컨셉을 짧게 적어주세요.",
                })}
                disabled={submitLoading}
                id="concept"
                name="concept"
                type="text"
                style={{ fontSize: "20px", padding: "7px" }}
                className=" font-bold"
              />
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
                className=" resize-none"
                style={{ fontSize: "25px", padding: "10px" }}
                rows={20}
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
