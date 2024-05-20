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

Manage.Title = ManageTitle;
Manage.Description = ManageDescription;
Manage.ContentWrapper = ManageContentWrapper;
Manage.ContentArea = ManageContentArea;
Manage.Label = ManageLabel;
Manage.Content = ManageContent;
