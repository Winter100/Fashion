import React from "react";
import { Textarea } from "flowbite-react";

import Manage from "../../Common/Manage/Manage";
import { EditInputProps } from "@/app/_types/type";

export default function ContentTextarea({
  register,
  error,
  disabled,
}: EditInputProps) {
  return (
    <Manage.ContentArea>
      <Manage.Label className=" flex ">
        <span
          className={`flex w-16 items-center justify-center text-xl ${error ? " text-red-500" : ""}`}
        >
          내용
        </span>
        <Manage.Content>
          <Textarea
            disabled={disabled}
            {...register("content", {
              required: true,
            })}
            id="content"
            name="content"
            spellCheck={false}
            className="resize-none font-mono text-xs "
            rows={17}
          />
        </Manage.Content>
      </Manage.Label>
    </Manage.ContentArea>
  );
}
