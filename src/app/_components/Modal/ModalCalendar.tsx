"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button, Modal } from "flowbite-react";
import { FaRegCalendarAlt } from "react-icons/fa";

import MainCalendar from "../Common/MainCalendar";

export function CalendarFilter() {
  const [openModal, setOpenModal] = useState(false);
  const pathName = usePathname();

  const isFashionRoute = pathName.includes("/fashion");

  return (
    <>
      <div className=" visible ml-1 flex h-[40px] min-w-14 items-center justify-center">
        {isFashionRoute && (
          <Button
            title="날짜 필터"
            aria-label="날짜 필터"
            color="light"
            onClick={() => setOpenModal(true)}
          >
            <FaRegCalendarAlt />
          </Button>
        )}
      </div>

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
      </Modal>
    </>
  );
}
