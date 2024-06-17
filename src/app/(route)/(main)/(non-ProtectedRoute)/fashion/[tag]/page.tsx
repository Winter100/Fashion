import { HydrationBoundary, dehydrate } from "@tanstack/react-query";

import FashionList from "@/app/_components/Fashion/Fashion/FashionList";
import { readFashionListApi } from "@/app/_api/fashionApi";
import getQueryClient from "@/app/_utils/getQueryClient";

// export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function Page({
  params,
  searchParams,
}: {
  params: { tag: string };
  searchParams: { page: string; start: string; end: string };
}) {
  const tag = params.tag;
  const page = Number(searchParams.page);
  const start = searchParams.start;
  const end = searchParams.end;

  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: [tag, page, start, end],
    queryFn: () => readFashionListApi(tag, page, start, end),
  });

  return (
    <div className=" flex h-full flex-col justify-between">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <FashionList />
      </HydrationBoundary>
    </div>
  );
}
