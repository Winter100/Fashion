import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

import { readSearchFashion } from "@/app/_lib/supabase/fashion";
import SearchFashionList from "@/app/_components/Fashion/FashionList/SearchFashion/SearchFashionList";
import Paginations from "@/app/_components/Common/Pagination";

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
    queryFn: () => readSearchFashion(q),
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
