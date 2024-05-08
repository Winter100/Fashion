import FashionList from "@/app/_components/Fashion/List";
import Paginations from "@/app/_components/Pagination/Pagination";
import { getFashionList } from "@/app/_utils/apiFashion";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export default async function Page({
  params,
  searchParams,
}: {
  params: { tag: string };
  searchParams: { page: string; date: string };
}) {
  const tag = params.tag;
  const page = Number(searchParams.page);
  const date = searchParams.date;

  const queryClient = new QueryClient({});
  await queryClient.prefetchQuery({
    queryKey: [tag, page, date],
    queryFn: () => getFashionList(tag, page, date),
  });

  queryClient.clear();

  return (
    <div className=" flex h-full flex-col justify-between">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <FashionList tag={tag} />
      </HydrationBoundary>

      <div className=" h-16 w-full">
        <Paginations />
      </div>
    </div>
  );
}
