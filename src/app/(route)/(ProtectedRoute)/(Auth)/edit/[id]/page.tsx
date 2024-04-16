"use client";

import Edit from "@/app/_components/Fashion/Edit";
import useDetail from "@/app/_hooks/useDetail";
import useUpdate from "@/app/_hooks/useUpdate";
import imgCompression from "@/app/_utils/imgCompression";

import { inputType } from "@/app/_types/type";
import { getAuth } from "@/app/_utils/apiAuth";
import { useRouter } from "next/navigation";
import useUser from "@/app/_hooks/useUser";

export default function Page() {
  const { updateFashion, isPending } = useUpdate();
  const { isLoading, data, id } = useDetail();
  const { user } = useUser();
  const router = useRouter();

  if (isLoading) return <p>로딩 스피너...</p>;
  if (data.user_id !== user?.id) {
    router.replace("/fashion?page=1");
  }

  const inititem = {
    title: data?.title,
    concept: data?.concept,
    content: data?.content,
    image: data?.image,
  };

  async function onSubmit(value: inputType) {
    const { title, concept, content, preview, imageFile } = value;
    const user = await getAuth();

    if (!title || !concept || !content || !user) {
      return;
    }

    if (imageFile[0]) {
      // 새로운 이미지 등록

      const compressionImage = await imgCompression(imageFile[0]);
      const updateData = {
        user,
        title,
        concept,
        content,
        image: compressionImage,
        fashionId: id,
      };
      updateFashion(updateData);
    } else {
      // 기존 이미지 사용
      const updateData = {
        user,
        title,
        concept,
        content,
        fashionId: id,
      };
      updateFashion(updateData);
    }
  }

  return <Edit onSubmit={onSubmit} item={inititem} isPending={isPending} />;
}
