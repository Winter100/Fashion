import { useRouter } from "next/navigation";

export function useRouteChange() {
  const router = useRouter();

  function routeHandler(href: string) {
    router.push(href);
  }
  return routeHandler;
}
