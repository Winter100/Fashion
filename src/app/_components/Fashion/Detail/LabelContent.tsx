import { ComponentProps } from "react";

import Manage from "../../Common/Manage/Manage";

type LabelContentProps = ComponentProps<"div"> & {
  label: string;
  content: string;
  className?: string;
};

export default function LabelContent({
  label,
  content,
  className,
}: LabelContentProps) {
  return (
    <Manage.ContentArea>
      <Manage.Label className="flex items-center">
        <span className="flex w-16 items-center justify-center">{label}</span>
        <Manage.Content
          className={`rounded-xl border border-gray-400 px-2 py-1 ${className}`}
        >
          <p>{content}</p>
        </Manage.Content>
      </Manage.Label>
    </Manage.ContentArea>
  );
}
