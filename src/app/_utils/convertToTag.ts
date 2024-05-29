import { TAG_NAME } from "./constant";

export function convertToTag(tag: string) {
  if (tag === TAG_NAME.today) return "오늘 어때?";
  if (tag === TAG_NAME.tomorrow) return "내일 어때?";
  if (tag === TAG_NAME.this) return "이거 어때?";
  if (tag === TAG_NAME.write) return "기록 남기기";
  if (tag === TAG_NAME.all) return "모두 보기";

  return "";
}

export function convertToDateName(name: string) {
  if (name === "up") return "오래된 순";
  if (name === "down") return "최신 순";

  return "";
}
