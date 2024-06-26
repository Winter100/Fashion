import { ComponentProps } from "react";

interface ManageTitleProps extends ComponentProps<"h3"> {
  children: React.ReactNode;
  className?: string;
}

export default function ManageTitle({
  children,
  className,
  ...props
}: ManageTitleProps) {
  return (
    <h3 className={`cursor-default text-4xl ${className}`} {...props}>
      {children}
    </h3>
  );
}
