"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { TextInput } from "flowbite-react";
import { IoSearchSharp } from "react-icons/io5";

import { useQueryString } from "@/app/_hooks/useQueryString";

export default function Search() {
  const { register, handleSubmit, setValue } = useForm<{ search: string }>();
  const router = useRouter();
  const { page } = useQueryString();

  function submit(value: { search: string }) {
    const { search } = value;

    const encodedSearch = encodeURIComponent(search.replace(/\s+/g, ""));

    router.push(`/search?q=${encodedSearch}&page=${page}`);
    setValue("search", "");
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <TextInput
        style={{ fontFamily: "sans-serif", fontSize: "0.75rem" }}
        rightIcon={IoSearchSharp}
        className="w-80"
        {...register("search", { required: true })}
      />
    </form>
  );
}
