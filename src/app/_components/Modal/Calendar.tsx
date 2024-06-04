"use client";

import { useState } from "react";
import { Button, Modal } from "flowbite-react";
import { FaRegCalendarAlt } from "react-icons/fa";

import MainCalendar from "../Calendar/MainCalendar";

export function CalendarFilter() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Button
        className="hidden md:block"
        color="light"
        onClick={() => setOpenModal(true)}
      >
        <FaRegCalendarAlt />
      </Button>

      <Modal
        size="2xl"
        position="center"
        dismissible
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>검색할 날짜를 선택해주세요.</Modal.Header>
        <Modal.Body>
          <div className="flex h-full w-full flex-col items-center justify-center">
            <MainCalendar setOpenModal={setOpenModal} />
          </div>
        </Modal.Body>
        <Modal.Footer className="flex items-center justify-center">
          <Button color="gray" onClick={() => setOpenModal(false)}>
            취소
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
