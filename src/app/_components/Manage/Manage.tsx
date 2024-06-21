import { memo } from "react";

import ManageDescription from "./ManageDescription";
import ManageTitle from "./ManageTitle";
import ManageContentWrapper from "./ManageContentWrapper";
import ManageLabel from "./ManageLabel";
import ManageContentArea from "./ManageContentArea";
import ManageContent from "./ManageContent";

export default function Manage({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex h-full flex-col p-2 ${className}`}>{children}</div>
  );
}

Manage.Title = memo(ManageTitle);
Manage.Description = memo(ManageDescription);
Manage.ContentWrapper = memo(ManageContentWrapper);
Manage.ContentArea = memo(ManageContentArea);
Manage.Label = memo(ManageLabel);
Manage.Content = memo(ManageContent);
