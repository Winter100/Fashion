import { TAG_NAME } from "./constant";

export function convertToTag(tag: string) {
  if (tag === TAG_NAME.today) return "오늘 어때?";
  if (tag === TAG_NAME.tomorrow) return "내일 어때?";
  if (tag === TAG_NAME.this) return "이거 어때?";

  return "";
}
