import { ComponentProps } from "react";

interface ManageContentAreaProps extends ComponentProps<"li"> {
  children: React.ReactNode;
}
export default function ManageContentArea({
  children,
  ...props
}: ManageContentAreaProps) {
  return <li {...props}>{children}</li>;
}
