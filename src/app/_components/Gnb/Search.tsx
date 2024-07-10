"use client";

import { IoSearchSharp } from "react-icons/io5";

import { useSearch } from "@/app/_hooks/useFashion/useSearch";

export default function Search({ id = "search" }: { id?: string }) {
  const { handleSubmit, onFocus, register, setOnFocus, submit } = useSearch();

  return (
    <form className="mx-1 w-full" onSubmit={handleSubmit(submit)}>
      <div
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        className={`${onFocus ? "border-green-600" : "border-backgroundTwo"} flex h-10 items-center justify-center rounded-2xl border bg-background p-2`}
      >
        <label className="w-full" htmlFor={id}>
          <input
            spellCheck="false"
            autoComplete="off"
            className="h-8 w-full border-none bg-inherit p-1 font-sans text-xs outline-none"
            {...register("search", { required: true })}
            title="검색어"
            id={id}
            placeholder="검색어를 입력해주세요."
          />
        </label>
        <button
          className="flex h-8 w-8 items-center justify-center"
          type="submit"
          title="검색"
        >
          <IoSearchSharp className=" text-xl" />
        </button>
      </div>
    </form>
  );
}
