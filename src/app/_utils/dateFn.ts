/**
 *
 * @returns Date를 yyyymmdd  형식으로 변환
 */
export function convertDateFormat(d?: Date | string | null) {
  let date;

  if (!d) {
    date = new Date();
  } else {
    date = new Date(d);
  }

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `${year}${month}${day}`;
}

/**
 *
 * @returns yyyymmdd 형식으로 리턴, 인자가 true면 yyyymm01로 리턴
 */
export function setDateFormat(firstDay: boolean = false) {
  const date = new Date();

  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = firstDay ? "01" : date.getDate().toString().padStart(2, "0");

  return `${year}${month}${day}`;
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

export function isValidDateFormat(dateString: string | null): boolean {
  const regex = /^\d{4}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/;
  return dateString !== null && regex.test(dateString);
}

export function formatDateInDash(dateString: string) {
  const year = dateString.substring(0, 4);
  const month = dateString.substring(4, 6);
  const day = dateString.substring(6, 8);

  return `${year}-${month}-${day}`;
}
