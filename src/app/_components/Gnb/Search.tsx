"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { IoSearchSharp } from "react-icons/io5";

import { useQueryString } from "@/app/_hooks/useQueryString";

export default function Search() {
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

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        className={`${onFocus ? "border-green-600" : "border-backgroundTwo"} flex h-10 items-center justify-center rounded-2xl border bg-background p-2`}
      >
        <label className="w-full" htmlFor="search">
          <input
            spellCheck="false"
            autoComplete="off"
            className="h-7 w-full border-none bg-inherit p-1 font-sans text-xs outline-none"
            {...register("search", { required: true })}
            title="검색어"
            id="search"
            placeholder="검색어를 입력해주세요."
          />
        </label>
        <button className="w-5" type="submit" title="검색">
          <IoSearchSharp className=" text-xl" />
        </button>
      </div>
    </form>
  );
}
