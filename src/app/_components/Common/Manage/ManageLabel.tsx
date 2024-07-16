import { ComponentProps } from "react";

interface ManageLabelProps extends ComponentProps<"label"> {
  children: React.ReactNode;
}

export default function ManageLabel({ children, ...props }: ManageLabelProps) {
  return <label {...props}>{children}</label>;
}
