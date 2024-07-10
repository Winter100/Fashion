"use client";

import Edit from "@/app/_components/Fashion/Edit/Edit";
import LoadingSpinner from "@/app/_components/Spinner/LoadingSpinner";
import { useReadFashionEditData, useUpdate } from "@/app/_hooks/useFashion";

export default function Page() {
  const { onSubmit, submitLoading } = useUpdate();
  const { isLoading, inititem } = useReadFashionEditData();

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="layout-max-width m-auto flex h-full flex-col">
      <Edit
        onSubmit={onSubmit}
        btnText="수 정"
        item={inititem}
        submitLoading={submitLoading}
      />
    </div>
  );
}
