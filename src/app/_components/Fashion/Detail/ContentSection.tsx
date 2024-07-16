import Manage from "../../Common/Manage/Manage";
import LabelContent from "./LabelContent";
import { convertToKST } from "@/app/_lib/utils/convertToKST";
import { DetailType } from "@/app/_types/type";

type ContentSectionProps = Omit<DetailType, "image">;

export default function ContentSection({
  user,
  title,
  content,
  created_at,
}: ContentSectionProps) {
  return (
    <div className="h-full w-full flex-1">
      <Manage className="w-full text-lg">
        <Manage.ContentWrapper className="flex h-full flex-col gap-4">
          <LabelContent label="제목" content={title} />
          <LabelContent label="글쓴이" content={user} />
          <LabelContent label="작성일" content={convertToKST(created_at)} />
          <LabelContent
            label="내용"
            content={content}
            className="h-64 overflow-y-auto whitespace-pre-wrap"
          />
        </Manage.ContentWrapper>
      </Manage>
    </div>
  );
}
