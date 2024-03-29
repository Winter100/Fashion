import { ChangeEvent, useEffect, useState } from "react";

export default function usePreview() {
  const [image, setImage] = useState("");

  function handleImage(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) return;
    URL.revokeObjectURL(image);

    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(URL.createObjectURL(file));
    }
  }

  useEffect(() => {
    return () => {
      if (image) URL.revokeObjectURL(image);
    };
  }, [image]);

  return { image, handleImage };
}
