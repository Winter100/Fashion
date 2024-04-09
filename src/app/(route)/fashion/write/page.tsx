"use client";

import Write from "@/app/_components/Write/Write";
import useInput from "@/app/_hooks/useInput";
import usePreview from "@/app/_hooks/usePreview";
import { FormEvent } from "react";

export default function Page() {
  const { input, handleChange: onChageInput } = useInput({
    title: "",
    concept: "",
    content: "",
  });
  const { preview, handleImage: handlePreview, image } = usePreview();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    console.log({ ...input });
    console.log(image);
  }

  const props = { input, onChageInput, preview, handlePreview, handleSubmit };

  return <Write {...props} />;
}
