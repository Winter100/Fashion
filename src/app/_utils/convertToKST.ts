export function convertToKST(isoDateString: Date) {
  const date = new Date(isoDateString);
  const koreanFormat = new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  return koreanFormat.format(date);
}
