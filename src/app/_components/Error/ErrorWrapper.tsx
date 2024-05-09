export default function ErrorWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" m-auto flex h-full items-center justify-center text-center text-5xl">
      {children}
    </div>
  );
}
