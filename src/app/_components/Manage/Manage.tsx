import ManageDescription from "./ManageDescription";
import ManageTitle from "./ManageTitle";
import ManageContentWrapper from "./ManageContentWrapper";
import ManageLabel from "./ManageLabel";
import ManageContentArea from "./ManageContentArea";
import ManageContent from "./ManageContent";

export default function ManageWrapper({
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

ManageWrapper.Title = ManageTitle;
ManageWrapper.Description = ManageDescription;
ManageWrapper.ContentWrapper = ManageContentWrapper;
ManageWrapper.ContentArea = ManageContentArea;
ManageWrapper.Label = ManageLabel;
ManageWrapper.Content = ManageContent;
