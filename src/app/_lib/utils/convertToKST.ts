export function convertToKST(
  isoDateString: Date | string,
  filter: boolean = true,
) {
  const date = new Date(isoDateString);

  const options: Intl.DateTimeFormatOptions = {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  if (filter) {
    options.hour = "2-digit";
    options.minute = "2-digit";
    options.second = "2-digit";
  }

  const koreanFormat = new Intl.DateTimeFormat("ko-KR", options);

  return koreanFormat.format(date);
}
