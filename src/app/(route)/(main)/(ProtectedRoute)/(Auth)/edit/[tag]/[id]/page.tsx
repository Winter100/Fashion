"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import Edit from "@/app/_components/Fashion/Edit/Edit";
import imgCompression from "@/app/_utils/imgCompression";
import LoadingSpinner from "@/app/_components/Spinner/LoadingSpinner";
import { inputType } from "@/app/_types/type";

import { useLoading } from "@/app/_hooks/useLoading";
import { useReadFashionEditData, useUpdate } from "@/app/_hooks/useFashion";
import { IMAGE_MAX_SIZE } from "@/app/_constant/constant";

export default function Page() {
  const router = useRouter();

  const { updateFashion } = useUpdate();
  const { isLoading: submitLoading, setLoading: setSubmitLoading } =
    useLoading();

  const { isLoading, data, isError } = useReadFashionEditData();
  const inititem = {
    title: data?.title,
    content: data?.content,
    tag: data?.tag,
    image: data?.image || "",
  };

  useEffect(() => {
    if (isError) {
      toast.error("권한이 없습니다.");
      router.replace("/mypage/list");
    }
  }, [isError, router]);

  if (isLoading || isError) return <LoadingSpinner />;

  async function onSubmit(value: inputType) {
    setSubmitLoading(true);

    const { title, content, imageFile } = value;
    if (imageFile === null || !imageFile[0]) {
      try {
        updateFashion({ title, content });
      } catch (e) {}
    } else if (imageFile[0]?.size >= IMAGE_MAX_SIZE) {
      return alert("이미지가 5MB를 초과했습니다 다른 이미지를 선택해주세요.");
    } else {
      try {
        const compressionImage = await imgCompression(imageFile[0]);
        updateFashion({ title, content, image: compressionImage });
      } catch (e) {}
    }
    return setSubmitLoading(false);
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
