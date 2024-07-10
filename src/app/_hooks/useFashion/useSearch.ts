import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQueryString } from "../useQueryString";

export function useSearch() {
  const [onFocus, setOnFocus] = useState(false);
  const { register, handleSubmit } = useForm<{ search: string }>();
  const router = useRouter();
  const { page } = useQueryString();

  function submit(value: { search: string }) {
    const { search } = value;

    const encodedSearch = encodeURIComponent(search.replace(/\s+/g, ""));
    if (encodedSearch.length === 0) return;

    router.push(`/search?q=${encodedSearch}&page=${page}`);
  }

  return { onFocus, setOnFocus, register, handleSubmit, submit };
}
