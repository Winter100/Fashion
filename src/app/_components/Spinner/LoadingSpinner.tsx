import { Spinner } from "flowbite-react";

export default function LoadingSpinner() {
  return (
    <div className=" flex h-[90dvh] items-center justify-center">
      <Spinner className="w-48" size="2xl" />
    </div>
  );
}
