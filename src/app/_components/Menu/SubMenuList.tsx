export default function SubMenuList({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ul className=" mb-2 mt-2 flex justify-end gap-4">{children}</ul>;
}
