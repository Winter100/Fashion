export default function SubMenuList({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return <ul className={className}>{children}</ul>;
}
