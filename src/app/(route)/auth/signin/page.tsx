"use client";

import SignIn from "@/app/_components/Auth/SignIn";
import getAuth from "@/app/_utils/getAuth";
import { useQuery } from "@tanstack/react-query";
import { redirect } from "next/navigation";

export default function Page() {
  const { data, isLoading } = useQuery({
    queryKey: ["auth"],
    queryFn: getAuth,
  });

  if (isLoading) return null;

  if (!data?.user && !isLoading) return <SignIn />;

  redirect("/");
}
