"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import Edit from "@/app/_components/Fashion/Edit";
import imgCompression from "@/app/_utils/imgCompression";
import LoadingSpinner from "@/app/_components/Spinner/LoadingSpinner";
import { inputType } from "@/app/_types/type";

import { useLoading } from "@/app/_hooks/useLoading";
import { useEditData, useUpdate } from "@/app/_hooks/useFashionMethods";

export default function Page() {
  const router = useRouter();

  const { updateFashion } = useUpdate();
  const { isLoading: submitLoading, setLoading: setSubmitLoading } =
    useLoading();

  const { isLoading, data, isError } = useEditData();

  useEffect(() => {
    if (isError) {
      toast.error("권한이 없습니다.");
      router.replace("/mypage/list");
    }
  }, [isError, router]);

  if (isLoading || isError) return <LoadingSpinner />;

  const inititem = {
    title: data?.title,
    content: data?.content,
    tag: data?.tag,
    image: data?.image,
  };

  async function onSubmit(value: inputType) {
    setSubmitLoading(true);

    const { title, content, imageFile } = value;
    let updateData;

    try {
      if (imageFile[0]) {
        // 새로운 이미지 등록
        const compressionImage = await imgCompression(imageFile[0]);
        updateData = {
          title,
          content,
          image: compressionImage,
        };
      } else {
        // 기존 이미지 사용
        updateData = {
          title,
          content,
        };
      }
      updateFashion(updateData);
    } catch {
      setSubmitLoading(false);
    }
  }

  return (
    <div className="layout-max-width m-auto flex h-full flex-col">
      <Edit
        onSubmit={onSubmit}
        btnText="수 정"
        item={inititem}
        submitLoading={submitLoading}
      />
    </div>
  );
}
