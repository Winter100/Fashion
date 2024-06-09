import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import Paginations from "@/app/_components/Pagination/Pagination";
import SearchFashionList from "@/app/_components/Fashion/SearchFashion/SearchFashionList";
import { readSearchFashionApi } from "@/app/_api/fashionApi";

export default async function Page({
  searchParams,
}: {
  searchParams: { page: string; q: string };
}) {
  const page = Number(searchParams.page);
  const q = searchParams.q;

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {},
    },
  });

  await queryClient.prefetchQuery({
    queryKey: ["search", page, q],
    queryFn: () => readSearchFashionApi(q),
  });

  return (
    <div className=" flex h-full flex-col justify-between">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <SearchFashionList />
      </HydrationBoundary>

      <div className=" h-16 w-full">
        <Paginations />
      </div>
    </div>
  );
}
