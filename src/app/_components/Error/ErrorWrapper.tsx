import { memo } from "react";
import { ManageDivProps } from "../Manage/Manage";

const ErrorWrapper = memo(function ErrorWrapper({
  children,
  className,
  ...props
}: ManageDivProps) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
});

export default memo(ErrorWrapper);
