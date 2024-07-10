import React from "react";
import { TextInput } from "flowbite-react";

import Manage from "../../Manage/Manage";
import { EditInputProps } from "@/app/_types/type";

export default function TitleInput({
  register,
  error,
  disabled,
}: EditInputProps) {
  return (
    <Manage.ContentArea>
      <Manage.Label className="flex">
        <span
          className={`flex w-16 items-center justify-center text-xl ${error ? " text-red-500" : ""}`}
        >
          제목
        </span>
        <Manage.Content>
          <TextInput
            {...register("title", {
              required: true,
            })}
            style={{ fontSize: "0.75rem", lineHeight: "1rem" }}
            disabled={disabled}
            spellCheck={false}
            id="title"
            name="title"
            type="text"
            maxLength={40}
            className="font-mono"
          />
        </Manage.Content>
      </Manage.Label>
    </Manage.ContentArea>
  );
}
