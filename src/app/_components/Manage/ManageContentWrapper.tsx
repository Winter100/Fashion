import { ComponentProps } from "react";

interface ManageContentWrapperProps extends ComponentProps<"ul"> {
  children: React.ReactNode;
  className?: string;
}

export default function ManageContentWrapper({
  children,
  className = "",
  ...props
}: ManageContentWrapperProps) {
  return (
    <ul
      className={`flex flex-col rounded-2xl bg-backgroundOne p-4 ${className}`}
      {...props}
    >
      {children}
    </ul>
  );
}
