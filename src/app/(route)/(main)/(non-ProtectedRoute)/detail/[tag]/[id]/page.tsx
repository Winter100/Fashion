import { Metadata } from "next";

import generateImageMetadata from "@/app/_lib/utils/generateImageMetadata";
import Detail from "@/app/_components/Fashion/Detail/Detail";
import { META_DATA } from "@/app/_constant/constant";
import { readFashion } from "@/app/_lib/supabase/fashion";
import { getMetaData } from "@/app/_lib/utils/metadata";

type Props = {
  params: { tag: string; id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const { tag, id } = params;

    const detailData = await readFashion(id, tag);
    const { title, image, content, user } = detailData;

    const titleMetaData = title ?? META_DATA.title;
    const contentMetaData = content ?? META_DATA.content;
    const imageMetaData = generateImageMetadata(image, title);
    const userMetaData = user ?? "";
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
  } catch (e) {}
  return getMetaData();
}

export default function Page() {
  return (
    <>
      <Detail />
    </>
  );
}
