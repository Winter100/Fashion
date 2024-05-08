/**
 *
 * @ Date를 넣으면 yyyymmdd 형식으로 변환
 * @ 인자가 없다면 오늘 날짜로 리턴
 */
export function mergeDateAndpadZero(d: Date = new Date()): string {
  const year = d.getFullYear(); // 연도
  const month = d.getMonth() + 1; // 월
  const day = d.getDate(); // 일

  const padZeroMonth = month < 10 ? `0${month}` : month.toString();
  const padZeroday = day < 10 ? `0${day}` : day.toString();
  return `${year}${padZeroMonth}${padZeroday}`;
}

export function parseDateFromString(dateString: string) {
  const year = parseInt(dateString.substring(0, 4), 10); // 연도 추출 후 정수로 변환
  const month = parseInt(dateString.substring(4, 6), 10) - 1; // 월 추출 후 정수로 변환, 월은 0부터 시작하므로 1을 뺌
  const day = parseInt(dateString.substring(6, 8), 10); // 일 추출 후 정수로 변환

  return new Date(year, month, day);
}
