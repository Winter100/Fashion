import { Metadata } from "next";

import generateImageMetadata from "./generateImageMetadata";
import { META_DATA } from "@/app/_constant/constant";

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
