"use client";

import EditMenuList from "@/app/_components/Menu/SubMenuList";
import EditBtn from "@/app/_components/Fashion/EditBtn";
import DeleteBtn from "@/app/_components/Fashion/DeleteBtn";
import Detail from "@/app/_components/Fashion/Detail";
import LoadingSpinner from "@/app/_components/Spinner/LoadingSpinner";
import useDetail from "@/app/_hooks/useDetail";
import useUser from "@/app/_hooks/useUser";

export default function Page() {
  const { isLoading, data } = useDetail();
  const { user } = useUser();

  if (isLoading) return <LoadingSpinner />;

  const itemId = data?.user_id;
  const isSameUser = itemId === user?.id;

  return (
    <div className="flex h-full flex-col">
      {/* <EditMenuList className="mb-2 mt-2 flex h-8 justify-center gap-6 ">
        {isSameUser && <EditBtn itemId={data?.id} />}
        {isSameUser && <DeleteBtn itemId={data?.id} />}
      </EditMenuList> */}
      <Detail user={user} {...data} />
    </div>
  );
}
