"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { useQueryString } from "@/app/_hooks/useQueryString";
import { TAG_NAME } from "@/app/_constant/constant";
import {
  convertDateFormat,
  parseDateFromString,
} from "@/app/_lib/utils/dateFn";
import { setFashionRoute } from "@/app/_lib/utils/setFashionRoute";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const today = new Date();

export default function MainCalendar({
  setOpenModal,
}: {
  setOpenModal: (close: false) => void;
}) {
  const { validStart, validEnd } = useQueryString();
  const { tag } = useParams();
  const router = useRouter();

  const [value, setValue] = useState<Value>(() => [
    new Date(parseDateFromString(validStart)),
    new Date(parseDateFromString(validEnd)),
  ]);

  function onChange(nextValue: Value) {
    if (Array.isArray(nextValue) && nextValue.length >= 2) {
      setValue(nextValue);
      router.push(
        setFashionRoute(
          TAG_NAME.fashion,
          tag as string,
          1,
          convertDateFormat(nextValue[0]),
          convertDateFormat(nextValue[1]),
        ),
      );
    }
    setOpenModal(false);
  }

  return (
    <Calendar
      onChange={onChange}
      view="month"
      defaultValue={[
        new Date(parseDateFromString(validStart)),
        new Date(parseDateFromString(validEnd)),
      ]}
      value={value}
      minDetail="year"
      maxDetail="month"
      maxDate={today}
      prev2Label={null}
      next2Label={null}
      calendarType="gregory"
      selectRange={true}
      showNeighboringMonth={false}
      formatDay={(_, date) => date.toLocaleString("en", { day: "numeric" })}
    />
  );
}
