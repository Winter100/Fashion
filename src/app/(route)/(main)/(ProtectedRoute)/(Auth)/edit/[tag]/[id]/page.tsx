"use client";

import { useReadFashionEditData, useUpdate } from "@/app/_hooks/useFashion";
import LoadingSpinner from "@/app/_components/Common/LoadingSpinner";
import Edit from "@/app/_components/Fashion/Edit/Edit";

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
