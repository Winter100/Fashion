"use client";

import { useState } from "react";
import { Button, Spinner, Modal } from "flowbite-react";
import { FaRegTrashCan } from "react-icons/fa6";
import { HiOutlineExclamationCircle } from "react-icons/hi";

import { DeletePropsType } from "@/app/_types/type";

export default function DeleteBtn({ onDelete, isLoading }: DeletePropsType) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button title="삭제" color="light" onClick={() => setOpenModal(true)}>
        <FaRegTrashCan />
      </Button>
      <Modal
        show={openModal}
        size="md"
        onClose={() => setOpenModal(false)}
        popup
      >
        <Modal.Header />
        <Modal.Body>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-8 w-8 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-2xl font-normal text-gray-500 dark:text-gray-400">
              선택한 기록을 <span className="text-red-600">삭제</span>
              하시겠습니까?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={() => setOpenModal(false)}>
                <span className=" text-xl">취소</span>
              </Button>
              <Button disabled={isLoading} color="gray" onClick={onDelete}>
                {!isLoading ? (
                  <span className=" text-xl">네, 삭제 하겠습니다</span>
                ) : (
                  <Spinner />
                )}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
