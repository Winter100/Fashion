"use client";

import Write from "@/app/_components/Write/Write";
import useInput from "@/app/_hooks/useInput";
import usePreview from "@/app/_hooks/usePreview";
import { getAuth } from "@/app/_utils/apiAuth";

import supabase, { supabaseUrl } from "@/app/_utils/supabase";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Page() {
  const router = useRouter();
  const { input, handleChange: onChageInput } = useInput({
    title: "",
    content: "",
    concept: "",
  });
  const { preview, handleImage: handlePreview, image } = usePreview();

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const user = await getAuth();

    const isLogin = user?.user?.role === "authenticated";

    if (!isLogin) router.replace("/auth/signin");

    const { title, concept, content } = input;
    if (!image) return;

    const imageName = `${Math.random()}-${image.name}`.replaceAll("/", "");
    const imagePath = `${supabaseUrl}/storage/v1/object/public/fashion-images/${imageName}`;
    const { error } = await supabase.from("fashionList").insert([
      {
        title,
        content,
        concept,
        image: imagePath,
        user: user?.user?.user_metadata.name,
      },
    ]);

    const { error: imageError } = await supabase.storage
      .from("fashion-images")
      .upload(imageName, image);

    if (!error && !imageError) router.replace("/fashion");
  }

  const props = { input, onChageInput, preview, handlePreview, handleSubmit };

  return <Write {...props} />;
}
