"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { getFashionItem } from "@/app/_tanstack/getFashionItem";
import Detail from "@/app/_components/Fashion/Detail";

export default function Page() {
  const params = useParams();
  const { id: fashionId } = params;

  const { data, isLoading } = useQuery({
    queryKey: [`detail`, fashionId],
    queryFn: () => getFashionItem(fashionId as string),
  });

  if (isLoading) {
    return <p>로딩 스피너 자리...</p>;
  }

  return <Detail {...data} />;
}
