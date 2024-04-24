"use client";

import { useRouter } from "next/navigation";

import Edit from "@/app/_components/Fashion/Edit";
import useDetail from "@/app/_hooks/useDetail";
import useUpdate from "@/app/_hooks/useUpdate";
import imgCompression from "@/app/_utils/imgCompression";
import { inputType } from "@/app/_types/type";
import useUser from "@/app/_hooks/useUser";
import LoadingSpinner from "@/app/_components/Spinner/LoadingSpinner";
import useLoading from "@/app/_hooks/useLoading";

export default function Page() {
  const { updateFashion } = useUpdate();
  const { isLoading: submitLoading, setLoading: setSubmitLoading } =
    useLoading();

  const { isLoading, data, id } = useDetail();
  const { user } = useUser();
  const router = useRouter();

  if (isLoading) return <LoadingSpinner />;

  if (data?.user_id !== user?.id) {
    router.replace("/fashion?page=1");
  }

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

    if (!user) {
      router.refresh();
      return;
    }

    try {
      if (imageFile[0]) {
        // 새로운 이미지 등록
        const compressionImage = await imgCompression(imageFile[0]);
        updateData = {
          user,
          title,
          concept,
          content,
          image: compressionImage,
          fashionId: id,
        };
      } else {
        // 기존 이미지 사용
        updateData = {
          user,
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
