"use client";

import { useRouter } from "next/navigation";

import Write from "@/app/_components/Fashion/Edit";
import imgCompression from "@/app/_utils/imgCompression";
import { inputType } from "@/app/_types/type";

import { useLoading } from "@/app/_hooks/useLoading";
import { usePost } from "@/app/_hooks/useFashionMethods";
import { useUser } from "@/app/_hooks/useAuth";

export default function Page() {
  const { postFashion } = usePost();
  const { isLoading: submitLoading, setLoading: setSubmitLoading } =
    useLoading();
  const { user } = useUser();
  const router = useRouter();

  async function onSubmit(value: inputType) {
    setSubmitLoading(true);

    const { title, content, tag, imageFile } = value;

    const compressionImage = await imgCompression(imageFile[0]);

    if (!user) {
      router.refresh();
      return;
    }

    const fashionItemData = {
      user,
      title,
      content,
      tag,
      image: compressionImage,
    };
    try {
      postFashion(fashionItemData);
    } catch {
      setSubmitLoading(false);
    }
  }

  return (
    <div className="layout-max-width m-auto flex h-full flex-col">
      <Write
        onSubmit={onSubmit}
        btnText="등 록"
        submitLoading={submitLoading}
      />
    </div>
  );
}
