"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { TextInput } from "flowbite-react";
import { IoSearchSharp } from "react-icons/io5";

import { TAG_NAME } from "@/app/_utils/constant";
import { setFashionRoute } from "@/app/_utils/setFashionRoute";

export default function Search() {
  const { register, handleSubmit, setValue } = useForm<{ search: string }>();
  const router = useRouter();

  function submit(value: { search: string }) {
    const { search } = value;

    router.push(
      `${setFashionRoute(TAG_NAME.fashion, "search", 1)}&q=${search}`,
    );
    setValue("search", "");
  }

  return (
    <form onSubmit={handleSubmit(submit)}>
      <TextInput
        rightIcon={IoSearchSharp}
        className="w-80"
        {...register("search", { required: true })}
      />
    </form>
  );
}
