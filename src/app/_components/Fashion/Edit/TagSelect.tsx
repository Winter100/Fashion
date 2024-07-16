import React from "react";
import { Select } from "flowbite-react";

import Manage from "../../Common/Manage/Manage";
import { TAG_NAME } from "@/app/_constant/constant";
import { EditInputProps } from "@/app/_types/type";
import { convertToTag } from "@/app/_lib/utils/convertToTag";

export default function TagSelect({
  register,
  error,
  disabled,
}: EditInputProps) {
  return (
    <Manage.ContentArea>
      <Manage.Label className=" flex">
        <span
          className={`flex w-16 items-center justify-center text-xl ${error ? " text-red-500" : ""}`}
        >
          태그
        </span>
        <Manage.Content>
          <Select
            {...register("tag", {
              required: true,
            })}
            style={{ fontSize: "20px" }}
            id="tag"
            name="tag"
            disabled={disabled}
          >
            <option disabled value="">
              게시판을 선택해주세요
            </option>
            <option value={TAG_NAME.today}>
              {convertToTag(TAG_NAME.today)}
            </option>
            <option value={TAG_NAME.tomorrow}>
              {convertToTag(TAG_NAME.tomorrow)}
            </option>
            <option value={TAG_NAME.this}>{convertToTag(TAG_NAME.this)}</option>
          </Select>
        </Manage.Content>
      </Manage.Label>
    </Manage.ContentArea>
  );
}
