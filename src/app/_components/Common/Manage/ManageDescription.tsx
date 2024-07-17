import { ManageDivProps } from "./Manage";

export default function ManageDescription({
  children,
  className = "",
  ...props
}: ManageDivProps) {
  return (
    <div
      aria-describedby="description"
      className={`mx-2 cursor-default  text-xl ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
