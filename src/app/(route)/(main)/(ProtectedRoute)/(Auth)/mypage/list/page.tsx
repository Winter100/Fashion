"use client";

import { useState } from "react";

import { Button } from "flowbite-react";
import { FaRegTrashCan } from "react-icons/fa6";

import DeleteBtn from "@/app/_components/Modal/DeleteBtn";
import { useDelete } from "@/app/_hooks/useFashionMethods";
import { DeleteListType } from "@/app/_types/type";
import MyFashionList from "@/app/_components/Fashion/MyFashionList";

export default function Page() {
  const [checkedIds, setCheckedIds] = useState<DeleteListType[]>([]);

  function handleCheck(id: string, tag: string) {
    const isAlreadyChecked = checkedIds.some((item) => item.id === id);
    if (isAlreadyChecked) {
      setCheckedIds(checkedIds.filter((item) => item.id !== id));
    } else {
      setCheckedIds([...checkedIds, { id, tag }]);
    }
  }

  const { deleteFashion, isLoading, setLoading } = useDelete();

  function handleDelete() {
    setLoading(true);
    deleteFashion(checkedIds, {
      onSuccess: () => {
        setCheckedIds([]);
        setLoading(false);
      },
    });
  }

  return (
    <div>
      <h1 className="my-6 text-center text-5xl">기록 관리 하기</h1>
      <ul>
        <li className="grid grid-cols-6 items-center justify-items-center text-3xl">
          <p>사진</p>
          <p>제목</p>
          <p>등록일</p>
          <p>태그</p>
          <p>수정</p>
          <p>
            {checkedIds.length >= 1 ? (
              <DeleteBtn
                onDelete={handleDelete}
                isLoading={isLoading}
                color="light"
                size="md"
              />
            ) : (
              <Button title="삭제" color="light" disabled>
                <FaRegTrashCan />
              </Button>
            )}
          </p>
        </li>
      </ul>

      <MyFashionList checkedIds={checkedIds} handleCheck={handleCheck} />
    </div>
  );
}
