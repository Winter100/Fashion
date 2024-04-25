"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import Edit from "@/app/_components/Fashion/Edit";
import useUpdate from "@/app/_hooks/useUpdate";
import imgCompression from "@/app/_utils/imgCompression";
import { inputType } from "@/app/_types/type";
import LoadingSpinner from "@/app/_components/Spinner/LoadingSpinner";
import useLoading from "@/app/_hooks/useLoading";
import useEditData from "@/app/_hooks/useEditData";

export default function Page() {
  const router = useRouter();

  const { updateFashion } = useUpdate();
  const { isLoading: submitLoading, setLoading: setSubmitLoading } =
    useLoading();

  const { isLoading, data, id, isError } = useEditData();

  useEffect(() => {
    if (isError) {
      toast.error("권한이 없습니다.");
      router.replace("/fashion?page=1");
    }
  }, [isError, router]);

  if (isLoading || isError) return <LoadingSpinner />;

  const inititem = {
    title: data?.title,
    concept: data?.concept,
    content: data?.content,
    image: data?.image,
  };

  async function onSubmit(value: inputType) {
    setSubmitLoading(true);

    const { title, concept, content, imageFile } = value;
    let updateData;

    try {
      if (imageFile[0]) {
        // 새로운 이미지 등록
        const compressionImage = await imgCompression(imageFile[0]);
        updateData = {
          title,
          concept,
          content,
          image: compressionImage,
          fashionId: id,
        };
      } else {
        // 기존 이미지 사용
        updateData = {
          title,
          concept,
          content,
          fashionId: id,
        };
      }
      updateFashion(updateData);
    } catch {
      setSubmitLoading(false);
    }
  }

  return (
    <Edit onSubmit={onSubmit} item={inititem} submitLoading={submitLoading} />
  );
}
