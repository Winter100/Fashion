"use client";

import useDelete from "@/app/_hooks/useDelete";
import Modal from "../Modal/Modal";

export default function DeleteBtn({ itemId }: { itemId: string }) {
  const { deleteFashion, isPending } = useDelete();

  function handleDelete() {
    deleteFashion({ id: itemId });
  }
  return (
    <Modal>
      <Modal.OpenModalBtn name={"삭제"} />
      <Modal.Wrapper>
        <Modal.Title title="삭제" />
        <Modal.Content content="정말 삭제 하시겠습니까?" />
        <Modal.ButtonWrapper>
          <button
            className="text-2xl text-red-600 hover:text-3xl"
            disabled={isPending}
            onClick={handleDelete}
          >
            <span>삭제</span>
          </button>
        </Modal.ButtonWrapper>
      </Modal.Wrapper>
    </Modal>
  );
}
