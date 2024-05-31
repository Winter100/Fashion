import { Label } from "flowbite-react";

export default function DetailContentArea({
  id,
  KrTitle,
  value,
  className = "",
}: {
  id: string;
  KrTitle: string;
  value: string;
  className?: string;
}) {
  return (
    <>
      <Label htmlFor={id} className="text-xl" value={KrTitle} />
      <p
        id={id}
        className={`whitespace-pre-wrap rounded-xl border border-backgroundTwo  p-2 text-xl ${className}`}
      >
        {value}
      </p>
    </>
  );
}
