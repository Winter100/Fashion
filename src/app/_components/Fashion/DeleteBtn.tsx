"use client";

import { Button } from "flowbite-react";

import useDelete from "@/app/_hooks/useDelete";
import Modal from "../Modal/Modal";

export default function DeleteBtn({ itemId }: { itemId: string }) {
  const { deleteFashion, isPending } = useDelete();

  function handleDelete() {
    deleteFashion({ id: itemId });
  }

  return (
    <Modal>
      <Modal.OpenBtn name="삭제" className=" text-2xl text-red-600" />
      <Modal.Wrapper>
        <Modal.Title title="경 고" />
        <Modal.Content>
          <span className=" m-auto text-center text-3xl">
            선택한 게시물을 정말 <span className="text-red-600">삭제</span>
            하시겠습니까?
          </span>
        </Modal.Content>
        <Modal.ButtonWrapper
          className="m-auto flex gap-6"
          isProcessing={isPending}
        >
          <Button
            color="failure"
            disabled={isPending}
            isProcessing={isPending}
            onClick={handleDelete}
          >
            <span className="text-xl">삭 제</span>
          </Button>
        </Modal.ButtonWrapper>
      </Modal.Wrapper>
    </Modal>
  );
}
