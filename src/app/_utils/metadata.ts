import { Metadata } from "next";

export function getMetaData() {
  const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_METADATA_BASE as string),
    title: "이 옷 어때?",
    description: "내 패션을 기록하고, 모두에게 자랑해 보세요.",
    openGraph: {
      title: "이 옷 어때?",
      description: "내 패션을 기록하고, 모두에게 자랑해 보세요.",
      type: "website",
      images: [
        {
          url: "/meta-image.png",
          width: 800,
          height: 600,
          alt: "openGraph - Meta Image",
        },
      ],
    },
    twitter: {
      title: "이 옷 어때?",
      description: "내 패션을 기록하고, 모두에게 자랑해 보세요.",
      images: [
        {
          url: "/meta-image.png",
          width: 800,
          height: 600,
          alt: "twitter - Meta Image",
        },
      ],
    },
  };

  return metadata;
}
