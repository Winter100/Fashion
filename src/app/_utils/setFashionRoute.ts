export function setFashionRoute(
  routeName: string,
  tag: string,
  pageNumber: number,
  date: string,
) {
  return `/${routeName}/${tag}?page=${pageNumber}&date=${date}`;
}
