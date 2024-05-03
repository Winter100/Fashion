"use client";

import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";

import EditMenuList from "@/app/_components/Menu/SubMenuList";
import EditBtn from "@/app/_components/Fashion/EditBtn";
import DeleteBtn from "@/app/_components/Fashion/DeleteBtn";
import Detail from "@/app/_components/Fashion/Detail";
import LoadingSpinner from "@/app/_components/Spinner/LoadingSpinner";
import ErrorWrapper from "@/app/_components/Error/ErrorWrapper";

import { useDetail } from "@/app/_hooks/useFashionMethods";
import { useUser } from "@/app/_hooks/useAuth";

export default function Page() {
  const router = useRouter();
  const { isLoading, data } = useDetail();
  const { user } = useUser();

  if (isLoading) return <LoadingSpinner />;

  const itemId = data?.user_id;
  const isSameUser = itemId === user?.id;

  if (!data) {
    return <ErrorWrapper>등록된 기록이 없습니다.</ErrorWrapper>;
  }

  return (
    <div className="layout-max-width m-auto flex h-full w-full flex-col border">
      <div className="h-13 flex w-full items-center justify-between">
        <Button
          className="h-full"
          onClick={() => router.back()}
          size="md"
          color="green"
        >
          <span className="text-xl">뒤로가기</span>
        </Button>
      </div>
      {/* <EditMenuList className="flex h-8 justify-center gap-6 ">
        {isSameUser && <EditBtn />}
        {isSameUser && <DeleteBtn />}
      </EditMenuList> */}
      <Detail {...data} />
      <div className=" h-96 border">댓글자리</div>
    </div>
  );
}
