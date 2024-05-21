import { setDateFormat } from "./dateFn";

/**
 *
 * @returns `/${routeName}/${tag}?page=${page}&start=${startDate}&end=${endDate}`
 */
export function setFashionRoute(
  routeName: string,
  tag: string,
  page: string | number = 1,
  startDate: string = setDateFormat(true),
  endDate: string = setDateFormat(),
) {
  return `/${routeName}/${tag}?page=${page}&start=${startDate}&end=${endDate}`;
}
