import { ChangeEvent, useEffect, useState } from "react";

export function usePreview() {
  const [preview, setPreview] = useState("");

  async function handlePreview(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;

    URL.revokeObjectURL(preview);

    const file = e.target.files[0];

    if (!file) return;
    setPreview(URL.createObjectURL(file));
  }

  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return { preview, handlePreview };
}
