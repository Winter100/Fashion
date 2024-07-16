import { DetailType } from "@/app/_types/type";
import ImageSection from "./ImageSection";
import ContentSection from "./ContentSection";

export default function DetailItem({
  user,
  title,
  content,
  image,
  created_at,
}: DetailType) {
  return (
    <div className="flex">
      <div className="my-1 flex min-h-[500px] w-full flex-col items-center gap-2 md:flex-row">
        <ImageSection image={image} />
        <ContentSection
          user={user}
          title={title}
          content={content}
          created_at={created_at}
        />
      </div>
    </div>
  );
}
