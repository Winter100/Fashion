import { Metadata } from "next";

import { META_DATA } from "../_constant/constant";
import generateImageMetadata from "./generateImageMetadata";

export function getMetaData() {
  const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE as string),
    title: META_DATA.title,
    description: META_DATA.content,
    keywords: META_DATA.keywords,

    openGraph: {
      title: META_DATA.title,
      description: META_DATA.content,
      type: "website",
      images: [generateImageMetadata(META_DATA.image, META_DATA.title)],
    },
    twitter: {
      title: META_DATA.title,
      description: META_DATA.content,
      images: [generateImageMetadata(META_DATA.image, META_DATA.title)],
    },
  };

  return metadata;
}
