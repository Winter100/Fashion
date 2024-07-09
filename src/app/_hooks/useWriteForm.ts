import { useState, useEffect, ChangeEvent } from "react";
import { useForm } from "react-hook-form";
import { usePreview } from "@/app/_hooks/usePreview";
import { inputType } from "@/app/_types/type";
import { IMAGE_MAX_SIZE } from "@/app/_constant/constant";
import { useRouter } from "next/navigation";

interface ItemProps {
  title: string;
  content: string;
  tag: string;
}

export const useWriteForm = (item?: ItemProps) => {
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

  return {
    register,
    handleSubmit,
    errors,
    isSelectDisabled,
    preview,
    handleImageChange,
    router,
  };
};
