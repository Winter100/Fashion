"use client";

import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { TAG_NAME } from "@/app/_utils/constant";
import { convertPadZeroDate, parseDateFromString } from "@/app/_utils/dateFn";
import { setFashionRoute } from "@/app/_utils/setFashionRoute";
import { useSearchName } from "@/app/_hooks/useSearchName";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const today = new Date();

export default function MainCalendar() {
  const { start, end } = useSearchName();
  const { tag } = useParams();
  const router = useRouter();

  const [value, setValue] = useState<Value>(() => [
    new Date(parseDateFromString(start)),
    new Date(parseDateFromString(end)),
  ]);

  function onChange(nextValue: Value) {
    if (Array.isArray(nextValue) && nextValue.length >= 2) {
      setValue(nextValue);
      router.push(
        setFashionRoute(
          TAG_NAME.fashion,
          tag as string,
          1,
          convertPadZeroDate(nextValue[0]),
          convertPadZeroDate(nextValue[1]),
        ),
      );
    }
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <Calendar
        onChange={onChange}
        view="month"
        defaultValue={[
          new Date(parseDateFromString(start)),
          new Date(parseDateFromString(end)),
        ]}
        value={value}
        className="border-4 border-red-600"
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
    </div>
  );
}