"use client";

import { useCreate } from "@/app/_hooks/useFashion";
import Write from "@/app/_components/Fashion/Edit/Edit";

export default function Page() {
  const { onSubmit, submitLoading } = useCreate();

  return (
    <div className="layout-max-width m-auto flex h-full flex-col">
      <Write
        onSubmit={onSubmit}
        btnText="등 록"
        submitLoading={submitLoading}
      />
    </div>
  );
}
