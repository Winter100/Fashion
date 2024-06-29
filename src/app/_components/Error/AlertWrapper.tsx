import { memo } from "react";
import { ManageDivProps } from "../Manage/Manage";

interface AlertWrapper extends ManageDivProps {
  description?: string;
}

const AlertWrapper = memo(function AlertWrapper({
  children,
  description = "등록된 기록이 없습니다.",
  className = "flex h-full w-full cursor-default flex-col items-center justify-center text-center text-4xl",
  ...props
}: AlertWrapper) {
  return (
    <div
      className={`flex h-full w-full cursor-default flex-col items-center justify-center text-center text-4xl ${className} `}
      {...props}
    >
      <p>{description}</p>
      <div>{children}</div>
    </div>
  );
});

export default memo(AlertWrapper);
