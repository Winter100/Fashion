export function getRoute(routeName: string, tag: string, pageNumber: number) {
  return `/${routeName}/${tag}?page=${pageNumber}`;
}
