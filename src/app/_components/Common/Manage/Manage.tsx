import { ComponentProps, memo } from "react";

import ManageDescription from "./ManageDescription";
import ManageTitle from "./ManageTitle";
import ManageContentWrapper from "./ManageContentWrapper";
import ManageLabel from "./ManageLabel";
import ManageContentArea from "./ManageContentArea";
import ManageContent from "./ManageContent";

export interface ManageDivProps extends ComponentProps<"div"> {
  children: React.ReactNode;
  className?: string;
}

export default function Manage({
  children,
  className = "",
  ...props
}: ManageDivProps) {
  return (
    <div className={`flex h-full flex-col p-2 ${className}`} {...props}>
      {children}
    </div>
  );
}

Manage.Title = memo(ManageTitle);
Manage.Description = memo(ManageDescription);
Manage.ContentWrapper = memo(ManageContentWrapper);
Manage.ContentArea = memo(ManageContentArea);
Manage.Label = memo(ManageLabel);
Manage.Content = memo(ManageContent);
