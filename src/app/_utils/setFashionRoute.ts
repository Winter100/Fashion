import { convertPadZeroDate } from "./dateFn";

/**
 *
 * @returns `/${routeName}/${tag}?page=${pageNumber}&start=${start}&end=${end}`
 */
export function setFashionRoute(
  routeName: string,
  tag: string,
  pageNumber: number = 1,
  start: string | null | undefined = convertPadZeroDate(),
  end: string | null | undefined = convertPadZeroDate(),
) {
  return `/${routeName}/${tag}?page=${pageNumber}&start=${start}&end=${end}`;
}
