import { Metadata } from "next";

import { readFashionApi } from "@/app/_api/fashionApi";
import Detail from "@/app/_components/Fashion/Detail/Detail";
import { META_DATA } from "@/app/_constant/constant";
import generateImageMetadata from "@/app/_utils/generateImageMetadata";

type Props = {
  params: { tag: string; id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tag, id } = params;
  const detailData = await readFashionApi(id, tag);

  const { title, image, content, user } = detailData;

  const titleMetaData = title || META_DATA.title;
  const contentMetaData = content || META_DATA.content;
  const imageMetaData = generateImageMetadata(image, title);
  const userMetaData = user || "";
  const keywords = META_DATA.keywords;

  return {
    title: titleMetaData,
    description: contentMetaData,
    keywords,
    authors: userMetaData,
    openGraph: {
      title: titleMetaData,
      description: contentMetaData,
      type: "website",
      images: [imageMetaData],
    },
    twitter: {
      title: titleMetaData,
      description: contentMetaData,
      images: [imageMetaData],
    },
  };
}

export default function Page() {
  return (
    <>
      <Detail />
    </>
  );
}
