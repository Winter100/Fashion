"use client";

import { useRouter } from "next/navigation";

import Manage from "../../Manage/Manage";
import ImageUpload from "./ImageUpload";
import TitleInput from "./TitleInput";
import TagSelect from "./TagSelect";
import ContentTextarea from "./ContentTextarea";
import SubmitButtons from "./SubmitButtons";

import { useWriteForm } from "@/app/_hooks/useWriteForm";
import { inputType } from "@/app/_types/type";
import { FieldError } from "react-hook-form";

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
    errors,
    handleImageChange,
    handleSubmit,
    isSelectDisabled,
    preview,
    register,
  } = useWriteForm(item);
  const router = useRouter();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mt-0 h-full w-full flex-col items-center md:mt-10 md:flex"
    >
      <div className="mt-2 flex w-full flex-col items-center gap-2 md:mt-10 md:flex-row">
        <ImageUpload
          preview={preview}
          itemImage={item?.image}
          error={errors.imageFile as FieldError}
          onChange={handleImageChange}
          register={register}
          disabled={submitLoading}
        />

        <div className="h-full w-full md:flex-1">
          <Manage className="flex w-full justify-center">
            <Manage.ContentWrapper className="flex gap-6">
              <TitleInput
                register={register}
                error={errors.title}
                disabled={submitLoading}
              />
              <TagSelect
                register={register}
                error={errors.tag}
                disabled={isSelectDisabled || submitLoading}
              />
              <ContentTextarea
                register={register}
                error={errors.content}
                disabled={submitLoading}
              />
            </Manage.ContentWrapper>
          </Manage>
        </div>
      </div>
      <SubmitButtons
        submitLoading={submitLoading}
        btnText={btnText}
        onCancel={() => router.back()}
      />
    </form>
  );
}
