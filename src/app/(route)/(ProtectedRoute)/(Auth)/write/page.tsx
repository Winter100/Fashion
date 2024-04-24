"use client";

import { useRouter } from "next/navigation";

import Write from "@/app/_components/Fashion/Edit";
import usePost from "@/app/_hooks/usePost";
import imgCompression from "@/app/_utils/imgCompression";
import { inputType } from "@/app/_types/type";
import useUser from "@/app/_hooks/useUser";
import useLoading from "@/app/_hooks/useLoading";

export default function Page() {
  const { postFashion } = usePost();
  const { isLoading: submitLoading, setLoading: setSubmitLoading } =
    useLoading();
  const { user } = useUser();
  const router = useRouter();

  async function onSubmit(value: inputType) {
    setSubmitLoading(true);
    const { title, concept, content, imageFile } = value;
    const compressionImage = await imgCompression(imageFile[0]);

    if (!user) {
      router.refresh();
      return;
    }

    const fashionItemData = {
      user,
      title,
      concept,
      content,
      image: compressionImage,
    };
    try {
      postFashion(fashionItemData);
    } catch {
      setSubmitLoading(false);
    }
  }

  return <Write onSubmit={onSubmit} submitLoading={submitLoading} />;
}
