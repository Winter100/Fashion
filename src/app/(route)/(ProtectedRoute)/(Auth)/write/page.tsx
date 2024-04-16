"use client";

import Write from "@/app/_components/Fashion/Edit";
import usePost from "@/app/_hooks/usePost";
import imgCompression from "@/app/_utils/imgCompression";
import { inputType } from "@/app/_types/type";
import useUser from "@/app/_hooks/useUser";

export default function Page() {
  const { postFashion, isPending } = usePost();
  const { user } = useUser();

  async function onSubmit(value: inputType) {
    const { title, concept, content, imageFile } = value;
    const compressionImage = await imgCompression(imageFile[0]);

    if (!user) return;

    const fashionItemData = {
      user,
      title,
      concept,
      content,
      image: compressionImage,
    };
    try {
      postFashion(fashionItemData);
    } catch (e) {
      console.log(e);
    }
  }

  return <Write onSubmit={onSubmit} isPending={isPending} />;
}
