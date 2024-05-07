"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const today = new Date();

export default function MainCalendar() {
  const [value, setValue] = useState<Value>(today);
  const [activeStartDate, setActiveStartDate] = useState(() => new Date());

  const onChange = (nextValue: Value) => {
    // console.log(nextValue);
    setValue(nextValue);
  };

  const goToToday = () => {
    setValue(today);
    setActiveStartDate(today);
  };

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
        calendarType="US"
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
