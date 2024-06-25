"use client";

import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Button, Select, Spinner, TextInput, Textarea } from "flowbite-react";

import Manage from "../../Manage/Manage";
import { usePreview } from "@/app/_hooks/usePreview";
import { inputType } from "@/app/_types/type";
import { IMAGE_MAX_SIZE, TAG_NAME } from "@/app/_constant/constant";
import { convertToTag } from "@/app/_utils/convertToTag";

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
    setError,
    clearErrors,
    setValue,
    formState: { errors },
  } = useForm<inputType>({
    defaultValues: {
      title: item?.title,
      content: item?.content,
      tag: item?.tag || "",
    },
  });
  const { preview, handlePreview, resetPreview } = usePreview();
  const [isSelectDisabled, setIsSelectDisabled] = useState(!!item?.tag);
  const router = useRouter();

  const isImage = preview || item?.image;

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    const file = e.target.files[0];

    if (!file) return resetPreview();

    clearErrors("imageFile");
    if (file?.size >= IMAGE_MAX_SIZE) {
      setValue("imageFile", null);
      return setError("imageFile", {
        type: "custom",
        message: "이미지는 5MB를 넘을 수 없습니다.",
      });
    } else {
      handlePreview(e);
    }
  }

  useEffect(() => {
    setIsSelectDisabled(!!item?.tag);
  }, [item?.tag]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-full  w-full flex-col items-center md:flex"
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

      <div className="mt-10 flex w-full flex-col items-center gap-2 md:mt-28 md:flex-row">
        <div className="flex h-96 w-full flex-col rounded-xl border border-gray-400 p-1 md:h-full md:flex-1">
          <div className="relative flex h-full items-center justify-center">
            {!errors?.imageFile && isImage && (
              <Image
                src={preview || item?.image}
                alt="업로드 이미지"
                fill
                className="object-contain "
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
                required: !item?.image && "이미지를 선택해주세요.",
                onChange: handleImageChange,
              })}
              disabled={submitLoading}
              id="imageFile"
              hidden
              type="file"
              accept="image/png, image/jpeg, image/jpg"
            />
          </div>
        </div>

        <div className="h-full w-full md:flex-1">
          <Manage className="flex w-full justify-center">
            <Manage.ContentWrapper className="flex gap-6">
              <Manage.ContentArea>
                <Manage.Label className=" flex">
                  <span
                    className={`flex w-16 items-center justify-center text-xl ${errors.title ? " text-red-500" : ""}`}
                  >
                    제목
                  </span>
                  <Manage.Content>
                    <TextInput
                      {...register("title", {
                        required: true,
                      })}
                      style={{ fontSize: "0.75rem", lineHeight: "1rem" }}
                      disabled={submitLoading}
                      spellCheck={false}
                      id="title"
                      name="title"
                      type="text"
                      maxLength={40}
                      className=" font-mono  "
                    />
                  </Manage.Content>
                </Manage.Label>
              </Manage.ContentArea>

              <Manage.ContentArea>
                <Manage.Label className=" flex">
                  <span
                    className={`flex w-16 items-center justify-center text-xl ${errors.tag ? " text-red-500" : ""}`}
                  >
                    태그
                  </span>
                  <Manage.Content>
                    <Select
                      {...register("tag", {
                        required: true,
                      })}
                      style={{ fontSize: "20px" }}
                      id="tag"
                      name="tag"
                      disabled={isSelectDisabled || submitLoading}
                    >
                      <option disabled value="">
                        게시판을 선택해주세요
                      </option>
                      <option value={TAG_NAME.today}>
                        {convertToTag(TAG_NAME.today)}
                      </option>
                      <option value={TAG_NAME.tomorrow}>
                        {convertToTag(TAG_NAME.tomorrow)}
                      </option>
                      <option value={TAG_NAME.this}>
                        {convertToTag(TAG_NAME.this)}
                      </option>
                    </Select>
                  </Manage.Content>
                </Manage.Label>
              </Manage.ContentArea>

              <Manage.ContentArea>
                <Manage.Label className=" flex ">
                  <span
                    className={`flex w-16 items-center justify-center text-xl ${errors.content ? " text-red-500" : ""}`}
                  >
                    내용
                  </span>
                  <Manage.Content>
                    <Textarea
                      disabled={submitLoading}
                      {...register("content", {
                        required: true,
                      })}
                      id="content"
                      name="content"
                      spellCheck={false}
                      className="resize-none font-mono text-xs "
                      rows={17}
                    />
                  </Manage.Content>
                </Manage.Label>
              </Manage.ContentArea>
            </Manage.ContentWrapper>
          </Manage>
        </div>
      </div>
    </form>
  );
}
