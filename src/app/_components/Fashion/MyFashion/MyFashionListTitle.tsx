"use client";

import { Button, Dropdown } from "flowbite-react";
import { FaRegTrashCan } from "react-icons/fa6";

import DeleteBtn from "../../Modal/DeleteBtn";
import { convertToDateName, convertToTag } from "@/app/_lib/utils/convertToTag";
import { TAG_NAME } from "@/app/_constant/constant";
import { useMyFashionFilter } from "@/app/_provider/MyFashionFilterProvider";
import { useMyFashionDelete } from "@/app/_provider/MyFashionDeleteProvider";

export default function MyFashionListTitle() {
  const { dateFilter, setDateFilter, setTagFilter, tagFilter } =
    useMyFashionFilter();
  const { isLoading, disabled, handleDelete } = useMyFashionDelete();

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
              onDelete={handleDelete}
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
