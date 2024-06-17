import { META_DATA } from "../_constant/constant";

export default function generateImageMetadata(url: string, title: string) {
  return {
    url: url ? url : META_DATA.image,
    width: META_DATA.width,
    height: META_DATA.heigth,
    alt: `${title} - 이미지`,
  };
}
