/**
 *
 * @ Date를 넣으면 yyyymmdd 형식으로 변환
 * @ 인자가 없다면 오늘 날짜를 반환
 */
export function convertPadZeroDate(
  d: Date | null = new Date(),
  startWithFirstDay: boolean = false,
): string {
  if (!d) {
    d = new Date();
  } else if (!(d instanceof Date)) {
    d = new Date(d);
  }

  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = startWithFirstDay ? 1 : d.getDate();

  const padZeroMonth = month < 10 ? `0${month}` : `${month}`;
  const padZeroDay = day < 10 ? `0${day}` : `${day}`;
  return `${year}${padZeroMonth}${padZeroDay}`;
}

export function parseDateFromString(
  dateString: string,
  endOfDay: boolean = false,
) {
  const year = parseInt(dateString.substring(0, 4), 10);
  const month = parseInt(dateString.substring(4, 6), 10) - 1;
  const day = parseInt(dateString.substring(6, 8), 10);

  if (endOfDay) {
    return new Date(year, month, day, 23, 59, 59);
  } else {
    return new Date(year, month, day);
  }
}
