import { ChangeEvent, useState } from "react";

export default function useInput<T>(initialState: T) {
  const [input, setInput] = useState<T>(initialState);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setInput((pre) => ({ ...pre, [name]: value }));
  }
  return { input, handleChange };
}
