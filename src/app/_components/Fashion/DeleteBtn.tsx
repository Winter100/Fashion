"use client";

import { Button, Spinner } from "flowbite-react";

import { useDelete } from "@/app/_hooks/useFashionMethods";

import Modal from "../Modal/Modal";

export default function DeleteBtn() {
  const { deleteFashion, isLoading, setLoading } = useDelete();

  function handleDelete() {
    setLoading(true);
    deleteFashion();
  }

  return (
    <Modal>
      <Modal.OpenBtn name="삭제" className=" text-2xl text-red-600" />
      <Modal.Wrapper>
        <Modal.Title title="경 고" />
        <Modal.Content>
          <span className=" m-auto text-center text-3xl text-black">
            선택한 게시물을 정말 <span className="text-red-600">삭제</span>
            하시겠습니까?
          </span>
        </Modal.Content>
        <Modal.ButtonWrapper
          className="m-auto flex gap-6"
          isProcessing={isLoading}
        >
          <Button color="failure" disabled={isLoading} onClick={handleDelete}>
            <span className="text-xl">
              {!isLoading ? "삭 제" : <Spinner />}
            </span>
          </Button>
        </Modal.ButtonWrapper>
      </Modal.Wrapper>
    </Modal>
  );
}
