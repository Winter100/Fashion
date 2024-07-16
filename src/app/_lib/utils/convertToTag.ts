import { MY_FILTER_MAPPINGS, TAG_MAPPINGS } from "@/app/_constant/constant";

export function convertToTag(tag: string) {
  return TAG_MAPPINGS[tag] || "";
}

export function convertToDateName(name: string) {
  return MY_FILTER_MAPPINGS[name] || "";
}
