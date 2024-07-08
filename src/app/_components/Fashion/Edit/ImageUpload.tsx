import Image from "next/image";

import { ImageUploadProps } from "@/app/_types/type";

export default function ImageUpload({
  preview,
  itemImage,
  error,
  onChange,
  register,
  disabled,
}: ImageUploadProps) {
  const isImage = preview || itemImage;

  return (
    <div className="flex h-96 w-full flex-col rounded-xl border border-gray-400 p-1 md:h-full md:flex-1">
      <div className="relative flex h-full items-center justify-center">
        {!error && isImage && (
          <Image
            src={preview || itemImage}
            alt="업로드 이미지"
            fill
            className="object-contain "
          />
        )}
        {
          <span className=" text-2xl text-red-500">
            {error && error.message}
          </span>
        }
      </div>

      <div className="flex h-8 items-center justify-center">
        {!disabled && (
          <label
            htmlFor="imageFile"
            className="cursor-pointer text-2xl hover:font-bold"
          >
            이미지 첨부
          </label>
        )}

        <input
          {...register("imageFile", {
            required: !itemImage && "이미지를 선택해주세요.",
            onChange: onChange,
          })}
          disabled={disabled}
          id="imageFile"
          hidden
          type="file"
          accept="image/png, image/jpeg, image/jpg"
        />
      </div>
    </div>
  );
}
