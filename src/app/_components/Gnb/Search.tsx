"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Label, TextInput } from "flowbite-react";
import { IoSearchSharp } from "react-icons/io5";

import { useQueryString } from "@/app/_hooks/useQueryString";

export default function Search() {
  const { register, handleSubmit } = useForm<{ search: string }>();
  const router = useRouter();
  const { page } = useQueryString();

  function submit(value: { search: string }) {
    const { search } = value;

    const encodedSearch = encodeURIComponent(search.replace(/\s+/g, ""));

    router.push(`/search?q=${encodedSearch}&page=${page}`);
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <Label htmlFor="search" hidden>
        검색창
      </Label>
      <TextInput
        style={{ fontFamily: "sans-serif", fontSize: "0.75rem" }}
        rightIcon={IoSearchSharp}
        className="w-full"
        id="search"
        {...register("search", { required: true })}
      />
    </form>
  );
}
