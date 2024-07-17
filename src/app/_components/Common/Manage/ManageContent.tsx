import { ManageDivProps } from "./Manage";

export default function ManageContent({
  children,
  className = "",
  ...props
}: ManageDivProps) {
  return (
    <div className={`flex-1 ${className}`} {...props}>
      {children}
    </div>
  );
}
