import { usePathname, useSearchParams } from "next/navigation";

export function useChangeParams() {
  const pathName = usePathname();
  const searchParams = useSearchParams();

  function chageParams(
    searchParamsKey: string = "page",
    changeValue: string | number,
  ) {
    const params = new URLSearchParams(searchParams.toString());
    params.set(searchParamsKey, changeValue.toString());

    const changedParams = `${pathName}?${params.toString()}`;

    return changedParams;
  }

  return { chageParams };
}
