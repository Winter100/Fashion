import FashionImage from "../../Common/FashionImage";
import ContentSection from "./ContentSection";
import { DetailType } from "@/app/_types/type";

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
        <div className="flex h-96 w-full flex-col md:h-full md:flex-1">
          <div className="relative h-full">
            <FashionImage className="object-contain" src={image} alt={title} />
          </div>
        </div>
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
