"use client";

import { Button, Dropdown } from "flowbite-react";
import { FaRegTrashCan } from "react-icons/fa6";

import { TAG_NAME } from "@/app/_utils/constant";
import { convertToDateName, convertToTag } from "@/app/_utils/convertToTag";
import DeleteBtn from "../../Modal/DeleteBtn";

interface MyFahsionListTitleType {
  setTagFilter: (value: string) => void;
  setDateFilter: (value: "up" | "down") => void;
  onDelete: () => void;
  isLoading: boolean;
  disabled: boolean;
  tagFilter: string;
  dateFilter: string;
}

export default function MyFashionListTitle({
  setTagFilter,
  setDateFilter,
  onDelete,
  isLoading,
  disabled,
  tagFilter,
  dateFilter,
}: MyFahsionListTitleType) {
  return (
    <ul>
      <li className="grid grid-cols-6 items-center justify-items-center text-base md:text-2xl">
        <div>사진</div>
        <div>제목</div>
        <div>
          <Dropdown label={convertToDateName(dateFilter)} inline>
            <Dropdown.Item onClick={() => setDateFilter("down")}>
              최신 순
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setDateFilter("up")}>
              오래된 순
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div>
          <Dropdown label={convertToTag(tagFilter).replace("?", "")} inline>
            <Dropdown.Item onClick={() => setTagFilter(TAG_NAME.all)}>
              모두 보기
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setTagFilter(TAG_NAME.today)}>
              오늘 어때?
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setTagFilter(TAG_NAME.tomorrow)}>
              내일 어때?
            </Dropdown.Item>
            <Dropdown.Item onClick={() => setTagFilter(TAG_NAME.this)}>
              이거 어때?
            </Dropdown.Item>
          </Dropdown>
        </div>
        <div>수정</div>
        <div>
          {disabled ? (
            <Button disabled color="light" title="삭제">
              <FaRegTrashCan />
            </Button>
          ) : (
            <DeleteBtn
              onDelete={onDelete}
              isLoading={isLoading}
              disabled={disabled}
              color="light"
              size="md"
            />
          )}
        </div>
      </li>
    </ul>
  );
}
