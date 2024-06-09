import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import Paginations from "@/app/_components/Pagination/Pagination";
import FashionList from "@/app/_components/Fashion/Fashion/FashionList";
import { readFashionListApi } from "@/app/_api/fashionApi";

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

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {},
    },
  });
  await queryClient.prefetchQuery({
    queryKey: [tag, page, start, end],
    queryFn: () => readFashionListApi(tag, page, start, end),
  });

  return (
    <div className=" flex h-full flex-col justify-between">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <FashionList />
      </HydrationBoundary>

      <div className=" h-16 w-full">
        <Paginations />
      </div>
    </div>
  );
}
