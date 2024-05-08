"use client";

import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { TAG_NAME } from "@/app/_utils/constant";
import {
  mergeDateAndpadZero,
  parseDateFromString,
} from "@/app/_utils/mergeDateAndpadZero";
import { setFashionRoute } from "@/app/_utils/setFashionRoute";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const today = new Date();

export default function MainCalendar() {
  const searchParams = useSearchParams();
  const date = parseDateFromString(searchParams.get("date") as string);
  const [value, setValue] = useState<Value>(date);
  const [activeStartDate, setActiveStartDate] = useState(today);
  const { tag } = useParams();
  const router = useRouter();

  function onChange(nextValue: Value) {
    const date = new Date(nextValue as Date);
    const convertDate = mergeDateAndpadZero(date);

    router.push(
      setFashionRoute(TAG_NAME.fashion, tag as string, 1, convertDate),
    );
    setValue(nextValue);
  }

  function goToToday() {
    // setValue(today);
    setActiveStartDate(today);
    onChange(today);
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="calendar-header">
        <button
          onClick={goToToday}
          className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
        >
          오늘
        </button>
      </div>
      <Calendar
        onChange={onChange}
        value={value}
        activeStartDate={activeStartDate}
        onActiveStartDateChange={({ activeStartDate }) =>
          setActiveStartDate(activeStartDate as Date)
        }
        className="border-4 border-red-600"
        minDetail="year"
        maxDetail="month"
        prev2Label={null}
        next2Label={null}
        calendarType="gregory"
        showNeighboringMonth={false}
        formatDay={(_, date) => date.toLocaleString("en", { day: "numeric" })}
        tileDisabled={({ date }) =>
          date > new Date(new Date().setHours(0, 0, 0, 0))
        }
        // tileContent={({ activeStartDate, date, view }) =>
        //   view === "month" && date.getDay() === 0 ? <p>!</p> : null
        // }
      />
    </div>
  );
}
